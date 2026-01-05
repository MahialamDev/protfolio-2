'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './ThemeProvider'
import SmoothScrollProvider from './SmoothScrollProvider'
import LoadingScreen from './LoadingScreen'
import BubbleBackground from './BubbleBackground'
import ModernHeader from './sections/ModernHeader'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SocialSidebar from './sections/SocialSidebar'
import ScrollToTop from './sections/ScrollToTop'
import FloatingContactButton from './FloatingContactButton'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <SmoothScrollProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
          ) : (
            <div 
              key="portfolio"
              className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col relative overflow-x-hidden"
            >
              <BubbleBackground />
              <ModernHeader />
              <SocialSidebar />
              <FloatingContactButton />
              
              <main className="grow">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
              </main>
              
              <Footer />
              <ScrollToTop />
            </div>
          )}
        </AnimatePresence>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}