'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Preferences {
  [key: string]: string[]
}

const birthPlanCategories = [
  {
    id: 'labor-environment',
    title: 'Labor Environment',
    options: [
      'Dim lighting or natural light',
      'Quiet, minimal interruptions',
      'Play my own music',
      'Freedom to move around',
      'Access to birth ball and labor tools',
      'Limited number of visitors',
      'Calm, supportive atmosphere',
      'Private labor room'
    ]
  },
  {
    id: 'support-team',
    title: 'Labor Support Team',
    options: [
      'Partner/spouse present',
      'Doula present',
      'Additional support person (specify in notes)',
      'Support team to provide massage and encouragement',
      'No students or observers',
      'Photographer/videographer allowed'
    ]
  },
  {
    id: 'movement',
    title: 'Movement & Positions',
    options: [
      'Freedom to move and change positions',
      'Walking during labor',
      'Use of shower or bathtub',
      'Intermittent fetal monitoring (not continuous)',
      'Wireless monitoring if continuous needed',
      'Upright positions for labor',
      'Choose my own pushing position',
      'Avoid lying flat on back'
    ]
  },
  {
    id: 'pain-management',
    title: 'Pain Management',
    options: [
      'Try natural methods first (breathing, position changes, massage)',
      'Hydrotherapy (shower/tub)',
      'Birth ball',
      'Hot/cold compresses',
      'Aromatherapy',
      'Open to epidural if requested',
      'IV pain medication option',
      'Nitrous oxide if available',
      'No offers of pain medication unless I request'
    ]
  },
  {
    id: 'medical-interventions',
    title: 'Medical Interventions',
    options: [
      'Hep lock instead of continuous IV',
      'Eat light snacks and drink fluids',
      'No artificial rupture of membranes unless necessary',
      'No Pitocin augmentation unless necessary',
      'Discuss options before any intervention',
      'Allow time for spontaneous labor progression',
      'Minimal cervical checks',
      'No routine episiotomy',
      'Informed consent required for all interventions'
    ]
  },
  {
    id: 'pushing-delivery',
    title: 'Pushing & Delivery',
    options: [
      'Push spontaneously when I feel the urge',
      'Minimal coached pushing',
      'Choose my own pushing position',
      'Slow, controlled delivery to reduce tearing',
      'Warm compresses for perineal support',
      'No episiotomy unless absolutely necessary',
      'Use mirror to see baby crowning',
      'Allow me to touch baby\'s head if desired'
    ]
  },
  {
    id: 'immediately-after',
    title: 'Immediately After Birth',
    options: [
      'Immediate skin-to-skin contact',
      'Delay cord clamping (1-3 minutes minimum)',
      'Partner/support person cuts cord',
      'Allow me to deliver placenta naturally',
      'Baby stays with me for all procedures',
      'Breastfeeding within first hour',
      'Delay routine procedures for 1-2 hours',
      'Announce baby\'s sex (don\'t tell me beforehand)',
      'Take photos/videos'
    ]
  },
  {
    id: 'newborn-care',
    title: 'Newborn Care',
    options: [
      'Rooming-in (baby stays with me)',
      'Delay first bath (12-24 hours)',
      'Breastfeeding exclusively',
      'No pacifiers or bottles',
      'Vitamin K injection: Accept',
      'Vitamin K injection: Oral dose',
      'Vitamin K injection: Decline',
      'Eye ointment: Accept',
      'Eye ointment: Delay',
      'Eye ointment: Decline',
      'Hepatitis B vaccine: Accept',
      'Hepatitis B vaccine: Delay',
      'All procedures explained first'
    ]
  },
  {
    id: 'feeding',
    title: 'Feeding Preferences',
    options: [
      'Exclusive breastfeeding',
      'Breastfeeding with formula supplementation if needed',
      'Formula feeding',
      'Lactation consultant visit',
      'No pacifiers in hospital',
      'Help with breastfeeding positioning',
      'Pumping support if needed'
    ]
  },
  {
    id: 'if-cesarean',
    title: 'If Cesarean Becomes Necessary',
    options: [
      'Partner present in operating room',
      'Explain procedure throughout',
      'Lower screen to see baby born',
      'Skin-to-skin in OR if possible',
      'Partner holds baby if I cannot',
      'Delay non-urgent procedures',
      'Delayed cord clamping if safe',
      'Family-centered cesarean approach',
      'Photos allowed if non-emergency'
    ]
  }
]

