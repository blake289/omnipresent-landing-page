"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#0A0F1C]"
    >
      {/* Single ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-[-15%] h-[700px] w-[700px] rounded-full bg-[#2563EB]/[0.04] blur-[160px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-2 md:gap-16 md:py-40">
        {/* Left -- copy */}
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 delay-200 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 text-[13px] font-medium tracking-wide text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now accepting 5 new clients this month
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`mt-8 font-display text-[2.75rem] font-bold leading-[1.0] tracking-tight text-white sm:text-6xl md:text-7xl transition-all duration-1000 delay-[450ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Your website
            <br />
            looks fine.
          </h1>

          {/* The turn */}
          <p
            className={`mt-5 font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-slate-500 sm:text-3xl md:text-4xl transition-all duration-900 delay-[700ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {"It's just not bringing in leads."}
          </p>

          {/* One calm line */}
          <p
            className={`mt-8 max-w-md text-lg leading-relaxed text-slate-400 md:text-xl md:leading-relaxed transition-all duration-700 delay-[950ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {"Right now, potential customers are visiting your site, not finding answers fast enough, and calling the next guy on the list. There's a fix for that."}
          </p>

          {/* CTA */}
          <div
            className={`mt-10 transition-all duration-700 delay-[1150ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0A0F1C] transition-all duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]"
            >
              See if you qualify
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Minimal trust */}
          <div
            className={`mt-14 flex items-center gap-5 text-[13px] text-slate-600 transition-all duration-700 delay-[1350ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span>Trusted by 340+ business owners</span>
            <span className="h-3 w-px bg-white/10" aria-hidden="true" />
            <span>Live in 48 hours</span>
            <span className="h-3 w-px bg-white/10" aria-hidden="true" />
            <span>$0 upfront</span>
          </div>
        </div>

        {/* Right -- phone mockup visual */}
        <div
          className={`relative hidden md:flex items-center justify-center transition-all duration-1000 delay-[800ms] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Glow behind device */}
            <div className="absolute inset-0 -m-8 rounded-3xl bg-[#2563EB]/[0.06] blur-[60px]" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <Image
                src="/images/hero-phone.png"
                alt="Smart Website notification on a phone showing a new lead captured automatically"
                width={480}
                height={560}
                className="h-auto w-full max-w-[420px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[1600ms] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/[0.08] p-1.5">
          <div className="h-1.5 w-0.5 animate-bounce rounded-full bg-white/25" />
        </div>
      </div>
    </section>
  )
}
