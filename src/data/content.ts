import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

export const navLinkKeys = ['audiences', 'how', 'founder', 'destinations', 'stories'] as const;
export type NavLinkKey = (typeof navLinkKeys)[number];

// Anchor ids are language-neutral.
export const navLinks: { href: string; key: NavLinkKey }[] = [
  { href: '#para-quien', key: 'audiences' },
  { href: '#como-funciona', key: 'how' },
  { href: '#fundador', key: 'founder' },
  { href: '#destinos', key: 'destinations' },
  { href: '#historias', key: 'stories' },
];

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

const storyStyles: Record<StoryId, StoryStyle> = {
  criteria: { format: 'reel', background: '#1f5c46' },
  team: { format: 'photo', background: '#e0a632', color: '#17362d' },
  network: { format: 'reel', background: '#24473c' },
  objective: { format: 'reel', background: '#1f5c46' },
  classroom: { format: 'photo', background: '#f3ead8', color: '#17362d' },
  experience: { format: 'reel', background: '#24473c' },
};

export function getStories(locale: Locale): Story[] {
  const { stories } = useTranslations(locale);
  return storyIds.map((id) => ({ id, ...stories.items[id], ...storyStyles[id] }));
}
