"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const features = [
  "Premium plumbing website ($3K–$5K value, free to build)",
  "Mobile-first design (thumb-tap to call in 2 seconds)",
  "Speed-optimized (loads in under 2 seconds)",
  "Instant text response when someone fills out your form",
  "Missed-call text-back in under 60 seconds—even at 2am",
  "Automatic review requests after every completed job",
  "Follow-up sequences that nurture leads while you work",
  "One dashboard to see every lead and where it came from",
]

const systemBullets = [
  "Instant lead response",
  "Missed-call text-back",
  "Automatic review requests",
  "Follow-up sequences",
]

export function UniqueMechanism() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-pad" style={{ background: "var(--color-bg-warm)" }}>
      <div ref={ref} className="section-container" style={{ maxWidth: "var(--content-max-width)" }}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-accent)" }}>The Solution</span>
          <h2 className="h2 mb-4">The Smart Plumbing Website System</h2>
          <p className="body-lg max-w-[560px] mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            A premium website that converts—plus the automation that makes sure
            no lead ever slips through again.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ maxWidth: 1060, margin: "0 auto" }}
        >
          {/* Left column — Explanation */}
          <div>
            <div className="body space-y-5 mb-8" style={{ color: "var(--color-text-secondary)" }}>
              <p className="font-bold" style={{ color: "var(--color-text-primary)", fontSize: 17 }}>
                This isn&apos;t a redesign. It&apos;s a complete system.
              </p>
              <p>
                Your website becomes the foundation—built to load fast, look
                professional, and turn emergency searches into phone calls.
              </p>
              <p>
                Then we add the automation layer: instant response, missed-call
                recovery, review generation, and follow-up that runs 24/7 while
                you&apos;re on the job.
              </p>
              <p className="font-bold" style={{ color: "var(--color-text-primary)", fontSize: 17 }}>
                The result? More calls. More jobs. More 5-star reviews. Less
                money leaking to competitors.
              </p>
            </div>

            {/* Feature bullets — with left border grouping */}
            <div style={{ borderLeft: "2px solid var(--color-accent-light)", paddingLeft: 20 }}>
              <ul className="space-y-3.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
                      <circle cx="9" cy="9" r="9" fill="rgba(37,99,235,0.1)" />
                      <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[16px] leading-[1.5]" style={{ color: "var(--color-text-secondary)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — Flow diagram card */}
          <div
            className="p-8 max-sm:p-6"
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-light)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div className="space-y-0">
              {/* Block 1: Foundation */}
              <div
                className="p-5 text-center"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "var(--color-accent)" }}>
                  The Foundation
                </div>
                <div className="text-[16px] font-bold" style={{ color: "var(--color-text-primary)" }}>
                  Premium Smart Website
                </div>
                <div className="text-[14px] mt-0.5" style={{ color: "var(--color-text-tertiary)" }}>
                  Fast. Professional. Converts.
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-3">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path d="M10 0v18m0 0l-6-6m6 6l6-6" stroke="var(--color-border-medium)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Block 2: System */}
              <div
                className="p-5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3 text-center" style={{ color: "var(--color-text-muted)" }}>
                  The System
                </div>
                <ul className="space-y-2">
                  {systemBullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[14px]" style={{ color: "var(--color-text-secondary)" }}>
                      <span className="text-[var(--color-accent)] font-bold text-xs">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-3">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path d="M10 0v18m0 0l-6-6m6 6l6-6" stroke="var(--color-border-medium)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Block 3: Result */}
              <div
                className="p-5 text-center"
                style={{
                  background: "var(--color-success-light)",
                  border: "1px solid #BBF7D0",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "var(--color-success)" }}>
                  The Result
                </div>
                <div className="text-[16px] font-bold" style={{ color: "var(--color-success)" }}>
                  More calls. More jobs.
                </div>
                <div className="text-[16px] font-bold" style={{ color: "var(--color-success)" }}>
                  More 5-star reviews.
                </div>
                <div className="text-[13px] mt-1" style={{ color: "var(--color-text-tertiary)" }}>
                  System pays for itself in 30 days or less.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro mt-3" style={{ color: "var(--color-text-muted)" }}>
            See exactly what we&apos;d build for your plumbing company.
          </p>
        </div>
      </div>
    </section>
  )
}
