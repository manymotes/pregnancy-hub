import Link from 'next/link'
import { getComplicationData, complicationsData } from '@/lib/complicationsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return complicationsData.map((comp) => ({
    slug: comp.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getComplicationData(params.slug)

  if (!data) {
    return {
      title: 'Complication Not Found',
    }
  }

  return {
    title: `${data.title} - Pregnancy Complication Guide`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title}`,
      description: data.shortDescription,
    },
  }
}

export default function ComplicationPage({ params }: { params: { slug: string } }) {
  const data = getComplicationData(params.slug)

  if (!data) {
    notFound()
  }

  const severityColor =
    data.severity === 'mild' ? 'green' :
    data.severity === 'moderate' ? 'yellow' :
    data.severity === 'serious' ? 'orange' : 'red'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/complications" className="hover:text-primary-600">Complications</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className={`bg-gradient-to-r from-${severityColor}-50 to-${severityColor}-100 rounded-lg p-6 mb-8`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-wide text-gray-600 font-semibold">
            {data.category.replace('-', ' ')}
          </span>
          <span className={`text-xs px-2 py-1 rounded bg-${severityColor}-100 text-${severityColor}-700`}>
            {data.severity}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-lg text-gray-700 mb-2">{data.shortDescription}</p>
        <p className="text-sm text-gray-600">Affects: {data.howCommon}</p>
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

      {/* Symptoms */}
      <section className="mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🩺</span> Symptoms
          </h2>
          <ul className="space-y-3">
            {data.symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-900">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Causes */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔍</span> Causes
          </h2>
          <ul className="space-y-3">
            {data.causes.map((cause, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="mb-8">
        <div className="bg-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Risk Factors
          </h2>
          <ul className="space-y-3">
            {data.riskFactors.map((factor, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-gray-900">{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diagnosis */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔬</span> Diagnosis
          </h2>
          <ul className="space-y-3">
            {data.diagnosis.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Treatment */}
      <section className="mb-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💊</span> Treatment
          </h2>
          <ul className="space-y-3">
            {data.treatment.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prevention */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🛡️</span> Prevention
          </h2>
          <ul className="space-y-3">
            {data.prevention.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Complications */}
      <section className="mb-8">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Potential Complications
          </h2>
          <ul className="space-y-3">
            {data.complications.map((comp, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 mt-1">!</span>
                <span className="text-gray-900">{comp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to Call Doctor */}
      <section className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span>🚨</span> When to Call Your Doctor
          </h2>
          <p className="text-red-800 mb-4 font-semibold">
            Contact your healthcare provider immediately if you experience:
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

      {/* Related Conditions */}
      {data.relatedConditions.length > 0 && (
        <section className="mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Conditions</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedConditions.map(slug => {
                const relatedData = complicationsData.find(comp => comp.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/complications/${slug}`}
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

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-gray-600 text-center">
          This information is for educational purposes and should not replace medical advice. Always consult your healthcare provider for personalized guidance.
        </p>
      </div>

      {/* Back to all complications */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/complications"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Pregnancy Complications
        </Link>
      </div>
    </div>
  )
}
