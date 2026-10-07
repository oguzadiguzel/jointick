import { Layers, ListChecks, MessageSquare, Workflow } from 'lucide-react'

import { Section, SectionHeading } from '@/components/layout/Section'

const benefits = [
  {
    title: 'Understand everything',
    body: 'Turn meetings, documents, and project activity into structured context.',
    icon: Layers,
  },
  {
    title: 'Know what happens next',
    body: 'Automatically surface tasks, priorities, blockers, and next steps.',
    icon: ListChecks,
  },
  {
    title: 'Ask your workspace',
    body: 'Get answers using the context already created by your team.',
    icon: MessageSquare,
  },
  {
    title: 'Keep work moving',
    body: 'Generate summaries, follow-ups, and status updates without repeating manual work.',
    icon: Workflow,
  },
]

export function Problem() {
  return (
    <Section className="border-t border-line">
      <SectionHeading eyebrow="Work is fragmented" title="Your team already has the information. Jointick helps you use it.">
        Important decisions are buried in meetings, documents, project tools, and conversations. Jointick connects
        that context and turns it into clear actions.
      </SectionHeading>
      <ul className="mt-14 grid overflow-hidden rounded-lg border border-line sm:grid-cols-2">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="border-b border-line p-6 last:border-b-0 sm:p-8 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <benefit.icon className="size-5 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
