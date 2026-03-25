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

const inputClass =
  'w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#2563EB] transition-colors placeholder:text-gray-300 font-medium'

const labelClass = 'block text-[10px] font-black tracking-[0.15em] uppercase text-gray-400 mb-2'

export default function Contact() {
  const titleRef = useFadeIn()
  const formRef = useFadeIn()
  const infoRef = useFadeIn()

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="fade-section mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#2563EB]" />
            <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.18em] uppercase">Reach Out</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">
            Get In Touch.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">

          {/* Left — Info */}
          <div ref={infoRef} className="fade-section">
            {/* Phone — large, primary */}
            <div className="border-l-[3px] border-[#2563EB] pl-5 mb-10">
              <p className="text-[10px] font-black tracking-[0.15em] uppercase text-gray-400 mb-2">Call Direct</p>
              <a
                href="tel:5614187689"
                className="block text-[2.2rem] font-black text-gray-900 hover:text-[#2563EB] no-underline transition-colors tracking-tight leading-none"
              >
                (561) 418-7689
              </a>
              <p className="text-gray-400 text-xs mt-2 font-medium">We answer 24 hours, 7 days a week</p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className={labelClass}>Address</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                  7165 Beracasa Way Unit D<br />
                  Boca Raton, FL 33433
                </p>
              </div>
              <div>
                <p className={labelClass}>Hours</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                  Open 24 Hours<br />
                  7 Days a Week
                </p>
              </div>
              <div>
                <p className={labelClass}>Service Area</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                  Boca Raton &amp; All of South Florida
                </p>
              </div>
              <div>
                <p className={labelClass}>Response Time</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                  Same-day service<br />
                  for most requests
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-10 pt-8 border-t border-gray-200 leading-relaxed">
              For emergencies, call rather than submit a form — we'll pick up immediately and dispatch within the hour.
            </p>
          </div>

          {/* Right — Form */}
          <div ref={formRef} className="fade-section bg-white p-8 md:p-10 border border-gray-200">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-10">
                <div className="w-12 h-12 bg-green-50 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-3">Message Received!</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We'll follow up within a few hours. For faster service, call us directly at{' '}
                  <a href="tel:5614187689" className="text-[#2563EB] font-bold no-underline hover:underline">
                    (561) 418-7689
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase border-b border-gray-100 pb-4">
                  Free Estimate Request
                </p>

                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(561) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Message <span className="font-normal normal-case tracking-normal">(optional)</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Briefly describe the issue..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white text-[13px] font-black py-4 hover:bg-blue-700 transition-colors tracking-[0.08em] uppercase mt-2"
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
