import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-gray-200'
          : 'bg-white border-b border-transparent'
      }`}
    >
      {/* Top blue accent line */}
      <div className="h-[3px] bg-[#2563EB]" />

      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo — wordmark only */}
        <a href="#" className="no-underline flex items-center gap-3">
          {/* Icon mark */}
          <div className="w-8 h-8 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 15V9M3 9C3 6 5 4 8 4H9C12 4 14 6 14 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 4V2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 15H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-black text-gray-900 tracking-tight leading-none">BOCA RATON</div>
            <div className="text-[11px] font-semibold text-[#2563EB] tracking-[0.08em] uppercase leading-none mt-0.5">Pros Services</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold text-gray-500 hover:text-gray-900 transition-colors no-underline tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:5614187689"
            className="bg-[#2563EB] text-white text-[13px] font-bold px-5 py-2.5 hover:bg-blue-700 transition-colors no-underline tracking-wide"
          >
            (561) 418-7689
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-3.5 text-[13px] font-semibold text-gray-700 border-b border-gray-100 no-underline"
            >
              {l.label}
              <span className="text-gray-300">›</span>
            </a>
          ))}
          <a
            href="tel:5614187689"
            className="mt-5 block bg-[#2563EB] text-white text-[13px] font-bold px-5 py-3.5 text-center no-underline tracking-wide"
          >
            Call (561) 418-7689
          </a>
        </div>
      )}
    </header>
  )
}
