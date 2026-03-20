import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

// Language options for the custom dropdown
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', native: 'English' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', native: 'Español' },
  { code: 'fr', name: 'French', flag: '🇫🇷', native: 'Français' },
  { code: 'de', name: 'German', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'it', name: 'Italian', flag: '🇮🇹', native: 'Italiano' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹', native: 'Português' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', native: 'Русский' },
  { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳', native: '中文' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵', native: '日本語' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷', native: '한국어' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦', native: 'العربية' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', native: 'हिन्दी' },
  { code: 'th', name: 'Thai', flag: '🇹🇭', native: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳', native: 'Tiếng Việt' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷', native: 'Türkçe' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱', native: 'Polski' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱', native: 'Nederlands' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩', native: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', flag: '🇲🇾', native: 'Bahasa Melayu' },
]

// Animation variants for staggered entrance
const menuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
}

const languageDropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: {
      duration: 0.15,
      ease: 'easeIn',
    },
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const location = useLocation()
  const languageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setLanguageOpen(false)
  }, [location])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang)
    setLanguageOpen(false)
    
    // Trigger Google Translate
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = lang.code
      select.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-cyan-100/50 py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img 
            src="/images/KRUSHVEL_icon.jpg" 
            alt="Krushvel Logo" 
            className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <div className="flex items-center gap-2">
            <motion.span 
              className={`text-xl font-bold block ${scrolled ? 'text-slate-800' : 'text-white'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              KRUSHVEL
            </motion.span>
            <motion.img 
              src="/images/Flag_of_India.png" 
              alt="India" 
              className="h-5 w-5" 
              title="India"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            />
          </div>
          <motion.span 
            className={`text-xs block ${scrolled ? 'text-cyan-600' : 'text-cyan-200'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            GLOBAL EXIM
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.to} 
              className="relative"
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              onMouseEnter={() => link.children && setDropdownOpen(link.to)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? scrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                      : scrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
                {link.children && (
                  <svg className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen === link.to ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>
              {link.children && dropdownOpen === link.to && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                >
                  {link.children.map(child => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        className="block px-4 py-3 text-sm text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-150"
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          ))}
        </ul>

        {/* CTA Buttons & Language Selector */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative" ref={languageRef}>
            <motion.button
              onClick={() => setLanguageOpen(!languageOpen)}
              className={`p-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                scrolled 
                  ? 'bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-600' 
                  : 'bg-white/10 hover:bg-white/20 text-white hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Select language"
            >
              <span className="text-lg">{selectedLanguage.flag}</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${languageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>

            {/* Language Dropdown */}
            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  variants={languageDropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 max-h-80 overflow-y-auto"
                >
                  <div className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold">
                    Select Language
                  </div>
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-colors duration-150 ${
                        selectedLanguage.code === lang.code
                          ? 'bg-cyan-50 text-cyan-700'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-cyan-600'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{lang.native}</span>
                        <span className="text-xs text-slate-400">{lang.name}</span>
                      </div>
                      {selectedLanguage.code === lang.code && (
                        <svg className="w-4 h-4 ml-auto text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hidden Google Translate Element (for functionality) */}
          <div 
            id="google_translate_element" 
            ref={(el) => {
              if (el) el.style.display = 'none';
            }}
            style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}
          ></div>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=KrushvelGlobalExim@gmail.com" 
            className="p-2.5 rounded-lg bg-white/10 hover:bg-cyan-600 transition-colors"
            aria-label="Email">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="https://wa.me/919156087365" 
            className="p-2.5 rounded-lg bg-white/10 hover:bg-green-600 transition-colors"
            aria-label="WhatsApp">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/krushvelglobalexim/" 
            className="p-2.5 rounded-lg bg-white/10 hover:bg-pink-600 transition-colors"
            aria-label="Instagram">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/akshay-gulunjkar-41b556220" 
            className="p-2.5 rounded-lg bg-white/10 hover:bg-cyan-600 transition-colors"
            aria-label="LinkedIn">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Button */}
          <motion.button
            onClick={() => setLanguageOpen(!languageOpen)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              scrolled 
                ? 'text-slate-700 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label="Select language"
          >
            <span className="text-lg">{selectedLanguage.flag}</span>
          </motion.button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}
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
        </div>
      </nav>

      {/* Mobile Language Dropdown */}
      <AnimatePresence>
        {languageOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="text-xs font-semibold text-slate-400 mb-2 px-2">Select Language</div>
              <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all duration-150 ${
                      selectedLanguage.code === lang.code
                        ? 'bg-cyan-50 border-2 border-cyan-500'
                        : 'bg-slate-50 border-2 border-transparent hover:border-cyan-200'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`text-xs font-medium ${
                      selectedLanguage.code === lang.code ? 'text-cyan-700' : 'text-slate-700'
                    }`}>
                      {lang.native}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                        isActive ? 'text-cyan-600 bg-cyan-50' : 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-50'
                      }`
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
                </motion.li>
              ))}
              <li className="pt-2">
                <div className="flex gap-2 mb-3">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=KrushvelGlobalExim@gmail.com" 
                    className="flex-1 p-2.5 rounded-lg bg-slate-100 hover:bg-cyan-600 transition-colors flex items-center justify-center text-slate-700 hover:text-white"
                    aria-label="Email">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a href="https://wa.me/919156087365" 
                    className="flex-1 p-2.5 rounded-lg bg-slate-100 hover:bg-green-600 transition-colors flex items-center justify-center text-slate-700 hover:text-white"
                    aria-label="WhatsApp">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/krushvelglobalexim/" 
                    className="flex-1 p-2.5 rounded-lg bg-slate-100 hover:bg-pink-600 transition-colors flex items-center justify-center text-slate-700 hover:text-white"
                    aria-label="Instagram">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/akshay-gulunjkar-41b556220" 
                    className="flex-1 p-2.5 rounded-lg bg-slate-100 hover:bg-cyan-600 transition-colors flex items-center justify-center text-slate-700 hover:text-white"
                    aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
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
