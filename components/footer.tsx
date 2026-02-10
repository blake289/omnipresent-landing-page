export function Footer() {
  return (
    <footer className="py-9 text-center text-[13px] text-[var(--t4)] border-t border-[var(--border-l)]">
      <div className="max-w-[680px] mx-auto px-6">
        <p>
          <strong className="text-[var(--t2)]">Omnipresent</strong> · San Diego,
          California
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Omnipresent</p>
      </div>
    </footer>
  )
}
