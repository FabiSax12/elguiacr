import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

import { navPageKeys, type NavPageKey } from './routes';

// Main navigation: the brief's seven items, in order.
export const navLinks: NavPageKey[] = [...navPageKeys];

export const pillarIds = ['knowledge', 'allies', 'judgment', 'contact'] as const;
export type PillarId = (typeof pillarIds)[number];
export interface PillarText {
  title: string;
  text: string;
}
const pillarSymbols: Record<PillarId, string> = { knowledge: '+', allies: '+', judgment: '+', contact: '=' };

export function getPillars(locale: Locale) {
  const { manifesto } = useTranslations(locale);
  return pillarIds.map((id) => ({ symbol: pillarSymbols[id], ...manifesto.pillars[id] }));
}

export const stepIds = ['understand', 'design', 'coordinate', 'accompany'] as const;
export type StepId = (typeof stepIds)[number];
export interface StepText {
  title: string;
  text: string;
}

export function getSteps(locale: Locale) {
  const { how } = useTranslations(locale);
  return stepIds.map((id, index) => ({ number: String(index + 1).padStart(2, '0'), ...how.steps[id] }));
}

export const storyIds = ['criteria', 'team', 'network', 'objective', 'classroom', 'experience'] as const;
export type StoryId = (typeof storyIds)[number];
export interface StoryText {
  note: string;
  kicker: string;
  title: string;
}

interface StoryStyle {
  format: 'reel' | 'photo';
  background: string;
  color?: string;
}

export interface Story extends StoryText, StoryStyle {
  id: StoryId;
}

// Tailwind class names; kept as full literals so the compiler can detect them.
const storyStyles: Record<StoryId, StoryStyle> = {
  criteria: { format: 'reel', background: 'bg-verde-principal' },
  team: { format: 'photo', background: 'bg-mostaza-calido', color: 'text-verde-oscuro' },
  network: { format: 'reel', background: 'bg-selva' },
  objective: { format: 'reel', background: 'bg-verde-principal' },
  classroom: { format: 'photo', background: 'bg-arena', color: 'text-verde-oscuro' },
  experience: { format: 'reel', background: 'bg-selva' },
};

export function getStories(locale: Locale): Story[] {
  const { stories } = useTranslations(locale);
  return storyIds.map((id) => ({ id, ...stories.items[id], ...storyStyles[id] }));
}
