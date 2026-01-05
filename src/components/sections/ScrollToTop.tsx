'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    const handleScroll = () => {
      requestAnimationFrame(toggleVisibility)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    // Check if Lenis is available
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-24 right-6 z-50"
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: -180
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0,
            rotate: 180
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              y: -2,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            {/* Progress ring */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90" 
              viewBox="0 0 36 36"
            >
              <path
                className="text-gray-200 dark:text-gray-700"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className="text-blue-500"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{
                  strokeDasharray: "100, 100",
                }}
                animate={{
                  strokeDashoffset: 100 - scrollProgress
                }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Arrow icon */}
            <motion.span 
              className="material-icons text-lg relative z-10 group-hover:text-blue-500 transition-colors duration-300"
              animate={{ 
                y: [0, -2, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              keyboard_arrow_up
            </motion.span>

            {/* Tooltip */}
            <motion.div
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              Back to top
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white transform rotate-45 -translate-y-1/2" />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}