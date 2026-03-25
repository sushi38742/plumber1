export default function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Blue top line */}
      <div className="h-[3px] bg-[#2563EB]" />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16">

          {/* Left — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15V9M3 9C3 6 5 4 8 4H9C12 4 14 6 14 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 4V2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 15H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-black text-white tracking-tight leading-none">BOCA RATON</div>
                <div className="text-[10px] font-semibold text-[#2563EB] tracking-[0.08em] uppercase leading-none mt-0.5">Pros Services</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted local plumbing experts. Licensed, insured, and available around the clock across South Florida.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="text-[10px] font-bold text-gray-600 tracking-[0.12em] uppercase">Licensed</div>
              <div className="text-gray-700">·</div>
              <div className="text-[10px] font-bold text-gray-600 tracking-[0.12em] uppercase">Insured</div>
              <div className="text-gray-700">·</div>
              <div className="text-[10px] font-bold text-gray-600 tracking-[0.12em] uppercase">5.0 ★ Google</div>
            </div>
          </div>

          {/* Center — Quick Links */}
          <div>
            <p className="text-[10px] font-black tracking-[0.15em] uppercase text-gray-500 mb-6">Quick Links</p>
            <ul className="space-y-3.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors no-underline font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <p className="text-[10px] font-black tracking-[0.15em] uppercase text-gray-500 mb-6">Contact</p>
            <a
              href="tel:5614187689"
              className="text-white font-black text-xl hover:text-[#2563EB] transition-colors no-underline block mb-4 tracking-tight"
            >
              (561) 418-7689
            </a>
            <p className="text-gray-500 text-xs leading-relaxed font-medium">
              7165 Beracasa Way Unit D<br />
              Boca Raton, FL 33433
            </p>
            <p className="text-gray-600 text-xs mt-3 font-medium">
              Open 24 Hours · 7 Days a Week
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-[11px]">
            © 2025 Boca Raton Pros Services. All rights reserved.
          </p>
          <p className="text-gray-700 text-[11px]">
            Licensed &amp; Insured · Serving South Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
