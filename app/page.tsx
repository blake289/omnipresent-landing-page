import { TopBar } from "@/components/top-bar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { ValueStack } from "@/components/value-stack"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/social-proof"
import { FitSection } from "@/components/fit-section"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { Analytics } from "@/components/analytics"

export default function Page() {
  return (
    <main>
      <TopBar />
      <Hero />
      <div className="h-px bg-[var(--border-l)]" />
      <Problem />
      <ValueStack />
      <div className="h-px bg-[var(--border-l)]" />
      <HowItWorks />
      <div className="h-px bg-[var(--border-l)]" />
      <Testimonials />
      <div className="h-px bg-[var(--border-l)]" />
      <FitSection />
      <div className="h-px bg-[var(--border-l)]" />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <Analytics />
    </main>
  )
}
