import Link from 'next/link'
import { weeklyData } from '@/lib/weekData'

export const metadata = {
  title: 'Complete 40-Week Pregnancy Timeline | Pregnancy Hub',
  description: 'Interactive timeline showing all 40 weeks of pregnancy at a glance. Track baby development, symptoms, and milestones from conception to birth.',
}

export default function PregnancyTimelinePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Complete Pregnancy Timeline
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          An interactive visual timeline of your entire 40-week pregnancy journey. See the big picture
          of baby development, your changing body, and important milestones at each stage.
        </p>
      </div>

      {/* Quick Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🌱</span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">First Trimester</h3>
              <p className="text-sm text-gray-600">Weeks 1-13</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Foundation phase: embryo forms, organs develop, morning sickness common.
          </p>
          <Link
            href="/first-trimester"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Learn more →
          </Link>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🌸</span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Second Trimester</h3>
              <p className="text-sm text-gray-600">Weeks 14-27</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Golden period: energy returns, baby movements felt, anatomy scan performed.
          </p>
          <Link
            href="/second-trimester"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Learn more →
          </Link>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🌺</span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Third Trimester</h3>
              <p className="text-sm text-gray-600">Weeks 28-40</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Final stretch: rapid growth, preparing for labor, weekly checkups begin.
          </p>
          <Link
            href="/third-trimester"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Interactive Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Week-by-Week Timeline</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 via-yellow-300 to-purple-300" />

          {/* Timeline items */}
          <div className="space-y-6">
            {weeklyData.map((week) => {
              const trimesterColor =
                week.trimester === 1 ? 'green' :
                week.trimester === 2 ? 'yellow' :
                'purple'

              return (
                <div key={week.week} className="relative pl-20">
                  {/* Timeline marker */}
                  <div className={`absolute left-5 top-4 w-7 h-7 rounded-full bg-${trimesterColor}-400 border-4 border-white shadow-lg flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white">{week.week}</span>
                  </div>

                  {/* Content card */}
                  <Link
                    href={`/week-by-week/${week.week}`}
                    className="block bg-white rounded-lg shadow hover:shadow-xl transition-all p-6 hover:-translate-x-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            Week {week.week}
                          </h3>
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                            {week.trimester === 1 ? '1st' : week.trimester === 2 ? '2nd' : '3rd'} Trimester
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{week.trimester === 1 ? '🌱' : week.trimester === 2 ? '🍊' : '🎃'}</span>
                          <span className="font-semibold text-primary-600">{week.babySize}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{week.babyLength}, {week.babyWeight}</span>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Baby Development:</h4>
                            <p className="text-sm text-gray-700 line-clamp-2">
                              {week.babyDevelopment[0]}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Common Symptoms:</h4>
                            <p className="text-sm text-gray-700 line-clamp-2">
                              {week.momSymptoms.slice(0, 2).join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <div className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                          View details →
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Major Milestones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Pregnancy Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="text-3xl mb-3">💓</div>
            <h3 className="font-bold text-gray-900 mb-2">Week 6-7</h3>
            <h4 className="font-semibold text-gray-800 mb-2">First Heartbeat</h4>
            <p className="text-sm text-gray-700">
              Baby's heart begins beating and can often be detected on ultrasound. This is an emotional milestone for many parents.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🔬</div>
            <h3 className="font-bold text-gray-900 mb-2">Week 10-13</h3>
            <h4 className="font-semibold text-gray-800 mb-2">End of Embryonic Stage</h4>
            <p className="text-sm text-gray-700">
              Baby graduates from embryo to fetus. All major organs have formed and will continue developing.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🎀</div>
            <h3 className="font-bold text-gray-900 mb-2">Week 16-20</h3>
            <h4 className="font-semibold text-gray-800 mb-2">Gender & Anatomy Scan</h4>
            <p className="text-sm text-gray-700">
              Find out baby's sex and see detailed anatomy. Healthcare providers check all major organs and structures.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🦋</div>
            <h3 className="font-bold text-gray-900 mb-2">Week 18-22</h3>
            <h4 className="font-semibold text-gray-800 mb-2">Quickening</h4>
            <p className="text-sm text-gray-700">
              Feel baby's first movements. What starts as flutters becomes distinct kicks and rolls as weeks progress.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-gray-900 mb-2">Week 24</h3>
            <h4 className="font-semibold text-gray-800 mb-2">Viability</h4>
            <p className="text-sm text-gray-700">
              Baby reaches viability milestone. With medical support, babies born at this stage have survival potential.
            </p>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
            <div className="text-3xl mb-3">👶</div>
            <h3 className="font-bold text-gray-900 mb-2">Week 37-40</h3>
            <h4 className="font-semibold text-gray-800 mb-2">Full Term</h4>
            <p className="text-sm text-gray-700">
              Baby is fully developed and ready to meet you! Labor could begin at any moment during these final weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Important Appointments Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Appointments & Tests</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900">Week 8-10</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">First Prenatal Visit</h4>
                <p className="text-sm text-gray-700">Initial appointment, blood work, dating ultrasound, medical history review</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900">Week 11-14</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">First Trimester Screening</h4>
                <p className="text-sm text-gray-700">Nuchal translucency scan, NIPT blood test for genetic screening</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900">Week 18-22</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Anatomy Scan</h4>
                <p className="text-sm text-gray-700">Detailed ultrasound checking baby's development, gender reveal possible</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900">Week 24-28</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Glucose Screening</h4>
                <p className="text-sm text-gray-700">Test for gestational diabetes with glucose tolerance test</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900">Week 35-37</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Group B Strep Test</h4>
                <p className="text-sm text-gray-700">Quick swab test to check for GBS bacteria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-gray-900">Week 36-40</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Weekly Checkups</h4>
                <p className="text-sm text-gray-700">Frequent monitoring of baby position, cervical changes, and vital signs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Your Pregnancy Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link
            href="/week-by-week"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📅</span> Week by Week
            </h3>
            <p className="text-sm text-gray-700">
              Detailed info for each week
            </p>
          </Link>
          <Link
            href="/symptoms-by-week"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>💭</span> Symptoms
            </h3>
            <p className="text-sm text-gray-700">
              Track symptoms timeline
            </p>
          </Link>
          <Link
            href="/baby-size-chart"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📏</span> Size Chart
            </h3>
            <p className="text-sm text-gray-700">
              Baby growth comparison
            </p>
          </Link>
          <Link
            href="/trimester-guide"
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📖</span> Trimester Guide
            </h3>
            <p className="text-sm text-gray-700">
              Overview of all 3 stages
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
            name: 'Complete 40-Week Pregnancy Timeline',
            description: 'Interactive timeline showing all 40 weeks of pregnancy with baby development, symptoms, and milestones.',
            about: {
              '@type': 'MedicalCondition',
              name: 'Pregnancy',
            },
          }),
        }}
      />
    </div>
  )
}
