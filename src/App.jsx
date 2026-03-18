import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Contact from './pages/Contact'
import WhyChooseUs from './pages/WhyChooseUs'
import GlobalMarkets from './pages/GlobalMarkets'
import Certifications from './pages/Certifications'
import ExportProcess from './pages/ExportProcess'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<ProductCategory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/global-markets" element={<GlobalMarkets />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/export-process" element={<ExportProcess />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center pt-20">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-cyan-600 mb-4">404</h1>
                <p className="text-xl text-slate-600 mb-8">Page not found</p>
                <a href="/" className="btn-primary">Go Home</a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
