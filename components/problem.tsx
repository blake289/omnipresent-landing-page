const painStats = [
  { num: "60%+", label: "of plumbing website visitors leave without calling" },
  { num: "$3K–$20K", label: "lost on every emergency job that goes to a competitor" },
  { num: "78%", label: "of customers choose the business that responds first" },
]

export function Problem() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div
        className="mx-auto max-w-[700px] pt-24 pb-20 px-6 max-md:pt-16 max-md:pb-14 max-[480px]:pt-12 max-[480px]:pb-10"
      >
        {/* Section label */}
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#DC2626",
            marginBottom: 20,
          }}
        >
          The Real Problem
        </p>

        {/* Headline */}
        <h2
          className="max-md:text-[28px] max-[480px]:text-[26px] max-md:tracking-[-0.01em]"
          style={{
            fontSize: 42,
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "#0F172A",
            marginBottom: 40,
          }}
        >
          Your Website Is Broken. And It&apos;s Costing You Thousands.
        </h2>

        {/* Story paragraph 1 */}
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "#334155",
            fontWeight: 400,
            marginBottom: 24,
          }}
        >
          A homeowner&apos;s water heater explodes at 11pm. They grab their
          phone and search &ldquo;emergency plumber near me.&rdquo; Your ad
          shows up. They click.
        </p>

        {/* Story paragraph 2 */}
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "#334155",
            fontWeight: 400,
            marginBottom: 36,
          }}
        >
          Your site takes 4 seconds to load. It looks like it was built in
          2015. The phone number is buried. They hit back and try the next
          result.
        </p>

        {/* Callout block 1 */}
        <div
          className="max-md:py-5 max-md:px-6 max-md:text-[16px]"
          style={{
            background: "#0F172A",
            borderRadius: 8,
            padding: "24px 32px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            marginBottom: 40,
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 1.55,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            That&apos;s a $4,000 job. Gone in 5 seconds. They&apos;re already
            calling your competitor.
          </p>
        </div>

        {/* Bridge paragraph */}
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "#334155",
            fontWeight: 400,
            marginBottom: 36,
          }}
        >
          And the ones who DO fill out your form? They wait. And wait. No
          instant response. No text. By the time you see the lead,
          they&apos;ve already called someone else.
        </p>

        {/* Callout block 2 */}
        <div
          className="max-md:py-5 max-md:px-6 max-md:text-[16px]"
          style={{
            background: "#0F172A",
            borderRadius: 8,
            padding: "24px 32px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            marginBottom: 40,
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 1.55,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Missed calls? Straight to voicemail. No callback. No follow-up.
            Gone.
          </p>
        </div>

        {/* Competitor paragraph */}
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: "#334155",
            fontWeight: 400,
            marginBottom: 56,
          }}
        >
          Meanwhile, your competitor with 200 Google reviews shows up above
          you in search. Every job you miss is a job—and a review—they get
          instead.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {painStats.map((stat) => (
            <div
              key={stat.num}
              className="max-[480px]:py-7 max-[480px]:px-6"
              style={{
                background: "#FFF7F7",
                border: "1px solid #FECACA",
                borderRadius: 12,
                padding: "32px 28px",
              }}
            >
              <div
                className="max-md:text-[34px]"
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "#DC2626",
                  marginBottom: 12,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: "#64748B",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p
          style={{
            fontSize: 17,
            fontWeight: 500,
            fontStyle: "italic",
            color: "#64748B",
            textAlign: "center",
            marginTop: 48,
          }}
        >
          The problem isn&apos;t your ads. It&apos;s what happens after the
          click.
        </p>
      </div>

    </section>
  )
}
