import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'
import { getBreadcrumbSchema, organizationData, medicalReviewers } from '@/lib/authorsData'

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: SITE_URL },
  { name: 'Nutrition', url: `${SITE_URL}/nutrition` },
])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Pregnancy Nutrition Guide',
  headline: 'Pregnancy Nutrition Guide - What to Eat While Pregnant',
  description: 'Complete pregnancy nutrition guide including foods to eat, foods to avoid, vitamins, and meal planning for a healthy pregnancy.',
  url: `${SITE_URL}/nutrition`,
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
      name: 'Essential Nutrients',
      description: 'Key nutrients needed during pregnancy including folic acid, iron, calcium, and DHA',
    },
    {
      '@type': 'WebPageElement',
      name: 'Foods to Eat',
      description: 'Healthy foods recommended during pregnancy',
    },
    {
      '@type': 'WebPageElement',
      name: 'Foods to Avoid',
      description: 'Foods that should be avoided during pregnancy for safety',
    },
    {
      '@type': 'WebPageElement',
      name: 'Hydration',
      description: 'Importance of staying hydrated during pregnancy',
    },
  ],
}

export const metadata = {
  title: 'Pregnancy Nutrition Guide - What to Eat While Pregnant',
  description: 'Complete pregnancy nutrition guide including foods to eat, foods to avoid, vitamins, and meal planning for a healthy pregnancy.',
}

