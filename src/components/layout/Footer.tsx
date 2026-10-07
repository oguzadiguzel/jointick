import { useLocation } from 'react-router-dom'

import { Wordmark } from '@/components/layout/Wordmark'
import { contactHref, primaryNav, sectionHref } from '@/lib/nav'

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: contactHref },
  { label: 'Privacy', href: '/privacy' },
]

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
        <div>
          <a href={pathname === '/' ? '#top' : '/'} className="rounded-sm">
            <span className="sr-only">Jointick home</span>
            <Wordmark />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            AI-native workspace for modern teams.
          </p>
          <a
            href="mailto:hello@jointick.co"
            className="mt-4 inline-block rounded-sm text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            hello@jointick.co
          </a>
        </div>

        <nav aria-label="Product">
          <p className="text-sm font-medium text-ink">Product</p>
          <ul className="mt-4 space-y-3">
            {primaryNav
              .filter((item) => item.label !== 'About')
              .map((item) => (
                <li key={item.href}>
                  <a
                    href={sectionHref(item.href, pathname)}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="text-sm font-medium text-ink">Company</p>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href.startsWith('/#') ? sectionHref(item.href, pathname) : item.href}
                  className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-6 py-6 text-sm text-muted-foreground lg:px-8">
          © 2026 Jointick. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
