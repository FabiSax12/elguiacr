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

interface AudienceStyle {
  photoBg: string;
  photoNoteColor: string;
  headBg: string;
  headColor: string;
  wordColor: string;
  headBorder: string;
  segmentWeight: number;
}

export interface Audience extends AudienceText, AudienceStyle {
  id: AudienceId;
}

const styles: Record<AudienceId, AudienceStyle> = {
  travelers: { photoBg: '#1f5c46', photoNoteColor: '#fff7e8', headBg: '#1f5c46', headColor: '#fff7e8', wordColor: '#e0a632', headBorder: 'rgba(255,247,232,.25)', segmentWeight: 600 },
  locals: { photoBg: '#24473c', photoNoteColor: '#fff7e8', headBg: '#17362d', headColor: '#fff7e8', wordColor: '#e0a632', headBorder: 'rgba(255,247,232,.25)', segmentWeight: 600 },
  companies: { photoBg: '#4f634c', photoNoteColor: '#fff7e8', headBg: '#667d63', headColor: '#fff7e8', wordColor: '#fff7e8', headBorder: 'rgba(255,247,232,.25)', segmentWeight: 700 },
  education: { photoBg: '#c48e22', photoNoteColor: '#17362d', headBg: '#e0a632', headColor: '#17362d', wordColor: '#17362d', headBorder: 'rgba(23,54,45,.25)', segmentWeight: 600 },
};

export function getAudiences(locale: Locale): Audience[] {
  const { audiences } = useTranslations(locale);
  return audienceIds.map((id) => ({ id, ...audiences.items[id], ...styles[id] }));
}

export function getSegments(locale: Locale): { id: AudienceId; label: string }[] {
  const { audiences } = useTranslations(locale);
  return audienceIds.map((id) => ({ id, label: audiences.items[id].segment }));
}
