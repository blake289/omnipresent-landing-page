import { Hero } from "@/components/hero"
import { Tension } from "@/components/problem"
import { SmartWebsite } from "@/components/smart-website"
import { Proof } from "@/components/social-proof"
import { TheOffer } from "@/components/solution"
import { Process } from "@/components/how-it-works"
import { Objections } from "@/components/faq"
import { Close } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Page() {
  return (
    <main>
      {/* 1. Hook -- provocation, curiosity */}
      <Hero />
      {/* 2. Tension -- why most websites fail */}
      <Tension />
      {/* 3. Concept -- introduce "Smart Website" */}
      <SmartWebsite />
      {/* 4. Trust -- proof before the ask */}
      <Proof />
      {/* 5. Reveal -- explain the offer, why it's free */}
      <TheOffer />
      {/* 6. Clarity -- three simple steps */}
      <Process />
      {/* 7. Objections -- answer doubt calmly */}
      <Objections />
      {/* 8. Close -- one final, low-pressure ask */}
      <Close />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
