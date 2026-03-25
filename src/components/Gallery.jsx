import { useFadeIn } from '../hooks/useFadeIn'

const photos = [
  { src: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pressure washing driveway' },
  { src: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Professional cleaning service' },
  { src: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'House exterior washing' },
  { src: 'https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Clean result after soft wash' },
]

function PhotoTile({ photo, index: i }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className="fade-section aspect-square overflow-hidden bg-gray-100" style={{ transitionDelay: `${i * 100}ms` }}>
      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
    </div>
  )
}

export default function Gallery() {
  const titleRef = useFadeIn()
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="fade-section mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#0EA5E9] text-[11px] font-bold tracking-[0.18em] uppercase">Our Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Before &amp; After.</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">Every job documented. Every result proven.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((p, i) => <PhotoTile key={i} photo={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
