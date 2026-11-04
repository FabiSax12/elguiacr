import type { PageKey } from './routes';

// Build-time flag: the pages that are still placeholders (and the home "Stories" section, whose reels are
// placeholders too) are hidden unless PUBLIC_SHOW_PLACEHOLDER_PAGES is exactly "true". The pages themselves
// still build (noindex); the flag only removes the links to them and the Stories section.
export const showPlaceholderPages = import.meta.env.PUBLIC_SHOW_PLACEHOLDER_PAGES === 'true';

// Type-only import of the keys keeps this module free of a runtime cycle with routes.ts.
export const placeholderPageKeys: readonly PageKey[] = ['destinations', 'transport', 'blog', 'terms', 'cancellations'];

export function isPageVisible(key: PageKey) {
  return showPlaceholderPages || !placeholderPageKeys.includes(key);
}

// The home sections are numbered in their eyebrows ("04 · Stories"). With Stories hidden, the ones after it
// move up one so the sequence has no gap.
export function homeEyebrow(eyebrow: string) {
  if (showPlaceholderPages) return eyebrow;
  return eyebrow.replace(/^\d+/, (number) => String(Number(number) - 1).padStart(2, '0'));
}
