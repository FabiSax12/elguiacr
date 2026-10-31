import type { Locale } from '../src/i18n/config';
import type { ContactMethodId, InterestId, TimingId, ZoneId } from '../src/data/contactForm';

// A validated contact form payload, as produced by `parse()` in index.ts.
export interface Submission {
  locale: Locale;
  segment: string;
  name: string;
  method: ContactMethodId;
  phone?: string;
  email?: string;
  what: string;
  interests: InterestId[];
  people?: number;
  timing?: TimingId;
  date?: string;
  zone?: ZoneId;
  zoneName?: string;
}
