export const metadata = {
  title: 'About PregnancyHub - Your Trusted Pregnancy Resource',
  description: 'Learn about PregnancyHub, your comprehensive source for pregnancy information, week-by-week guides, and expert advice for expectant mothers.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About PregnancyHub
      </h1>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Your comprehensive guide to pregnancy, from conception to birth and beyond.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            PregnancyHub is dedicated to providing expectant mothers with accurate, up-to-date, and
            comprehensive pregnancy information. We believe that every woman deserves access to reliable
            resources throughout their pregnancy journey.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Week-by-week pregnancy guides (weeks 1-40)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Trimester-specific information and milestones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Comprehensive nutrition and diet guidance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Symptom management and what to expect</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Baby development tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Prenatal care and health information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Labor, delivery, and postpartum guidance</span>
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Disclaimer</h2>
          <p className="text-gray-700">
            The information provided on PregnancyHub is for educational and informational purposes only.
            It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician or other qualified health provider with any questions
            you may have regarding your pregnancy or medical condition.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Accuracy</h2>
          <p className="text-gray-700 mb-4">
            We strive to ensure that all information on PregnancyHub is accurate and current. Our content
            is based on widely accepted medical guidelines and research. However, pregnancy is a deeply
            individual experience, and what applies to one person may not apply to another.
          </p>
          <p className="text-gray-700">
            We encourage all expectant mothers to work closely with their healthcare providers throughout
            their pregnancy journey.
          </p>
        </section>

        <section className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or feedback? We'd love to hear from you. Your input helps us improve and
            provide better resources for expectant mothers everywhere.
          </p>
        </section>
      </div>
    </div>
  )
}
