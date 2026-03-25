import { useFadeIn } from '../hooks/useFadeIn'

const reviews = [
  {
    name: 'Gloria Erika',
    initials: 'GE',
    text: 'The kitchen faucet handle had become loose and was difficult to turn. Their experts came and replaced the handle with a new one, tightening it securely. They checked the water flow and made sure there were no hidden leaks. The faucet now works smoothly and feels solid.',
  },
  {
    name: 'Dominic Mitchell',
    initials: 'DM',
    text: 'The sink drain had been slowing down for weeks and finally stopped draining properly. The plumber checked the full line instead of just clearing the surface blockage. Everything was tested after completion. The sink has been working smoothly since then.',
  },
  {
    name: 'Andrew Cooper',
    initials: 'AC',
    text: 'The bathtub faucet wouldn\'t shut off tightly. Their plumber replaced worn washers and tested it. It now shuts off completely. Very satisfied.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-lg" aria-label="5 stars">
      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
    </div>
  )
}

function ReviewCard({ review: r, index: i }) {
  const ref = useFadeIn()
  return (
    <div
      ref={ref}
      className="fade-section w-80 lg:w-auto flex-shrink-0 lg:flex-shrink"
      style={{ transitionDelay: `${i * 120}ms` }}
    >
      <div className="text-8xl font-black text-[#2563EB] leading-none mb-4 opacity-15 select-none" aria-hidden="true">
        "
      </div>
      <Stars />
      <blockquote className="mt-5 mb-6">
        <p className="text-gray-700 text-base leading-relaxed italic">"{r.text}"</p>
      </blockquote>
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">{r.initials}</span>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900">{r.name}</div>
          <div className="text-xs text-gray-400">Google Review</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const titleRef = useFadeIn()

  return (
    <section id="reviews" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section mb-16">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-3">Customer Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What Our<br />Customers Say.
          </h2>
        </div>

        {/* Horizontal scrolling testimonial strip */}
        <div className="overflow-x-auto -mx-6 px-6 pb-4">
          <div className="flex gap-8 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>
        </div>

        {/* Google CTA */}
        <div className="mt-12 flex items-center gap-3">
          <a
            href="https://www.google.com/search?q=Boca+Raton+Pros+Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-sm hover:underline no-underline"
          >
            See all 48 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
