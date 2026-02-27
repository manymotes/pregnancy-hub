'use client'

import { useState, useEffect, useCallback, memo } from 'react'

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  // Memoize scroll handler for better performance
  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    setProgress(Math.min(scrollPercent, 100))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [updateProgress])

  return (
    <div className="reading-progress-container fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-pink-500 transition-all duration-150 ease-out will-change-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// This component has no props, but memo prevents re-renders from parent changes
export default memo(ReadingProgress)
