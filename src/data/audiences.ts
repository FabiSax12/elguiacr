import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

export const audienceIds = ['travelers', 'locals', 'companies', 'education'] as const;
export type AudienceId = (typeof audienceIds)[number];

export interface AudienceText {
  segment: string;
  word: string;
  description: string;
  cta: string;
  photoNote: string;
}

// Tailwind class names; kept as full literals so the compiler can detect them.
interface AudienceStyle {
  photoBg: string;
  photoNoteColor: string;
  headBg: string;
  headColor: string;
  wordColor: string;
  headBorder: string;
  segmentWeight: string;
}

export interface Audience extends AudienceText, AudienceStyle {
  id: AudienceId;
}

const styles: Record<AudienceId, AudienceStyle> = {
  travelers: { photoBg: 'bg-verde-principal', photoNoteColor: 'text-crema-luminoso', headBg: 'bg-verde-principal', headColor: 'text-crema-luminoso', wordColor: 'text-mostaza-calido', headBorder: 'border-crema-luminoso/25', segmentWeight: 'font-semibold' },
  locals: { photoBg: 'bg-selva', photoNoteColor: 'text-crema-luminoso', headBg: 'bg-verde-oscuro', headColor: 'text-crema-luminoso', wordColor: 'text-mostaza-calido', headBorder: 'border-crema-luminoso/25', segmentWeight: 'font-semibold' },
  companies: { photoBg: 'bg-musgo', photoNoteColor: 'text-crema-luminoso', headBg: 'bg-verde-salvia', headColor: 'text-crema-luminoso', wordColor: 'text-crema-luminoso', headBorder: 'border-crema-luminoso/25', segmentWeight: 'font-bold' },
  education: { photoBg: 'bg-mostaza-sombra', photoNoteColor: 'text-verde-oscuro', headBg: 'bg-mostaza-calido', headColor: 'text-verde-oscuro', wordColor: 'text-verde-oscuro', headBorder: 'border-verde-oscuro/25', segmentWeight: 'font-semibold' },
};

export function getAudiences(locale: Locale): Audience[] {
  const { audiences } = useTranslations(locale);
  return audienceIds.map((id) => ({ id, ...audiences.items[id], ...styles[id] }));
}

export function getSegments(locale: Locale): { id: AudienceId | 'other'; label: string }[] {
  const { audiences, contact } = useTranslations(locale);
  const segments = audienceIds.map((id) => ({ id, label: audiences.items[id].segment }));
  return [...segments, { id: 'other', label: contact.otherOption }];
}
