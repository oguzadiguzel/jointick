import { Section, SectionHeading } from '@/components/layout/Section'

const steps = [
  {
    number: '01',
    title: 'Bring your work together',
    body: 'Projects, meetings, documents, and tasks live in a connected workspace.',
  },
  {
    number: '02',
    title: 'Claude reads the context',
    body: 'Claude uses the project, the meetings, the documents, and the tasks already in the workspace.',
  },
  {
    number: '03',
    title: 'Move forward',
    body: 'Get summaries, answers, action items, risks, priorities, and next steps.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-line bg-band">
      <SectionHeading eyebrow="How Jointick works" title="From information to action." />
      <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {steps.map((step) => (
          <li key={step.number} className="border-t border-ink/15 pt-6">
            <p className="text-sm font-medium tabular-nums text-brand">{step.number}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
