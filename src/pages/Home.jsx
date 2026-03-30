import { useState, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'
import { getBestsellers, productCategories } from '../data/products'

const heroSlides = [
  {
    image: '/images/Vibrating_Screen.png',
    title: 'Industrial Equipment & Crusher Parts',
    subtitle: 'Dual Division: Domestic & Export',
    desc: 'Established Indian manufacturer with 60+ years of excellence. Sony Crusher Engineering (Domestic) & Krushvel Global Exim (Export) serving buyers worldwide.',
  },
  {
    image: '/images/CONVEYOR_IDLER_ROLLERS_&_FRAME2.jpeg',
    title: 'Conveyor System Components',
    subtitle: 'Built for Demanding Industries',
    desc: 'Premium quality idler rollers, impact rollers, drum rollers & conveyor belts for mining & cement plants worldwide.',
  },
  {
    image: '/images/StoneCrusherPlan.jpg',
    title: 'Wiremesh Screens & Vibrating Equipment',
    subtitle: 'Precision Engineered Products',
    desc: 'High-quality vibrating screen machines, wiremesh screens & screen bearing housings ready for global export.',
  },
]

const industries = [
  {
    icon: '⛏️',
    title: 'Mining Industry',
    desc: 'Mining equipment spare parts, crusher components, and conveyor systems for open-cast and underground mining operations.',
    keywords: 'mining equipment spare parts, mining crusher components',
    to: '/industries#mining',
  },
  {
    icon: '🏭',
    title: 'Cement Plants',
    desc: 'Industrial crusher parts, conveyor rollers, and vibrating screen equipment for cement manufacturing facilities.',
    keywords: 'cement plant crusher parts, cement conveyor rollers',
    to: '/industries#cement',
  },
  {
    icon: '🏗️',
    title: 'Construction Industry',
    desc: 'Jaw crusher parts, screen meshes, and aggregate handling equipment for construction and infrastructure projects.',
    keywords: 'construction crusher parts, aggregate equipment exporter',
    to: '/industries#construction',
  },
  {
    icon: '🪨',
    title: 'Quarry Operations',
    desc: 'Quarry crusher components supplier for stone quarrying operations including jaw plates, toggle plates, and screen media.',
    keywords: 'quarry crusher components supplier, stone quarry parts',
    to: '/industries#quarry',
  },
  {
    icon: '🔄',
    title: 'Material Handling',
    desc: 'Complete material handling solutions including conveyor systems, idler rollers, and bulk handling equipment.',
    keywords: 'material handling equipment exporter, bulk conveyor systems',
    to: '/industries#material-handling',
  },
]

const exportProcess = [
  { step: '01', title: 'Inquiry & Quotation', desc: 'Send us your product requirements and receive a competitive quotation within 24 hours.' },
  { step: '02', title: 'Order Confirmation', desc: 'Confirm your order with purchase order and advance payment as per agreed terms.' },
  { step: '03', title: 'Quality Inspection', desc: 'All products undergo strict quality checks before packing and dispatch.' },
  { step: '04', title: 'Export & Logistics', desc: 'LCL & FCL shipments with complete export documentation for smooth customs clearance.' },
]

const globalMarkets = ['USA', 'UAE', 'South Africa', 'Australia', 'Kenya', 'Ghana', 'Indonesia', 'Philippines', 'Brazil', 'Canada', 'UK', 'Germany']

const stats = [
  { value: '60+', label: 'Years Manufacturing' },
  { value: '50+', label: 'Target Countries' },
  { value: '500+', label: 'Happy Customers'},
  { value: '1000+', label: 'Domestic Clients' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const bestsellers = getBestsellers()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '10%' : '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, isMobile ? 6000 : 5000)
    return () => clearInterval(timer)
  }, [isMobile])

  return (
    <>
      <SEOMeta
        title="Indian Manufacturer with Dual Division - Domestic & Export"
        metaTitle="Industrial Parts Manufacturer - Sony Crusher Engineering (Domestic) & Krushvel Global Exim (Export)"
        description="Established Indian manufacturer with 60+ years of excellence. Sony Crusher Engineering (Domestic) & Krushvel Global Exim (Export) serving buyers worldwide with crusher parts, conveyor rollers & industrial components."
        keywords="crusher parts exporter India, conveyor rollers supplier, wiremesh screen exporter, industrial parts India, jaw plates exporter, Sony Crusher Engineering, Krushvel Global Exim"
      />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden gpu-accelerated will-change-transform">
        {/* Background Slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: isMobile ? 1.02 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1 }}
            style={{ y: heroY }}
            className="absolute inset-0 will-change-transform gpu-accelerated"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Industrial equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
          </motion.div>
        </AnimatePresence>

        {/* Animated particles - optimized for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(isMobile ? 2 : 3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/30 will-change-transform"
              animate={{ y: [-20, isMobile ? 800 : 1200], x: [Math.random() * 100, Math.random() * 100] }}
              transition={{ 
                duration: isMobile ? 12 + i * 2 : 10 + i * 2, 
                repeat: Infinity, 
                delay: i * 2, 
                ease: 'linear' 
              }}
              style={{ left: `${20 + i * (isMobile ? 35 : 25)}%`, top: -20 }}
            />
          ))}
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-4 pt-24 pb-16 will-change-opacity">
          {/* Glassmorphism effect - optimized for mobile */}
          <div className={`absolute top-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm mb-6 will-change-transform"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Indian Manufacturer with <span className="text-orange-400">Dual Division Structure</span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isMobile ? -10 : -20 }}
                transition={{ duration: isMobile ? 0.4 : 0.6 }}
                className="will-change-transform"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent mb-4 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl text-slate-300 mb-3">{heroSlides[currentSlide].subtitle}</p>
                <p className="text-slate-400 text-lg mb-8 max-w-xl">{heroSlides[currentSlide].desc}</p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.2 : 0.4 }}
              className="flex flex-wrap gap-4 will-change-transform"
            >
              <Link to="/products" className="btn-primary text-base px-8 py-4 shadow-cyan-500/30 hover:shadow-cyan-500/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Browse Products
              </Link>
              <Link to="/contact" className="btn-secondary text-base px-8 py-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Quote
              </Link>
            </motion.div>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex gap-2 will-change-transform">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-cyan-400' : 'w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator - optimized for mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 will-change-transform gpu-accelerated"
          animate={{ y: isMobile ? [0, 4, 0] : [0, 8, 0] }}
          transition={{ duration: isMobile ? 2.5 : 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-cyan-200 text-sm mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT EXPORT COMPANY */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeLeft">
              <div>
                <div className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">About Us</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  From Domestic Excellence to Global Markets
                </h2>
                <p className="text-slate-600 mb-4">
                  Krushvel is an established <strong>Indian manufacturer of industrial parts</strong> with over 60 years of experience supplying crusher spare parts, conveyor components, vibrating screen equipment, and engineering components. Our journey began in 1966 with Crushwell Engineering & Fabricator.
                </p>
                <p className="text-slate-600 mb-4">
                  In 2026, we strategically bifurcated our operations into two divisions: <strong>Sony Crusher Engineering & Wiremesh Udyog</strong> (Domestic Division) serving the Indian market with 1000+ products, and <strong>Krushvel Global Exim</strong> (Export Division) capturing international opportunities.
                </p>
                <p className="text-slate-600 mb-6">
                  With proven manufacturing capabilities, ISO-compliant quality systems, and dedicated teams for both domestic and export operations, we are ready to serve buyers worldwide. We handle LCL & FCL shipments, pre-shipment quality inspection, and complete export documentation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/about" className="btn-outline">
                    Learn More About Us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card-light p-5 rounded-2xl">
                  <div className="text-3xl mb-2">🌍</div>
                  <h3 className="font-semibold text-slate-800 mb-1">Global Focus</h3>
                  <p className="text-sm text-slate-600">Now targeting 50+ countries across 6 continents</p>
                </div>
                <div className="glass-card-light p-5 rounded-2xl">
                  <div className="text-3xl mb-2">✅</div>
                  <h3 className="font-semibold text-slate-800 mb-1">Quality Assured</h3>
                  <p className="text-sm text-slate-600">100% quality inspection before every shipment</p>
                </div>
                <div className="glass-card-light p-5 rounded-2xl">
                  <div className="text-3xl mb-2">🚢</div>
                  <h3 className="font-semibold text-slate-800 mb-1">LCL & FCL</h3>
                  <p className="text-sm text-slate-600">Full & partial container shipments available</p>
                </div>
                <div className="glass-card-light p-5 rounded-2xl">
                  <div className="text-3xl mb-2">📦</div>
                  <h3 className="font-semibold text-slate-800 mb-1">1000+ Products</h3>
                  <p className="text-sm text-slate-600">Industrial parts across 4 major categories</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS - Vertical Scroll Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">⭐ Bestsellers</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Premium Products</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Trusted by mining companies, cement plants, and industrial buyers across India. These are our most in-demand products now available for global export.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="product-card group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-52 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                        ⭐ Bestseller
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 text-lg mb-4">{product.name}</h3>
                    <Link
                      to="/contact"
                      className="w-full btn-primary text-sm justify-center"
                    >
                      Request Quote
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/products" className="btn-outline">
                View All Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Industries</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We supply industrial parts to diverse sectors. From mining and cement to construction and quarry operations, we serve both domestic and global markets.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {industries.map((ind, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card-light p-6 text-center group"
                >
                  <div className="text-4xl mb-4">{ind.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">{ind.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{ind.desc}</p>
                  <Link to={ind.to} className="text-cyan-600 text-sm font-medium hover:text-cyan-800 transition-colors">
                    Learn More →
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">How We Work</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Export Process</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Simple, transparent and efficient. Here's how we fulfill your industrial parts export requirements as we begin our export journey.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 z-0" />

            {exportProcess.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15} variant="fadeUp">
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-5 shadow-lg shadow-cyan-200">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/services" className="btn-primary">
                Learn More About Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GLOBAL MARKETS */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Global Markets We Target</h2>
              <p className="text-cyan-100">Expanding our reach to serve industrial buyers across all continents</p>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {globalMarkets.map((country, i) => (
              <ScrollReveal key={country} delay={i * 0.05} variant="scaleUp">
                <div className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium text-sm">
                  {country}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Link to="/global-markets" className="btn-secondary">
                View All Markets
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fadeLeft">
              <div>
                <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">Quality</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Quality & Certifications</h2>
                <p className="text-slate-600 mb-4">
                  At Krushvel, quality is our foundation. Every product we manufacture undergoes rigorous quality control procedures to ensure it meets international standards and client specifications.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Pre-shipment quality inspection by experienced QC team',
                    'Material certificates and test reports provided',
                    'Dimensional checks and visual inspection',
                    'Packaging inspection before container loading',
                    'ISO compliant quality management system',
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
                <Link to="/certifications" className="btn-outline">
                  View Our Certifications
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight">
              <div className="relative">
                <img
                  src="/images/VIBRATING_SCREEN1.jpeg"
                  alt="Quality inspection"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-xs text-cyan-200">Quality Checked</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">Why Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Buyers Choose Us</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Industrial buyers trust Krushvel for reliable supply of crusher parts and conveyor components from India.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Competitive Pricing', desc: 'Direct from manufacturer pricing with no intermediaries. Best price for quality products.' },
              { icon: '✅', title: 'Quality Assurance', desc: 'ISO certified processes ensuring the highest quality standards for every product.' },
              { icon: '🔧', title: 'Technical Support', desc: 'Expert technical team to help you select the right parts for your application.' },
              { icon: '📋', title: 'Complete Documentation', desc: 'Full export documentation including commercial invoice, packing list, bill of lading & certificates.' },
              { icon: '🎯', title: 'Custom Orders', desc: 'Non-standard sizes, special materials, and OEM specifications available on request.' },
              { icon: '🤝', title: 'Long-term Partnership', desc: 'Dedicated account managers working as long-term export partners for your business.' },
            ].map((reason, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="scaleUp">
                <motion.div whileHover={{ y: -5 }} className="glass-card-light p-6">
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3">{reason.title}</h3>
                  <p className="text-slate-600 text-sm">{reason.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/why-choose-us" className="btn-outline">
                Why Choose Krushvel
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/CONVEYOR_IDLER_ROLLERS_&_FRAME3.jpeg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Krushvel?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Contact our domestic or export team today for crusher parts, conveyor components, and complete industrial equipment at competitive prices. We are ready to serve buyers worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Request a Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-8 py-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BLOG / INSIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Blog</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Latest Industry Insights</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Stay updated with the latest trends in crusher and conveyor equipment, import-export regulations, and industry best practices.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Choose the Right Jaw Plates for Your Crusher',
                excerpt: 'Selection of the right jaw plate material—manganese steel, alloy steel, or chrome steel—depends on the hardness of the material being crushed.',
                date: 'March 2024',
                category: 'Technical Guide',
                image: '/images/JAW_PLATES2.jpeg',
              },
              {
                title: 'Complete Guide to Conveyor Idler Roller Selection',
                excerpt: 'Proper selection of conveyor idler rollers ensures longer belt life, reduced power consumption, and lower maintenance costs.',
                date: 'February 2024',
                category: 'Industry Guide',
                image: '/images/CONVEYOR_IDLER_ROLLERS_&_FRAME2.jpeg',
              },
              {
                title: 'Importing Industrial Parts from India: What Buyers Need to Know',
                excerpt: 'A comprehensive guide to importing industrial parts from India, covering documentation, customs clearance, and quality verification.',
                date: 'January 2024',
                category: 'Export Guide',
                image: '/images/Conveyor_Rollers2.jpeg',
              },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="fadeUp">
                <motion.div whileHover={{ y: -5 }} className="glass-card-light overflow-hidden group cursor-pointer">
                  <div className="overflow-hidden h-44">
                    <img src={post.image} alt={post.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">{post.category}</span>
                      <span className="text-slate-400 text-xs">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors">{post.title}</h3>
                    <p className="text-slate-600 text-sm">{post.excerpt}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
