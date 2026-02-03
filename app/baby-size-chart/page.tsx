import Link from 'next/link'
import { weeklyData } from '@/lib/weekData'

export const metadata = {
  title: 'Baby Size Chart - Week by Week Growth Comparison | Pregnancy Hub',
  description: 'Visual chart comparing your baby\'s size to everyday objects throughout pregnancy. Track baby\'s growth from poppy seed to pumpkin across all 40 weeks.',
}

export default function BabySizeChartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Baby Size Chart: Week by Week
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Watch your baby grow from a tiny poppy seed to a full-term baby! This visual guide compares
          your baby's size to familiar fruits and vegetables throughout all 40 weeks of pregnancy.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> These measurements are averages. Every baby grows at their own pace,
            and your healthcare provider will monitor your baby's individual growth.
          </p>
        </div>
      </div>

      {/* Quick Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
          <div className="text-3xl mb-2">🌱</div>
          <h3 className="font-bold text-gray-900 mb-1">Week 1</h3>
          <p className="text-sm text-gray-600">Starting size: Poppy seed</p>
          <p className="text-xs text-gray-500 mt-2">Less than 0.1 inches</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
          <div className="text-3xl mb-2">🍊</div>
          <h3 className="font-bold text-gray-900 mb-1">Week 20</h3>
          <p className="text-sm text-gray-600">Halfway: Banana</p>
          <p className="text-xs text-gray-500 mt-2">About 10 inches long</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
          <div className="text-3xl mb-2">🎃</div>
          <h3 className="font-bold text-gray-900 mb-1">Week 40</h3>
          <p className="text-sm text-gray-600">Full term: Small pumpkin</p>
          <p className="text-xs text-gray-500 mt-2">About 20 inches, 7.6 pounds</p>
        </div>
      </div>

      {/* Size Chart Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Size Comparison</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeklyData.map((week) => (
            <Link
              key={week.week}
              href={`/week-by-week/${week.week}`}
              className="bg-white rounded-lg shadow p-5 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-3">
                  {week.trimester === 1 ? '🌱' : week.trimester === 2 ? '🍊' : '🎃'}
                </div>
                <div className="font-bold text-lg text-gray-900 mb-1">
                  Week {week.week}
                </div>
                <div className="text-primary-600 font-semibold mb-2">
                  {week.babySize}
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  Length: {week.babyLength}
                </div>
                <div className="text-xs text-gray-600">
                  Weight: {week.babyWeight}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Detailed Trimester Breakdown */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Growth by Trimester</h2>

        {/* First Trimester */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">First Trimester (Weeks 1-13)</h3>
            <p className="text-gray-700">
              Rapid cellular development begins. Your baby grows from a microscopic cell to about 3 inches long.
              Major organs form during this critical period.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-gray-900">Week 4</div>
                <div className="text-sm text-gray-600">Poppy seed</div>
                <div className="text-xs text-gray-500">0.04 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 8</div>
                <div className="text-sm text-gray-600">Raspberry</div>
                <div className="text-xs text-gray-500">0.6 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 12</div>
                <div className="text-sm text-gray-600">Lime</div>
                <div className="text-xs text-gray-500">2.5 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 13</div>
                <div className="text-sm text-gray-600">Pea pod</div>
                <div className="text-xs text-gray-500">3 in</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Trimester */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Second Trimester (Weeks 14-27)</h3>
            <p className="text-gray-700">
              Your baby experiences significant growth spurts. From about 3.5 inches to nearly 14 inches.
              Facial features develop and movements become noticeable.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-gray-900">Week 16</div>
                <div className="text-sm text-gray-600">Avocado</div>
                <div className="text-xs text-gray-500">4.6 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 20</div>
                <div className="text-sm text-gray-600">Banana</div>
                <div className="text-xs text-gray-500">10 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 24</div>
                <div className="text-sm text-gray-600">Ear of corn</div>
                <div className="text-xs text-gray-500">12 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 27</div>
                <div className="text-sm text-gray-600">Cauliflower</div>
                <div className="text-xs text-gray-500">14.4 in</div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Trimester */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Third Trimester (Weeks 28-40)</h3>
            <p className="text-gray-700">
              Final growth phase as baby prepares for birth. From about 14.8 inches to over 20 inches.
              Rapid weight gain and lung maturation occur during this period.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-gray-900">Week 30</div>
                <div className="text-sm text-gray-600">Large cabbage</div>
                <div className="text-xs text-gray-500">15.7 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 34</div>
                <div className="text-sm text-gray-600">Cantaloupe</div>
                <div className="text-xs text-gray-500">17.7 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 38</div>
                <div className="text-sm text-gray-600">Winter melon</div>
                <div className="text-xs text-gray-500">19.6 in</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Week 40</div>
                <div className="text-sm text-gray-600">Small pumpkin</div>
                <div className="text-xs text-gray-500">20.2 in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Milestones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Growth Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>📏</span> Length Development
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Week 12:</strong> About 2.5 inches - fits in a walnut shell</li>
              <li><strong>Week 20:</strong> About 10 inches - halfway mark</li>
              <li><strong>Week 28:</strong> About 14.8 inches - fits lengthwise in your torso</li>
              <li><strong>Week 40:</strong> About 20 inches - full newborn size</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>⚖️</span> Weight Development
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Week 12:</strong> About 0.5 oz - lighter than a letter</li>
              <li><strong>Week 20:</strong> About 10.6 oz - less than a pound</li>
              <li><strong>Week 28:</strong> About 2.2 lbs - rapid gain begins</li>
              <li><strong>Week 40:</strong> About 7.6 lbs - average birth weight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/week-by-week"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📅</span> Week by Week Guide
            </h3>
            <p className="text-sm text-gray-700">
              Complete development details for each pregnancy week
            </p>
          </Link>
          <Link
            href="/baby-development"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>👶</span> Baby Development
            </h3>
            <p className="text-sm text-gray-700">
              Learn about your baby's developmental milestones
            </p>
          </Link>
          <Link
            href="/pregnancy-timeline"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📊</span> Pregnancy Timeline
            </h3>
            <p className="text-sm text-gray-700">
              Visual overview of your entire 40-week journey
            </p>
          </Link>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: 'Baby Size Chart - Week by Week',
            description: 'Visual chart comparing baby size to everyday objects throughout all 40 weeks of pregnancy.',
            about: {
              '@type': 'MedicalCondition',
              name: 'Pregnancy',
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: weeklyData.map((week, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: `Week ${week.week}: ${week.babySize}`,
                description: `Baby size at week ${week.week}: ${week.babyLength} long, ${week.babyWeight}`,
              })),
            },
          }),
        }}
      />
    </div>
  )
}
