import Link from 'next/link'

export const metadata = {
  title: 'Second Trimester Nutrition Guide - Weeks 14-27 | My Pregnancy Week',
  description: 'Complete nutrition guide for second trimester pregnancy (weeks 14-27). Learn about essential nutrients, increased calorie needs, healthy weight gain, and foods for energy.',
}

export default function SecondTrimesterNutritionPage() {
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

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>🌻</span>
            <span>Second Trimester • Weeks 14-27</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Second Trimester Nutrition Guide
          </h1>
          <p className="text-xl text-gray-700">
            Fueling your energy and your baby's rapid growth
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Welcome to the second trimester - often called the "honeymoon phase" of pregnancy! Morning sickness typically subsides,
            energy returns, and your appetite may increase. This is when many women start to show and feel their baby moving.
          </p>
          <p className="text-gray-700 mb-4">
            During weeks 14-27, your baby is growing rapidly, developing bones, muscles, and vital organs. Your nutritional needs
            increase during this trimester, and you'll need about 300-350 extra calories per day compared to pre-pregnancy.
          </p>
          <p className="text-gray-700">
            Focus on nutrient-dense foods that support your baby's bone development, brain growth, and your own increased energy needs.
            This is a great time to establish healthy eating habits that will carry you through the third trimester.
          </p>
        </div>
      </section>

      {/* Calorie Needs */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🍎</span> Increased Calorie & Nutrient Needs
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Calories: +300-350 per day</h3>
              <p className="text-gray-700">
                This is roughly equivalent to a snack like a banana with 2 tablespoons peanut butter and a glass of milk.
                You're not "eating for two" - you're eating smartly for optimal nutrition.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Protein: 75-100g daily</h3>
              <p className="text-gray-700">
                Essential for baby's tissue and organ growth, especially brain development. Also supports your expanding blood volume and breast tissue.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Calcium: 1000-1300mg daily</h3>
              <p className="text-gray-700">
                Critical during second trimester when baby's bones and teeth are hardening. If you don't get enough, baby takes it from your bones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Nutrients */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💊</span> Priority Nutrients for Second Trimester
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Iron (27mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Your blood volume increases 40-50% during pregnancy, peaking in second trimester. Iron prevents anemia and fatigue.
                Pair iron-rich foods with vitamin C for better absorption.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Lean red meat, poultry, lentils, spinach, fortified cereals, pumpkin seeds
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Calcium & Vitamin D (1000mg Ca, 600 IU D daily)</h3>
              <p className="text-gray-700 mb-2">
                Baby's bones are calcifying rapidly. Vitamin D helps your body absorb calcium. Many women are vitamin D deficient -
                your doctor may recommend higher doses.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Dairy products, fortified plant milk, sardines with bones, kale, fortified orange juice
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Omega-3 DHA (200-300mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Critical for baby's brain and eye development, which accelerates in second trimester. DHA also supports neural development.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Salmon, sardines, DHA-fortified eggs, walnuts, chia seeds, algae-based DHA supplements
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Vitamin C (85mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Aids iron absorption, supports immune function, and helps form collagen for baby's bones and skin.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Citrus fruits, strawberries, bell peppers, broccoli, tomatoes, kiwi
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Magnesium (350-400mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Helps build baby's bones and teeth, regulates blood sugar, prevents leg cramps common in second trimester.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Almonds, cashews, spinach, black beans, whole grains, avocado
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fiber (25-30g daily)</h3>
              <p className="text-gray-700 mb-2">
                Prevents constipation (common in pregnancy) and helps control blood sugar. Keeps you feeling full and satisfied.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Whole grains, fruits with skin, vegetables, beans, lentils, oats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Foods */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🥗</span> Best Foods for Second Trimester
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Bone-Building Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Dairy: milk, yogurt, cheese (calcium, protein)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Sardines/canned salmon with bones (calcium, omega-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Fortified plant milks: soy, almond (calcium, vitamin D)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Tofu made with calcium sulfate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Leafy greens: kale, collards, bok choy</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Energy-Boosting Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700">Whole grains: quinoa, brown rice, oats (complex carbs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700">Lean proteins: chicken, turkey, fish (sustained energy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700">Nuts and seeds (healthy fats, protein)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700">Eggs (protein, choline, B vitamins)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700">Beans and lentils (protein, iron, fiber)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Iron-Rich Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700">Lean red meat (heme iron - easily absorbed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700">Poultry: chicken thighs, turkey</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700">Fortified cereals (check for 100% daily value)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700">Spinach, Swiss chard (pair with vitamin C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700">Pumpkin seeds, cashews</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Brain Development Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">Salmon (omega-3 DHA, protein)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">Walnuts (plant-based omega-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">Chia and flax seeds (omega-3, fiber)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">DHA-enriched eggs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">Avocados (healthy fats for brain development)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Gain */}
      <section className="mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚖️</span> Healthy Weight Gain in Second Trimester
          </h2>
          <p className="text-gray-700 mb-4">
            Most women gain about 1 pound per week during the second trimester (12-14 pounds total for weeks 14-27).
            This is when you'll notice the most significant weight gain as baby grows rapidly.
          </p>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Recommended Total Pregnancy Weight Gain</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-700"><strong>Underweight (BMI under 18.5):</strong></span>
                <span className="font-semibold">28-40 lbs</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-700"><strong>Normal weight (BMI 18.5-24.9):</strong></span>
                <span className="font-semibold">25-35 lbs</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-700"><strong>Overweight (BMI 25-29.9):</strong></span>
                <span className="font-semibold">15-25 lbs</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700"><strong>Obese (BMI 30+):</strong></span>
                <span className="font-semibold">11-20 lbs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Managing Common Issues */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Managing Common Second Trimester Issues
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Heartburn & Indigestion</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Eat smaller, more frequent meals instead of 3 large meals</li>
                <li>• Avoid lying down right after eating (wait 2-3 hours)</li>
                <li>• Limit spicy, greasy, and acidic foods</li>
                <li>• Try almonds or milk to neutralize stomach acid</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Constipation</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Increase fiber: aim for 25-30g daily from whole grains, fruits, veggies</li>
                <li>• Drink plenty of water: 8-10 glasses daily</li>
                <li>• Try prunes or prune juice (natural laxative)</li>
                <li>• Stay physically active with regular walking or prenatal exercise</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Leg Cramps</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ensure adequate calcium and magnesium intake</li>
                <li>• Stay hydrated throughout the day</li>
                <li>• Stretch calf muscles before bed</li>
                <li>• Consider magnesium-rich foods: almonds, spinach, bananas</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Gestational Diabetes Screening</h3>
              <p className="text-sm text-gray-700 mb-2">
                Between weeks 24-28, you'll be screened for gestational diabetes. To maintain healthy blood sugar:
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Choose complex carbs over simple sugars</li>
                <li>• Pair carbs with protein to stabilize blood sugar</li>
                <li>• Limit sugary drinks and sweets</li>
                <li>• Eat regular meals and snacks to prevent blood sugar dips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🍽️</span> Sample Second Trimester Day
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Breakfast (7:30am)</h3>
              <p className="text-gray-700">Greek yogurt parfait with granola, berries, chia seeds, drizzle of honey</p>
              <p className="text-sm text-gray-600">Nutrients: Calcium, protein, omega-3, probiotics</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Mid-Morning Snack (10am)</h3>
              <p className="text-gray-700">Apple slices with almond butter, handful of walnuts</p>
              <p className="text-sm text-gray-600">Nutrients: Fiber, healthy fats, omega-3</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Lunch (12:30pm)</h3>
              <p className="text-gray-700">Quinoa bowl with grilled chicken, avocado, black beans, salsa, cheese</p>
              <p className="text-sm text-gray-600">Nutrients: Protein, iron, calcium, fiber, healthy fats</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Afternoon Snack (3:30pm)</h3>
              <p className="text-gray-700">Smoothie: spinach, banana, mango, milk, flax seeds</p>
              <p className="text-sm text-gray-600">Nutrients: Iron, calcium, vitamin C, omega-3</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Dinner (6:30pm)</h3>
              <p className="text-gray-700">Baked salmon, roasted sweet potato, sautéed kale with garlic</p>
              <p className="text-sm text-gray-600">Nutrients: Omega-3 DHA, vitamin A, iron, calcium</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Evening Snack (9pm)</h3>
              <p className="text-gray-700">Whole grain crackers with cheese, glass of milk</p>
              <p className="text-sm text-gray-600">Nutrients: Calcium, protein, complex carbs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/nutrition/first"
          className="bg-green-50 border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-900 mb-2">← First Trimester Nutrition</h3>
          <p className="text-sm text-gray-700">
            Review nutrition for weeks 1-13 of pregnancy
          </p>
        </Link>

        <Link
          href="/nutrition/third"
          className="bg-purple-50 border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Third Trimester Nutrition →</h3>
          <p className="text-sm text-gray-700">
            Learn about nutrition for weeks 28-40 of pregnancy
          </p>
        </Link>
      </div>
    </div>
  )
}
