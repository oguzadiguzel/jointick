import { ArrowDown } from 'lucide-react'

const sources = ['Projects', 'Meetings', 'Documents', 'Tasks']
const outputs = ['Summaries', 'Action Items', 'Answers', 'Risks', 'Priorities', 'Follow-ups']

function FlowArrow() {
  return (
    <div className="flex justify-center py-3 text-muted-foreground" aria-hidden="true">
      <ArrowDown className="size-4" />
    </div>
  )
}

export function AiWorkflow() {
  return (
    <div className="mt-14" aria-label="How work moves through Jointick and Claude">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {sources.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line bg-surface px-3 py-3 text-center text-sm font-medium text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
      <FlowArrow />
      <div className="mx-auto max-w-md rounded-md border border-line bg-surface px-4 py-3 text-center">
        <p className="text-sm font-medium text-ink">Jointick Context Layer</p>
      </div>
      <FlowArrow />
      <div className="mx-auto max-w-xs rounded-md border border-brand/40 bg-surface px-4 py-3 text-center">
        <p className="text-xs text-muted-foreground">Core intelligence</p>
        <p className="mt-1 text-sm font-medium text-ink">Claude</p>
      </div>
      <FlowArrow />
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {outputs.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line bg-paper px-3 py-3 text-center text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
