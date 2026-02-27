'use client'

import { useState, useEffect, useCallback, memo } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Memoize scroll handler for better performance
  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 500)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  // Memoize click handler
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top-btn fixed bottom-20 right-4 z-40 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-110 md:bottom-8"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

// Memo prevents re-renders when parent component updates
export default memo(BackToTop)
