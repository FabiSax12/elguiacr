import type { APIRoute } from 'astro';
import sharp from 'sharp';
import logoSvg from '../assets/logo_colorful.svg?raw';

// Logo for the lead email, which is read in Gmail and Outlook: they block data URIs and don't render SVG, so it has to be
// a PNG at a public URL. The email header is dark green, so the logo's own green becomes cream and the gold "CR" stays.
const green = '#1f5c46';
const cream = '#fff7e8';
const emailWidth = 570; // three times the 190px it is shown at, for dense screens

export const GET: APIRoute = async () => {
  const svg = logoSvg.replaceAll(`fill:${green}`, `fill:${cream}`);
  if (svg === logoSvg) throw new Error('logo_colorful.svg no longer uses the expected green; update email-logo.png.ts');
  const png = await sharp(Buffer.from(svg), { density: 300 }).resize({ width: emailWidth }).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
