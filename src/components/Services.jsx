import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  {
    icon: '💧',
    title: 'Leak Detection & Repair',
    desc: 'We locate hidden leaks fast using advanced detection equipment. Once found, we fix the problem right — no guessing, no unnecessary damage to your home.',
  },
  {
    icon: '🚿',
    title: 'Drain Cleaning',
    desc: 'Slow or fully blocked drains cleared thoroughly. We inspect the full line, remove the blockage at the source, and test the flow before we leave.',
  },
  {
    icon: '🔥',
    title: 'Water Heater Installation & Repair',
    desc: 'Traditional and tankless water heater service from certified techs. Whether you need a repair or a full replacement, we handle it same day.',
  },
  {
    icon: '🔧',
    title: 'Pipe Replacement',
    desc: 'Old, corroded, or burst pipes replaced with durable materials and minimal disruption. We handle everything from single lines to full repiping.',
  },
  {
    icon: '🏠',
    title: 'Sewer Line Services',
    desc: 'Camera inspections, root removal, and full sewer line replacements. We identify the problem before recommending any repair — honest and thorough.',
  },
  {
    icon: '🚨',
    title: 'Emergency Plumbing',
    desc: 'Plumbing disasters don\'t wait for business hours — neither do we. Available 24/7 with rapid response for floods, burst pipes, and water damage.',
  },
]

function ServiceRow({ service, index }) {
  const ref = useFadeIn()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`fade-section flex flex-col md:flex-row items-start md:items-center gap-8 py-12 border-b border-gray-200 last:border-0 ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}
    >
      {/* Icon side */}
      <div className="flex-shrink-0 w-full md:w-1/3 flex md:justify-center">
        <div className="flex items-center gap-5">
          <span className="text-6xl leading-none">{service.icon}</span>
          <div className="md:hidden">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className="flex-1">
        <h3 className="hidden md:block text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
          {service.title}
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">{service.desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const titleRef = useFadeIn()

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={titleRef} className="fade-section mb-4">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What We Fix.
          </h2>
        </div>

        <div className="mt-12">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
