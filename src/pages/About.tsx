import { DocumentPage, DocumentSection } from '@/components/layout/DocumentPage'
import { usePageMeta } from '@/lib/usePageMeta'

const mail = 'hello@jointick.co'

export function AboutPage() {
  usePageMeta(
    'About — Jointick',
    'https://jointick.co/about',
    'Jointick is an early-stage software company, founded in 2026, building a workspace where Claude turns team context into summaries, tasks, risks, and next steps.',
  )

  return (
    <DocumentPage
      eyebrow="About Jointick"
      title="A software company building one workspace for small teams."
      lede="Jointick is the product. It brings projects, meetings, documents, and tasks into one place, and Claude works inside that workspace rather than beside it."
    >
      <DocumentSection title="The company">
        <p>
          Jointick is an early-stage software company founded in 2026. Product development began in July 2026.
          The company is bootstrapped. There is no outside funding round to disclose, and the product is in early
          access while development continues.
        </p>
        <p>
          The company builds software. It is not an agency, a consulting firm, or a studio that uses Claude to
          deliver client work. Startups, agencies, consulting teams, and service businesses are the teams the
          product is for.
        </p>
      </DocumentSection>

      <DocumentSection title="The product">
        <p>
          Small teams already have the information they need. It is split across meetings, documents, chats,
          project tools, and task lists. Jointick is the workspace that holds the work itself: the project, the
          discussion, the document, the decision, and the task.
        </p>
        <p>Inside a project, a team can keep four kinds of work connected:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Projects, so tasks, discussions, documents, decisions, and progress stay together.</li>
          <li>Meetings, so a conversation becomes a summary and a set of actions.</li>
          <li>Knowledge, so internal documents can be asked about in plain language.</li>
          <li>Tasks, so a decision or a meeting becomes a clear next step.</li>
        </ul>
        <p>
          The product is in development. There is no published opening date, seat count, or price. Early access
          is a request by email to {mail}. The panels on jointick.co are examples of the interface, not results
          from a customer.
        </p>
        <p>
          Work enters the project when the team adds it: meeting notes, documents, and tasks. This website does
          not describe a connection to Slack, Zoom, a calendar, or a file drive.
        </p>
      </DocumentSection>

      <DocumentSection title="How Claude is used">
        <p>
          Claude is the model the product is being built around. It is not a separate chatbot next to the
          workspace. Jointick is not affiliated with, endorsed by, or a partner of Anthropic. The product is
          being built to call Claude through the Claude API. This site does not name a model version.
        </p>
        <p>The product is being built so that Claude can:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Read project documents and meeting notes.</li>
          <li>Write a short summary of what was decided.</li>
          <li>Extract action items, including the task and the next step.</li>
          <li>Point out blockers, risks, and what is still waiting on someone.</li>
          <li>Surface the priorities for the work in front of the team.</li>
          <li>Answer a question using the project history, the documents, and the meetings.</li>
          <li>Draft a follow-up or a status update from work that already happened.</li>
          <li>Turn a discussion into a structured task.</li>
        </ul>
        <p>
          A question such as “What should we focus on before Friday?” is meant to be answered from the project,
          the meeting, and the brief, with those sources named. The version of that answer on the homepage is an
          example. Claude can be wrong, so a person should confirm a summary, a task, or a risk before treating
          it as decided.
        </p>
      </DocumentSection>

      <DocumentSection title="Who it is for">
        <p>The workspace is for small teams that need the same context in order to move.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Startups keeping product discussions, decisions, meetings, and execution together.</li>
          <li>Agencies turning client meetings, feedback, and project context into tasks and follow-ups.</li>
          <li>Consulting teams organizing client knowledge, notes, recommendations, and deliverables.</li>
          <li>
            Service businesses keeping a job, the client notes, and the follow-up in one project instead of
            rebuilding the status by hand.
          </li>
        </ul>
      </DocumentSection>

      <DocumentSection title="Company facts">
        <dl className="grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted-foreground">Status</dt>
            <dd className="mt-1 font-medium text-ink">Currently in development. Early access.</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Founded</dt>
            <dd className="mt-1 font-medium text-ink">2026</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Product development</dt>
            <dd className="mt-1 font-medium text-ink">July 2026</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Funding</dt>
            <dd className="mt-1 font-medium text-ink">Bootstrapped</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Website</dt>
            <dd className="mt-1 font-medium text-ink">jointick.co</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Email</dt>
            <dd className="mt-1 font-medium text-ink">
              <a className="underline underline-offset-4" href={`mailto:${mail}`}>
                {mail}
              </a>
            </dd>
          </div>
        </dl>
      </DocumentSection>

      <DocumentSection title="What this page does not list">
        <p>
          Jointick has not published a registered legal name, a registered office, a city, a founder name, or a
          social media account on this website. Those details are absent because they are not stated here, not
          because a reader should infer them. The public contact is the email address below.
        </p>
        <p>
          There is no status page, support hours, or service-level agreement, because the product is not open as
          a paid service.
        </p>
      </DocumentSection>

      <DocumentSection title="Contact">
        <p>
          Write to{' '}
          <a className="text-ink underline underline-offset-4" href={`mailto:${mail}`}>
            {mail}
          </a>{' '}
          for early access, a question about the product, or a question about the company. That address is the
          company contact. The website does not take applications through a form.
        </p>
      </DocumentSection>
    </DocumentPage>
  )
}
