import Link from 'next/link'
import { getWeeksByTrimester } from '@/lib/weekData'

export const metadata = {
  title: 'Second Trimester of Pregnancy (Weeks 14-27)',
  description: 'Complete guide to the second trimester of pregnancy. Learn about the "honeymoon phase" of pregnancy, baby development, and what to expect in weeks 14-27.',
}

export default function SecondTrimesterPage() {
  const weeks = getWeeksByTrimester(2)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🌿</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Second Trimester of Pregnancy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Weeks 14-27: Often called the "honeymoon phase" - energy returns and you may start feeling baby move!
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
              <span>Increased energy and reduced nausea</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Feeling baby move (quickening)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Baby bump becomes visible</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Anatomy scan and possible gender reveal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Generally more comfortable phase</span>
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
              <span>Week 14: Welcome to second trimester!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 16-20: Feel baby's first movements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 18-22: Anatomy scan ultrasound</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 20: Halfway through pregnancy!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 24: Baby is viable if born early</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Common Symptoms */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Second Trimester Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: '🦋', title: 'Baby Movements', desc: 'Feel flutters and kicks from baby' },
              { emoji: '😊', title: 'Increased Energy', desc: 'Energy levels improve significantly' },
              { emoji: '🤰', title: 'Growing Belly', desc: 'Baby bump becomes visible' },
              { emoji: '💪', title: 'Round Ligament Pain', desc: 'Sharp pains in lower abdomen' },
              { emoji: '🩸', title: 'Nosebleeds', desc: 'Due to increased blood flow' },
              { emoji: '🦷', title: 'Gum Sensitivity', desc: 'Swollen or bleeding gums' },
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
            Second Trimester Nutrition
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Focus on:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li>Increased calorie intake (about 300-350 extra calories per day)</li>
              <li>Calcium and vitamin D for baby's bone development</li>
              <li>Omega-3 fatty acids (DHA) for brain development</li>
              <li>Iron-rich foods to prevent anemia</li>
              <li>Protein for tissue growth</li>
            </ul>
            <p>
              <strong>Glucose screening:</strong> Around week 24-28, you'll have a glucose screening test
              to check for gestational diabetes. Your doctor will provide specific instructions about diet
              before the test.
            </p>
          </div>
        </div>
      </section>

      {/* Week by Week */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse Second Trimester Week by Week
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
          Get detailed information for each week of your second trimester
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
