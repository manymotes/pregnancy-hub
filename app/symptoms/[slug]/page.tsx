import Link from 'next/link'
import { getSymptomData, symptomsData } from '@/lib/symptomsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return symptomsData.map((symptom) => ({
    slug: symptom.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getSymptomData(params.slug)

  if (!data) {
    return {
      title: 'Symptom Not Found',
    }
  }

  return {
    title: `${data.title} During Pregnancy - Causes, Relief & When to Call Doctor`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title} During Pregnancy`,
      description: data.shortDescription,
    },
  }
}

export default function SymptomPage({ params }: { params: { slug: string } }) {
  const data = getSymptomData(params.slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/symptoms" className="hover:text-primary-600">Symptoms</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-6 mb-8">
        <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-2">
          {data.category.replace('-', ' ')}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-xl text-gray-700">{data.shortDescription}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>📅</span> When It Occurs
          </h3>
          <p className="text-gray-700">{data.whenItOccurs}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>📊</span> How Common
          </h3>
          <p className="text-gray-700">{data.howCommon}</p>
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
            <div className="border-l-4 border-primary-400 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">First Trimester</h3>
              <p className="text-gray-700">{data.trimesterFrequency.first}</p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Second Trimester</h3>
              <p className="text-gray-700">{data.trimesterFrequency.second}</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="font-bold text-gray-900 mb-1">Third Trimester</h3>
              <p className="text-gray-700">{data.trimesterFrequency.third}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔍</span> What Causes It?
          </h2>
          <ul className="space-y-3">
            {data.causes.map((cause, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Relief Strategies */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Relief Strategies
          </h2>
          <ul className="space-y-3">
            {data.reliefStrategies.map((strategy, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to Call Doctor */}
      <section className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> When to Call Your Doctor
          </h2>
          <p className="text-red-800 mb-4 font-semibold">
            Contact your healthcare provider if you experience:
          </p>
          <ul className="space-y-3">
            {data.whenToCallDoctor.map((warning, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 mt-1">⚠</span>
                <span className="text-red-900">{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Symptoms */}
      {data.relatedSymptoms.length > 0 && (
        <section className="mb-8">
          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Symptoms</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedSymptoms.map(slug => {
                const relatedData = symptomsData.find(s => s.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/symptoms/${slug}`}
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

      {/* Back to all symptoms */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/symptoms"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Pregnancy Symptoms
        </Link>
      </div>
    </div>
  )
}
