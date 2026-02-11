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
    <section className="section-pad bg-white">
      <div ref={ref} className="section-container max-w-[900px]">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[var(--blue)]">Is This for You?</span>
          <h2 className="h2 mb-4">
            This Works for Some Plumbing Companies. Not All.
          </h2>
          <p className="body-lg text-[var(--t2)]">
            We&apos;d rather be upfront now than waste your time on a call.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Good fit */}
          <div className="rounded-[var(--rl)] p-8 bg-[var(--green-l)] border border-[var(--green-b)]">
            <h3 className="text-base font-bold mb-5 flex items-center gap-2 text-[var(--green-d)]">
              <span className="text-lg">✅</span> Great Fit
            </h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
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

          {/* Not fit */}
          <div className="rounded-[var(--rl)] p-8 bg-[var(--red-l)] border border-[var(--red-b)]">
            <h3 className="text-base font-bold mb-5 flex items-center gap-2 text-[var(--red)]">
              <span className="text-lg">✕</span> Not a Fit
            </h3>
            <ul className="space-y-3">
              {notFit.map((item) => (
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
        </div>

        {/* ROI Reminder */}
        <p
          className={`text-center body font-semibold mt-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          $297/mo. One job covers the entire year. System pays for itself in 30
          days or less.
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
          <p className="micro text-[var(--t3)] mt-3">
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
