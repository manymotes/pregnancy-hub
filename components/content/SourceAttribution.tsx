import Link from 'next/link'

interface SourceAttributionProps {
  sourceName?: string
  sourceUrl?: string
  sourceDescription?: string
  lastUpdated?: Date
  showMethodology?: boolean
}

export function SourceAttribution({
  sourceName = 'ACOG Guidelines',
  sourceUrl = 'https://www.acog.org/',
  sourceDescription = 'American College of Obstetricians and Gynecologists',
  lastUpdated,
  showMethodology = true,
}: SourceAttributionProps) {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-purple-600 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-purple-900 mb-1">
            Information Source
          </h4>
          <p className="text-sm text-purple-800">
            Pregnancy information is aligned with guidelines from{' '}
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-purple-900"
            >
              {sourceName}
            </a>
            {sourceDescription && ` — ${sourceDescription}`}.
          </p>
          {lastUpdated && (
            <p className="text-xs text-purple-700 mt-1">
              Last updated: {lastUpdated.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          )}
          {showMethodology && (
            <p className="text-xs text-purple-700 mt-2">
              <Link href="/about#sources" className="underline hover:text-purple-900">
                View all sources
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function SourceBadge({
  sourceName = 'ACOG',
  sourceUrl = 'https://www.acog.org/',
}: {
  sourceName?: string
  sourceUrl?: string
}) {
  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
    >
      <svg
        className="h-3.5 w-3.5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Based on: {sourceName}
    </a>
  )
}
