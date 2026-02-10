"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    quote:
      'Paid an agency $8,000 for a website that did nothing. This one cost me zero upfront and brought in <strong>7 new jobs in the first month.</strong> The missed-call text-back alone has saved at least $15,000 in leads I would have lost.',
    name: "Mike R.",
    role: "Contractor · San Diego",
    initials: "MR",
  },
  {
    quote:
      '5 to 10 calls a week were going straight to voicemail. Now every missed call gets a text in 60 seconds. Last month: <strong>14 new service calls</strong>, all from people who would have called someone else.',
    name: "Sarah T.",
    role: "HVAC Company",
    initials: "ST",
  },
  {
    quote:
      'Three designers. Two agencies. Over $20,000 spent. None generated a single lead. <strong>This is the first website that pays for itself</strong>, every single month.',
    name: "James L.",
    role: "Plumbing Contractor",
    initials: "JL",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section className="py-[72px] max-sm:py-[52px]">
      <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] mb-2.5 inline-block">
            Results
          </span>
          <h2 className="text-[clamp(22px,5.5vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
            What happens when your website actually does its job.
          </h2>
        </div>

        <div className="mt-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--rl)] py-[26px] px-[26px] pb-[22px] mb-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-700 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="text-[var(--gold)] text-sm tracking-[1.5px] mb-3">
                ★★★★★
              </div>
              <p
                className="text-base text-[var(--t2)] leading-[1.7] mb-4 tracking-[-0.01em] [&_strong]:font-semibold [&_strong]:text-[var(--t1)]"
                dangerouslySetInnerHTML={{ __html: `"${t.quote}"` }}
              />
              <div className="flex items-center gap-2.5">
                <div className="w-[38px] h-[38px] rounded-full bg-[var(--blue-l)] flex items-center justify-center font-bold text-[13px] text-[var(--blue)] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[var(--t3)]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
