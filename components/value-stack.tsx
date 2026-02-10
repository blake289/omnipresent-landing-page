"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const included = [
    { item: "Custom premium website", value: "$3,000–$5,000" },
    { item: "Professional copywriting", value: "$1,500" },
    { item: "Missed-call text-back", value: "$200/mo" },
    { item: "Lead capture & follow-up automation", value: "$300/mo" },
    { item: "Dashboard & analytics", value: "$150/mo" },
]

export function ValueStack() {
    const { ref, isVisible } = useScrollAnimation(0.12)

    return (
        <section className="py-[72px] max-sm:py-[52px] bg-[var(--bg-soft)]">
            <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
                <div
                    className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] mb-2.5 inline-block">
                        What you get
                    </span>
                    <h2 className="text-[clamp(22px,5.5vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
                        Everything you need to win online — included.
                    </h2>
                </div>

                {/* Value items */}
                <div
                    className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--rx)] overflow-hidden mt-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    {included.map((row, i) => (
                        <div
                            key={row.item}
                            className={`flex items-center justify-between py-[18px] px-6 text-[15px] ${i < included.length - 1
                                    ? "border-b border-[var(--border-l)]"
                                    : ""
                                }`}
                        >
                            <span className="text-[var(--t1)] flex items-center gap-2.5">
                                <span className="text-[var(--green)] font-bold text-[13px]">
                                    ✓
                                </span>
                                {row.item}
                            </span>
                            <span className="text-[var(--t3)] font-medium whitespace-nowrap ml-4">
                                {row.value}
                            </span>
                        </div>
                    ))}

                    {/* Total row */}
                    <div className="border-t-2 border-[var(--border)] bg-[var(--bg-soft)] py-[18px] px-6 flex items-center justify-between">
                        <span className="text-[15px] font-bold text-[var(--t1)]">
                            Total value
                        </span>
                        <span className="text-[15px] font-bold text-[var(--t1)]">
                            $5,000+ setup + $650/mo
                        </span>
                    </div>
                </div>

                {/* Your cost callout */}
                <div
                    className={`bg-[var(--blue)] rounded-[var(--rl)] py-6 px-7 mt-4 text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    <div className="text-white/80 text-sm font-medium mb-1">
                        Your cost
                    </div>
                    <div className="text-white text-[28px] font-bold tracking-[-0.03em]">
                        $0 setup · $297/mo
                    </div>
                    <div className="text-white/70 text-[13px] mt-2">
                        30-day money-back guarantee. Keep the website either way.
                    </div>
                </div>

                {/* CTA */}
                <div
                    className={`text-center mt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    <a
                        href="#book"
                        data-track="value_stack_cta"
                        className="inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white text-base font-semibold py-4 px-[30px] rounded-[var(--r)] tracking-[-0.01em] transition-all duration-200 hover:bg-[var(--blue-h)] hover:-translate-y-px shadow-[0_1px_3px_rgba(0,0,0,0.1),0_4px_14px_rgba(26,107,255,0.2)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),0_8px_24px_rgba(26,107,255,0.25)]"
                    >
                        Book a Free Strategy Call
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    )
}
