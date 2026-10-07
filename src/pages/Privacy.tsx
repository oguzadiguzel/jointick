import { Shell } from '@/components/layout/Shell'
import { usePageMeta } from '@/lib/usePageMeta'

export function PrivacyPage() {
  usePageMeta(
    'Privacy — Jointick',
    'https://jointick.co/privacy',
    'How to contact Jointick and what this website collects.',
  )

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-medium text-brand">Jointick</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Privacy</h1>
        <div className="mt-8 space-y-8 text-base leading-7 text-muted-foreground">
          <p>This website does not include a form and does not store visitor details.</p>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-ink">Contact</h2>
            <p>
              Questions and early access requests can be sent to{' '}
              <a href="mailto:hello@jointick.co" className="text-ink underline underline-offset-4">
                hello@jointick.co
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </Shell>
  )
}
