import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-28', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-sm font-medium text-brand">{eyebrow}</p> : null}
      <h2
        className={cn(
          'text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl',
          eyebrow && 'mt-3',
        )}
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{children}</p>
      ) : null}
    </div>
  )
}
