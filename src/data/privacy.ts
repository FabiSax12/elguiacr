import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

// Display order of the policy. Each id maps to one section of Ley 8968, art. 5.1 (letters in parentheses).
export const privacySectionIds = [
  'controller', // h
  'data', // a, d, f
  'purposes', // b, e
  'recipients', // c
  'retention',
  'sensitive',
  'rights', // g
  'security',
  'cookies',
  'minors',
  'changes',
] as const;
export type PrivacySectionId = (typeof privacySectionIds)[number];

// Inline `{email}`, `{prodhab}` and `{cookies}` markers in the text become links in PrivacyPage.astro.
export type PrivacyBlock = { p: string } | { list: string[] };

export interface PrivacySectionText {
  heading: string;
  blocks: PrivacyBlock[];
}

export function getPrivacySections(locale: Locale) {
  const { privacy } = useTranslations(locale);
  return privacySectionIds.map((id) => ({ id, ...privacy.sections[id] }));
}
