// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { defaultLocale, locales, SITE_URL } from './src/i18n/config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
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
