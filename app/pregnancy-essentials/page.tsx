import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pregnancy Essentials - Must-Have Products for Expecting Moms',
  description: 'Expert-recommended pregnancy essentials including prenatal vitamins, maternity clothes, pregnancy pillows, and more. Trusted products for a healthy pregnancy.',
  keywords: ['pregnancy essentials', 'prenatal vitamins', 'maternity clothes', 'pregnancy pillow', 'expecting mom products', 'first trimester essentials'],
}

export default function PregnancyEssentialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pregnancy Essentials for Every Trimester
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl">
            Expert-recommended products to support you through a healthy, comfortable pregnancy.
            From prenatal vitamins to maternity wear, we've got you covered.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Pregnancy is an exciting journey, but knowing what products you actually need can be overwhelming.
            We've curated this list of essential items recommended by OB-GYNs, doulas, and experienced moms
            to help you prepare for each stage of pregnancy.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-16">

          {/* Prenatal Vitamins */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 border-b border-orange-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    💊 Prenatal Vitamins
                  </h2>
                  <p className="text-orange-800 font-medium">Essential from Day 1</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Nature Made Prenatal */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Nature Made Prenatal Multi + DHA
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.7/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The #1 pharmacist-recommended prenatal vitamin brand. Contains folic acid, iron, and DHA
                  to support baby's brain and eye development. Easy-to-swallow softgels.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Nutrients:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>✓ 800 mcg Folic Acid (prevents neural tube defects)</li>
                      <li>✓ 200 mg DHA (omega-3 for brain development)</li>
                      <li>✓ 28 mg Iron (prevents anemia)</li>
                      <li>✓ Vitamin D, Calcium, B-vitamins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Why We Recommend:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>✓ USP verified for quality</li>
                      <li>✓ No artificial flavors or gluten</li>
                      <li>✓ Gentle on stomach</li>
                      <li>✓ Trusted by healthcare providers</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $25-35 for 150 softgels (75-day supply)
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=nature+made+prenatal+dha&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

              {/* Ritual Prenatal */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Ritual Essential Prenatal Multivitamin
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.6/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Clean, traceable ingredients with no artificial colors or flavors. Delayed-release capsules
                  designed to be gentle on your stomach. Vegan and non-GMO.
                </p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $35/month subscription | <strong>Best for:</strong> Moms who want clean, transparent ingredients
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=ritual+prenatal+vitamin&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Pregnancy Pillow */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-blue-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🛏️ Pregnancy Pillows
                  </h2>
                  <p className="text-blue-800 font-medium">For Better Sleep & Comfort</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* PharMeDoc Full Body Pillow */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    PharMeDoc Full Body Pregnancy Pillow
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.5/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The #1 bestselling pregnancy pillow on Amazon. C-shaped design supports your back, hips, knees,
                  neck, and head for optimal sleeping comfort throughout pregnancy.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Features:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>✓ Full body C-shape design (60 inches)</li>
                      <li>✓ Removable, washable cover</li>
                      <li>✓ Supports all sleep positions</li>
                      <li>✓ Hypoallergenic filling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>✓ Reduces back & hip pain</li>
                      <li>✓ Improves circulation</li>
                      <li>✓ Helps with reflux & heartburn</li>
                      <li>✓ Can be used for nursing later</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $50-70 | <strong>Best time to buy:</strong> Second trimester when sleep gets uncomfortable
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=pharmedoc+pregnancy+pillow&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Maternity Clothes */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 border-b border-purple-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    👗 Maternity Clothing Essentials
                  </h2>
                  <p className="text-purple-800 font-medium">Comfortable & Stylish</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Maternity Leggings */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Maternity Leggings with Belly Support
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★☆</div>
                    <div className="text-gray-600 text-sm">4.4/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  High-waisted maternity leggings that grow with your bump. Soft, stretchy fabric provides
                  all-day comfort and support. Perfect for work, yoga, or lounging.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $20-40 | <strong>Recommendation:</strong> Buy 2-3 pairs for rotation
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=maternity+leggings&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

              {/* Nursing Bras */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Nursing Bras & Sleep Bras
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.6/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Wireless, supportive nursing bras that work during pregnancy and postpartum. Easy clip-down
                  design for breastfeeding. Soft and breathable for all-day wear.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $25-50 for 3-pack | <strong>Buy in:</strong> Third trimester
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=nursing+bra&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Pregnancy Books */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 border-b border-green-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    📚 Pregnancy & Parenting Books
                  </h2>
                  <p className="text-green-800 font-medium">Knowledge is Power</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* What to Expect */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    What to Expect When You're Expecting
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.7/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The classic pregnancy guide trusted by millions of moms. Week-by-week guidance on what's
                  happening with baby and your body, plus answers to common pregnancy questions.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $12-20 | <strong>Format:</strong> Paperback, Kindle, or Audiobook
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=what+to+expect+when+you+are+expecting&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Belly Cream */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 border-b border-pink-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🧴 Belly Butter & Stretch Mark Cream
                  </h2>
                  <p className="text-pink-800 font-medium">Skin Care During Pregnancy</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Palmer's Cocoa Butter Formula Belly Butter
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★☆</div>
                    <div className="text-gray-600 text-sm">4.5/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Specially formulated to help improve skin elasticity and moisture during pregnancy.
                  Contains cocoa butter, vitamin E, collagen, and elastin to keep skin supple.
                </p>
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $10-15 | <strong>Start using:</strong> First trimester
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=palmers+cocoa+butter+pregnancy&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Buying Guide */}
        <div className="mt-16 bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to Buy Pregnancy Essentials
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">First Trimester (Weeks 1-12)</h3>
              <ul className="space-y-1 text-sm">
                <li>• Prenatal vitamins (start immediately)</li>
                <li>• Pregnancy books</li>
                <li>• Belly butter/cream</li>
                <li>• Comfortable bras</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Second Trimester (Weeks 13-26)</h3>
              <ul className="space-y-1 text-sm">
                <li>• Pregnancy pillow</li>
                <li>• Maternity clothes</li>
                <li>• Belly support band</li>
                <li>• Comfortable shoes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Third Trimester (Weeks 27-40)</h3>
              <ul className="space-y-1 text-sm">
                <li>• Nursing bras</li>
                <li>• Hospital bag items</li>
                <li>• Baby essentials</li>
                <li>• Postpartum supplies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            * We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
            We earn a commission at no cost to you when you purchase through our links.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Track Your Pregnancy Week by Week
          </h2>
          <p className="text-xl text-pink-100 mb-6 max-w-2xl mx-auto">
            Get personalized updates on your baby's development, symptoms to expect,
            and tips for each week of pregnancy.
          </p>
          <a
            href="/week-by-week"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-50 transition"
          >
            View Weekly Guide →
          </a>
        </div>

      </div>
    </div>
  )
}
