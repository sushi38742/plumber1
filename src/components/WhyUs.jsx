import { useFadeIn } from '../hooks/useFadeIn'

const reasons = [
  { stat: '4.9', unit: '★', title: 'Google Rating', body: '29 verified customer reviews — every single one from a real South Florida homeowner. We earn trust one driveway at a time.' },
  { stat: '📸', unit: '', title: 'Before & After Docs', body: "Photo documentation on every single job. You'll see exactly what we did, side by side — proof of results, not just promises." },
  { stat: 'ES', unit: '/EN', title: 'Bilingual Service', body: 'We serve our customers in both English and Spanish. No language barrier, no miscommunication — just clear, friendly service.' },
  { stat: '0', unit: 'dmg', title: 'Plant-Safe Process', body: 'Our soft wash solutions are safe for your landscaping, lawn, and garden. Zero plant damage — guaranteed on every job.' },
]

function ReasonItem({ reason: r, index: i }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-section py-10 border-b border-gray-100 last:border-0 lg:border-b-0 lg:py-0 lg:px-8 lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0" style={{ transitionDelay: `${i * 100}ms` }}>
      <div className="w-8 h-[3px] bg-[#0EA5E9] mb-5" />
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl sm:text-6xl font-black text-gray-900 leading-none tabular-nums tracking-tighter">{r.stat}</span>
        <span className="text-xl font-black text-[#0EA5E9] leading-none">{r.unit}</span>
      </div>
      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{r.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useFadeIn()
  return (
    <section id="why-us" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="fade-section flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
              <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Why Coral Springs<br />Chooses Ocean Blue.</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-[220px] leading-relaxed hidden sm:block">Every number here reflects a real commitment.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => <ReasonItem key={r.title} reason={r} index={i} />)}
        </div>
      </div>
    </section>
  )
}
