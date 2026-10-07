export const primaryNav = [
  { label: 'Product', href: '/#product' },
  { label: 'AI', href: '/#ai' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
] as const

export const contactHref = '/#early-access'

export function sectionHref(href: string, pathname: string) {
  if (pathname === '/' && href.startsWith('/#')) return href.slice(1)
  return href
}
