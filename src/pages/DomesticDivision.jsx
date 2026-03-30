import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

const milestones = [
  { year: '1966', title: 'Crushwell Engineering & Fabricator', desc: 'Established as a foundational engineering and fabrication unit, laying the groundwork for decades of industrial excellence.' },
  { year: '2010', title: 'Jai Vinayak Enterprises', desc: 'Strategic business expansion into industrial supply, broadening our service capabilities and market reach.' },
  { year: '2017', title: 'Sony Crusher Engineering & Wiremesh Udyog', desc: 'Consolidated as a comprehensive manufacturer and repairer, strengthening domestic operations across India.' },
]

const capabilities = [
  { icon: '🏭', title: 'Manufacturing Excellence', desc: 'State-of-the-art manufacturing facilities producing 1000+ industrial products across four major categories.' },
  { icon: '🔧', title: 'Repairing & Maintenance', desc: 'Comprehensive repair and maintenance services for crusher and industrial machinery parts.' },
  { icon: '📦', title: 'Domestic Supply Chain', desc: 'Robust supply chain serving 1000+ domestic clients across India with reliable delivery.' },
  { icon: '✅', title: 'Quality Assurance', desc: 'ISO-compliant quality management system ensuring highest standards for every product.' },
  { icon: '🎯', title: 'Custom Manufacturing', desc: 'Non-standard sizes, special materials, and OEM specifications available on request.' },
  { icon: '🤝', title: 'Technical Support', desc: 'Expert technical team providing guidance on product selection and application.' },
]

const productCategories = [
  { name: 'Crusher Spare Parts', count: '500+', desc: 'Jaw plates, toggle plates, toggle bearings, and more' },
  { name: 'Conveyor System Components', count: '300+', desc: 'Idler rollers, impact rollers, drum rollers, conveyor belts' },
  { name: 'Vibrating Screen Equipment', count: '150+', desc: 'Vibrating screens, wiremesh screens, screen bearing housings' },
  { name: 'Industrial Components', count: '100+', desc: 'Bearings, pulleys, gears, motors, and more' },
]

export default function DomesticDivision() {
  return (
    <>
      <SEOMeta
        title="Domestic Division - Sony Crusher Engineering & Wiremesh Udyog"
        metaTitle="Sony Crusher Engineering - Domestic Manufacturing Division"
        description="Sony Crusher Engineering & Wiremesh Udyog is the domestic division of Krushvel, serving the Indian market with 1000+ industrial products including crusher spare parts, conveyor components, and vibrating screen equipment."
        keywords="Sony Crusher Engineering, Wiremesh Udyog, domestic manufacturer India, crusher parts supplier India, conveyor rollers manufacturer, industrial components India"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/StoneCrusherPlan.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
        </div>
        {/* Ambient Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm mb-6">
                Domestic Division
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-6">Sony Crusher Engineering & Wiremesh Udyog</h1>
              <p className="text-xl text-slate-300 mb-8">
                Manufacturing . Repairing . Strengthening National Operations
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary shadow-orange-500/30 hover:shadow-orange-500/50">Contact Us</Link>
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
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Domestic Legacy</h2>
                <p className="text-slate-600 mb-4">
                  Sony Crusher Engineering & Wiremesh Udyog represents the domestic manufacturing arm of the Krushvel group. Established in 2017, we consolidated decades of engineering expertise to serve the Indian market with comprehensive manufacturing and repairing capabilities.
                </p>
                <p className="text-slate-600 mb-4">
                  Our journey began in 1966 with Crushwell Engineering & Fabricator, followed by strategic expansion in 2010 with Jai Vinayak Enterprises. Today, we stand as a leading manufacturer of industrial crusher and conveyor parts in India, serving over 1000 domestic clients.
                </p>
                <p className="text-slate-600 mb-6">
                  We specialize in manufacturing, repairing, and supplying high-quality industrial components to mining companies, cement plants, quarry operators, and construction firms across India. Our commitment to quality and reliability has made us a trusted partner in the domestic market.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="relative">
                <img src="/images/Vibrating_screen_10.jpeg" alt="Our company" className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover" />
                <div className="absolute -bottom-5 -right-5 glass-card-light p-5 rounded-2xl shadow-xl max-w-xs">
                  <div className="text-3xl font-bold text-orange-600 mb-1">60+</div>
                  <div className="text-slate-700 font-medium">Years of Manufacturing Excellence</div>
                  <div className="text-slate-500 text-sm mt-1">Serving the Indian market</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
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
                  To strengthen our national operations by providing high-quality industrial components to the Indian market. We are committed to manufacturing excellence, reliable supply, and comprehensive repair services that support India's mining, construction, and material handling industries.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="glass-card-light p-8 rounded-2xl">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To be the leading domestic manufacturer of industrial crusher and conveyor parts in India, recognized for our quality, reliability, and commitment to customer satisfaction. We aim to deepen our market presence and strengthen our position as a trusted partner for industrial buyers across the nation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">We have built comprehensive capabilities to serve the Indian market with the highest quality industrial components.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
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

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Product Range</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We offer over 1000 products across four major categories, serving diverse industrial needs.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="fadeUp">
                <motion.div whileHover={{ y: -5 }} className="glass-card-light p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{cat.count}</div>
                  <h3 className="font-bold text-slate-800 mb-2">{cat.name}</h3>
                  <p className="text-slate-600 text-sm">{cat.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h2>
              <p className="text-slate-600">From foundational engineering in 1966 to domestic manufacturing consolidation in 2017</p>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-600" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
                  <div className={`flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                      <div className="glass-card-light p-5 rounded-2xl inline-block max-w-sm">
                        <div className="text-orange-600 font-bold text-lg mb-1">{m.year}</div>
                        <h3 className="font-bold text-slate-800 mb-2">{m.title}</h3>
                        <p className="text-slate-600 text-sm">{m.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 shadow-lg flex-shrink-0">
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">Contact our domestic team to discuss your requirements and get a competitive quotation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-orange-700 font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
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