export default function NutritionPage() {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        🥗 Pregnancy Nutrition Guide
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Eating well during pregnancy is essential for your baby's development and your health.
        Learn what to eat, what to avoid, and how to maintain a balanced diet.
      </p>

      {/* Trimester-Specific Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Nutrition Guides by Trimester
        </h2>
        <p className="text-gray-600 mb-6">
          Your nutritional needs change throughout pregnancy. Get trimester-specific guidance:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/nutrition/first"
            className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="font-semibold text-gray-900 mb-2">First Trimester</h3>
            <p className="text-sm text-gray-700 mb-3">Weeks 1-13</p>
            <p className="text-sm text-gray-600">
              Essential nutrients for early development, managing morning sickness, and foods to avoid
            </p>
          </Link>

          <Link
            href="/nutrition/second"
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-3">🌻</div>
            <h3 className="font-semibold text-gray-900 mb-2">Second Trimester</h3>
            <p className="text-sm text-gray-700 mb-3">Weeks 14-27</p>
            <p className="text-sm text-gray-600">
              Increased calorie needs, bone-building nutrients, energy foods, and healthy weight gain
            </p>
          </Link>

          <Link
            href="/nutrition/third"
            className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-3">🌸</div>
            <h3 className="font-semibold text-gray-900 mb-2">Third Trimester</h3>
            <p className="text-sm text-gray-700 mb-3">Weeks 28-40</p>
            <p className="text-sm text-gray-600">
              Labor preparation, iron stores, managing discomfort, and breastfeeding prep
            </p>
          </Link>
        </div>
      </section>

      {/* Essential Nutrients */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Essential Nutrients During Pregnancy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Folic Acid',
              amount: '400-800 mcg daily',
              why: 'Prevents neural tube defects',
              sources: 'Leafy greens, fortified cereals, legumes',
            },
            {
              title: 'Iron',
              amount: '27 mg daily',
              why: 'Supports increased blood volume',
              sources: 'Red meat, spinach, beans, fortified foods',
            },
            {
              title: 'Calcium',
              amount: '1,000 mg daily',
              why: 'Builds baby\'s bones and teeth',
              sources: 'Dairy, fortified plant milk, leafy greens',
            },
            {
              title: 'Protein',
              amount: '71 g daily',
              why: 'Supports tissue and organ development',
              sources: 'Lean meat, poultry, fish, eggs, legumes',
            },
            {
              title: 'DHA (Omega-3)',
              amount: '200-300 mg daily',
              why: 'Brain and eye development',
              sources: 'Fatty fish, walnuts, flaxseed, fortified eggs',
            },
            {
              title: 'Vitamin D',
              amount: '600 IU daily',
              why: 'Helps absorb calcium',
              sources: 'Sunlight, fortified milk, fatty fish',
            },
          ].map((nutrient) => (
            <div key={nutrient.title} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-primary-600 mb-2">{nutrient.title}</h3>
              <p className="text-gray-700 mb-2"><strong>Amount:</strong> {nutrient.amount}</p>
              <p className="text-gray-700 mb-2"><strong>Why:</strong> {nutrient.why}</p>
              <p className="text-gray-700"><strong>Sources:</strong> {nutrient.sources}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Foods to Eat */}
      <section className="mb-12">
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✅ Foods to Eat During Pregnancy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Fruits & Vegetables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Leafy greens (spinach, kale)</li>
                <li>• Berries (high in antioxidants)</li>
                <li>• Oranges (vitamin C)</li>
                <li>• Sweet potatoes (vitamin A)</li>
                <li>• Avocados (healthy fats)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Proteins</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lean beef and pork</li>
                <li>• Chicken and turkey</li>
                <li>• Eggs (fully cooked)</li>
                <li>• Legumes and beans</li>
                <li>• Greek yogurt</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Whole Grains</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Quinoa</li>
                <li>• Brown rice</li>
                <li>• Whole wheat bread</li>
                <li>• Oatmeal</li>
                <li>• Fortified cereals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Dairy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pasteurized milk</li>
                <li>• Hard cheeses</li>
                <li>• Greek yogurt</li>
                <li>• Cottage cheese</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Avoid */}
      <section className="mb-12">
        <div className="bg-red-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ❌ Foods to Avoid During Pregnancy
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Raw or Undercooked Foods</h3>
              <p>Raw fish (sushi with raw fish), rare meat, raw eggs, raw cookie dough</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">High-Mercury Fish</h3>
              <p>Shark, swordfish, king mackerel, tilefish. Limit tuna to 6 oz per week.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Unpasteurized Products</h3>
              <p>Unpasteurized milk, soft cheeses (feta, brie, camembert) unless labeled pasteurized</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Deli Meats & Hot Dogs</h3>
              <p>Unless heated to steaming hot (165°F) to kill listeria bacteria</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Excessive Caffeine</h3>
              <p>Limit to 200mg per day (about one 12 oz cup of coffee)</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Alcohol</h3>
              <p>No amount of alcohol is safe during pregnancy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hydration */}
      <section className="mb-12">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            💧 Staying Hydrated
          </h2>
          <p className="text-gray-700 mb-4">
            Drink 8-12 glasses (64-96 oz) of water per day. Proper hydration helps:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Prevent constipation</li>
            <li>• Reduce swelling</li>
            <li>• Prevent urinary tract infections</li>
            <li>• Regulate body temperature</li>
            <li>• Support amniotic fluid levels</li>
          </ul>
        </div>
      </section>

      {/* Meal Planning */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sample Day of Eating
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-2">Breakfast</h3>
            <p className="text-gray-700">
              Oatmeal with berries and walnuts, Greek yogurt, glass of fortified orange juice
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-2">Snack</h3>
            <p className="text-gray-700">
              Apple slices with peanut butter
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-2">Lunch</h3>
            <p className="text-gray-700">
              Grilled chicken salad with spinach, chickpeas, and avocado; whole grain roll
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-2">Snack</h3>
            <p className="text-gray-700">
              Cheese and whole grain crackers
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-2">Dinner</h3>
            <p className="text-gray-700">
              Baked salmon, quinoa, roasted sweet potatoes and broccoli
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-2">Evening Snack</h3>
            <p className="text-gray-700">
              Handful of almonds or a small bowl of berries
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Talk to Your Healthcare Provider
        </h2>
        <p className="text-primary-100 mb-6">
          Always consult with your doctor or dietitian for personalized nutrition advice during pregnancy.
        </p>
        <Link
          href="/week-by-week"
          className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
        >
          View Week by Week Guide
        </Link>
      </div>
      </div>
    </>
  )
}
