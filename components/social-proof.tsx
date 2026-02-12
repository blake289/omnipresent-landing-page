"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const avatarColors = ["#2563EB", "#16A34A", "#D97706"]

const testimonials = [
  {
    metric: "System Paid for Itself in 11 Days",
    quote:
      "Paid an agency $12,000 for a website that generated zero calls. This one cost me nothing upfront and brought in 11 new jobs the first month. Between the instant lead responses and the missed-call texts, I stopped losing emergency jobs to voicemail. System paid for itself before the second invoice.",
    name: "Mike R.",
    role: "Plumbing Contractor",
    location: "San Diego",
    initials: "MR",
  },
  {
    metric: "23 New 5-Star Reviews in 60 Days",
    quote:
      "We went from 47 Google reviews to 70 in two months — all from the automatic review requests. We're ranking higher now, getting more calls, and the website actually looks like we're a real company. Should've done this years ago.",
    name: "Sarah T.",
    role: "Owner, 24/7 Plumbing Solutions",
    location: "",
    initials: "ST",
  },
  {
    metric: "$41,000 in Jobs from Leads That Would've Been Lost",
    quote:
      "The missed-call text-back alone changed everything. We were losing 8–10 calls a week to voicemail — after-hours, weekends, on another job. Now they get a text in under a minute. Last quarter we tracked $41K in jobs that came from those recovered leads.",
    name: "James L.",
    role: "Master Plumber",
    location: "Phoenix",
    initials: "JL",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section
      className="section-pad"
      style={{ background: "var(--color-bg-dark)", paddingTop: 120, paddingBottom: 120 }}
    >
      <div ref={ref} className="section-container" style={{ maxWidth: "var(--content-max-width)" }}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-accent)" }}>Proof</span>
          <h2 className="h2 mb-4" style={{ color: "var(--color-text-on-dark)" }}>
            What Happens When Your Website Actually Works
          </h2>
          <p className="body-lg max-w-[560px] mx-auto" style={{ color: "var(--color-text-on-dark-muted)" }}>
            Real plumbing companies. Real results. System paid for itself in the
            first month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                background: "var(--color-bg-dark-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "var(--radius-lg)",
                padding: "36px 32px",
                transitionDelay: `${100 + i * 100}ms`,
              }}
            >
              {/* Stars */}
              <div className="text-[16px] tracking-[2px] mb-5" style={{ color: "#FBBF24" }}>
                ★★★★★
              </div>

              {/* Metric headline */}
              <div
                className="leading-tight mb-4"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {t.metric}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1" style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div
                  className="flex items-center justify-center shrink-0 font-bold text-[13px] text-white"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: avatarColors[i] || avatarColors[0],
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white">{t.name}</div>
                  <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {t.role}
                    {t.location ? `, ${t.location}` : ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust microcopy */}
        <p
          className={`text-center text-[13px] font-normal italic mt-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Real plumbing companies. Real numbers. Results vary by market and ad spend.
        </p>

        {/* Blue ROI Callout Box */}
        <div
          className={`max-w-[800px] mx-auto mt-12 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{
            background: "var(--color-accent)",
            borderRadius: "var(--radius-lg)",
            padding: "28px 40px",
            boxShadow: "var(--shadow-blue-lg)",
          }}
        >
          <p className="text-[17px] font-medium text-white" style={{ lineHeight: 1.6 }}>
            The average plumbing client sees the system pay for itself within the
            first 30 days. One recovered emergency call covers months of the
            service.
          </p>
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a href="#book" className="btn-primary btn-primary-on-dark">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro mt-3" style={{ color: "var(--color-text-on-dark-muted)" }}>
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
