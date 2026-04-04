import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/xreyjpkd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: '' }))
  }

  const sendToWhatsApp = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    const phoneNumber = '919156087365'
    let message = `*New Inquiry from Website*\n\n`
    message += `*Name:* ${form.name || 'N/A'}\n`
    message += `*Email:* ${form.email || 'N/A'}\n`
    message += `*Phone:* ${form.phone || 'N/A'}\n`
    message += `*Company:* ${form.company || 'N/A'}\n`
    message += `*Subject:* ${form.subject || 'N/A'}\n\n`
    message += `*Message:*\n${form.message || 'N/A'}`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <>
      <SEOMeta
        title="Contact Industrial Exporter India"
        metaTitle="Contact Industrial Exporter India"
        description="Contact our export team for crusher parts, conveyor components and global sourcing."
        keywords="contact industrial exporter India, crusher parts inquiry, conveyor rollers supplier contact"
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/VIBRATING_SCREEN_1.jpeg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Our Export Team</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Reach out for product inquiries, price quotations, technical support, and distributor opportunities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick contacts */}
              {[
                {
                  icon: '📧',
                  h2: 'Send Inquiry',
                  label: 'Email Us',
                  value: 'KrushvelGlobalExim@gmail.com',
                  href: 'mailto:KrushvelGlobalExim@gmail.com',
                  desc: 'For product inquiries and price quotations'
                },
                {
                  icon: '💬',
                  h2: 'Request Quotation',
                  label: 'WhatsApp',
                  value: '+91 91560 87365',
                  href: 'https://wa.me/919156087365',
                  desc: 'Fast response via WhatsApp'
                },
                {
                  icon: '🤝',
                  h2: 'Distributor Opportunities',
                  label: 'LinkedIn',
                  value: 'Krushvel on LinkedIn',
                  href: 'https://www.linkedin.com/company/krushvel',
                  desc: 'For distributor and agent partnerships'
                },
              ].map((contact, i) => (
                <ScrollReveal key={i} delay={i * 0.1} variant="fadeLeft">
                  <div className="glass-card-light p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{contact.icon}</div>
                      <div>
                        <h2 className="font-bold text-slate-800 mb-1">{contact.h2}</h2>
                        <p className="text-slate-500 text-xs mb-2">{contact.desc}</p>
                        <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors text-sm">
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal variant="fadeRight">
                <div className="glass-card-light p-8 rounded-2xl">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="text-5xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Inquiry Sent!</h3>
                      <p className="text-slate-600">Thank you for contacting us. Our export team will respond within 24 hours.</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' }) }}
                        className="mt-6 btn-primary"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Inquiry / Send Quote</h2>
                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">Your Name *</label>
                            <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                              className={`w-full px-4 py-3 bg-white border rounded-xl outline-none transition-colors text-sm ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500'}`}
                              placeholder="John Smith" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                              className={`w-full px-4 py-3 bg-white border rounded-xl outline-none transition-colors text-sm ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500'}`}
                              placeholder="john@company.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone / WhatsApp</label>
                            <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-cyan-500 transition-colors text-sm"
                              placeholder="+1 234 567 8900" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">Company Name</label>
                            <input type="text" id="company" name="company" value={form.company} onChange={handleChange}
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-cyan-500 transition-colors text-sm"
                              placeholder="Your Company Ltd." />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="subject">Subject</label>
                          <select id="subject" name="subject" value={form.subject} onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-cyan-500 transition-colors text-sm">
                            <option value="">Select inquiry type...</option>
                            <option value="Price Quotation">Request Price Quotation</option>
                            <option value="Product Specifications">Product Specifications</option>
                            <option value="Distributor Partnership">Distributor / Agent Partnership</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Custom Requirements">Custom Requirements</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">Message *</label>
                          <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5}
                            className={`w-full px-4 py-3 bg-white border rounded-xl outline-none transition-colors text-sm resize-none ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500'}`}
                            placeholder="Describe your requirements, product specifications, quantities, and any specific questions..." />
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        <div className="flex flex-wrap gap-3 pt-2">
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary flex-1 sm:flex-none justify-center"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Request
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                              </>
                            )}
                          </motion.button>
                          <button type="button" onClick={sendToWhatsApp}
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 hover:scale-105 transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Send Inquiry on WhatsApp
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
