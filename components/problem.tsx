import { ArrowRight } from "lucide-react"

const painStats = [
  { num: "60%+", label: "of plumbing website visitors leave without calling" },
  { num: "$5K–$15K+", label: "in lost revenue every month from leads that never hear back" },
  { num: "78%", label: "of customers hire the first business to respond" },
]

export function Problem() {
  return (
    <section style={{ background: "var(--color-bg-primary)" }}>
      <div
        className="mx-auto px-6 max-md:pt-16 max-md:pb-14 max-[480px]:pt-12 max-[480px]:pb-10"
        style={{ maxWidth: "var(--content-narrow)", paddingTop: "var(--section-padding-y)", paddingBottom: "var(--section-padding-y)" }}
      >
        {/* Section label */}
        <p
          className="eyebrow"
          style={{ color: "var(--color-danger)" }}
        >
          The Real Problem
        </p>

        {/* Headline */}
        <h2
          className="h2 max-md:text-[28px] max-[480px]:text-[26px] max-md:tracking-[-0.01em]"
          style={{ marginBottom: 40 }}
        >
          Your Website Is Losing You Jobs. Every Single Day.
        </h2>

        {/* ═══ Beat 1: The search scenario ═══ */}
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-text-secondary)", fontWeight: 400, marginBottom: 24 }}>
          A homeowner&apos;s water heater explodes at 11pm. They grab their
          phone and search &ldquo;emergency plumber near me.&rdquo;
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-text-secondary)", fontWeight: 400, marginBottom: 24 }}>
          Your business shows up. They tap.
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-text-secondary)", fontWeight: 400, marginBottom: 36 }}>
          Your site loads. But it looks like every other plumber&apos;s site. No
          reviews visible. No photos of your work. No way for them to text you
          right now. Nothing that tells them why they should call you instead of
          the next guy. They hit back.
        </p>

        {/* Callout block 1 */}
        <div
          className="max-md:py-5 max-md:px-6 max-md:text-[16px]"
          style={{
            background: "var(--color-bg-dark)",
            borderRadius: "var(--radius-md)",
            padding: "28px 32px",
            marginBottom: 40,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.55, color: "#FFFFFF", margin: 0 }}>
            That&apos;s a $4,000 job. Gone in 5 seconds. They&apos;re already
            calling your competitor.
          </p>
        </div>

        {/* ═══ Beat 2: The lead response gap ═══ */}
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-text-secondary)", fontWeight: 400, marginBottom: 36 }}>
          And the ones who DO reach out? They fill out your form. Or leave a
          voicemail. But you&apos;re under a sink or on a roof. You can&apos;t
          answer. There&apos;s no system texting them back, no auto-response
          keeping them warm. So they do what anyone would do.
        </p>

        {/* Callout block 2 */}
        <div
          className="max-md:py-5 max-md:px-6 max-md:text-[16px]"
          style={{
            background: "var(--color-bg-dark)",
            borderRadius: "var(--radius-md)",
            padding: "28px 32px",
            marginBottom: 40,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.55, color: "#FFFFFF", margin: 0 }}>
            They call the next plumber. And that plumber answers.
          </p>
        </div>

        {/* ═══ Beat 3: The compounding competitor problem ═══ */}
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-text-secondary)", fontWeight: 400, marginBottom: 0 }}>
          Meanwhile, your competitor with 200 Google reviews shows up above
          you in search. They have a fast site, instant follow-up, and a system
          that works while they sleep. Every job you lose is a job they win, a
          review they earn, and a bigger gap between you.
        </p>

        {/* Transition line into stats */}
        <p
          className="max-sm:text-[17px]"
          style={{
            fontSize: 19,
            fontWeight: 600,
            lineHeight: 1.4,
            color: "var(--color-text-primary)",
            textAlign: "center",
            marginTop: 56,
            marginBottom: 32,
          }}
        >
          Here&apos;s what that actually costs you:
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
          {painStats.map((stat) => (
            <div
              key={stat.num}
              className="max-[480px]:py-7 max-[480px]:px-6"
              style={{
                background: "var(--color-danger-light)",
                border: "1px solid var(--color-danger-border)",
                borderRadius: "var(--radius-md)",
                padding: "32px 28px",
              }}
            >
              <div
                className="max-md:text-[34px]"
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "var(--color-danger)",
                  marginBottom: 12,
                }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 400, color: "var(--color-text-tertiary)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p style={{ fontSize: 17, fontWeight: 500, fontStyle: "italic", color: "var(--color-text-muted)", textAlign: "center", marginTop: 48 }}>
          The problem isn&apos;t getting found. It&apos;s what happens when they get to your site.
        </p>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <a href="#book" className="btn-primary">
            Book My Free Plumber Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="micro mt-3" style={{ color: "var(--color-text-muted)" }}>
            See what&apos;s leaking — and how to fix it.
          </p>
        </div>

        {/* Section divider */}
        <div className="section-divider-line mt-12" />
      </div>
    </section>
  )
}
