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
    <section className="section-pad" style={{ background: "var(--color-bg-primary)" }}>
      <div ref={ref} className="section-container" style={{ maxWidth: "var(--content-medium)" }}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-text-muted)" }}>The Process</span>
          <h2 className="h2 mb-3">
            Three Steps. Zero Complexity. You Keep Running Jobs.
          </h2>
          <p className="body-lg" style={{ color: "var(--color-text-secondary)" }}>
            We handle everything. You approve. That&apos;s it.
          </p>
        </div>

        {/* Step cards — horizontal on desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dashed timeline connector (desktop) */}
          <div
            className="absolute top-[22px] left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-0 hidden md:block"
            style={{ borderTop: "2px dashed var(--color-border-light)" }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative flex flex-col transition-all duration-700 cursor-default hover:-translate-y-0.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--color-border-light)",
                borderRadius: "var(--radius-lg)",
                padding: "36px 32px",
                boxShadow: "var(--shadow-md)",
                transitionDelay: `${100 + i * 100}ms`,
              }}
            >
              {/* Step number circle */}
              <div
                className="flex items-center justify-center mb-6 relative z-10"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                {step.num}
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-text-tertiary)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro mt-3" style={{ color: "var(--color-text-muted)" }}>
            No contracts. No pressure. Just clarity on what&apos;s possible.
          </p>
        </div>
      </div>
    </section>
  )
}
