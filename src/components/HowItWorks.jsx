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
    <div ref={ref} className="fade-section relative" style={{ transitionDelay: `${i * 150}ms` }}>
      <div className="flex items-start gap-6 mb-8">
        <div className="w-14 h-14 bg-[#0EA5E9] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xl font-black tabular-nums tracking-tight">{step.num}</span>
        </div>
        {i < 3 && <div className="hidden lg:block flex-1 h-[2px] bg-gray-200 mt-7 -mr-8" />}
      </div>
      <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight mb-3">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.body}</p>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useFadeIn()
  return (
    <section className="bg-[#F0F9FF] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#0EA5E9]" />
              <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">The Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">How It Works.</h2>
          </div>
          <a href="tel:9549139001" className="inline-flex items-center gap-2 bg-gray-900 text-white text-[13px] font-bold px-6 py-3 no-underline hover:bg-[#0EA5E9] transition-colors self-start md:self-auto">
            Skip ahead — call now
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => <StepItem key={step.num} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}
