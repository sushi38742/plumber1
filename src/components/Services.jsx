import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="2.5" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.5 5.5l3 3M19.5 19.5l3 3M5.5 22.5l3-3M19.5 8.5l3-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Leak Detection & Repair',
    desc: 'We locate hidden leaks fast using advanced detection equipment. Once found, we fix the problem right — no guessing, no unnecessary damage to your home.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4C14 4 8 10 8 16a6 6 0 0012 0c0-6-6-12-6-12z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M11 20l6-8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Drain Cleaning',
    desc: 'Slow or fully blocked drains cleared thoroughly. We inspect the full line, remove the blockage at the source, and test the flow before we leave.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="12" height="16" rx="2" stroke="white" strokeWidth="2.5" />
        <path d="M11 6V4M17 6V4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 14h6M11 18h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Water Heater Installation & Repair',
    desc: 'Traditional and tankless water heater service from certified techs. Whether you need a repair or a full replacement, we handle it same day.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 14h18M5 9h5M18 9h5M5 19h5M18 19h5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="9" y="6" width="10" height="6" rx="1" stroke="white" strokeWidth="2" />
        <rect x="9" y="16" width="10" height="6" rx="1" stroke="white" strokeWidth="2" />
      </svg>
    ),
    title: 'Pipe Replacement',
    desc: 'Old, corroded, or burst pipes replaced with durable materials and minimal disruption. We handle everything from single lines to full repiping.',
  },
  {
    num: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="white" strokeWidth="2.5" />
        <path d="M14 9v5l3 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sewer Line Services',
    desc: 'Camera inspections, root removal, and full sewer line replacements. We identify the problem before recommending any repair — honest and thorough.',
  },
  {
    num: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4l1.5 6H20l-4.5 3.5 1.5 6L14 16.5 11 19.5l1.5-6L8 10h4.5L14 4z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Emergency Plumbing',
    desc: "Plumbing disasters don't wait for business hours — neither do we. Available 24/7 with rapid response for floods, burst pipes, and water damage.",
  },
]

function ServiceRow({ service, index }) {
  const ref = useFadeIn()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`fade-section grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 border-b border-gray-200 last:border-0 ${
        isEven ? '' : 'md:[direction:rtl]'
      }`}
    >
      {/* Number + Icon panel */}
      <div className={`flex items-center gap-6 py-10 md:py-14 pr-0 md:pr-12 ${isEven ? '' : 'md:[direction:ltr] md:pl-12 md:pr-0'}`}>
        <span className="text-[11px] font-black tracking-[0.15em] text-gray-200 select-none self-start pt-1">
          {service.num}
        </span>
        <div className="flex-1 md:flex md:justify-end">
          <div className="w-16 h-16 bg-[#2563EB] flex items-center justify-center flex-shrink-0">
            {service.icon}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={`py-10 md:py-14 md:[direction:ltr] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <h3 className="text-2xl font-black text-gray-900 leading-tight tracking-tight mb-4">
          {service.title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed max-w-md">
          {service.desc}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useFadeIn()

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#2563EB]" />
              <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
              What We Fix.
            </h2>
          </div>
          <a
            href="tel:5614187689"
            className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-bold no-underline hover:text-blue-800 transition-colors self-start md:self-auto"
          >
            Need service now? Call us →
          </a>
        </div>

        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