export default function BirthPlanBuilder() {
  const [preferences, setPreferences] = useState<Preferences>({})
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [showPrintView, setShowPrintView] = useState(false)

  // Load preferences from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('birthPlanPreferences')
    const savedNotes = localStorage.getItem('birthPlanNotes')
    if (saved) {
      setPreferences(JSON.parse(saved))
    }
    if (savedNotes) {
      setAdditionalNotes(savedNotes)
    }
  }, [])

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(preferences).length > 0) {
      localStorage.setItem('birthPlanPreferences', JSON.stringify(preferences))
    }
  }, [preferences])

  useEffect(() => {
    if (additionalNotes) {
      localStorage.setItem('birthPlanNotes', additionalNotes)
    }
  }, [additionalNotes])

  const handleToggle = (categoryId: string, option: string) => {
    setPreferences(prev => {
      const categoryPrefs = prev[categoryId] || []
      const isSelected = categoryPrefs.includes(option)

      if (isSelected) {
        return {
          ...prev,
          [categoryId]: categoryPrefs.filter(o => o !== option)
        }
      } else {
        return {
          ...prev,
          [categoryId]: [...categoryPrefs, option]
        }
      }
    })
  }

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all preferences?')) {
      setPreferences({})
      setAdditionalNotes('')
      localStorage.removeItem('birthPlanPreferences')
      localStorage.removeItem('birthPlanNotes')
    }
  }

  const handlePrint = () => {
    setShowPrintView(true)
    setTimeout(() => {
      window.print()
      setShowPrintView(false)
    }, 100)
  }

  if (showPrintView) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">My Birth Plan</h1>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Name: _______________________________</p>
            <p>Due Date: _______________________________</p>
            <p>Healthcare Provider: _______________________________</p>
          </div>
        </div>

        {birthPlanCategories.map((category) => {
          const categoryPrefs = preferences[category.id] || []
          if (categoryPrefs.length === 0) return null

          return (
            <div key={category.id} className="mb-6">
              <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-2">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {categoryPrefs.map((option, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>✓</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}

        {additionalNotes && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-2">
              Additional Notes
            </h2>
            <p className="whitespace-pre-wrap">{additionalNotes}</p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t-2 border-gray-300 text-sm text-gray-600">
          <p className="italic">
            This birth plan reflects my preferences. I understand that medical circumstances may require
            flexibility, and the priority is always a safe delivery for me and my baby.
          </p>
        </div>
      </div>
    )
  }

  const selectedCount = Object.values(preferences).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/birth-plan" className="hover:text-primary-600">Birth Plans</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">Interactive Builder</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Interactive Birth Plan Builder
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Customize your birth plan by selecting preferences in each category. Your choices are automatically
          saved and you can generate a printable version when ready.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="bg-white px-3 py-1 rounded-full text-purple-600 font-semibold">
            {selectedCount} preferences selected
          </span>
          {selectedCount > 0 && (
            <button
              onClick={handleClear}
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Use This Builder</h2>
        <ol className="space-y-2 text-gray-700">
          <li><strong>1.</strong> Review each category and check the boxes for preferences that matter to you</li>
          <li><strong>2.</strong> Add any additional notes or specific requests at the bottom</li>
          <li><strong>3.</strong> Your selections are automatically saved as you go</li>
          <li><strong>4.</strong> Click "Generate Printable Birth Plan" to create your final document</li>
          <li><strong>5.</strong> Print multiple copies to bring to your birth location</li>
        </ol>
      </div>

      {/* Categories */}
      {birthPlanCategories.map((category) => (
        <section key={category.id} className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
            <div className="space-y-3">
              {category.options.map((option) => {
                const isSelected = (preferences[category.id] || []).includes(option)
                return (
                  <label
                    key={option}
                    className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-primary-50 border-primary-300'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggle(category.id, option)}
                      className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                    />
                    <span className="text-gray-900">{option}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Notes */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Notes</h2>
          <p className="text-gray-600 mb-4">
            Add any specific preferences, medical information, or special requests not covered above:
          </p>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="w-full h-32 p-3 border-2 border-gray-200 rounded-lg focus:border-primary-300 focus:outline-none"
            placeholder="Example: I have a latex allergy. Please avoid latex gloves. I prefer my partner to announce the baby's sex..."
          />
        </div>
      </section>

      {/* Action Buttons */}
      <div className="bg-primary-600 text-white rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3">Ready to Print Your Birth Plan?</h2>
        <p className="mb-4 text-primary-100">
          Generate a clean, printable version of your birth plan with all your selected preferences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handlePrint}
            disabled={selectedCount === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCount === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-white text-primary-600 hover:bg-primary-50'
            }`}
          >
            {selectedCount === 0 ? 'Select preferences first' : 'Generate Printable Birth Plan'}
          </button>
          {selectedCount > 0 && (
            <button
              onClick={handleClear}
              className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Clear All & Start Over
            </button>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Tips for Using Your Birth Plan</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Keep your birth plan to 1-2 pages maximum</li>
          <li>• Discuss your plan with your healthcare provider at a prenatal appointment</li>
          <li>• Print 3-5 copies to bring to your birth location</li>
          <li>• Give copies to your provider, nurses, doula, and keep one for yourself</li>
          <li>• Stay flexible - birth is unpredictable and plans may need to change</li>
          <li>• Focus on what matters most to you rather than checking every option</li>
          <li>• Review hospital policies to ensure your preferences are feasible</li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-600 text-center">
          This birth plan builder is an educational tool. Always discuss your preferences with your healthcare
          provider to ensure they align with your medical situation and facility capabilities. Birth plans are
          flexible guidelines, and medical necessity may require changes for the safety of you and your baby.
        </p>
      </div>
    </div>
  )
}
