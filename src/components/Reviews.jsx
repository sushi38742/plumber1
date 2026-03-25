import { useFadeIn } from '../hooks/useFadeIn'

const reviews = [
  {
    name: 'Jason Schena',
    initials: 'JS',
    text: "Ryan gave me a great price for my softwash and insured no plants would be damaged in the process, and he held to that promise. Very nice guy, even took before and after footage to insure it was spotless.",
  },
  {
    name: 'Aidar Vafin',
    initials: 'AV',
    text: "Ryan and his team made my day! They came early in the morning and worked up to the result even though the sunset had passed. They cleaned the roof, swimming pool screen, and driveway. I highly recommend.",
  },
  {
    name: 'Michael Kleinert',
    initials: 'MK',
    text: "Ryan and his team were the best! They were professional, thorough, and affordable. Couldn't have been more pleased with how clean my roof, driveway, and patio looked. Excellent service!",
  },
]

function ReviewCard({ review: r, index: i }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-section flex flex-col" style={{ transitionDelay: `${i * 120}ms` }}>
      <div className="w-full h-[2px] bg-gray-100 mb-7 relative flex-shrink-0">
        <div className="absolute left-0 top-0 h-full w-12 bg-[#0EA5E9]" />
      </div>
      <div className="flex gap-0.5 text-yellow-400 text-sm mb-5">
        {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
      </div>
      <blockquote className="flex-1 mb-7">
        <p className="text-gray-600 text-[15px] leading-[1.75] font-medium">"{r.text}"</p>
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gray-900 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-black tracking-wide">{r.initials}</span>
        </div>
        <div>
          <div className="text-[13px] font-black text-gray-900">{r.name}</div>
          <div className="text-[11px] text-gray-400 font-medium">Google Review</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const titleRef = useFadeIn()
  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="fade-section flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
              <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">What Our<br />Customers Say.</h2>
          </div>
          <a
            href="https://www.google.com/search?q=Ocean+Blue+Pressure+Cleaning+Soft+Wash+Coral+Springs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0EA5E9] text-sm font-bold no-underline hover:text-sky-700 transition-colors self-start sm:self-auto whitespace-nowrap"
          >
            See all 29 reviews on Google →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {reviews.map((r, i) => <ReviewCard key={r.name} review={r} index={i} />)}
        </div>
      </div>
    </section>
  )
}
