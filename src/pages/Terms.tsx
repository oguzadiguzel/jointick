import { DocumentPage, DocumentSection } from '@/components/layout/DocumentPage'
import { usePageMeta } from '@/lib/usePageMeta'

const mail = 'hello@jointick.co'

export function TermsPage() {
  usePageMeta('Terms — Jointick', 'https://jointick.co/terms', 'Terms for using the Jointick website at jointick.co.')

  return (
    <DocumentPage
      eyebrow="Terms"
      title="Terms for using this website."
      lede="These terms cover jointick.co, the public website of Jointick. They do not describe a customer agreement for a launched product account, because that account system is not open on this site."
    >
      <DocumentSection title="The site">
        <p>
          Jointick publishes this website to explain the workspace it is building. You may read the pages, share
          the public URLs, and write to the company at {mail}. You may not present the site, or portions of it,
          as your own product.
        </p>
      </DocumentSection>

      <DocumentSection title="The product">
        <p>
          The product is in development and offered as early access information, not as a generally available
          service on this website. Nothing on these pages is a promise of a launch date, a price, a support
          level, or a particular result from using Claude inside the workspace.
        </p>
        <p>
          Interface examples, including the Website Redesign project, show how the workspace is intended to
          work. They are not customer results.
        </p>
      </DocumentSection>

      <DocumentSection title="Acceptable use">
        <p>Do not use the site to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Break the law, or attempt to break into the site or the systems that host it.</li>
          <li>Send malware, scrape the site in a way that degrades it, or misrepresent your identity to Jointick.</li>
          <li>Copy the product description and present Jointick as your company.</li>
        </ul>
      </DocumentSection>

      <DocumentSection title="Email">
        <p>
          If you email {mail}, you are responsible for what you send. Jointick uses the message to reply. Do not
          send confidential information you are not prepared to share with the company by email.
        </p>
      </DocumentSection>

      <DocumentSection title="The site is provided as it is">
        <p>
          The pages are provided as they are, without a warranty of accuracy, availability, or fitness for a
          particular purpose. To the extent the law allows, Jointick is not liable for decisions you make from
          the text on this website, including an example summary, task, or risk. Claude output on a future
          product can be wrong and is not a substitute for a person’s judgment.
        </p>
      </DocumentSection>

      <DocumentSection title="Intellectual property">
        <p>
          The text, layout, and Jointick name on this website belong to Jointick. You may link to the public
          pages. You may not copy the site and present it as your product. Claude is a name used by Anthropic.
          Jointick is not affiliated with, endorsed by, or a partner of Anthropic, and it does not own the Claude
          name.
        </p>
      </DocumentSection>

      <DocumentSection title="Who publishes these terms">
        <p>
          These terms are published by Jointick. The company has not published a registered legal name, a
          registered office, or a chosen court on this website. That absence is stated on the About page. Until
          a registered office is published, these terms do not name a country of law or a court. Questions and
          disputes about the website can be sent to {mail}.
        </p>
        <p>
          Using the site after a published change is not a signed contract. It means the published terms are the
          terms Jointick offers for use of the website. A future product account would need its own agreement.
        </p>
      </DocumentSection>

      <DocumentSection title="No professional advice">
        <p>
          The website does not provide legal, medical, or financial advice. It is not directed at anyone under
          18.
        </p>
      </DocumentSection>

      <DocumentSection title="Changes">
        <p>
          Jointick may update these terms by publishing a new version at jointick.co/terms. The current version
          is dated 7 October 2026. Continued use of the website after a change means you are using it under the
          published terms.
        </p>
      </DocumentSection>

      <DocumentSection title="Contact">
        <p>
          Questions about these terms go to{' '}
          <a className="text-ink underline underline-offset-4" href={`mailto:${mail}`}>
            {mail}
          </a>
          .
        </p>
      </DocumentSection>
    </DocumentPage>
  )
}
