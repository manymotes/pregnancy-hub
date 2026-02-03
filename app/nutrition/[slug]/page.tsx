import Link from 'next/link'
import { getNutritionData, nutritionData } from '@/lib/nutritionData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return nutritionData.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getNutritionData(params.slug)

  if (!data) {
    return {
      title: 'Nutrition Article Not Found',
    }
  }

  return {
    title: `${data.title} - Pregnancy Nutrition Guide`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title} During Pregnancy`,
      description: data.shortDescription,
    },
  }
}

export default function NutritionArticlePage({ params }: { params: { slug: string } }) {
  const data = getNutritionData(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/nutrition" className="hover:text-primary-600">Nutrition</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-lg p-6 mb-8">
        <div className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
          {data.category.replace('-', ' ')}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-xl text-gray-700">{data.shortDescription}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-1 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>📊</span> Recommended Intake
          </h3>
          <p className="text-gray-700">{data.recommendedIntake}</p>
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

      {/* By Trimester */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📆</span> By Trimester
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">First Trimester</h3>
              <p className="text-gray-700">{data.trimesterInfo.first}</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Second Trimester</h3>
              <p className="text-gray-700">{data.trimesterInfo.second}</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Third Trimester</h3>
              <p className="text-gray-700">{data.trimesterInfo.third}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✨</span> Key Benefits
          </h2>
          <ul className="space-y-3">
            {data.keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Best Sources */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🥗</span> Best Sources
          </h2>
          <ul className="space-y-3">
            {data.bestSources.map((source, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{source}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Important Considerations */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Important Considerations
          </h2>
          <ul className="space-y-3">
            {data.importantConsiderations.map((consideration, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-600 mt-1">!</span>
                <span className="text-gray-700">{consideration}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to Talk to Your Doctor */}
      <section className="mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span>👨‍⚕️</span> When to Talk to Your Doctor
          </h2>
          <p className="text-blue-800 mb-4 font-semibold">
            Contact your healthcare provider if:
          </p>
          <ul className="space-y-3">
            {data.whenToTalk.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-blue-900">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Topics */}
      {data.relatedTopics.length > 0 && (
        <section className="mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Nutrition Topics</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedTopics.map(slug => {
                const relatedData = nutritionData.find(n => n.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/nutrition/${slug}`}
                    className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow text-green-600 hover:text-green-700 font-medium"
                  >
                    {relatedData.title} →
                  </Link>
                ) : null
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to all nutrition */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/nutrition"
          className="text-green-600 hover:text-green-700 font-semibold"
        >
          ← View All Nutrition Topics
        </Link>
      </div>
    </div>
  )
}
