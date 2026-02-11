"use client"

import { useEffect } from "react"

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[]
    }
}

function trackEvent(event: string, data?: Record<string, unknown>) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event, ...data })
}

export function Analytics() {
    useEffect(() => {
        // CTA click tracking
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("[data-track]")
            if (target) {
                trackEvent("cta_click", {
                    cta_label: target.getAttribute("data-track"),
                    cta_url: (target as HTMLAnchorElement).href || undefined,
                })
            }
        }
        document.addEventListener("click", handleClick)

        // Scroll depth tracking
        const thresholds = [25, 50, 75, 100]
        const fired = new Set<number>()

        const handleScroll = () => {
            const scrollPct = Math.round(
                ((window.scrollY + window.innerHeight) /
                    document.documentElement.scrollHeight) *
                100
            )
            for (const t of thresholds) {
                if (scrollPct >= t && !fired.has(t)) {
                    fired.add(t)
                    trackEvent("scroll_depth", { depth: t })
                }
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            document.removeEventListener("click", handleClick)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return null
}
