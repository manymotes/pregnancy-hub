import Link from 'next/link'
import { weeklyData } from '@/lib/weekData'

export const metadata = {
  title: 'Pregnancy Symptoms by Week - Complete Timeline | Pregnancy Hub',
  description: 'Comprehensive timeline of pregnancy symptoms week by week. Track what to expect from week 1 through week 40 of your pregnancy journey.',
}

export default function SymptomsByWeekPage() {
  // Group weeks by trimester
  const firstTrimester = weeklyData.filter(w => w.trimester === 1)
  const secondTrimester = weeklyData.filter(w => w.trimester === 2)
  const thirdTrimester = weeklyData.filter(w => w.trimester === 3)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pregnancy Symptoms by Week
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          A comprehensive timeline of pregnancy symptoms from week 1 through week 40.
          Track what symptoms to expect during each stage of your pregnancy journey.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Remember:</strong> Every pregnancy is unique. You may experience all, some, or none of these symptoms.
            If you have concerns, always consult with your healthcare provider.
          </p>
        </div>
      </div>

      {/* First Trimester */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>🌱</span> First Trimester (Weeks 1-13)
          </h2>
          <p className="text-gray-700">
            The first trimester is marked by rapid hormonal changes and early pregnancy symptoms.
            Morning sickness, fatigue, and breast tenderness are common during this period.
          </p>
        </div>

        <div className="space-y-4">
          {firstTrimester.map((week) => (
            <div key={week.week} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Week {week.week}
                  </h3>
                  <p className="text-sm text-gray-600">Baby size: {week.babySize}</p>
                </div>
                <Link
                  href={`/week-by-week/${week.week}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View Details →
                </Link>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {week.momSymptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Second Trimester */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>🌸</span> Second Trimester (Weeks 14-27)
          </h2>
          <p className="text-gray-700">
            Often called the "golden trimester," symptoms typically improve. You'll start feeling baby movements
            and experience a visible baby bump. Energy levels usually increase during this period.
          </p>
        </div>

        <div className="space-y-4">
          {secondTrimester.map((week) => (
            <div key={week.week} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Week {week.week}
                  </h3>
                  <p className="text-sm text-gray-600">Baby size: {week.babySize}</p>
                </div>
                <Link
                  href={`/week-by-week/${week.week}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View Details →
                </Link>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {week.momSymptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Trimester */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>🌺</span> Third Trimester (Weeks 28-40)
          </h2>
          <p className="text-gray-700">
            The home stretch! Symptoms intensify as baby grows larger. You may experience discomfort,
            frequent urination, and Braxton Hicks contractions as your body prepares for labor.
          </p>
        </div>

        <div className="space-y-4">
          {thirdTrimester.map((week) => (
            <div key={week.week} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Week {week.week}
                  </h3>
                  <p className="text-sm text-gray-600">Baby size: {week.babySize}</p>
                </div>
                <Link
                  href={`/week-by-week/${week.week}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View Details →
                </Link>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {week.momSymptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/week-by-week"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📅</span> Week by Week Guide
            </h3>
            <p className="text-sm text-gray-700">
              Detailed information for each week of pregnancy
            </p>
          </Link>
          <Link
            href="/symptoms"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>💭</span> Symptom Guide
            </h3>
            <p className="text-sm text-gray-700">
              Learn about specific pregnancy symptoms in detail
            </p>
          </Link>
          <Link
            href="/baby-size-chart"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📏</span> Baby Size Chart
            </h3>
            <p className="text-sm text-gray-700">
              Visual comparison of baby's growth throughout pregnancy
            </p>
          </Link>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Pregnancy Symptoms by Week',
            description: 'Comprehensive timeline of pregnancy symptoms week by week from week 1 through week 40.',
            about: {
              '@type': 'MedicalCondition',
              name: 'Pregnancy',
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: weeklyData.map((week, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: `Week ${week.week} Pregnancy Symptoms`,
                url: `https://pregnancyhub.com/week-by-week/${week.week}`,
              })),
            },
          }),
        }}
      />
    </div>
  )
}
