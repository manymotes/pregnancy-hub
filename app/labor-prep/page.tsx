import Link from 'next/link'
import { laborPrepData } from '@/lib/laborPrepData'

export const metadata = {
  title: 'Labor & Delivery Preparation Guide - Birth Planning & What to Expect',
  description: 'Complete guide to preparing for labor and delivery including pain management, birth plans, stages of labor, and delivery options.',
}

export default function LaborPrepPage() {
  const laborBasics = laborPrepData.filter((topic) => topic.category === 'labor-basics')
  const painManagement = laborPrepData.filter((topic) => topic.category === 'pain-management')
  const deliveryMethods = laborPrepData.filter((topic) => topic.category === 'delivery-methods')
  const preparation = laborPrepData.filter((topic) => topic.category === 'preparation')
  const interventions = laborPrepData.filter((topic) => topic.category === 'interventions')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Labor & Delivery Preparation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know to prepare for labor, understand your options, and feel confident about giving birth.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing for Your Birth Experience</h2>
        <div className="grid md:grid-cols-3 gap-4 text-gray-700">
          <div>
            <h3 className="font-bold mb-2">📚 Learn</h3>
            <p className="text-sm">Understanding labor stages, signs, and what to expect helps reduce anxiety and empowers you to make informed decisions.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">💭 Plan</h3>
            <p className="text-sm">Create a flexible birth plan that communicates your preferences while staying open to what\'s safest for you and baby.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">🤝 Prepare</h3>
            <p className="text-sm">Take classes, practice techniques, pack your bag, and ensure your support team understands their role.</p>
          </div>
        </div>
      </div>

      {/* Labor Basics */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Labor Basics</h2>
          <p className="text-gray-600">Understanding how labor works and what to expect during each stage.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laborBasics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/labor-prep/${topic.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{topic.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pain Management */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Pain Management Options</h2>
          <p className="text-gray-600">Understanding your choices for managing labor pain from natural to medical.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painManagement.map((topic) => (
            <Link
              key={topic.slug}
              href={`/labor-prep/${topic.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{topic.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Delivery Methods</h2>
          <p className="text-gray-600">Understanding different ways babies are born and what each involves.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryMethods.map((topic) => (
            <Link
              key={topic.slug}
              href={`/labor-prep/${topic.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{topic.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Preparation */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Practical Preparation</h2>
          <p className="text-gray-600">Getting ready with classes, planning, and packing for the big day.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preparation.map((topic) => (
            <Link
              key={topic.slug}
              href={`/labor-prep/${topic.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{topic.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Interventions */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Labor Interventions</h2>
          <p className="text-gray-600">Understanding common medical interventions that may be needed during labor.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interventions.map((topic) => (
            <Link
              key={topic.slug}
              href={`/labor-prep/${topic.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{topic.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>🎯</span> Where to Start
        </h3>
        <ul className="space-y-2 text-gray-900">
          <li className="flex items-start gap-2">
            <span className="mt-1">1.</span>
            <span>Learn about <Link href="/labor-prep/stages-of-labor" className="text-primary-600 hover:underline">stages of labor</Link> and <Link href="/labor-prep/labor-signs" className="text-primary-600 hover:underline">signs labor is starting</Link></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">2.</span>
            <span>Research <Link href="/labor-prep/pain-management-options" className="text-primary-600 hover:underline">pain management options</Link> to understand your choices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">3.</span>
            <span>Sign up for <Link href="/labor-prep/childbirth-classes" className="text-primary-600 hover:underline">childbirth classes</Link> in your second trimester</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">4.</span>
            <span>Create a <Link href="/labor-prep/birth-plan" className="text-primary-600 hover:underline">flexible birth plan</Link> and discuss with your provider</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">5.</span>
            <span>Pack your <Link href="/labor-prep/hospital-bag" className="text-primary-600 hover:underline">hospital bag</Link> by 36 weeks</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
