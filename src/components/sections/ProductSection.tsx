import { Section, SectionHeading } from '@/components/layout/Section'
import {
  KnowledgePreview,
  MeetingsPreview,
  ProjectsPreview,
  TasksPreview,
} from '@/components/product/ProductPreviews'

const areas = [
  {
    title: 'Projects',
    body: 'Keep tasks, discussions, documents, decisions, and progress connected.',
    preview: <ProjectsPreview />,
  },
  {
    title: 'Meetings',
    body: 'Capture meeting context and turn conversations into summaries and actions.',
    preview: <MeetingsPreview />,
  },
  {
    title: 'Knowledge',
    body: 'Make internal documents and project knowledge understandable through natural language.',
    preview: <KnowledgePreview />,
  },
  {
    title: 'Tasks',
    body: 'Convert discussions, decisions, and meetings into clear next steps.',
    preview: <TasksPreview />,
  },
]

export function ProductSection() {
  return (
    <Section id="product">
      <SectionHeading eyebrow="One connected workspace" title="Everything around the work, finally connected." />
      <div className="mt-16 space-y-16 sm:space-y-24">
        {areas.map((area, index) => {
          const reversed = index % 2 === 1
          return (
            <div key={area.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
              <div className={reversed ? 'lg:order-2' : undefined}>
                <h3 className="text-2xl font-semibold tracking-tight text-ink">{area.title}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">{area.body}</p>
              </div>
              <div className={reversed ? 'lg:order-1' : undefined}>{area.preview}</div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
