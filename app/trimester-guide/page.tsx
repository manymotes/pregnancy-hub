import Link from 'next/link'
import { getWeeksByTrimester } from '@/lib/weekData'

export const metadata = {
  title: 'Complete Trimester Guide - All 3 Stages of Pregnancy | Pregnancy Hub',
  description: 'Comprehensive guide to all three trimesters of pregnancy. Learn what to expect during the first, second, and third trimester including symptoms, development, and tips.',
}

export default function TrimesterGuidePage() {
  const firstTrimester = getWeeksByTrimester(1)
  const secondTrimester = getWeeksByTrimester(2)
  const thirdTrimester = getWeeksByTrimester(3)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Complete Guide to Pregnancy Trimesters
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Understanding the three stages of pregnancy: what to expect, common symptoms, baby development,
          and expert tips for each trimester of your pregnancy journey.
        </p>
      </div>

      {/* Overview Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Trimester Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-300">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">First Trimester</h3>
            <div className="text-sm text-gray-600 mb-4">Weeks 1-13 (3 months)</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Formation:</strong> Embryo develops all major organs</li>
              <li><strong>Size:</strong> Poppy seed to peapod (3 inches)</li>
              <li><strong>Symptoms:</strong> Morning sickness, fatigue, mood swings</li>
              <li><strong>Key Events:</strong> First heartbeat, first ultrasound</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
            <div className="text-4xl mb-3">🌸</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Second Trimester</h3>
            <div className="text-sm text-gray-600 mb-4">Weeks 14-27 (3 months)</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Growth:</strong> Rapid development, organs mature</li>
              <li><strong>Size:</strong> Lemon to cauliflower (14 inches)</li>
              <li><strong>Symptoms:</strong> Energy returns, baby movements</li>
              <li><strong>Key Events:</strong> Gender reveal, anatomy scan</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
            <div className="text-4xl mb-3">🌺</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Third Trimester</h3>
            <div className="text-sm text-gray-600 mb-4">Weeks 28-40 (3 months)</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Preparation:</strong> Final growth, lung maturation</li>
              <li><strong>Size:</strong> Eggplant to pumpkin (20 inches)</li>
              <li><strong>Symptoms:</strong> Discomfort, Braxton Hicks, nesting</li>
              <li><strong>Key Events:</strong> Weekly visits, labor begins</li>
            </ul>
          </div>
        </div>
      </section>

      {/* First Trimester Deep Dive */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🌱</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">First Trimester</h2>
              <p className="text-gray-700">Weeks 1-13 • The Foundation Phase</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>👶</span> Baby Development
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Fertilization occurs and cells begin dividing rapidly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Heart begins beating around week 6-7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>All major organs form by week 10</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Facial features develop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Arms, legs, fingers, and toes form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>By week 13, baby is fully formed but tiny</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💭</span> Common Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Morning sickness:</strong> Nausea and vomiting (can occur anytime)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Extreme fatigue:</strong> Need for extra rest and sleep</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Breast tenderness:</strong> Sore, swollen breasts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Frequent urination:</strong> Increased bathroom trips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Mood swings:</strong> Emotional ups and downs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Food aversions/cravings:</strong> Changed taste preferences</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">First Trimester Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">Do:</p>
              <ul className="space-y-1">
                <li>• Take prenatal vitamins with folic acid</li>
                <li>• Rest when tired - don't fight fatigue</li>
                <li>• Eat small, frequent meals for nausea</li>
                <li>• Stay hydrated with water</li>
                <li>• Schedule first prenatal appointment</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Avoid:</p>
              <ul className="space-y-1">
                <li>• Alcohol, smoking, and recreational drugs</li>
                <li>• Raw fish, unpasteurized cheese, deli meat</li>
                <li>• Hot tubs and saunas</li>
                <li>• Excessive caffeine (limit to 200mg)</li>
                <li>• Cat litter boxes (toxoplasmosis risk)</li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          href="/first-trimester"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
        >
          Complete First Trimester Guide →
        </Link>
      </section>

      {/* Second Trimester Deep Dive */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🌸</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Second Trimester</h2>
              <p className="text-gray-700">Weeks 14-27 • The Golden Period</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>👶</span> Baby Development
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Rapid growth in length and weight</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Bones harden and strengthen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Can hear sounds and respond to voice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Develops sleep-wake patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Fingerprints form, skin develops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Lungs begin producing surfactant</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💭</span> Common Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Increased energy:</strong> Fatigue improves significantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Baby movements:</strong> Feel first kicks (quickening)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Growing belly:</strong> Baby bump becomes visible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Round ligament pain:</strong> Sharp pains when moving</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Braxton Hicks:</strong> Practice contractions begin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Increased appetite:</strong> Hunger returns</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Second Trimester Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">Do:</p>
              <ul className="space-y-1">
                <li>• Schedule anatomy scan (18-22 weeks)</li>
                <li>• Start prenatal exercise routine</li>
                <li>• Sleep on your left side with pillow support</li>
                <li>• Begin shopping for maternity clothes</li>
                <li>• Consider announcing pregnancy</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Watch For:</p>
              <ul className="space-y-1">
                <li>• Decreased fetal movement after week 28</li>
                <li>• Severe abdominal pain</li>
                <li>• Heavy bleeding or fluid leaking</li>
                <li>• Signs of preterm labor</li>
                <li>• Severe headaches with vision changes</li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          href="/second-trimester"
          className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 font-semibold"
        >
          Complete Second Trimester Guide →
        </Link>
      </section>

      {/* Third Trimester Deep Dive */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🌺</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Third Trimester</h2>
              <p className="text-gray-700">Weeks 28-40 • The Home Stretch</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>👶</span> Baby Development
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Rapid weight gain - up to 1/2 pound per week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Brain develops billions of neurons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Lungs mature and prepare for breathing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Opens eyes and responds to light</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>Settles into head-down birth position</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span>All organs fully functional by week 37</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💭</span> Common Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Shortness of breath:</strong> Baby pushes on diaphragm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Frequent urination:</strong> Baby presses on bladder</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Heartburn & indigestion:</strong> Stomach compressed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Swelling:</strong> Feet, ankles, hands may swell</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Fatigue returns:</strong> Carrying extra weight tiring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span><strong>Braxton Hicks increase:</strong> Practice contractions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Third Trimester Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">Do:</p>
              <ul className="space-y-1">
                <li>• Pack hospital bag by week 35</li>
                <li>• Take childbirth and breastfeeding classes</li>
                <li>• Complete nursery setup</li>
                <li>• Practice breathing and relaxation techniques</li>
                <li>• Monitor baby's movement patterns daily</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Important Tests:</p>
              <ul className="space-y-1">
                <li>• Group B strep test (weeks 35-37)</li>
                <li>• Weekly appointments starting week 36</li>
                <li>• Non-stress tests if needed</li>
                <li>• Cervical checks for dilation</li>
                <li>• Labor signs education</li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          href="/third-trimester"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-semibold"
        >
          Complete Third Trimester Guide →
        </Link>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Pregnancy Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link href="/week-by-week" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📅</span> Week by Week
            </h3>
            <p className="text-sm text-gray-700">Detailed weekly development guide</p>
          </Link>
          <Link href="/symptoms-by-week" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>💭</span> Symptoms Timeline
            </h3>
            <p className="text-sm text-gray-700">Track symptoms through pregnancy</p>
          </Link>
          <Link href="/baby-size-chart" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📏</span> Baby Size Chart
            </h3>
            <p className="text-sm text-gray-700">Visual growth comparison</p>
          </Link>
          <Link href="/pregnancy-timeline" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📊</span> Full Timeline
            </h3>
            <p className="text-sm text-gray-700">Complete 40-week overview</p>
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
            name: 'Complete Trimester Guide - All 3 Stages of Pregnancy',
            description: 'Comprehensive guide to all three trimesters of pregnancy including symptoms, development, and tips.',
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
