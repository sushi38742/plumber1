import { useFadeIn } from '../hooks/useFadeIn'

const cities = ['Coral Springs', 'Boca Raton', 'Pompano Beach', 'Coconut Creek', 'Margate', 'Tamarac', 'Parkland', 'Deerfield Beach', 'Lighthouse Point', 'Weston']

export default function ServiceArea() {
  const ref = useFadeIn()
  return (
    <section className="bg-[#F0F9FF] py-12 md:py-20 border-t border-sky-100">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div ref={ref} className="fade-section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">Coverage Area</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-5">Proudly Serving<br />South Florida.</h2>
              <p className="text-gray-500 text-base leading-relaxed">
                We serve Coral Springs, Boca Raton, Pompano Beach, Coconut Creek, and surrounding Broward and Palm Beach County communities. If you're nearby, we're already on the way.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {cities.map((city) => (
                <span key={city} className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-2 tracking-wide">{city}</span>
              ))}
              <span className="text-xs font-bold text-[#0EA5E9] border border-[#0EA5E9]/30 bg-sky-50 px-3 py-2 tracking-wide">+ surrounding areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
