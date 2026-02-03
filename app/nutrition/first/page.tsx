import Link from 'next/link'

export const metadata = {
  title: 'First Trimester Nutrition Guide - Weeks 1-13 | My Pregnancy Week',
  description: 'Complete nutrition guide for first trimester pregnancy (weeks 1-13). Learn about essential nutrients, foods to eat and avoid, managing morning sickness, and healthy eating tips.',
}

export default function FirstTrimesterNutritionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/nutrition"
          className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
        >
          ← Back to Nutrition
        </Link>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>🌱</span>
            <span>First Trimester • Weeks 1-13</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            First Trimester Nutrition Guide
          </h1>
          <p className="text-xl text-gray-700">
            Essential nutrients and eating strategies for early pregnancy
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            The first trimester is a critical time for your baby's development. During these first 13 weeks, your baby's major organs,
            nervous system, and body structures are forming. Proper nutrition during this period sets the foundation for a healthy
            pregnancy and supports your baby's rapid growth.
          </p>
          <p className="text-gray-700">
            Many women experience morning sickness, food aversions, and fatigue during the first trimester, which can make eating
            challenging. Focus on nutrient-dense foods when you can eat, and don't worry if your diet isn't perfect every day.
          </p>
        </div>
      </section>

      {/* Key Nutrients */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔑</span> Key Nutrients for First Trimester
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Folic Acid (400-800 mcg daily)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Most critical nutrient in first trimester.</strong> Prevents neural tube defects like spina bifida.
                Your baby's neural tube closes by week 6-7, often before you know you're pregnant.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Prenatal vitamins, fortified cereals, spinach, lentils, asparagus, broccoli, oranges
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Protein (75-100g daily)</h3>
              <p className="text-gray-700 mb-2">
                Essential for cell growth and blood production. Your body needs protein to support rapid fetal development
                and placenta formation.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Lean meats, poultry, fish (low-mercury), eggs, Greek yogurt, beans, nuts, tofu
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Iron (27mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Prevents anemia and supports increased blood volume. Your blood volume increases by 50% during pregnancy,
                requiring more iron to make hemoglobin.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Red meat, poultry, fish, fortified cereals, spinach, beans. Pair with vitamin C for better absorption.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Vitamin B6 (1.9mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Helps reduce nausea and supports brain development. Many women find B6 supplements helpful for morning sickness.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Chicken, fish, potatoes, chickpeas, bananas, fortified cereals
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Calcium (1000mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Builds baby's bones and teeth. If you don't get enough calcium, your baby will take it from your bones.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Milk, yogurt, cheese, fortified plant milks, sardines, kale, almonds
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Omega-3 DHA (200-300mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Supports baby's brain and eye development. Critical during periods of rapid neural development.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Salmon, sardines, DHA-fortified eggs, walnuts, chia seeds, DHA supplements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Eat */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Best Foods for First Trimester
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Nutrient-Dense Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Leafy greens:</strong> Spinach, kale (folate, iron, calcium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Eggs:</strong> Complete protein, choline, B vitamins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Greek yogurt:</strong> Protein, calcium, probiotics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Berries:</strong> Antioxidants, fiber, vitamin C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Avocados:</strong> Healthy fats, folate, potassium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Sweet potatoes:</strong> Vitamin A, fiber, vitamin C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Salmon:</strong> Omega-3 DHA, protein (limit to 2-3 servings/week)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Legumes:</strong> Protein, folate, iron, fiber</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Easy-to-Digest Options</h3>
              <p className="text-sm text-gray-600 mb-3">For when morning sickness strikes:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Crackers, toast, pretzels (bland carbs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Bananas (easy on stomach, potassium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Ginger tea or ginger candies (reduces nausea)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Lemon water (refreshing, hydrating)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Cold foods (less smell triggers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Popsicles or frozen fruit (hydration + refreshing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Apple sauce (easy to digest, gentle on stomach)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Plain pasta or rice (simple carbs for energy)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Avoid */}
      <section className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Foods to Avoid in First Trimester
          </h2>

          <div className="space-y-3">
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">High-Mercury Fish</p>
              <p className="text-sm text-gray-700">Swordfish, shark, king mackerel, tilefish. Mercury can harm baby's developing nervous system.</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">Raw or Undercooked Foods</p>
              <p className="text-sm text-gray-700">Raw fish (sushi), raw eggs, rare meat, raw sprouts. Risk of foodborne illness.</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">Unpasteurized Products</p>
              <p className="text-sm text-gray-700">Soft cheeses (feta, brie, blue cheese), unpasteurized milk or juice. Risk of Listeria.</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">Deli Meats & Hot Dogs</p>
              <p className="text-sm text-gray-700">Unless heated to steaming hot. Risk of Listeria contamination.</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">Alcohol</p>
              <p className="text-sm text-gray-700">No amount is considered safe during pregnancy. Can cause fetal alcohol syndrome.</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">Excess Caffeine</p>
              <p className="text-sm text-gray-700">Limit to 200mg/day (one 12oz coffee). High amounts linked to miscarriage risk.</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-gray-900">Liver & Organ Meats</p>
              <p className="text-sm text-gray-700">Too much vitamin A can be harmful to baby. Occasional small amounts are okay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Morning Sickness */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🤢</span> Managing Morning Sickness Through Diet
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Eating Strategies</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Eat small, frequent meals</strong> every 2-3 hours instead of 3 large meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Keep crackers by your bed</strong> and eat a few before getting up in the morning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Avoid empty stomach</strong> - hunger can worsen nausea</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Try protein-rich snacks</strong> before bed to stabilize blood sugar overnight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Eat cold or room-temperature foods</strong> if cooking smells trigger nausea</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Sip fluids slowly</strong> throughout day rather than drinking large amounts at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Try ginger</strong> in tea, candies, or ginger ale (real ginger, not just flavoring)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-gray-700"><strong>Avoid trigger foods</strong> - greasy, spicy, or strong-smelling foods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🍽️</span> Sample First Trimester Day
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Before Rising</h3>
              <p className="text-gray-700">Few crackers or dry toast to settle stomach</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Breakfast (8am)</h3>
              <p className="text-gray-700">Scrambled eggs with spinach, whole wheat toast, orange juice</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Mid-Morning Snack (10am)</h3>
              <p className="text-gray-700">Greek yogurt with berries and granola</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Lunch (12:30pm)</h3>
              <p className="text-gray-700">Grilled chicken salad with avocado, chickpeas, whole grain roll</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Afternoon Snack (3pm)</h3>
              <p className="text-gray-700">Apple slices with almond butter, handful of walnuts</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Dinner (6pm)</h3>
              <p className="text-gray-700">Baked salmon, sweet potato, steamed broccoli</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Evening Snack (8:30pm)</h3>
              <p className="text-gray-700">Cheese and whole grain crackers or banana with peanut butter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/nutrition/second"
          className="bg-primary-50 border border-primary-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Second Trimester Nutrition →</h3>
          <p className="text-sm text-gray-700">
            Learn about nutrition for weeks 14-27 of pregnancy
          </p>
        </Link>

        <Link
          href="/week-by-week"
          className="bg-pink-50 border border-pink-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Week-by-Week Guide →</h3>
          <p className="text-sm text-gray-700">
            Track your baby's development each week
          </p>
        </Link>
      </div>
    </div>
  )
}
