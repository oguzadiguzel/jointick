import { FileText, ListTodo, PenLine, Search } from 'lucide-react'

import { Section, SectionHeading } from '@/components/layout/Section'
import { AiWorkflow } from '@/components/product/AiWorkflow'

const capabilities = [
  {
    title: 'Meeting and document analysis',
    body: 'Claude reads meeting notes and project documents and turns them into a short, usable summary.',
    icon: FileText,
  },
  {
    title: 'Action item extraction',
    body: 'Claude pulls decisions, tasks, and next steps out of the discussion instead of leaving them in the notes.',
    icon: ListTodo,
  },
  {
    title: 'Knowledge Q&A',
    body: 'Ask a question across the project history, the documents, and the meetings already in the workspace.',
    icon: Search,
  },
  {
    title: 'Risk and priority detection',
    body: 'Claude surfaces blockers, risks, and what the team should handle next from the current project context.',
    icon: PenLine,
  },
]

export function AiSection() {
  return (
    <Section id="ai" className="border-y border-line bg-band">
      <SectionHeading eyebrow="Claude in the product" title="What Claude does inside the workspace.">
        Claude is built into the product. It reasons across the project, the meeting notes, the documents, and
        the tasks already in the workspace, then returns summaries, tasks, answers, risks, and next steps. It is
        not a separate chatbot.
      </SectionHeading>
      <AiWorkflow />
      <ul className="mt-14 grid overflow-hidden rounded-lg border border-line bg-surface sm:grid-cols-2">
        {capabilities.map((item) => (
          <li
            key={item.title}
            className="border-b border-line p-6 last:border-b-0 sm:p-8 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <item.icon className="size-5 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
