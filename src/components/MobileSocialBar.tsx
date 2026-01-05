'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'devicon-linkedin-plain',
    url: 'https://www.linkedin.com/in/mahialam-rahat/',
    color: '#0077b5'
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
    url: 'https://github.com/MahialamDev',
    color: '#333'
  },
  {
    name: 'Twitter',
    icon: 'devicon-twitter-original',
    url: 'https://x.com/mahialam_rahat',
    color: '#1DA1F2'
  },
  {
    name: 'Facebook',
    icon: 'devicon-facebook-plain',
    url: 'https://www.facebook.com/mahialam.rahat2/',
    color: '#1877f2'
  }
]

export default function MobileSocialBar() {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 px-6 py-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: 2,
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <div className="flex justify-center items-center space-x-8">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            whileHover={{ 
              scale: 1.2,
              y: -2
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 2.2 + (index * 0.1),
              duration: 0.4
            }}
            aria-label={`Visit ${social.name} profile`}
          >
            <i className={`${social.icon} text-2xl`}></i>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}