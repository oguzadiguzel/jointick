import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink', className)}>
      <svg viewBox="0 0 32 32" className="size-6 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M8.5 16.5 13.5 21.5 23.5 10.5"
          fill="none"
          stroke="#f4f3ef"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Jointick
    </span>
  )
}
