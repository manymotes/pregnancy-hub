import Link from 'next/link'
import Script from 'next/script'
import { exercisesData } from '@/lib/exercisesData'
import { SITE_URL } from '@/lib/constants'
import { getBreadcrumbSchema, organizationData, medicalReviewers } from '@/lib/authorsData'

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Exercises', url: `${SITE_URL}/exercises` },
])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Pregnancy Exercise & Fitness Guide',
  headline: 'Pregnancy Exercises & Fitness Guide - Safe Workouts for All Trimesters',
  description: 'Comprehensive guide to safe pregnancy exercises including yoga, walking, swimming, strength training, and more. Exercise routines for every trimester.',
  url: `${SITE_URL}/exercises`,
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
  hasPart: [
    {
      '@type': 'WebPageElement',
      name: 'Cardiovascular Exercise',
      description: 'Low-impact cardio workouts safe for pregnancy',
    },
    {
      '@type': 'WebPageElement',
      name: 'Strength Training',
      description: 'Safe strength exercises during pregnancy',
    },
    {
      '@type': 'WebPageElement',
      name: 'Flexibility & Stretching',
      description: 'Gentle stretches for pregnancy',
    },
    {
      '@type': 'WebPageElement',
      name: 'Pelvic Floor Exercises',
      description: 'Essential exercises for pelvic health',
    },
    {
      '@type': 'WebPageElement',
      name: 'Safety Guidelines',
      description: 'Important safety guidelines for exercising during pregnancy',
    },
  ],
}

export const metadata = {
  title: 'Pregnancy Exercises & Fitness Guide - Safe Workouts for All Trimesters',
  description: 'Comprehensive guide to safe pregnancy exercises including yoga, walking, swimming, strength training, and more. Exercise routines for every trimester.',
}

export default function ExercisesPage() {
  const cardioExercises = exercisesData.filter((ex) => ex.category === 'cardio')
  const strengthExercises = exercisesData.filter((ex) => ex.category === 'strength')
  const flexibilityExercises = exercisesData.filter((ex) => ex.category === 'flexibility')
  const pelvicFloorExercises = exercisesData.filter((ex) => ex.category === 'pelvic-floor')
  const relaxationExercises = exercisesData.filter((ex) => ex.category === 'relaxation')

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pregnancy Exercise & Fitness Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Safe, effective exercises for every stage of pregnancy. Stay strong, reduce discomfort, and prepare your body for labor and delivery.
        </p>
      </div>

      {/* Exercise Benefits */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Exercise During Pregnancy?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Reduces back pain and pregnancy discomfort</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Helps control weight gain and gestational diabetes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Improves sleep, mood, and energy levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Strengthens muscles for labor and delivery</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">May shorten labor and reduce complications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Promotes faster postpartum recovery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Reduces swelling and improves circulation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Builds strength for carrying and caring for baby</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cardio Exercises */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Cardiovascular Exercise</h2>
          <p className="text-gray-600">Low-impact cardio workouts that keep your heart healthy and energy up.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardioExercises.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{exercise.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{exercise.frequency}</span>
                <span className="text-primary-600 font-semibold">Learn More →</span>
              </div>
              <div className="mt-3 flex gap-1">
                {exercise.trimesterSafety.first && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1st</span>
                )}
                {exercise.trimesterSafety.second && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2nd</span>
                )}
                {exercise.trimesterSafety.third && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3rd</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Strength Exercises */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Strength Training</h2>
          <p className="text-gray-600">Build muscle strength to support your changing body and prepare for labor.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengthExercises.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{exercise.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{exercise.frequency}</span>
                <span className="text-primary-600 font-semibold">Learn More →</span>
              </div>
              <div className="mt-3 flex gap-1">
                {exercise.trimesterSafety.first && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1st</span>
                )}
                {exercise.trimesterSafety.second && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2nd</span>
                )}
                {exercise.trimesterSafety.third && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3rd</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Flexibility Exercises */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Flexibility & Stretching</h2>
          <p className="text-gray-600">Gentle stretches to maintain mobility and relieve tension.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flexibilityExercises.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{exercise.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{exercise.frequency}</span>
                <span className="text-primary-600 font-semibold">Learn More →</span>
              </div>
              <div className="mt-3 flex gap-1">
                {exercise.trimesterSafety.first && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1st</span>
                )}
                {exercise.trimesterSafety.second && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2nd</span>
                )}
                {exercise.trimesterSafety.third && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3rd</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pelvic Floor Exercises */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Pelvic Floor Strengthening</h2>
          <p className="text-gray-600">Essential exercises for pelvic health, labor preparation, and postpartum recovery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pelvicFloorExercises.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{exercise.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{exercise.frequency}</span>
                <span className="text-primary-600 font-semibold">Learn More →</span>
              </div>
              <div className="mt-3 flex gap-1">
                {exercise.trimesterSafety.first && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1st</span>
                )}
                {exercise.trimesterSafety.second && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2nd</span>
                )}
                {exercise.trimesterSafety.third && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3rd</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Relaxation Exercises */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Relaxation & Stress Relief</h2>
          <p className="text-gray-600">Calming exercises for stress management and labor preparation.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relaxationExercises.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{exercise.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{exercise.frequency}</span>
                <span className="text-primary-600 font-semibold">Learn More →</span>
              </div>
              <div className="mt-3 flex gap-1">
                {exercise.trimesterSafety.first && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1st</span>
                )}
                {exercise.trimesterSafety.second && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2nd</span>
                )}
                {exercise.trimesterSafety.third && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3rd</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Safety Reminder */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
          <span>⚠️</span> Important Safety Guidelines
        </h3>
        <ul className="space-y-2 text-red-900">
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Always get clearance from your healthcare provider before starting any exercise program</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Stop exercising immediately if you experience bleeding, dizziness, chest pain, or contractions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Avoid exercises lying flat on your back after 20 weeks of pregnancy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Stay hydrated and avoid overheating during exercise</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Listen to your body - pregnancy is not the time to push limits or set personal records</span>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}
