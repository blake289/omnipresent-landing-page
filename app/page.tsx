import { TopBar } from "@/components/top-bar"
import { Hero } from "@/components/hero"
import { CredibilityStrip } from "@/components/credibility-strip"
import { Problem } from "@/components/problem"
import { UniqueMechanism } from "@/components/unique-mechanism"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/social-proof"
import { CaseStudy } from "@/components/case-study"
import { ValueStack } from "@/components/value-stack"
import { ObjectionHandling } from "@/components/objection-handling"
import { FitSection } from "@/components/fit-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

export default function Page() {
  return (
    <main>
      <TopBar />
      <Hero />
      <CredibilityStrip />
      <Problem />
      <UniqueMechanism />
      <HowItWorks />
      <Testimonials />
      <CaseStudy />
      <ValueStack />
      <ObjectionHandling />
      <FitSection />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <ExitIntentPopup />
    </main>
  )
}
