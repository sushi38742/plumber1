import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  { num: '01', title: 'Call or Request a Quote', body: "Reach us by phone or the form below. Tell us your property type and what needs cleaning — we'll give you a straight, honest price." },
  { num: '02', title: 'We Come to You', body: 'Our team arrives on schedule, sets up equipment, and gets straight to work. No waiting around, no surprises.' },
  { num: '03', title: 'Before & After Photos', body: 'We document every job with before and after photos so you have proof of the transformation — shared directly with you.' },
  { num: '04', title: 'Spotless or We Come Back', body: "If you're not completely satisfied, we return and make it right at no charge. Your satisfaction is the only standard that matters." },
]

function StepItem({ step, index: i }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-section" style={{ transitionDelay: `${i * 150}ms` }}>
      <div className="w-14 h-14 bg-[#0EA5E9] flex items-center justify-center mb-6 flex-shrink-0">
        <span className="text-white text-lg font-black tabular-nums">{step.num}</span>
      </div>
      <h3 className="text-lg font-black text-gray-900 leading-tight tracking-tight mb-3">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useFadeIn()
  return (
    <section className="bg-[#F0F9FF] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="fade-section flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
              <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">The Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">How It Works.</h2>
          </div>
          <a href="tel:9549139001" className="inline-flex items-center bg-gray-900 text-white text-[13px] font-bold px-6 py-3 no-underline hover:bg-[#0EA5E9] transition-colors self-start sm:self-auto whitespace-nowrap">
            Skip ahead — call now
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => <StepItem key={step.num} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}
