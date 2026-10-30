# El Guía CR · landing page

Static Astro site for elguiacr.com ("Experiencias diseñadas con propósito"), converted from a Claude Design mockup. Bilingual (Spanish default, English), no UI framework: plain `.astro` components, global CSS and small vanilla scripts for the interactive parts.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the static site into `./dist/`        |
| `npm run preview` | Preview the production build locally        |

## Structure

```text
src/
├── assets/       logo (svg) and photos (webp), processed by astro:assets
├── components/   one component per page section (Nav, Hero, Ticker, Manifesto,
│                 Audiences, HowItWorks, Founder, Destinations, Stories, Values,
│                 ContactForm, Footer) plus Leaves and CostaRicaMap
├── data/         language-neutral structure (ids, coordinates, images, colors) merged with translated text
├── i18n/         locale config, dictionaries (es.ts, en.ts) and the useTranslations helper
├── layouts/      Layout.astro (html shell, localized meta, canonical + hreflang, Google Fonts)
├── pages/        index.astro (es) and en/index.astro (en), both render components/Landing.astro
└── styles/       global.css (design tokens, shared rules, scroll-driven animations)
```

## Interactive behavior

- Destinations: map markers and chips select a destination and update the detail panel.
- Contact form: segment chips (also set by the audience cards) and the chosen destination; submit posts to the Worker at `/api/contact`, which emails the inquiry (see `CLAUDE.md`, Deployment).
- Leaves: opened by an IntersectionObserver fallback when scroll-driven animations are unsupported.

## Internationalization

Native Astro i18n (`i18n` config + `astro:i18n`). Spanish is the default locale and has no prefix; English lives under `/en/`. The site stays fully static.

| Locale | URL    |
| :----- | :----- |
| `es`   | `/`    |
| `en`   | `/en/` |

- Locales, default locale, site URL and `og:locale` values: `src/i18n/config.ts` (also read by `astro.config.mjs`).
- All user-facing copy: `src/i18n/es.ts` (source of truth for the shape) and `src/i18n/en.ts` (typed as `Dictionary`, so a missing key is a type error).
- Components call `useTranslations(getLocale(Astro.currentLocale))`. Data modules in `src/data/` merge translated text with shared fields (ids, coordinates, images, colors).
- Client scripts never hardcode copy: the destinations script reads the localized `#spots-data` JSON; the contact form only toggles elements that are already rendered in the page language.
- Anchor ids (`#contanos`, `#destinos`, ...) are language-neutral and identical in every locale.

Add a locale:

1. Add the code to `locales` and an entry to `localeMeta` in `src/i18n/config.ts`.
2. Create `src/i18n/<code>.ts` exporting a `Dictionary` and register it in `src/i18n/ui.ts`.
3. Add `src/pages/<code>/index.astro` (copy `src/pages/en/index.astro`).
