"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

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
    <section className="section-pad bg-white">
      <div ref={ref} className="section-container max-w-[1000px]">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[var(--blue)]">Proof</span>
          <h2 className="h2 mb-4">
            What Happens When Your Website Actually Works
          </h2>
          <p className="body-lg text-[var(--t2)]">
            Real plumbing companies. Real results. System paid for itself in the
            first month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-[var(--rl)] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[var(--border)] flex flex-col transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {/* Stars */}
              <div className="text-[var(--gold)] text-sm tracking-[1.5px] mb-3">
                ★★★★★
              </div>

              {/* Metric headline */}
              <div className="text-[20px] font-bold text-[var(--t1)] leading-tight mb-4">
                {t.metric}
              </div>

              {/* Quote */}
              <p className="body text-[var(--t2)] leading-[1.7] mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                <div className="w-[40px] h-[40px] rounded-full bg-[var(--blue-l)] flex items-center justify-center font-bold text-[13px] text-[var(--blue)] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[var(--t3)]">
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
          className={`text-center micro text-[#888] mt-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Real plumbing companies. Real numbers. Results vary by market and ad
          spend.
        </p>

        {/* ROI Callout Box */}
        <div
          className={`bg-[#F0FDF4] border border-[#22C55E] rounded-[var(--r)] py-6 px-8 mt-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="body font-medium text-[var(--t1)]">
            The average plumbing client sees the system pay for itself within the
            first 30 days. One recovered emergency call covers months of the
            service.
          </p>
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-300 ${
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
