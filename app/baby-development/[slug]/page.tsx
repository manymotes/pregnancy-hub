import Link from 'next/link'
import { getBabyDevData, babyDevData } from '@/lib/babyDevelopmentData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return babyDevData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getBabyDevData(params.slug)

  if (!data) {
    return {
      title: 'Development Topic Not Found',
    }
  }

  return {
    title: `${data.title} - Week-by-Week Pregnancy Development`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title} in the Womb`,
      description: data.shortDescription,
    },
  }
}

export default function BabyDevelopmentPage({ params }: { params: { slug: string } }) {
  const data = getBabyDevData(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/baby-development" className="hover:text-primary-600">Baby Development</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8">
        <div className="text-xs uppercase tracking-wide text-purple-600 font-semibold mb-2">
          {data.developmentStage}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-xl text-gray-700">{data.shortDescription}</p>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center gap-2 text-purple-600 mb-2">
          <span className="text-2xl">📅</span>
          <h3 className="font-bold text-gray-900">Development Timeline</h3>
        </div>
        <p className="text-gray-700">{data.weekRange}</p>
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

      {/* Week-by-Week Milestones */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🗓️</span> Week-by-Week Milestones
          </h2>
          <div className="space-y-4">
            {data.milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">
                    Week {milestone.week}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">{milestone.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>👀</span> What to Expect
          </h2>
          <ul className="space-y-3">
            {data.whatToExpect.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="mb-8">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
            <span>💡</span> Tips for Parents
          </h2>
          <ul className="space-y-3">
            {data.parentTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-purple-900">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✨</span> Amazing Facts
          </h2>
          <div className="space-y-3">
            {data.funFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">💫</span>
                <p className="text-gray-700">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics */}
      {data.relatedTopics.length > 0 && (
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Development Topics</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedTopics.map(slug => {
                const relatedData = babyDevData.find(item => item.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/baby-development/${slug}`}
                    className="bg-purple-50 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors text-purple-700 hover:text-purple-900 font-medium border border-purple-200"
                  >
                    {relatedData.title} →
                  </Link>
                ) : null
              })}
            </div>
          </div>
        </section>
      )}

      {/* Baby Name Cross-Link */}
      <div className="bg-pink-50 rounded-lg border border-pink-200 p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span>👶</span> Planning Ahead?
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          As you watch your baby develop, start thinking about the perfect name. Explore thousands of names with meanings, origins, and popularity trends:
        </p>
        <a
          href="https://babynamescout.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 text-sm"
        >
          Browse baby names →
        </a>
      </div>

      {/* Back to all development topics */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/baby-development"
          className="text-purple-600 hover:text-purple-700 font-semibold"
        >
          ← View All Development Topics
        </Link>
      </div>
    </div>
  )
}
