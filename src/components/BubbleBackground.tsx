'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useCallback, useMemo } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [isVisible, setIsVisible] = useState(true)

  const colors = useMemo(() => [
    'rgba(59, 130, 246, 0.08)',   // blue - reduced opacity
    'rgba(139, 92, 246, 0.08)',   // purple
    'rgba(236, 72, 153, 0.08)',   // pink
    'rgba(16, 185, 129, 0.08)',   // green
    'rgba(245, 158, 11, 0.08)',   // yellow
    'rgba(239, 68, 68, 0.08)',    // red
  ], [])

  const generateBubbles = useCallback(() => {
    const newBubbles: Bubble[] = []
    // Reduced from 15 to 8 bubbles for better performance
    for (let i = 0; i < 8; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 80 + 40, // Slightly smaller bubbles
        duration: Math.random() * 15 + 8, // Shorter duration
        delay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    setBubbles(newBubbles)
  }, [colors])

  useEffect(() => {
    // Pause animations when page is not visible
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  useEffect(() => {
    generateBubbles()
  }, [generateBubbles])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle, ${bubble.color}, transparent)`,
          }}
          animate={{
            y: [0, -20, 0], // Reduced movement
            x: [0, 10, -10, 0], // Reduced movement
            scale: [1, 1.1, 0.9, 1], // Reduced scale change
            opacity: [0.2, 0.4, 0.2], // Reduced opacity
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  )
}

export default BubbleBackground