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
    // Only on desktop
    if (window.innerWidth < 768) return

    // Delay enabling exit intent to avoid false triggers
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
    // TODO: Hook up to email capture endpoint
    dismiss()
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Popup */}
      <div className="relative bg-white rounded-[var(--rx)] p-10 max-w-[480px] w-full shadow-[0_30px_80px_rgba(0,0,0,0.2)] text-center animate-up max-sm:p-6">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-muted)] text-[var(--t3)] hover:text-[var(--t1)] transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="h3 mb-3">Before you go—</h3>
        <p className="body text-[var(--t2)] mb-6">
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
            className="w-full h-[48px] px-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-[var(--r)] text-[var(--t1)] body mb-3 outline-none transition-all duration-200 focus:border-[var(--blue)] focus:shadow-[0_0_0_3px_rgba(26,107,255,0.1)] placeholder:text-[var(--t4)]"
          />
          <button type="submit" className="btn-primary w-full">
            Send My Free Audit →
          </button>
        </form>

        <button
          onClick={dismiss}
          className="mt-4 text-sm text-[var(--t4)] hover:text-[var(--t3)] transition-colors cursor-pointer bg-transparent border-none"
        >
          No thanks, my website is perfect
        </button>
      </div>
    </div>
  )
}
