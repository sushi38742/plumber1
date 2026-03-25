const HERO_IMG = 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=1200'

export default function Hero() {
  return (
    <section className="pt-[71px] bg-white overflow-hidden min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row flex-1">

        {/* LEFT — content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[620px] mx-auto lg:mx-0 px-6 lg:pl-[max(2rem,calc((100vw-1152px)/2+1.5rem))] py-20 lg:py-0 w-full">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#0EA5E9]" />
              <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">
                Coral Springs' #1 Rated Cleaning Service
              </span>
            </div>

            <h1 className="text-[clamp(2.4rem,5.2vw,4.2rem)] font-black text-gray-900 leading-[1.03] tracking-[-0.03em] mb-7">
              Coral Springs'<br />
              <em className="not-italic text-[#0EA5E9]">Top-Rated</em><br />
              Pressure Washing<br />
              &amp; Soft Wash.
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-10">
              Professional, affordable, and detail-oriented. Serving Coral Springs and all of South Florida.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <a href="tel:9549139001" className="inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] text-white text-sm font-bold px-8 py-4 hover:bg-sky-600 transition-colors no-underline">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2 1h4l1.5 4L5 6.5c1 2 2.5 3.5 4.5 4.5L11 8.5l4 1.5v4A1 1 0 0114 15C6.8 15 0 8.2 0 1a1 1 0 011-1z" fill="currentColor"/>
                </svg>
                Call (954) 913-9001
              </a>
              <a href="#contact" className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 text-sm font-bold px-8 py-4 hover:bg-gray-900 hover:text-white transition-all no-underline">
                Get a Free Quote
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-5 gap-x-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1">Google Rating</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 text-base leading-none">★★★★★</span>
                  <span className="text-gray-900 font-bold text-sm">4.9</span>
                  <span className="text-gray-400 text-xs">(29 reviews)</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1">Credentials</div>
                <div className="text-gray-900 font-bold text-sm">Licensed &amp; Insured</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1">Languages</div>
                <div className="text-gray-900 font-bold text-sm">English &amp; Spanish</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — photo panel */}
        <div className="hidden lg:block w-[420px] xl:w-[500px] flex-shrink-0 relative overflow-hidden">
          <img src={HERO_IMG} alt="Professional pressure washing service" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A2E] via-[#0C1A2E]/55 to-[#0C1A2E]/10" />
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#0EA5E9] z-10" />

          <div className="absolute inset-0 flex flex-col justify-end p-12 z-10">
            <p className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase mb-8">Why Homeowners Choose Us</p>
            <div className="space-y-7 mb-10">
              {[
                { num: '4.9★', label: 'Google Rating', sub: '29 verified reviews' },
                { num: '100%', label: 'Plant-Safe Process', sub: 'Zero damage guaranteed' },
                { num: '2x', label: 'Before & After Photos', sub: 'Proof on every job' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="text-2xl font-black text-[#0EA5E9] leading-none tabular-nums w-16 flex-shrink-0 pt-0.5">{item.num}</div>
                  <div>
                    <div className="text-white font-bold text-sm leading-snug">{item.label}</div>
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
