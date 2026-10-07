# Jointick

Marketing site for Jointick, an early-stage AI-native workspace. The app is a static React site built with Vite, Tailwind CSS, and a small set of shadcn/ui primitives. It is meant to be deployed on Cloudflare Pages.

`kitler/` is a local reference library (Tailwind Plus and ShadcnKit). It is not imported by the app and is not part of the production build.

## Develop

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` typechecks with `tsc` and writes the static site to `dist/`.

## Cloudflare

Connect the GitHub repository in Workers & Pages. The Worker name must be `jointick`, matching `wrangler.jsonc`.

- Production branch: `main`
- Root directory: leave empty
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`

Node 22 is set in `.node-version`. After the first deploy, attach `jointick.co`.

`/privacy` is a client-side route. Wrangler serves `index.html` for unknown paths. Hashed files in `/assets` are marked immutable in `public/_headers`.

Do not enable Google Tag Manager. There is no container, and the extra script is unnecessary.

### Early access

There is no form. “Request Early Access” and the contact links open `hello@jointick.co`.

### Cloudflare Web Analytics

Set `VITE_CF_BEACON_TOKEN` to a Cloudflare Web Analytics token and rebuild. If the variable is empty, the beacon script is not added.

## Stack

- React 18, Vite, TypeScript
- Tailwind CSS
- shadcn/ui primitives: Button, Input, Label, Dialog (Radix)
- Lucide icons
- Instrument Sans, self-hosted through Fontsource
- Open Graph, Twitter card, canonical URL, JSON-LD Organization
- `robots.txt`, `sitemap.xml`, favicon, web manifest

See `.env.example` for the optional variables.
