import Link from 'next/link'

export const metadata = {
  title: 'Third Trimester Nutrition Guide - Weeks 28-40 | My Pregnancy Week',
  description: 'Complete nutrition guide for third trimester pregnancy (weeks 28-40). Learn about preparing for labor, managing discomfort, energy foods, and nutrition for breastfeeding.',
}

export default function ThirdTrimesterNutritionPage() {
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

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span>🌸</span>
            <span>Third Trimester • Weeks 28-40</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Third Trimester Nutrition Guide
          </h1>
          <p className="text-xl text-gray-700">
            Final stretch nutrition for you and baby's preparation for birth
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            You're in the home stretch! The third trimester brings exciting anticipation as you prepare to meet your baby.
            During weeks 28-40, your baby will gain most of their birth weight, develop fat stores for temperature regulation,
            and their brain will undergo rapid development.
          </p>
          <p className="text-gray-700 mb-4">
            As your baby grows, you may experience increased discomfort, heartburn, and shortness of breath as your uterus
            expands. Eating smaller, frequent meals of nutrient-dense foods will help you manage symptoms while meeting your
            baby's nutritional needs.
          </p>
          <p className="text-gray-700">
            Your nutritional focus shifts to preparing for labor, building iron stores for delivery, supporting baby's brain
            development, and potentially preparing your body for breastfeeding.
          </p>
        </div>
      </section>

      {/* Calorie Needs */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔥</span> Increased Calorie & Nutrient Needs
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Calories: +450-500 per day</h3>
              <p className="text-gray-700">
                Slightly higher than second trimester as baby gains about ½ pound per week. This equals a substantial snack
                like whole grain toast with avocado, egg, and a glass of milk.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Protein: 75-100g daily</h3>
              <p className="text-gray-700">
                Essential for baby's rapid weight gain and continued organ development. Also builds your strength for labor and delivery.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Iron: Extra important now</h3>
              <p className="text-gray-700">
                Baby is building iron stores for first 6 months of life. You need iron reserves for blood loss during delivery.
                Many providers check iron levels and prescribe supplements if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Nutrients */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⭐</span> Critical Nutrients for Third Trimester
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Iron (27-30mg daily)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Top priority in third trimester.</strong> Baby is storing iron for first 6 months of life. You need
                reserves for blood loss during delivery (average 500mL). Low iron causes fatigue and increases complications.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Sources:</strong> Red meat (best absorbed), poultry, fortified cereals, lentils, spinach, pumpkin seeds
              </p>
              <p className="text-sm text-gray-700">
                <strong>Pro tip:</strong> Take iron supplement with vitamin C (orange juice) for better absorption. Avoid calcium
                supplements at same time as they compete for absorption.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Omega-3 DHA (200-300mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Baby's brain triples in size during third trimester! DHA is crucial for neural development, vision, and cognitive
                function. Also supports your mental health postpartum.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Salmon (2-3 times/week), sardines, DHA-fortified eggs, walnuts, algae-based DHA supplements
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Calcium (1000mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Baby's bones continue hardening and teeth are developing beneath gums. Calcium also helps prevent pregnancy-induced
                hypertension and preeclampsia.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Dairy products, fortified plant milk, sardines, kale, almonds, fortified orange juice
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Vitamin K (90 mcg daily)</h3>
              <p className="text-gray-700 mb-2">
                Important for blood clotting during and after delivery. Helps prevent excessive bleeding. Baby also needs vitamin K
                stores (they'll receive a vitamin K shot at birth).
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Leafy greens (kale, spinach, collards), broccoli, Brussels sprouts, cabbage
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Vitamin C (85mg daily)</h3>
              <p className="text-gray-700 mb-2">
                Helps iron absorption (critical now), supports immune function, aids tissue repair, and strengthens blood vessels.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Citrus fruits, strawberries, bell peppers, broccoli, tomatoes, kiwi
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fiber (25-35g daily)</h3>
              <p className="text-gray-700 mb-2">
                Prevents constipation which worsens as baby presses on intestines. Helps manage blood sugar and keeps you full.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Sources:</strong> Whole grains, fruits, vegetables, beans, lentils, oats, chia seeds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Foods */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🥙</span> Power Foods for Third Trimester
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Iron-Rich Power Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Lean red meat:</strong> 3oz provides ~3mg iron (best absorbed form)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Fortified cereals:</strong> Some provide 100% daily iron</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Lentils & beans:</strong> 1 cup provides 6mg iron + protein + fiber</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Spinach:</strong> Pair with vitamin C for better absorption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Pumpkin seeds:</strong> Great iron-rich snack</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Brain Development Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Salmon:</strong> 3oz provides 1000mg DHA (wild caught preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Sardines:</strong> Omega-3 + calcium + protein</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Walnuts:</strong> Plant-based omega-3, easy snack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>DHA eggs:</strong> Fortified with omega-3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Chia/flax seeds:</strong> Add to yogurt or smoothies</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Energy-Sustaining Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Complex carbs:</strong> Quinoa, brown rice, oats (steady energy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Lean proteins:</strong> Chicken, turkey, eggs (sustained fullness)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Nuts & nut butters:</strong> Healthy fats + protein</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Greek yogurt:</strong> Protein + probiotics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Hummus with veggies:</strong> Protein + fiber combo</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Labor Preparation Foods</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Dates:</strong> Studies show 6/day from week 36 may ease labor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Red raspberry leaf tea:</strong> May tone uterus (ask provider)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Protein-rich foods:</strong> Build stamina for labor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Iron-rich foods:</strong> Prevent fatigue during labor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700"><strong>Hydrating foods:</strong> Watermelon, cucumber, berries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Discomfort */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>😌</span> Eating Strategies for Common Third Trimester Issues
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Heartburn & Acid Reflux</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why it happens:</strong> Growing uterus pushes stomach acid up, progesterone relaxes esophageal sphincter
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Eat 5-6 small meals instead of 3 large ones</li>
                <li>• Avoid lying down for 2-3 hours after eating</li>
                <li>• Skip spicy, greasy, acidic foods (tomatoes, citrus, chocolate)</li>
                <li>• Try bland proteins, complex carbs, non-citrus fruits</li>
                <li>• Sleep with head elevated on pillows</li>
                <li>• Drink milk or eat almonds to neutralize acid</li>
              </ul>
            </div>

            <div className="border-l-4 border-brown-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Constipation</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why it happens:</strong> Progesterone slows digestion, baby presses on intestines, iron supplements
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Increase fiber to 25-35g daily (whole grains, fruits, veggies, beans)</li>
                <li>• Drink 10-12 glasses of water daily</li>
                <li>• Try prunes or prune juice daily</li>
                <li>• Eat kiwi fruit (natural laxative)</li>
                <li>• Stay active - walk 30 minutes daily</li>
                <li>• Talk to doctor about switching iron supplement if severe</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Swelling (Edema)</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why it happens:</strong> Increased blood volume, pressure on veins from uterus
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Drink MORE water (helps flush excess sodium)</li>
                <li>• Limit salt intake but don't eliminate completely</li>
                <li>• Eat potassium-rich foods: bananas, sweet potatoes, avocados</li>
                <li>• Avoid processed foods high in sodium</li>
                <li>• Elevate feet when resting</li>
                <li>• Contact doctor if swelling is sudden or severe (could indicate preeclampsia)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fatigue</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why it happens:</strong> Carrying extra weight, disrupted sleep, iron deficiency
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Eat iron-rich foods with vitamin C for energy</li>
                <li>• Choose complex carbs over simple sugars for sustained energy</li>
                <li>• Include protein at every meal and snack</li>
                <li>• Avoid sugar crashes - skip sweets and refined carbs</li>
                <li>• Stay hydrated - dehydration causes fatigue</li>
                <li>• Consider asking doctor to check iron levels</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Shortness of Breath</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Why it happens:</strong> Uterus pushes on diaphragm, increased oxygen needs
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Eat smaller, more frequent meals so stomach doesn't press on diaphragm</li>
                <li>• Avoid large meals that make you feel overly full</li>
                <li>• Sit upright while eating to give lungs more room</li>
                <li>• Eat slowly and chew thoroughly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for Labor */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💪</span> Nutrition to Prepare for Labor
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Build Your Iron Stores (Weeks 28-40)</h3>
              <p className="text-gray-700 mb-2">
                You'll lose 500mL of blood during vaginal delivery (up to 1000mL for C-section). Good iron stores prevent
                postpartum anemia and exhaustion.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Action:</strong> Eat iron-rich foods daily. Take prenatal vitamin. Ask doctor to check iron levels at 28 weeks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Eat Dates Daily (Weeks 36-40)</h3>
              <p className="text-gray-700 mb-2">
                Research suggests eating 6 dates per day in the final month may reduce need for induction and shorten early labor.
                Dates are also high in natural sugars for energy.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Action:</strong> Eat 6 Medjool dates daily starting at 36 weeks. Add to smoothies or eat as a sweet snack.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Stay Hydrated (All Third Trimester)</h3>
              <p className="text-gray-700 mb-2">
                Dehydration can trigger Braxton Hicks contractions and may contribute to early labor. Proper hydration keeps
                amniotic fluid levels healthy and helps prevent constipation.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Action:</strong> Drink 10-12 glasses (80-96oz) of water daily. More if exercising or in hot weather.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Pack Labor Snacks (Week 37+)</h3>
              <p className="text-gray-700 mb-2">
                Many hospitals allow light snacks in early labor. Having easy-to-digest, energy-boosting foods can help sustain you.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ideas:</strong> Honey sticks, dates, granola bars, crackers, lollipops, coconut water, juice boxes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🍽️</span> Sample Third Trimester Day
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Breakfast (8am)</h3>
              <p className="text-gray-700">Fortified oatmeal with walnuts, blueberries, flax seeds, drizzle of maple syrup</p>
              <p className="text-sm text-gray-600">Nutrients: Iron, omega-3, fiber, calcium (if made with milk)</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Mid-Morning Snack (10:30am)</h3>
              <p className="text-gray-700">Greek yogurt with granola and strawberries</p>
              <p className="text-sm text-gray-600">Nutrients: Protein, calcium, vitamin C, probiotics</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Lunch (1pm)</h3>
              <p className="text-gray-700">Lentil soup with whole grain bread, side salad with olive oil dressing</p>
              <p className="text-sm text-gray-600">Nutrients: Iron, protein, fiber, healthy fats</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Afternoon Snack (4pm)</h3>
              <p className="text-gray-700">6 Medjool dates with almond butter, glass of milk</p>
              <p className="text-sm text-gray-600">Nutrients: Natural sugars, calcium, protein (labor prep!)</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Dinner (6:30pm)</h3>
              <p className="text-gray-700">Grilled salmon, quinoa, roasted Brussels sprouts with garlic</p>
              <p className="text-sm text-gray-600">Nutrients: Omega-3 DHA, protein, vitamin K, iron</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Evening Snack (9pm)</h3>
              <p className="text-gray-700">Whole grain crackers with cheese, handful of pumpkin seeds</p>
              <p className="text-sm text-gray-600">Nutrients: Calcium, protein, iron, magnesium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for Breastfeeding */}
      <section className="mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🤱</span> Nutrition for Breastfeeding Preparation
          </h2>
          <p className="text-gray-700 mb-4">
            If you plan to breastfeed, your nutritional needs will actually be higher postpartum than during pregnancy.
            Starting good habits now will help you transition smoothly.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Continue prenatal vitamins:</strong> You'll need them while breastfeeding too
            </p>
            <p className="text-gray-700">
              <strong>Focus on omega-3:</strong> DHA transfers through breast milk for baby's brain development
            </p>
            <p className="text-gray-700">
              <strong>Maintain protein intake:</strong> Breast milk production requires significant protein
            </p>
            <p className="text-gray-700">
              <strong>Stay hydrated:</strong> You'll need even more fluids when your milk comes in (3-5 days postpartum)
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/nutrition/second"
          className="bg-blue-50 border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-900 mb-2">← Second Trimester Nutrition</h3>
          <p className="text-sm text-gray-700">
            Review nutrition for weeks 14-27 of pregnancy
          </p>
        </Link>

        <Link
          href="/labor-prep"
          className="bg-pink-50 border border-pink-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Labor Preparation Guide →</h3>
          <p className="text-sm text-gray-700">
            Get ready for labor and delivery with our comprehensive guide
          </p>
        </Link>
      </div>
    </div>
  )
}
