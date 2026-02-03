import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { weeklyData, type WeekData } from '@/lib/weekData'
import { popularComparisons, getComparisonBySlug } from '@/lib/comparisonData'

interface PageProps {
  params: {
    comparison: string
  }
}

export async function generateStaticParams() {
  return popularComparisons.map((comp) => ({
    comparison: comp.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const comparison = getComparisonBySlug(params.comparison)
  if (!comparison) return {}

  const { week1, week2 } = comparison

  return {
    title: `Pregnancy Week ${week1} vs Week ${week2}: Complete Development Comparison | My Pregnancy Week`,
    description: `Compare pregnancy week ${week1} vs week ${week2}. Detailed comparison of baby size, weight, development milestones, mom's symptoms, and what changes between these weeks.`,
    openGraph: {
      title: `Week ${week1} vs Week ${week2}: Pregnancy Comparison`,
      description: `See how your baby develops from week ${week1} to week ${week2}. Compare size, weight, milestones, and symptoms.`,
      type: 'article',
    },
  }
}

export default function ComparisonPage({ params }: PageProps) {
  const comparison = getComparisonBySlug(params.comparison)

  if (!comparison) {
    notFound()
  }

  const { week1, week2 } = comparison

  const data1 = weeklyData.find((w) => w.week === week1)
  const data2 = weeklyData.find((w) => w.week === week2)

  if (!data1 || !data2) {
    notFound()
  }

  const weekDiff = Math.abs(week2 - week1)
  const trimesterChange = data1.trimester !== data2.trimester
  const trimesterText = trimesterChange
    ? `Crossing from ${getOrdinal(data1.trimester)} to ${getOrdinal(data2.trimester)} trimester`
    : `Both in ${getOrdinal(data1.trimester)} trimester`

  // Find new symptoms in week2 that weren't in week1
  const newSymptoms = data2.momSymptoms.filter(
    (symptom) => !data1.momSymptoms.includes(symptom)
  )

  // Find new developments in week2 that weren't in week1
  const newDevelopments = data2.babyDevelopment.filter(
    (dev) => !data1.babyDevelopment.includes(dev)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-primary-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/compare-weeks" className="hover:text-primary-600">
          Compare Weeks
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">
          Week {week1} vs {week2}
        </span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pregnancy Week {week1} vs Week {week2}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete comparison of baby development, mom's symptoms, and changes between these weeks
        </p>
      </div>

      {/* Comparison Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">📊</span>
            <div>
              <div className="text-sm text-gray-600">Time Difference</div>
              <div className="text-lg font-semibold text-gray-900">
                {weekDiff} week{weekDiff !== 1 ? 's' : ''} apart
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">🔄</span>
            <div>
              <div className="text-sm text-gray-600">Trimester</div>
              <div className="text-lg font-semibold text-gray-900">{trimesterText}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Baby Size Comparison with Visual Chart */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Baby Size Comparison</h2>

        {/* Visual Size Comparison Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Week {week1}</span>
                <span className="text-sm text-gray-600">{data1.babySize}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-primary-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((week1 / 40) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Week {week2}</span>
                <span className="text-sm text-gray-600">{data2.babySize}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-pink-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((week2 / 40) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 text-center">
              Your baby is approximately {Math.round(((week1 + week2) / 2 / 40) * 100)}% through
              pregnancy
            </div>
          </div>
        </div>

        {/* Side by side stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeekStatsCard week={week1} data={data1} isPrimary />
          <WeekStatsCard week={week2} data={data2} isPrimary={false} />
        </div>
      </section>

      {/* What Changes Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Changes Between Week {week1} and {week2}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Developments */}
          {newDevelopments.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👶</span>
                New Baby Developments
              </h3>
              <ul className="space-y-2">
                {newDevelopments.slice(0, 5).map((dev, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">✓</span>
                    <span className="text-sm text-gray-700">{dev}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* New Symptoms */}
          {newSymptoms.length > 0 && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🤰</span>
                New or Changing Symptoms
              </h3>
              <ul className="space-y-2">
                {newSymptoms.slice(0, 5).map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1 font-bold">✓</span>
                    <span className="text-sm text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* General changes description */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📈</span>
            Key Changes Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Baby Growth:</span> Your baby continues to grow
              rapidly, with organs developing and maturing each day.
            </div>
            <div>
              <span className="font-semibold">Your Body:</span> Your body adapts to support your
              growing baby with various physical and hormonal changes.
            </div>
          </div>
        </div>
      </section>

      {/* Baby Development Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Baby Development Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DevelopmentCard week={week1} data={data1} />
          <DevelopmentCard week={week2} data={data2} />
        </div>
      </section>

      {/* Symptoms Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Symptoms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SymptomsCard week={week1} data={data1} />
          <SymptomsCard week={week2} data={data2} />
        </div>
      </section>

      {/* Nutrition Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NutritionCard week={week1} data={data1} />
          <NutritionCard week={week2} data={data2} />
        </div>
      </section>

      {/* When to See Doctor */}
      <section className="mb-12">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">⚕️</span>
            When to Contact Your Healthcare Provider
          </h2>
          <p className="text-gray-700 mb-4">
            During weeks {week1} to {week2}, contact your healthcare provider if you experience:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Severe abdominal pain or cramping</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Heavy bleeding or passing clots</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Severe headache with vision changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Persistent fever over 100.4°F (38°C)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Sudden swelling of hands, face, or feet</span>
            </li>
            {week2 >= 24 && (
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">Decreased fetal movement</span>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* View Full Week Guides */}
      <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Want More Detailed Information?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/week-by-week/${week1}`}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
          >
            View Week {week1} Complete Guide
          </Link>
          <Link
            href={`/week-by-week/${week2}`}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
          >
            View Week {week2} Complete Guide
          </Link>
        </div>
      </div>

      {/* Other Popular Comparisons */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Other Popular Comparisons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularComparisons
            .filter((c) => c.slug !== params.comparison)
            .slice(0, 8)
            .map((comp) => (
              <Link
                key={comp.slug}
                href={`/compare-weeks/${comp.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-300 transition-all text-center"
              >
                <div className="text-sm font-semibold text-gray-900">
                  Week {comp.week1} vs {comp.week2}
                </div>
                <div className="text-xs text-gray-500 mt-1">{comp.label}</div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}

function WeekStatsCard({
  week,
  data,
  isPrimary,
}: {
  week: number
  data: WeekData
  isPrimary: boolean
}) {
  const bgColor = isPrimary ? 'from-primary-50 to-blue-50' : 'from-pink-50 to-purple-50'
  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-lg p-6`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Week {week}</h3>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 flex items-center gap-4">
          <div className="text-3xl">📏</div>
          <div>
            <div className="text-xs text-gray-600">Length</div>
            <div className="font-semibold text-gray-900">{data.babyLength}</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 flex items-center gap-4">
          <div className="text-3xl">⚖️</div>
          <div>
            <div className="text-xs text-gray-600">Weight</div>
            <div className="font-semibold text-gray-900">{data.babyWeight}</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 flex items-center gap-4">
          <div className="text-3xl">🍎</div>
          <div>
            <div className="text-xs text-gray-600">Size Comparison</div>
            <div className="font-semibold text-gray-900">{data.babySize}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DevelopmentCard({ week, data }: { week: number; data: WeekData }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Week {week} Development</h3>
      <ul className="space-y-3">
        {data.babyDevelopment.slice(0, 6).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary-600 mt-1 font-bold">•</span>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SymptomsCard({ week, data }: { week: number; data: WeekData }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Week {week} Symptoms</h3>
      <ul className="space-y-3">
        {data.momSymptoms.slice(0, 6).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-purple-600 mt-1 font-bold">•</span>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function NutritionCard({ week, data }: { week: number; data: WeekData }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Week {week} Nutrition</h3>
      <ul className="space-y-3">
        {data.nutritionTips.slice(0, 6).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-600 mt-1 font-bold">•</span>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function getOrdinal(n: number): string {
  if (n === 1) return '1st'
  if (n === 2) return '2nd'
  if (n === 3) return '3rd'
  return `${n}th`
}
