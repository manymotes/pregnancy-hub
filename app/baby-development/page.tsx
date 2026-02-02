import Link from 'next/link'
import { babyDevData } from '@/lib/babyDevelopmentData'

export const metadata = {
  title: 'Baby Development in the Womb - Week-by-Week Pregnancy Milestones',
  description: 'Track your baby\'s amazing development from conception to birth. Learn how each organ system forms, when your baby can hear, and more developmental milestones.',
}

export default function BabyDevelopmentPage() {
  // Group development topics by category
  const organSystems = babyDevData.filter(item =>
    ['heart-development', 'brain-development', 'organ-formation', 'respiratory-development', 'digestive-development', 'bone-development'].includes(item.slug)
  )

  const senses = babyDevData.filter(item =>
    ['hearing-development', 'vision-development'].includes(item.slug)
  )

  const movement = babyDevData.filter(item =>
    ['movement-development', 'reflexes', 'sleep-cycles'].includes(item.slug)
  )

  const other = babyDevData.filter(item =>
    ['hair-skin-development', 'gender-development', 'baby-position', 'placenta-umbilical'].includes(item.slug)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Baby Development in the Womb
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the incredible journey of fetal development. From a tiny cluster of cells to a fully-formed baby,
          learn about the amazing milestones happening inside you week by week.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">40</div>
          <div className="text-gray-700 font-medium">Weeks of Growth</div>
        </div>
        <div className="bg-pink-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-pink-600 mb-2">15</div>
          <div className="text-gray-700 font-medium">Development Topics</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">100B</div>
          <div className="text-gray-700 font-medium">Brain Neurons</div>
        </div>
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">54M</div>
          <div className="text-gray-700 font-medium">Heartbeats</div>
        </div>
      </div>

      {/* Intro Box */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12">
        <div className="flex items-start gap-4">
          <span className="text-4xl">👶</span>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">The Miracle of Development</h3>
            <p className="text-gray-700 mb-4">
              Your baby's development is one of nature's most remarkable processes. In just 40 weeks, a single fertilized cell transforms into a complex human being with trillions of cells, complete organ systems, and the ability to see, hear, and respond to the world.
            </p>
            <p className="text-gray-700">
              Explore each stage of this incredible journey and understand what's happening at every step of your pregnancy.
            </p>
          </div>
        </div>
      </div>

      {/* Organ Systems & Major Development */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span>🫀</span> Organ Systems & Major Development
          </h2>
          <p className="text-gray-600">
            Essential organ formation and how major body systems develop throughout pregnancy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organSystems.map((item) => (
            <Link
              key={item.slug}
              href={`/baby-development/${item.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="text-sm text-purple-600 font-semibold mb-2 uppercase tracking-wide">
                {item.developmentStage}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.shortDescription}
              </p>
              <div className="text-xs text-gray-500 mb-3">
                {item.weekRange}
              </div>
              <div className="text-purple-600 font-semibold text-sm flex items-center gap-1">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Senses Development */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span>👂</span> Sensory Development
          </h2>
          <p className="text-gray-600">
            When your baby can hear, see, and respond to the world around them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {senses.map((item) => (
            <Link
              key={item.slug}
              href={`/baby-development/${item.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                {item.developmentStage}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.shortDescription}
              </p>
              <div className="text-xs text-gray-500 mb-3">
                {item.weekRange}
              </div>
              <div className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Movement & Behavior */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span>🤸</span> Movement & Behavior
          </h2>
          <p className="text-gray-600">
            How your baby moves, sleeps, and develops reflexes in the womb
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {movement.map((item) => (
            <Link
              key={item.slug}
              href={`/baby-development/${item.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="text-sm text-green-600 font-semibold mb-2 uppercase tracking-wide">
                {item.developmentStage}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.shortDescription}
              </p>
              <div className="text-xs text-gray-500 mb-3">
                {item.weekRange}
              </div>
              <div className="text-green-600 font-semibold text-sm flex items-center gap-1">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Important Topics */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span>🌟</span> Other Important Topics
          </h2>
          <p className="text-gray-600">
            Gender determination, physical appearance, position, and support structures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {other.map((item) => (
            <Link
              key={item.slug}
              href={`/baby-development/${item.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.shortDescription}
              </p>
              <div className="text-orange-600 font-semibold text-sm flex items-center gap-1">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
        <div className="flex items-start gap-4">
          <span className="text-3xl">📖</span>
          <div>
            <h3 className="font-bold text-blue-900 mb-2 text-lg">Did You Know?</h3>
            <p className="text-blue-800 mb-3">
              Your baby's development is influenced by many factors including nutrition, stress levels, and environmental exposures. Taking prenatal vitamins, eating a balanced diet, avoiding harmful substances, and managing stress all contribute to healthy fetal development.
            </p>
            <p className="text-blue-800">
              While these pages describe typical development, every baby grows at their own pace. Your healthcare provider monitors your baby's growth at each appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Journey</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/week-by-week"
            className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-bold mb-2">Week by Week</h3>
            <p className="text-sm text-primary-50">See what's happening this week</p>
          </Link>
          <Link
            href="/symptoms"
            className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">💭</div>
            <h3 className="font-bold mb-2">Pregnancy Symptoms</h3>
            <p className="text-sm text-pink-50">What you're feeling and why</p>
          </Link>
          <Link
            href="/nutrition"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">🥗</div>
            <h3 className="font-bold mb-2">Nutrition Guide</h3>
            <p className="text-sm text-green-50">Nourish your growing baby</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
