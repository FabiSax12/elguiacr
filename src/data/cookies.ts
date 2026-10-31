import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

// Display order of the cookies page.
export const cookiesSectionIds = ['what', 'stores', 'turnstile', 'analytics', 'links', 'banner', 'control', 'contact'] as const;
export type CookiesSectionId = (typeof cookiesSectionIds)[number];

// Dictionary text blocks: `{email}`, `{privacy}` and the Cloudflare tokens become links in CookiesPage.astro.
export type CookiesBlock = { p: string } | { list: string[] } | { table: { head: string[]; rows: string[][] } };

export interface CookiesSectionText {
  heading: string;
  blocks: CookiesBlock[];
}

// Cloudflare pages the cookies text links to.
export const cloudflareUrls = {
  turnstilePolicy: 'https://www.cloudflare.com/turnstile-privacy-policy/',
  cloudflareCookies: 'https://www.cloudflare.com/cookie-policy/',
  webAnalytics: 'https://www.cloudflare.com/web-analytics/',
} as const;

export function getCookiesSections(locale: Locale) {
  const { cookies } = useTranslations(locale);
  return cookiesSectionIds.map((id) => ({ id, ...cookies.sections[id] }));
}
