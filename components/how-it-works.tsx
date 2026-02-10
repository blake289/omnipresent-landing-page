"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const steps = [
  {
    num: "01",
    title: "A 15-minute call",
    body: "Tell me about your business, your customers, and what's not working. I'll tell you if I can help. No pitch, no pressure — and if it's not a fit, I'll say so.",
    image: "/images/step-conversation.png",
    imageAlt:
      "Two people having a casual business conversation over coffee",
  },
  {
    num: "02",
    title: "Your site goes live in 48 hours",
    body: "I build a custom Smart Website around your specific business. You review everything before it goes live. Not happy? I'll revise it until you are.",
    image: "/images/step-build.png",
    imageAlt:
      "Hands on a laptop keyboard with a professional website being designed on screen",
  },
  {
    num: "03",
    title: "Leads start coming in",
    body: "Day one: missed-call text-back is live. Lead capture is active. Follow-up sequences are running. You go back to running your business. The system handles the rest.",
    image: "/images/step-results.png",
    imageAlt:
      "Business owner checking their phone with a pleased expression after receiving a new lead",
  },
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      id="how-it-works"
      className="bg-[#FAFBFC] py-28 md:py-40"
      aria-labelledby="process-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div
          className={`mx-auto max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#0A0F1C]/30">
            How it works
          </p>
          <h2
            id="process-heading"
            className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-[#0A0F1C] md:text-[2.75rem] lg:text-5xl"
          >
            Three steps. No complexity.
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              style={{
                transitionDelay: isVisible ? `${250 + i * 200}ms` : "0ms",
              }}
            >
              {/* Photo */}
              <div
                className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.imageAlt}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Copy */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-display text-5xl font-bold text-[#0A0F1C]/[0.05] md:text-6xl">
                  {step.num}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[#0A0F1C] md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-[1.75] text-[#0A0F1C]/50 md:text-base md:leading-[1.75]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
