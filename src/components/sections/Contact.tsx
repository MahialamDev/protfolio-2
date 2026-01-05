'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import BubbleContainer from '../BubbleContainer'

const contactMethods = [
  {
    icon: "email",
    title: "Email",
    value: "mdmahialam@gmail.com",
    link: "mailto:mdmahialam@gmail.com",
    color: "#ea4335",
    description: "Send me an email"
  },
  {
    icon: "phone",
    title: "WhatsApp",
    value: "+8801979922268",
    link: "https://wa.me/8801979922268",
    color: "#25d366",
    description: "Message me on WhatsApp"
  },
  {
    icon: "devicon-linkedin-plain",
    title: "LinkedIn",
    value: "mahialam-rahat",
    link: "https://www.linkedin.com/in/mahialam-rahat/",
    color: "#0077b5",
    description: "Connect with me"
  },
  {
    icon: "devicon-twitter-original",
    title: "Twitter/X",
    value: "@mahialam_rahat",
    link: "https://x.com/mahialam_rahat",
    color: "#1da1f2",
    description: "Follow me"
  }
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

const cardVariants = {
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const formInView = useInView(formRef, { once: true, margin: "-50px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({ name: '', email: '', project: '' })
  }

  return (
    <BubbleContainer 
      className="w-full bg-white dark:bg-gray-800 py-20 px-6 transition-colors duration-300" 
      id="contact"
      bubbleCount={6}
      bubbleColors={[
        'rgba(245, 158, 11, 0.08)',
        'rgba(239, 68, 68, 0.08)',
        'rgba(236, 72, 153, 0.08)',
        'rgba(59, 130, 246, 0.08)',
      ]}
    >
      <div className="max-w-6xl mx-auto">
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
              backgroundImage: "linear-gradient(45deg, #f59e0b, #ef4444, #ec4899)",
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
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Me
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Contact Methods */}
          <motion.div 
            ref={ref}
            className="flex flex-col h-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-xl font-medium text-center lg:text-left text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Talk to me
            </motion.h3>
            
            <div className="flex flex-col gap-4 flex-1 justify-center">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index} 
                  className="relative group flex-1"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -3
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-600 transition-all duration-300 group-hover:shadow-xl overflow-hidden relative h-full flex items-center"
                    whileHover={{
                      boxShadow: `0 15px 30px ${method.color}15`
                    }}
                  >
                    {/* Background decoration */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-8"
                      style={{ backgroundColor: method.color }}
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                    
                    <div className="flex items-center gap-4 relative z-10 w-full">
                      <motion.div 
                        className="text-xl text-gray-700 dark:text-white flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          color: method.color
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {method.icon.startsWith('devicon') ? (
                          <i className={method.icon}></i>
                        ) : (
                          <span className="material-icons">{method.icon}</span>
                        )}
                      </motion.div>
                      
                      <div className="flex-1 text-left">
                        <h4 className="font-medium text-gray-900 dark:text-white text-base mb-1">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                          {method.value}
                        </p>
                      </div>
                      
                      <motion.a 
                        className="flex-shrink-0 text-sm font-medium transition-colors"
                        style={{ color: method.color }}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span 
                          className="material-icons text-lg"
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          arrow_forward
                        </motion.span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            ref={formRef}
            className="flex flex-col h-full"
            variants={containerVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-xl font-medium text-center lg:text-left text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Write me your project
            </motion.h3>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col flex-1 gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="relative group"
                variants={itemVariants}
              >
                <label className="absolute -top-3 left-4 px-2 bg-white dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 z-10 transition-colors duration-300 group-focus-within:text-blue-500">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Insert your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-14 bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 transition-all duration-300 outline-none group-hover:border-gray-300 dark:group-hover:border-gray-500"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="relative group"
                variants={itemVariants}
              >
                <label className="absolute -top-3 left-4 px-2 bg-white dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 z-10 transition-colors duration-300 group-focus-within:text-blue-500">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-14 bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 transition-all duration-300 outline-none group-hover:border-gray-300 dark:group-hover:border-gray-500"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="relative group flex-1 flex flex-col"
                variants={itemVariants}
              >
                <label className="absolute -top-3 left-4 px-2 bg-white dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 z-10 transition-colors duration-300 group-focus-within:text-blue-500">
                  Project
                </label>
                <Textarea
                  name="project"
                  placeholder="Write your project details here..."
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full flex-1 min-h-[120px] bg-transparent border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 transition-all duration-300 outline-none resize-none group-hover:border-gray-300 dark:group-hover:border-gray-500"
                  required
                />
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 rounded-2xl flex items-center justify-center gap-3 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span 
                        className="material-icons text-lg"
                        animate={{ 
                          rotate: [0, -45, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        send
                      </motion.span>
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </BubbleContainer>
  )
}