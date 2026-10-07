import { About } from '@/components/sections/About'
import { AiDemo } from '@/components/sections/AiDemo'
import { AiSection } from '@/components/sections/AiSection'
import { EarlyAccess } from '@/components/sections/EarlyAccess'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Problem } from '@/components/sections/Problem'
import { ProductSection } from '@/components/sections/ProductSection'
import { UseCases } from '@/components/sections/UseCases'
import { Shell } from '@/components/layout/Shell'
import { usePageMeta } from '@/lib/usePageMeta'

export function HomePage() {
  usePageMeta('Jointick — AI-native workspace for modern teams', 'https://jointick.co/')

  return (
    <Shell>
      <Hero />
      <Problem />
      <AiSection />
      <ProductSection />
      <UseCases />
      <HowItWorks />
      <AiDemo />
      <About />
      <EarlyAccess />
    </Shell>
  )
}
