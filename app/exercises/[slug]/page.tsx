import Link from 'next/link'
import { getExerciseData, exercisesData } from '@/lib/exercisesData'
import { notFound } from 'next/navigation'
import { SITE_URL } from '@/lib/constants'

export async function generateStaticParams() {
  return exercisesData.map((exercise) => ({
    slug: exercise.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getExerciseData(params.slug)

  if (!data) {
    return {
      title: 'Exercise Not Found',
    }
  }

  return {
    title: `${data.title} During Pregnancy - Safe Exercise Guide`,
    description: data.shortDescription,
    alternates: {
      canonical: `${SITE_URL}/exercises/${params.slug}`,
    },
    openGraph: {
      title: `${data.title} During Pregnancy - Safe Exercise Guide`,
      description: data.shortDescription,
    },
  }
}

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const data = getExerciseData(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/exercises" className="hover:text-primary-600">Exercises</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
        <div className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
          {data.category.replace('-', ' ')}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-xl text-gray-700">{data.shortDescription}</p>
      </div>

      {/* Quick Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>📅</span> Safe Trimesters
          </h3>
          <div className="flex gap-2">
            {data.trimesterSafety.first && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded">First</span>
            )}
            {data.trimesterSafety.second && (
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">Second</span>
            )}
            {data.trimesterSafety.third && (
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded">Third</span>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>⏱️</span> Recommended Frequency
          </h3>
          <p className="text-gray-700">{data.frequency}</p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="space-y-4">
            {data.detailedDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✨</span> Benefits
          </h2>
          <ul className="space-y-3">
            {data.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Perform */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📋</span> How to Perform
          </h2>
          <ol className="space-y-3">
            {data.howToPerform.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">{index + 1}.</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🛡️</span> Safety Tips
          </h2>
          <ul className="space-y-3">
            {data.safetyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-600 mt-1">•</span>
                <span className="text-gray-900">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modifications by Trimester */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔄</span> Modifications & Variations
          </h2>
          <ul className="space-y-3">
            {data.modifications.map((modification, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span className="text-gray-700">{modification}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to Avoid */}
      <section className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> When to Avoid or Modify
          </h2>
          <p className="text-red-800 mb-4 font-semibold">
            Skip or significantly modify this exercise if you have:
          </p>
          <ul className="space-y-3">
            {data.whenToAvoid.map((condition, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 mt-1">✕</span>
                <span className="text-red-900">{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Exercises */}
      {data.relatedExercises.length > 0 && (
        <section className="mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Exercises</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedExercises.map(slug => {
                const relatedData = exercisesData.find(ex => ex.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/exercises/${slug}`}
                    className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {relatedData.title} →
                  </Link>
                ) : null
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to all exercises */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/exercises"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Pregnancy Exercises
        </Link>
      </div>
    </div>
  )
}
