import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

export default function Certifications() {
  return (
    <>
      <SEOMeta
        title="Quality & Certifications"
        metaTitle="Quality Certifications - Industrial Parts Exporter India"
        description="Krushvel maintains strict quality standards and certifications for exporting industrial parts from India."
        keywords="quality certifications industrial exporter India, ISO certified crusher parts supplier"
      />
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-blue-950 to-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quality & Certifications</h1>
            <p className="text-xl text-slate-300 max-w-2xl">Our commitment to quality ensures every exported product meets international standards</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal variant="fadeLeft">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Quality Management</h2>
                <p className="text-slate-600 mb-4">We maintain strict quality standards across all exported products. Our quality management system ensures consistent product quality and customer satisfaction.</p>
                <ul className="space-y-3">
                  {[
                    'Pre-shipment quality inspection for all products',
                    'Material test certificates provided on request',
                    'Dimensional verification before dispatch',
                    'Visual inspection and defect-free guarantee',
                    'ISO compliant quality management procedures',
                    'Photographic documentation of each shipment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <img src="/images/VIBRATING_SCREEN_1.jpeg" alt="Quality inspection" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary">Request Quality Documents</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
