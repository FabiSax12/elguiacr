import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

// Display order of the FAQ page: groups, and the questions inside each. The text lives in the dictionaries.
export const faqQuestionIds = {
  how: ['approach', 'unclear', 'catalog', 'contactPerson'],
  who: ['audiences', 'groups', 'locals', 'education', 'teams'],
  contact: ['anticipation', 'channels', 'reply', 'next', 'budget', 'logistics'],
  data: ['dataUse', 'deleteData', 'cookies'],
} as const;
export type FaqGroupId = keyof typeof faqQuestionIds;
export const faqGroupIds = Object.keys(faqQuestionIds) as FaqGroupId[];

export interface FaqItemText {
  question: string;
  answer: string;
}

export type FaqGroupsText = {
  [Group in FaqGroupId]: { heading: string; questions: Record<(typeof faqQuestionIds)[Group][number], FaqItemText> };
};

export function getFaqGroups(locale: Locale) {
  const { faq } = useTranslations(locale);
  return faqGroupIds.map((id) => {
    const questions: Record<string, FaqItemText> = faq.groups[id].questions;
    const items = faqQuestionIds[id].map((questionId) => {
      const item = questions[questionId];
      // Spreading a missing entry would render an empty question and an invalid FAQPage node, so fail the build instead.
      if (!item?.question || !item.answer) throw new Error(`Missing FAQ copy for "${id}.${questionId}" (${locale})`);
      return { id: questionId, ...item };
    });
    return { id, heading: faq.groups[id].heading, items };
  });
}
