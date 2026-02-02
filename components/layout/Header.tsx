'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SITE_NAME } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🤰</span>
              <span className="text-xl font-bold text-primary-600">{SITE_NAME}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/week-by-week" className="text-gray-600 hover:text-primary-600 transition-colors">
              Week by Week
            </Link>
            <Link href="/symptoms" className="text-gray-600 hover:text-primary-600 transition-colors">
              Symptoms
            </Link>
            <Link href="/baby-development" className="text-gray-600 hover:text-primary-600 transition-colors">
              Baby Development
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onBlur={() => setTimeout(() => setIsResourcesOpen(false), 200)}
                className="text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-1"
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="/exercises" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Pregnancy Exercises
                  </Link>
                  <Link href="/medical-tests" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Medical Tests & Procedures
                  </Link>
                  <Link href="/labor-prep" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Labor & Delivery Prep
                  </Link>
                  <Link href="/complications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Pregnancy Complications
                  </Link>
                  <Link href="/calculators" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Calculators & Tools
                  </Link>
                  <Link href="/checklists" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Checklists & Planning
                  </Link>
                  <Link href="/nutrition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    Nutrition Guide
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/week-by-week" className="text-gray-600 hover:text-primary-600 py-2">
                Week by Week
              </Link>
              <Link href="/symptoms" className="text-gray-600 hover:text-primary-600 py-2">
                Symptoms
              </Link>
              <Link href="/baby-development" className="text-gray-600 hover:text-primary-600 py-2">
                Baby Development
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1">Resources</p>
                <Link href="/exercises" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Pregnancy Exercises
                </Link>
                <Link href="/medical-tests" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Medical Tests & Procedures
                </Link>
                <Link href="/labor-prep" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Labor & Delivery Prep
                </Link>
                <Link href="/complications" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Pregnancy Complications
                </Link>
                <Link href="/calculators" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Calculators & Tools
                </Link>
                <Link href="/checklists" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Checklists & Planning
                </Link>
                <Link href="/nutrition" className="text-gray-600 hover:text-primary-600 py-2 pl-4 block">
                  Nutrition Guide
                </Link>
              </div>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 py-2 border-t border-gray-200 pt-2 mt-2">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
