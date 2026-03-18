import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

const milestones = [
  { year: '2010', title: 'Company Founded', desc: 'Krushvel was established as a trading company for industrial parts in India.' },
  { year: '2013', title: 'First Export', desc: 'Successfully shipped our first international order to Southeast Asia.' },
  { year: '2016', title: 'Expanded Product Range', desc: 'Added conveyor system components and vibrating screen equipment to our catalog.' },
  { year: '2019', title: '25+ Countries', desc: 'Reached the milestone of serving clients in over 25 countries worldwide.' },
  { year: '2022', title: 'ISO Compliance', desc: 'Implemented ISO-compliant quality management system across all operations.' },
  { year: '2024', title: '50+ Countries', desc: 'Now proudly serving industrial buyers in more than 50 countries globally.' },
]

const team = [
  { name: 'Managing Director', role: 'Export & Business Development', icon: '👔' },
  { name: 'Technical Manager', role: 'Product Specifications & Quality', icon: '🔧' },
  { name: 'Export Manager', role: 'Logistics & Documentation', icon: '🚢' },
  { name: 'Sales Team', role: 'Client Relations & Quotations', icon: '🤝' },
]

export default function About() {
  return (
    <>
      <SEOMeta
        title="About Our Export Company"
        metaTitle="About Our Export Company"
        description="Reliable Indian exporter of crusher parts, conveyor rollers and industrial equipment serving global buyers."
        keywords="about krushvel, industrial parts exporter India, crusher parts supplier about, conveyor rollers exporter India"
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-800 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/3. Conveyor Rollers.png" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm mb-6">
                About Krushvel
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Export Company</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reliable Indian exporter of crusher parts, conveyor rollers and industrial equipment serving global buyers since 2010.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/products" className="btn-secondary">Our Products</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeLeft">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
                <p className="text-slate-600 mb-4">
                  Krushvel was founded in 2010 with a vision to become India's leading exporter of industrial crusher and conveyor parts. Starting with a small portfolio of crusher spare parts, we have grown to offer over 1000 products across four major categories.
                </p>
                <p className="text-slate-600 mb-4">
                  Over 14 years, we have built strong relationships with manufacturers, customers, and logistics partners worldwide. Our team of industrial experts ensures that every product we supply meets the highest quality standards.
                </p>
                <p className="text-slate-600 mb-6">
                  Today, we serve 500+ clients in 50+ countries, exporting crusher spare parts, conveyor system components, vibrating screen equipment, and industrial engineering components to mining companies, cement plants, quarry operators, and construction firms globally.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="relative">
                <img src="/images/Industrial Gearbox.jpeg" alt="Our company" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
                <div className="absolute -bottom-5 -right-5 glass-card-light p-5 rounded-2xl shadow-xl max-w-xs">
                  <div className="text-3xl font-bold text-cyan-600 mb-1">14+</div>
                  <div className="text-slate-700 font-medium">Years of Export Excellence</div>
                  <div className="text-slate-500 text-sm mt-1">Trusted by 500+ global buyers</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Mission & Vision</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="fadeLeft">
              <div className="glass-card-light p-8 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To be the most trusted Indian exporter of industrial parts, enabling global buyers to source high-quality crusher and conveyor components with zero compromise on quality, at competitive prices, with reliable delivery.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="glass-card-light p-8 rounded-2xl">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To become the global hub for industrial spare parts supply from India, helping the world's mining, construction, and material handling industries operate efficiently with Made-in-India quality components.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h2>
              <p className="text-slate-600">14 years of growth, excellence, and global expansion</p>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
                  <div className={`flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                      <div className="glass-card-light p-5 rounded-2xl inline-block max-w-sm">
                        <div className="text-cyan-600 font-bold text-lg mb-1">{m.year}</div>
                        <h3 className="font-bold text-slate-800 mb-2">{m.title}</h3>
                        <p className="text-slate-600 text-sm">{m.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 shadow-lg flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Export Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">From sourcing to door delivery, we handle your entire import process.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌍', title: 'Global Sourcing', desc: 'We source products from 100+ manufacturers across India to provide you the best quality at best price.' },
              { icon: '📦', title: 'LCL & FCL Shipments', desc: 'Whether you need a small parcel or full container load, we handle all shipment types efficiently.' },
              { icon: '📋', title: 'Export Documentation', desc: 'Complete documentation including commercial invoice, packing list, COO, phytosanitary and more.' },
              { icon: '✅', title: 'Quality Inspection', desc: 'Pre-shipment quality inspection by our technical team ensures every product meets specifications.' },
              { icon: '🔧', title: 'Custom Packaging', desc: 'Products packed to withstand international transit with wooden crates, pallets, or boxes.' },
              { icon: '📍', title: 'Door Delivery', desc: 'End-to-end logistics management including customs clearance and door delivery options.' },
            ].map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="scaleUp">
                <motion.div whileHover={{ y: -5 }} className="glass-card-dark p-6">
                  <div className="text-3xl mb-4">{cap.icon}</div>
                  <h3 className="font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-400 text-sm">{cap.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Import from India?</h2>
            <p className="text-cyan-100 mb-8 max-w-xl mx-auto">Contact our export team to discuss your requirements and get a competitive quotation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
                Contact Our Team
              </Link>
              <Link to="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
