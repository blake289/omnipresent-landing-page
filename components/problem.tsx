"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function Tension() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section className="bg-white py-28 md:py-40" aria-labelledby="tension-heading">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Left -- copy */}
          <div className="max-w-xl">
            {/* Editorial label */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#0A0F1C]/30">
                The silent revenue leak
              </p>
            </div>

            {/* The uncomfortable truth */}
            <div
              className={`mt-10 transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2
                id="tension-heading"
                className="font-display text-[1.75rem] font-bold leading-[1.3] tracking-tight text-[#0A0F1C] sm:text-3xl md:text-[2.5rem] md:leading-[1.25]"
              >
                Your website gets visitors every week.
                <br className="hidden md:block" />
                <span className="text-[#0A0F1C]/30">
                  {" How many become paying customers?"}
                </span>
              </h2>
            </div>

            {/* The cost */}
            <div
              className={`mt-12 max-w-lg transition-all duration-700 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <p className="text-[17px] leading-[1.85] text-[#0A0F1C]/50 md:text-lg md:leading-[1.85]">
                {"Here's what's happening right now: Someone needs your service. They Google you. They land on your site. They don't find answers fast enough. They leave and call the next guy on the list. That's a $2,000 job you never knew you lost. And 62% of calls to small businesses go unanswered — every single one is revenue walking out the door."}
              </p>
            </div>

            {/* The shift */}
            <div
              className={`mt-10 transition-all duration-700 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-[17px] font-medium leading-[1.85] text-[#0A0F1C] md:text-lg">
                {"What if your website could capture them before they leave?"}
              </p>
            </div>
          </div>

          {/* Right -- photo */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/missed-call.png"
                alt="Business owner looking at missed call on their phone while busy in their workspace"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
              {/* Stat overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 pb-6 pt-16">
                <p className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                  62%
                </p>
                <p className="mt-1 text-sm text-white/70">
                  of calls to small businesses go unanswered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
