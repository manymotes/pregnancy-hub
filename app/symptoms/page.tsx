import Link from 'next/link'
import { symptomsData, getSymptomsByCategory } from '@/lib/symptomsData'

export const metadata = {
  title: 'Pregnancy Symptoms Guide - What to Expect & How to Find Relief',
  description: 'Complete guide to pregnancy symptoms by trimester. Learn about causes, relief strategies, and when to call your doctor for common pregnancy discomforts.',
}

export default function SymptomsPage() {
  const earlySymptoms = getSymptomsByCategory('early')
  const commonSymptoms = getSymptomsByCategory('common')
  const thirdTrimesterSymptoms = getSymptomsByCategory('third-trimester')
  const concerningSymptoms = getSymptomsByCategory('concerning')

  const categories = [
    {
      title: 'Early Pregnancy Symptoms',
      description: 'Common symptoms in the first trimester, often the first signs of pregnancy',
      symptoms: earlySymptoms,
      color: 'from-pink-50 to-purple-50',
      icon: '🌸',
    },
    {
      title: 'Common Throughout Pregnancy',
      description: 'Symptoms that can occur in any trimester',
      symptoms: commonSymptoms,
      color: 'from-blue-50 to-cyan-50',
      icon: '💙',
    },
    {
      title: 'Third Trimester Symptoms',
      description: 'Late pregnancy discomforts as your baby grows',
      symptoms: thirdTrimesterSymptoms,
      color: 'from-amber-50 to-orange-50',
      icon: '🌟',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pregnancy Symptoms Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding pregnancy symptoms helps you know what's normal and when to seek medical advice.
          Explore our comprehensive guide to common pregnancy discomforts and find relief strategies.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-primary-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">{symptomsData.length}</div>
          <div className="text-gray-700 font-medium">Symptoms Covered</div>
        </div>
        <div className="bg-pink-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-pink-600 mb-2">3</div>
          <div className="text-gray-700 font-medium">Trimesters</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
          <div className="text-gray-700 font-medium">Evidence-Based</div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-4">
          <span className="text-3xl">ℹ️</span>
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Remember</h3>
            <p className="text-blue-800">
              Every pregnancy is unique. While these symptoms are common, you may experience some, all, or none of them.
              Always contact your healthcare provider if you have concerns or questions about your symptoms.
            </p>
          </div>
        </div>
      </div>

      {/* Symptom Categories */}
      {categories.map((category) => (
        <section key={category.title} className="mb-12">
          <div className={`bg-gradient-to-r ${category.color} rounded-lg p-6 mb-6`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>{category.icon}</span>
              {category.title}
            </h2>
            <p className="text-gray-700 text-lg">{category.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.symptoms.map((symptom) => (
              <Link
                key={symptom.slug}
                href={`/symptoms/${symptom.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {symptom.shortDescription}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>📅</span>
                    <span className="text-xs">{symptom.whenItOccurs}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>📊</span>
                    <span className="text-xs">{symptom.howCommon}</span>
                  </div>
                </div>
                <div className="mt-4 text-primary-600 font-semibold text-sm flex items-center gap-1">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Emergency Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
          <span>⚠️</span> When to Seek Immediate Medical Attention
        </h2>
        <p className="text-red-800 mb-4">
          While most pregnancy symptoms are normal, some require immediate medical care. Call your doctor or go to the emergency room if you experience:
        </p>
        <ul className="grid md:grid-cols-2 gap-3 text-red-900">
          <li className="flex items-start gap-2">
            <span className="text-red-600">•</span>
            <span>Severe abdominal pain or cramping</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">•</span>
            <span>Vaginal bleeding or fluid leakage</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">•</span>
            <span>Severe headache with visual changes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">•</span>
            <span>Sudden severe swelling in face/hands</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">•</span>
            <span>Decreased baby movement after 28 weeks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">•</span>
            <span>Signs of preterm labor before 37 weeks</span>
          </li>
        </ul>
      </div>

      {/* Related Resources */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/week-by-week"
            className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-bold mb-2">Week by Week</h3>
            <p className="text-sm text-primary-50">Track your pregnancy journey</p>
          </Link>
          <Link
            href="/nutrition"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">🥗</div>
            <h3 className="font-bold mb-2">Nutrition Guide</h3>
            <p className="text-sm text-green-50">Eat right for you and baby</p>
          </Link>
          <Link
            href="/baby-development"
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">👶</div>
            <h3 className="font-bold mb-2">Baby Development</h3>
            <p className="text-sm text-purple-50">How your baby grows</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
