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
    <section className="section-pad bg-white">
      <div ref={ref} className="section-container max-w-[1100px]">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[16px]" style={{ color: "var(--blue)" }}>The Solution</span>
          <h2 className="h2 mb-4">The Smart Plumbing Website System</h2>
          <p className="body-lg text-[var(--t2)] max-w-[660px] mx-auto">
            A premium website that converts—plus the automation that makes sure
            no lead ever slips through again.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Left column — Explanation */}
          <div>
            <div className="body text-[var(--t2)] space-y-5 mb-8">
              <p className="font-semibold text-[var(--t1)]">
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
              <p className="font-semibold text-[var(--t1)]">
                The result? More calls. More jobs. More 5-star reviews. Less
                money leaking to competitors.
              </p>
            </div>

            {/* Feature bullets */}
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-[var(--green)] font-bold text-base mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="body text-[var(--t2)]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Flow diagram card */}
          <div className="bg-white rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 max-sm:p-6">
            <div className="space-y-0">
              {/* Block 1: Foundation */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-[var(--r)] p-4 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--blue)] mb-1">
                  The Foundation
                </div>
                <div className="text-sm font-bold text-[var(--t1)]">
                  Premium Smart Website
                </div>
                <div className="text-[13px] text-[var(--t3)] mt-0.5">
                  Fast. Professional. Converts.
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  className="text-[var(--t4)]"
                >
                  <path
                    d="M8 0v16m0 0l-6-6m6 6l6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Block 2: System */}
              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-[var(--r)] p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--blue)] mb-2 text-center">
                  The System
                </div>
                <ul className="space-y-1.5">
                  {systemBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-[var(--t2)]"
                    >
                      <span className="text-[var(--green)] font-bold text-xs">
                        •
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  className="text-[var(--t4)]"
                >
                  <path
                    d="M8 0v16m0 0l-6-6m6 6l6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Block 3: Result */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-[var(--r)] p-4 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--green-d)] mb-1">
                  The Result
                </div>
                <div className="text-sm font-bold text-[var(--t1)]">
                  More calls. More jobs.
                </div>
                <div className="text-sm font-bold text-[var(--t1)]">
                  More 5-star reviews.
                </div>
                <div className="text-[13px] text-[var(--t3)] mt-1">
                  System pays for itself in 30 days or less.
                </div>
              </div>
            </div>
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
          <p className="micro text-[var(--t3)] mt-3">
            See exactly what we&apos;d build for your plumbing company.
          </p>
        </div>
      </div>
    </section>
  )
}
