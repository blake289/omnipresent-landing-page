"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const lineItems = [
  { name: "Premium Plumbing Website", desc: "Custom design, mobile-optimized, built to convert", cost: "$3,000–$5,000 (one-time)" },
  { name: "Website Hosting & Maintenance", desc: "SSL, updates, security, speed optimization", cost: "$99/mo" },
  { name: "Missed-Call Text-Back", desc: "Auto-text within 60 seconds, 24/7", cost: "$147/mo" },
  { name: "Instant Lead Response", desc: "Text-back on every form submission", cost: "$97/mo" },
  { name: "Reputation Management", desc: "Automated review requests + monitoring", cost: "$199/mo" },
  { name: "CRM & Lead Dashboard", desc: "See every lead, source, and status in one place", cost: "$197/mo" },
  { name: "Two-Way SMS Conversations", desc: "Text leads back and forth from dashboard", cost: "$97/mo" },
  { name: "Automated Follow-Up Sequences", desc: "Nurture leads automatically via text + email", cost: "$149/mo" },
  { name: "Online Booking Calendar", desc: "Let customers book appointments 24/7", cost: "$49/mo" },
  { name: "Call Tracking & Recording", desc: "Know which ads drive calls, review for training", cost: "$99/mo" },
  { name: "Unified Inbox", desc: "Texts, emails, Facebook messages — one place", cost: "$79/mo" },
  { name: "Pipeline Management", desc: "Track jobs from lead to invoice", cost: "$97/mo" },
  { name: "Analytics & Reporting", desc: "Know what's working, what's not", cost: "$79/mo" },
  { name: "Mobile App Access", desc: "Manage leads and respond from your phone", cost: "$49/mo" },
]

export function ValueStack() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-pad" style={{ background: "var(--color-bg-primary)" }}>
      <div ref={ref} className="section-container">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-text-muted)" }}>What You Get</span>
          <h2 className="h2 mb-4">
            Everything You Need to Dominate Your Market.
            <br />
            One System. One Price.
          </h2>
          <p className="body-lg" style={{ color: "var(--color-text-secondary)" }}>
            If you bought these separately, you&apos;d pay $2,500+/month. With
            us, it&apos;s $297.
          </p>
        </div>

        {/* Value stack card */}
        <div
          className={`mx-auto overflow-hidden transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{
            maxWidth: 680,
            border: "2px solid var(--color-border-light)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-xl)",
            background: "#FFFFFF",
          }}
        >
          {/* Line items */}
          {lineItems.map((item, i) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 max-sm:flex-col max-sm:gap-1"
              style={{
                padding: "20px 36px",
                borderBottom: "1px solid #F1F5F9",
                background: i % 2 === 1 ? "#FAFAF8" : "#FFFFFF",
              }}
            >
              <div className="flex-1">
                <div className="text-[16px] font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  {item.name}
                </div>
                <div className="text-[14px]" style={{ color: "var(--color-text-tertiary)", marginTop: 2 }}>
                  {item.desc}
                </div>
              </div>
              <div
                className="text-[15px] font-medium line-through text-right whitespace-nowrap shrink-0"
                style={{ color: "var(--color-danger)" }}
              >
                {item.cost}
              </div>
            </div>
          ))}

          {/* Total row */}
          <div
            style={{
              background: "#F8FAFC",
              borderTop: "2px solid var(--color-border-light)",
              padding: "24px 36px",
            }}
          >
            <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:text-center">
              <div
                className="text-[13px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Total If Bought Separately:
              </div>
              <div className="text-right max-sm:text-center">
                <div className="text-[18px] font-semibold line-through" style={{ color: "var(--color-danger)" }}>
                  $3,000–$5,000 upfront
                </div>
                <div className="text-[18px] font-semibold line-through" style={{ color: "var(--color-danger)" }}>
                  + $1,437/mo ongoing
                </div>
              </div>
            </div>
          </div>

          {/* Price reveal box — blue, bottom-rounded only */}
          <div
            className="text-center"
            style={{
              background: "#15803D",
              padding: "40px 36px",
              borderRadius: "0 0 var(--radius-xl) var(--radius-xl)",
            }}
          >
            <div
              className="text-[13px] font-bold uppercase tracking-[0.12em] mb-3"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Your Price With Us:
            </div>
            <div
              className="leading-none max-sm:text-[28px]"
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: "#FFFFFF",
                textShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              $0 UPFRONT + $297/mo
            </div>
            <p className="text-[15px] font-medium mt-3" style={{ color: "rgba(255,255,255,0.9)" }}>
              That&apos;s 79% less than buying separately.
            </p>
          </div>
        </div>

        {/* ROI reminder */}
        <p
          className={`text-center text-[17px] font-medium mt-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "var(--color-text-secondary)" }}
        >
          One emergency job ($4K–$20K) pays for the entire year.
          <br />
          Most clients see ROI in the first 30 days.
        </p>

        {/* Section CTA */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[15px] font-medium mt-3" style={{ color: "var(--color-text-secondary)" }}>
            See if you qualify for the $297/mo system.
          </p>
        </div>
      </div>
    </section>
  )
}
