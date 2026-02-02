import Link from 'next/link'
import { medicalTestsData, getRoutineTests } from '@/lib/medicalTestsData'

export const metadata = {
  title: 'Pregnancy Medical Tests & Procedures Guide - What to Expect',
  description: 'Complete guide to prenatal tests including ultrasounds, blood work, genetic screening, and diagnostic procedures. Know what to expect at each stage.',
}

export default function MedicalTestsPage() {
  const ultrasounds = medicalTestsData.filter((test) => test.category === 'ultrasound')
  const bloodTests = medicalTestsData.filter((test) => test.category === 'blood-test')
  const screeningTests = medicalTestsData.filter((test) => test.category === 'screening')
  const diagnosticTests = medicalTestsData.filter((test) => test.category === 'diagnostic')
  const routineTests = medicalTestsData.filter((test) => test.category === 'routine')
  const specializedTests = medicalTestsData.filter((test) => test.category === 'specialized')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pregnancy Medical Tests & Procedures
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive guide to prenatal testing - from routine blood work to specialized diagnostic procedures. Understand what each test checks for and what to expect.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Prenatal Testing</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-bold mb-2">Routine vs. Optional Tests</h3>
            <p>Some tests are recommended for all pregnant women (routine screening), while others are offered based on age, risk factors, or personal choice.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Screening vs. Diagnostic</h3>
            <p>Screening tests assess risk and suggest if further testing is needed. Diagnostic tests provide definitive answers but may carry small risks.</p>
          </div>
        </div>
      </div>

      {/* Ultrasounds */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ultrasound Scans</h2>
          <p className="text-gray-600">Imaging tests using sound waves to visualize baby and assess development.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultrasounds.map((test) => (
            <Link
              key={test.slug}
              href={`/medical-tests/${test.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{test.title}</h3>
                {test.isRoutine && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">Routine</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{test.whenPerformed}</p>
              <p className="text-gray-600 text-sm mb-4">{test.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Blood Tests */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Blood Tests</h2>
          <p className="text-gray-600">Laboratory tests analyzing blood samples for various conditions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodTests.map((test) => (
            <Link
              key={test.slug}
              href={`/medical-tests/${test.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{test.title}</h3>
                {test.isRoutine && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">Routine</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{test.whenPerformed}</p>
              <p className="text-gray-600 text-sm mb-4">{test.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Screening Tests */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Screening Tests</h2>
          <p className="text-gray-600">Tests that assess risk for genetic conditions and infections.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screeningTests.map((test) => (
            <Link
              key={test.slug}
              href={`/medical-tests/${test.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{test.title}</h3>
                {test.isRoutine && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">Routine</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{test.whenPerformed}</p>
              <p className="text-gray-600 text-sm mb-4">{test.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Diagnostic Tests */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Diagnostic Tests</h2>
          <p className="text-gray-600">Invasive procedures providing definitive genetic diagnosis.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticTests.map((test) => (
            <Link
              key={test.slug}
              href={`/medical-tests/${test.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{test.title}</h3>
                {test.isRoutine && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">Routine</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{test.whenPerformed}</p>
              <p className="text-gray-600 text-sm mb-4">{test.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Routine Tests */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Routine Monitoring</h2>
          <p className="text-gray-600">Standard tests performed at regular prenatal appointments.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routineTests.map((test) => (
            <Link
              key={test.slug}
              href={`/medical-tests/${test.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{test.title}</h3>
                {test.isRoutine && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">Routine</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{test.whenPerformed}</p>
              <p className="text-gray-600 text-sm mb-4">{test.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Specialized Tests */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Specialized Testing</h2>
          <p className="text-gray-600">Advanced monitoring for high-risk pregnancies or specific concerns.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedTests.map((test) => (
            <Link
              key={test.slug}
              href={`/medical-tests/${test.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{test.title}</h3>
                {test.isRoutine && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-2">Routine</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{test.whenPerformed}</p>
              <p className="text-gray-600 text-sm mb-4">{test.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>💡</span> Important Information
        </h3>
        <ul className="space-y-2 text-gray-900">
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Testing is optional - discuss benefits and limitations with your healthcare provider</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Screening tests provide risk assessments, not definitive diagnoses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Consider genetic counseling if you have abnormal results or family history</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">•</span>
            <span>Ask about insurance coverage for non-routine tests before proceeding</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
