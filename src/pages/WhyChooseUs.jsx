import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  return (
    <>
      <SEOMeta
        title="Why Choose Krushvel"
        metaTitle="Why Choose Krushvel Industrial Exporter India"
        description="Discover why global buyers trust Krushvel for crusher parts, conveyor rollers and industrial equipment from India."
        keywords="why choose krushvel, best industrial parts exporter India, reliable crusher parts supplier"
      />
      <section className="relative pt-28 pb-16 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Buyers Choose Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl">The trusted choice for industrial parts export from India</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Competitive Pricing', desc: 'Direct manufacturer relationships allow us to offer the most competitive prices for high-quality industrial parts from India.' },
              { icon: '✅', title: 'Quality Assurance', desc: '100% pre-shipment quality inspection. We verify every product before it leaves our warehouse to ensure it meets your specifications.' },
              { icon: '🚀', title: 'Fast Processing', desc: 'Quick order processing with standard lead time of 7-15 days for stocked items and 30-45 days for custom orders.' },
              { icon: '📋', title: 'Complete Documentation', desc: 'All export documents prepared accurately — commercial invoice, packing list, bill of lading, COO, test certificates.' },
              { icon: '🔧', title: 'Technical Expertise', desc: 'Over 14 years of technical knowledge in crusher and conveyor parts to help you select the right products.' },
              { icon: '🌍', title: 'Global Logistics', desc: 'Strong freight partnerships for competitive ocean and air freight rates to all major ports worldwide.' },
              { icon: '📦', title: 'Custom Packaging', desc: 'Products packaged to survive international shipping with options for wooden crates, pallets, and customized labeling.' },
              { icon: '💬', title: 'Responsive Support', desc: 'Dedicated account managers with fast response via email, WhatsApp, and phone for seamless communication.' },
              { icon: '🤝', title: 'Long-term Partnership', desc: 'We focus on building long-term relationships, not one-time transactions. Your success is our success.' },
            ].map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.08} variant="scaleUp">
                <motion.div whileHover={{ y: -6 }} className="glass-card-light p-6">
                  <div className="text-3xl mb-4">{r.icon}</div>
                  <h2 className="font-bold text-slate-800 text-lg mb-3">{r.title}</h2>
                  <p className="text-slate-600 text-sm">{r.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary">Start Working With Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
