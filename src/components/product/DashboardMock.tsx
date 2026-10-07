import { Calendar, MessageSquare } from 'lucide-react'

import { StatusPill } from '@/components/product/MockFrame'

const priorities = ['Finalize onboarding flow revisions', 'Resolve the pending onboarding approval']

const tasks = ['Update onboarding copy', 'Review mobile navigation', 'Finalize analytics events']

export function DashboardMock() {
  return (
    <div
      className="rise rise-late overflow-hidden rounded-lg border border-line bg-surface shadow-mock"
      role="region"
      aria-label="Example interface for a project named Website Redesign"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">Website Redesign</p>
          <p className="text-xs text-muted-foreground">Example interface, not a customer result</p>
        </div>
        <StatusPill>On track</StatusPill>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-line px-4 py-2 lg:hidden" aria-hidden="true">
        {['Overview', 'Tasks', 'Meetings', 'Knowledge'].map((item, index) => (
          <span
            key={item}
            className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-medium ${
              index === 0 ? 'bg-paper text-ink' : 'text-muted-foreground'
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid lg:grid-cols-[12.5rem_minmax(0,1fr)]">
        <div className="hidden border-r border-line bg-[#f7f6f2] p-3 lg:block" aria-hidden="true">
          <p className="px-2 pb-2 text-xs font-medium text-muted-foreground">Workspace</p>
          <ul className="space-y-1 text-sm">
            {[
              ['Overview', true],
              ['Tasks', false],
              ['Meetings', false],
              ['Knowledge', false],
            ].map(([label, current]) => (
              <li
                key={String(label)}
                className={`rounded-md px-2 py-1.5 ${current ? 'bg-surface font-medium text-ink' : 'text-muted-foreground'}`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3 rounded-md border border-line px-3 py-2.5">
            <div className="flex min-w-0 items-start gap-2">
              <Calendar className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Upcoming meeting</p>
                <p className="truncate text-sm font-medium text-ink">Onboarding review · October 9</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Current priorities</p>
              <ul className="mt-2 space-y-2">
                {priorities.map((item) => (
                  <li key={item} className="rounded-md px-2 py-1.5 text-sm leading-5 text-ink transition-colors hover:bg-paper">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Open tasks</p>
              <ul className="mt-2 space-y-2">
                {tasks.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-md px-2 py-1.5 text-sm leading-5 transition-colors hover:bg-paper">
                    <span className="mt-0.5 size-3.5 shrink-0 rounded-[3px] border border-input" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-md border border-line p-3 sm:p-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-ink">Product Planning</p>
              <p className="shrink-0 text-xs text-muted-foreground">October 7</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The team agreed to finalize onboarding flow revisions before the next release.
            </p>
            <p className="mt-4 text-xs font-medium text-muted-foreground">AI-generated action items</p>
            <ul className="mt-2 space-y-1.5 text-sm leading-6 text-ink">
              {tasks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-brand pl-3">
            <p className="text-xs font-medium text-muted-foreground">Project risk</p>
            <p className="mt-2 text-sm leading-6 text-ink">
              Approval for the new onboarding flow is still pending.
            </p>
          </div>

          <form
            className="flex items-center gap-2 rounded-md border border-line bg-[#f7f6f2] px-3 py-2.5"
            onSubmit={(event) => event.preventDefault()}
          >
            <MessageSquare className="size-4 shrink-0 text-brand" aria-hidden="true" />
            <label htmlFor="ask-preview" className="sr-only">
              Ask Jointick
            </label>
            <input
              id="ask-preview"
              readOnly
              value="What changed in this project this week?"
              className="w-full min-w-0 bg-transparent text-sm text-ink outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
