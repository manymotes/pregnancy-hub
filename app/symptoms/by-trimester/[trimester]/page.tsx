import Link from 'next/link'
import { getSymptomsByTrimester, comprehensiveSymptoms } from '@/lib/symptomsWeekData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return [
    { trimester: '1' },
    { trimester: '2' },
    { trimester: '3' },
  ]
}

export async function generateMetadata({ params }: { params: { trimester: string } }) {
  const trimester = parseInt(params.trimester) as 1 | 2 | 3

  if (!trimester || trimester < 1 || trimester > 3) {
    return {
      title: 'Trimester Not Found',
    }
  }

  const trimesterNames = { 1: 'First', 2: 'Second', 3: 'Third' }
  const name = trimesterNames[trimester]
  const weekRanges = { 1: '1-13', 2: '14-27', 3: '28-40' }

  return {
    title: `${name} Trimester Pregnancy Symptoms (Weeks ${weekRanges[trimester]}) - Complete Guide`,
    description: `Complete guide to ${name.toLowerCase()} trimester pregnancy symptoms. Learn what to expect during weeks ${weekRanges[trimester]}, including common symptoms, relief strategies, and when to call your doctor.`,
    openGraph: {
      title: `${name} Trimester Pregnancy Symptoms Guide`,
      description: `Everything you need to know about pregnancy symptoms during the ${name.toLowerCase()} trimester.`,
    },
  }
}

