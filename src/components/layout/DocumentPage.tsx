import type { ReactNode } from 'react'

import { Shell } from '@/components/layout/Shell'

export function DocumentPage({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string
  title: string
  lede: string
  children: ReactNode
}) {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-medium text-brand">{eyebrow}</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{lede}</p>
        <div className="mt-12 space-y-12 text-base leading-7 text-muted-foreground">{children}</div>
      </article>
    </Shell>
  )
}

export function DocumentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 border-t border-line pt-8">
      <h2 className="text-xl font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  )
}
