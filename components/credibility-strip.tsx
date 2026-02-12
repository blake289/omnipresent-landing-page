"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const valuePoints = [
  "Generating leads in 48 hours",
  "Every lead gets a response in seconds",
  "No more lost revenue from missed calls",
  "Reviews grow while you work",
  "Built to rank on Google",
]

const stats = [
  { number: "1,200+", label: "Local Businesses Served" },
  { number: "$47M+", label: "Revenue Influenced" },
  { number: "340+", label: "Five-Star Reviews" },
]

export function CredibilityStrip() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div ref={ref}>
      {/* ── Outcome pill tags ── */}
      <div style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div
          className="section-container flex items-center justify-center flex-wrap max-sm:gap-x-3 max-sm:gap-y-3"
          style={{ maxWidth: 1100, gap: "14px 18px" }}
        >
          {valuePoints.map((point, i) => (
            <div
              key={point}
              className={`inline-flex items-center rounded-full cursor-default select-none transition-all duration-150 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{
                padding: "12px 20px",
                background: "#EEF4FF",
                border: "1px solid #CBD5FF",
                transitionDelay: isVisible ? `${i * 60}ms` : "0ms",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#E0EAFF"
                el.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#EEF4FF"
                el.style.transform = "translateY(0)"
              }}
            >
              <span
                className="max-sm:text-[14px]"
                style={{ fontSize: 16, fontWeight: 500, color: "#1E3A8A" }}
              >
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats section ── */}
      <div style={{ paddingTop: 64, paddingBottom: 64 }}>
        {/* Context line above stats */}
        <p
          className={`text-center mb-10 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.04em", color: "var(--color-text-muted)", textTransform: "uppercase" }}
        >
          Trusted by plumbers and contractors across the U.S.
        </p>

        <div
          className="section-container flex items-center justify-center max-sm:flex-col max-sm:gap-10"
          style={{ gap: 80, maxWidth: 900 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.number} className="flex items-center max-sm:gap-0" style={{ gap: 80 }}>
              {/* Vertical divider (desktop only, not first) */}
              {i > 0 && (
                <div
                  className="w-px shrink-0 max-sm:hidden"
                  style={{
                    height: 52,
                    background: "linear-gradient(to bottom, transparent, #CBD5E1, transparent)",
                  }}
                />
              )}
              <div
                className={`text-center transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
              >
                <div
                  className="max-sm:text-[44px]"
                  style={{
                    fontSize: 68,
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#0F172A",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="uppercase max-sm:text-[12px]"
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#64748B",
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
