export function Footer() {
  return (
    <footer
      className="text-center"
      style={{
        background: "var(--color-bg-dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "36px 0",
      }}
    >
      <div className="section-container max-w-[680px]">
        <p style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
          <strong style={{ color: "rgba(255,255,255,0.7)" }}>Omnipresent</strong> · Built for
          Plumbing Companies
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
          © {new Date().getFullYear()} Omnipresent
        </p>
      </div>
    </footer>
  )
}
