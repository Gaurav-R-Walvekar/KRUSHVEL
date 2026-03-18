import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'
import { productCategories, allProducts } from '../data/products'

export default function Products() {
  const featured = allProducts.slice(0, 8)

  return (
    <>
      <SEOMeta
        title="Industrial Crusher & Conveyor Parts Exporter"
        metaTitle="Crusher & Conveyor Parts Exporter"
        description="Exporter of crusher spare parts, conveyor rollers, vibrating screens and industrial components from India."
        keywords="crusher spare parts exporter, conveyor rollers supplier India, vibrating screen exporter, industrial components India"
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-blue-950 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/CONVEYOR IDLER ROLLERS & FRAME 3.jpeg" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm mb-6">
                Our Products
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Export Products</h1>
              <p className="text-xl text-slate-300 mb-8">
                Complete range of industrial crusher and conveyor parts for global buyers. Quality products from India at competitive export prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Request Product Specifications
                </Link>
                <Link to="/contact?type=pricelist" className="btn-secondary">
                  Ask for Price List
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Product Categories</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Explore our comprehensive range of industrial parts across four major categories.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {productCategories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.1} variant="scaleUp">
                <motion.div whileHover={{ y: -8 }} className="glass-card-light overflow-hidden group">
                  <Link to={cat.slug}>
                    <div className="overflow-hidden h-44">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-800 text-lg mb-2">{cat.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{cat.description.substring(0, 90)}...</p>
                      <span className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-medium group-hover:gap-3 transition-all">
                        View Products
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* All Products Grid */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">All Export Products</h2>
              <p className="text-slate-600">Browse our complete range of 1000+ industrial parts available for export</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={(i % 8) * 0.05} variant="fadeUp">
                <motion.div whileHover={{ y: -6 }} className="product-card group">
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.bestseller && (
                      <div className="absolute top-2 left-2">
                        <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">⭐ Bestseller</span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-cyan-600/90 text-white text-xs rounded-lg capitalize">
                        {product.category.replace(/-/g, ' ')}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 mb-2">{product.name}</h3>
                    <p className="text-slate-600 text-xs mb-3">{product.description.substring(0, 80)}...</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.specs?.slice(0, 2).map((spec, j) => (
                        <span key={j} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">{spec}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn-primary text-xs px-4 py-2 w-full justify-center">
                      Request Quote
                    </Link>
                  </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
            <p className="text-cyan-100 mb-8 max-w-xl mx-auto">We source almost any industrial part from India. Send us your requirements and we'll find the right product for you.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
                Send Custom Inquiry
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Sourcing Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
