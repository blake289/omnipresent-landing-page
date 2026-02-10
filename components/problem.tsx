"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const painStats = [
  { num: "62%", label: "of calls to small businesses go unanswered" },
  { num: "$2K+", label: "lost per lead that calls your competitor instead" },
  { num: "5 sec", label: "before a visitor decides to stay or bounce" },
]

const outcomes = [
  "A premium site that builds trust the second it loads",
  "Missed calls get an automatic text back within 60 seconds",
  "Every visitor captured and followed up with — even while you sleep",
  "A dashboard showing every lead and where it came from",
]

export function Problem() {
  const { ref, isVisible } = useScrollAnimation(0.12)

  return (
    <section className="py-[72px] max-sm:py-[52px]">
      <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] mb-2.5 inline-block">
            The problem
          </span>
          <h2 className="text-[clamp(22px,5.5vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
            You&apos;re paying for traffic that never converts.
          </h2>
          <p className="text-base text-[var(--t2)] leading-[1.75] tracking-[-0.01em] mb-2.5">
            Someone searches for your service. They click through to your site.
            It looks outdated, loads slowly, and isn&apos;t mobile-friendly.
            They don&apos;t call — they hit back and try the next result.
          </p>
          <p className="text-base text-[var(--t2)] leading-[1.75] tracking-[-0.01em]">
            The ones who <em>do</em> call? Most of the time, nobody picks up.
            No text back. No follow-up. That lead goes to whoever answers first.
          </p>
        </div>

        {/* Pain stats grid */}
        <div
          className={`grid grid-cols-3 gap-3 mt-7 max-sm:grid-cols-1 max-sm:gap-2.5 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          {painStats.map((stat) => (
            <div
              key={stat.num}
              className="bg-[var(--red-l)] border border-[var(--red-b)] rounded-[var(--r)] py-[18px] px-5"
            >
              <div className="text-[26px] font-bold text-[var(--red)] tracking-[-0.02em] mb-0.5">
                {stat.num}
              </div>
              <div className="text-sm text-[var(--t2)] leading-[1.45]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome box */}
        <div
          className={`bg-[var(--green-l)] border border-[var(--green-b)] rounded-[var(--rl)] py-[26px] px-7 mt-7 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          <h3 className="text-lg font-bold mb-2.5 tracking-[-0.02em]">
            What if your website could fix all of this?
          </h3>
          <ul className="list-none p-0 m-0">
            {outcomes.map((item) => (
              <li
                key={item}
                className="text-[15px] text-[var(--t2)] py-1.5 pl-6 relative leading-[1.6]"
              >
                <span className="absolute left-0 text-[var(--green)] font-bold text-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
