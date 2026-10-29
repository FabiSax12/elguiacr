import type { ImageMetadata } from 'astro';
import rioCeleste from '../assets/rio-celeste.webp';
import arenal from '../assets/arenal.webp';
import monteverde from '../assets/monteverde.webp';
import tortuguero from '../assets/tortuguero.webp';
import santaTeresa from '../assets/santa-teresa-surf.webp';
import manuelAntonio from '../assets/manuel-antonio-coast.webp';
import coffeeCherries from '../assets/coffee-cherries.webp';
import corcovadoCoast from '../assets/corcovado-coast.webp';
import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';
import type { AudienceId } from './audiences';
import { getPhotoCredit, type PhotoCredit } from './photoCredits';

export const spotIds = ['rincon', 'celeste', 'arenal', 'monteverde', 'tortuguero', 'tamarindo', 'santateresa', 'sanjose', 'manuel', 'uvita', 'osa', 'puertoviejo'] as const;
export type SpotId = (typeof spotIds)[number];

export interface SpotText {
  short: string;
  name: string;
  region: string;
  desc: string;
  photoNote: string;
  alt?: string;
}

interface SpotBase {
  id: SpotId;
  x: number;
  y: number;
  ideal: AudienceId[];
  image?: ImageMetadata;
  position?: string;
  // Only for images whose license requires a visible credit.
  credit?: PhotoCredit;
}

export interface Spot extends SpotBase, SpotText {
  idealLabel: string;
}

export const DEFAULT_SPOT_ID: SpotId = 'arenal';

// Order the hero's traveler visits the spots in: the route drawn on the map, a loop that starts and ends at Santa Teresa.
export const TOUR_ORDER: readonly SpotId[] = ['santateresa', 'tamarindo', 'rincon', 'celeste', 'arenal', 'monteverde', 'sanjose', 'tortuguero', 'puertoviejo', 'manuel', 'uvita', 'osa'];

const base: SpotBase[] = [
  { id: 'rincon', x: 17.7, y: 13.1, ideal: ['travelers', 'education'] },
  { id: 'celeste', image: rioCeleste, position: '50% 45%', x: 28.3, y: 16.2, ideal: ['travelers', 'locals'] },
  { id: 'arenal', image: arenal, position: '55% 45%', x: 38.3, y: 23.5, ideal: ['travelers', 'locals', 'companies'] },
  { id: 'monteverde', image: monteverde, position: '50% 50%', x: 33.3, y: 28.8, ideal: ['education', 'travelers'] },
  { id: 'tortuguero', image: tortuguero, position: '45% 55%', x: 71.6, y: 21.3, ideal: ['travelers', 'education'] },
  { id: 'tamarindo', x: 3.3, y: 28.8, ideal: ['travelers', 'companies'] },
  { id: 'santateresa', image: santaTeresa, position: '50% 60%', x: 23.0, y: 49.2, ideal: ['travelers', 'locals'] },
  { id: 'sanjose', image: coffeeCherries, position: '50% 50%', x: 55.1, y: 40.4, ideal: ['companies', 'education'] },
  { id: 'manuel', image: manuelAntonio, position: '45% 55%', x: 52.9, y: 57.4, ideal: ['travelers', 'locals'] },
  { id: 'uvita', x: 65.1, y: 64.9, ideal: ['travelers', 'education'] },
  { id: 'osa', image: corcovadoCoast, position: '50% 55%', credit: getPhotoCredit('corcovado-coast.webp'), x: 72.2, y: 83.7, ideal: ['education', 'travelers'] },
  { id: 'puertoviejo', x: 94.0, y: 49.2, ideal: ['travelers', 'locals'] },
];

export function getSpots(locale: Locale): Spot[] {
  const t = useTranslations(locale);
  return base.map((spot) => ({
    ...spot,
    ...t.spots[spot.id],
    idealLabel: spot.ideal.map((id) => t.audiences.items[id].segment).join(' · '),
  }));
}
