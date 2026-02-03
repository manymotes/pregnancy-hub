import Link from 'next/link'
import { complicationsData } from '@/lib/complicationsData'

export const metadata = {
  title: 'Pregnancy Complications Guide - Symptoms, Treatment & Prevention',
  description: 'Complete guide to pregnancy complications including preeclampsia, gestational diabetes, placenta previa, and more. Understand symptoms and when to seek help.',
}

export default function ComplicationsPage() {
  const highRisk = complicationsData.filter((comp) => comp.category === 'high-risk')
  const common = complicationsData.filter((comp) => comp.category === 'common')
  const serious = complicationsData.filter((comp) => comp.category === 'serious')
  const infections = complicationsData.filter((comp) => comp.category === 'infection')
  const placental = complicationsData.filter((comp) => comp.category === 'placental')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pregnancy Complications Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding pregnancy complications, their symptoms, and when to seek help. Knowledge empowers you to get the care you need.
        </p>
      </div>

      {/* Symptom Checker */}
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>🩺</span> Symptom Checker
        </h2>
        <p className="text-gray-700 mb-4">
          Experiencing concerning symptoms? Use our symptom checker to learn about possible complications and when to seek care.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Bleeding or Pain</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Vaginal bleeding</li>
              <li>• Severe cramping</li>
              <li>• Abdominal pain</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Pressure or Swelling</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• High blood pressure</li>
              <li>• Severe swelling</li>
              <li>• Pelvic pressure</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Baby Movement</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Decreased movement</li>
              <li>• No movement felt</li>
              <li>• Unusual patterns</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic">
          Note: This checker is for educational purposes only. Always contact your healthcare provider for personalized medical advice.
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-red-900 mb-3 flex items-center gap-2">
          <span>⚠️</span> When to Seek Help
        </h2>
        <p className="text-red-900 mb-4">
          Many complications require immediate medical attention. Trust your instincts - if something feels wrong, call your provider or go to the hospital.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-red-900 mb-2">Call 911 Immediately:</h3>
            <ul className="space-y-1">
              <li>• Heavy bleeding soaking multiple pads per hour</li>
              <li>• Severe chest pain or shortness of breath</li>
              <li>• Sudden severe headache with vision changes</li>
              <li>• Loss of consciousness or seizures</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-900 mb-2">Call Provider Today:</h3>
            <ul className="space-y-1">
              <li>• Any vaginal bleeding</li>
              <li>• Severe pain</li>
              <li>• Decreased fetal movement</li>
              <li>• Signs of preterm labor before 37 weeks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Complications */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Common Complications</h2>
          <p className="text-gray-600">Complications affecting many pregnancies, usually manageable with proper care.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {common.map((comp) => (
            <Link
              key={comp.slug}
              href={`/complications/${comp.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{comp.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ml-2 ${
                  comp.severity === 'mild' ? 'bg-green-100 text-green-700' :
                  comp.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                  comp.severity === 'serious' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {comp.severity}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{comp.howCommon}</p>
              <p className="text-gray-600 text-sm mb-4">{comp.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Serious Complications */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Serious Complications</h2>
          <p className="text-gray-600">Conditions requiring close monitoring and medical intervention.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serious.map((comp) => (
            <Link
              key={comp.slug}
              href={`/complications/${comp.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{comp.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ml-2 ${
                  comp.severity === 'mild' ? 'bg-green-100 text-green-700' :
                  comp.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                  comp.severity === 'serious' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {comp.severity}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{comp.howCommon}</p>
              <p className="text-gray-600 text-sm mb-4">{comp.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Placental Complications */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Placental Complications</h2>
          <p className="text-gray-600">Problems with placenta position or function.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placental.map((comp) => (
            <Link
              key={comp.slug}
              href={`/complications/${comp.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{comp.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ml-2 ${
                  comp.severity === 'mild' ? 'bg-green-100 text-green-700' :
                  comp.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                  comp.severity === 'serious' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {comp.severity}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{comp.howCommon}</p>
              <p className="text-gray-600 text-sm mb-4">{comp.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Infections */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Infections During Pregnancy</h2>
          <p className="text-gray-600">Common infections that can affect pregnancy and baby.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infections.map((comp) => (
            <Link
              key={comp.slug}
              href={`/complications/${comp.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{comp.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ml-2 ${
                  comp.severity === 'mild' ? 'bg-green-100 text-green-700' :
                  comp.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                  comp.severity === 'serious' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {comp.severity}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{comp.howCommon}</p>
              <p className="text-gray-600 text-sm mb-4">{comp.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Prevention & Care */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>🛡️</span> Reducing Your Risk
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-900">
          <div>
            <h4 className="font-bold mb-2">Before Pregnancy:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Maintain healthy weight</li>
              <li>• Manage chronic conditions</li>
              <li>• Take prenatal vitamins with folic acid</li>
              <li>• Quit smoking and limit alcohol</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">During Pregnancy:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Attend all prenatal appointments</li>
              <li>• Report any unusual symptoms immediately</li>
              <li>• Follow provider recommendations</li>
              <li>• Take prescribed medications as directed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
