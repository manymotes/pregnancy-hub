import Link from 'next/link'
import Script from 'next/script'
import { symptomTrackerData, symptomCategories } from '@/lib/symptomTrackerData'
import { SITE_URL } from '@/lib/constants'
import { getBreadcrumbSchema, organizationData, medicalReviewers } from '@/lib/authorsData'

export const metadata = {
  title: 'Pregnancy Symptom Tracker - Track & Manage Your Symptoms Week by Week',
  description: 'Comprehensive pregnancy symptom tracker with detailed guides for 12 common symptoms including morning sickness, fatigue, back pain, and more. Get relief tips and know when to call your doctor.',
  openGraph: {
    title: 'Pregnancy Symptom Tracker - Track & Manage Your Symptoms',
    description: 'Track pregnancy symptoms week by week with expert advice on relief strategies and warning signs.',
  },
}

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Symptom Tracker', url: `${SITE_URL}/symptom-tracker` },
])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Pregnancy Symptom Tracker',
  headline: 'Pregnancy Symptom Tracker - Track & Manage Your Symptoms Week by Week',
  description: 'Comprehensive pregnancy symptom tracker with detailed guides for 12 common symptoms including morning sickness, fatigue, back pain, and more.',
  url: `${SITE_URL}/symptom-tracker`,
  datePublished: '2024-01-15T00:00:00.000Z',
  dateModified: new Date().toISOString(),
  medicalSpecialty: 'Obstetrics and Gynaecology',
  about: {
    '@type': 'MedicalCondition',
    name: 'Pregnancy',
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
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most common pregnancy symptoms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common pregnancy symptoms include morning sickness, fatigue, breast tenderness, frequent urination, mood swings, back pain, swelling, heartburn, constipation, leg cramps, Braxton Hicks contractions, and round ligament pain. About 70-90% of pregnant women experience these symptoms to varying degrees.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do pregnancy symptoms start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pregnancy symptoms can start as early as 1-2 weeks after conception. Early symptoms like fatigue, breast tenderness, and frequent urination often begin in weeks 4-6. Morning sickness typically starts around week 6. Different symptoms appear and peak at different stages throughout the three trimesters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I track my pregnancy symptoms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use our pregnancy symptom tracker to record which symptoms you\'re experiencing, their severity (mild, moderate, severe), when they occur, and what provides relief. This information is valuable for your prenatal appointments and helps you identify patterns and triggers. Our interactive symptom checker can help you understand your symptoms week by week.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I call my doctor about pregnancy symptoms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact your healthcare provider for severe or sudden symptoms, persistent pain, vaginal bleeding, severe headaches with vision changes, signs of dehydration, fever over 101°F, severe swelling especially in face and hands, decreased baby movement after 28 weeks, or any symptoms that concern you. Trust your instincts - it\'s always better to call and be safe.',
      },
    },
  ],
}

