"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const objections = [
  {
    q: "What's the catch?",
    a: "No catch. The website is free because the monthly system is how I make money. I build your site to prove I can deliver. You stay because the leads keep coming. If they don't? Keep the site and walk away.",
  },
  {
    q: "A real website in 48 hours?",
    a: "Yes. Fully custom, mobile-optimized, designed around your business — not pulled from a template library. You review everything before it goes live. If you want changes, I make them.",
  },
  {
    q: "Is $297/month worth it?",
    a: "Do the math: one saved lead = one job. One job = $1,500-$3,000+. The system costs $297/month. If it saves you even one lead a month, you're 5-10x ahead. Compare that to an agency at $2,000+/month that doesn't guarantee anything.",
  },
  {
    q: "What if I want to cancel?",
    a: "Six-month minimum, then month-to-month. Cancel anytime after that. You keep your website — you just lose the marketing system. Fair warning: once the leads start coming in, nobody wants to turn it off.",
  },
  {
    q: "I already have a website / designer / agency.",
    a: "Great. How's that working out? If you're happy with the leads you're getting, you don't need this. But if your current site isn't pulling its weight, a second opinion costs you nothing.",
  },
]

export function Objections() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section
      id="faq"
      className="bg-white py-28 md:py-40"
      aria-labelledby="objections-heading"
    >
      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#0A0F1C]/30">
            {"Reasonable questions"}
          </p>
          <h2
            id="objections-heading"
            className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-[#0A0F1C] md:text-[2.75rem] lg:text-5xl"
          >
            {"You\u2019re skeptical. Good."}
          </h2>
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-200 md:mt-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {objections.map((o, i) => (
              <AccordionItem
                key={`o-${i}`}
                value={`o-${i}`}
                className="border-[#0A0F1C]/[0.06]"
              >
                <AccordionTrigger className="text-left text-[15px] font-semibold text-[#0A0F1C] transition-colors hover:text-[#0A0F1C]/60 hover:no-underline md:text-base [&>svg]:text-[#0A0F1C]/25">
                  {o.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-[1.75] text-[#0A0F1C]/50 md:text-base md:leading-[1.75]">
                  {o.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
