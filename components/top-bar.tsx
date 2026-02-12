export function TopBar() {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-center text-white text-center px-5"
      style={{
        height: 44,
        background: "#B91C1C",
        boxShadow: "0 2px 8px rgba(185,28,28,0.15)",
      }}
    >
      <span
        className="text-[15px] font-semibold uppercase tracking-[0.03em]"
      >
        <strong className="font-extrabold" style={{ animation: "scarcity-pulse 1.5s ease-in-out infinite" }}>
          3 of 7
        </strong>{" "}
        client spots remaining
      </span>
    </div>
  )
}
