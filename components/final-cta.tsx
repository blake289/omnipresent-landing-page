"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Script from "next/script"

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.12)
  const [formState, setFormState] = useState<"idle" | "submitted">("idle")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setFormState("submitted")
  }

  return (
    <>
      {/* ── Zone 1: Urgency (dark) ── */}
      <section
        id="book"
        className="relative overflow-hidden"
        style={{ background: "var(--color-bg-dark)", padding: "80px 0" }}
      >
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        />

        <div ref={ref} className="section-container relative z-10 max-w-[680px] text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2
              className="mb-5 max-sm:text-[26px] text-balance max-w-[620px] mx-auto"
              style={{
                fontSize: 38,
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#FFFFFF",
              }}
            >
              Every Week You Wait, Your Competitor Gets the Calls, the Jobs, and the Reviews.
            </h2>
            <p className="text-[17px] mb-5" style={{ lineHeight: 1.7, color: "var(--color-text-on-dark-muted)" }}>
              Your website is either working for you or against you. Right now,
              it&apos;s probably leaking leads to plumbers with better systems.
            </p>

            {/* Value reminder */}
            <div className="text-[17px] font-medium space-y-1 mb-8" style={{ color: "var(--color-text-on-dark)" }}>
              <p>$3K–$5K website. Free.</p>
              <p>$1,400+/mo in tools. Just $297.</p>
              <p>ROI in 30 days or your money back.</p>
            </div>

            {/* Scarcity badge */}
            <span
              className="inline-block text-[14px] font-semibold rounded-full px-5 py-2"
              style={{
                background: "var(--color-accent)",
                color: "#FFFFFF",
                boxShadow: "var(--shadow-blue)",
              }}
            >
              Accepting 7 new plumbing companies this month
            </span>
          </div>
        </div>
      </section>

      {/* ── Zone 2: Form (white) ── */}
      <section style={{ background: "var(--color-bg-primary)", padding: "80px 0" }}>
        <div className="section-container max-w-[680px]">
          {/* Form card */}
          <div
            className={`mx-auto max-sm:py-8 max-sm:px-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{
              maxWidth: 520,
              border: "1px solid var(--color-border-light)",
              borderRadius: "var(--radius-xl)",
              padding: "48px 40px",
              boxShadow: "var(--shadow-xl)",
              background: "#FFFFFF",
            }}
          >
            <h3
              className="text-center mb-8"
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "var(--color-text-primary)",
              }}
            >
              Book Your Free 15-Minute Plumber Strategy Call
            </h3>

            {/* GHL Calendar Embed */}
            <div className="overflow-hidden mb-6" style={{ borderRadius: "var(--radius-md)" }}>
              <iframe
                src="https://link.omnipresent.app/widget/booking/SxpR3xGWSQxBDYeHsUg7"
                className="w-full min-h-[600px] border-none overflow-hidden"
                style={{ borderRadius: 10 }}
                scrolling="no"
                id="SxpR3xGWSQxBDYeHsUg7_1770761830786"
              />
            </div>
            <Script
              src="https://link.omnipresent.app/js/form_embed.js"
              strategy="lazyOnload"
            />

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px" style={{ background: "var(--color-border-light)" }} />
              <span
                className="text-[11px] uppercase tracking-[0.1em] font-semibold"
                style={{ color: "var(--color-text-muted)" }}
              >
                or text us instead
              </span>
              <div className="flex-1 h-px" style={{ background: "var(--color-border-light)" }} />
            </div>

            {/* Text-me form */}
            {formState === "idle" ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="uN" className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-2 text-left" style={{ color: "var(--color-text-muted)" }}>
                  Your name
                </label>
                <input
                  type="text" id="uN" name="name" placeholder="John" required autoComplete="given-name"
                  value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 outline-none mb-4"
                  style={{
                    height: 52,
                    background: "#F8FAFC",
                    border: "1.5px solid var(--color-border-light)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 16,
                    color: "var(--color-text-primary)",
                    transition: "border-color 200ms, box-shadow 200ms",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-glow)" }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--color-border-light)"; e.target.style.boxShadow = "none" }}
                />
                <label htmlFor="uP" className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-2 text-left" style={{ color: "var(--color-text-muted)" }}>
                  Phone number
                </label>
                <input
                  type="tel" id="uP" name="phone" placeholder="(555) 123-4567" required autoComplete="tel"
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 outline-none mb-4"
                  style={{
                    height: 52,
                    background: "#F8FAFC",
                    border: "1.5px solid var(--color-border-light)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 16,
                    color: "var(--color-text-primary)",
                    transition: "border-color 200ms, box-shadow 200ms",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.boxShadow = "0 0 0 3px var(--color-accent-glow)" }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--color-border-light)"; e.target.style.boxShadow = "none" }}
                />
                <button type="submit" className="btn-primary w-full mt-1">
                  Book My Free Call →
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="text-3xl mb-2" style={{ color: "var(--color-success)" }}>✓</div>
                <div className="text-[18px] font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
                  Got it, {name}!
                </div>
                <div className="text-[14px]" style={{ color: "var(--color-text-tertiary)" }}>
                  We&apos;ll text you within a few minutes.
                </div>
              </div>
            )}

            {/* Alternative CTA */}
            <p className="text-center text-[14px] mt-4" style={{ color: "var(--color-text-tertiary)" }}>
              Prefer a text? Text &ldquo;PLUMBER&rdquo; to{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>(619) 853-5003</strong> →
            </p>
          </div>

          {/* Trust builders below form */}
          <div
            className={`mt-10 transition-all duration-700 delay-200 ${
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
                  className="inline-flex items-center gap-2 text-[14px]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span className="font-bold" style={{ color: "var(--color-success)" }}>✓</span>
                  {item}
                </span>
              ))}
            </div>

            {/* Final assurance */}
            <p className="text-center text-[14px] mt-6" style={{ color: "var(--color-text-tertiary)" }}>
              No contracts to sign today. No obligation. Just a clear plan to get
              more jobs and more 5-star reviews.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
