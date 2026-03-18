import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { label: 'Crusher Spare Parts', to: '/products/crusher-spare-parts' },
      { label: 'Conveyor Components', to: '/products/conveyor-components' },
      { label: 'Vibrating Screen', to: '/products/vibrating-screen' },
      { label: 'Industrial Components', to: '/products/industrial-components' },
    ]
  },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-cyan-100/50 py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/KRUSHVEL_icon.jpg" alt="Krushvel Logo" className="h-14 w-14 rounded-full border-2 border-cyan-400 object-cover" />
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xl font-bold block ${scrolled ? 'text-slate-800' : 'text-white'}`}>KRUSHVEL</span>
              <img src="/images/Flag_of_India.svg" alt="India" className="h-5 w-auto" title="India" />
            </div>
            <span className={`text-xs block ${scrolled ? 'text-cyan-600' : 'text-cyan-200'}`}>GLOBAL EXIM</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.to} className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.to)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? scrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                      : scrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
                {link.children && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>
              {link.children && dropdownOpen === link.to && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                >
                  {link.children.map(child => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        className="block px-4 py-3 text-sm text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl"
          >
            <ul className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium text-sm transition-all ${isActive ? 'text-cyan-600 bg-cyan-50' : 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-cyan-100 pl-2">
                      {link.children.map(child => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className="block px-3 py-2 text-xs text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                  Get Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
