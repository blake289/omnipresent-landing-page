"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-14 pb-0 text-center">
      <div className="max-w-[680px] mx-auto px-6">
        <h1
          className="text-[clamp(28px,7vw,46px)] font-bold leading-[1.12] tracking-[-0.04em] mb-4 animate-up"
          style={{ animationDelay: "0.1s" }}
        >
          Your website is losing you customers.
          <br />
          <span className="text-[var(--blue)]">We fix that in 48 hours.</span>
        </h1>

        <p
          className="text-[clamp(16px,3.8vw,18px)] text-[var(--t2)] max-w-[540px] mx-auto mb-9 leading-[1.7] tracking-[-0.01em] animate-up"
          style={{ animationDelay: "0.2s" }}
        >
          We replace your outdated site with a premium one that looks better
          than 99% of your competitors and actually turns visitors into calls.
          The build is free.
        </p>

        {/* VSL Placeholder */}
        <div
          className="max-w-[600px] mx-auto mb-9 animate-up"
          style={{ animationDelay: "0.3s" }}
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
                See how it works (2 min)
              </span>
            </div>
          </div>
          <p className="text-center text-[13px] text-[var(--t3)] mt-2.5">
            Short version. Your time matters.
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col items-center animate-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white text-base font-semibold py-4 px-[30px] rounded-[var(--r)] w-full max-w-[380px] tracking-[-0.01em] transition-all duration-200 hover:bg-[var(--blue-h)] hover:-translate-y-px shadow-[0_1px_3px_rgba(0,0,0,0.1),0_4px_14px_rgba(26,107,255,0.2)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),0_8px_24px_rgba(26,107,255,0.25)]"
          >
            Get My Free Smart Website
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
              No contracts to sign today
            </span>
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              15-min call
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
