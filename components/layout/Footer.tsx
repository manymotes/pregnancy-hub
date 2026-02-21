import Link from 'next/link'
import { SITE_NAME, TRIMESTERS, TOPICS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🤰</span>
              <span className="text-xl font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-400">
              Comprehensive pregnancy information, week-by-week guides, and expert advice for expectant mothers.
            </p>
          </div>

          {/* Pregnancy Stages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pregnancy Stages</h3>
            <ul className="space-y-2 text-sm">
              {TRIMESTERS.map((trimester) => (
                <li key={trimester.slug}>
                  <Link
                    href={`/${trimester.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {trimester.icon} {trimester.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/week-by-week"
                  className="hover:text-white transition-colors"
                >
                  📅 Week by Week
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-white font-semibold mb-4">Topics</h3>
            <ul className="space-y-2 text-sm">
              {TOPICS.slice(1, 6).map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/${topic.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {topic.icon} {topic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/labor-delivery" className="hover:text-white transition-colors">
                  Labor & Delivery
                </Link>
              </li>
              <li>
                <Link href="/postpartum" className="hover:text-white transition-colors">
                  Postpartum Care
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Explore More - Wellness/Parenting Group */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="text-white font-semibold mb-4">Explore More</h3>
          <p className="text-gray-400 text-sm mb-4">
            Discover related resources for spiritual wellness and parenting:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-400">
            <li>
              <a
                href="https://horoscopehub.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Daily Horoscopes →
              </a>
            </li>
            <li>
              <a
                href="https://crystalguide.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Crystal Meanings & Healing →
              </a>
            </li>
            <li>
              <a
                href="https://babynamescout.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Baby Name Meanings →
              </a>
            </li>
          </ul>
        </div>

        {/* Medical Disclaimer & Source Attribution */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-300 mb-2">
              <strong className="text-white">Medical Disclaimer:</strong> This content is for informational purposes only and is NOT medical advice. Always consult your healthcare provider, OB-GYN, or midwife for personalized medical guidance.
            </p>
            <p className="text-xs text-gray-400">
              Information aligned with{' '}
              <a
                href="https://www.acog.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 underline"
              >
                ACOG (American College of Obstetricians and Gynecologists)
              </a>{' '}
              guidelines. For medical emergencies, call 911.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              <Link href="/about" className="hover:text-white underline">
                About Us & Medical Disclaimer
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
