export default function Hero() {
  return (
    <section className="pt-[71px] bg-white overflow-hidden min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row flex-1">

        {/* LEFT — main content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[620px] mx-auto lg:mx-0 px-6 lg:pl-[max(2rem,calc((100vw-1152px)/2+1.5rem))] py-20 lg:py-0 w-full">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#2563EB]" />
              <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase">
                South Florida's Premier Plumbing Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-black text-gray-900 leading-[1.03] tracking-[-0.03em] mb-7">
              Boca Raton's<br />
              <em className="not-italic text-[#2563EB]">Trusted</em><br />
              Plumbers —<br />
              Available 24/7.
            </h1>

            {/* Sub */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-10 font-normal">
              Licensed, insured, and ready when you need us most. Serving Boca Raton and all of South Florida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <a
                href="tel:5614187689"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] text-white text-sm font-bold px-8 py-4 hover:bg-blue-700 transition-colors no-underline"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 1h4l1.5 4L5 6.5c1 2 2.5 3.5 4.5 4.5L11 8.5l4 1.5v4A1 1 0 0114 15C6.8 15 0 8.2 0 1a1 1 0 011-1z" fill="currentColor" />
                </svg>
                Call (561) 418-7689
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 text-sm font-bold px-8 py-4 hover:bg-gray-900 hover:text-white transition-all no-underline"
              >
                Get a Free Estimate
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-5 gap-x-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1">Google Rating</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 text-base leading-none">★★★★★</span>
                  <span className="text-gray-900 font-bold text-sm">5.0</span>
                  <span className="text-gray-400 text-xs">(48 reviews)</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1">Availability</div>
                <div className="text-gray-900 font-bold text-sm">24/7 Emergency Service</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              <div>
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1">Credentials</div>
                <div className="text-gray-900 font-bold text-sm">Licensed &amp; Insured</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — dark panel */}
        <div className="hidden lg:flex w-[420px] xl:w-[480px] flex-shrink-0 bg-[#0F172A] flex-col justify-between p-14 relative overflow-hidden">
          {/* Background texture lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)',
          }} />

          {/* Blue accent corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#2563EB]" />

          <div className="relative z-10">
            <p className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase mb-10">
              Why Homeowners Trust Us
            </p>

            <div className="space-y-10">
              {[
                { num: '48', label: 'Verified Google Reviews', sub: '5.0 star average' },
                { num: '24/7', label: 'Emergency Availability', sub: 'Real people answer the phone' },
                { num: '100%', label: 'Upfront Pricing', sub: 'No hidden fees, ever' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5">
                  <div className="text-3xl font-black text-[#2563EB] leading-none tabular-nums w-20 flex-shrink-0 pt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-snug">{item.label}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="relative z-10 mt-12 pt-10 border-t border-white/10">
            <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest font-semibold">Call us directly</p>
            <a
              href="tel:5614187689"
              className="text-white text-2xl font-black no-underline hover:text-[#2563EB] transition-colors tracking-tight"
            >
              (561) 418-7689
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
