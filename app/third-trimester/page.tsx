import Link from 'next/link'
import { getWeeksByTrimester } from '@/lib/weekData'

export const metadata = {
  title: 'Third Trimester of Pregnancy (Weeks 28-40)',
  description: 'Complete guide to the third trimester of pregnancy. Learn about the final stretch, preparing for labor and delivery, and what to expect in weeks 28-40.',
}

export default function ThirdTrimesterPage() {
  const weeks = getWeeksByTrimester(3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🌳</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Third Trimester of Pregnancy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Weeks 28-40: The final stretch! Preparing for labor, delivery, and meeting your baby.
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
              <span>Baby grows rapidly and gains weight</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Increased fatigue and discomfort</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Braxton Hicks contractions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Preparing for labor and delivery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Nesting instinct kicks in</span>
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
              <span>Week 28: Welcome to third trimester!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 32: Weekly prenatal visits begin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 36: Group B strep test</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 37: Baby is full term!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week 40: Your due date arrives</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Common Symptoms */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Third Trimester Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: '😮‍💨', title: 'Shortness of Breath', desc: 'Baby pressing on diaphragm' },
              { emoji: '🔥', title: 'Heartburn', desc: 'Acid reflux and indigestion' },
              { emoji: '💤', title: 'Trouble Sleeping', desc: 'Difficulty finding comfortable position' },
              { emoji: '🦵', title: 'Swelling', desc: 'Swollen feet, ankles, and hands' },
              { emoji: '💪', title: 'Braxton Hicks', desc: 'Practice contractions' },
              { emoji: '🚽', title: 'Frequent Urination', desc: 'Baby pressing on bladder' },
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
            Third Trimester Nutrition
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Focus on:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li>Continue eating a balanced, nutritious diet</li>
              <li>Eat small, frequent meals to avoid heartburn</li>
              <li>Stay hydrated to prevent swelling and constipation</li>
              <li>Foods rich in vitamin K for blood clotting</li>
              <li>Avoid lying down immediately after eating</li>
            </ul>
            <p>
              <strong>Preparing for labor:</strong> Some women eat dates in the final weeks as studies suggest
              they may help with cervical ripening and labor progression. Always consult your healthcare provider
              before making dietary changes.
            </p>
          </div>
        </div>
      </section>

      {/* Preparing for Labor */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Preparing for Labor & Delivery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hospital paperwork and ID</li>
                <li>• Comfortable clothes</li>
                <li>• Toiletries</li>
                <li>• Baby outfit and car seat</li>
                <li>• Phone charger</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Signs of Labor</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular contractions</li>
                <li>• Water breaking</li>
                <li>• Bloody show</li>
                <li>• Lower back pain</li>
                <li>• Baby dropping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Week by Week */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse Third Trimester Week by Week
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
          Almost There!
        </h2>
        <p className="text-primary-100 mb-6">
          Track your final weeks and prepare for your baby's arrival
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
