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

## Cloudflare Pages

1. Create a Pages project from this repository.
2. Set the root directory to the folder that contains this `package.json` (not `kitler/`).
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Set the environment variable `NODE_VERSION` to `20` or newer.
6. Attach the custom domain `jointick.co`.

Cloudflare serves the site over HTTPS, HTTP/2, and HTTP/3, and caches it at the edge. Hashed files in `/assets` are marked immutable in `public/_headers`. `public/_redirects` sends unknown paths to `index.html` so `/privacy` works as a client-side route.

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
