import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

export const contactMethodIds = ['whatsapp', 'email'] as const;
export type ContactMethodId = (typeof contactMethodIds)[number];

export const interestIds = ['nature', 'adventure', 'culture', 'food', 'wellness', 'rural', 'learning', 'celebrations', 'unsure'] as const;
export type InterestId = (typeof interestIds)[number];
// Picking this option clears the others, and picking any other clears it.
export const exclusiveInterestId: InterestId = 'unsure';

export const timingIds = ['fixed', 'approximate', 'flexible', 'unknown'] as const;
export type TimingId = (typeof timingIds)[number];
// Every timing except "unknown" reveals the date field.
export const timingIdsWithDate = timingIds.filter((id) => id !== 'unknown');

export const zoneIds = ['yes', 'open', 'unknown'] as const;
export type ZoneId = (typeof zoneIds)[number];

export function getContactChoices(locale: Locale) {
  const { contact } = useTranslations(locale);
  return {
    methods: contactMethodIds.map((id) => ({ id, label: contact.methods[id] })),
    interests: interestIds.map((id) => ({ id, label: contact.interests[id] })),
    timings: timingIds.map((id) => ({ id, label: contact.timings[id] })),
    zones: zoneIds.map((id) => ({ id, label: contact.zones[id] })),
  };
}
