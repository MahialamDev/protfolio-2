'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'devicon-linkedin-plain',
    url: 'https://www.linkedin.com/in/mahialam-rahat/',
    color: '#0077b5',
    hoverColor: 'hover:text-[#0077b5]'
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
    url: 'https://github.com/MahialamDev',
    color: '#333',
    hoverColor: 'hover:text-black dark:hover:text-white'
  },
  {
    name: 'Twitter',
    icon: 'devicon-twitter-original',
    url: 'https://x.com/mahialam_rahat',
    color: '#1DA1F2',
    hoverColor: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'Facebook',
    icon: 'devicon-facebook-plain',
    url: 'https://www.facebook.com/mahialam.rahat2/',
    color: '#1877f2',
    hoverColor: 'hover:text-[#1877f2]'
  }
]

export default function SocialSidebar() {
  return (
    <motion.div 
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: 1.7 + (index * 0.1),
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <motion.a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100/50 dark:border-gray-700/50 text-gray-500 dark:text-gray-400 ${social.hoverColor} transition-all duration-300 flex items-center justify-center`}
            whileHover={{ 
              scale: 1.1,
              y: -2,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Visit ${social.name} profile`}
          >
            <i className={`${social.icon} text-xl group-hover:drop-shadow-sm transition-all duration-300`}></i>
            
            {/* Tooltip */}
            <motion.div
              className="absolute left-full ml-3 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {social.name}
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-gray-900 dark:bg-white transform rotate-45 -translate-y-1/2" />
            </motion.div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: social.color }}
            />
          </motion.a>
        </motion.div>
      ))}

      {/* Connecting line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent -translate-x-1/2 -z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ 
          delay: 2,
          duration: 1,
          ease: "easeOut"
        }}
      />
    </motion.div>
  )
}