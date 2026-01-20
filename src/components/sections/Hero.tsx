import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback, memo } from 'react'

const AnimatedRoleText = memo(({ delay = 0 }: { delay?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = useMemo(() => [
    "MERN Stack Developer",
    "UI/UX Designer", 
    "Digital Marketer"
  ], [])

  const updateText = useCallback(() => {
    const currentRole = roles[currentRoleIndex]
    
    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else {
        setTimeout(() => setIsDeleting(true), 1200)
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }
  }, [charIndex, currentRoleIndex, isDeleting, roles])

  useEffect(() => {
    const timer = setTimeout(updateText, isDeleting ? 30 : 70)
    return () => clearTimeout(timer)
  }, [updateText, isDeleting])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-5 bg-current ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  )
})

AnimatedRoleText.displayName = 'AnimatedRoleText'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="grow flex flex-col items-center justify-center px-6 pt-24 md:pt-35 pb-12 w-full max-w-7xl mx-auto relative">
        
        {/* Animated Background Box Element - (Returned) */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rotate-45 will-change-transform"
            animate={{
              y: [0, -30, 0],
              x: [0, -15, 0],
              rotate: [45, 90, 45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full will-change-transform"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div 
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Hey, I&apos;m
              </h2>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center justify-center lg:justify-start gap-3">
                Md Mahi Alam
                <motion.span 
                  className="inline-block"
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
                <span className="w-8 h-[2px] bg-blue-500" />
                <p>I am a <span className="font-bold text-blue-500"><AnimatedRoleText /></span></p>
              </div>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
              🚀 Turning ideas into Stunning Websites 💻<br/>| Available for projects and collaborations 🌟
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://wa.me/8801979922268"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-xl transition-all duration-300 mt-4 bubble-hover relative overflow-hidden"
              >
                Say Hello
                <span className="material-icons text-lg group-hover:rotate-45 transition-transform duration-300">send</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center" 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
              {/* Profile Image with Hover Effect */}
              <motion.div 
                className="absolute inset-0 overflow-hidden blob-shape shadow-2xl z-10"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  alt="Md Mahi Alam" 
                  className="w-full h-full object-cover" 
                  src="/rahatImg.png" 
                  fill
                  priority 
                />
              </motion.div>

              {/* Experience Card - (No infinite animation, only Hover) */}
              <motion.div 
                className="absolute -left-10 top-2 md:top-12 z-20 bg-white/95 dark:bg-gray-800/95 p-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 dark:border-gray-700 bubble-card cursor-default"
                whileHover={{ 
                  scale: 1.15, 
                  y: -5, 
                  boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600">
                  <span className="material-icons">work_history</span>
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-gray-900 dark:text-white">3+</span>
                  <span className="text-[10px] text-gray-500 uppercase font-medium">Years Exp.</span>
                </div>
              </motion.div>
              
              {/* Problem Solving Card - (Returned & Hover only) */}
              <motion.div 
                className="absolute -right-10 top-6 z-20 bg-white/95 dark:bg-gray-800/95 p-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 dark:border-gray-700 bubble-card cursor-default "
                whileHover={{ 
                  scale: 1.15, 
                  y: -5, 
                  boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-purple-50 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600">
                  <span className="material-icons">psychology</span>
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-gray-900 dark:text-white">120+</span>
                  <span className="text-[10px] text-gray-500 uppercase font-medium">Problems</span>
                </div>
              </motion.div>
              
              {/* Projects Card - (Hover only) */}
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 bg-white/95 dark:bg-gray-800/95 p-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 dark:border-gray-700 min-w-max bubble-card cursor-default"
                whileHover={{ 
                  scale: 1.15, 
                  y: -8, 
                  boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded-lg text-green-600">
                  <span className="material-icons">check_circle</span>
                </div>
                <div className="leading-tight text-left">
                  <span className="block font-bold text-gray-900 dark:text-white">150+</span>
                  <span className="text-[10px] text-gray-500 uppercase font-medium">Projects</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}