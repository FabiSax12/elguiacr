// JSON-LD builders. Every value comes from the dictionaries, the data modules or site.ts, so the
// structured data never drifts from the visible copy. Layout.astro merges the nodes into one @graph.
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import type { AudienceId } from './audiences';
import { categoryLabels, categoryIds, type Experience } from './experiences';
import { getLanding, landingPageKeyByAudience } from './landings';
import { getPageUrl, type PageKey } from './routes';
import { businessCountryCode, businessLocality, businessRegion, contactEmail, instagramUrl, siteName, whatsappNumber } from './site';
import { defaultLocale, locales, SITE_URL, type Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

export type SchemaNode = Record<string, unknown>;

const organizationId = `${SITE_URL}/#organization`;
const websiteId = (locale: Locale) => `${getPageUrl('home', locale)}#website`;
const webPageId = (url: string) => `${url}#webpage`;
const breadcrumbId = (url: string) => `${url}#breadcrumb`;

const costaRica = { '@type': 'Country', name: 'Costa Rica' };

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).href;
}

// Social share crop (og:image, twitter:image), also used as the page image in JSON-LD.
export async function getShareImage(image: ImageMetadata) {
  const { src, attributes } = await getImage({ src: image, width: 1200, height: 630, fit: 'cover', format: 'jpg' });
  return { url: absoluteUrl(src), width: Number(attributes.width), height: Number(attributes.height) };
}

// Short page name, used for breadcrumbs and service names.
export function getPageName(pageKey: PageKey, locale: Locale): string {
  const { nav, footer } = useTranslations(locale);
  const names: Record<PageKey, string> = { ...nav.links, ...footer.legalLinks, ...footer.servicesLinks };
  return names[pageKey];
}

interface SiteSchemaInput {
  locale: Locale;
  imageUrl: string;
}

// Organization and WebSite: identical on every page, linked by @id.
export function getSiteSchema({ locale, imageUrl }: SiteSchemaInput): SchemaNode[] {
  const t = useTranslations(locale);
  const otherLocales = locales.filter((code) => code !== locale);
  const translationKey = locale === defaultLocale ? 'workTranslation' : 'translationOfWork';

  return [
    {
      '@type': 'TravelAgency',
      '@id': organizationId,
      name: siteName,
      url: getPageUrl('home', defaultLocale),
      logo: { '@type': 'ImageObject', url: absoluteUrl('/icon-512.png'), width: 512, height: 512 },
      image: imageUrl,
      description: t.meta.description,
      telephone: `+${whatsappNumber}`,
      email: contactEmail,
      sameAs: [instagramUrl],
      founder: { '@type': 'Person', name: t.founder.name },
      address: { '@type': 'PostalAddress', addressLocality: businessLocality, addressRegion: businessRegion, addressCountry: businessCountryCode },
      areaServed: costaRica,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+${whatsappNumber}`,
        email: contactEmail,
        availableLanguage: [...locales],
        areaServed: costaRica,
      },
      knowsAbout: ['Costa Rica', ...categoryIds.map((id) => categoryLabels[id][locale])],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId(locale),
      name: siteName,
      url: getPageUrl('home', locale),
      inLanguage: locale,
      publisher: { '@id': organizationId },
      [translationKey]: otherLocales.map((code) => ({ '@id': websiteId(code) })),
    },
  ];
}

interface PageSchemaInput {
  locale: Locale;
  pageKey: PageKey;
  title: string;
  description: string;
  imageUrl: string;
}

// WebPage plus, on inner pages, a Home > Page breadcrumb.
export function getPageSchema({ locale, pageKey, title, description, imageUrl }: PageSchemaInput): SchemaNode[] {
  const url = getPageUrl(pageKey, locale);
  const isHome = pageKey === 'home';
  const page: SchemaNode = {
    '@type': 'WebPage',
    '@id': webPageId(url),
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { '@id': websiteId(locale) },
    about: { '@id': organizationId },
    primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
    ...(isHome ? {} : { breadcrumb: { '@id': breadcrumbId(url) } }),
  };
  if (isHome) return [page];

  const crumbs: [PageKey, string][] = [['home', getPageUrl('home', locale)], [pageKey, url]];
  return [
    page,
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId(url),
      itemListElement: crumbs.map(([key, href], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: getPageName(key, locale),
        item: href,
      })),
    },
  ];
}

async function getExperienceImageUrl(experience: Experience) {
  if (!experience.image) return undefined;
  const { src } = await getImage({ src: experience.image.asset, width: 1200, format: 'jpg' });
  return absoluteUrl(src);
}

async function getTouristTrip(experience: Experience): Promise<SchemaNode> {
  const image = await getExperienceImageUrl(experience);
  return {
    '@type': 'TouristTrip',
    name: experience.title,
    description: experience.description,
    ...(image ? { image } : {}),
    touristType: experience.audiences.map((audience) => audience.label),
    provider: { '@id': organizationId },
  };
}

// Experiences page: the example experiences as an ItemList of TouristTrip.
export async function getExperiencesSchema(locale: Locale, experiences: Experience[]): Promise<SchemaNode[]> {
  const trips = await Promise.all(experiences.map(getTouristTrip));
  return [
    {
      '@type': 'ItemList',
      name: useTranslations(locale).experiencesPage.examplesTitle,
      numberOfItems: trips.length,
      itemListElement: trips.map((item, index) => ({ '@type': 'ListItem', position: index + 1, item })),
    },
  ];
}

// Audience landing: the service it describes, plus the FAQ rendered on the page.
export function getLandingSchema(audience: AudienceId, locale: Locale, imageUrl?: string): SchemaNode[] {
  const t = useTranslations(locale);
  const landing = getLanding(audience, locale);
  const pageKey = landingPageKeyByAudience[audience];
  const url = getPageUrl(pageKey, locale);

  return [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: landing.h1,
      serviceType: getPageName(pageKey, locale),
      description: landing.description,
      url,
      ...(imageUrl ? { image: imageUrl } : {}),
      audience: { '@type': 'Audience', audienceType: t.audiences.items[audience].segment },
      areaServed: costaRica,
      provider: { '@id': organizationId },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      isPartOf: { '@id': webPageId(url) },
      mainEntity: landing.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ];
}
