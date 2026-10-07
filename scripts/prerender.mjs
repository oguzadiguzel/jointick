import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = join(root, 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(root, 'dist-ssr/entry-server.js')).href)

const pages = [
  {
    path: '/',
    file: 'index.html',
    title: 'Jointick — AI-native workspace for modern teams',
    description:
      'Jointick is a workspace for small teams. Claude turns projects, meetings, documents, and tasks into summaries, tasks, risks, and next steps.',
    canonical: 'https://jointick.co/',
  },
  {
    path: '/about',
    file: 'about.html',
    title: 'About — Jointick',
    description:
      'Jointick is an early-stage software company, founded in 2026, building a workspace where Claude turns team context into summaries, tasks, risks, and next steps.',
    canonical: 'https://jointick.co/about',
  },
  {
    path: '/privacy',
    file: 'privacy.html',
    title: 'Privacy — Jointick',
    description: 'What the Jointick website collects, how email to hello@jointick.co is handled, and what this site does not do.',
    canonical: 'https://jointick.co/privacy',
  },
  {
    path: '/terms',
    file: 'terms.html',
    title: 'Terms — Jointick',
    description: 'Terms for using the Jointick website at jointick.co.',
    canonical: 'https://jointick.co/terms',
  },
]

for (const page of pages) {
  const body = render(page.path)
  const html = inject(template, body, page)
  const file = join(dist, page.file)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  if (!html.includes('hello@jointick.co')) {
    throw new Error(`Prerender of ${page.path} is missing the contact email`)
  }
  if (page.path === '/' && !html.includes('Claude reads that context')) {
    throw new Error('Homepage prerender is missing the hero copy')
  }
}

function inject(source, body, page) {
  let html = source.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
  html = replaceAttr(html, 'name="description"', page.description)
  html = replaceAttr(html, 'property="og:title"', page.title)
  html = replaceAttr(html, 'property="og:description"', page.description)
  html = replaceAttr(html, 'property="og:url"', page.canonical)
  html = replaceAttr(html, 'name="twitter:title"', page.title)
  html = replaceAttr(html, 'name="twitter:description"', page.description)
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${page.canonical}"`)
  return html
}

function replaceTag(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`Missing tag ${pattern}`)
  return html.replace(pattern, value)
}

function replaceAttr(html, attr, value) {
  const pattern = new RegExp(`(<meta\\s+${attr}\\s+content=")[^"]*(")`)
  if (!pattern.test(html)) throw new Error(`Missing meta ${attr}`)
  return html.replace(pattern, `$1${escapeAttr(value)}$2`)
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}
