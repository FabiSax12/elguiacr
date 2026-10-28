// @ts-check
import { rename, rmdir } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
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

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [flattenLocale404()],
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
