import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOMeta from '../components/SEOMeta'
import ScrollReveal from '../components/ScrollReveal'
import { productCategories, getProductsByCategory } from '../data/products'

const categoryMeta = {
  'crusher-spare-parts': {
    h1: 'Crusher Spare Parts Exporter',
    h2: 'Our Crusher Spare Parts',
    metaTitle: 'Crusher Spare Parts Exporter India',
    description: 'Jaw crusher, cone crusher and impact crusher spare parts supplier for global mining industries.',
    keywords: 'crusher spare parts supplier, jaw crusher parts exporter, cone crusher parts manufacturer, toggle plate supplier, crusher bearings exporter India',
    heroImage: '/images/JAW_PLATES2.jpeg',
    products: [
      { name: 'Jaw Plates', desc: 'High manganese steel jaw plates for primary crushing. Various sizes for different crusher models.', image: '/images/JAW_PLATES2.jpeg' },
      { name: 'Toggle Plates', desc: 'Safety toggle plates protecting crusher from uncrushable material damage.', image: '/images/Toggal_Plates.jpeg' },
      { name: 'Crusher Bolts', desc: 'High tensile fasteners for all types of crusher components.', image: '/images/Crusher_boults.jpeg' },
      { name: 'Crusher Bearings', desc: 'Heavy-duty spherical roller bearings for all crusher types.', image: '/images/Crusher_Vibrator_Bearings.jpeg' },
      { name: 'Crusher Gearbox', desc: 'Industrial gearboxes for crushers with high torque transmission.', image: '/images/IndustrialGearbox.jpeg' },
      { name: 'Heavy Springs', desc: 'Cone crusher and vibrating screen heavy duty springs.', image: '/images/HEAVY_SPRINGS1.jpeg' },
      { name: 'Cone Crusher Parts', desc: 'Mantle, concave, bowl liner and other cone crusher wear parts.', image: '/images/HEAVY_SPRINGS2.jpeg' },
      { name: 'VSI/Impact Crusher Parts', desc: 'Wear parts for VSI and horizontal shaft impact crushers.', image: '/images/Crusher_boults.jpeg' },
    ],
  },
  'conveyor-components': {
    h1: 'Conveyor System Parts Exporter',
    h2: 'Conveyor System Components',
    metaTitle: 'Conveyor Rollers & System Parts Exporter India',
    description: 'Exporter of conveyor idler rollers, impact rollers, drum rollers, belts and conveyor system components from India.',
    keywords: 'conveyor rollers exporter, conveyor idler rollers supplier, conveyor impact rollers manufacturer, drum roller exporter India',
    heroImage: '/images/CONVEYOR_IDLER_ROLLERS_&_FRAME.jpeg',
    products: [
      { name: 'Conveyor Idler Rollers', desc: 'Complete idler roller sets with frame for mining, quarry and cement plants.', image: '/images/CONVEYOR_IDLER_ROLLERS_&_FRAME.jpeg', bestseller: true },
      { name: 'Conveyor Impact Rollers', desc: 'Rubber ring cushioned impact rollers for belt loading points.', image: '/images/Impact_Rollers1.jpeg', bestseller: true },
      { name: 'Conveyor Drum Rollers', desc: 'Drive and tail end drum rollers for conveyor systems.', image: '/images/DRUM_ROLLER.jpeg' },
      { name: 'Conveyor Belts', desc: 'EP fabric rubber conveyor belts for bulk material handling.', image: '/images/CONVEYOR_BELT.jpeg' },
      { name: 'Conveyor Side Rollers', desc: 'Guide and side rollers for belt alignment and tracking.', image: '/images/GUIDE_ROLLERS.jpeg' },
      { name: 'Rubber U-Bidding', desc: 'Skirting rubber for conveyor loading zones to prevent spillage.', image: '/images/Rubber_U_-_Bidding.jpeg' },
    ],
  },
  'vibrating-screen': {
    h1: 'Vibrating Screen Machines & Spares',
    h2: 'Vibrating Screen Equipment',
    metaTitle: 'Vibrating Screen Machine Exporter India',
    description: 'Vibrating screen machines, wiremesh screens, bearing housings and spare parts exporter from India.',
    keywords: 'vibrating screen machine exporter, crusher wiremesh screen supplier, screen bearing housing exporter India',
    heroImage: '/images/Vibrating_Screen.png',
    products: [
      { name: 'Vibrating Screen Machine', desc: 'Linear and circular motion vibrating screens for material classification.', image: '/images/Vibrating_Screen.png' },
      { name: 'Screen Bearing Housing', desc: 'Heavy-duty bearing housings for vibrating screens.', image: '/images/Crusher_Vibrator_Bearings.jpeg' },
      { name: 'Wiremesh Screens', desc: 'Woven wire mesh screens in mild steel, SS and manganese steel.', image: '/images/WiremeshScreens.webp', bestseller: true },
      { name: 'Crusher Heavy Wiremesh', desc: 'Heavy gauge crimped wiremesh for primary screening applications.', image: '/images/WiremeshScreens.webp' },
      { name: 'Vibro Motor', desc: 'Industrial vibration motors with adjustable eccentric weights.', image: '/images/Vibro_Motor.jpeg' },
      { name: 'Vibrating Screen Shaft', desc: 'Eccentric shafts for vibrating screens with precision machining.', image: '/images/Vibrating_Screen_Shaft_(Excentric_shaft).jpeg' },
    ],
  },
  'industrial-components': {
    h1: 'Industrial Engineering Components',
    h2: 'Engineering & Industrial Components',
    metaTitle: 'Industrial Engineering Components Exporter India',
    description: 'Exporter of perforated sheets, industrial motors, foundation bolts, toggle bearings and engineering components from India.',
    keywords: 'engineering components exporter India, perforated sheet supplier, industrial motor exporter, toggle bearing supplier',
    heroImage: '/images/Perforated_sheets.jpeg',
    products: [
      { name: 'Perforated Sheets', desc: 'Metal perforated sheets in MS, SS and aluminum for screening and filtration.', image: '/images/Perforated_sheets.jpeg' },
      { name: 'Industrial Motors', desc: 'IE2/IE3 energy-efficient motors for industrial machinery.', image: '/images/INDUSTRIAL_MOTOR.jpeg' },
      { name: 'Foundation Bolts', desc: 'Heavy-duty anchor and foundation bolts for machinery installation.', image: '/images/CRUSHER_PEDIST_AL_BOULTS_1.jpeg' },
      { name: 'Toggle Bearings', desc: 'Jaw crusher toggle bearings for smooth toggle plate movement.', image: '/images/TOGGAL_BEARINGS.jpeg' },
      { name: 'Pillow Block Bearing', desc: 'UCF/UCP series pillow block bearings for industrial shaft mounting.', image: '/images/PELLOW_BLOCK.jpeg' },
      { name: 'Pedestal Bearing', desc: 'Heavy-duty plummer block bearings for demanding applications.', image: '/images/Pedistal_Bearing.jpeg' },
      { name: 'T-Boults', desc: 'Anti-vibration clamping bolts for screen mesh panels.', image: '/images/vibrator_clamping_boults.jpeg' },
    ],
  },
}

