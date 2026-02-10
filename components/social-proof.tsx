"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Paid an agency $8,000 for a website that did nothing. This one cost me zero upfront and brought in 7 new jobs in the first month. The missed-call text-back alone has saved at least $15,000 in leads I would've lost.",
    name: "Mike R.",
    detail: "Contractor",
    avatar: "/images/avatar-mike.png",
  },
  {
    quote:
      "We were sending 5-10 calls a week straight to voicemail. Now every missed call gets a text within 60 seconds. Last month: 14 new service calls, just from people who would've called someone else.",
    name: "Sarah T.",
    detail: "HVAC Company",
    avatar: "/images/avatar-sarah.png",
  },
  {
    quote:
      "Three designers. Two agencies. Over $20,000 spent. None of them generated a single lead. This is the first website that actually pays for itself — every single month.",
    name: "James L.",
    detail: "Plumbing Contractor",
    avatar: "/images/avatar-james.png",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          className="h-3.5 w-3.5 fill-omni-gold text-omni-gold"
        />
      ))}
    </div>
  )
}

export function Proof() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section
      id="social-proof"
      className="bg-[#FAFBFC] py-28 md:py-40"
      aria-labelledby="proof-heading"
    >
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div
          className={`mx-auto max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#0A0F1C]/30">
            {"Don\u2019t take my word for it"}
          </p>
          <h2
            id="proof-heading"
            className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-[#0A0F1C] md:text-[2.75rem] lg:text-5xl"
          >
            340+ business owners.
            <br />
            Real numbers.
          </h2>
        </div>

        {/* Testimonials -- with avatars */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`rounded-2xl border border-[#0A0F1C]/[0.04] bg-white p-6 md:p-7 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + i * 150}ms` : "0ms",
              }}
            >
              <Stars />
              <p className="mt-5 text-[15px] leading-[1.75] text-[#0A0F1C]/60 md:text-base md:leading-[1.75]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={`Portrait of ${t.name}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0A0F1C]/80">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-[#0A0F1C]/35">{t.detail}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
