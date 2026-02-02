import Link from 'next/link'
import { getMedicalTestData, medicalTestsData } from '@/lib/medicalTestsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return medicalTestsData.map((test) => ({
    slug: test.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getMedicalTestData(params.slug)

  if (!data) {
    return {
      title: 'Test Not Found',
    }
  }

  return {
    title: `${data.title} - Pregnancy Test Guide`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title}`,
      description: data.shortDescription,
    },
  }
}

export default function MedicalTestPage({ params }: { params: { slug: string } }) {
  const data = getMedicalTestData(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/medical-tests" className="hover:text-primary-600">Medical Tests</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
            {data.category.replace('-', ' ')}
          </span>
          {data.isRoutine && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Routine</span>
          )}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-xl text-gray-700">{data.shortDescription}</p>
      </div>

      {/* Quick Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>📅</span> When Performed
          </h3>
          <p className="text-gray-700">{data.whenPerformed}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>⏱️</span> Results Timeline
          </h3>
          <p className="text-gray-700">{data.resultsTimeline}</p>
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

      {/* Purpose */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🎯</span> Purpose of Test
          </h2>
          <ul className="space-y-3">
            {data.purpose.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It's Performed */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔬</span> How It's Performed
          </h2>
          <ol className="space-y-3">
            {data.howItsPerformed.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">{index + 1}.</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>👀</span> What to Expect
          </h2>
          <ul className="space-y-3">
            {data.whatToExpect.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Normal Results */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
              <span>✓</span> Normal Results
            </h3>
            <p className="text-green-900">{data.normalResults}</p>
          </div>

          {/* Abnormal Results */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>⚠️</span> Abnormal Results
            </h3>
            <ul className="space-y-2">
              {data.abnormalResults.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span className="text-gray-900">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Risks & Considerations
          </h2>
          <ul className="space-y-3">
            {data.risks.map((risk, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-red-900">{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Preparation */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📝</span> How to Prepare
          </h2>
          <ul className="space-y-3">
            {data.preparation.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Tests */}
      {data.relatedTests.length > 0 && (
        <section className="mb-8">
          <div className="bg-purple-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tests</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedTests.map(slug => {
                const relatedData = medicalTestsData.find(test => test.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/medical-tests/${slug}`}
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

      {/* Back to all tests */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/medical-tests"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Pregnancy Tests
        </Link>
      </div>
    </div>
  )
}
