import Link from 'next/link'
import { calculatorsData } from '@/lib/calculatorsData'

export const metadata = {
  title: 'Pregnancy Calculators & Tools - Due Date, Weight Gain, Contraction Timer',
  description: 'Essential pregnancy calculators and tools including due date calculator, weight gain tracker, contraction timer, kick counter, and more.',
}

export default function CalculatorsPage() {
  const dateTools = calculatorsData.filter((calc) => calc.category === 'dates')
  const healthTools = calculatorsData.filter((calc) => calc.category === 'health')
  const babyTools = calculatorsData.filter((calc) => calc.category === 'baby')
  const planningTools = calculatorsData.filter((calc) => calc.category === 'planning')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pregnancy Calculators & Tools
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Essential guides to pregnancy calculators and tracking tools. Learn how to use each tool effectively to monitor your pregnancy.
        </p>
      </div>

      {/* Important Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
          <span>ℹ️</span> How to Use These Guides
        </h2>
        <p className="text-blue-900 mb-3">
          These are educational guides explaining how pregnancy calculators work, what they measure, and how to interpret results. They help you understand the tools your healthcare provider uses.
        </p>
        <p className="text-sm text-blue-800">
          Always discuss calculator results with your healthcare provider. These tools provide estimates and general information, not medical diagnoses.
        </p>
      </div>

      {/* Date & Timeline Tools */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">📅 Date & Timeline Calculators</h2>
          <p className="text-gray-600">Track important dates and milestones throughout your pregnancy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dateTools.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{calc.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Read Guide →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Health & Nutrition Tools */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">💪 Health & Nutrition Calculators</h2>
          <p className="text-gray-600">Monitor your health and nutrition needs during pregnancy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTools.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{calc.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Read Guide →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Baby Monitoring Tools */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">👶 Baby Monitoring Tools</h2>
          <p className="text-gray-600">Track your baby's growth, movements, and development.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {babyTools.map((calc) => (
            <Link
              key={calc.slug}
              href={`/calculators/${calc.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{calc.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Read Guide →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pregnancy Planning Tools */}
      {planningTools.length > 0 && (
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🎯 Pregnancy Planning Tools</h2>
            <p className="text-gray-600">Tools to help you plan and prepare for pregnancy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningTools.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{calc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{calc.shortDescription}</p>
                <span className="text-primary-600 font-semibold text-sm">Read Guide →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tips Section */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>💡</span> Getting the Most from Pregnancy Tools
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-900">
          <div>
            <h4 className="font-bold mb-2">Use Tools Wisely:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Calculators provide estimates, not exact predictions</li>
              <li>• Every pregnancy is unique</li>
              <li>• Combine tools with provider guidance</li>
              <li>• Don't stress over small variations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">When to Consult Your Provider:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Any concerning symptoms</li>
              <li>• Results that seem unusual</li>
              <li>• Questions about what's normal</li>
              <li>• Before making health decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
