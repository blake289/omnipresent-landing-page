"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Script from "next/script"

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.12)
  const [formState, setFormState] = useState<"idle" | "submitted">("idle")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    // TODO: Replace with your GHL webhook
    // fetch('YOUR_GHL_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, phone, company })
    // })

    setFormState("submitted")
  }

  return (
    <section id="book" className="section-pad bg-[var(--bg-alt)]">
      <div ref={ref} className="section-container max-w-[680px]">
        {/* Urgency headline */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="h2 mb-4">
            Every Week You Wait, Your Competitor Gets the Calls, the Jobs, and
            the Reviews.
          </h2>
          <p className="body-lg text-[var(--t2)] mb-6">
            Your website is either working for you or against you. Right now,
            it&apos;s probably leaking leads to plumbers with better systems.
          </p>

          {/* Value reminder */}
          <div className="body-lg font-medium text-[var(--t1)] space-y-1 mb-6">
            <p>$3K–$5K website. Free.</p>
            <p>$1,400+/mo in tools. Just $297.</p>
            <p>ROI in 30 days or your money back.</p>
          </div>

          <p className="body font-semibold text-[#DC2626]">
            ⚠️ Accepting 7 new plumbing companies this month. ⚠️
          </p>
        </div>

        {/* Form card */}
        <div
          className={`bg-white border border-[var(--border)] rounded-[var(--rx)] py-10 px-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-w-[560px] mx-auto max-sm:py-8 max-sm:px-5 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h3 className="h3 text-center mb-6">
            Book Your Free 15-Minute Plumber Strategy Call
          </h3>

          {/* GHL Calendar Embed */}
          <div className="rounded-[var(--r)] overflow-hidden mb-6">
            <iframe
              src="https://link.omnipresent.app/widget/booking/SxpR3xGWSQxBDYeHsUg7"
              className="w-full min-h-[600px] border-none overflow-hidden rounded-[10px]"
              scrolling="no"
              id="SxpR3xGWSQxBDYeHsUg7_1770761830786"
            />
          </div>
          <Script
            src="https://link.omnipresent.app/js/form_embed.js"
            strategy="lazyOnload"
          />

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--t4)] uppercase tracking-[0.08em] font-medium">
              or text us instead
            </span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Text-me form */}
          {formState === "idle" ? (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="uN"
                className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--t3)] mb-1.5 text-left"
              >
                Your name
              </label>
              <input
                type="text"
                id="uN"
                name="name"
                placeholder="John"
                required
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[48px] px-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-[var(--r)] text-[var(--t1)] body mb-3 outline-none transition-all duration-200 focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(26,107,255,0.1)] placeholder:text-[var(--t4)]"
              />
              <label
                htmlFor="uP"
                className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--t3)] mb-1.5 text-left"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="uP"
                name="phone"
                placeholder="(555) 123-4567"
                required
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-[48px] px-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-[var(--r)] text-[var(--t1)] body mb-3 outline-none transition-all duration-200 focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(26,107,255,0.1)] placeholder:text-[var(--t4)]"
              />
              <label
                htmlFor="uC"
                className="block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--t3)] mb-1.5 text-left"
              >
                Your plumbing company name{" "}
                <span className="text-[var(--t4)] normal-case">(optional)</span>
              </label>
              <input
                type="text"
                id="uC"
                name="company"
                placeholder="ABC Plumbing"
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full h-[48px] px-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-[var(--r)] text-[var(--t1)] body mb-4 outline-none transition-all duration-200 focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(26,107,255,0.1)] placeholder:text-[var(--t4)]"
              />
              <button type="submit" className="btn-primary w-full">
                Book My Free Call →
              </button>
            </form>
          ) : (
            <div className="py-8 text-center">
              <div className="text-3xl mb-2 text-[var(--green)]">✓</div>
              <div className="text-[18px] font-semibold mb-1">
                Got it, {name}!
              </div>
              <div className="micro text-[var(--t3)]">
                We&apos;ll text you within a few minutes.
              </div>
            </div>
          )}

          {/* Alternative CTA */}
          <p className="text-center micro text-[var(--t3)] mt-4">
            Prefer a text? Text &ldquo;PLUMBER&rdquo; to{" "}
            <strong className="text-[var(--t1)]">(619) 853-5003</strong> →
          </p>
        </div>

        {/* Trust builders below form */}
        <div
          className={`mt-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-col items-center gap-2.5">
            {[
              "We respond within 1 hour (usually faster)",
              "15-minute call, no sales pressure",
              "You get a custom growth plan even if we don't work together",
              "Free $3K–$5K website if we're a fit",
              "System pays for itself within 30 days or your money back",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 micro text-[var(--t2)]"
              >
                <span className="text-[var(--green)] font-bold">✓</span>
                {item}
              </span>
            ))}
          </div>

          {/* Final assurance */}
          <p className="text-center micro text-[#666] mt-6">
            No contracts to sign today. No obligation. Just a clear plan to get
            more jobs and more 5-star reviews.
          </p>
        </div>
      </div>
    </section>
  )
}
