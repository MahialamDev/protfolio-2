'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import ThemeToggle from '../ThemeToggle'

const navItems = [
  { name: 'Home', href: '#', icon: 'home' },
  { name: 'About', href: '#about', icon: 'person' },
  { name: 'Education', href: '#education', icon: 'school' },
  { name: 'Skills', href: '#skills', icon: 'code' },
  { name: 'Projects', href: '#projects', icon: 'work' },
  { name: 'Contact', href: '#contact', icon: 'mail' }
]

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animation for navbar on mount
    if (navRef.current && logoRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      )
      
      gsap.fromTo(logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      )
    }

    // Scroll effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // GSAP animation for mobile menu
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(menuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        )
      }
    }
  }, [isMenuOpen])

  const handleNavClick = (name: string) => {
    setActiveSection(name)
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.header
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              ref={logoRef}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a 
                href="#" 
                className="flex items-center space-x-2 group"
                whileHover={{ x: 2 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      rotate: 360,
                      boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">M</span>
                  </motion.div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Mahi Alam
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-2 group ${
                      activeSection === item.name
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-icons text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                    
                    {/* Active underline */}
                    {activeSection === item.name && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        layoutId="activeUnderline"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ x: '-50%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.a>
                </motion.div>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="https://wa.me/8801979922268"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span>Let's Talk</span>
                <motion.span 
                  className="material-icons text-lg"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  arrow_forward
                </motion.span>
              </motion.a>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1.3 }}
              >
                <motion.span 
                  className="material-icons text-xl"
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? 'close' : 'menu'}
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className={`relative flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.name
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="material-icons">{item.icon}</span>
                    <span>{item.name}</span>
                    
                    {/* Active indicator for mobile */}
                    {activeSection === item.name && (
                      <motion.div
                        className="absolute right-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
                
                {/* Mobile CTA */}
                <motion.a
                  href="https://wa.me/8801979922268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let's Talk</span>
                  <span className="material-icons">arrow_forward</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrolled ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}