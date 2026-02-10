"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contrasts = [
  { dull: "Sits there looking pretty", smart: "Turns visitors into leads automatically" },
  { dull: "Waits for the phone to ring", smart: "Texts back missed calls before they call someone else" },
  { dull: "Looks decent on your laptop", smart: "Loads in under 2 seconds on any phone" },
  { dull: "Gets 100 visitors and 0 leads", smart: "Captures every lead and follows up while you sleep" },
  { dull: "Needs you to babysit it", smart: "Runs 24/7 without you lifting a finger" },
]

export function SmartWebsite() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section className="bg-[#0A0F1C] py-28 md:py-40" aria-labelledby="smart-heading">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563EB]/[0.03] blur-[140px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-slate-500">
            A different kind of website
          </p>
          <h2
            id="smart-heading"
            className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-[2.75rem] lg:text-5xl"
          >
            {"We call it a Smart\u00A0Website."}
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.85] text-slate-400 md:text-lg md:leading-[1.85]">
            {"Not a redesign. Not a template. A website that actually does its job: answer questions, capture interest, and turn strangers into paying customers."}
          </p>
        </div>

        {/* Contrast pairs -- editorial, not a feature grid */}
        <div className="mt-16 space-y-0 md:mt-20">
          {contrasts.map((c, i) => (
            <div
              key={c.smart}
              className={`flex flex-col gap-2 border-t border-white/[0.06] py-6 md:flex-row md:items-baseline md:gap-8 md:py-7 transition-all duration-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${350 + i * 100}ms` : "0ms",
              }}
            >
              <p className="w-full shrink-0 text-[15px] text-slate-600 line-through decoration-slate-700/50 md:w-56 md:text-right">
                {c.dull}
              </p>
              <p className="text-[17px] font-medium leading-snug text-white md:text-lg">
                {c.smart}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
