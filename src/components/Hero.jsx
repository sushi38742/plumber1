const HERO_IMG = 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=1200'

export default function Hero() {
  return (
    <section className="pt-[71px] bg-white overflow-hidden">

      {/* Mobile hero image banner */}
      <div className="lg:hidden w-full h-52 relative">
        <img src={HERO_IMG} alt="Pressure washing service" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#0C1A2E]/40" />
        <div className="absolute inset-0 flex items-end p-5">
          <div className="flex gap-4">
            <span className="text-white text-xs font-bold bg-[#0EA5E9] px-3 py-1.5">4.9★ Google</span>
            <span className="text-white text-xs font-bold bg-black/40 px-3 py-1.5">Licensed & Insured</span>
            <span className="text-white text-xs font-bold bg-black/40 px-3 py-1.5">EN / ES</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-71px)]">

        {/* LEFT — content */}
        <div className="flex items-center px-5 sm:px-8 py-10 lg:py-20">
          <div className="w-full max-w-xl mx-auto lg:ml-auto lg:mr-10 xl:mr-20">

            <div className="flex items-center gap-2 mb-5 lg:mb-7">
              <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
              <span className="text-[#0EA5E9] text-[10px] font-bold tracking-widest uppercase">
                Coral Springs' #1 Rated Cleaning Service
              </span>
            </div>

            <h1 className="text-[2rem] sm:text-4xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.08] tracking-tight mb-5">
              Coral Springs' <span className="text-[#0EA5E9]">Top-Rated</span> Pressure Washing &amp; Soft Wash.
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              Professional, affordable, and detail-oriented. Serving Coral Springs and all of South Florida.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:9549139001"
                className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] text-white text-sm font-bold px-6 py-4 hover:bg-sky-600 transition-colors no-underline"
              >
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2 1h4l1.5 4L5 6.5c1 2 2.5 3.5 4.5 4.5L11 8.5l4 1.5v4A1 1 0 0114 15C6.8 15 0 8.2 0 1a1 1 0 011-1z" fill="currentColor"/>
                </svg>
                Call (954) 913-9001
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 text-sm font-bold px-6 py-4 hover:bg-gray-900 hover:text-white transition-all no-underline"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 pt-6 border-t border-gray-100">
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Google Rating</div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-gray-900 font-bold text-sm">4.9</span>
                  <span className="text-gray-400 text-xs">(29)</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Credentials</div>
                <div className="text-gray-900 font-bold text-sm">Licensed &amp; Insured</div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Languages</div>
                <div className="text-gray-900 font-bold text-sm">English &amp; Spanish</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — photo panel (desktop only) */}
        <div className="hidden lg:block relative">
          <img src={HERO_IMG} alt="Professional pressure washing service" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2E] via-[#0C1A2E]/55 to-transparent" />
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#0EA5E9]" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 xl:p-14">
            <p className="text-[#0EA5E9] text-[11px] font-bold tracking-widest uppercase mb-8">Why Homeowners Choose Us</p>
            <div className="space-y-7 mb-10">
              {[
                { num: '4.9★', label: 'Google Rating', sub: '29 verified reviews' },
                { num: '100%', label: 'Plant-Safe Process', sub: 'Zero damage guaranteed' },
                { num: '📸', label: 'Before & After Photos', sub: 'Proof on every job' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="text-2xl font-black text-[#0EA5E9] leading-none w-14 flex-shrink-0">{item.num}</div>
                  <div>
                    <div className="text-white font-bold text-sm">{item.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Free estimates</p>
              <a href="tel:9549139001" className="text-white text-2xl font-black no-underline hover:text-[#0EA5E9] transition-colors tracking-tight">
                (954) 913-9001
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
