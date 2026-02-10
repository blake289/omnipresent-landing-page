"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-14 pb-0 text-center">
      <div className="max-w-[680px] mx-auto px-6">
        {/* Micro-trust above headline */}
        <div
          className="inline-flex items-center gap-2 text-sm text-[var(--t2)] mb-5 animate-up"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="text-[var(--gold-d)] text-[13px] tracking-[0.5px]">
            ★★★★★
          </span>
          <span>
            <span className="font-bold text-[var(--t1)]">4.9</span> from{" "}
            <span className="font-bold text-[var(--t1)]">340+</span> Google
            reviews
          </span>
        </div>

        <h1
          className="text-[clamp(28px,7vw,46px)] font-bold leading-[1.12] tracking-[-0.04em] mb-4 animate-up"
          style={{ animationDelay: "0.1s" }}
        >
          A Premium Website That Books Jobs
          <br />
          <span className="text-[var(--blue)]">— Built Free in 48 Hours</span>
        </h1>

        <p
          className="text-[clamp(16px,3.8vw,18px)] text-[var(--t2)] max-w-[540px] mx-auto mb-9 leading-[1.7] tracking-[-0.01em] animate-up"
          style={{ animationDelay: "0.2s" }}
        >
          We build local service businesses a website that looks better than 99%
          of competitors — and actually turns visitors into phone calls. The
          build is free. You only pay if it performs.
        </p>

        {/* Primary CTA */}
        <div
          className="flex flex-col items-center animate-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#book"
            data-track="hero_cta"
            className="inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white text-base font-semibold py-4 px-[30px] rounded-[var(--r)] w-full max-w-[380px] tracking-[-0.01em] transition-all duration-200 hover:bg-[var(--blue-h)] hover:-translate-y-px shadow-[0_1px_3px_rgba(0,0,0,0.1),0_4px_14px_rgba(26,107,255,0.2)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),0_8px_24px_rgba(26,107,255,0.25)]"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center justify-center gap-5 mt-3.5 text-[13px] text-[var(--t3)]">
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              $0 to start
            </span>
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              Live in 48 hours
            </span>
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              15-min call
            </span>
          </div>
        </div>

        {/* Credibility strip (inline) */}
        <div
          className="flex items-center justify-center gap-6 flex-wrap mt-10 pt-7 border-t border-[var(--border-l)] text-[13px] text-[var(--t3)] animate-up max-sm:gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[15px]">⚡</span>
            <span>
              Live in{" "}
              <span className="font-bold text-[var(--t1)]">48 hours</span>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[15px]">🛡️</span>
            <span>30-day money-back guarantee</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[15px]">🔒</span>
            <span>No contracts to sign today</span>
          </span>
        </div>
      </div>
    </section>
  )
}
