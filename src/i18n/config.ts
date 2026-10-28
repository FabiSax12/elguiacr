// Dependency-free so astro.config.mjs can import it too.
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeMeta: Record<Locale, { name: string; ogLocale: string }> = {
  es: { name: 'Español', ogLocale: 'es_CR' },
  en: { name: 'English', ogLocale: 'en_US' },
};

export const SITE_URL = 'https://elguiacr.com';
