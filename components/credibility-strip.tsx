"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <circle cx="8" cy="8" r="8" fill="rgba(34, 197, 94, 0.12)" />
      <path
        d="M5 8.5L7 10.5L11 6"
        stroke="#16a34a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const valuePoints = [
  "Live in 48 hours",
  "Instant text-back on every lead",
  "Missed calls answered automatically",
  "More 5-star reviews on autopilot",
]

const stats = [
  { number: "1,200+", label: "Local Businesses Served" },
  { number: "$47M+", label: "Revenue Influenced" },
  { number: "340+", label: "Five-Star Reviews" },
]

export function CredibilityStrip() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative mt-16 overflow-hidden">
      {/* Faint radial glow behind container */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(26,107,255,1) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        <div
          className="relative rounded-[22px] bg-gradient-to-b from-[#fdfdfe] to-[#f3f5f9] py-14 px-12 max-sm:py-9 max-sm:px-5"
          style={{
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          {/* Benefit pills */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap max-sm:gap-2.5 max-sm:gap-y-3">
            {valuePoints.map((point, i) => (
              <div
                key={point}
                className={`inline-flex items-center gap-2 rounded-full py-2.5 px-5 cursor-default transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_16px_rgba(26,107,255,0.1)] hover:border-[rgba(26,107,255,0.18)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  background: "rgba(26, 107, 255, 0.06)",
                  border: "1px solid rgba(26, 107, 255, 0.1)",
                  transitionDelay: isVisible ? `${i * 60}ms` : "0ms",
                }}
              >
                <CheckIcon />
                <span className="text-[14px] font-semibold text-[#1a1a2e] leading-none">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#d8dce5] to-transparent my-11 max-sm:my-8" />

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-7">
            {stats.map((stat, i) => (
              <div
                key={stat.number}
                className={`relative text-center transition-all duration-200 ease-out hover:-translate-y-[2px] cursor-default ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms",
                }}
              >
                {/* Gradient vertical divider (desktop, not first) */}
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 hidden sm:block"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08), transparent)",
                    }}
                  />
                )}
                <div
                  className="text-[40px] font-[800] tracking-[-0.03em] leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #111827 0%, #1a6bff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 2px 12px rgba(26, 107, 255, 0.05)",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-[13px] font-medium text-[#7a7e91] mt-3.5 tracking-[0.02em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
