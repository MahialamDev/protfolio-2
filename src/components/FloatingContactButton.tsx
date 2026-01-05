'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FloatingContactButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.a
        href="https://wa.me/8801979922268"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          y: -2,
          boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label="Message me on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <motion.span 
          className="material-icons text-lg"
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          chat
        </motion.span>

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          Message on WhatsApp
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 dark:bg-white transform rotate-45 -translate-y-1/2" />
        </motion.div>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Online indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.a>
    </motion.div>
  )
}