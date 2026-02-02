import Link from 'next/link'
import { getChecklistData, checklistsData } from '@/lib/checklistsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return checklistsData.map((checklist) => ({
    slug: checklist.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getChecklistData(params.slug)

  if (!data) {
    return {
      title: 'Checklist Not Found',
    }
  }

  return {
    title: `${data.title} - Pregnancy Planning`,
    description: data.shortDescription,
    openGraph: {
      title: data.title,
      description: data.shortDescription,
    },
  }
}

export default function ChecklistPage({ params }: { params: { slug: string } }) {
  const data = getChecklistData(params.slug)

  if (!data) {
    notFound()
  }

  const categoryLabel =
    data.category === 'trimester' ? 'Trimester Checklist' :
    data.category === 'preparation' ? 'Labor & Delivery Prep' :
    data.category === 'baby' ? 'Baby Essentials' :
    data.category === 'postpartum' ? 'Postpartum Care' : 'Planning & Tracking'

  const categoryColor =
    data.category === 'trimester' ? 'blue' :
    data.category === 'preparation' ? 'purple' :
    data.category === 'baby' ? 'pink' :
    data.category === 'postpartum' ? 'rose' : 'indigo'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/checklists" className="hover:text-primary-600">Checklists</Link>
        <span className="mx-2">→</span>
        <span className="text-gray-900">{data.title}</span>
      </nav>

      {/* Header */}
      <div className={`bg-gradient-to-r from-${categoryColor}-50 to-${categoryColor}-100 rounded-lg p-6 mb-8`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-wide text-gray-600 font-semibold">
            {categoryLabel}
          </span>
          {data.trimester && (
            <span className={`text-xs px-2 py-1 rounded ${
              data.trimester === 'first' ? 'bg-green-100 text-green-700' :
              data.trimester === 'second' ? 'bg-blue-100 text-blue-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {data.trimester} Trimester
            </span>
          )}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{data.title}</h1>
        <p className="text-lg text-gray-700 mb-2">{data.shortDescription}</p>
        <p className="text-sm text-gray-600">Best to start: {data.whenToStart}</p>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="space-y-4">
            {data.introduction.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
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

      {/* Related Checklists */}
      {data.relatedChecklists.length > 0 && (
        <section className="mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Checklists</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedChecklists.map(slug => {
                const relatedData = checklistsData.find(checklist => checklist.slug === slug)
                return relatedData ? (
                  <Link
                    key={slug}
                    href={`/checklists/${slug}`}
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

      {/* Print Friendly Note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-gray-600 text-center">
          💾 <strong>Tip:</strong> Use your browser's print function (Ctrl/Cmd + P) to save or print this checklist for easy reference.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-gray-600 text-center">
          This checklist is a general guide. Always consult your healthcare provider for personalized recommendations based on your specific situation.
        </p>
      </div>

      {/* Back to all checklists */}
      <div className="text-center pt-8 border-t border-gray-200">
        <Link
          href="/checklists"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          ← View All Checklists
        </Link>
      </div>
    </div>
  )
}