export default function SymptomTrackerPage() {
  const digestiveSymptoms = symptomCategories.digestive
    .map((slug) => symptomTrackerData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  const painSymptoms = symptomCategories.pain
    .map((slug) => symptomTrackerData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  const physicalSymptoms = symptomCategories.physical
    .map((slug) => symptomTrackerData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  const emotionalSymptoms = symptomCategories.emotional
    .map((slug) => symptomTrackerData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Track Your Pregnancy Journey
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pregnancy Symptom Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive guides for 12 common pregnancy symptoms. Learn what each symptom is,
            why it happens, week-by-week timing, relief strategies, and when to call your doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/symptom-tracker/checker"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
            >
              Use Symptom Checker
            </Link>
            <Link
              href="/week-by-week"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
            >
              View Week by Week
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
            <div className="text-gray-700 font-medium">Common Symptoms</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-700 font-medium">Relief Tips</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">40</div>
            <div className="text-gray-700 font-medium">Weeks Tracked</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">3</div>
            <div className="text-gray-700 font-medium">Trimesters</div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">ℹ️</span>
            <div>
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Important Information</h3>
              <p className="text-blue-800">
                Every pregnancy is unique. You may experience some, all, or none of these symptoms.
                This tracker is for informational purposes only and doesn\'t replace medical advice.
                Always contact your healthcare provider if you have concerns about your symptoms or pregnancy.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Symptom Checker CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 mb-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Try Our Interactive Symptom Checker</h2>
          <p className="text-xl text-primary-100 mb-6">
            Select your current symptoms and get personalized information, relief tips,
            and guidance on when to contact your doctor.
          </p>
          <Link
            href="/symptom-tracker/checker"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Start Symptom Checker →
          </Link>
        </div>

        {/* Digestive Symptoms */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>🍽️</span>
              Digestive Symptoms
            </h2>
            <p className="text-gray-700 text-lg">
              Common digestive issues caused by hormones and physical changes during pregnancy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {digestiveSymptoms?.filter((s): s is typeof s & {} => !!s).map((symptom) => (
              <Link
                key={symptom.slug}
                href={`/symptom-tracker/${symptom.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {symptom.shortDescription}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>📅</span>
                    <span className="text-xs">{symptom.commonWeeks}</span>
                  </div>
                </div>
                <div className="mt-4 text-primary-600 font-semibold text-sm flex items-center gap-1">
                  Read full guide →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pain & Discomfort */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>⚡</span>
              Pain & Discomfort
            </h2>
            <p className="text-gray-700 text-lg">
              Aches and pains as your body grows and changes to accommodate your baby
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painSymptoms.map((symptom) => (
              <Link
                key={symptom.slug}
                href={`/symptom-tracker/${symptom.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {symptom.shortDescription}
                </p>
                <div className="text-primary-600 font-semibold text-sm">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Physical Changes */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>💪</span>
              Physical Changes
            </h2>
            <p className="text-gray-700 text-lg">
              Common physical symptoms as your body works overtime to support your baby
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {physicalSymptoms.map((symptom) => (
              <Link
                key={symptom.slug}
                href={`/symptom-tracker/${symptom.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {symptom.shortDescription}
                </p>
                <div className="text-primary-600 font-semibold text-sm">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Emotional Changes */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span>💭</span>
              Emotional & Mental Health
            </h2>
            <p className="text-gray-700 text-lg">
              Mood and emotional changes caused by hormones and life transitions
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            {emotionalSymptoms.map((symptom) => (
              <Link
                key={symptom.slug}
                href={`/symptom-tracker/${symptom.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {symptom.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {symptom.shortDescription}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>📅</span>
                    <span className="text-xs">{symptom.commonWeeks}</span>
                  </div>
                </div>
                <div className="mt-4 text-primary-600 font-semibold text-sm flex items-center gap-1">
                  Read full guide →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Emergency Warning */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
            <span>⚠️</span> When to Seek Immediate Medical Attention
          </h2>
          <p className="text-red-800 mb-4 font-semibold">
            While most pregnancy symptoms are normal, some require immediate medical care.
            Call your doctor or go to the emergency room if you experience:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-red-900">
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Severe abdominal pain or cramping</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Vaginal bleeding or fluid leakage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Severe headache with visual changes or swelling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Sudden severe swelling in face, hands, or legs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Decreased baby movement after 28 weeks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Signs of preterm labor before 37 weeks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Severe vomiting with dehydration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 flex-shrink-0">•</span>
              <span>Fever over 101°F (38.3°C)</span>
            </li>
          </ul>
          <p className="text-red-800 mt-4 font-semibold">
            Trust your instincts. If something feels wrong, call your healthcare provider.
            It\'s always better to be safe and get checked out.
          </p>
        </div>

        {/* Related Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Related Pregnancy Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/week-by-week"
              className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-bold mb-2 text-lg">Week by Week Guide</h3>
              <p className="text-sm text-primary-50">
                See what symptoms to expect each week of pregnancy
              </p>
            </Link>
            <Link
              href="/symptoms-by-week"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold mb-2 text-lg">Symptoms by Week</h3>
              <p className="text-sm text-green-50">
                Understand symptom patterns throughout pregnancy
              </p>
            </Link>
            <Link
              href="/trimester-guide"
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold mb-2 text-lg">Trimester Guide</h3>
              <p className="text-sm text-purple-50">
                Learn what to expect in each trimester
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
