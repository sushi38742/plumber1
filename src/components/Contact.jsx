import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const services = ['Soft Wash Roof Cleaning', 'Driveway & Patio Pressure Washing', 'Pool Screen Cleaning', 'House Exterior Washing', 'Driveways & Walkways', 'Commercial Properties']

const inputClass = 'w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0EA5E9] transition-colors placeholder:text-gray-300 font-medium'
const labelClass = 'block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2'

export default function Contact() {
  const titleRef = useFadeIn()
  const infoRef = useFadeIn()
  const formRef = useFadeIn()
  const [form, setForm] = useState({ name: '', phone: '', service: '', propertyType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div ref={titleRef} className="fade-section mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#0EA5E9] text-[10px] font-bold tracking-widest uppercase">Reach Out</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Get a Free Quote.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Info */}
          <div ref={infoRef} className="fade-section">
            <div className="border-l-4 border-[#0EA5E9] pl-5 mb-10">
              <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Call Direct</p>
              <a href="tel:9549139001" className="block text-3xl sm:text-4xl font-black text-gray-900 hover:text-[#0EA5E9] no-underline transition-colors tracking-tight leading-none">
                (954) 913-9001
              </a>
              <p className="text-gray-400 text-xs mt-2 font-medium">Free estimates · English &amp; Spanish</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className={labelClass}>Address</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">10546 Wiles Rd<br />Coral Springs, FL 33076</p>
              </div>
              <div>
                <p className={labelClass}>Hours</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">Mon–Sat: 8AM–6PM<br />Emergency available</p>
              </div>
              <div>
                <p className={labelClass}>Service Area</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">Coral Springs &amp;<br />All of South Florida</p>
              </div>
              <div>
                <p className={labelClass}>Languages</p>
                <p className="text-gray-700 text-sm font-semibold leading-relaxed">English &amp; Spanish<br />Hablamos español</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-10 pt-8 border-t border-gray-100 leading-relaxed">
              For fastest response, call rather than submit a form — we'll give you a quote on the spot.
            </p>
          </div>

          {/* Right — Form */}
          <div ref={formRef} className="fade-section bg-gray-50 p-7 sm:p-10 border border-gray-200">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-10">
                <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-3">Quote Request Received!</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We'll reach out shortly. For faster service, call{' '}
                  <a href="tel:9549139001" className="text-[#0EA5E9] font-bold no-underline hover:underline">(954) 913-9001</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase border-b border-gray-200 pb-4">Free Estimate Request</p>
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="(954) 000-0000" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} required className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Property Type</label>
                  <select name="propertyType" value={form.propertyType} onChange={handleChange} required className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select property type...</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Message <span className="font-normal normal-case tracking-normal">(optional)</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Describe what needs cleaning..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" className="w-full bg-[#0EA5E9] text-white text-[13px] font-black py-4 hover:bg-sky-600 transition-colors tracking-widest uppercase">
                  Get My Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
