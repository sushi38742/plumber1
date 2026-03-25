import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  {
    num: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 20c2-5 5-8 10-8s8 3 10 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 12V6M10 9l4-4 4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 22c0 0 2 2 7 2s7-2 7-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Soft Wash Roof Cleaning',
    desc: 'Low-pressure soft wash safely removes algae, mold, and staining from your roof without risking damage. Plant-safe solutions and before & after photos on every job.',
  },
  {
    num: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="20" height="12" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M8 10V7a6 6 0 0112 0v3" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M11 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Driveway & Patio Pressure Washing',
    desc: 'High-pressure washing blasts away oil stains, dirt, and grime from concrete and pavers. We restore your surfaces to like-new condition — fast and affordable.',
  },
  {
    num: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M4 10h20M10 4v20M18 4v20M4 18h20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Pool Screen Cleaning',
    desc: 'Pool enclosure screens collect algae and debris that block light. We clean the full frame and screen mesh, restoring clarity without any replacements needed.',
  },
  {
    num: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="8" width="18" height="14" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M10 8V6a4 4 0 018 0v2" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M5 14h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'House Exterior Washing',
    desc: 'We soft wash your entire home exterior, removing mold, mildew, and buildup from stucco, siding, and painted surfaces. No streaking, no damage — just a clean finish.',
  },
  {
    num: '05',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 22h20M4 18h20M6 18V10l8-6 8 6v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 18v-5h6v5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Driveways & Walkways',
    desc: 'From the street to your front door, we pressure wash every walkway, path, and driveway. We remove staining and buildup so your property makes the best first impression.',
  },
  {
    num: '06',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="1" stroke="white" strokeWidth="2.5"/>
        <path d="M3 12h22M9 6v16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 17h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Commercial Properties',
    desc: "We handle storefronts, parking lots, warehouses, and commercial exteriors of any size. Keep your business looking professional and well-maintained year-round.",
  },
]

function ServiceRow({ service, index }) {
  const ref = useFadeIn()
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="fade-section border-b border-gray-200 last:border-0 py-8 md:py-12">
      <div className={`flex flex-col sm:flex-row gap-5 sm:gap-8 ${isEven ? '' : 'sm:flex-row-reverse'}`}>
        {/* Icon */}
        <div className="flex items-center gap-3 sm:block sm:w-20 flex-shrink-0">
          <span className="text-[10px] font-black tracking-widest text-gray-200">{service.num}</span>
          <div className="w-14 h-14 bg-[#0EA5E9] flex items-center justify-center flex-shrink-0">
            {service.icon}
          </div>
        </div>
        {/* Text */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight tracking-tight mb-3">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{service.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useFadeIn()
  return (
    <section id="services" className="bg-[#F0F9FF] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div ref={titleRef} className="fade-section mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#0EA5E9] text-[10px] font-bold tracking-widest uppercase">Our Services</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">What We Clean.</h2>
            <a href="tel:9549139001" className="text-[#0EA5E9] text-sm font-bold no-underline hover:text-sky-700 self-start sm:self-auto whitespace-nowrap">
              Need service now? Call us →
            </a>
          </div>
        </div>
        <div>
          {services.map((s, i) => <ServiceRow key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
