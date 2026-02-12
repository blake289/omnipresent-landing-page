"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-20 pb-0 text-center overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 0.75px, transparent 0.75px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
      />

      {/* Radial glow behind headline */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(37,99,235,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container max-w-[800px] relative z-10">
        {/* Eyebrow badge */}
        <div className="mb-7 animate-up" style={{ animationDelay: "0.05s" }}>
          <span
            className="inline-block text-[14px] font-bold uppercase tracking-[0.08em] rounded-full px-6 py-2.5"
            style={{
              color: "#DC2626",
              background: "#FFFFFF",
              border: "1.5px solid #DC2626",
            }}
          >
            For Plumbing Companies Only
          </span>
        </div>

        {/* H1 */}
        <h1 className="h1 mb-7 text-balance animate-up" style={{ animationDelay: "0.1s" }}>
          Your Plumbing Website Is Losing You Jobs.{" "}
          <span style={{ color: "var(--color-accent)" }}>
            We Replace It in 48 Hours—Free.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-[620px] mx-auto mb-10 animate-up max-sm:text-[16px]"
          style={{
            fontSize: 19,
            lineHeight: 1.65,
            color: "var(--color-text-secondary)",
            animationDelay: "0.2s",
          }}
        >
          We build you a Smart Website that turns emergency searches into booked
          calls—then automates everything that happens next. Instant lead
          response. Missed-call text-back. Review requests on autopilot. You stay
          on the job. The system handles the rest.
        </p>

        {/* VSL Placeholder */}
        <div
          className="max-w-[720px] mx-auto mb-12 animate-up"
          style={{ animationDelay: "0.25s" }}
        >
          <div
            className="relative w-full pt-[56.25%] overflow-hidden group cursor-pointer"
            style={{
              borderRadius: "var(--radius-lg)",
              background: "#0F172A",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#131D35] to-[#0B1120]">
              <div
                className="flex items-center justify-center mb-3 animate-pulse-ring transition-transform duration-300 group-hover:scale-[1.08]"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-[3px]">
                  <polygon points="9,5 20,12 9,19" />
                </svg>
              </div>
              <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                See how it works (2 min) →
              </span>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center animate-up" style={{ animationDelay: "0.35s" }}>
          <a
            href="#book"
            className="btn-primary w-full max-w-[420px] max-sm:max-w-full max-sm:mx-4"
            style={{ fontSize: 18, height: 60 }}
          >
            Book My Free Plumber Growth Call
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* NEW: Targeting line */}
          <p
            className="max-w-[700px] mx-auto max-sm:text-[14px]"
            style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-text-tertiary)", fontWeight: 400, marginTop: 20 }}
          >
            Built specifically for plumbers who want more calls, more jobs, and less wasted ad spend.
          </p>

          {/* Proof sentence (updated) */}
          <p
            className="max-w-[750px] mx-auto max-sm:text-[15px]"
            style={{ fontSize: 18, lineHeight: 1.6, color: "#0F172A", fontWeight: 500, marginTop: 16 }}
          >
            Most plumbing websites lose 60%+ of visitors before they call. Ours turn them into booked jobs.
          </p>

          {/* Risk reversal row (checkmarks = safety) */}
          <div
            className="flex items-center justify-center flex-wrap max-w-[900px] mx-auto max-sm:gap-4 max-sm:text-[15px]"
            style={{ marginTop: 16, marginBottom: 24, gap: 32 }}
          >
            {["$0 to start", "No contracts", "30-day money-back guarantee"].map((item) => (
              <span key={item} className="inline-flex items-center" style={{ gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                  <circle cx="9" cy="9" r="9" fill="rgba(22,163,74,0.12)" />
                  <path d="M5.5 9.5L8 12L12.5 6.5" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.5, color: "#1F2937" }}>
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
