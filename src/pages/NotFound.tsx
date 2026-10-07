import { Link } from 'react-router-dom'

import { Shell } from '@/components/layout/Shell'
import { usePageMeta } from '@/lib/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Page not found — Jointick', 'https://jointick.co/')

  return (
    <Shell>
      <div className="mx-auto max-w-xl px-6 py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">This page is not available.</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">The link may be incorrect.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-medium text-ink underline underline-offset-4">
          Back to Jointick
        </Link>
      </div>
    </Shell>
  )
}
