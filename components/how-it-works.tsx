"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    num: 1,
    title: "15-Minute Plumber Strategy Call",
    body: "Tell us about your plumbing business — the services you offer, where leads are slipping through, what you've tried before. We'll show you exactly what we'd build and how the system works. If it's not a fit, we'll say so. No pitch. No pressure.",
  },
  {
    num: 2,
    title: "Your Smart Website Goes Live in 48 Hours",
    body: "We build a premium Smart Website around your plumbing business. Custom design. Real copywriting (not templates). Mobile-optimized for emergency searches. This is a $3,000–$5,000 website we build for free. You review everything before launch.",
  },
  {
    num: 3,
    title: "The System Takes Over",
    body: "Instant lead response goes live. Missed-call text-back activates. Review requests start flowing after jobs. Every lead lands on your dashboard. You go back to running jobs — the system handles the rest. Most clients see it pay for itself within 30 days.",
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-pad bg-[var(--bg-alt)]">
      <div ref={ref} className="section-container max-w-[760px]">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[var(--blue)]">The Process</span>
          <h2 className="h2 mb-4">
            Three Steps. Zero Complexity. You Keep Running Jobs.
          </h2>
          <p className="body-lg text-[var(--t2)] mb-10">
            We handle everything. You approve. That&apos;s it.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-5 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="w-[48px] h-[48px] min-w-[48px] rounded-full bg-[var(--blue)] text-white flex items-center justify-center text-lg font-bold shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="h3 mb-2">{step.title}</h3>
                <p className="body text-[var(--t2)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro text-[var(--t3)] mt-3">
            No contracts. No pressure. Just clarity on what&apos;s possible.
          </p>
        </div>
      </div>
    </section>
  )
}
