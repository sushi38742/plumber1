import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20c2-5 5-8 10-8s8 3 10 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 12V6M10 9l4-4 4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 22c0 0 2 2 7 2s7-2 7-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Soft Wash Roof Cleaning',
    desc: 'Our low-pressure soft wash method safely removes algae, mold, and staining from your roof without risking damage to shingles or tiles. Plant-safe solutions and before & after photo documentation included on every job.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="20" height="12" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M8 10V7a6 6 0 0112 0v3" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M11 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Driveway & Patio Pressure Washing',
    desc: 'High-pressure washing blasts away years of oil stains, dirt, and grime from concrete and pavers. We restore your driveway and patio to like-new condition — fast, effective, and affordable.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M4 10h20M10 4v20M18 4v20M4 18h20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Pool Screen Cleaning',
    desc: 'Pool enclosure screens collect algae, mold, and debris that block light and look unsightly. We clean the entire frame and screen mesh, restoring clarity and curb appeal without replacing anything.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="8" width="18" height="14" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M10 8V6a4 4 0 018 0v2" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M5 14h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'House Exterior Washing',
    desc: 'We soft wash your entire home exterior, removing mold, mildew, and pollution buildup from stucco, siding, and painted surfaces. No streaking, no damage — just a clean, bright finish.',
  },
  {
    num: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22h20M4 18h20M6 18V10l8-6 8 6v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 18v-5h6v5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Driveways & Walkways',
    desc: 'From the street to your front door, we pressure wash every walkway, path, and driveway surface. We remove organic growth, staining, and buildup so your property makes the best first impression.',
  },
  {
    num: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M3 12h22M9 6v16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 17h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Commercial Properties',
    desc: "We handle storefronts, parking lots, warehouses, and commercial exteriors of any size. Maintain your property's professional appearance and keep your business looking sharp year-round.",
  },
]

function ServiceRow({ service, index }) {
  const ref = useFadeIn()
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="fade-section flex flex-col md:flex-row border-b border-gray-200 last:border-0">
      {/* Icon col — always left on mobile, alternates on desktop */}
      <div className={`flex items-center gap-4 py-8 md:py-12 md:w-48 lg:w-64 flex-shrink-0 ${isEven ? 'md:order-first md:pr-10' : 'md:order-last md:pl-10'}`}>
        <span className="text-[11px] font-black tracking-widest text-gray-200 select-none">{service.num}</span>
        <div className="w-16 h-16 bg-[#0EA5E9] flex items-center justify-center flex-shrink-0">
          {service.icon}
        </div>
      </div>

      {/* Text col */}
      <div className={`flex-1 py-8 md:py-12 ${isEven ? 'md:pl-2' : 'md:pr-2'}`}>
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight tracking-tight mb-3">
          {service.title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed">{service.desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useFadeIn()

  return (
    <section id="services" className="bg-[#F0F9FF] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="fade-section flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
              <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">What We Clean.</h2>
          </div>
          <a href="tel:9549139001" className="text-[#0EA5E9] text-sm font-bold no-underline hover:text-sky-700 transition-colors self-start sm:self-auto whitespace-nowrap">
            Need service now? Call us →
          </a>
        </div>
        <div>
          {services.map((s, i) => <ServiceRow key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
