import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import faviconSvg from '../../public/favicon.svg?raw';
import { appIcons, type AppIcon } from '../data/icons';
import { brandColors } from '../data/site';

export const getStaticPaths = (() => appIcons.map((icon) => ({ params: { icon: icon.name }, props: { icon } }))) satisfies GetStaticPaths;

// The mark sits on an opaque cream square: iOS fills transparent touch icons with black.
export const GET: APIRoute<{ icon: AppIcon }> = async ({ props }) => {
  const { size } = props.icon;
  const markSize = Math.round(size * 0.72);
  const mark = await sharp(Buffer.from(faviconSvg), { density: 300 })
    .resize(markSize, markSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const png = await sharp({ create: { width: size, height: size, channels: 4, background: brandColors.background } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
