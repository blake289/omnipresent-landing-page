"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const goodFit = [
  "You run a local service business (plumbing, HVAC, electrical, contracting, etc.)",
  "You are getting jobs through word of mouth but know you are leaving money on the table online",
  "You want more inbound leads without hiring a full marketing team",
  "You treat your customers well and want your online presence to reflect that",
]

const notFit = [
  "You are looking for a magic button, not a real system",
  "You are not willing to invest $297/mo to grow your business",
  "You have no interest in taking on more customers right now",
  "You want to micromanage every pixel instead of trusting the process",
]

export function FitSection() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section className="py-[72px] max-sm:py-[52px] bg-[var(--bg-soft)]">
      <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] mb-2.5 inline-block">
            Is this for you?
          </span>
          <h2 className="text-[clamp(22px,5.5vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
            This works great for some businesses. Not all.
          </h2>
          <p className="text-base text-[var(--t2)] leading-[1.75] tracking-[-0.01em]">
            We would rather be upfront now than waste your time on a call.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 gap-4 mt-6 max-sm:grid-cols-1 max-sm:gap-3 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Good fit */}
          <div className="rounded-[var(--rl)] p-[26px] border bg-[var(--green-l)] border-[var(--green-b)]">
            <h3 className="text-base font-bold mb-3.5 flex items-center gap-2 text-[var(--green)]">
              <span>✅</span> Great fit
            </h3>
            <ul className="list-none p-0 m-0">
              {goodFit.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-[var(--t2)] py-1.5 pl-6 relative leading-[1.55]"
                >
                  <span className="absolute left-0 text-[var(--green)] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="rounded-[var(--rl)] p-[26px] border bg-[var(--red-l)] border-[var(--red-b)]">
            <h3 className="text-base font-bold mb-3.5 flex items-center gap-2 text-[var(--red)]">
              <span>✕</span> Not a fit
            </h3>
            <ul className="list-none p-0 m-0">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-[var(--t2)] py-1.5 pl-6 relative leading-[1.55]"
                >
                  <span className="absolute left-[1px] text-[var(--red)] font-bold">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
