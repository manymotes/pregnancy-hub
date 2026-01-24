import Link from 'next/link'
import { getWeekData, weeklyData } from '@/lib/weekData'
import { TRIMESTERS } from '@/lib/constants'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return weeklyData.map((week) => ({
    week: week.week.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week)
  const data = getWeekData(weekNum)

  if (!data) {
    return {
      title: 'Week Not Found',
    }
  }

  return {
    title: `Week ${weekNum} of Pregnancy - Baby Size: ${data.babySize}`,
    description: `Pregnancy week ${weekNum}: Your baby is the size of ${data.babySize.toLowerCase()}. Learn about baby development, symptoms, and what to expect this week.`,
  }
}

export default function WeekPage({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week)
  const data = getWeekData(weekNum)

  if (!data) {
    notFound()
  }

  const trimester = TRIMESTERS[data.trimester - 1]
  const prevWeek = weekNum > 1 ? weekNum - 1 : null
  const nextWeek = weekNum < 40 ? weekNum + 1 : null

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/week-by-week"
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← Back to All Weeks
        </Link>

        <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>{trimester.icon}</span>
            <span>{trimester.name}</span>
            <span>•</span>
            <span>Weeks {trimester.weeks}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Week {weekNum} of Pregnancy
          </h1>
          <div className="text-xl text-gray-700">
            Your baby is the size of {data.babySize.toLowerCase()}
          </div>
        </div>
      </div>

      {/* Baby Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl mb-2">📏</div>
          <div className="text-sm text-gray-600 mb-1">Length</div>
          <div className="font-bold text-gray-900">{data.babyLength}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl mb-2">⚖️</div>
          <div className="text-sm text-gray-600 mb-1">Weight</div>
          <div className="font-bold text-gray-900">{data.babyWeight}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl mb-2">🍎</div>
          <div className="text-sm text-gray-600 mb-1">Size Comparison</div>
          <div className="font-bold text-gray-900">{data.babySize}</div>
        </div>
      </div>

      {/* Baby Development */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>👶</span> Baby Development
          </h2>
          <ul className="space-y-3">
            {data.babyDevelopment.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mom's Symptoms */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💭</span> Common Symptoms
          </h2>
          <ul className="space-y-3">
            {data.momSymptoms.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🥗</span> Nutrition Tips
          </h2>
          <ul className="space-y-3">
            {data.nutritionTips.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* To-Do This Week */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> To-Do This Week
          </h2>
          <ul className="space-y-3">
            {data.toDo.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fun Fact */}
      <div className="callout-info">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Did You Know?</h3>
            <p className="text-gray-700">{data.funFact}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        {prevWeek ? (
          <Link
            href={`/week-by-week/${prevWeek}`}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <span>←</span>
            <span>Week {prevWeek}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/week-by-week"
          className="text-gray-600 hover:text-gray-900"
        >
          All Weeks
        </Link>

        {nextWeek ? (
          <Link
            href={`/week-by-week/${nextWeek}`}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <span>Week {nextWeek}</span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
