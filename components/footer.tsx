export function Footer() {
  return (
    <footer className="bg-[#0A0F1C] py-10 md:py-14" role="contentinfo">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">
              Omnipresent
            </p>
            <p className="mt-0.5 text-[13px] text-slate-600">
              San Diego, California
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-5">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Reviews", href: "#social-proof" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-slate-600 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/[0.04] pt-6 text-center">
          <p className="text-[13px] text-slate-700">
            &copy; {new Date().getFullYear()} Omnipresent
          </p>
        </div>
      </div>
    </footer>
  )
}
