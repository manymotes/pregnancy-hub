import Link from 'next/link'
import { SITE_NAME, TRIMESTERS, TOPICS, POPULAR_TOPICS } from '@/lib/constants'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to {SITE_NAME}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to pregnancy - week-by-week information, nutrition advice,
            symptom management, and everything you need for a healthy pregnancy journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/week-by-week"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Week by Week Guide
            </Link>
            <Link
              href="/first-trimester"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              First Trimester Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Trimester Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore by Trimester
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRIMESTERS.map((trimester) => (
            <Link
              key={trimester.slug}
              href={`/${trimester.slug}`}
              className="topic-card group"
            >
              <div className="text-4xl mb-3">{trimester.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {trimester.name}
              </h3>
              <p className="text-gray-600 text-sm">Weeks {trimester.weeks}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-gray-200 transition-all group"
            >
              <div className="text-3xl mb-2">{topic.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-center">
                {topic.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Most Searched Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {POPULAR_TOPICS.slice(0, 12).map((topic) => (
            <Link
              key={topic.slug}
              href={`/${topic.category}/${topic.slug}`}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <h3 className="font-medium text-gray-900 hover:text-primary-600 transition-colors">
                {topic.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/topics"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            View All Topics →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Track Your Pregnancy Week by Week
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get personalized information about your baby's development, your body changes,
            and what to expect each week of your pregnancy.
          </p>
          <Link
            href="/week-by-week"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Start Tracking Now
          </Link>
        </div>
      </section>
    </div>
  )
}
