import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Pregnancy Quizzes - Test Your Knowledge | ${SITE_NAME}`,
  description: 'Take free pregnancy quizzes to discover your pregnancy profile, test your knowledge, and get personalized recommendations for your journey.',
  keywords: ['pregnancy quiz', 'pregnancy test', 'expecting quiz', 'pregnancy knowledge'],
}

const quizzes = [
  {
    title: 'Pregnancy Readiness Quiz',
    description: 'Discover your pregnancy profile and get personalized guidance, resources, and tips tailored to your unique needs.',
    href: '/quiz/pregnancy-readiness',
    emoji: '🤰',
    duration: '2 min',
    featured: true,
    gradient: 'from-primary-50 to-pink-100',
    border: 'border-primary-200',
  },
  {
    title: 'Birth Preferences Quiz',
    description: 'Explore your birth preferences and create a foundation for your birth plan.',
    href: '/quiz/pregnancy-readiness',
    emoji: '👶',
    duration: '3 min',
    featured: false,
    gradient: 'from-purple-50 to-indigo-100',
    border: 'border-purple-200',
    comingSoon: true,
  },
  {
    title: 'Trimester Knowledge Check',
    description: 'Test what you know about each trimester and learn something new.',
    href: '/quiz/pregnancy-readiness',
    emoji: '📝',
    duration: '2 min',
    featured: false,
    gradient: 'from-blue-50 to-cyan-100',
    border: 'border-blue-200',
    comingSoon: true,
  },
]

export default function QuizzesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pregnancy Quizzes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Not sure where to start or what you need? Take our quizzes to get
          personalized guidance for your pregnancy journey.
        </p>
      </div>

      {/* Featured Quiz */}
      <div className="mb-12">
        <Link href="/quiz/pregnancy-readiness" className="block group">
          <div className="bg-gradient-to-br from-primary-50 to-pink-100 border border-primary-200 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-sm group-hover:scale-110 transition-transform">
                  🤰
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                  <span className="text-gray-500 text-sm">2 min</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  Pregnancy Readiness Quiz
                </h2>
                <p className="text-gray-600">
                  Discover your pregnancy profile and get personalized guidance, resources,
                  and tips tailored to your unique needs and concerns.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all text-gray-400">
                  →
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Other Quizzes */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">More Quizzes</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {quizzes.slice(1).map((quiz) => {
          const QuizCard = (
            <div className={`bg-gradient-to-br ${quiz.gradient} border ${quiz.border} rounded-xl p-6 transition-all h-full ${quiz.comingSoon ? 'opacity-60' : 'hover:shadow-md'}`}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                  {quiz.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                    {quiz.comingSoon && (
                      <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{quiz.description}</p>
                  <span className="text-xs text-gray-500">{quiz.duration}</span>
                </div>
              </div>
            </div>
          )

          if (quiz.comingSoon) {
            return <div key={quiz.title}>{QuizCard}</div>
          }

          return (
            <Link key={quiz.title} href={quiz.href} className="block">
              {QuizCard}
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to dive deeper?</h3>
        <p className="text-gray-600 mb-4">Explore our comprehensive week-by-week pregnancy guide.</p>
        <Link
          href="/week-by-week"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          View Week-by-Week Guide
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
