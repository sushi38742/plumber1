import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  {
    num: '01',
    title: 'Call or Contact Us',
    body: 'Reach us by phone or the contact form below. Tell us what\'s going on — we\'ll ask the right questions to understand the problem.',
  },
  {
    num: '02',
    title: 'Get Your Free Estimate',
    body: 'We provide a clear, honest quote before any work begins. No pressure. No hidden costs. Just a straight answer.',
  },
  {
    num: '03',
    title: 'We Get It Done',
    body: 'Our licensed plumber arrives on time, works cleanly, and doesn\'t leave until the job is finished right. Guaranteed.',
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
      <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#2563EB] bg-white mb-8">
        <span className="text-3xl font-black text-[#2563EB] tabular-nums">{step.num}</span>
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">{step.title}</h3>
      <p className="text-gray-500 text-base leading-relaxed max-w-sm">{step.body}</p>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useFadeIn()

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section mb-16">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            How It Works.
          </h2>
        </div>

        {/* Steps — large numbered timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-[2px] bg-gray-200" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <StepItem key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
