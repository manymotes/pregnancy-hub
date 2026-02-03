'use client'

import { useState } from 'react'
import Link from 'next/link'
import { symptomTrackerData } from '@/lib/symptomTrackerData'

type Severity = 'none' | 'mild' | 'moderate' | 'severe'

interface SymptomSelection {
  slug: string
  severity: Severity
}

export default function SymptomCheckerPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<SymptomSelection[]>([])
  const [currentWeek, setCurrentWeek] = useState<number>(20)
  const [showResults, setShowResults] = useState(false)

  const toggleSymptom = (slug: string) => {
    const existing = selectedSymptoms.find((s) => s.slug === slug)
    if (existing) {
      // If already selected, remove it
      setSelectedSymptoms(selectedSymptoms.filter((s) => s.slug !== slug))
    } else {
      // Add with default mild severity
      setSelectedSymptoms([...selectedSymptoms, { slug, severity: 'mild' }])
    }
    setShowResults(false)
  }

  const updateSeverity = (slug: string, severity: Severity) => {
    setSelectedSymptoms(
      selectedSymptoms.map((s) => (s.slug === slug ? { ...s, severity } : s))
    )
  }

  const isSelected = (slug: string) => {
    return selectedSymptoms.some((s) => s.slug === slug)
  }

  const getSeverity = (slug: string): Severity => {
    return selectedSymptoms.find((s) => s.slug === slug)?.severity || 'none'
  }

  const getSelectedSymptomsData = () => {
    return selectedSymptoms
      .map((selection) => {
        const symptomData = symptomTrackerData.find((s) => s.slug === selection.slug)
        return symptomData ? { ...symptomData, severity: selection.severity } : null
      })
      .filter((s) => s !== null)
  }

  const hasAnySevere = selectedSymptoms.some((s) => s.severity === 'severe')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Link
          href="/symptom-tracker"
          className="text-sm text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block"
        >
          ← Back to Symptom Tracker
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Interactive Symptom Checker
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Select the symptoms you're experiencing and their severity to get personalized
          information, relief tips, and guidance.
        </p>
      </div>

      {/* Important Disclaimer */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-4">
          <span className="text-3xl flex-shrink-0">ℹ️</span>
          <div>
            <h3 className="font-bold text-blue-900 mb-2 text-lg">Important Disclaimer</h3>
            <p className="text-blue-800">
              This symptom checker is for informational purposes only and does not replace
              professional medical advice, diagnosis, or treatment. Always consult with your
              healthcare provider about your symptoms, especially if they are severe or
              concerning.
            </p>
          </div>
        </div>
      </div>

      {/* Current Week Selector */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What week are you in?</h2>
        <div className="flex items-center gap-4">
          <label htmlFor="week-slider" className="text-gray-700 font-medium">
            Week {currentWeek}
          </label>
          <input
            id="week-slider"
            type="range"
            min="1"
            max="40"
            value={currentWeek}
            onChange={(e) => setCurrentWeek(Number(e.target.value))}
            className="flex-1 h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-gray-600">
            {currentWeek <= 13
              ? 'First Trimester'
              : currentWeek <= 27
              ? 'Second Trimester'
              : 'Third Trimester'}
          </span>
        </div>
      </div>

      {/* Symptom Selection */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Select Your Symptoms
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {symptomTrackerData.map((symptom) => (
            <button
              key={symptom.slug}
              onClick={() => toggleSymptom(symptom.slug)}
              className={`text-left p-4 rounded-lg border-2 transition-all ${
                isSelected(symptom.slug)
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-primary-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-gray-900 text-sm">{symptom.title}</span>
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                    isSelected(symptom.slug)
                      ? 'bg-primary-500 border-primary-500'
                      : 'border-gray-300'
                  }`}
                >
                  {isSelected(symptom.slug) && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Severity Selection for Selected Symptoms */}
      {selectedSymptoms.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Rate Severity of Your Symptoms
          </h2>
          <div className="space-y-6">
            {selectedSymptoms.map((selection) => {
              const symptomData = symptomTrackerData.find((s) => s.slug === selection.slug)
              if (!symptomData) return null

              return (
                <div key={selection.slug} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-gray-900 mb-3">{symptomData.title}</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {(['mild', 'moderate', 'severe'] as const).map((severity) => (
                      <button
                        key={severity}
                        onClick={() => updateSeverity(selection.slug, severity)}
                        className={`p-3 rounded-lg border-2 font-medium transition-all text-sm ${
                          selection.severity === severity
                            ? severity === 'mild'
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : severity === 'moderate'
                              ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                              : 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg">
                            {severity === 'mild' ? '😌' : severity === 'moderate' ? '😣' : '😰'}
                          </span>
                          <span className="capitalize">{severity}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Get Results Button */}
      {selectedSymptoms.length > 0 && (
        <div className="text-center mb-8">
          <button
            onClick={() => setShowResults(true)}
            className="bg-primary-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Get Personalized Results
          </button>
        </div>
      )}

      {/* Results Section */}
      {showResults && selectedSymptoms.length > 0 && (
        <div className="space-y-8">
          {/* Severe Warning */}
          {hasAnySevere && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 mb-2 text-xl">
                    You reported severe symptoms
                  </h3>
                  <p className="text-red-800 font-medium mb-4">
                    If you\'re experiencing severe symptoms, we strongly recommend contacting your
                    healthcare provider as soon as possible. Severe symptoms may require medical
                    evaluation and treatment.
                  </p>
                  <p className="text-red-900 font-bold">
                    If you\'re experiencing any emergency symptoms (severe bleeding, severe
                    abdominal pain, severe headache with vision changes, or signs of preterm
                    labor), seek immediate medical attention or call 911.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Symptom Summary</h2>
            <p className="text-gray-700 mb-4">
              You\'re currently in <strong>week {currentWeek}</strong> of your pregnancy and
              experiencing <strong>{selectedSymptoms.length}</strong>{' '}
              {selectedSymptoms.length === 1 ? 'symptom' : 'symptoms'}:
            </p>
            <ul className="space-y-2">
              {getSelectedSymptomsData().map((symptom) => (
                <li key={symptom.slug} className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      symptom.severity === 'mild'
                        ? 'bg-green-100 text-green-700'
                        : symptom.severity === 'moderate'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {symptom.severity}
                  </span>
                  <span className="font-medium text-gray-900">{symptom.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Relief Tips */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>💡</span> Top Relief Tips for Your Symptoms
            </h2>
            {getSelectedSymptomsData().map((symptom) => (
              <div key={symptom.slug} className="mb-8 last:mb-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{symptom.title}</h3>
                  <Link
                    href={`/symptom-tracker/${symptom.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    Full Guide →
                  </Link>
                </div>
                <ul className="space-y-2 mb-4">
                  {symptom.reliefTips.slice(0, 5).map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-green-600 flex-shrink-0">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                {symptom.severity === 'severe' && (
                  <div className="bg-yellow-50 border border-yellow-300 rounded p-3 mt-3">
                    <p className="text-yellow-900 font-medium text-sm">
                      <strong>Because your {symptom.title.toLowerCase()} is severe:</strong>{' '}
                      Contact your healthcare provider for evaluation and treatment options.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* When to Call Doctor */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-yellow-900 mb-6 flex items-center gap-3">
              <span>📞</span> When to Call Your Doctor
            </h2>
            <p className="text-yellow-800 font-medium mb-4">
              Contact your healthcare provider if you experience any of these warning signs
              related to your symptoms:
            </p>
            <div className="space-y-4">
              {getSelectedSymptomsData().map((symptom) => (
                <div key={symptom.slug}>
                  <h4 className="font-bold text-yellow-900 mb-2">{symptom.title}:</h4>
                  <ul className="space-y-2 ml-4">
                    {symptom.whenToCallDoctor.slice(0, 3).map((warning, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-yellow-900 text-sm">
                        <span className="flex-shrink-0">⚠</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Want More Detailed Information?</h2>
            <p className="text-primary-100 mb-6">
              Click on any symptom below to read the complete guide with all relief strategies,
              safe remedies, FAQs, and real experiences from other moms.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {getSelectedSymptomsData().map((symptom) => (
                <Link
                  key={symptom.slug}
                  href={`/symptom-tracker/${symptom.slug}`}
                  className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  {symptom.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {selectedSymptoms.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Select symptoms above</h3>
          <p className="text-gray-600">
            Choose the symptoms you\'re experiencing to get personalized information and relief tips
          </p>
        </div>
      )}
    </div>
  )
}
