import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function MockFrame({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-line bg-surface', className)}>
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <p className="truncate text-xs font-medium text-ink">{title}</p>
        <p className="shrink-0 text-xs text-muted-foreground">Example</p>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink">
      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </span>
  )
}
