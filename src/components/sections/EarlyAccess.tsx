import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'

const earlyAccessMail = 'mailto:hello@jointick.co?subject=Early%20access'

export function EarlyAccess() {
  return (
    <Section id="early-access" className="border-y border-line bg-band">
      <div className="mx-auto max-w-xl">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Spend less time organizing work.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Jointick is currently in development. Write to us to follow the product and hear when early access
          opens.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={earlyAccessMail}>Request Early Access</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Contact{' '}
          <a href="mailto:hello@jointick.co" className="text-ink underline underline-offset-4">
            hello@jointick.co
          </a>
        </p>
      </div>
    </Section>
  )
}
