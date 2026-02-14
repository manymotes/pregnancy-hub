import Link from 'next/link'
import { getSymptomWeekData, comprehensiveSymptoms } from '@/lib/symptomsWeekData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return comprehensiveSymptoms.map(symptom => ({
    slug: symptom.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const symptomData = getSymptomWeekData(params.slug)

  if (!symptomData) {
    return {
      title: 'Symptom Not Found',
    }
  }

  return {
    title: `How to Relieve ${symptomData.title} During Pregnancy - Relief Strategies & Remedies`,
    description: `Complete relief guide for ${symptomData.title.toLowerCase()} during pregnancy. Discover safe, effective strategies to manage this symptom, plus tips on when to seek medical help.`,
    openGraph: {
      title: `Relief Guide: ${symptomData.title} During Pregnancy`,
      description: `Safe, effective strategies to relieve ${symptomData.title.toLowerCase()} during pregnancy.`,
    },
  }
}

export default function SymptomReliefPage({ params }: { params: { slug: string } }) {
  const symptomData = getSymptomWeekData(params.slug)

  if (!symptomData) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/symptoms" className="hover:text-primary-600">Symptoms</Link>
        <span className="mx-2">→</span>
        <Link href={`/symptoms/${symptomData.slug}`} className="hover:text-primary-600">{symptomData.title}</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">Relief Guide</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-lg p-8 mb-8">
        <div className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
          Relief Strategies
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How to Relieve {symptomData.title}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Safe, evidence-based strategies to help manage {symptomData.title.toLowerCase()} during pregnancy.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-4">
          <span className="text-3xl">ℹ️</span>
          <div>
            <h3 className="font-bold text-blue-900 mb-2 text-lg">About This Symptom</h3>
            <p className="text-blue-800 mb-2">{symptomData.shortDescription}</p>
            <div className="text-sm text-blue-700">
              <span className="font-semibold">Most common:</span> Weeks {symptomData.commonWeeks[0]}-{symptomData.commonWeeks[symptomData.commonWeeks.length - 1]}
              {symptomData.peakWeeks.length > 0 && (
                <span className="ml-4">
                  <span className="font-semibold">Peak weeks:</span> {symptomData.peakWeeks.join(', ')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Relief Strategies - Main Section */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span>💡</span> Effective Relief Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {symptomData.reliefStrategies.map((strategy, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-green-600 mt-1 text-lg flex-shrink-0">✓</span>
                <span className="text-gray-800">{strategy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding the Causes */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span>🔍</span> Understanding What Causes It
          </h2>
          <p className="text-gray-700 mb-4">
            Understanding the root causes can help you choose the most effective relief strategies:
          </p>
          <ul className="space-y-3">
            {symptomData.whatCausesIt.map((cause, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's Normal vs. Concerning */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span>⚖️</span> Normal vs. Concerning Signs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span>✓</span> Normal Signs
              </h3>
              <p className="text-green-800 mb-3 text-sm">
                These symptoms are typically normal and can be managed at home:
              </p>
              <ul className="space-y-2">
                {symptomData.normalVsConcerning.normal.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1 text-sm">✓</span>
                    <span className="text-green-900 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span>⚠</span> Concerning Signs
              </h3>
              <p className="text-red-800 mb-3 text-sm font-semibold">
                Call your doctor if you experience:
              </p>
              <ul className="space-y-2">
                {symptomData.normalVsConcerning.concerning.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 text-sm">⚠</span>
                    <span className="text-red-900 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Your Doctor - Detailed */}
      <section className="mb-8">
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
            <span>🏥</span> When to Seek Medical Help
          </h2>
          <p className="text-red-800 mb-6 text-lg font-semibold">
            Contact your healthcare provider immediately if you experience any of these warning signs:
          </p>
          <div className="space-y-4">
            {symptomData.whenToCallDoctor.map((warning, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 text-xl flex-shrink-0">⚠</span>
                  <span className="text-red-900 font-medium">{warning}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-100 rounded-lg">
            <p className="text-red-900 text-sm font-semibold">
              Remember: It's always better to call your doctor if you're unsure. They're there to help and would rather hear from you than have you worry unnecessarily.
            </p>
          </div>
        </div>
      </section>

      {/* Week-by-Week Relief */}
      <section className="mb-8">
        <div className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Week-by-Week Relief Tips
          </h2>
          <p className="text-gray-700 mb-6">
            Get specific relief strategies for each week this symptom commonly occurs:
          </p>
          <div className="flex flex-wrap gap-3">
            {symptomData.commonWeeks.map(week => {
              const weekInfo = symptomData.weekSpecificInfo[week]
              return (
                <Link
                  key={week}
                  href={`/symptoms/${symptomData.slug}/week-${week}`}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    symptomData.peakWeeks.includes(week)
                      ? 'bg-red-100 text-red-700 border-2 border-red-300 hover:bg-red-200'
                      : 'bg-white text-primary-600 border-2 border-primary-200 hover:bg-primary-50'
                  }`}
                >
                  <div>Week {week}</div>
                  {weekInfo && (
                    <div className="text-xs opacity-75 mt-1">
                      {weekInfo.severity}
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trimester-Specific Information */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            By Trimester
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">First Trimester (Weeks 1-13)</h3>
              <p className="text-gray-700">{symptomData.trimesterFrequency.first}</p>
              <Link
                href="/symptoms/by-trimester/1"
                className="inline-block mt-3 text-green-600 hover:text-green-700 font-semibold text-sm"
              >
                View all first trimester symptoms →
              </Link>
            </div>
            <div className="border-l-4 border-blue-400 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Second Trimester (Weeks 14-27)</h3>
              <p className="text-gray-700">{symptomData.trimesterFrequency.second}</p>
              <Link
                href="/symptoms/by-trimester/2"
                className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                View all second trimester symptoms →
              </Link>
            </div>
            <div className="border-l-4 border-purple-400 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Third Trimester (Weeks 28-40)</h3>
              <p className="text-gray-700">{symptomData.trimesterFrequency.third}</p>
              <Link
                href="/symptoms/by-trimester/3"
                className="inline-block mt-3 text-purple-600 hover:text-purple-700 font-semibold text-sm"
              >
                View all third trimester symptoms →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Symptoms */}
      {symptomData.relatedSymptoms.length > 0 && (
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Symptoms & Relief</h2>
            <p className="text-gray-700 mb-4">
              These symptoms often occur together. Managing one may help with others:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {symptomData.relatedSymptoms.map(slug => {
                const relatedData = comprehensiveSymptoms.find(s => s.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/symptoms/relief/${slug}`}
                    className="flex items-center justify-between p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors border border-primary-200"
                  >
                    <span className="text-primary-900 font-medium">{relatedData.title}</span>
                    <span className="text-primary-600">→</span>
                  </Link>
                ) : null
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
        <Link
          href={`/symptoms/${symptomData.slug}`}
          className="flex-1 text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          ← Back to {symptomData.title} Overview
        </Link>
        <Link
          href="/symptoms"
          className="flex-1 text-center bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          View All Symptoms
        </Link>
      </div>
    </div>
  )
}
