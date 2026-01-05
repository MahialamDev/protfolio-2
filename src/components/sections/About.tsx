import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import BubbleContainer from '../BubbleContainer'


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
    <BubbleContainer 
      className="w-full bg-white dark:bg-gray-800 py-20 px-6 transition-colors duration-300" 
      id="about"
      bubbleCount={6}
      bubbleColors={[
        'rgba(59, 130, 246, 0.08)',
        'rgba(139, 92, 246, 0.08)',
        'rgba(236, 72, 153, 0.08)',
        'rgba(16, 185, 129, 0.08)',
      ]}
    >
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
          
          {/* CTA Button */}
          <motion.div 
            className="pt-4 w-full flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // Create a temporary link element for download
                  const link = document.createElement('a')
                  link.href = '/MahialamCv.pdf'
                  link.download = 'Mahi_Alam_CV.pdf'
                  link.target = '_blank'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                  
                  // Optional: Show a brief success message
                  console.log('CV download initiated')
                }}
                title="Download Mahi Alam's CV"
              >
                <span>Download CV</span>
                <motion.span 
                  className="material-icons text-xl"
                  animate={{ 
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  download
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </BubbleContainer>
  )
}