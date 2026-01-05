'use client'

import { useState } from 'react'
import ThemeToggle from '../ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a className="text-2xl font-bold tracking-tighter" href="#">
          <svg 
            className="text-gray-900 dark:text-white" 
            fill="none" 
            height="32" 
            viewBox="0 0 24 24" 
            width="32" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 4L12 20L20 4" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            />
            <path 
              d="M4 4H20" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            />
          </svg>
        </a>
        
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Home</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#about">About</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#education">Education</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#skills">Skills</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Portfolio</a>
          <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#contact">Contact</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}