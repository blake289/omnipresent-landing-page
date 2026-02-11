"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    q: "Why would you build my website for free?",
    a: "The website isn\u0027t how we make money — the monthly system is. We build for free because we\u0027re betting the results speak for themselves. Most agencies charge $3K–$5K+ for a site like this.",
  },
  {
    q: "How is this better than what I have now?",
    a: "Most small business sites look outdated and don\u0027t capture leads. We build something that looks premium, loads fast, and converts visitors into calls. Then automation makes sure no lead slips through.",
  },
  {
    q: "A real website in 48 hours?",
    a: "AI tools changed the game. What agencies take 6–8 weeks to deliver, we build in under 48 hours. Custom design. Real copy. Mobile-optimized. Not a template.",
  },
  {
    q: "Is $297/month worth it?",
    a: "Missed-call text-back alone recovers 5–10 leads per month. If one turns into a $500+ customer, the system pays for itself several times over.",
  },
  {
    q: "What if I don\u0027t like the website?",
    a: "You see it before launch and request changes. If you\u0027re not happy, the first month is fully refundable — and you keep the website.",
  },
  {
    q: "What if I want to cancel?",
    a: "6-month minimum. After that, cancel anytime. You keep the website, you just lose the automation.",
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.12)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-[72px] max-sm:py-[52px]">
      <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] mb-2.5 inline-block">
            Questions
          </span>
          <h2 className="text-[clamp(22px,5.5vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
            You&apos;re skeptical. Good.
          </h2>
        </div>

        <div className="mt-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`border-b border-[var(--border)] py-5 cursor-pointer first:border-t transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
                }`}
              style={{ transitionDelay: `${50 + i * 50}ms` }}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggle(i)
                }
              }}
            >
              <div className="flex justify-between items-center gap-3 text-base font-medium tracking-[-0.01em] select-none">
                {faq.q}
                <span
                  className={`w-7 h-7 min-w-[28px] rounded-full bg-[var(--bg-muted)] flex items-center justify-center text-base text-[var(--t3)] transition-all duration-300 ${openIndex === i
                      ? "rotate-45 bg-[var(--blue-l)] text-[var(--blue)]"
                      : ""
                    }`}
                >
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 text-[15px] text-[var(--t2)] leading-[1.7] tracking-[-0.01em] ${openIndex === i ? "max-h-[300px] pt-3" : "max-h-0"
                  }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
