import { Link } from 'react-router-dom'
import { useState } from 'react'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <SEOMeta
        title="Quality & Certifications"
        metaTitle="Quality Certifications - Industrial Parts Exporter India"
        description="Krushvel maintains strict quality standards and certifications for exporting industrial parts from India."
        keywords="quality certifications industrial exporter India, ISO certified crusher parts supplier"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-6 border border-blue-500/30">
                Quality Assurance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Certifications</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Our commitment to quality ensures every exported product meets international standards and exceeds customer expectations
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Management Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Quality Management
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight">
                  Our Quality <span className="text-blue-600">Standards</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We maintain strict quality standards across all exported products. Our quality management system ensures consistent product quality and customer satisfaction.
                </p>
                <ul className="space-y-4">
                  {[
                    'Pre-shipment quality inspection for all products',
                    'Material test certificates provided on request',
                    'Dimensional verification before dispatch',
                    'Visual inspection and defect-free guarantee',
                    'ISO compliant quality management procedures',
                    'Photographic documentation of each shipment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mt-0.5 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src="/images/AK_PIC2.jpeg" 
                  alt="Quality inspection" 
                  className="relative rounded-2xl shadow-2xl w-full h-72 sm:h-80 lg:h-96 object-cover border-4 border-white"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">100%</p>
                      <p className="text-sm text-slate-500">Quality Assured</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Request Quality Documents
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-600 text-sm font-semibold rounded-full mb-4 border border-purple-500/30">
                Official Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Certificates</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Official certifications that validate our commitment to quality, compliance, and business excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* GST Certificate Card */}
            <ScrollReveal variant="fadeLeft">
              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">GST Certificate</h3>
                    <p className="text-slate-500">Goods and Services Tax Registration</p>
                  </div>
                  <div 
                    onClick={() => openModal('/Documents/GST_CERTIFICATE_img.png')}
                    className="block relative mb-6 overflow-hidden rounded-2xl bg-white border-2 border-slate-200 shadow-inner cursor-pointer hover:border-blue-400 transition-colors duration-300"
                  >
                    <img 
                      src="/Documents/GST_CERTIFICATE_img.png" 
                      alt="GST Certificate First Page" 
                      className="w-full h-80 sm:h-96 lg:h-[28rem] object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="/Documents/GST CERTIFICATE.pdf" 
                    download
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group/btn"
                  >
                    <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Full Certificate
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Form F Certificate Card */}
            <ScrollReveal variant="fadeRight">
              <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-purple-200 hover:-translate-y-2">
                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Form F Certificate</h3>
                    <p className="text-slate-500">Export Compliance Documentation</p>
                  </div>
                  <div 
                    onClick={() => openModal('/Documents/FORM_F_img.png')}
                    className="block relative mb-6 overflow-hidden rounded-2xl bg-white border-2 border-slate-200 shadow-inner cursor-pointer hover:border-purple-400 transition-colors duration-300"
                  >
                    <img 
                      src="/Documents/FORM_F_img.png" 
                      alt="Form F Certificate First Page" 
                      className="w-full h-80 sm:h-96 lg:h-[28rem] object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="/Documents/FORM F.pdf" 
                    download
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 group/btn"
                  >
                    <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Full Certificate
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Trust Indicators */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '✓', label: 'Verified Documents', color: 'from-green-500 to-emerald-600' },
                { icon: '🔒', label: 'Secure & Authentic', color: 'from-blue-500 to-cyan-600' },
                { icon: '📋', label: 'Legally Compliant', color: 'from-purple-500 to-violet-600' },
                { icon: '🌐', label: 'Internationally Recognized', color: 'from-orange-500 to-amber-600' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                    {item.icon}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Need Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Contact us for any additional quality documents, test certificates, or compliance documentation you may require
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors duration-300 z-10"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate Full View" 
              className="w-full h-auto min-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
