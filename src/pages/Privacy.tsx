import { DocumentPage, DocumentSection } from '@/components/layout/DocumentPage'
import { usePageMeta } from '@/lib/usePageMeta'

const mail = 'hello@jointick.co'

export function PrivacyPage() {
  usePageMeta(
    'Privacy — Jointick',
    'https://jointick.co/privacy',
    'What the Jointick website collects, how email to hello@jointick.co is handled, and what this site does not do.',
  )

  return (
    <DocumentPage
      eyebrow="Privacy"
      title="What this website does with information."
      lede="This page covers jointick.co, the public website of Jointick. It describes the website as it works today. The product is still in development and does not yet ask you to create an account here."
    >
      <DocumentSection title="Who this page is from">
        <p>
          The site is published by Jointick, an early-stage software company founded in 2026. The contact address
          is{' '}
          <a className="text-ink underline underline-offset-4" href={`mailto:${mail}`}>
            {mail}
          </a>
          . The website is jointick.co.
        </p>
      </DocumentSection>

      <DocumentSection title="What the website is">
        <p>
          jointick.co explains the product Jointick is building: a workspace where projects, meetings, documents,
          and tasks stay together, and Claude uses that context to produce summaries, tasks, risks, and next
          steps. Reading the site does not create a customer account, a workspace, or an early-access record.
        </p>
      </DocumentSection>

      <DocumentSection title="Information this website does not collect">
        <p>The public site does not include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A contact form, an early-access form, or a newsletter form.</li>
          <li>An account, a login, or a workspace you can join from the page.</li>
          <li>Payment details, because the site does not sell anything.</li>
          <li>A cookie used for advertising, and no advertising tags.</li>
        </ul>
        <p>Visiting a page does not add you to a list.</p>
      </DocumentSection>

      <DocumentSection title="Email">
        <p>
          If you write to {mail}, that message is received at the company mailbox. The message includes whatever
          you put in it, such as your email address, your name, and the reason you wrote. Jointick uses that
          correspondence to reply, to answer a question about the product, and to tell you if early access is
          available when you asked for that.
        </p>
        <p>
          Those messages are not sold and are not used to build a public customer list. If you want a message
          deleted, reply to the same thread or write again to {mail} and say so.
        </p>
      </DocumentSection>

      <DocumentSection title="Hosting">
        <p>
          The site is hosted on Cloudflare. Delivering a page involves ordinary technical data such as the IP
          address, the browser, and the page requested. Cloudflare uses that data to serve, cache, and protect
          the site. Jointick does not run a separate analytics product on this website, and it does not add a
          tag manager.
        </p>
      </DocumentSection>

      <DocumentSection title="Cookies">
        <p>
          The site itself does not set a marketing or analytics cookie. A strictly necessary cookie is not
          required to read the pages. If a future version of the product adds accounts, this page will describe
          what that version stores before it asks you for it.
        </p>
      </DocumentSection>

      <DocumentSection title="What Jointick does not do with site visitors">
        <ul className="list-disc space-y-2 pl-5">
          <li>Sell or rent visitor information.</li>
          <li>Use the website to make legal, medical, or financial decisions about you.</li>
          <li>Offer the product to children, or knowingly collect information from anyone under 18.</li>
          <li>Treat a page view as a request for early access.</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="The product and this page">
        <p>
          Jointick the product is in development. This privacy page covers the public website. When the product
          stores project content, meeting notes, or documents for a team, that handling will be described to
          the teams who use it. It is not described here as if that system were already open on this site.
        </p>
        <p>
          The pages do not provide legal, medical, or financial advice. The examples on the site, including the
          Website Redesign project, are there to show the workspace. They are not a customer story.
        </p>
      </DocumentSection>

      <DocumentSection title="Changes">
        <p>
          If this page changes, the updated version will be published at jointick.co/privacy. The current version
          is dated 7 October 2026.
        </p>
      </DocumentSection>

      <DocumentSection title="Contact">
        <p>
          Questions about this page go to{' '}
          <a className="text-ink underline underline-offset-4" href={`mailto:${mail}`}>
            {mail}
          </a>
          .
        </p>
      </DocumentSection>
    </DocumentPage>
  )
}
