import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

const industries = [
  {
    id: 'mining',
    icon: '⛏️',
    title: 'Mining Industry',
    image: '/images/JAW_PLATES2.jpeg',
    desc: 'We supply comprehensive mining equipment spare parts for open-cast and underground mining operations worldwide.',
    details: 'The mining industry demands the toughest crusher and conveyor components. We supply jaw plates, toggle plates, crusher bearings, conveyor idler rollers, impact rollers, and vibrating screen equipment specifically designed for the harsh conditions of mining operations.',
    products: ['Jaw Plates & Cheek Plates', 'Crusher Bearings', 'Toggle Plates', 'Conveyor Idler Rollers', 'Vibrating Screen Machine', 'Wiremesh Screens'],
    keywords: 'mining equipment spare parts, mining crusher components, conveyor parts for mining',
  },
  {
    id: 'cement',
    icon: '🏭',
    title: 'Cement Plants',
    image: '/images/CONVEYOR_IDLER_ROLLERS_&_FRAME2.jpeg',
    desc: 'Specialized crusher and conveyor components for cement manufacturing facilities and limestone processing plants.',
    details: 'Cement plants require reliable crusher spare parts and conveyor systems for continuous limestone crushing and material transport. We supply heavy-duty components designed for the dusty and demanding cement production environment.',
    products: ['Crusher Spare Parts', 'Conveyor Idler Rollers', 'Conveyor Belts', 'Drum Rollers', 'Industrial Gearbox', 'Industrial Motors'],
    keywords: 'cement plant crusher parts, cement conveyor rollers, limestone crusher parts India',
  },
  {
    id: 'construction',
    icon: '🏗️',
    title: 'Construction Industry',
    image: '/images/WiremeshScreens.webp',
    desc: 'Aggregates and construction industry solution with jaw crusher parts, screen meshes and aggregate handling equipment.',
    details: 'Construction companies and aggregate producers rely on Krushvel for crusher wear parts, vibrating screen media, and conveyor components. We supply products that maximize uptime and minimize maintenance costs.',
    products: ['Jaw Plates', 'Wiremesh Screens', 'Perforated Sheets', 'Vibrating Screen Machine', 'Conveyor Rollers', 'Crusher Bolts'],
    keywords: 'construction crusher parts, aggregate equipment exporter, jaw crusher parts for construction',
  },
  {
    id: 'quarry',
    icon: '🪨',
    title: 'Quarry Operations',
    image: '/images/HEAVY_SPRINGS1.jpeg',
    desc: 'Quarry crusher components supplier for stone quarrying operations with complete range of wear parts.',
    details: 'Quarry operations require frequently replaced wear parts. As a dedicated quarry crusher components supplier, we maintain stock of the most commonly used jaw plates, cheek plates, toggle plates, and Screen media for fast delivery.',
    products: ['Jaw Plates', 'Cheek Plates', 'Toggle Plates', 'Heavy Springs', 'Crusher Bolts', 'Screen Panels'],
    keywords: 'quarry crusher components supplier, stone quarry parts, quarry jaw plates exporter India',
  },
  {
    id: 'material-handling',
    icon: '🔄',
    title: 'Material Handling',
    image: '/images/Conveyor_Rollers2.jpeg',
    desc: 'Complete material handling solutions including conveyor systems, idler rollers, and bulk handling equipment.',
    details: 'Material handling facilities need reliable conveyor components for continuous operation. We supply complete conveyor roller sets, impact rollers, drum pulleys, conveyor belts, and accessories for bulk material handling operations.',
    products: ['Conveyor Idler Rollers', 'Impact Rollers', 'Drum Rollers', 'Conveyor Belts', 'Guide Rollers', 'Rubber U-Bidding'],
    keywords: 'material handling equipment exporter, bulk conveyor systems, conveyor parts material handling India',
  },
]

export default function Industries() {
  return (
    <>
      <SEOMeta
        title="Industries We Serve"
        metaTitle="Industries We Serve | Crusher & Conveyor Parts"
        description="We supply crusher parts and conveyor components to mining, cement, construction, quarry and material handling industries globally."
        keywords="mining equipment spare parts, cement plant crusher parts, quarry crusher components supplier, material handling conveyor parts India"
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/VIBRATING_SCREEN_2.jpeg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Supplying industrial parts to mining, cement, construction, quarry and material handling industries across 50+ countries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.id} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
                <div id={ind.id} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{ind.icon}</span>
                      <h2 className="text-2xl font-bold text-slate-800">{ind.title}</h2>
                    </div>
                    <p className="text-slate-600 mb-4">{ind.details}</p>
                    <h3 className="font-semibold text-slate-700 mb-3">Products We Supply:</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ind.products.map((p, j) => (
                        <span key={j} className="px-3 py-1.5 bg-cyan-50 text-cyan-700 text-sm rounded-lg border border-cyan-100">{p}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Request Parts for {ind.title}
                    </Link>
                  </div>
                  <div>
                    <img src={ind.image} alt={ind.title} className="rounded-2xl shadow-xl w-full h-72 object-cover" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Serving Your Industry Globally</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Contact us today to discuss your industry's specific requirements for crusher parts and conveyor components.</p>
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
              Get Sector-Specific Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
