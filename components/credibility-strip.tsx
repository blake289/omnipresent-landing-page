export function CredibilityStrip() {
  return (
    <section className="bg-[var(--bg-soft)] border-t border-b border-[var(--border-l)] py-[22px] mt-12">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 flex-wrap max-sm:gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--t2)]">
            <span className="text-[var(--gold-d)] text-[13px] tracking-[0.5px]">
              ★★★★★
            </span>
            <span>
              <span className="font-bold text-[var(--t1)]">4.9</span> on Google (
              <span className="font-bold text-[var(--t1)]">340+</span> reviews)
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--t2)]">
            <span className="text-[17px]">⚡</span>
            <span>
              Live in{" "}
              <span className="font-bold text-[var(--t1)]">48 hours</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--t2)]">
            <span className="text-[17px]">🛡️</span>
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
