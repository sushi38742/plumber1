import { useFadeIn } from '../hooks/useFadeIn'

const reasons = [
  {
    stat: '5.0',
    unit: '★',
    title: 'Star Rating',
    body: '48 verified Google reviews from real South Florida homeowners. We earn trust one job at a time.',
  },
  {
    stat: '24',
    unit: '/7',
    title: 'Availability',
    body: "We answer when others don't. Real people pick up the phone — day, night, weekends, holidays.",
  },
  {
    stat: '$0',
    unit: '',
    title: 'Hidden Fees',
    body: 'Upfront estimates before we touch a thing. The price we quote is the price you pay. No surprises.',
  },
  {
    stat: '100',
    unit: '%',
    title: 'Licensed Techs',
    body: 'Every technician is certified, background-checked, and trained to treat your home with respect.',
  },
]

function ReasonItem({ reason: r, index: i }) {
  const ref = useFadeIn()
  return (
    <div
      ref={ref}
      className="fade-section py-12 lg:py-0 lg:px-10 first:pl-0 last:pr-0 border-b lg:border-b-0 lg:border-l border-gray-200 first:border-l-0"
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      {/* Blue top rule */}
      <div className="w-8 h-[3px] bg-[#2563EB] mb-6" />

      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-[4.5rem] md:text-[5rem] font-black text-gray-900 leading-none tabular-nums tracking-tighter">
          {r.stat}
        </span>
        <span className="text-2xl font-black text-[#2563EB] leading-none">{r.unit}</span>
      </div>
      <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.12em] mb-3">{r.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useFadeIn()

  return (
    <section id="why-us" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#2563EB]" />
              <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
              Why Boca Raton<br />Chooses Us.
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Every number below is backed by real customer results — not marketing copy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {reasons.map((r, i) => (
            <ReasonItem key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
