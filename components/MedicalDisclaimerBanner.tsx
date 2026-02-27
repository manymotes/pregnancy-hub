'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'

function MedicalDisclaimerBannerComponent() {
  const [isVisible, setIsVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Memoize dismiss handler
  const handleDismiss = useCallback(() => {
    setIsVisible(false)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`medical-disclaimer-banner bg-amber-50 border-b border-amber-200 transition-all duration-300 ${
        hasScrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <svg
              className={`flex-shrink-0 text-amber-600 ${hasScrolled ? 'h-4 w-4' : 'h-5 w-5'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className={`text-amber-900 truncate ${hasScrolled ? 'text-xs' : 'text-sm'}`}>
              <span className="font-semibold">Medical Disclaimer:</span>{' '}
              <span className="hidden sm:inline">
                This content is for informational purposes only and is NOT medical advice. Always consult your healthcare provider.
              </span>
              <span className="sm:hidden">Not medical advice. Consult your doctor.</span>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/about"
              className={`text-amber-700 hover:text-amber-900 font-medium underline whitespace-nowrap ${
                hasScrolled ? 'text-xs' : 'text-sm'
              }`}
            >
              Learn more
            </Link>
            <button
              onClick={handleDismiss}
              className="text-amber-600 hover:text-amber-800 p-1"
              aria-label="Dismiss disclaimer"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export memoized component to prevent unnecessary re-renders
export const MedicalDisclaimerBanner = memo(MedicalDisclaimerBannerComponent)
