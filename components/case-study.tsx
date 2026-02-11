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
    <section className="section-pad bg-[var(--bg-alt)]">
      <div ref={ref} className="section-container max-w-[900px]">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[var(--blue)]">Case Study</span>
          <h2 className="h2 mb-4">
            Before &amp; After: What the System Changed
          </h2>
        </div>

        {/* Large card */}
        <div
          className={`bg-white rounded-[20px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-12 max-sm:p-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Card header */}
          <div className="text-center mb-10">
            <h3 className="h3 text-[var(--t1)]">Precision Plumbing Co.</h3>
            <p className="micro text-[var(--t3)] mt-1">
              Residential &amp; Commercial Plumbing, Austin TX
            </p>
          </div>

          {/* Before / After grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--red)] mb-4">
                Before
              </div>
              <ul className="space-y-3">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 body text-[var(--t2)]"
                  >
                    <span className="text-[var(--red)] font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--green)] mb-4">
                After
              </div>
              <ul className="space-y-3">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 body text-[var(--t2)]"
                  >
                    <span className="text-[var(--green)] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Result line */}
          <div className="text-center mt-10 pt-8 border-t border-[var(--border)]">
            <p className="text-[20px] font-bold text-[var(--t1)] leading-tight">
              $52,000 in new jobs closed within 90 days.
            </p>
            <p className="text-[20px] font-bold text-[var(--blue)] mt-1">
              System paid for itself in the first 3 weeks.
            </p>
          </div>
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro text-[var(--t3)] mt-3">
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
