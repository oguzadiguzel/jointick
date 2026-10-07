const focusItems = [
  'Finalize onboarding copy',
  'Resolve the pending design approval',
  'Review mobile navigation',
  'Confirm analytics event tracking',
]

const sources = ['Product Planning meeting', 'Onboarding brief', 'Website Redesign project']

export function AiAnswer() {
  return (
    <div className="mt-12 overflow-hidden rounded-lg border border-line bg-surface lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="border-b border-line bg-[#f7f6f2] p-6 sm:p-8 lg:border-b-0 lg:border-r">
        <p className="text-xs font-medium text-muted-foreground">Ask Jointick</p>
        <p className="mt-4 text-balance text-2xl font-medium tracking-tight text-ink sm:text-[1.75rem] sm:leading-snug">
          What should we focus on before Friday?
        </p>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">Website Redesign · Product Planning, October 7</p>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-sm font-medium text-ink">Based on the current project activity:</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-ink">
          {focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-6 text-ink">
          <span className="font-medium">Risk. </span>
          The onboarding redesign may slip if approval is not received by Wednesday.
        </p>
        <div className="mt-6 border-t border-line pt-4">
          <p className="text-xs font-medium text-muted-foreground">Sources</p>
          <ul className="mt-2 space-y-1 text-sm text-ink">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
