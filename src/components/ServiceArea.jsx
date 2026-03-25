import { useFadeIn } from '../hooks/useFadeIn'

const cities = [
  'Boca Raton',
  'Delray Beach',
  'Boynton Beach',
  'Deerfield Beach',
  'Pompano Beach',
  'Lake Worth',
  'Wellington',
  'West Palm Beach',
]

export default function ServiceArea() {
  const ref = useFadeIn()

  return (
    <section className="bg-gray-50 py-20 md:py-28 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#2563EB]" />
            <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase">Coverage Area</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 mt-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-6">
                Proudly Serving<br />South Florida.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                We serve Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and the surrounding Palm Beach County communities. If you're nearby, we're already on the way.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-[12px] font-bold text-gray-600 bg-white border border-gray-200 px-3.5 py-2 tracking-wide"
                >
                  {city}
                </span>
              ))}
              <span className="text-[12px] font-bold text-[#2563EB] border border-[#2563EB]/30 bg-blue-50 px-3.5 py-2 tracking-wide">
                + surrounding areas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
