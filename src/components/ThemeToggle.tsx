'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark 
            ? 'linear-gradient(45deg, #1f2937, #374151)' 
            : 'linear-gradient(45deg, #e5e7eb, #f3f4f6)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle Circle */}
      <motion.div
        className="relative w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
          rotate: isDark ? 180 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Icon */}
        <motion.span
          className="material-icons text-xs"
          animate={{
            color: isDark ? '#fbbf24' : '#f59e0b',
            rotate: isDark ? 0 : -180
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? 'dark_mode' : 'light_mode'}
        </motion.span>
      </motion.div>
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark 
            ? '0 0 20px rgba(59, 130, 246, 0.3)' 
            : '0 0 20px rgba(251, 191, 36, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}