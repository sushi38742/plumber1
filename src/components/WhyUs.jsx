import { useFadeIn } from '../hooks/useFadeIn'

const reasons = [
  { stat: '4.9', unit: '★', title: 'Google Rating', body: '29 verified reviews from real South Florida homeowners. We earn trust one driveway at a time.' },
  { stat: '📸', unit: '', title: 'Before & After Docs', body: "Photo documentation on every single job. You'll see exactly what we did — proof of results, not promises." },
  { stat: 'ES', unit: '/EN', title: 'Bilingual Service', body: 'We serve in both English and Spanish. No language barrier — just clear, friendly service.' },
  { stat: '0', unit: 'dmg', title: 'Plant-Safe Process', body: 'Our soft wash solutions are safe for your lawn and landscaping. Zero plant damage — guaranteed.' },
]

function ReasonItem({ reason: r, index: i }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-section p-6 sm:p-8 border border-gray-100 bg-gray-50" style={{ transitionDelay: `${i * 100}ms` }}>
      <div className="w-8 h-[3px] bg-[#0EA5E9] mb-5" />
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-4xl sm:text-5xl font-black text-gray-900 leading-none tabular-nums tracking-tighter">{r.stat}</span>
        <span className="text-lg font-black text-[#0EA5E9] leading-none">{r.unit}</span>
      </div>
      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{r.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useFadeIn()
  return (
    <section id="why-us" className="bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div ref={titleRef} className="fade-section mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#0EA5E9] text-[10px] font-bold tracking-widest uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Why Coral Springs<br className="hidden sm:block" /> Chooses Ocean Blue.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {reasons.map((r, i) => <ReasonItem key={r.title} reason={r} index={i} />)}
        </div>
      </div>
    </section>
  )
}
