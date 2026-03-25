export default function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#0C1A2E] text-white">
      <div className="h-[3px] bg-[#0EA5E9]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-[#0EA5E9] flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14c2-3 4-5 7-5s5 2 7 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 9V3M6 5l3-3 3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-black text-white tracking-tight leading-none">OCEAN BLUE</div>
                <div className="text-[10px] font-semibold text-[#0EA5E9] tracking-wider uppercase leading-none mt-0.5">Pressure Cleaning & Soft Wash, LLC</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Coral Springs' trusted cleaning professionals. Licensed, insured, and bilingual.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors no-underline font-medium">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-black tracking-widest uppercase text-gray-500 mb-5">Contact</p>
            <a href="tel:9549139001" className="text-white font-black text-xl hover:text-[#0EA5E9] transition-colors no-underline block mb-3 tracking-tight">(954) 913-9001</a>
            <p className="text-gray-500 text-xs leading-relaxed">10546 Wiles Rd<br />Coral Springs, FL 33076</p>
            <p className="text-gray-600 text-xs mt-2">Mon–Sat 8AM–6PM · Emergency available</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-[11px]">© 2025 Ocean Blue Pressure Cleaning & Soft Wash, LLC. All rights reserved.</p>
          <p className="text-gray-700 text-[11px]">Licensed & Insured · Serving South Florida</p>
        </div>
      </div>
    </footer>
  )
}
