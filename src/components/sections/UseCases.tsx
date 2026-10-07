import { Blocks, BookOpen, Briefcase, Store } from 'lucide-react'

import { Section, SectionHeading } from '@/components/layout/Section'

const cases = [
  {
    title: 'Startups',
    body: 'Keep product discussions, decisions, meetings, and execution connected as the company grows.',
    icon: Blocks,
  },
  {
    title: 'Agencies',
    body: 'Turn client meetings, feedback, and project context into clear tasks and follow-ups.',
    icon: Briefcase,
  },
  {
    title: 'Consulting Teams',
    body: 'Organize client knowledge, meeting notes, recommendations, and deliverables.',
    icon: BookOpen,
  },
  {
    title: 'Service Businesses',
    body: 'Keep a job, the notes from the client, and the follow-up in one project instead of rebuilding the status by hand.',
    icon: Store,
  },
]

export function UseCases() {
  return (
    <Section id="use-cases" className="border-t border-line">
      <SectionHeading title="Built for small teams that move fast.">
        Jointick is the product. These are the teams it is for.
      </SectionHeading>
      <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((item) => (
          <li key={item.title} className="border-t border-line pt-6">
            <item.icon className="size-5 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
