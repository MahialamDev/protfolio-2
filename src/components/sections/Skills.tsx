import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import BubbleContainer from '../BubbleContainer'

const techStack = [
  { icon: "devicon-javascript-plain", color: "#F7DF1E", name: "JavaScript" },
  { icon: "devicon-react-original", color: "#61DAFB", name: "React" },
  { icon: "devicon-nextjs-plain", color: "currentColor", name: "Next.js" },
  { icon: "devicon-tailwindcss-plain", color: "#06B6D4", name: "Tailwind" },
  { icon: "devicon-nodejs-plain", color: "#339933", name: "Node.js" },
  { icon: "devicon-express-original", color: "currentColor", name: "Express" },
  { icon: "devicon-mongodb-plain", color: "#47A248", name: "MongoDB" }
]

const frontendSkills = [
  { name: "HTML5", level: "Expert", percentage: 95 },
  { name: "Next.JS", level: "Expert", percentage: 90 },
  { name: "CSS3", level: "Expert", percentage: 92 },
  { name: "Tailwind", level: "Intermediate", percentage: 85 },
  { name: "JavaScript", level: "Expert", percentage: 93 },
  { name: "React.JS", level: "Expert", percentage: 88 }
]

const backendSkills = [
  { name: "Node.JS", level: "Expert", percentage: 87 },
  { name: "SQL", level: "Intermediate", percentage: 75 },
  { name: "Express.JS", level: "Expert", percentage: 90 },
  { name: "Docker", level: "Intermediate", percentage: 70 },
  { name: "MongoDB", level: "Expert", percentage: 85 },
  { name: "Kubernetes", level: "Intermediate", percentage: 65 }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55] as const
    }
  }
}

export default function Skills() {
  const ref = useRef(null)
  const skillsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-50px" })
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  return (
    <BubbleContainer 
      className="w-full bg-white dark:bg-gray-800 py-20 px-6 transition-colors duration-300" 
      id="skills"
      bubbleCount={7}
      bubbleColors={[
        'rgba(16, 185, 129, 0.08)',
        'rgba(59, 130, 246, 0.08)',
        'rgba(139, 92, 246, 0.08)',
        'rgba(245, 158, 11, 0.08)',
      ]}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
            animate={isInView ? { 
              backgroundImage: "linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6)",
              backgroundSize: "200% 200%",
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            } : {}}
            transition={{ 
              backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
            }}
            style={{ 
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: isInView ? "transparent" : undefined
            }}
          >
            Technologies
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Tech Stack
          </motion.p>
        </motion.div>
        
        {/* Tech Stack Icons */}
        <motion.div 
          ref={ref}
          className="w-full overflow-hidden mb-20 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-6 overflow-x-auto hide-scroll pb-4 px-4 justify-start md:justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-600 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15,
                  y: -8,
                  rotateY: 15,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
                transition={{ duration: 0.3 }}
              >
                <motion.i 
                  className={`${tech.icon} text-4xl text-gray-700 dark:text-gray-300 transition-colors duration-300`}
                  animate={hoveredTech === index ? {
                    color: tech.color !== 'currentColor' ? tech.color : undefined,
                    scale: 1.1
                  } : {}}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={hoveredTech === index ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white transform rotate-45 -translate-y-1/2" />
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ 
                    background: tech.color !== 'currentColor' 
                      ? `radial-gradient(circle, ${tech.color}40, transparent)` 
                      : 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)'
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays for mobile scroll */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-gray-800 to-transparent md:hidden pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-gray-800 to-transparent md:hidden pointer-events-none"></div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">My Technical Level</p>
        </motion.div>
        
        <motion.div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2"
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          {/* Frontend Skills */}
          <motion.div 
            className="relative bg-white dark:bg-gray-700 rounded-[2rem] p-8 shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden group"
            variants={skillCardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <motion.h3 
              className="text-xl font-medium text-center text-gray-900 dark:text-white mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend Developer
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-y-6 relative z-10">
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-blue-500 text-base">verified</span>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{skill.level}</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="relative bg-white dark:bg-gray-700 rounded-[2rem] p-8 shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden group"
            variants={skillCardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full"
              animate={{ 
                rotate: -360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <motion.h3 
              className="text-xl font-medium text-center text-gray-900 dark:text-white mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Backend Developer
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-y-6 relative z-10">
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-green-500 text-base">verified</span>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{skill.level}</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.7 + (index * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </BubbleContainer>
  )
}