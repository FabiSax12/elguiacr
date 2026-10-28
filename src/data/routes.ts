import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../i18n/config';

export const pageKeys = ['home', 'experiences', 'destinations', 'transport', 'about', 'blog', 'faq', 'privacy', 'terms', 'cookies', 'cancellations'] as const;
export type PageKey = (typeof pageKeys)[number];

export const navPageKeys = ['home', 'experiences', 'destinations', 'transport', 'about', 'blog', 'faq'] as const;
export type NavPageKey = (typeof navPageKeys)[number];

export const legalPageKeys = ['privacy', 'terms', 'cookies', 'cancellations'] as const;
export type LegalPageKey = (typeof legalPageKeys)[number];

export type PlaceholderPageKey = Exclude<PageKey, 'home'>;

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
};

export function getPagePath(key: PageKey, locale: Locale) {
  return getRelativeLocaleUrl(locale, slugs[key][locale]);
}

export function getPageUrl(key: PageKey, locale: Locale) {
  return getAbsoluteLocaleUrl(locale, slugs[key][locale]);
}

// The primary CTA targets the contact form, which lives on the home page.
export function getContactPath(locale: Locale) {
  return `${getPagePath('home', locale)}#contanos`;
}

export const instagramUrl = 'https://instagram.com/elguia.cr';

const whatsappNumber = '50685878863';

export function getWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
