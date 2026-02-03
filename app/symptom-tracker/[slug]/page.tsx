import Link from 'next/link'
import Script from 'next/script'
import { getSymptomTrackerData, symptomTrackerData } from '@/lib/symptomTrackerData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return symptomTrackerData.map((symptom) => ({
    slug: symptom.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getSymptomTrackerData(params.slug)

  if (!data) {
    return {
      title: 'Symptom Not Found',
    }
  }

  return {
    title: `${data.title} During Pregnancy - Relief Tips & When to Call Doctor | Symptom Tracker`,
    description: data.shortDescription,
    openGraph: {
      title: `${data.title} During Pregnancy`,
      description: data.shortDescription,
    },
  }
}

export default function SymptomTrackerDetailPage({ params }: { params: { slug: string } }) {
  const data = getSymptomTrackerData(params.slug)

  if (!data) {
    notFound()
  }

  // Create FAQ schema for this specific symptom
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  // Create article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: data.title,
    description: data.shortDescription,
    about: {
      '@type': 'MedicalCondition',
      name: data.title,
      associatedAnatomy: {
        '@type': 'AnatomicalStructure',
        name: 'Pregnancy',
      },
    },
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-primary-600">
            Home
          </Link>
          <span className="mx-2">→</span>
          <Link href="/symptom-tracker" className="hover:text-primary-600">
            Symptom Tracker
          </Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">{data.title}</span>
        </nav>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-8 mb-8">
          <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-3">
            Pregnancy Symptom Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-700 leading-relaxed">{data.shortDescription}</p>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-lg">
              <span>📅</span> When It\'s Most Common
            </h3>
            <p className="text-gray-700">{data.commonWeeks}</p>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Trimesters Affected:</h4>
              <ul className="space-y-1">
                {data.trimestersAffected.map((trimester, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    {trimester}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-lg">
              <span>🔗</span> Related Weekly Guides
            </h3>
            <p className="text-gray-700 mb-3 text-sm">
              See what to expect during the weeks this symptom is most common:
            </p>
            <div className="flex flex-wrap gap-2">
              {data.weeklyLinks.slice(0, 8).map((week) => (
                <Link
                  key={week}
                  href={`/week-by-week/${week}`}
                  className="bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-600 hover:bg-primary-50 border border-primary-200 transition-colors"
                >
                  Week {week}
                </Link>
              ))}
              {data.weeklyLinks.length > 8 && (
                <span className="px-3 py-1 text-sm text-gray-500">
                  +{data.weeklyLinks.length - 8} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding This Symptom</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {data.detailedDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>🔍</span> What It Is
            </h2>
            <ul className="space-y-3">
              {data.whatItIs.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why It Happens */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>🧬</span> Why It Happens During Pregnancy
            </h2>
            <ul className="space-y-3">
              {data.whyItHappens.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Relief Tips */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-8 border border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>💡</span> Relief Tips & Strategies
            </h2>
            <p className="text-gray-700 mb-6 font-medium">
              Try these evidence-based strategies to help manage and reduce symptoms:
            </p>
            <ul className="space-y-3">
              {data.reliefTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Safe Remedies */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>💊</span> Safe Remedies & Treatments
            </h2>
            <p className="text-gray-700 mb-6">
              These remedies are generally considered safe during pregnancy, but always consult
              your healthcare provider before trying new treatments or supplements:
            </p>
            <ul className="space-y-3">
              {data.safeRemedies.map((remedy, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1 flex-shrink-0">→</span>
                  <span className="text-gray-700">{remedy}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When to Call Doctor */}
        <section className="mb-8">
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6 flex items-center gap-3">
              <span>📞</span> When to Call Your Doctor
            </h2>
            <p className="text-yellow-800 mb-6 font-semibold">
              Contact your healthcare provider if you experience any of the following:
            </p>
            <ul className="space-y-3">
              {data.whenToCallDoctor.map((warning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-700 mt-1 flex-shrink-0">⚠</span>
                  <span className="text-yellow-900 font-medium">{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Warning Signs */}
        {data.warningDangerSigns.length > 0 && (
          <section className="mb-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <span>🚨</span> Serious Warning Signs
              </h2>
              <p className="text-red-800 mb-6 font-bold">
                Seek immediate medical attention if you experience these serious complications:
              </p>
              <ul className="space-y-3">
                {data.warningDangerSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 flex-shrink-0 text-xl">⚠️</span>
                    <span className="text-red-900 font-semibold">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* User Experiences */}
        {data.userExperiences.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span>💬</span> Real Experiences from Moms
              </h2>
              <p className="text-gray-600 mb-6 italic text-sm">
                Here\'s what other pregnant women have shared about managing this symptom:
              </p>
              <div className="space-y-6">
                {data.userExperiences.map((experience, index) => (
                  <div key={index} className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-400">
                    <p className="text-gray-800 italic mb-3">"{experience.quote}"</p>
                    <p className="text-sm text-gray-600 font-medium">
                      — {experience.name}, Week {experience.week}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {data.faqs.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span>❓</span> Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Symptoms */}
        {data.relatedSymptoms.length > 0 && (
          <section className="mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-8 border border-purple-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Symptoms</h2>
              <p className="text-gray-700 mb-6">
                Women experiencing this symptom often also experience:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {data.relatedSymptoms.map((slug) => {
                  const relatedData = symptomTrackerData.find((s) => s.slug === slug)
                  return relatedData ? (
                    <Link
                      key={slug}
                      href={`/symptom-tracker/${slug}`}
                      className="bg-white px-6 py-4 rounded-lg shadow hover:shadow-md transition-shadow text-primary-600 hover:text-primary-700 font-semibold border border-gray-200 flex items-center justify-between group"
                    >
                      <span>{relatedData.title}</span>
                      <span className="text-primary-400 group-hover:text-primary-600 transition-colors">
                        →
                      </span>
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Track All Your Symptoms</h2>
          <p className="text-primary-100 mb-6">
            Use our interactive symptom checker to get personalized information about
            all your pregnancy symptoms.
          </p>
          <Link
            href="/symptom-tracker/checker"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Try Symptom Checker
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          <Link
            href="/symptom-tracker"
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
          >
            ← Back to All Symptoms
          </Link>
          <Link
            href="/week-by-week"
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
          >
            View Week by Week Guide →
          </Link>
        </div>
      </div>
    </>
  )
}
