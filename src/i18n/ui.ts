import type { Locale } from './config';
import { en } from './en';
import { es } from './es';

export type Dictionary = typeof es;

// `en` is annotated with `Dictionary`, so a missing or extra key is a type error.
export const ui: Record<Locale, Dictionary> = { es, en };
