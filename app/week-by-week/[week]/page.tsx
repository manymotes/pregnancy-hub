import Link from 'next/link'
import { getWeekData, weeklyData } from '@/lib/weekData'
import { TRIMESTERS, SITE_URL } from '@/lib/constants'
import { notFound } from 'next/navigation'
import { getTestimonialForWeek } from '@/lib/testimonialsData'
import { getFAQsForWeek } from '@/lib/faqsData'
import { organizationData, medicalReviewers } from '@/lib/authorsData'

export async function generateStaticParams() {
  return weeklyData.map((week) => ({
    week: week.week.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week)
  const data = getWeekData(weekNum)

  if (!data) {
    return {
      title: 'Week Not Found',
    }
  }

  const currentDate = new Date().toISOString().split('T')[0]

  // Format baby size for title (handle "a" vs "an" grammar)
  const babySizeLower = data.babySize.toLowerCase()
  const startsWithVowel = /^[aeiou]/i.test(data.babySize)
  const article = startsWithVowel ? 'an' : 'a'

  return {
    title: `${weekNum} Weeks Pregnant: Symptoms & Baby Size (2026)`,
    description: `${weekNum} weeks pregnant: baby is ${article} ${babySizeLower}. Week ${weekNum} symptoms, development milestones, and what to expect in 2026.`,
    alternates: {
      canonical: `${SITE_URL}/week-by-week/${weekNum}`,
    },
    openGraph: {
      title: `Week ${weekNum} of Pregnancy - Baby Size: ${data.babySize}`,
      description: `Pregnancy week ${weekNum}: Your baby is the size of ${data.babySize.toLowerCase()}. Learn about baby development, symptoms, and what to expect this week.`,
      url: `${SITE_URL}/week-by-week/${weekNum}`,
      siteName: 'MyPregnancyWeek',
      type: 'article',
      publishedTime: '2024-01-15T00:00:00.000Z',
      modifiedTime: currentDate,
      tags: ['pregnancy', `week ${weekNum}`, 'baby development', 'pregnancy symptoms', data.babySize],
      images: [
        {
          url: `${SITE_URL}/images/og/week-${weekNum}.jpg`,
          width: 1200,
          height: 630,
          alt: `Week ${weekNum} of Pregnancy - Baby Size: ${data.babySize}`,
        },
      ],
    },
  }
}

export default function WeekPage({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week)
  const data = getWeekData(weekNum)

  if (!data) {
    notFound()
  }

  const trimester = TRIMESTERS[data.trimester - 1]
  const prevWeek = weekNum > 1 ? weekNum - 1 : null
  const nextWeek = weekNum < 40 ? weekNum + 1 : null
  const testimonial = getTestimonialForWeek(weekNum)
  const faqs = getFAQsForWeek(weekNum)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/week-by-week"
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← Back to All Weeks
        </Link>

        <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>{trimester.icon}</span>
            <span>{trimester.name}</span>
            <span>•</span>
            <span>Weeks {trimester.weeks}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Week {weekNum} of Pregnancy
          </h1>
          <div className="text-xl text-gray-700">
            Your baby is the size of {data.babySize.toLowerCase()}
          </div>
        </div>
      </div>

      {/* Baby Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl mb-2">📏</div>
          <div className="text-sm text-gray-600 mb-1">Length</div>
          <div className="font-bold text-gray-900">{data.babyLength}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl mb-2">⚖️</div>
          <div className="text-sm text-gray-600 mb-1">Weight</div>
          <div className="font-bold text-gray-900">{data.babyWeight}</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl mb-2">🍎</div>
          <div className="text-sm text-gray-600 mb-1">Size Comparison</div>
          <div className="font-bold text-gray-900">{data.babySize}</div>
        </div>
      </div>

      {/* Baby Development */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>👶</span> Baby Development
          </h2>
          <ul className="space-y-3">
            {data.babyDevelopment.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mom's Symptoms */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💭</span> Common Symptoms
          </h2>
          <ul className="space-y-3">
            {data.momSymptoms.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🥗</span> Nutrition Tips
          </h2>
          <ul className="space-y-3">
            {data.nutritionTips.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* To-Do This Week */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Your Checklist This Week
          </h2>
          <p className="text-gray-600 mb-4">
            Here are the most important tasks to focus on during week {weekNum} of your pregnancy:
          </p>
          <ul className="space-y-3">
            {data.toDo.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-5 w-5 text-primary-600 rounded" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Other Moms Say - Testimonials */}
      {testimonial && (
        <section className="mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💬</span> What Other Moms Say
            </h2>
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary-600">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-900">— {testimonial.author}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{testimonial.context}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Every pregnancy is unique. This experience from a real mom at week {weekNum} shows the range of emotions and physical changes you might encounter.
            </p>
          </div>
        </section>
      )}

      {/* Common Questions This Week - FAQs */}
      {faqs.length > 0 && (
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>❓</span> Common Questions for Week {weekNum}
            </h2>
            <p className="text-gray-600 mb-6">
              These are the questions most frequently asked by expectant mothers during week {weekNum}:
            </p>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-primary-600 flex-shrink-0">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="ml-6 text-gray-700 leading-relaxed">
                    <span className="font-semibold text-primary-600">A:</span> {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What to Expect This Week */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔍</span> What to Expect This Week
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Your Baby</h3>
              <p className="text-gray-700">
                At week {weekNum}, your baby is approximately {data.babyLength} long and weighs about {data.babyWeight}.
                Major developmental milestones are occurring, including organ formation and growth.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Your Body</h3>
              <p className="text-gray-700">
                You may be experiencing various pregnancy symptoms as your body adapts to support your growing baby.
                Hormone levels are changing, which affects many aspects of how you feel.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Doctor Visits</h3>
              <p className="text-gray-700">
                {weekNum <= 13
                  ? "During the first trimester, you'll likely have your initial prenatal visit and possibly an early ultrasound."
                  : weekNum <= 27
                  ? "In the second trimester, you'll have regular checkups and important screenings including anatomy scans."
                  : "Third trimester appointments become more frequent as you approach your due date."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <section className="mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> When to Call Your Doctor
          </h2>
          <p className="text-gray-700 mb-4">
            While the symptoms listed above are common, contact your healthcare provider if you experience:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Severe abdominal pain or cramping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Heavy bleeding or passing clots</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Severe headaches with vision changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Fever over 100.4°F (38°C)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Decreased fetal movement after week 28</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span className="text-gray-700">Sudden swelling of face, hands, or feet</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Related Weeks - Internal Linking */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare with Other Weeks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weekNum > 2 && (
              <Link
                href={`/week-by-week/${weekNum - 2}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <div className="text-sm text-gray-600 mb-1">2 weeks ago</div>
                <div className="font-semibold text-primary-600">Week {weekNum - 2}</div>
              </Link>
            )}
            {weekNum > 4 && (
              <Link
                href={`/week-by-week/${weekNum - 4}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <div className="text-sm text-gray-600 mb-1">4 weeks ago</div>
                <div className="font-semibold text-primary-600">Week {weekNum - 4}</div>
              </Link>
            )}
            {weekNum < 39 && (
              <Link
                href={`/week-by-week/${weekNum + 2}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <div className="text-sm text-gray-600 mb-1">2 weeks ahead</div>
                <div className="font-semibold text-primary-600">Week {weekNum + 2}</div>
              </Link>
            )}
            {weekNum < 37 && (
              <Link
                href={`/week-by-week/${weekNum + 4}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <div className="text-sm text-gray-600 mb-1">4 weeks ahead</div>
                <div className="font-semibold text-primary-600">Week {weekNum + 4}</div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Trimester Overview Link */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-2">
          {trimester.icon} Learn More About {trimester.name}
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Discover what to expect throughout weeks {trimester.weeks} of your pregnancy journey.
        </p>
        <Link
          href={`/${trimester.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 text-sm"
        >
          View {trimester.name} guide →
        </Link>
      </div>

      {/* Fun Fact */}
      <div className="callout-info">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Did You Know?</h3>
            <p className="text-gray-700">{data.funFact}</p>
          </div>
        </div>
      </div>

      {/* Helpful Resources Grid */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources for Week {weekNum}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/calculators/due-date-calculator"
            className="bg-blue-50 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span>📅</span> Due Date Calculator
            </h3>
            <p className="text-sm text-gray-700">
              Calculate your estimated due date and track important pregnancy milestones.
            </p>
          </Link>

          <Link
            href="/calculators/weight-gain-calculator"
            className="bg-green-50 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span>⚖️</span> Weight Gain Tracker
            </h3>
            <p className="text-sm text-gray-700">
              Monitor healthy weight gain throughout your pregnancy journey.
            </p>
          </Link>

          <Link
            href={`/nutrition/${trimester.slug.replace('-trimester', '')}`}
            className="bg-orange-50 border border-orange-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span>🥗</span> Nutrition Guide
            </h3>
            <p className="text-sm text-gray-700">
              Discover the best foods and nutrients for your {trimester.name.toLowerCase()}.
            </p>
          </Link>

          <Link
            href="/symptoms"
            className="bg-purple-50 border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span>💭</span> Symptom Guide
            </h3>
            <p className="text-sm text-gray-700">
              Learn about common pregnancy symptoms and when to seek medical advice.
            </p>
          </Link>
        </div>
      </section>

      {/* Baby Name Ideas - Cross-site Link */}
      <div className="bg-pink-50 rounded-lg border border-pink-200 p-6 mt-8">
        <h3 className="font-semibold text-gray-900 mb-2">Baby Name Ideas</h3>
        <p className="text-sm text-gray-700 mb-3">
          Start exploring baby names that match your baby's due date zodiac sign. Discover meanings, origins, and popularity trends:
        </p>
        <a
          href="https://babynamescout.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 text-sm"
        >
          Browse baby names →
        </a>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        {prevWeek ? (
          <Link
            href={`/week-by-week/${prevWeek}`}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <span>←</span>
            <span>Week {prevWeek}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/week-by-week"
          className="text-gray-600 hover:text-gray-900"
        >
          All Weeks
        </Link>

        {nextWeek ? (
          <Link
            href={`/week-by-week/${nextWeek}`}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <span>Week {nextWeek}</span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: `Week ${weekNum} of Pregnancy`,
            headline: `Week ${weekNum} of Pregnancy - Baby Size: ${data.babySize}`,
            description: `Pregnancy week ${weekNum}: Your baby is the size of ${data.babySize.toLowerCase()}. Learn about baby development, symptoms, and what to expect this week.`,
            url: `${SITE_URL}/week-by-week/${weekNum}`,
            datePublished: '2024-01-15T00:00:00.000Z',
            dateModified: new Date().toISOString(),
            medicalSpecialty: 'Obstetrics and Gynaecology',
            about: {
              '@type': 'MedicalCondition',
              name: 'Pregnancy',
              associatedAnatomy: {
                '@type': 'AnatomicalStructure',
                name: 'Uterus',
              },
            },
            author: organizationData,
            publisher: {
              '@type': 'Organization',
              name: organizationData.name,
              logo: organizationData.logo,
              url: organizationData.url,
            },
            reviewedBy: medicalReviewers.map((reviewer) => ({
              '@type': 'Person',
              name: reviewer.name,
              jobTitle: reviewer.jobTitle,
              description: reviewer.description,
              url: reviewer.url,
            })),
            medicalAudience: {
              '@type': 'MedicalAudience',
              audienceType: 'Patient',
              healthCondition: {
                '@type': 'MedicalCondition',
                name: 'Pregnancy',
              },
            },
            hasPart: [
              {
                '@type': 'WebPageElement',
                name: 'Baby Development',
                description: `Baby development milestones at week ${weekNum} of pregnancy`,
              },
              {
                '@type': 'WebPageElement',
                name: 'Baby Stats',
                description: `Baby size: ${data.babySize}, Length: ${data.babyLength}, Weight: ${data.babyWeight}`,
              },
              {
                '@type': 'WebPageElement',
                name: 'Common Symptoms',
                description: `Common pregnancy symptoms during week ${weekNum}`,
              },
              {
                '@type': 'WebPageElement',
                name: 'Nutrition Tips',
                description: `Nutrition recommendations for week ${weekNum} of pregnancy`,
              },
              {
                '@type': 'WebPageElement',
                name: 'Weekly Checklist',
                description: `To-do list and checklist for pregnancy week ${weekNum}`,
              },
              {
                '@type': 'WebPageElement',
                name: 'When to Call Your Doctor',
                description: 'Warning signs that require medical attention',
              },
            ],
            mainEntity: {
              '@type': 'HowTo',
              name: `How to Navigate Week ${weekNum} of Pregnancy`,
              description: `Complete guide for pregnancy week ${weekNum} including baby development, symptoms, nutrition, and checklist.`,
              step: data.toDo.map((item, index) => ({
                '@type': 'HowToStep',
                position: index + 1,
                name: item,
                text: item,
              })),
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE_URL,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Week by Week',
                  item: `${SITE_URL}/week-by-week`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: `Week ${weekNum}`,
                  item: `${SITE_URL}/week-by-week/${weekNum}`,
                },
              ],
            },
          }),
        }}
      />
      {/* FAQ Schema (separate for better SEO) */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  )
}
