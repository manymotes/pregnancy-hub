import Link from 'next/link'
import Script from 'next/script'
import { getBirthPlanData, birthPlanData } from '@/lib/birthPlanData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return birthPlanData.map((plan) => ({
    slug: plan.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getBirthPlanData(params.slug)

  if (!data) {
    return {
      title: 'Birth Plan Not Found',
    }
  }

  return {
    title: `${data.title} - Free Template & Checklist`,
    description: data.shortDescription,
    openGraph: {
      title: data.title,
      description: data.shortDescription,
    },
  }
}

export default function BirthPlanTemplatePage({ params }: { params: { slug: string } }) {
  const data = getBirthPlanData(params.slug)

  if (!data) {
    notFound()
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questionsForProvider.map((question) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `This is an important question to discuss with your healthcare provider when planning your ${data.type.toLowerCase()}. Your provider can give you personalized information based on your specific situation and their experience.`,
      },
    })),
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4 text-gray-600">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/birth-plan" className="hover:text-primary-600">Birth Plans</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">{data.title}</span>
        </nav>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-wide text-purple-600 font-semibold">
              {data.type} Birth Plan
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
          <p className="text-lg text-gray-700">{data.shortDescription}</p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Birth Plan</h2>
            <div className="space-y-4">
              {data.introduction.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Birth Plan Sections */}
        {data.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
              {section.description && (
                <p className="text-gray-700 mb-4">{section.description}</p>
              )}
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Important Considerations */}
        <section className="mb-8">
          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>⚠️</span> Important Considerations
            </h2>
            <ul className="space-y-3">
              {data.considerations.map((consideration, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span className="text-gray-900">{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Questions for Your Provider */}
        <section className="mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>❓</span> Questions to Ask Your Healthcare Provider
            </h2>
            <p className="text-gray-700 mb-4">
              Discuss these questions at a prenatal appointment to ensure your provider supports your birth plan:
            </p>
            <ul className="space-y-3">
              {data.questionsForProvider.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-bold">{index + 1}.</span>
                  <span className="text-gray-900">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related Birth Plans */}
        {data.relatedPlans.length > 0 && (
          <section className="mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Birth Plans</h2>
              <div className="flex flex-wrap gap-3">
                {data.relatedPlans.map(slug => {
                  const relatedData = birthPlanData.find(plan => plan.slug === slug)
                  return relatedData ? (
                    <Link
                      key={slug}
                      href={`/birth-plan/${slug}`}
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

        {/* CTA to Builder */}
        <div className="bg-primary-600 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-3">Create Your Personalized Birth Plan</h2>
          <p className="mb-4 text-primary-100">
            Use our interactive builder to customize this template and generate a printable birth plan.
          </p>
          <Link
            href="/birth-plan/builder"
            className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Use Interactive Builder
          </Link>
        </div>

        {/* Print Instructions */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-600 text-center">
            💾 <strong>Tip:</strong> Use your browser's print function (Ctrl/Cmd + P) to save or print this template for easy reference.
            Bring multiple copies to your birth location.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-600 text-center">
            This birth plan template is a general guide. Always discuss your birth preferences with your healthcare
            provider to ensure they align with your specific medical situation, facility capabilities, and safety requirements.
            Birth plans are flexible guidelines - medical necessity may require changes.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/birth-plan"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            ← View All Birth Plans
          </Link>
          <Link
            href="/birth-plan/builder"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Interactive Builder →
          </Link>
        </div>
      </div>
    </>
  )
}
