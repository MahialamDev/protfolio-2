import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const statsData = [
  { number: "03+", label: "Years\nExperience", icon: "work_history" },
  { number: "50+", label: "Projects\nCompleted", icon: "assignment_turned_in" },
  { number: "05+", label: "Companies\nWorked", icon: "business" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55] as const
    }
  }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="w-full bg-white dark:bg-gray-800 py-20 px-6 transition-colors duration-300 relative" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
            animate={isInView ? { 
              backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
              backgroundSize: "200% 200%",
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}}
            transition={{ 
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
            style={{ 
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: isInView ? "transparent" : undefined
            }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Introduction
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="flex flex-col items-center text-center md:text-left md:items-start space-y-12 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Description */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl border border-blue-100 dark:border-gray-600 shadow-lg"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-4">
                I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Web Developer</span> with a knack for creating seamless digital experiences. With a solid foundation in both frontend and backend technologies, I turn complex requirements into user-friendly solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                My journey involves continuous learning and adapting to the newest web trends to deliver <span className="font-semibold text-purple-600 dark:text-purple-400">high-quality, scalable code</span>. I enjoy collaborative environments and tackling challenging problems.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 w-full py-8"
            variants={itemVariants}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative mb-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="material-icons text-white text-2xl">{stat.icon}</span>
                  </div>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <motion.span 
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  animate={isInView ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide text-center whitespace-pre-line">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Modern Standard CTA Button */}
          <motion.div 
            className="pt-8 w-full flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3.5 rounded-xl flex items-center gap-3 font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20 backdrop-blur-sm overflow-hidden"
              onClick={() => {
                // Create a temporary link element for download
                const link = document.createElement('a')
                link.href = '/Mahialam_Resume.pdf'
                link.download = 'Mahialam_Resume.pdf'
                link.target = '_blank'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                
                // Optional: Show a brief success message
                console.log('CV download initiated')
              }}
              title="Download Mahi Alam's CV"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Subtle background shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 w-full"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
              
              {/* Download icon */}
              <motion.div className="relative z-10 flex items-center justify-center">
                <motion.span 
                  className="material-icons text-lg"
                  animate={{ 
                    y: [0, -1, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  download
                </motion.span>
              </motion.div>
              
              {/* Button text */}
              <span className="relative z-10 font-semibold tracking-wide">
                Download CV
              </span>
              
              {/* Modern arrow icon */}
              <motion.div 
                className="relative z-10 flex items-center justify-center"
                animate={{ 
                  x: [0, 2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <motion.span 
                  className="material-icons text-lg group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  arrow_forward
                </motion.span>
              </motion.div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              
              {/* Click ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ 
                  scale: [0, 1.1, 0],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            
            {/* Optional: File info tooltip */}
            <motion.div
              className="absolute mt-16 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              PDF • 2.1 MB
              <div className="absolute -top-1 left-1/2 md:left-4 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}