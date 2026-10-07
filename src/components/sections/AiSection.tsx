import { FileText, ListTodo, PenLine, Search } from 'lucide-react'

import { Section, SectionHeading } from '@/components/layout/Section'
import { AiWorkflow } from '@/components/product/AiWorkflow'

const capabilities = [
  {
    title: 'Smart Summaries',
    body: 'Turn long meetings and documents into concise, useful context.',
    icon: FileText,
  },
  {
    title: 'Action Extraction',
    body: 'Automatically identify decisions, tasks, owners, and next steps.',
    icon: ListTodo,
  },
  {
    title: 'Knowledge Q&A',
    body: 'Ask questions across project history, documents, and meeting context.',
    icon: Search,
  },
  {
    title: 'Workflow Assistance',
    body: 'Generate follow-ups, status updates, and structured actions from team activity.',
    icon: PenLine,
  },
]

export function AiSection() {
  return (
    <Section id="ai" className="border-y border-line bg-band">
      <SectionHeading eyebrow="AI built into the workflow" title="Intelligence that understands the context of your work.">
        Jointick uses Claude to reason across project information, meetings, documents, tasks, and internal
        knowledge. AI is integrated into the workflow instead of existing as a separate chatbot.
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
