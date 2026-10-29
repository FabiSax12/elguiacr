import { getImage } from 'astro:assets';
import type { Locale } from '../i18n/config';
import { DEFAULT_SPOT_ID, TOUR_ORDER, getSpots } from './spots';

// Candidate widths for the full-bleed hero background. Widths above the source are
// dropped (the source width is added instead), so small sources are never upscaled.
const BACKDROP_WIDTHS = [640, 960, 1600, 2400];

export interface HeroBackdrop {
  src: string;
  srcset: string;
  position: string;
}

export interface HeroCredit {
  author: string;
  photoUrl: string;
  license?: string;
  licenseUrl?: string;
}

// Only what the hero renders and its client script reads (serialized into #spots-data).
export interface HeroSpot {
  id: string;
  name: string;
  short: string;
  x: number;
  y: number;
  backdrop?: HeroBackdrop;
  credit?: HeroCredit;
}

export async function getHeroSpots(locale: Locale): Promise<{ spots: HeroSpot[]; initial: HeroSpot }> {
  // Kept in tour order: the client script visits them in array order.
  const ordered = getSpots(locale).sort((a, b) => TOUR_ORDER.indexOf(a.id) - TOUR_ORDER.indexOf(b.id));
  const spots = await Promise.all(
    ordered.map(async ({ id, name, short, x, y, image, position, credit }): Promise<HeroSpot> => {
      const spot: HeroSpot = { id, name, short, x, y };
      if (!image) return spot;

      const widths = [...BACKDROP_WIDTHS.filter((width) => width < image.width), image.width];
      const optimized = await getImage({ src: image, widths, format: 'webp' });
      spot.backdrop = { src: optimized.src, srcset: optimized.srcSet.attribute, position: position ?? '50% 50%' };
      if (credit) spot.credit = { author: credit.author, photoUrl: credit.photoUrl, license: credit.license, licenseUrl: credit.licenseUrl };
      return spot;
    }),
  );
  const initial = spots.find((spot) => spot.id === DEFAULT_SPOT_ID && spot.backdrop) ?? spots.find((spot) => spot.backdrop) ?? spots[0];
  return { spots, initial };
}
