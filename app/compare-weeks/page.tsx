'use client'

import { useState } from 'react'
import Link from 'next/link'
import { weeklyData, type WeekData } from '@/lib/weekData'

export default function CompareWeeksPage() {
  const [week1, setWeek1] = useState<number | null>(null)
  const [week2, setWeek2] = useState<number | null>(null)

  const data1 = week1 ? weeklyData.find((w) => w.week === week1) : null
  const data2 = week2 ? weeklyData.find((w) => w.week === week2) : null

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault()
    // Comparison happens automatically via state
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Compare Pregnancy Weeks
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how your baby develops and how your body changes from week to week
        </p>
      </div>

      {/* Week Selector */}
      <form onSubmit={handleCompare} className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="week1" className="block text-sm font-medium text-gray-700 mb-2">
              First Week
            </label>
            <select
              id="week1"
              value={week1 || ''}
              onChange={(e) => setWeek1(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select a week...</option>
              {weeklyData.map((week) => (
                <option key={week.week} value={week.week}>
                  Week {week.week} - {week.babySize}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="week2" className="block text-sm font-medium text-gray-700 mb-2">
              Second Week
            </label>
            <select
              id="week2"
              value={week2 || ''}
              onChange={(e) => setWeek2(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select a week...</option>
              {weeklyData.map((week) => (
                <option key={week.week} value={week.week}>
                  Week {week.week} - {week.babySize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      {/* Comparison Results */}
      {data1 && data2 && (
        <div className="space-y-8">
          {/* Baby Stats Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Baby Size Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WeekCard week={data1.week} data={data1} />
              <WeekCard week={data2.week} data={data2} />
            </div>
          </section>

          {/* Development Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Baby Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Week {data1.week} Development
                </h3>
                <ul className="space-y-2">
                  {data1.babyDevelopment.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Week {data2.week} Development
                </h3>
                <ul className="space-y-2">
                  {data2.babyDevelopment.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Symptoms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Week {data1.week} Symptoms
                </h3>
                <ul className="space-y-2">
                  {data1.momSymptoms.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Week {data2.week} Symptoms
                </h3>
                <ul className="space-y-2">
                  {data2.momSymptoms.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Nutrition Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Week {data1.week} Nutrition
                </h3>
                <ul className="space-y-2">
                  {data1.nutritionTips.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Week {data2.week} Nutrition
                </h3>
                <ul className="space-y-2">
                  {data2.nutritionTips.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* View Full Weeks */}
          <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">
              Want more detailed information?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/week-by-week/${data1.week}`}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                View Week {data1.week} Full Guide
              </Link>
              <Link
                href={`/week-by-week/${data2.week}`}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                View Week {data2.week} Full Guide
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {(!data1 || !data2) && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📊</div>
          <p className="text-xl text-gray-600 mb-4">
            Select two weeks above to compare baby development and pregnancy changes
          </p>
          <p className="text-gray-500">
            Compare consecutive weeks to see week-to-week changes, or compare weeks from different trimesters
          </p>
        </div>
      )}

      {/* Popular Comparisons */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Comparisons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ComparisonButton week1={8} week2={12} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={12} week2={20} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={20} week2={28} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={28} week2={36} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={13} week2={27} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={1} week2={40} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={16} week2={20} setWeek1={setWeek1} setWeek2={setWeek2} />
          <ComparisonButton week1={32} week2={40} setWeek1={setWeek1} setWeek2={setWeek2} />
        </div>
      </section>
    </div>
  )
}

function WeekCard({ week, data }: { week: number; data: WeekData }) {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-pink-50 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Week {week}</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">📏</div>
          <div className="text-xs text-gray-600 mb-1">Length</div>
          <div className="font-semibold text-gray-900 text-sm">{data.babyLength}</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">⚖️</div>
          <div className="text-xs text-gray-600 mb-1">Weight</div>
          <div className="font-semibold text-gray-900 text-sm">{data.babyWeight}</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🍎</div>
          <div className="text-xs text-gray-600 mb-1">Size</div>
          <div className="font-semibold text-gray-900 text-sm">{data.babySize}</div>
        </div>
      </div>
    </div>
  )
}

function ComparisonButton({
  week1,
  week2,
  setWeek1,
  setWeek2,
}: {
  week1: number
  week2: number
  setWeek1: (week: number) => void
  setWeek2: (week: number) => void
}) {
  return (
    <button
      onClick={() => {
        setWeek1(week1)
        setWeek2(week2)
      }}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-300 transition-all text-center"
    >
      <div className="text-sm font-semibold text-gray-900">
        Week {week1} vs {week2}
      </div>
      <div className="text-xs text-gray-500 mt-1">Compare</div>
    </button>
  )
}
