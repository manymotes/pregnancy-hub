import Link from 'next/link'
import { getSymptomWeekData, comprehensiveSymptoms, generateAllSymptomWeekPages } from '@/lib/symptomsWeekData'
import { notFound } from 'next/navigation'

// Helper function to extract week number from params
// Handles both "29" and "week-29" formats due to Next.js dynamic route behavior
function parseWeekParam(weekParam: string | undefined): number {
  if (!weekParam) return 0
  const weekStr = weekParam.startsWith('week-') ? weekParam.slice(5) : weekParam
  return parseInt(weekStr, 10) || 0
}

export async function generateStaticParams() {
  return generateAllSymptomWeekPages().map(({ symptom, week }) => ({
    slug: symptom,
    weeknum: `week-${week}`,  // URL will be /symptoms/[slug]/week-6
  }))
}

type PageParams = { slug: string; weeknum: string }

export async function generateMetadata(props: { params: PageParams }) {
  // Access params directly (Next.js 14.2.x style)
  const { slug, weeknum } = props.params
  const symptomData = getSymptomWeekData(slug)
  const week = parseWeekParam(weeknum)

  if (!symptomData || !week) {
    return {
      title: 'Symptom Not Found',
    }
  }

  const weekInfo = symptomData.weekSpecificInfo[week]
  const severityText = weekInfo?.severity ? `${weekInfo.severity.charAt(0).toUpperCase()}${weekInfo.severity.slice(1)}` : 'Common'

  return {
    title: `${symptomData.title} at Week ${week} - ${severityText} | Pregnancy Symptoms by Week`,
    description: `${symptomData.title} during pregnancy week ${week}. ${weekInfo?.description || symptomData.shortDescription} Learn causes, relief strategies, and when to call your doctor.`,
    openGraph: {
      title: `${symptomData.title} at Pregnancy Week ${week}`,
      description: weekInfo?.description || symptomData.shortDescription,
    },
  }
}

