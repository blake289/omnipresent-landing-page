"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    num: 1,
    title: "15-minute call",
    body: "Tell us about your business, your customers, and where leads are falling through. We will tell you exactly what we would build. If it's not a fit, we will say so.",
  },
  {
    num: 2,
    title: "Your new site goes live in 48 hours",
    body: "We build a premium Smart Website around your business. Custom design, real copywriting, optimized for speed and mobile. This is a $3,000 to $5,000+ website that we build for you at no cost. You review everything before launch.",
  },
  {
    num: 3,
    title: "Leads start coming in",
    body: "Missed-call text-back goes live day one. Lead capture is active. Follow-up sequences are running. You see every lead on your dashboard and go back to running your business.",
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-[72px] max-sm:py-[52px] bg-[var(--bg-soft)]">
      <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] mb-2.5 inline-block">
            How it works
          </span>
          <h2 className="text-[clamp(22px,5.5vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
            Three steps. No complexity.
          </h2>
        </div>

        <div className="mt-7">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-[18px] mb-8 last:mb-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="w-[42px] h-[42px] min-w-[42px] rounded-full bg-[var(--blue)] text-white flex items-center justify-center text-base font-bold mt-0.5 shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] mb-1">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[var(--t2)] leading-[1.65]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-9 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white text-base font-semibold py-4 px-[30px] rounded-[var(--r)] tracking-[-0.01em] transition-all duration-200 hover:bg-[var(--blue-h)] hover:-translate-y-px shadow-[0_1px_3px_rgba(0,0,0,0.1),0_4px_14px_rgba(26,107,255,0.2)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),0_8px_24px_rgba(26,107,255,0.25)]"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
