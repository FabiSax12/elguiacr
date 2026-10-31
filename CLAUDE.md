# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static Astro 7 site for elguiacr.com, a Costa Rica experience-design business. Bilingual (Spanish default, English under `/en/`). No UI framework: plain `.astro` components, Tailwind v4 via `@tailwindcss/vite`, and small inline vanilla `<script>`s for interactivity. The only server code is a small Cloudflare Worker for the contact form (`worker/index.ts`, see Deployment).

## Commands

The package manager is pnpm (`packageManager` in `package.json`; the README's `npm` commands also work).

- `pnpm dev`: dev server at `localhost:4321`. Per `AGENTS.md`, start it in background mode with `astro dev --background` and manage it with `astro dev stop|status|logs`.
- `pnpm build`: static build into `dist/`.
- `pnpm preview`: serve the production build.
- There are no tests, linter or formatter configured. `pnpm build` does not type-check. Type errors (e.g. a missing dictionary key) only show in the editor or via `pnpm astro check` (`@astrojs/check` and `typescript` are dev dependencies).

Always verify visual or animation changes against `pnpm build && pnpm preview`, not only dev. The production CSS pipeline (Lightning CSS minification) behaves differently from dev; see the scroll-driven animations note below.

## Deployment

Three branches, promoted by merging forward (`dev` → `staging` → `main`):

- `dev`: where day-to-day commits land. Preview at `dev-elguiacr.<subdomain>.workers.dev`.
- `staging`: what the client reviews before release. Preview at `staging-elguiacr.<subdomain>.workers.dev`.
- `main`: production (elguiacr.com). Only merge here after the client approves staging.

Never commit straight to `main` or `staging`. Previews come from Workers Builds "Worker Previews" (`npx wrangler preview`, preview name = branch name), which requires the `previews` block in `wrangler.jsonc` (empty is fine); `workers.dev` preview URLs send `X-Robots-Tag: noindex` automatically.

Cloudflare Workers Builds, on every push to `main`: it runs `pnpm run build`, then `npx wrangler deploy`. `wrangler.jsonc` serves `dist/` as static assets (no adapter, no SSR). Keep that file: without it, `wrangler deploy` tries to auto-configure the project (`astro add cloudflare`, adding wrangler to `package.json`), which fails under pnpm with `ERR_PNPM_IGNORED_BUILDS`.

Unknown URLs get the nearest `404.html` (`not_found_handling: "404-page"`). Astro emits the English one as `en/404/index.html`, so the `flattenLocale404` integration in `astro.config.mjs` moves it to `en/404.html` after the build. The 404 pages (`NotFoundPage.astro`, copy under `notFound` in the dictionaries) are not in `routes.ts` and render `<Layout>` and `<Nav />` without a `pageKey` (so no canonical or hreflang).

### Contact form Worker

`worker/index.ts` handles `POST /api/contact`: it validates the payload against the id tuples in `src/data/contactForm.ts` and the dictionaries, rejects any payload without `consent === true` (the required privacy checkbox), drops honeypot hits (`website` filled) with a silent 200, verifies the Turnstile token and sends a Spanish email through Resend as `html` (built by `buildLeadEmailHtml` in `worker/leadEmail.ts`, with the wave as an inline image in `worker/leadEmailAssets.ts` and the logo as a hosted PNG, `/email-logo.png`, rendered from `src/assets/logo_colorful.svg` by `src/pages/email-logo.png.ts`: Gmail and Outlook block data URIs and don't render SVG) plus a plain-text alternative (`buildEmail` in `index.ts`). Both record the consent (policy version from `privacyUpdated` and timestamp) as evidence. Every visitor-controlled value goes through `escapeHtml` in `leadEmail.ts` before it reaches the HTML (the message keeps its line breaks: escape first, then `<br>`), and links are built only from validated data (`mailto:`, `tel:`, `https://wa.me/`). `src/assets/lead-email.preview.html` is only the design reference the template came from: nothing imports it, so it is not needed at runtime and can be deleted (it is untracked), but update it if you want it to keep matching the design. The payload shape lives in `worker/types.ts`. Errors are `{ ok: false, error: "validation" | "captcha" | "send" }`. `wrangler.jsonc` sets `main` and `assets.run_worker_first: ["/api/*"]`, so only the API runs the Worker and every page stays static. No Astro adapter.

- Vars in `wrangler.jsonc`: `CONTACT_FROM` and `CONTACT_TO` (the inbox is a placeholder until the client gives one).
- Secrets: `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY`. Never commit them. Production uses `npx wrangler secret put`. Branch previews (`dev`, `staging`) do not inherit production secrets or vars: set the secrets once for every new preview with `npx wrangler preview base-config secret put <KEY>`, or for an existing one with `npx wrangler preview secret put <KEY> --name <branch>`, and keep their vars in the `previews` block of `wrangler.jsonc`. Without them the preview answers `captcha` to every submit. `wrangler tail` doesn't work while the production Worker only has assets.
- `PUBLIC_TURNSTILE_SITE_KEY` is read by `ContactForm.astro` and defaults to the production widget's site key (public by design). For local work with `.dev.vars`' test secret, set it to Cloudflare's always-pass test key `1x00000000000000000000AA` in `.env.local`. The Worker also requires the token's `action` to be `contact`, and the hostname to be in `TURNSTILE_HOSTNAMES` (comma-separated var) when that is set.
- Resend needs the `elguiacr.com` domain verified (DNS records) before `CONTACT_FROM` can send.
- Local: copy `.dev.vars.example` to `.dev.vars`, then `pnpm build && npx wrangler dev`. Plain `astro dev` doesn't run the Worker, so submitting there fails with the send error message.

`public/_headers` sets long immutable caching for `/_astro/*` and a couple of security headers. Don't put `X-Robots-Tag` there.

### Web Analytics

Cloudflare Web Analytics is on through Cloudflare's automatic setup for the `elguiacr.com` zone: Cloudflare injects the beacon (`static.cloudflareinsights.com/beacon.min.js`) at the edge, so the repo has no analytics code, token or build variable. Don't add a manual beacon: with the automatic setup on it would load twice and double-count visits. It only exists on the production hostname (not on `workers.dev` previews or in dev), and it only counts aggregate page views and Core Web Vitals: it does not measure WhatsApp clicks or form submissions as conversions. The privacy and cookies pages describe it, attributing the no-cookies claim to Cloudflare. If the automatic setup is ever turned off, those pages must change with it. Curl can't confirm the beacon (Cloudflare doesn't inject it for bot-like clients), so check that the dashboard (Analytics & Logs > Web Analytics) keeps receiving visits, or look for `static.cloudflareinsights.com` in a real browser's network tab, before a release to `main`.

## Architecture

### i18n and routing

- `src/i18n/config.ts` holds locales, default locale, `SITE_URL` and `og:locale` values. It is dependency-free because `astro.config.mjs` imports it.
- `src/i18n/es.ts` is the source of truth for the dictionary shape (`Dictionary = typeof es`). `en.ts` is typed as `Dictionary`, so a missing or extra key is a type error. All user-facing copy lives in these two files or in `src/data/*`, never hardcoded in components or client scripts.
- Components get copy with `useTranslations(getLocale(Astro.currentLocale))`.
- `src/data/routes.ts` is the routing registry: every page has a `PageKey` with a per-locale slug (`slugs`). Build links with `getPagePath` / `getPageUrl`, never by hand. Key groups (`navPageKeys`, `legalPageKeys`, `landingPageKeys`) drive the nav, footer and dictionary types. `getContactPath(locale, segment?)` points to the home contact form (`#contanos`) with an optional `?segment=` the form reads on load.
- `Layout.astro` takes a `pageKey` and derives canonical, `hreflang` alternates and OG tags from it, so the key must be registered in `routes.ts` for both locales.

### Pages are thin wrappers

Each file in `src/pages/` (es) and `src/pages/en/` (en) only renders a shared component with a key, e.g. `<PlaceholderPage pageKey="blog" />` or `<AudienceLanding audience="companies" />`. Main ones:

- `Landing.astro`: the home page, composed of section components (Hero, Manifesto, Audiences, Destinations, Stories, ContactForm, ...).
- `ExperiencesPage.astro`: the experiences page.
- `AudienceLanding.astro`: four SEO landing pages, one per audience (`travelers`, `locals`, `companies`, `education`), text in `src/data/landings.ts` (mapped to page keys via `landingPageKeyByAudience`). These are not in the main nav.
- `LegalPage.astro`: not a page of its own but the shared long-form layout that `PrivacyPage` and `CookiesPage` wrap, for the legal pages (header, table of contents, sections, last-updated date). It renders `LegalBlock`s from `src/data/legal.ts` (`p`, `list`, `facts`, `table`), and `LegalInline.astro` turns the `{token}` markers in the text into links using the `links` map each page passes.
- `PrivacyPage.astro`: the privacy policy, built on `LegalPage`. Copy lives under `privacy` in the dictionaries as an ordered list of sections (ids in `src/data/privacy.ts`), with `{email}`, `{prodhab}` and `{cookies}` markers. The controller's identity (`dataController`), the policy version (`privacyUpdated`, which the Worker stamps on every consent, so bump it whenever the policy copy changes) and the retention period are in `src/data/site.ts`; the `TODO(client)` notes there must be resolved before the page reaches `main`.
- `CookiesPage.astro`: the cookies page, also built on `LegalPage`. Copy under `cookies` in the dictionaries (section ids in `src/data/cookies.ts`, Cloudflare link targets in `cloudflareUrls`), dated by `cookiesUpdated` in `site.ts`. It only states what the origin audit supports (the site sets no cookies and loads nothing external except Turnstile on demand; the Web Analytics beacon is injected by Cloudflare at the edge, so a repo audit can't see it); Cloudflare's claims are attributed to Cloudflare. Re-audit external origins and `document.cookie`/storage use before editing it, and keep the privacy policy's cookies section in sync.
- `FaqPage.astro`: the FAQ, grouped `<details>`. Question ids per group live in `src/data/faq.ts`, text under `faq` in the dictionaries, and the `FAQPage` JSON-LD comes from the same data (`getFaqSchema`), so visible answers and structured data cannot differ. Answers are built only from copy that already exists on the site; do not add a question the client has not confirmed an answer for (prices, payment, cancellation, insurance, licences, transport details).
- `AboutPage.astro`: "Nosotros", assembled from existing dictionary copy (`manifesto`, `founder`, `how`, `values`) plus `about` for title, description and heading.
- `PlaceholderPage.astro`: pages not built yet (destinations, transport, blog, terms, cancellations), text in the dictionary's `pages` record.

Adding a page means: add the key and both slugs in `routes.ts`, add its copy to `es.ts` and `en.ts`, then create the wrapper file in both `src/pages/` and `src/pages/en/` with the localized slug as filename.

### Data modules

`src/data/*.ts` (spots, audiences, content, experiences, landings) combine language-neutral fields (ids, map coordinates, images from `src/assets`, colors, audience fit) with translated text from the dictionary, exposed through locale-taking helpers. Ids are declared as `as const` tuples and their text types are imported back into the dictionaries, so adding an id forces adding its copy in both languages.

Client scripts read localized data from the page instead of embedding it (e.g. the destinations map reads the `#spots-data` JSON). Anchor ids like `#contanos` and `#destinos` are identical in every locale.

### SEO

- `trailingSlash: 'always'` in `astro.config.mjs` matches how Cloudflare serves `dir/index.html` (it redirects `/dir` to `/dir/`). Canonicals, hreflang, the sitemap and internal links all use the slash form, so never hand-write a URL without it.
- `Layout.astro` emits title, description, robots, canonical, hreflang (+ `x-default`), Open Graph, Twitter card, icons, manifest link, font preloads and one JSON-LD `@graph`. Props: `pageKey`, `noindex`, `image` (an `ImageMetadata`, cropped to a 1200x630 JPG for `og:image`; defaults to `rio-celeste.webp`), `imageAlt` and `schema` (extra JSON-LD nodes).
- Indexable pages are home, experiences, about, the FAQ, the privacy and cookies pages and the four audience landings. Every `PlaceholderPage` (the other legal pages included) is `noindex, follow`. When a placeholder gets its own component, drop the `noindex` with it; nothing else needs to change.
- The sitemap (`@astrojs/sitemap`) reads each built page's `<head>`: noindex pages are left out and the hreflang alternates are copied from the page's own `<link rel="alternate">` tags. Don't keep a separate URL list.
- `src/pages/robots.txt.ts` generates `robots.txt` (allows search and AI-answer crawlers, points to `sitemap-index.xml`). `src/pages/[icon].png.ts` renders the apple-touch and manifest icons from `public/favicon.svg` with sharp; `src/pages/site.webmanifest.ts` builds the manifest.
- JSON-LD builders live in `src/data/schema.ts` (TravelAgency, WebSite, WebPage, BreadcrumbList, the experiences `ItemList` of `TouristTrip`, the landings' `Service`, and `FAQPage` through the shared `getFaqNode` for the landings and the FAQ page). Business facts (email, phone, Instagram, region, brand colors) live in `src/data/site.ts`. Only add facts the client has confirmed: no invented address, hours, prices or ratings.
- Meta titles stay at 60 characters or fewer with the brand last (`… | El Guía CR`); descriptions run 140 to 160 characters.

### Styling

`src/styles/global.css` defines the design tokens in `@theme` (Spanish color names such as `verde-principal`, `crema-luminoso`, `mostaza-calido`), base styles, and custom `@utility` classes. Fonts come from `@fontsource-variable` (Alegreya, Source Sans 3), imported in `Layout.astro`.

Scroll-driven effects (`parallax-*`, `revelar`, `trazar`, `zoom-lento`, `horiz-pista`, `horiz-barra`) are `@utility` classes guarded by `@supports (animation-timeline: view())`, plus a `scroll-timeline:` custom variant. Write them with animation **longhands** (`animation-name`, `animation-timing-function`, `animation-fill-mode`, then `animation-timeline`), never the `animation` shorthand: Lightning CSS merges `animation-timeline` into the shorthand during the build, browsers reject the result, and the effects silently break in production while working in dev.
