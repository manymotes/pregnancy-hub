import Link from 'next/link'
import Script from 'next/script'
import { birthPlanData } from '@/lib/birthPlanData'

export const metadata = {
  title: 'Birth Plan Templates & Builder - Create Your Perfect Birth Plan',
  description: 'Free birth plan templates for every birth type: natural, hospital, home, water, C-section, VBAC, induction, and high-risk. Interactive builder to customize and print.',
  openGraph: {
    title: 'Birth Plan Templates & Builder',
    description: 'Free birth plan templates for every birth type with interactive builder',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a birth plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A birth plan is a document that outlines your preferences for labor, delivery, and immediate postpartum care. It communicates your wishes to your healthcare team about pain management, medical interventions, labor positions, newborn care, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I create my birth plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start thinking about your birth preferences in the second trimester and create your written birth plan during the third trimester (around 28-36 weeks). This gives you time to research options, discuss with your provider, and make revisions before labor begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a birth plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A birth plan is not required, but it helps you think through your options and communicate preferences to your birth team. Even if things don\'t go as planned, the process of creating one helps you understand birth options and make informed decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be included in a birth plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete birth plan includes: labor environment preferences, support people, pain management options, positions for labor and delivery, medical intervention preferences, delivery preferences, immediate postpartum wishes, newborn care choices, and feeding preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my birth doesn\'t go according to plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Birth plans are guidelines, not contracts. Medical necessity, complications, or unexpected situations may require changes. Stay flexible and remember that the goal is a safe delivery for you and your baby. Your healthcare team will explain any necessary deviations from your plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I share my birth plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discuss your birth plan with your healthcare provider during a prenatal visit. Print multiple copies to bring to the hospital - give one to your provider, nurses, doula, and keep one for yourself. Review it with your birth team when you arrive at the hospital.',
      },
    },
  ],
}

export default function BirthPlanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4 text-gray-600">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">Birth Plan Templates</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Birth Plan Templates & Builder
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Create a personalized birth plan that communicates your preferences to your healthcare team.
            Choose from 8 comprehensive templates or use our interactive builder to customize your perfect plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/birth-plan/builder"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
            >
              Use Interactive Builder
            </Link>
            <Link
              href="#templates"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors text-center"
            >
              View Templates
            </Link>
          </div>
        </div>

        {/* What is a Birth Plan Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Birth Plan?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A birth plan is a written document that outlines your preferences for labor, delivery, and immediate
                postpartum care. It serves as a communication tool between you and your healthcare team, helping
                ensure everyone understands your wishes for this important experience.
              </p>
              <p>
                Think of it as a guide rather than a strict contract. Birth can be unpredictable, and medical
                necessity may require flexibility. The goal is to make informed decisions and advocate for your
                preferences while remaining open to what's safest for you and your baby.
              </p>
            </div>
          </div>
        </section>

        {/* Why Create a Birth Plan */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Create a Birth Plan?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💭</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Clarify Your Preferences</h3>
                  <p className="text-gray-700">Research and think through your options for pain management, interventions, and newborn care.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗣️</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Communicate Effectively</h3>
                  <p className="text-gray-700">Ensure your healthcare team understands your wishes without needing to explain during labor.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Involve Your Partner</h3>
                  <p className="text-gray-700">Help your support person advocate for you when you're focused on labor.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Make Informed Decisions</h3>
                  <p className="text-gray-700">Understanding your options empowers you to make decisions aligned with your values.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Birth Plan Templates */}
        <section id="templates" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Birth Plan Template
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {birthPlanData.map((plan) => (
              <Link
                key={plan.slug}
                href={`/birth-plan/${plan.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-primary-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                  <span className="text-primary-600 text-2xl">→</span>
                </div>
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wide text-primary-600 font-semibold">
                    {plan.type}
                  </span>
                </div>
                <p className="text-gray-600">{plan.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Use Your Birth Plan */}
        <section className="mb-12">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Your Birth Plan</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Choose Your Template or Use the Builder</h3>
                  <p className="text-gray-700">Select the birth plan type that matches your intended birth experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Customize Your Preferences</h3>
                  <p className="text-gray-700">Review all options and select what feels right for you. Research unfamiliar terms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Discuss with Your Provider</h3>
                  <p className="text-gray-700">Review your birth plan at a prenatal appointment around 32-36 weeks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Print Multiple Copies</h3>
                  <p className="text-gray-700">Bring 3-5 copies to the hospital for your provider, nurses, and support team.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Stay Flexible</h3>
                  <p className="text-gray-700">Remember that plans may change. The priority is always a safe birth for you and baby.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Writing a Birth Plan */}
        <section className="mb-12">
          <div className="bg-yellow-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for an Effective Birth Plan</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Keep it concise:</strong> One to two pages maximum. Staff won't read lengthy documents during labor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Use positive language:</strong> State what you DO want rather than what you don't.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Be realistic:</strong> Understand hospital policies and medical standards of care.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Prioritize your wishes:</strong> Focus on what matters most to you.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Include your support team:</strong> Specify who will be present and their roles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Address unexpected scenarios:</strong> Consider preferences if cesarean becomes necessary.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Discuss with your provider early:</strong> Don't wait until labor to share your preferences.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">✓</span>
                <span className="text-gray-900"><strong>Take a childbirth class:</strong> Education helps you make informed choices.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a birth plan?</h3>
                <p className="text-gray-700">
                  A birth plan is a document that outlines your preferences for labor, delivery, and immediate
                  postpartum care. It communicates your wishes to your healthcare team about pain management,
                  medical interventions, labor positions, newborn care, and more.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I create my birth plan?</h3>
                <p className="text-gray-700">
                  Start thinking about your birth preferences in the second trimester and create your written
                  birth plan during the third trimester (around 28-36 weeks). This gives you time to research
                  options, discuss with your provider, and make revisions before labor begins.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need a birth plan?</h3>
                <p className="text-gray-700">
                  A birth plan is not required, but it helps you think through your options and communicate
                  preferences to your birth team. Even if things don't go as planned, the process of creating
                  one helps you understand birth options and make informed decisions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What should be included in a birth plan?</h3>
                <p className="text-gray-700">
                  A complete birth plan includes: labor environment preferences, support people, pain management
                  options, positions for labor and delivery, medical intervention preferences, delivery preferences,
                  immediate postpartum wishes, newborn care choices, and feeding preferences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my birth doesn't go according to plan?</h3>
                <p className="text-gray-700">
                  Birth plans are guidelines, not contracts. Medical necessity, complications, or unexpected
                  situations may require changes. Stay flexible and remember that the goal is a safe delivery
                  for you and your baby. Your healthcare team will explain any necessary deviations from your plan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I share my birth plan?</h3>
                <p className="text-gray-700">
                  Discuss your birth plan with your healthcare provider during a prenatal visit. Print multiple
                  copies to bring to the hospital - give one to your provider, nurses, doula, and keep one for
                  yourself. Review it with your birth team when you arrive at the hospital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Birth Plan?</h2>
          <p className="text-xl mb-6 text-primary-100">
            Use our interactive builder to customize your preferences and generate a printable birth plan.
          </p>
          <Link
            href="/birth-plan/builder"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Start Building Your Plan
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            These birth plan templates are educational resources. Always discuss your birth preferences with your
            healthcare provider to ensure they align with your specific medical situation and facility capabilities.
          </p>
        </div>
      </div>
    </>
  )
}
