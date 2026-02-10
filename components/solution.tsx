"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function TheOffer() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section
      id="included"
      className="bg-white py-28 md:py-40"
      aria-labelledby="offer-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        {/* The reveal */}
        <div className="mx-auto max-w-3xl">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#0A0F1C]/30">
              Here&apos;s the offer
            </p>
            <h2
              id="offer-heading"
              className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-[#0A0F1C] md:text-[2.75rem] lg:text-5xl"
            >
              I'll Build Your Smart Website for Free.
              <br className="hidden md:block" />
              You Only Pay If It Works.
            </h2>
          </div>

          {/* The logic */}
          <div
            className={`mt-10 max-w-2xl space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-[17px] leading-[1.85] text-[#0A0F1C]/50 md:text-lg md:leading-[1.85]">
              {"In under 48 hours, I'll design and build a custom website for your business. Not a template. Professional copywriting, SEO structure, contact forms, lightning-fast load times — all included. The build costs you nothing."}
            </p>
            <p className="text-[17px] leading-[1.85] text-[#0A0F1C]/50 md:text-lg md:leading-[1.85]">
              {"$297/month gets you the marketing system that makes the website work: missed-call text-back (so you never lose a lead to voicemail again), lead capture, automated follow-ups, hosting, maintenance, and a dashboard showing exactly what's happening. One extra job per month and it pays for itself 5x over."}
            </p>
            <p className="text-[17px] leading-[1.85] text-[#0A0F1C]/50 md:text-lg md:leading-[1.85]">
              {"If it doesn't pay for itself, you keep the website and walk away. No hard feelings."}
            </p>
          </div>
        </div>

        {/* Dashboard mockup -- makes the system tangible */}
        <div
          className={`mt-16 transition-all duration-1000 delay-400 md:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#FAFBFC] p-2 shadow-xl shadow-black/[0.04] ring-1 ring-black/[0.03] md:p-3">
            <Image
              src="/images/dashboard-mockup.png"
              alt="Marketing dashboard showing lead notifications, automated texts sent, and analytics"
              width={1200}
              height={675}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
          <p className="mt-4 text-center text-[13px] text-[#0A0F1C]/30">
            Your dashboard: leads, follow-ups, and results in one place.
          </p>
        </div>

        {/* Why free box + CTA */}
        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          <div
            className={`rounded-2xl border border-[#0A0F1C]/[0.04] bg-[#FAFBFC] p-7 md:p-9 transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-[15px] font-medium text-[#0A0F1C]/70 md:text-base">
              {"\"Wait — why is this free?\""}
            </p>
            <p className="mt-3 text-[15px] leading-[1.8] text-[#0A0F1C]/45 md:text-base md:leading-[1.8]">
              {"Simple: the website isn't how I make money. The monthly system is. I build your site for free because I'm betting the results will speak for themselves. You stay because it works — not because you're stuck in a contract."}
            </p>
          </div>

          {/* CTA */}
          <div
            className={`mt-12 transition-all duration-700 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A0F1C] px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#1a2036] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0F1C]/40 focus-visible:ring-offset-2"
            >
              Claim your Smart Website
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-4 text-[13px] text-[#0A0F1C]/35">
              30-day money-back guarantee. 6-month minimum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