export default function SymptomWeekPage(props: { params: PageParams }) {
  // Access params directly (Next.js 14.2.x style)
  const { slug, weeknum } = props.params
  const symptomData = getSymptomWeekData(slug)
  const week = parseWeekParam(weeknum)

  if (!symptomData || !week || !symptomData.commonWeeks.includes(week)) {
    notFound()
  }

  const weekInfo = symptomData.weekSpecificInfo[week]
  const isPeakWeek = symptomData.peakWeeks.includes(week)

  // Get trimester
  const trimester = week <= 13 ? 1 : week <= 27 ? 2 : 3
  const trimesterText = trimester === 1 ? 'First' : trimester === 2 ? 'Second' : 'Third'
  const trimesterInfo = trimester === 1 ? symptomData.trimesterFrequency.first :
                        trimester === 2 ? symptomData.trimesterFrequency.second :
                        symptomData.trimesterFrequency.third

  // Find adjacent weeks for navigation
  const currentIndex = symptomData.commonWeeks.indexOf(week)
  const prevWeek = currentIndex > 0 ? symptomData.commonWeeks[currentIndex - 1] : null
  const nextWeek = currentIndex < symptomData.commonWeeks.length - 1 ? symptomData.commonWeeks[currentIndex + 1] : null

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
        <span className="text-gray-900">Week {week}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 via-purple-50 to-pink-50 rounded-lg p-8 mb-8">
        {isPeakWeek && (
          <div className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
            PEAK WEEK
          </div>
        )}
        <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-2">
          Week {week} • {trimesterText} Trimester
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {symptomData.title} at Week {week}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          {weekInfo?.description || symptomData.shortDescription}
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="flex gap-4 mb-8">
        {prevWeek && (
          <Link
            href={`/symptoms/${symptomData.slug}/week-${prevWeek}`}
            className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary-400 hover:shadow-md transition-all"
          >
            <div className="text-sm text-gray-600 mb-1">← Previous</div>
            <div className="font-bold text-gray-900">Week {prevWeek}</div>
          </Link>
        )}
        {nextWeek && (
          <Link
            href={`/symptoms/${symptomData.slug}/week-${nextWeek}`}
            className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary-400 hover:shadow-md transition-all text-right"
          >
            <div className="text-sm text-gray-600 mb-1">Next →</div>
            <div className="font-bold text-gray-900">Week {nextWeek}</div>
          </Link>
        )}
      </div>

      {/* Severity Indicator */}
      {weekInfo && (
        <div className="mb-8">
          <div className={`rounded-lg p-6 ${
            weekInfo.severity === 'none' ? 'bg-gray-50 border-2 border-gray-200' :
            weekInfo.severity === 'mild' ? 'bg-green-50 border-2 border-green-200' :
            weekInfo.severity === 'moderate' ? 'bg-yellow-50 border-2 border-yellow-300' :
            'bg-red-50 border-2 border-red-300'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">
                {weekInfo.severity === 'none' ? '✓' :
                 weekInfo.severity === 'mild' ? '◐' :
                 weekInfo.severity === 'moderate' ? '◕' :
                 '●'}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Severity This Week: {weekInfo.severity.charAt(0).toUpperCase() + weekInfo.severity.slice(1)}
              </h2>
            </div>
            <p className="text-gray-700 text-lg">{weekInfo.description}</p>
          </div>
        </div>
      )}

      {/* Week-Specific Tips */}
      {weekInfo && weekInfo.tips.length > 0 && (
        <section className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💡</span> Tips for Week {week}
            </h2>
            <ul className="space-y-3">
              {weekInfo.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1 text-lg">✓</span>
                  <span className="text-gray-700 text-lg">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Trimester Context */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📆</span> {trimesterText} Trimester Overview
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{trimesterInfo}</p>
          <div className="flex gap-4">
            <Link
              href={`/symptoms/by-trimester/${trimester}`}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All {trimesterText} Trimester Symptoms →
            </Link>
          </div>
        </div>
      </section>

      {/* What Causes It */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔍</span> What Causes {symptomData.title} at Week {week}?
          </h2>
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

      {/* Normal vs Concerning */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span>✓</span> Normal Signs
            </h3>
            <ul className="space-y-2">
              {symptomData.normalVsConcerning.normal.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1 text-sm">✓</span>
                  <span className="text-green-900 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <span>⚠</span> Concerning Signs
            </h3>
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
      </section>

      {/* Relief Strategies */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💊</span> Relief Strategies
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {symptomData.reliefStrategies.map((strategy, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              href={`/symptoms/relief/${symptomData.slug}`}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              View Complete Relief Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* When to Call Doctor */}
      <section className="mb-8">
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span>🏥</span> When to Call Your Doctor
          </h2>
          <p className="text-red-800 mb-4 font-semibold">
            Contact your healthcare provider if you experience:
          </p>
          <ul className="space-y-3">
            {symptomData.whenToCallDoctor.map((warning, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-red-600 mt-1">⚠</span>
                <span className="text-red-900">{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Week Navigation */}
      <section className="mb-8">
        <div className="bg-primary-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Track {symptomData.title} by Week
          </h2>
          <div className="flex flex-wrap gap-2">
            {symptomData.commonWeeks.map(w => (
              <Link
                key={w}
                href={`/symptoms/${symptomData.slug}/week-${w}`}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  w === week
                    ? 'bg-primary-600 text-white'
                    : symptomData.peakWeeks.includes(w)
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-white text-primary-600 hover:bg-primary-100'
                }`}
              >
                Week {w}
                {symptomData.peakWeeks.includes(w) && <span className="ml-1">🔥</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Symptoms */}
      {symptomData.relatedSymptoms.length > 0 && (
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Symptoms</h2>
            <div className="flex flex-wrap gap-3">
              {symptomData.relatedSymptoms.map(slug => {
                const relatedData = comprehensiveSymptoms.find(s => s.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/symptoms/${slug}`}
                    className="bg-primary-50 px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors text-primary-700 font-medium"
                  >
                    {relatedData.title} →
                  </Link>
                ) : null
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back Links */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
        <Link
          href={`/symptoms/${symptomData.slug}`}
          className="flex-1 text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          ← View {symptomData.title} Overview
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
