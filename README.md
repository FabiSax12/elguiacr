# El Guía CR · landing page

Static Astro site for elguiacr.com ("Experiencias diseñadas con propósito"), converted from a Claude Design mockup. Spanish UI copy, no UI framework: plain `.astro` components, global CSS and small vanilla scripts for the interactive parts.

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
├── data/         repeated content (spots, audiences, steps, stories, nav links)
├── layouts/      Layout.astro (html shell, meta, Google Fonts)
├── pages/        index.astro composes the sections
└── styles/       global.css (design tokens, shared rules, scroll-driven animations)
```

## Interactive behavior

- Destinations: map markers and chips select a destination and update the detail panel.
- Contact form: segment chips (also set by the audience cards) and the chosen destination; submit only shows the confirmation state, no backend is wired.
- Leaves: opened by an IntersectionObserver fallback when scroll-driven animations are unsupported.
