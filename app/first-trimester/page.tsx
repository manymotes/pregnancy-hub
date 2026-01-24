import Link from 'next/link'
import { getWeeksByTrimester } from '@/lib/weekData'

export const metadata = {
  title: 'First Trimester of Pregnancy (Weeks 1-13)',
  description: 'Complete guide to the first trimester of pregnancy. Learn about early pregnancy symptoms, baby development, and what to expect in weeks 1-13.',
}

export default function FirstTrimesterPage() {
  const weeks = getWeeksByTrimester(1)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🌱</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          First Trimester of Pregnancy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Weeks 1-13: The beginning of your pregnancy journey. A time of rapid development and  major changes.
        </p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Expect
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Confirming your pregnancy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Morning sickness and fatigue</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Your baby's organs begin forming</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>First prenatal appointments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Increased emotions and mood changes</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Milestones
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 4: Positive pregnancy test</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 5-6: Baby's heart starts beating</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 8: Baby is now called a fetus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 12: Risk of miscarriage decreases significantly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 13: End of first trimester!</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Common Symptoms */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common First Trimester Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: '🤢', title: 'Morning Sickness', desc: 'Nausea and vomiting, especially in the morning' },
              { emoji: '😴', title: 'Fatigue', desc: 'Extreme tiredness due to hormonal changes' },
              { emoji: '🍕', title: 'Food Cravings', desc: 'Strange food preferences and aversions' },
              { emoji: '💭', title: 'Mood Swings', desc: 'Emotional ups and downs' },
              { emoji: '🚽', title: 'Frequent Urination', desc: 'Need to pee more often' },
              { emoji: '💗', title: 'Breast Tenderness', desc: 'Sore and swollen breasts' },
            ].map((symptom) => (
              <div key={symptom.title} className="bg-white rounded-lg p-4">
                <div className="text-3xl mb-2">{symptom.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{symptom.title}</h3>
                <p className="text-sm text-gray-600">{symptom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            First Trimester Nutrition
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Focus on:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li>Folic acid (400-800 mcg daily) for neural tube development</li>
              <li>Iron-rich foods to support increased blood volume</li>
              <li>Small, frequent meals to combat nausea</li>
              <li>Staying hydrated with water throughout the day</li>
              <li>Avoiding raw or undercooked foods</li>
            </ul>
            <p>
              <strong>Foods to avoid:</strong> Raw fish, undercooked meat, unpasteurized dairy, deli meats,
              high-mercury fish, raw eggs, and excessive caffeine (limit to 200mg/day).
            </p>
          </div>
        </div>
      </section>

      {/* Week by Week */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse First Trimester Week by Week
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {weeks.map((week) => (
            <Link
              key={week.week}
              href={`/week-by-week/${week.week}`}
              className="week-card text-center hover:scale-105 transition-transform"
            >
              <div className="week-number">{week.week}</div>
              <div className="text-sm text-gray-600">{week.babySize}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Track Your Pregnancy Week by Week
        </h2>
        <p className="text-primary-100 mb-6">
          Get detailed information for each week of your first trimester
        </p>
        <Link
          href="/week-by-week"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          View All Weeks
        </Link>
      </div>
    </div>
  )
}
