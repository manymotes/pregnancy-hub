import Link from 'next/link'
import { weeklyData, getWeeksByTrimester } from '@/lib/weekData'
import { TRIMESTERS } from '@/lib/constants'

export const metadata = {
  title: 'Pregnancy Week by Week Guide',
  description: 'Complete week-by-week pregnancy guide from conception to birth. Track your baby\'s development, symptoms, and what to expect each week.',
}

export default function WeekByWeekPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pregnancy Week by Week
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Follow your pregnancy journey from conception to birth. Get detailed information about your baby's development,
          your changing body, and what to expect each week.
        </p>
      </div>

      {/* Browse by Trimester */}
      {TRIMESTERS.map((trimester) => {
        const weeks = getWeeksByTrimester(trimester.slug === 'first-trimester' ? 1 : trimester.slug === 'second-trimester' ? 2 : 3)

        return (
          <section key={trimester.slug} className="mb-12">
            <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{trimester.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{trimester.name}</h2>
              </div>
              <p className="text-gray-600">Weeks {trimester.weeks}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {weeks.map((week) => (
                <Link
                  key={week.week}
                  href={`/week-by-week/${week.week}`}
                  className="week-card text-center hover:scale-105 transition-transform"
                >
                  <div className="week-number">
                    {week.week}
                  </div>
                  <div className="text-sm text-gray-600">
                    {week.babySize}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      {/* Quick Navigation */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Quick Navigation
        </h2>
        <p className="text-gray-600 mb-6">
          Jump to a specific trimester for more detailed information
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {TRIMESTERS.map((trimester) => (
            <Link
              key={trimester.slug}
              href={`/${trimester.slug}`}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {trimester.icon} {trimester.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
