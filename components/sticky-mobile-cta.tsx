"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

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
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        height: 72,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <a
        href="#book"
        className="flex items-center justify-center gap-2.5 w-full h-full text-white text-base font-semibold tracking-[-0.01em]"
        style={{ background: "var(--color-accent)" }}
      >
        <Phone className="w-5 h-5" />
        Book Free Call
      </a>
    </div>
  )
}
