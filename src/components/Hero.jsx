export default function Hero() {
  return (
    <section className="pt-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Label */}
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-6">
            South Florida's Premier Plumbing Service
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Boca Raton's<br />
            <span className="text-[#2563EB]">Trusted Plumbers</span><br />
            — Available 24/7.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-500 font-normal leading-relaxed max-w-2xl mb-10">
            Licensed, insured, and ready when you need us most. Serving Boca Raton and all of South Florida.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="tel:5614187689"
              className="inline-flex items-center justify-center bg-[#2563EB] text-white text-base font-bold px-8 py-4 rounded hover:bg-blue-700 transition-colors no-underline"
            >
              📞 Call (561) 418-7689
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 text-base font-bold px-8 py-4 rounded hover:bg-gray-900 hover:text-white transition-all no-underline"
            >
              Get a Free Estimate
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <div className="text-sm font-bold text-gray-900">5.0 Google Rating</div>
                <div className="text-xs text-gray-400">48 verified reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕐</span>
              <div>
                <div className="text-sm font-bold text-gray-900">24/7 Emergency Service</div>
                <div className="text-xs text-gray-400">Always available</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <div className="text-sm font-bold text-gray-900">Licensed &amp; Insured</div>
                <div className="text-xs text-gray-400">Certified technicians</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent stripe */}
      <div className="h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-transparent" />
    </section>
  )
}
