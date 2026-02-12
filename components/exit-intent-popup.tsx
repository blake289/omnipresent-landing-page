"use client"

import { useEffect, useState, useCallback } from "react"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [email, setEmail] = useState("")

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true)
      }
    },
    [dismissed]
  )

  useEffect(() => {
    if (window.innerWidth < 768) return

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseLeave])

  const dismiss = () => {
    setShow(false)
    setDismissed(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    dismiss()
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />

      {/* Popup */}
      <div
        className="relative w-full text-center animate-up max-sm:p-6"
        style={{
          maxWidth: 480,
          background: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          padding: "44px 40px",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ background: "var(--color-bg-cool)", color: "var(--color-text-tertiary)" }}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h3
          className="mb-3"
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "var(--color-text-primary)",
          }}
        >
          Before you go—
        </h3>
        <p className="text-[16px] mb-6" style={{ lineHeight: 1.6, color: "var(--color-text-secondary)" }}>
          Get a free 2-minute audit of your current plumbing website.
          We&apos;ll show you exactly where you&apos;re losing leads (and what
          it&apos;s costing you).
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          <button type="submit" className="btn-primary w-full">
            Send My Free Audit →
          </button>
        </form>

        <button
          onClick={dismiss}
          className="mt-4 text-sm transition-colors cursor-pointer bg-transparent border-none"
          style={{ color: "var(--color-text-muted)" }}
        >
          No thanks, my website is perfect
        </button>
      </div>
    </div>
  )
}
