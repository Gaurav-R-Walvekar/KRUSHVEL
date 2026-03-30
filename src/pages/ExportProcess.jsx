import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

export default function ExportProcess() {
  return (
    <>
      <SEOMeta
        title="Our Export Process - Krushvel Global Exim"
        metaTitle="Export Process - Industrial Parts from India - Krushvel Global Exim"
        description="Learn about our streamlined export process for industrial parts from India to global buyers. Krushvel Global Exim guides you through every step from inquiry to delivery."
        keywords="export process industrial parts India, how to import crusher parts India, export documentation India, Krushvel Global Exim"
      />
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Export Process</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Simple, transparent, and efficient export process from inquiry to delivery. Krushvel Global Exim guides you through every step.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {[
              { step: '01', title: 'Submit Your Inquiry', desc: 'Send us your product requirements via email, WhatsApp, or our contact form. Include product name, specifications, quantity, and destination port. Our team is ready to assist first-time importers.' },
              { step: '02', title: 'Receive Quotation', desc: 'Our team prepares a detailed quotation within 24 hours including product specifications, unit price, packaging, and estimated freight cost. We offer competitive pricing backed by our manufacturing expertise.' },
              { step: '03', title: 'Order Confirmation', desc: 'Confirm your order with a purchase order. We issue a proforma invoice and agree on payment terms and delivery schedule. We support various payment methods for international buyers.' },
              { step: '04', title: 'Quality Inspection', desc: 'All products undergo thorough pre-shipment quality inspection. We share inspection photos and test certificates for your approval. Our ISO-compliant quality system ensures consistent standards.' },
              { step: '05', title: 'Packaging & Export', desc: 'Products are professionally packed in wooden crates or pallets, fumigated as required, and loaded in container for export. We handle all packaging requirements for safe international transit.' },
              { step: '06', title: 'Documentation & Delivery', desc: 'Complete export documents dispatched via courier. Track your shipment until it reaches your port. We provide full after-shipment support and assist with customs clearance.' },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="fadeLeft">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xl font-bold flex items-center justify-center flex-shrink-0 shadow-lg">
                    {step.step}
                  </div>
                  <div className="glass-card-light p-5 rounded-2xl flex-1">
                    <h2 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h2>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary">Start Your Export Inquiry</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
