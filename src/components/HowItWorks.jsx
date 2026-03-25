import { useFadeIn } from '../hooks/useFadeIn'

const PIPES_IMG = 'https://images.unsplash.com/photo-gdEPyXql_74?w=1400&q=80&fit=crop'

const steps = [
  {
    num: '01',
    title: 'Call or Contact Us',
    body: "Reach us by phone or the form below. Tell us what's going on — we'll ask the right questions to understand the issue.",
  },
  {
    num: '02',
    title: 'Get Your Free Estimate',
    body: 'We provide a clear, honest quote before any work begins. No pressure. No hidden costs. Just a straight answer.',
  },
  {
    num: '03',
    title: 'We Get It Done',
    body: "Our licensed plumber arrives on time, works cleanly, and doesn't leave until the job is finished right. Guaranteed.",
  },
]

function StepItem({ step, index: i }) {
  const ref = useFadeIn()
  return (
    <div
      ref={ref}
      className="fade-section relative"
      style={{ transitionDelay: `${i * 150}ms` }}
    >
      {/* Step number — large background */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-14 h-14 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xl font-black tabular-nums tracking-tight">{step.num}</span>
        </div>
        {/* Connecting line right of the box */}
        {i < 2 && (
          <div className="hidden lg:block flex-1 h-[2px] bg-gray-200 mt-7 -mr-8" />
        )}
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight mb-3">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.body}</p>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useFadeIn()

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background photo with overlay */}
      <img
        src={PIPES_IMG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/92" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#2563EB]" />
              <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase">The Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
              How It Works.
            </h2>
          </div>
          <a
            href="tel:5614187689"
            className="inline-flex items-center gap-2 bg-gray-900 text-white text-[13px] font-bold px-6 py-3 no-underline hover:bg-[#2563EB] transition-colors self-start md:self-auto"
          >
            Skip ahead — call now
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <StepItem key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
