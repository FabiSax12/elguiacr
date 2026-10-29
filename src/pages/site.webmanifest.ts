import type { APIRoute } from 'astro';
import { appIcons } from '../data/icons';
import { brandColors, siteName, siteShortName } from '../data/site';
import { defaultLocale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';

export const GET: APIRoute = () => {
  const manifest = {
    name: siteName,
    short_name: siteShortName,
    description: useTranslations(defaultLocale).meta.description,
    lang: defaultLocale,
    start_url: '/',
    display: 'browser',
    theme_color: brandColors.theme,
    background_color: brandColors.background,
    icons: appIcons
      .filter((icon) => icon.inManifest)
      .map(({ name, size }) => ({ src: `/${name}.png`, sizes: `${size}x${size}`, type: 'image/png' })),
  };
  return new Response(JSON.stringify(manifest, null, 2), { headers: { 'Content-Type': 'application/manifest+json' } });
};
