import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../i18n/config';
import { whatsappNumber } from './site';

export const pageKeys = ['home', 'experiences', 'destinations', 'transport', 'about', 'blog', 'faq', 'privacy', 'terms', 'cookies', 'cancellations', 'customTrips', 'localExperiences', 'teamBuilding', 'educationalTrips'] as const;
export type PageKey = (typeof pageKeys)[number];

export const navPageKeys = ['home', 'experiences', 'destinations', 'transport', 'about', 'blog', 'faq'] as const;
export type NavPageKey = (typeof navPageKeys)[number];

export const legalPageKeys = ['privacy', 'terms', 'cookies', 'cancellations'] as const;
export type LegalPageKey = (typeof legalPageKeys)[number];

// SEO landing pages, one per audience. They live outside the main menu.
export const landingPageKeys = ['customTrips', 'localExperiences', 'teamBuilding', 'educationalTrips'] as const;
export type LandingPageKey = (typeof landingPageKeys)[number];

// Pages with their own component (home, the landings, the privacy policy) are not placeholders.
export type PlaceholderPageKey = Exclude<PageKey, 'home' | 'privacy' | LandingPageKey>;

// Path segment of each page per locale ('' is the locale root).
const slugs: Record<PageKey, Record<Locale, string>> = {
  home: { es: '', en: '' },
  experiences: { es: 'experiencias', en: 'experiences' },
  destinations: { es: 'destinos', en: 'destinations' },
  transport: { es: 'transporte-y-rutas', en: 'transport-and-routes' },
  about: { es: 'nosotros', en: 'about' },
  blog: { es: 'blog', en: 'blog' },
  faq: { es: 'faq', en: 'faq' },
  privacy: { es: 'privacidad', en: 'privacy' },
  terms: { es: 'terminos', en: 'terms' },
  cookies: { es: 'cookies', en: 'cookies' },
  cancellations: { es: 'cancelaciones', en: 'cancellations' },
  customTrips: { es: 'viajes-personalizados-costa-rica', en: 'custom-trips-costa-rica' },
  localExperiences: { es: 'experiencias-para-locales-costa-rica', en: 'experiences-for-locals-costa-rica' },
  teamBuilding: { es: 'team-building-costa-rica', en: 'team-building-costa-rica' },
  educationalTrips: { es: 'giras-educativas-costa-rica', en: 'educational-trips-costa-rica' },
};

export function getPagePath(key: PageKey, locale: Locale) {
  return getRelativeLocaleUrl(locale, slugs[key][locale]);
}

export function getPageUrl(key: PageKey, locale: Locale) {
  return getAbsoluteLocaleUrl(locale, slugs[key][locale]);
}

// The primary CTA targets the contact form, which lives on the home page.
// An optional segment is passed as a query param that the form reads on load.
export function getContactPath(locale: Locale, segment?: string) {
  const query = segment ? `?segment=${segment}` : '';
  return `${getPagePath('home', locale)}${query}#contanos`;
}

export { instagramUrl } from './site';

export function getWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
