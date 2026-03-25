export default function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <div className="text-white font-extrabold text-lg mb-2 tracking-tight">
              🔧 Boca Raton Pros Services
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted local plumbing experts. Licensed, insured, and available around the clock.
            </p>
          </div>

          {/* Center */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">Contact</p>
            <a
              href="tel:5614187689"
              className="text-white font-bold text-lg hover:text-blue-400 transition-colors no-underline block mb-3"
            >
              (561) 418-7689
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              7165 Beracasa Way Unit D<br />
              Boca Raton, FL 33433
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Open 24 Hours · 7 Days a Week
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © 2025 Boca Raton Pros Services. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Licensed &amp; Insured · Serving South Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
