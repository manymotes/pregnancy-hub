import Link from 'next/link'
import { getCalculatorData, calculatorsData } from '@/lib/calculatorsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return calculatorsData.map((calc) => ({
    slug: calc.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getCalculatorData(params.slug)

  if (!data) {
    return {
      title: 'Calculator Not Found',
    }
  }

  return {
    title: `${data.title} - Pregnancy Calculator Guide`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title} Guide`,
      description: data.shortDescription,
    },
  }
}

export default function CalculatorPage({ params }: { params: { slug: string } }) {
  const data = getCalculatorData(params.slug)

  if (!data) {
    notFound()
  }

  const categoryLabel =
    data.category === 'dates' ? 'Date & Timeline' :
    data.category === 'health' ? 'Health & Nutrition' :
    data.category === 'baby' ? 'Baby Monitoring' : 'Pregnancy Planning'

  const categoryColor =
    data.category === 'dates' ? 'blue' :
    data.category === 'health' ? 'green' :
    data.category === 'baby' ? 'pink' : 'purple'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/calculators" className="hover:text-primary-600">Calculators & Tools</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className={`bg-gradient-to-r from-${categoryColor}-50 to-${categoryColor}-100 rounded-lg p-6 mb-8`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-wide text-gray-600 font-semibold">
            {categoryLabel}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-lg text-gray-700">{data.shortDescription}</p>
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

      {/* How It Works */}
      <section className="mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚙️</span> How It Works
          </h2>
          <ul className="space-y-3">
            {data.howItWorks.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What You Need */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📋</span> What You Need
          </h2>
          <ul className="space-y-3">
            {data.whatYouNeed.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Use */}
      <section className="mb-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📱</span> How to Use
          </h2>
          <ol className="space-y-3">
            {data.howToUse.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">{index + 1}.</span>
                <span className="text-gray-900">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Interpretation */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📊</span> Understanding Your Results
          </h2>
          <ul className="space-y-3">
            {data.interpretation.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Limitations */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Limitations to Keep in Mind
          </h2>
          <ul className="space-y-3">
            {data.limitations.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-600 mt-1">•</span>
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-8">
        <div className="bg-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Helpful Tips
          </h2>
          <ul className="space-y-3">
            {data.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">✓</span>
                <span className="text-gray-900">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Tools */}
      {data.relatedTools.length > 0 && (
        <section className="mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedTools.map(slug => {
                const relatedData = calculatorsData.find(calc => calc.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/calculators/${slug}`}
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
          This guide is for educational purposes. Calculator results are estimates and should not replace medical advice. Always consult your healthcare provider for personalized guidance.
        </p>
      </div>

      {/* Back to all calculators */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/calculators"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Calculators & Tools
        </Link>
      </div>
    </div>
  )
}
