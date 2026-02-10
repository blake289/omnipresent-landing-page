"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom =
        document.querySelector("section")?.getBoundingClientRect().bottom ?? 0
      const bookSection = document.getElementById("book")
      const bookTop = bookSection?.getBoundingClientRect().top ?? Infinity

      setVisible(heroBottom < 0 && bookTop > window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white/[0.92] backdrop-blur-2xl py-2.5 px-4 border-t border-[var(--border)] z-50 transition-transform duration-300 flex justify-center md:hidden ${visible ? "translate-y-0" : "translate-y-full"
        }`}
    >
      <a
        href="#book"
        data-track="sticky_mobile_cta"
        className="inline-flex items-center justify-center gap-2 bg-[var(--blue)] text-white text-[15px] font-semibold py-3.5 px-5 rounded-[var(--r)] max-w-[320px] w-full tracking-[-0.01em] transition-all duration-200 hover:bg-[var(--blue-h)] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_4px_14px_rgba(26,107,255,0.2)]"
      >
        Book a Free Strategy Call
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}
