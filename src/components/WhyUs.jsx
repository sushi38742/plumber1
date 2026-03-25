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
    body: 'We answer when others don\'t. Real people pick up the phone — day, night, weekends, holidays.',
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
      className="fade-section px-0 lg:px-8 first:pl-0 last:pr-0 py-10 sm:py-0"
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-6xl md:text-7xl font-black text-[#2563EB] leading-none tabular-nums">
          {r.stat}
        </span>
        <span className="text-3xl font-black text-gray-300 leading-none">{r.unit}</span>
      </div>
      <h3 className="text-lg font-extrabold text-gray-900 mb-3 tracking-tight">{r.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useFadeIn()

  return (
    <section id="why-us" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section mb-16">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight max-w-xl">
            Why Boca Raton<br />Chooses Us.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {reasons.map((r, i) => (
            <ReasonItem key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
