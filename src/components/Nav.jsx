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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-200' : 'bg-white border-b border-transparent'}`}>
      <div className="h-[3px] bg-[#0EA5E9]" />
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="no-underline flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0EA5E9] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 14c2-3 4-5 7-5s5 2 7 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 9V3M6 5l3-3 3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 14c0 0 1.5 2 5 2s5-2 5-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-black text-gray-900 tracking-tight leading-none">OCEAN BLUE</div>
            <div className="text-[10px] font-semibold text-[#0EA5E9] tracking-[0.08em] uppercase leading-none mt-0.5">Pressure Cleaning & Soft Wash</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-semibold text-gray-500 hover:text-gray-900 transition-colors no-underline tracking-wide">
              {l.label}
            </a>
          ))}
          <a href="tel:9549139001" className="bg-[#0EA5E9] text-white text-[13px] font-bold px-5 py-2.5 hover:bg-sky-600 transition-colors no-underline tracking-wide">
            (954) 913-9001
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-3.5 text-[13px] font-semibold text-gray-700 border-b border-gray-100 no-underline">
              {l.label}<span className="text-gray-300">›</span>
            </a>
          ))}
          <a href="tel:9549139001" className="mt-5 block bg-[#0EA5E9] text-white text-[13px] font-bold px-5 py-3.5 text-center no-underline tracking-wide">
            Call (954) 913-9001
          </a>
        </div>
      )}
    </header>
  )
}
