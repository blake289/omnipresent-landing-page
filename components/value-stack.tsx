"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const lineItems = [
  {
    name: "Premium Plumbing Website",
    desc: "Custom design, mobile-optimized, built to convert",
    cost: "$3,000–$5,000 (one-time)",
  },
  {
    name: "Website Hosting & Maintenance",
    desc: "SSL, updates, security, speed optimization",
    cost: "$99/mo",
  },
  {
    name: "Missed-Call Text-Back",
    desc: "Auto-text within 60 seconds, 24/7",
    cost: "$147/mo",
  },
  {
    name: "Instant Lead Response",
    desc: "Text-back on every form submission",
    cost: "$97/mo",
  },
  {
    name: "Reputation Management",
    desc: "Automated review requests + monitoring",
    cost: "$199/mo",
  },
  {
    name: "CRM & Lead Dashboard",
    desc: "See every lead, source, and status in one place",
    cost: "$197/mo",
  },
  {
    name: "Two-Way SMS Conversations",
    desc: "Text leads back and forth from dashboard",
    cost: "$97/mo",
  },
  {
    name: "Automated Follow-Up Sequences",
    desc: "Nurture leads automatically via text + email",
    cost: "$149/mo",
  },
  {
    name: "Online Booking Calendar",
    desc: "Let customers book appointments 24/7",
    cost: "$49/mo",
  },
  {
    name: "Call Tracking & Recording",
    desc: "Know which ads drive calls, review for training",
    cost: "$99/mo",
  },
  {
    name: "Unified Inbox",
    desc: "Texts, emails, Facebook messages — one place",
    cost: "$79/mo",
  },
  {
    name: "Pipeline Management",
    desc: "Track jobs from lead to invoice",
    cost: "$97/mo",
  },
  {
    name: "Analytics & Reporting",
    desc: "Know what's working, what's not",
    cost: "$79/mo",
  },
  {
    name: "Mobile App Access",
    desc: "Manage leads and respond from your phone",
    cost: "$49/mo",
  },
]

export function ValueStack() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="section-pad bg-white">
      <div ref={ref} className="section-container max-w-[900px]">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[var(--blue)]">What You Get</span>
          <h2 className="h2 mb-4">
            Everything You Need to Dominate Your Market.
            <br />
            One System. One Price.
          </h2>
          <p className="body-lg text-[var(--t2)]">
            If you bought these separately, you&apos;d pay $2,500+/month. With
            us, it&apos;s $297.
          </p>
        </div>

        {/* Value stack card */}
        <div
          className={`border-2 border-[#E5E7EB] rounded-[20px] p-12 max-sm:p-5 bg-white max-w-[800px] mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Line items */}
          <div className="divide-y divide-[#F3F4F6]">
            {lineItems.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 py-5 max-sm:flex-col max-sm:gap-1"
              >
                <div className="flex-1">
                  <div className="body font-semibold text-[var(--t1)]">
                    {item.name}
                  </div>
                  <div className="micro text-[#666]">{item.desc}</div>
                </div>
                <div className="body font-semibold text-[#991B1B] line-through text-right whitespace-nowrap shrink-0">
                  {item.cost}
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t-2 border-[#E5E7EB] pt-6 mt-2">
            <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:text-center">
              <div className="body font-bold text-[var(--t1)] uppercase tracking-wider text-sm">
                Total If Bought Separately:
              </div>
              <div className="text-right max-sm:text-center">
                <div className="body font-bold text-[#991B1B] line-through">
                  $3,000–$5,000 upfront
                </div>
                <div className="body font-bold text-[#991B1B] line-through">
                  + $1,437/mo ongoing
                </div>
              </div>
            </div>
          </div>

          {/* Your Price box */}
          <div className="bg-[#F0FDF4] border-2 border-[#22C55E] rounded-[var(--r)] p-8 mt-8 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-[#166534] mb-3">
              Your Price With Us:
            </div>
            <div className="text-[40px] font-bold text-[#166534] leading-none max-sm:text-[32px]">
              $0 UPFRONT + $297/mo
            </div>
            <p className="micro text-[#166534] mt-3">
              That&apos;s 79% less than buying separately.
            </p>
          </div>
        </div>

        {/* ROI reminder */}
        <p
          className={`text-center body-lg font-semibold mt-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
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
          <p className="micro text-[var(--t3)] mt-3">
            See if you qualify for the $297/mo system.
          </p>
        </div>
      </div>
    </section>
  )
}
