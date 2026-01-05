'use client'

import { useState, useEffect, Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './ThemeProvider'
import LoadingScreen from './LoadingScreen'
import BubbleBackground from './BubbleBackground'
import ModernHeader from './sections/ModernHeader'
import Hero from './sections/Hero'
import SocialSidebar from './sections/SocialSidebar'
import ScrollToTop from './sections/ScrollToTop'
import FloatingContactButton from './FloatingContactButton'

// Lazy load below-the-fold components for better performance
const About = lazy(() => import('./sections/About'))
const Education = lazy(() => import('./sections/Education'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))

// Simple loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
)

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div style={{ scrollBehavior: 'smooth' }}>
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
                <Suspense fallback={<SectionLoader />}>
                  <About />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Education />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Skills />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Contact />
                </Suspense>
              </main>
              
              <Suspense fallback={<SectionLoader />}>
                <Footer />
              </Suspense>
              <ScrollToTop />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}