// @ts-check
import { readFileSync } from 'node:fs';
import { readFile, rename, rmdir } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defaultLocale, locales, SITE_URL } from './src/i18n/config.ts';

// Astro emits nested 404 pages as `<locale>/404/index.html`, but Cloudflare's
// `not_found_handling: "404-page"` looks for `<locale>/404.html`.
/** @returns {import('astro').AstroIntegration} */
function flattenLocale404() {
  return {
    name: 'flatten-locale-404',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        for (const locale of locales.filter((code) => code !== defaultLocale)) {
          const folder = new URL(`${locale}/404/`, dir);
          await rename(new URL('index.html', folder), new URL(`${locale}/404.html`, dir));
          await rmdir(folder);
        }
      },
    },
  };
}

const outDir = new URL('./dist/', import.meta.url);

// The sitemap mirrors each built page's <head>, so it has no URL list of its own to keep in sync:
// pages with a noindex robots meta are left out, and the hreflang alternates are copied as-is.
/** @type {Map<string, { indexable: boolean; alternates: { lang: string; url: string }[] }>} */
const builtHeads = new Map();

/** @param {string} pageUrl */
function readBuiltHead(pageUrl) {
  const cached = builtHeads.get(pageUrl);
  if (cached) return cached;

  const { pathname } = new URL(pageUrl);
  const file = new URL(`.${pathname}${pathname.endsWith('/') ? 'index.html' : ''}`, outDir);
  let head = '';
  try {
    const html = readFileSync(file, 'utf8');
    head = html.slice(0, html.indexOf('</head>'));
  } catch {
    // Not an HTML page (or not emitted): leave it out.
  }
  const robots = head.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
  const alternates = [...head.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(([, lang, url]) => ({ lang, url }));
  const entry = { indexable: head.includes('<title>') && !robots.includes('noindex'), alternates };
  builtHeads.set(pageUrl, entry);
  return entry;
}

// The sitemap filter regex-parses the built <head>, so a markup change in Layout could silently empty it.
// Fail the build if the locale home pages are missing.
/** @returns {import('astro').AstroIntegration} */
function assertSitemapHasLocaleRoots() {
  return {
    name: 'assert-sitemap-locale-roots',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const xml = await readFile(new URL('sitemap-0.xml', dir), 'utf8');
        const missing = locales
          .map((code) => (code === defaultLocale ? `${SITE_URL}/` : `${SITE_URL}/${code}/`))
          .filter((url) => !xml.includes(`<loc>${url}</loc>`));
        if (missing.length) throw new Error(`Sitemap is missing locale home pages: ${missing.join(', ')}`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Cloudflare serves `dir/index.html` at `/dir/` and redirects `/dir` there, so every URL we emit
  // (links, canonicals, hreflang, sitemap) uses the trailing slash.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => readBuiltHead(page).indexable,
      serialize: (item) => ({ ...item, links: readBuiltHead(item.url).alternates }),
    }),
    assertSitemapHasLocaleRoots(),
    flattenLocale404(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
