import { Button } from '@/components/ui/button'
import { DashboardMock } from '@/components/product/DashboardMock'

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rise max-w-3xl">
          <p className="text-sm font-medium text-brand">AI-native workspace for modern teams</p>
          <h1 className="mt-4 text-balance text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
            Your team’s work, understood by AI.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Jointick is a workspace for small teams. Projects, meetings, documents, and tasks stay together.
            Claude reads that context and returns the summary, the tasks, the risk, and the next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#early-access">Get Early Access</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#product">Explore Jointick</a>
            </Button>
          </div>
          <p className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink">
            <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            Early access — currently in development
          </p>
        </div>
        <div className="mt-12 sm:mt-14">
          <p className="mb-4 text-sm text-muted-foreground">One project open in the workspace.</p>
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}
