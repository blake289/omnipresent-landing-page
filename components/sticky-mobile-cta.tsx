"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.04] bg-[#0A0F1C]/95 px-4 py-3 backdrop-blur-xl transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      role="complementary"
      aria-label="Get started"
    >
      <a
        href="#book-call"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A0F1C] transition-all duration-300 hover:bg-slate-100"
      >
        See if you qualify
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  )
}
