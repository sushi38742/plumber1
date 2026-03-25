import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  { num: '01', title: 'Call or Request a Quote', body: "Reach us by phone or the form below. Tell us your property type — we'll give you a straight, honest price." },
  { num: '02', title: 'We Come to You', body: 'Our team arrives on schedule and gets straight to work. No waiting around, no surprises.' },
  { num: '03', title: 'Before & After Photos', body: 'We document every job with before and after photos so you have proof of the transformation.' },
  { num: '04', title: 'Spotless or We Come Back', body: "If you're not completely satisfied, we return and make it right at no charge. Guaranteed." },
]

function StepItem({ step, index: i }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-section flex sm:block gap-4" style={{ transitionDelay: `${i * 150}ms` }}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0EA5E9] flex items-center justify-center flex-shrink-0 sm:mb-6">
        <span className="text-white text-base sm:text-lg font-black tabular-nums">{step.num}</span>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight tracking-tight mb-2 sm:mt-0 mt-1">{step.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useFadeIn()
  return (
    <section className="bg-[#F0F9FF] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div ref={titleRef} className="fade-section mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#0EA5E9] text-[10px] font-bold tracking-widest uppercase">The Process</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">How It Works.</h2>
            <a href="tel:9549139001" className="inline-flex items-center bg-gray-900 text-white text-[13px] font-bold px-5 py-3 no-underline hover:bg-[#0EA5E9] transition-colors self-start sm:self-auto whitespace-nowrap">
              Call now — it's free
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => <StepItem key={step.num} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}
