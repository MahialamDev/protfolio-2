import { motion, useInView } from 'framer-motion'
import { useRef, useState, memo } from 'react'

// Official technology colors mapping
const getSkillColor = (skillName: string) => {
  const colorMap: { [key: string]: string } = {
    'HTML5': '#E34F26',
    'CSS3': '#1572B6', 
    'JavaScript': '#F7DF1E',
    'React.JS': '#61DAFB',
    'Next.JS': '#000000',
    'Tailwind': '#06B6D4',
    'Node.JS': '#339933',
    'Express.JS': '#000000',
    'MongoDB': '#47A248',
    'SQL': '#00758F',
    'Docker': '#2496ED',
    'Kubernetes': '#326CE5'
  }
  return colorMap[skillName] || '#3B82F6' // fallback to blue
}

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

const Skills = () => {
  const ref = useRef(null)
  const skillsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-50px" })
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  return (
    <div className="w-full bg-white dark:bg-gray-800 py-20 px-6 transition-colors duration-300 relative" id="skills">
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
                className="relative shrink-0 w-20 h-20 bg-white dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-600 group cursor-pointer will-change-transform"
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
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays for mobile scroll */}
          <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white dark:from-gray-800 to-transparent md:hidden pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white dark:from-gray-800 to-transparent md:hidden pointer-events-none"></div>
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
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{skill.level}</span>
                  </div>
                  
                  {/* Progress bar with official technology color */}
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${getSkillColor(skill.name)}40, ${getSkillColor(skill.name)}80)`
                      }}
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
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{skill.level}</span>
                  </div>
                  
                  {/* Progress bar with official technology color */}
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${getSkillColor(skill.name)}40, ${getSkillColor(skill.name)}80)`
                      }}
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
    </div>
  )
}

export default memo(Skills)