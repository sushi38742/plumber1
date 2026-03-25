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
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-section">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-3">Coverage Area</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Proudly Serving<br />South Florida.
          </h2>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mb-12">
            We serve Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and the surrounding Palm Beach County communities. If you're nearby, we're already on the way.
          </p>

          {/* City pills */}
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="text-sm font-semibold text-gray-700 bg-white border border-gray-200 px-4 py-2"
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