export default function ProductCategory() {
  const { categoryId } = useParams()
  const meta = categoryMeta[categoryId]
  const catInfo = productCategories.find(c => c.id === categoryId)

  if (!meta || !catInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Category Not Found</h1>
          <Link to="/products" className="btn-primary">Back to Products</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOMeta
        title={meta.h1}
        metaTitle={meta.metaTitle}
        description={meta.description}
        keywords={meta.keywords}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-blue-950 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={meta.heroImage} alt={meta.h1} className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-cyan-400 transition-colors">Products</Link>
              <span>/</span>
              <span className="text-cyan-400">{catInfo.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{meta.h1}</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">{catInfo.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Request Specifications</Link>
              <Link to="/contact?type=pricelist" className="btn-secondary">Ask for Price List</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{meta.h2}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                High-quality {catInfo.name.toLowerCase()} for export from India. Competitive prices, quality inspection, and global delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meta.products.map((product, i) => (
              <ScrollReveal key={i} delay={i * 0.08} variant="fadeUp">
                <motion.div whileHover={{ y: -8 }} className="product-card group flex flex-col h-full">
                  <div className="relative overflow-hidden h-52 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.bestseller && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">⭐ Bestseller</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="font-bold text-slate-800 text-lg mb-2">{product.name}</h2>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">{product.desc}</p>
                    <div className="flex gap-2 mt-auto">
                      <Link to="/contact" className="btn-primary text-xs px-4 py-2 flex-1 justify-center">
                        Request Quote
                      </Link>
                      <Link to="/contact?type=specs" className="btn-outline text-xs px-4 py-2">
                        Specs
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links to Other Categories */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Explore More Product Categories</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {productCategories.filter(c => c.id !== categoryId).map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.1}>
                <Link to={cat.slug} className="glass-card-light p-5 flex items-center gap-4 group hover:shadow-lg transition-shadow">
                  <img src={cat.image} alt={cat.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors text-sm">{cat.name}</h3>
                    <span className="text-xs text-cyan-600">View Products →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to Industries and Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/industries" className="glass-card-light px-6 py-3 text-slate-700 hover:text-cyan-600 font-medium text-sm transition-colors">
              🏭 Industries We Serve
            </Link>
            <Link to="/services" className="glass-card-light px-6 py-3 text-slate-700 hover:text-cyan-600 font-medium text-sm transition-colors">
              🚢 Export Process & Services
            </Link>
            <Link to="/contact" className="btn-primary text-sm">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
