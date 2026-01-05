'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import React from 'react'

interface BubbleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  bubbleCount?: number
  bubbleColors?: string[]
}

export default function BubbleContainer({ 
  children, 
  className = '', 
  bubbleCount = 5,
  bubbleColors = [
    'rgba(59, 130, 246, 0.15)',
    'rgba(139, 92, 246, 0.15)',
    'rgba(236, 72, 153, 0.15)',
    'rgba(16, 185, 129, 0.15)',
  ],
  ...props
}: BubbleContainerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {/* Floating Bubbles */}
      {Array.from({ length: bubbleCount }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            scale: [0, Math.random() * 0.8 + 0.5, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, ${bubbleColors[index % bubbleColors.length]}, transparent)`,
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}