export default function TrimesterSymptomsPage({ params }: { params: { trimester: string } }) {
  const trimesterNum = parseInt(params.trimester) as 1 | 2 | 3

  if (!trimesterNum || trimesterNum < 1 || trimesterNum > 3) {
    notFound()
  }

  const symptoms = getSymptomsByTrimester(trimesterNum)
  const trimesterNames = { 1: 'First', 2: 'Second', 3: 'Third' }
  const name = trimesterNames[trimesterNum]
  const weekRanges = { 1: { start: 1, end: 13 }, 2: { start: 14, end: 27 }, 3: { start: 28, end: 40 } }
  const range = weekRanges[trimesterNum]

  // Group symptoms by category
  const categories = {
    digestive: symptoms.filter(s => s.category === 'digestive'),
    pain: symptoms.filter(s => s.category === 'pain'),
    physical: symptoms.filter(s => s.category === 'physical'),
    emotional: symptoms.filter(s => s.category === 'emotional'),
    hormonal: symptoms.filter(s => s.category === 'hormonal'),
    skin: symptoms.filter(s => s.category === 'skin'),
    circulation: symptoms.filter(s => s.category === 'circulation'),
    respiratory: symptoms.filter(s => s.category === 'respiratory'),
    urinary: symptoms.filter(s => s.category === 'urinary'),
    'labor-prep': symptoms.filter(s => s.category === 'labor-prep'),
  }

  const categoryInfo = {
    digestive: { icon: '🍽️', name: 'Digestive Symptoms', color: 'from-green-50 to-emerald-50 border-green-200' },
    pain: { icon: '⚡', name: 'Pain & Discomfort', color: 'from-red-50 to-orange-50 border-red-200' },
    physical: { icon: '💪', name: 'Physical Changes', color: 'from-blue-50 to-cyan-50 border-blue-200' },
    emotional: { icon: '😊', name: 'Emotional & Mental', color: 'from-purple-50 to-pink-50 border-purple-200' },
    hormonal: { icon: '🔬', name: 'Hormonal Changes', color: 'from-yellow-50 to-amber-50 border-yellow-200' },
    skin: { icon: '✨', name: 'Skin Changes', color: 'from-pink-50 to-rose-50 border-pink-200' },
    circulation: { icon: '❤️', name: 'Circulation Issues', color: 'from-red-50 to-pink-50 border-red-200' },
    respiratory: { icon: '🫁', name: 'Breathing & Respiratory', color: 'from-blue-50 to-sky-50 border-blue-200' },
    urinary: { icon: '💧', name: 'Urinary Symptoms', color: 'from-cyan-50 to-teal-50 border-cyan-200' },
    'labor-prep': { icon: '👶', name: 'Labor Preparation', color: 'from-indigo-50 to-purple-50 border-indigo-200' },
  }

  const trimesterDescriptions = {
    1: 'The first trimester is a time of dramatic hormonal changes and rapid fetal development. Many women experience intense symptoms like nausea, fatigue, and breast tenderness as their body adjusts to pregnancy. While challenging, these symptoms are typically signs of a healthy pregnancy.',
    2: 'The second trimester is often called the "golden period" of pregnancy. Most early symptoms like nausea and fatigue improve significantly. You\'ll likely have more energy and feel better overall. Your baby bump becomes visible and you may feel baby\'s first movements!',
    3: 'The third trimester brings physical challenges as your baby grows rapidly. You may experience back pain, shortness of breath, and difficulty sleeping. As you approach your due date, your body begins preparing for labor with practice contractions and other changes.',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/symptoms" className="hover:text-primary-600">Symptoms</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{name} Trimester</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 via-purple-50 to-pink-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {name} Trimester Symptoms
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Weeks {range.start}-{range.end}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          {trimesterDescriptions[trimesterNum]}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">{symptoms.length}</div>
          <div className="text-gray-700 font-medium">Symptoms Covered</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {range.end - range.start + 1}
          </div>
          <div className="text-gray-700 font-medium">Weeks</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl font-bold text-pink-600 mb-2">
            {Object.values(categories).filter(cat => cat.length > 0).length}
          </div>
          <div className="text-gray-700 font-medium">Symptom Categories</div>
        </div>
      </div>

      {/* Trimester Navigation */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map(t => (
          <Link
            key={t}
            href={`/symptoms/by-trimester/${t}`}
            className={`p-6 rounded-lg border-2 transition-all ${
              t === trimesterNum
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-gray-900 border-gray-200 hover:border-primary-400 hover:shadow-md'
            }`}
          >
            <div className="text-2xl font-bold mb-2">
              {trimesterNames[t as 1 | 2 | 3]} Trimester
            </div>
            <div className={`text-sm ${t === trimesterNum ? 'text-primary-100' : 'text-gray-600'}`}>
              Weeks {weekRanges[t as 1 | 2 | 3].start}-{weekRanges[t as 1 | 2 | 3].end}
            </div>
          </Link>
        ))}
      </div>

      {/* Symptoms by Category */}
      {Object.entries(categories).map(([categoryKey, categorySymptoms]) => {
        if (categorySymptoms.length === 0) return null
        const info = categoryInfo[categoryKey as keyof typeof categoryInfo]

        return (
          <section key={categoryKey} className="mb-12">
            <div className={`bg-gradient-to-r ${info.color} border rounded-lg p-6 mb-6`}>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span>{info.icon}</span>
                {info.name}
              </h2>
              <p className="text-gray-700 mt-2">
                {categorySymptoms.length} symptoms in this category during the {name.toLowerCase()} trimester
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorySymptoms.map(symptom => {
                // Find peak weeks in this trimester
                const peaksInTrimester = symptom.peakWeeks.filter(
                  w => w >= range.start && w <= range.end
                )
                const isPeak = peaksInTrimester.length > 0

                return (
                  <Link
                    key={symptom.slug}
                    href={`/symptoms/${symptom.slug}`}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition-all p-6 border border-gray-100 relative"
                  >
                    {isPeak && (
                      <div className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">
                        PEAK
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {symptom.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {symptom.shortDescription}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="text-gray-700">
                        <span className="font-semibold">Common weeks:</span>{' '}
                        {symptom.commonWeeks.filter(w => w >= range.start && w <= range.end).join(', ')}
                      </div>
                      {peaksInTrimester.length > 0 && (
                        <div className="text-red-700">
                          <span className="font-semibold">Peak weeks:</span>{' '}
                          {peaksInTrimester.join(', ')}
                        </div>
                      )}
                    </div>
                    <div className="mt-4 text-primary-600 font-semibold text-sm flex items-center gap-1">
                      Learn more →
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* Week-by-Week Navigation */}
      <section className="mt-12 bg-primary-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Track Symptoms Week by Week
        </h2>
        <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
          Get detailed information about symptoms for each specific week of your {name.toLowerCase()} trimester.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {Array.from({ length: range.end - range.start + 1 }, (_, i) => range.start + i).map(week => (
            <Link
              key={week}
              href={`/week-by-week/${week}`}
              className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-100 transition-colors border-2 border-primary-200"
            >
              Week {week}
            </Link>
          ))}
        </div>
      </section>

      {/* Back Links */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/symptoms"
          className="flex-1 text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          ← View All Symptoms
        </Link>
        <Link
          href="/week-by-week"
          className="flex-1 text-center bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          Week-by-Week Guide →
        </Link>
      </div>
    </div>
  )
}
