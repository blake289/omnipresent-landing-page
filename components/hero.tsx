"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-16 pb-0 text-center overflow-hidden">
      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,107,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-container max-w-[760px] relative z-10">
        {/* Eyebrow */}
        <div
          className="mb-5 animate-up"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="inline-block text-[13px] font-semibold uppercase tracking-[1px] text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-full px-4 py-1.5">
            For Plumbing Companies Only
          </span>
        </div>

        {/* H1 */}
        <h1
          className="h1 mb-6 text-balance animate-up"
          style={{ animationDelay: "0.1s" }}
        >
          Your Plumbing Website Is Losing You Jobs.{" "}
          <span className="text-[var(--blue)]">
            We Replace It in 48 Hours—Free.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="body-lg text-[var(--t2)] max-w-[620px] mx-auto mb-10 animate-up"
          style={{ animationDelay: "0.2s" }}
        >
          We build you a Smart Website that turns emergency searches into booked
          calls—then automates everything that happens next. Instant lead
          response. Missed-call text-back. Review requests on autopilot. You stay
          on the job. The system handles the rest.
        </p>

        {/* VSL Placeholder */}
        <div
          className="max-w-[740px] mx-auto mb-10 animate-up"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="relative w-full pt-[56.25%] rounded-[var(--rl)] overflow-hidden bg-[var(--bg-dark)] border border-[var(--border)] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0f0f0f] group">
              <div className="w-[68px] h-[68px] rounded-full bg-[var(--blue)] flex items-center justify-center mb-3 animate-pulse-ring transition-transform duration-300 group-hover:scale-[1.06] shadow-[0_4px_20px_rgba(26,107,255,0.35)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white ml-[3px]"
                >
                  <polygon points="9,5 20,12 9,19" />
                </svg>
              </div>
              <span className="text-sm text-white/60 font-medium">
                See how it works (2 min) →
              </span>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div
          className="flex flex-col items-center animate-up"
          style={{ animationDelay: "0.35s" }}
        >
          <a href="#book" className="btn-primary text-base w-full max-w-[400px]">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Micro-proof line */}
          <p className="micro text-[#555] mt-4">
            Most plumbing websites lose 60%+ of visitors before they call. Smart
            Websites don&apos;t.
          </p>

          {/* Objection killers */}
          <div className="flex items-center justify-center gap-5 mt-3 micro text-[var(--t2)] flex-wrap max-sm:gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[var(--green)] font-bold">✓</span> $0 to
              start
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[var(--green)] font-bold">✓</span> No
              contracts
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[var(--green)] font-bold">✓</span> 30-day
              money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
