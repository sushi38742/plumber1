import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  'Leak Detection & Repair',
  'Drain Cleaning',
  'Water Heater Installation & Repair',
  'Pipe Replacement',
  'Sewer Line Services',
  'Emergency Plumbing',
]

export default function Contact() {
  const titleRef = useFadeIn()
  const formRef = useFadeIn()
  const infoRef = useFadeIn()

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section mb-14">
          <p className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-3">Reach Out</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Get In Touch.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div ref={infoRef} className="fade-section">
            <a
              href="tel:5614187689"
              className="block text-4xl md:text-5xl font-black text-[#2563EB] hover:text-blue-700 no-underline mb-2 transition-colors"
            >
              (561) 418-7689
            </a>
            <p className="text-gray-400 text-sm mb-10">Tap to call — we answer 24/7</p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Address</p>
                <p className="text-gray-700 font-medium">
                  7165 Beracasa Way Unit D<br />
                  Boca Raton, FL 33433
                </p>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Hours</p>
                <p className="text-gray-700 font-medium">
                  Open 24 Hours<br />
                  7 Days a Week
                </p>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Service Area</p>
                <p className="text-gray-700 font-medium">
                  Boca Raton &amp; All of South Florida
                </p>
              </div>
            </div>

            {/* Divider note */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 leading-relaxed">
                For emergencies, always call rather than submit a form — we'll pick up immediately.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={formRef} className="fade-section">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-8">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Message Received!</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Thanks for reaching out. We'll follow up within a few hours. For faster service, give us a call at{' '}
                  <a href="tel:5614187689" className="text-[#2563EB] font-semibold no-underline hover:underline">
                    (561) 418-7689
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#2563EB] transition-colors bg-gray-50 placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(561) 000-0000"
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#2563EB] transition-colors bg-gray-50 placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#2563EB] transition-colors bg-gray-50 appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your plumbing issue..."
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#2563EB] transition-colors bg-gray-50 resize-none placeholder:text-gray-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white text-sm font-bold py-4 hover:bg-blue-700 transition-colors tracking-wide uppercase"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
