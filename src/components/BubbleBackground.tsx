'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const colors = [
      'rgba(59, 130, 246, 0.1)',   // blue
      'rgba(139, 92, 246, 0.1)',   // purple
      'rgba(236, 72, 153, 0.1)',   // pink
      'rgba(16, 185, 129, 0.1)',   // green
      'rgba(245, 158, 11, 0.1)',   // yellow
      'rgba(239, 68, 68, 0.1)',    // red
    ]

    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      setBubbles(newBubbles)
    }

    generateBubbles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle, ${bubble.color}, transparent)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}