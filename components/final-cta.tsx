"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Close() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      id="book-call"
      className="relative overflow-hidden bg-[#0A0F1C] py-32 md:py-44"
      aria-labelledby="close-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/[0.03] blur-[150px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5 md:gap-16">
          {/* Portrait -- left column, visible on md+ */}
          <div
            className={`hidden md:block md:col-span-2 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/owner-confident.png"
                alt="Confident business owner in their workspace"
                width={480}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Copy -- right column */}
          <div className="text-center md:col-span-3 md:text-left">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2
                id="close-heading"
                className="text-balance font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-[2.75rem] md:text-5xl"
              >
                Every week your website sits there,
                your competitors are getting the calls you should be getting.
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-[17px] leading-[1.75] text-slate-400 md:mx-0 md:text-lg md:leading-[1.75]">
                {"15 minutes. No obligation. If it's not a fit, I'll tell you — and I'll tell you why."}
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 md:items-start">
                <a
                  href="#book-call"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#0A0F1C] transition-all duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C] md:px-10 md:py-5 md:text-base"
                >
                  See if you qualify
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <p className="text-[13px] text-slate-600">
                  Free to start. No credit card. No awkward sales pitch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
