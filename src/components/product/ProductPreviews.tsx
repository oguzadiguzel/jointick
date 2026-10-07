import { MockFrame, StatusPill } from '@/components/product/MockFrame'

const meetingActions = ['Update onboarding copy', 'Review mobile navigation', 'Finalize analytics events']

export function ProjectsPreview() {
  return (
    <MockFrame title="Projects">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ink">Website Redesign</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">Tasks, notes, and documents in one project</p>
        </div>
        <StatusPill>On track</StatusPill>
      </div>
      <ul className="mt-4 divide-y divide-line text-sm">
        {[
          ['Open tasks', '3'],
          ['Latest meeting', 'Product Planning'],
          ['Document', 'Onboarding brief'],
          ['Decision', 'Revise onboarding before release'],
        ].map(([label, value]) => (
          <li key={label} className="flex items-baseline justify-between gap-4 py-2.5">
            <span className="text-muted-foreground">{label}</span>
            <span className="text-right text-ink">{value}</span>
          </li>
        ))}
      </ul>
    </MockFrame>
  )
}

export function MeetingsPreview() {
  return (
    <MockFrame title="Meetings">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-ink">Product Planning</p>
        <p className="text-xs text-muted-foreground">October 7</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        The team agreed to finalize onboarding flow revisions before the next release.
      </p>
      <p className="mt-4 text-xs font-medium text-muted-foreground">Action items</p>
      <ul className="mt-2 space-y-1.5 text-sm text-ink">
        {meetingActions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </MockFrame>
  )
}

export function KnowledgePreview() {
  return (
    <MockFrame title="Knowledge">
      <p className="text-xs font-medium text-muted-foreground">Onboarding brief</p>
      <p className="mt-3 text-sm font-medium text-ink">What is still blocking the onboarding flow?</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Approval for the new onboarding flow is still pending.
      </p>
      <p className="mt-4 text-xs text-muted-foreground">Source · Website Redesign</p>
    </MockFrame>
  )
}

export function TasksPreview() {
  return (
    <MockFrame title="Tasks">
      <ul className="space-y-2">
        {meetingActions.map((item) => (
          <li key={item} className="flex items-start gap-2 rounded-md border border-line px-3 py-2.5 text-sm">
            <span className="mt-0.5 size-3.5 shrink-0 rounded-[3px] border border-input" aria-hidden="true" />
            <span>
              <span className="block text-ink">{item}</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">From Product Planning</span>
            </span>
          </li>
        ))}
      </ul>
    </MockFrame>
  )
}
