import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    icon: '🌍',
    title: 'Global Product Sourcing',
    desc: 'We leverage our extensive manufacturer network across India to find the best quality at competitive prices for your specific requirements.',
    features: ['100+ manufacturer network', 'Price comparison & vetting', 'Custom specifications', 'Sample procurement'],
  },
  {
    icon: '📋',
    title: 'Export Documentation',
    desc: 'Complete export documentation management including commercial invoice, packing list, bill of lading, certificate of origin, and all required certificates.',
    features: ['Commercial Invoice', 'Packing List & B/L', 'Certificate of Origin', 'Test Certificates'],
  },
  {
    icon: '🚢',
    title: 'LCL & FCL Shipments',
    desc: 'Whether you need a single pallet or full container loads, we arrange efficient sea freight with both FCL (full container) and LCL (less than container) options.',
    features: ['FCL shipments', 'LCL consolidation', 'Sea & Air freight', 'Competitive rates'],
  },
  {
    icon: '📦',
    title: 'Custom Packaging',
    desc: 'Products are packed as per international standards to withstand long transit. Options include wooden crates, pallets, fumigated packaging, and custom labeling.',
    features: ['Wooden crates', 'Fumigated pallets', 'Waterproof packing', 'Custom labeling'],
  },
  {
    icon: '✅',
    title: 'Quality Inspection',
    desc: 'Pre-shipment quality inspection by our technical team to ensure every product meets your specifications before loading.',
    features: ['Dimensional check', 'Visual inspection', 'Material certificates', 'Photo documentation'],
  },
  {
    icon: '🔄',
    title: 'International Logistics',
    desc: 'End-to-end international logistics including freight forwarding, customs clearance assistance, and tracking until delivery.',
    features: ['Freight forwarding', 'Customs support', 'Shipment tracking', 'Door delivery option'],
  },
]

export default function Services() {
  return (
    <>
      <SEOMeta
        title="Export Services - Krushvel Global Exim"
        metaTitle="Export Services from India - Krushvel Global Exim"
        description="Complete export services for industrial parts from India. Krushvel Global Exim offers sourcing, quality control, packaging and global logistics to international buyers."
        keywords="export services India, global sourcing services, LCL FCL shipments exporter, export documentation India, Krushvel Global Exim"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/CONVEYOR_BELT.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
        </div>
        {/* Ambient Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm mb-6">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-teal-100 to-teal-300 bg-clip-text text-transparent mb-6">Our Export Services</h1>
              <p className="text-xl text-slate-300 mb-8">
                Complete export services from product sourcing to door delivery. Krushvel Global Exim (Export Division) is ready to handle everything so you can focus on your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary shadow-cyan-500/30 hover:shadow-cyan-500/50">Request Export Support</Link>
                <Link to="/contact?type=import" className="btn-secondary">Discuss Your Import Requirement</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">What We Offer</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">End-to-end export services for industrial parts from India to global buyers. We are initiating our export operations with comprehensive support.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="fadeUp">
                <motion.div whileHover={{ y: -8 }} className="glass-card-light p-7 h-full">
                  <div className="text-4xl mb-5">{service.icon}</div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h2>
                  <p className="text-slate-600 text-sm mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-4 h-4 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">How Our Export Process Works</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: 1, label: 'Submit Inquiry' },
              { step: 2, label: 'Get Quotation' },
              { step: 3, label: 'Order Confirm' },
              { step: 4, label: 'Quality Check' },
              { step: 5, label: 'Export Ship' },
              { step: 6, label: 'Delivery' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="scaleUp">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-lg font-bold flex items-center justify-center mx-auto mb-3 shadow-lg">
                    {s.step}
                  </div>
                  <p className="text-slate-700 text-sm font-medium">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Export Services from India</h2>
              <p className="text-slate-600 mb-4">
                Krushvel Global Exim provides comprehensive <strong>export services from India</strong> specializing in industrial crusher and conveyor parts. Our global sourcing services cover over 1000 industrial products from trusted Indian manufacturers, including our own domestic division, Sony Crusher Engineering & Wiremesh Udyog.
              </p>
              <p className="text-slate-600 mb-4">
                We offer both <strong>LCL FCL shipments</strong> to accommodate buyers of all sizes – from individual importers ordering small quantities to large industrial companies requiring full container loads. Our freight team negotiates the best rates for sea and air freight.
              </p>
              <p className="text-slate-600">
                Our complete service package includes export documentation preparation, pre-shipment quality inspection, professional packaging, and end-to-end logistics coordination. As part of the Krushvel group with dual divisions, we are committed to providing seamless support for international buyers.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Importing from India?</h2>
            <p className="text-teal-100 mb-8 max-w-xl mx-auto">Contact our export team (Krushvel Global Exim) today and we'll guide you through the entire import process.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
                Request Export Support
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4">
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
