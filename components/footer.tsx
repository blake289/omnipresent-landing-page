export function Footer() {
  return (
    <footer className="py-9 text-center text-[13px] text-[var(--t4)] border-t border-[var(--border)]">
      <div className="section-container max-w-[680px]">
        <p>
          <strong className="text-[var(--t2)]">Omnipresent</strong> · Built for
          Plumbing Companies
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Omnipresent</p>
      </div>
    </footer>
  )
}
