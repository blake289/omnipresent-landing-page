"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

const objections = [
  {
    q: "\"Why is the website actually free?\"",
    a: "The website isn't how we make money. The monthly system is — the instant lead response, missed-call text-back, review automation, follow-up sequences, CRM, and everything else in the stack.\n\nWe build your site for free because we're betting on results. You stay because it works, not because you're locked in. Most agencies charge $3,000–$5,000 for a website like this. We do it at $0 because the real value is in the leads you'll close and the reviews you'll collect.",
  },
  {
    q: "\"I've paid for marketing before. It didn't work.\"",
    a: "We hear this every day. Here's the difference: most agencies sell you traffic. Clicks. Impressions. None of that matters if your website doesn't convert and your follow-up is non-existent.\n\nWe fix what happens AFTER the click — the website, the instant response, the missed-call recovery, the reviews. That's where your money is leaking.",
  },
  {
    q: "\"How does the system pay for itself in 30 days?\"",
    a: "Simple math. The system is $297/month.\n\nOne recovered missed call that turns into a $500 job = paid for. One new 5-star review that helps you rank higher = more calls. One instant response that beats your competitor to the lead = job booked.\n\nMost plumbers recover 5–10+ leads per month that would've gone to voicemail or gotten no response. At $500–$5,000+ per job, the ROI isn't close.",
  },
  {
    q: "\"Why is this so much cheaper than buying everything separately?\"",
    a: "We run thousands of businesses on the same infrastructure. That lets us offer enterprise-level tools at a fraction of the cost. You'd pay $1,400+/month piecing this together yourself — plus the $3K–$5K for the website. We bundle everything for $297/mo with $0 upfront because volume makes it work.",
  },
  {
    q: "\"I don't have time to deal with a new website.\"",
    a: "You don't do anything. We handle the entire build. You get on one 15-minute call, answer questions about your business, and approve the final site before launch.\n\nAfter that, the system runs itself. You get a dashboard to see leads. That's it. Most plumbers spend more time on a single service call than they do on this entire process.",
  },
  {
    q: "\"What if it doesn't work?\"",
    a: "30-day money-back guarantee. If you're not getting results, you get a full refund and keep the website. We've done this for 1,200+ businesses. We know what works.",
  },
  {
    q: "\"How do the automatic review requests work?\"",
    a: "After you complete a job, the system sends your customer a text asking for a review. One tap takes them to your Google listing. No more awkward asks. No more forgetting. Reviews start stacking up automatically.\n\nMore reviews = higher Google ranking = more calls. It compounds.",
  },
  {
    q: "\"What's the catch with the 6-month minimum?\"",
    a: "No catch. We build you a $3K–$5K website for free. We need time to show results. After 6 months, cancel anytime — you keep the website, you just lose the automation.\n\nBut here's the reality: nobody cancels once the leads and reviews are flowing. The system pays for itself.",
  },
  {
    q: "\"Do I need to learn new software?\"",
    a: "The mobile app takes 5 minutes to learn. You get a notification when a lead comes in. You tap to call or text them back. That's it.\n\nEverything else runs automatically. The system handles the follow-up, the review requests, the missed-call texts. You just show up and close the jobs.",
  },
]

export function ObjectionHandling() {
  const { ref, isVisible } = useScrollAnimation(0.12)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section-pad bg-[var(--bg-alt)]">
      <div ref={ref} className="section-container max-w-[760px]">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="eyebrow text-[var(--blue)]">Straight Talk</span>
          <h2 className="h2 mb-4">
            You&apos;re Skeptical. Good. You Should Be.
          </h2>
          <p className="body-lg text-[var(--t2)] mb-8">
            Plumbers get burned by marketing people all the time. Here&apos;s the
            truth.
          </p>
        </div>

        <div>
          {objections.map((obj, i) => (
            <div
              key={obj.q}
              className={`border-b border-[var(--border)] cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${50 + i * 50}ms` }}
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center gap-3 py-6 select-none">
                <span className="body font-medium text-[var(--t1)]">
                  {obj.q}
                </span>
                <span
                  className={`w-8 h-8 min-w-[32px] rounded-full bg-[var(--bg-muted)] flex items-center justify-center text-lg text-[var(--t3)] transition-all duration-300 ${
                    openIndex === i
                      ? "rotate-45 bg-[var(--blue-l)] text-[var(--blue)]"
                      : ""
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 body text-[var(--t2)] leading-[1.7] ${
                  openIndex === i ? "max-h-[500px] pb-6" : "max-h-0"
                }`}
              >
                {obj.a.split("\n\n").map((paragraph, pi) => (
                  <p key={pi} className={pi > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro text-[var(--t3)] mt-3">
            No contracts. No pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
