import { Section } from '@/components/layout/Section'

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:gap-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">About Jointick</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Building a better operating layer for small teams.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              Jointick is an early-stage software company founded in 2026. Product development began in July 2026
              with a focus on building an AI-native workspace that reduces the operational overhead of managing
              projects, information, and team coordination.
            </p>
            <p>
              We believe AI should do more than generate text. It should understand the context surrounding work
              and help teams continuously turn information into useful action.
            </p>
          </div>
        </div>
        <dl className="h-fit border-t border-line pt-6 text-sm lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
          <div>
            <dt className="text-muted-foreground">Status</dt>
            <dd className="mt-1 text-base font-medium text-ink">Currently in development.</dd>
          </div>
          <div className="mt-6">
            <dt className="text-muted-foreground">Founded</dt>
            <dd className="mt-1 font-medium text-ink">2026</dd>
          </div>
          <div className="mt-6">
            <dt className="text-muted-foreground">Product development</dt>
            <dd className="mt-1 font-medium text-ink">July 2026</dd>
          </div>
          <div className="mt-6">
            <dt className="text-muted-foreground">Funding</dt>
            <dd className="mt-1 font-medium text-ink">Bootstrapped</dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
