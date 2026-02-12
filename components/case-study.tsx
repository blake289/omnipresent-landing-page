"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const beforeItems = [
  "Outdated website (built 2017)",
  "6-second load time on mobile",
  "No instant response to form fills",
  "Missed calls went to voicemail with no follow-up",
  "52 Google reviews (stuck for 2 years)",
  "4–6 leads per week",
  "No idea which ads were working",
]

const afterItems = [
  "Smart Website live in 48 hours",
  "1.8-second load time",
  "Instant text response on every lead",
  "Missed-call text-back active 24/7",
  "209 Google reviews (47 new in 30 days)",
  "14–22 qualified leads per week",
  "Full dashboard showing every lead source",
]

export function CaseStudy() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-pad" style={{ background: "var(--color-bg-warm)" }}>
      <div ref={ref} className="section-container" style={{ maxWidth: "var(--content-max-width)" }}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-accent)" }}>Case Study</span>
          <h2 className="h2 mb-4">
            Before &amp; After: What the System Changed
          </h2>
        </div>

        {/* Large card */}
        <div
          className={`max-sm:p-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--color-border-light)",
            borderRadius: "var(--radius-xl)",
            padding: 48,
            boxShadow: "var(--shadow-lg)",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          {/* Card header */}
          <div className="text-center mb-10">
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "var(--color-text-primary)",
              }}
            >
              Precision Plumbing Co.
            </h3>
            <p className="text-[15px] mt-1" style={{ color: "var(--color-text-tertiary)" }}>
              Residential &amp; Commercial Plumbing, Austin TX
            </p>
          </div>

          {/* Before / After grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vertical divider (desktop) */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--color-border-light)" }}
            />

            {/* Before */}
            <div>
              <div
                className="text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
                style={{ color: "var(--color-danger)" }}
              >
                Before
              </div>
              <ul className="space-y-3.5">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]" style={{ lineHeight: 1.5, color: "var(--color-text-secondary)" }}>
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: "var(--color-danger)", fontSize: 16 }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div>
              <div
                className="text-[12px] font-bold uppercase tracking-[0.1em] mb-5"
                style={{ color: "var(--color-success)" }}
              >
                After
              </div>
              <ul className="space-y-3.5">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]" style={{ lineHeight: 1.5, color: "var(--color-text-secondary)" }}>
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: "var(--color-success)", fontSize: 16 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Result line */}
          <div className="text-center mt-10 pt-8" style={{ borderTop: "1px solid var(--color-border-light)" }}>
            <p
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "var(--color-text-primary)",
                lineHeight: 1.3,
              }}
            >
              $52,000 in new jobs closed within 90 days.
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: "var(--color-success)",
              }}
            >
              System paid for itself in the first 3 weeks.
            </p>
          </div>
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro mt-3" style={{ color: "var(--color-text-muted)" }}>
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
