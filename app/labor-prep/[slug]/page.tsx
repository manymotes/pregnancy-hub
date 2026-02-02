import Link from 'next/link'
import { getLaborPrepData, laborPrepData } from '@/lib/laborPrepData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return laborPrepData.map((topic) => ({
    slug: topic.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getLaborPrepData(params.slug)

  if (!data) {
    return {
      title: 'Topic Not Found',
    }
  }

  return {
    title: `${data.title} - Labor & Delivery Guide`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title}`,
      description: data.shortDescription,
    },
  }
}

export default function LaborPrepTopicPage({ params }: { params: { slug: string } }) {
  const data = getLaborPrepData(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/labor-prep" className="hover:text-primary-600">Labor & Delivery</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-8">
        <div className="text-xs uppercase tracking-wide text-pink-600 font-semibold mb-2">
          {data.category.replace('-', ' ')}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-xl text-gray-700">{data.shortDescription}</p>
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

      {/* Key Points */}
      <section className="mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Key Points
          </h2>
          <ul className="space-y-3">
            {data.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-900">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to Know */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📖</span> What to Know
          </h2>
          <ul className="space-y-3">
            {data.whatToKnow.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Prepare */}
      <section className="mb-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✓</span> How to Prepare
          </h2>
          <ul className="space-y-3">
            {data.howToPrepare.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">→</span>
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pros and Cons */}
      {data.prosAndCons && (
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                <span>✓</span> Pros
              </h3>
              <ul className="space-y-2">
                {data.prosAndCons.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 mt-0.5">+</span>
                    <span className="text-gray-900">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                <span>⚠️</span> Cons
              </h3>
              <ul className="space-y-2">
                {data.prosAndCons.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-orange-600 mt-0.5">-</span>
                    <span className="text-gray-900">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* When to Consider */}
      {data.whenToConsider && data.whenToConsider.length > 0 && (
        <section className="mb-8">
          <div className="bg-purple-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🤔</span> When to Consider
            </h2>
            <ul className="space-y-3">
              {data.whenToConsider.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Topics */}
      {data.relatedTopics.length > 0 && (
        <section className="mb-8">
          <div className="bg-pink-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Topics</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedTopics.map(slug => {
                const relatedData = laborPrepData.find(topic => topic.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/labor-prep/${slug}`}
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

      {/* Back to all topics */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/labor-prep"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Labor & Delivery Topics
        </Link>
      </div>
    </div>
  )
}
