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
      // Typing - much faster
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else {
        // Finished typing, shorter wait then start deleting
        setTimeout(() => setIsDeleting(true), 800)
      }
    } else {
      // Deleting - faster
      if (charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }
  }, [charIndex, currentRoleIndex, isDeleting, roles])

  useEffect(() => {
    const timer = setTimeout(updateText, delay + (isDeleting ? 25 : 60))
    return () => clearTimeout(timer)
  }, [updateText, delay, isDeleting])

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
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Reduced floating elements for better performance */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full will-change-transform"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
          />
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
              delay: 1,
            }}
          />
        </motion.div>

        {/* Grid Layout with Enhanced Animation */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Left Text Column with Enhanced Animations */}
          <motion.div 
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.h2 
                className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 relative"
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: "#3b82f6",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Hey, I&apos;m
                </motion.span>
              </motion.h2>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  
                >
                  Md Mahi Alam
                </motion.span>
                
                <motion.span 
                  className="inline-block text-3xl md:text-5xl"
                  animate={{ 
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                    y: [0, -5, 0, -3, 0, -7, 0],
                    scale: [1, 1.2, 1, 1.1, 1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 3, 
                    ease: "easeInOut",
                    type: "tween"
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: 360,
                    transition: { duration: 0.5, type: "spring", stiffness: 300 }
                  }}
                >
                  👋
                </motion.span>
              </motion.h1>

              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-2 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 120
                }}
              >
                <motion.span 
                  className="h-[2px] bg-gray-400 dark:bg-gray-500 inline-block"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 32, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 1.4, 
                    ease: "easeOut" 
                  }}
                />
                
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    >
                      I am a  {" "}
                    </motion.span>
                    
                    <motion.span
                      className="inline-block font-bold relative text-lg md:text-xl"
                      initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
                      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                      transition={{ 
                        duration: 1, 
                        delay: 2.0, 
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotateY: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.span
                        className="font-bold relative z-10"
                        animate={{
                          color: ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 2.5
                        }}
                      >
                        <AnimatedRoleText delay={500} />
                      </motion.span>
                      
                      {/* Enhanced Glowing underline effect */}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0, opacity: 0, scaleY: 0 }}
                        animate={{ 
                          width: "100%", 
                          opacity: 1, 
                          scaleY: 1,
                          boxShadow: [
                            "0 0 0px rgba(59, 130, 246, 0)",
                            "0 0 20px rgba(59, 130, 246, 0.6)",
                            "0 0 0px rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ 
                          width: { duration: 1, delay: 2.5, ease: "easeOut" },
                          opacity: { duration: 1, delay: 2.5 },
                          scaleY: { duration: 0.5, delay: 2.5 },
                          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3.5 }
                        }}
                      />
                      
                      {/* Enhanced Sparkle effects */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-yellow-400 text-sm"
                        initial={{ scale: 0, rotate: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1.5, 0], 
                          rotate: [0, 180, 360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: 3.0, 
                          repeat: Infinity, 
                          repeatDelay: 4,
                          ease: "easeInOut",
                          type: "tween"
                        }}
                      >
                        ✨
                      </motion.div>
                      
                      <motion.div
                        className="absolute -bottom-2 -left-1 text-blue-400 text-xs"
                        initial={{ scale: 0, rotate: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1.3, 0], 
                          rotate: [0, -180, -360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: 3.5, 
                          repeat: Infinity, 
                          repeatDelay: 4,
                          ease: "easeInOut",
                          type: "tween"
                        }}
                      >
                        💫
                      </motion.div>
                      
                      {/* Additional floating particles */}
                      <motion.div
                        className="absolute top-0 left-1/2 text-purple-400 text-xs"
                        initial={{ scale: 0, y: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1, 0], 
                          y: [0, -20, -40],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          delay: 4.0, 
                          repeat: Infinity, 
                          repeatDelay: 6,
                          ease: "easeOut",
                          type: "tween"
                        }}
                      >
                        ⭐
                      </motion.div>
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-gray-500 dark:text-gray-400 max-w-md text-sm md:text-base leading-relaxed" 
              initial={{ opacity: 0, y: 30, scale: 0.9 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ 
                duration: 0.8, 
                delay: 2.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                color: "#6b7280",
                transition: { duration: 0.3 }
              }}
            >
              <motion.span
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀 Turning ideas into Stunning Websites 💻<br/>| Available for projects and collaborations 🌟
              </motion.span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.8 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ 
                duration: 0.8, 
                delay: 2.8,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(59, 130, 246, 0.1)",
                    "0 8px 40px rgba(59, 130, 246, 0.3)",
                    "0 4px 20px rgba(59, 130, 246, 0.1)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block rounded-2xl"
              >
                <a 
                  href="https://wa.me/8801979922268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mt-4 bubble-hover relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", type: "tween" }}
                  >
                    Say Hello
                  </motion.span>
                  <motion.span 
                    className="material-icons text-lg group-hover:rotate-45 transition-transform duration-300"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5,
                      type: "tween"
                    }}
                  >
                    send
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image Column with Enhanced Animations */}
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center py-4 md:py-8 lg:py-0" 
            initial={{ opacity: 0, x: 100, scale: 0.8 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            transition={{ 
              duration: 1.2, 
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.5, -0.5, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute -inset-4 bg-linear-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  type: "tween"
                }}
              />

              {/* Hero Image with Enhanced Animations */}
              <motion.div 
                className="absolute inset-0 overflow-hidden blob-shape shadow-2xl" 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image 
                    alt="Portrait of Md Mahi Alam" 
                    className="w-full h-full object-cover object-center" 
                    src="/rahatImg.png" 
                    width={384} 
                    height={384} 
                    priority 
                    quality={95} 
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px" 
                  />
                  
                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 blob-shape border-2 border-transparent"
                    animate={{
                      borderColor: [
                        "rgba(59, 130, 246, 0)",
                        "rgba(59, 130, 246, 0.5)",
                        "rgba(139, 92, 246, 0.5)",
                        "rgba(236, 72, 153, 0.5)",
                        "rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Stats Cards with Bubble Animations - Optimized Positioning */}
              {/* Experience Card - Top Left */}
              <motion.div 
                className="absolute z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg shadow-blue-500/10 flex items-center gap-2 md:gap-3 border border-gray-100 dark:border-gray-700 bubble-card
                           -left-4 sm:-left-6 md:-left-8 lg:-left-12 
                           top-8 sm:top-12 md:top-16 lg:top-20
                           scale-75 sm:scale-85 md:scale-90 lg:scale-100"
                initial={{ opacity: 0, x: -60, y: 30, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.0, type: "tween" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.0, type: "tween" }
                  }}
                  className="contents"
                >
                <div className="bg-blue-50 dark:bg-blue-900/30 p-1.5 md:p-2 rounded-md md:rounded-lg text-blue-600 dark:text-blue-400">
                  <span className="material-icons text-sm md:text-lg">work_history</span>
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-sm md:text-lg text-gray-900 dark:text-white">3+</span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Years<br/>Experience</span>
                </div>
                </motion.div>
              </motion.div>
              
              {/* Problem Solving Card - Top Right */}
              <motion.div 
                className="absolute z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg shadow-purple-500/10 flex items-center gap-2 md:gap-3 border border-gray-100 dark:border-gray-700 bubble-card
                           -right-4 sm:-right-6 md:-right-8 lg:-right-12 
                           top-4 sm:top-6 md:top-8 lg:top-12
                           scale-75 sm:scale-85 md:scale-90 lg:scale-100"
                initial={{ opacity: 0, x: 60, y: -30, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -2, 2, 0]
                  }}
                  transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2, type: "tween" },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.2, type: "tween" }
                  }}
                  className="contents"
                >
                <div className="bg-purple-50 dark:bg-purple-900/30 p-1.5 md:p-2 rounded-md md:rounded-lg text-purple-600 dark:text-purple-400">
                  <span className="material-icons text-sm md:text-lg">psychology</span>
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-sm md:text-lg text-gray-900 dark:text-white">120+</span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Problem<br/>Solving</span>
                </div>
                </motion.div>
              </motion.div>
              
              {/* Projects Card - Bottom Center */}
              <motion.div 
                className="absolute z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg shadow-green-500/10 flex items-center gap-2 md:gap-3 border border-gray-100 dark:border-gray-700 min-w-max bubble-card
                           left-1/2 -translate-x-1/2 
                           -bottom-2 sm:-bottom-4 md:-bottom-6 lg:-bottom-8
                           scale-75 sm:scale-85 md:scale-90 lg:scale-100"
                initial={{ opacity: 0, y: 60, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -8,
                  boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 3.4, type: "tween" },
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.4, type: "tween" }
                  }}
                  className="contents"
                >
                <div className="bg-green-50 dark:bg-green-900/30 p-1.5 md:p-2 rounded-md md:rounded-lg text-green-600 dark:text-green-400">
                  <span className="material-icons text-sm md:text-lg">check_circle</span>
                </div>
                <div className="leading-tight text-left">
                  <span className="block font-bold text-xs sm:text-sm md:text-lg text-gray-900 dark:text-white">150+</span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Finished<br/>Projects</span>
                </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="lg:hidden mt-16 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <motion.span 
            className="text-xs uppercase tracking-widest font-medium"
            animate={{ 
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            Scroll
          </motion.span>
          <motion.span 
            className="material-icons text-sm"
            animate={{ 
              y: [0, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 0.5,
              type: "tween"
            }}
          >
            keyboard_arrow_down
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}