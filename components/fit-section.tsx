"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const goodFit = [
  "You run a plumbing company (residential, commercial, or both)",
  "Your current website is outdated, slow, or just not generating calls",
  "You're missing calls because you're on the job — and losing those leads",
  "You want more 5-star Google reviews but don't have a system to get them",
  "You're running ads (or want to) and need them to actually convert",
  "You want more booked jobs without hiring a marketing team",
  "You're ready to invest $297/mo in a system that pays for itself",
]

const notFit = [
  "You're looking for a magic button, not a real system",
  "You're not willing to invest $297/mo to grow your business",
  "You have no interest in taking on more jobs right now",
  "You want to micromanage every pixel instead of trusting the process",
  "You've never invested in your business and aren't ready to start",
]

export function FitSection() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section className="section-pad" style={{ background: "var(--color-bg-primary)" }}>
      <div ref={ref} className="section-container" style={{ maxWidth: 880 }}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-text-muted)" }}>Is This for You?</span>
          <h2 className="h2 mb-4">
            This Works for Some Plumbing Companies. Not All.
          </h2>
          <p className="body-lg" style={{ color: "var(--color-text-secondary)" }}>
            We&apos;d rather be upfront now than waste your time on a call.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Good fit */}
          <div
            style={{
              background: "var(--color-success-light)",
              border: "1px solid #BBF7D0",
              borderRadius: "var(--radius-lg)",
              padding: "40px 36px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3
              className="mb-6 flex items-center gap-2.5"
              style={{ fontSize: 16, fontWeight: 700, color: "var(--color-success)" }}
            >
              <span className="text-lg">✅</span> Great Fit
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px]"
                  style={{ lineHeight: 1.5, color: "var(--color-text-secondary)" }}
                >
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "var(--color-success)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div
            style={{
              background: "var(--color-danger-light)",
              border: "1px solid var(--color-danger-border)",
              borderRadius: "var(--radius-lg)",
              padding: "40px 36px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3
              className="mb-6 flex items-center gap-2.5"
              style={{ fontSize: 16, fontWeight: 700, color: "var(--color-danger)" }}
            >
              <span className="text-lg">✕</span> Not a Fit
            </h3>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px]"
                  style={{ lineHeight: 1.5, color: "var(--color-text-secondary)" }}
                >
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "var(--color-danger)" }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROI Reminder */}
        <p
          className={`text-center text-[16px] font-semibold mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "var(--color-text-secondary)" }}
        >
          One job can cover the entire year.
        </p>

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
          <p className="micro mt-3" style={{ color: "var(--color-text-muted)" }}>
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
