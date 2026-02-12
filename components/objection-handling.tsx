"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const objections = [
  { q: "\"Why is the website actually free?\"", a: "The website isn't how we make money. The monthly system is — the instant lead response, missed-call text-back, review automation, follow-up sequences, CRM, and everything else in the stack.\n\nWe build your site for free because we're betting on results. You stay because it works, not because you're locked in. Most agencies charge $3,000–$5,000 for a website like this. We do it at $0 because the real value is in the leads you'll close and the reviews you'll collect." },
  { q: "\"I've paid for marketing before. It didn't work.\"", a: "We hear this every day. Here's the difference: most agencies sell you traffic. Clicks. Impressions. None of that matters if your website doesn't convert and your follow-up is non-existent.\n\nWe fix what happens AFTER the click — the website, the instant response, the missed-call recovery, the reviews. That's where your money is leaking." },
  { q: "\"How does the system pay for itself in 30 days?\"", a: "Simple math. The system is $297/month.\n\nOne recovered missed call that turns into a $500 job = paid for. One new 5-star review that helps you rank higher = more calls. One instant response that beats your competitor to the lead = job booked.\n\nMost plumbers recover 5–10+ leads per month that would've gone to voicemail or gotten no response. At $500–$5,000+ per job, the ROI isn't close." },
  { q: "\"Why is this so much cheaper than buying everything separately?\"", a: "We run thousands of businesses on the same infrastructure. That lets us offer enterprise-level tools at a fraction of the cost. You'd pay $1,400+/month piecing this together yourself — plus the $3K–$5K for the website. We bundle everything for $297/mo with $0 upfront because volume makes it work." },
  { q: "\"I don't have time to deal with a new website.\"", a: "You don't do anything. We handle the entire build. You get on one 15-minute call, answer questions about your business, and approve the final site before launch.\n\nAfter that, the system runs itself. You get a dashboard to see leads. That's it. Most plumbers spend more time on a single service call than they do on this entire process." },
  { q: "\"What if it doesn't work?\"", a: "30-day money-back guarantee. If you're not getting results, you get a full refund and keep the website. We've done this for 1,200+ businesses. We know what works." },
  { q: "\"How do the automatic review requests work?\"", a: "After you complete a job, the system sends your customer a text asking for a review. One tap takes them to your Google listing. No more awkward asks. No more forgetting. Reviews start stacking up automatically.\n\nMore reviews = higher Google ranking = more calls. It compounds." },
  { q: "\"What's the catch with the 6-month minimum?\"", a: "No catch. We build you a $3K–$5K website for free. We need time to show results. After 6 months, cancel anytime — you keep the website, you just lose the automation.\n\nBut here's the reality: nobody cancels once the leads and reviews are flowing. The system pays for itself." },
  { q: "\"Do I need to learn new software?\"", a: "The mobile app takes 5 minutes to learn. You get a notification when a lead comes in. You tap to call or text them back. That's it.\n\nEverything else runs automatically. The system handles the follow-up, the review requests, the missed-call texts. You just show up and close the jobs." },
]

export function ObjectionHandling() {
  const { ref, isVisible } = useScrollAnimation(0.12)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      className="section-pad"
      style={{ background: "var(--color-bg-dark)" }}
    >
      <div ref={ref} className="section-container" style={{ maxWidth: "var(--content-narrow)" }}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow" style={{ color: "var(--color-accent)" }}>Straight Talk</span>
          <h2 className="h2 mb-4" style={{ color: "#FFFFFF" }}>
            You&apos;re Skeptical. Good. You Should Be.
          </h2>
          <p className="body-lg" style={{ color: "var(--color-text-on-dark-muted)" }}>
            Plumbers get burned by marketing people all the time. Here&apos;s the truth.
          </p>
        </div>

        {/* Surface container */}
        <div
          className="overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25), 0 0 80px rgba(37,99,235,0.04)",
          }}
        >
          {objections.map((obj, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={obj.q}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.015)",
                  borderBottom: i < objections.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  transitionDelay: `${50 + i * 50}ms`,
                }}
              >
                {/* Question row — clickable */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center gap-4 w-full text-left select-none cursor-pointer bg-transparent border-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
                  style={{ padding: "22px 28px" }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[18px] font-semibold leading-snug transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                    style={{ color: "rgba(255,255,255,0.95)" }}
                  >
                    {obj.q}
                  </span>
                  <span
                    className={`flex items-center justify-center shrink-0 text-[20px] font-medium rounded-lg transition-all duration-250 ease-out group-hover:border-[rgba(255,255,255,0.15)] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      background: isOpen ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10,
                      color: isOpen ? "var(--color-accent)" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer — animated */}
                <div
                  className="overflow-hidden transition-all ease-out"
                  style={{
                    maxHeight: isOpen ? 600 : 0,
                    opacity: isOpen ? 1 : 0,
                    transitionDuration: isOpen ? "250ms" : "200ms",
                  }}
                >
                  {/* Faint divider between question and answer */}
                  <div
                    className="mx-7"
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,0.06)",
                    }}
                  />

                  <div style={{ padding: "20px 28px 28px 28px", maxWidth: "65ch" }}>
                    {obj.a.split("\n\n").map((paragraph, pi) => (
                      <p
                        key={pi}
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: "rgba(255,255,255,0.7)",
                          marginTop: pi > 0 ? 16 : 0,
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a href="#book" className="btn-primary btn-primary-on-dark">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro mt-3" style={{ color: "var(--color-text-on-dark-muted)" }}>
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
