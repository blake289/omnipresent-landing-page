"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Script from "next/script"

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.12)
  const [formState, setFormState] = useState<"idle" | "error" | "submitted">(
    "idle"
  )
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [nameError, setNameError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const validate = () => {
    let valid = true
    setNameError("")
    setPhoneError("")

    if (!name.trim()) {
      setNameError("Please enter your name")
      valid = false
    }
    if (!phone.trim()) {
      setPhoneError("Please enter your phone number")
      valid = false
    } else if (!/^[\d\s\-().+]{7,}$/.test(phone.trim())) {
      setPhoneError("Please enter a valid phone number")
      valid = false
    }
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Track form submission
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "form_submit",
        form_name: "text_me",
        user_name: name,
      })
    }

    // TODO: Replace with your GHL webhook
    // fetch('YOUR_GHL_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, phone })
    // })

    setFormState("submitted")
  }

  return (
    <section
      id="book"
      className="py-[72px] max-sm:py-[52px] pb-20 bg-[var(--bg-soft)]"
    >
      <div ref={ref} className="max-w-[680px] mx-auto px-6 max-sm:px-5">
        <div
          className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--rx)] py-11 px-9 text-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] max-w-[600px] mx-auto max-sm:py-8 max-sm:px-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          <h2 className="text-[clamp(20px,5vw,28px)] font-bold leading-[1.15] tracking-[-0.03em] mb-2.5">
            Every week you wait, competitors get the calls that should be yours.
          </h2>
          <p className="text-[15px] text-[var(--t2)] text-center mb-1">
            Pick a time below. 15 minutes, no obligation.
          </p>

          {/* GHL Calendar Embed */}
          <div className="mt-6 rounded-[var(--r)] overflow-hidden">
            <iframe
              src="https://link.omnipresent.app/widget/booking/SxpR3xGWSQxBDYeHsUg7"
              className="w-full min-h-[600px] border-none overflow-hidden rounded-[10px]"
              scrolling="no"
              id="SxpR3xGWSQxBDYeHsUg7_1770761830786"
              title="Book a strategy call"
            />
          </div>
          <Script
            src="https://link.omnipresent.app/js/form_embed.js"
            strategy="lazyOnload"
          />

          {/* Divider */}
          <div className="flex items-center gap-3 my-[22px]">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--t4)] uppercase tracking-[0.08em] font-medium">
              or text me instead
            </span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          {/* Text-me form */}
          {formState !== "submitted" ? (
            <form onSubmit={handleSubmit} noValidate>
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
                onChange={(e) => {
                  setName(e.target.value)
                  if (nameError) setNameError("")
                }}
                className={`w-full py-3.5 px-4 bg-[var(--bg-soft)] border rounded-lg text-[var(--t1)] text-base mb-1 outline-none transition-all duration-200 focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(26,107,255,0.1)] placeholder:text-[var(--t4)] ${nameError
                    ? "border-[var(--red)]"
                    : "border-[var(--border)]"
                  }`}
              />
              {nameError && (
                <p className="text-xs text-[var(--red)] text-left mb-2">
                  {nameError}
                </p>
              )}
              {!nameError && <div className="mb-3" />}

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
                onChange={(e) => {
                  setPhone(e.target.value)
                  if (phoneError) setPhoneError("")
                }}
                className={`w-full py-3.5 px-4 bg-[var(--bg-soft)] border rounded-lg text-[var(--t1)] text-base mb-1 outline-none transition-all duration-200 focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(26,107,255,0.1)] placeholder:text-[var(--t4)] ${phoneError
                    ? "border-[var(--red)]"
                    : "border-[var(--border)]"
                  }`}
              />
              {phoneError && (
                <p className="text-xs text-[var(--red)] text-left mb-2">
                  {phoneError}
                </p>
              )}
              {!phoneError && <div className="mb-3" />}

              <button
                type="submit"
                data-track="text_me_cta"
                className="w-full py-4 bg-[var(--blue)] text-white text-base font-semibold border-none rounded-lg cursor-pointer transition-all duration-200 tracking-[-0.01em] shadow-[0_2px_8px_rgba(26,107,255,0.2)] hover:bg-[var(--blue-h)] hover:-translate-y-px"
              >
                Text Me Instead →
              </button>
              <div className="text-xs text-[var(--t3)] mt-2.5 text-center">
                We&apos;ll text you within a few minutes during business hours
              </div>
            </form>
          ) : (
            <div className="py-5 text-center">
              <div className="text-2xl mb-1.5 text-[var(--green)]">✓</div>
              <div className="text-[17px] font-semibold mb-1">
                Got it, {name}!
              </div>
              <div className="text-sm text-[var(--t3)]">
                We&apos;ll text you shortly.
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-5 mt-[18px] text-[13px] text-[var(--t3)] flex-wrap">
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              No obligation
            </span>
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              Free $3K–$5K+ website
            </span>
            <span className="inline-flex items-center gap-[5px]">
              <span className="text-[var(--green)] font-bold text-[13px]">
                ✓
              </span>{" "}
              340+ five-star reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
