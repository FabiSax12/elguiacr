import { defaultLocale, locales, type Locale } from './config';
import { ui } from './ui';

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getLocale(currentLocale: string | undefined): Locale {
  return isLocale(currentLocale) ? currentLocale : defaultLocale;
}

export function getLangFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return ui[locale];
}
