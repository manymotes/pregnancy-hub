import Link from 'next/link'
import { checklistsData } from '@/lib/checklistsData'

export const metadata = {
  title: 'Pregnancy Checklists & Planning Guides - Hospital Bag, Registry, Trimester Tasks',
  description: 'Essential pregnancy checklists including hospital bag packing list, baby registry, trimester-by-trimester tasks, and postpartum preparation.',
}

export default function ChecklistsPage() {
  const trimesterChecklists = checklistsData.filter((list) => list.category === 'trimester')
  const preparationChecklists = checklistsData.filter((list) => list.category === 'preparation')
  const babyChecklists = checklistsData.filter((list) => list.category === 'baby')
  const postpartumChecklists = checklistsData.filter((list) => list.category === 'postpartum')
  const planningChecklists = checklistsData.filter((list) => list.category === 'planning')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pregnancy Checklists & Planning Guides
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay organized throughout your pregnancy with our comprehensive checklists. From trimester tasks to hospital bag packing, we've got you covered.
        </p>
      </div>

      {/* Featured Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
          <span>✓</span> Stay Organized & Prepared
        </h2>
        <p className="text-blue-900 mb-3">
          These checklists help you stay on top of important tasks, appointments, and preparations throughout your pregnancy journey. Print them, save them, or use them as a guide.
        </p>
        <p className="text-sm text-blue-800">
          Remember: Every pregnancy is different. Use these as starting points and adjust based on your personal situation and provider recommendations.
        </p>
      </div>

      {/* Trimester Checklists */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">📅 Trimester-by-Trimester</h2>
          <p className="text-gray-600">Essential tasks and preparations for each stage of pregnancy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {trimesterChecklists.map((checklist) => (
            <Link
              key={checklist.slug}
              href={`/checklists/${checklist.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="mb-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  checklist.trimester === 'first' ? 'bg-green-100 text-green-700' :
                  checklist.trimester === 'second' ? 'bg-blue-100 text-blue-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {checklist.trimester} Trimester
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{checklist.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{checklist.shortDescription}</p>
              <span className="text-primary-600 font-semibold text-sm">View Checklist →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Preparation Checklists */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🎒 Labor & Delivery Prep</h2>
          <p className="text-gray-600">Get ready for the big day with these essential preparation lists.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preparationChecklists.map((checklist) => (
            <Link
              key={checklist.slug}
              href={`/checklists/${checklist.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{checklist.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{checklist.shortDescription}</p>
              <p className="text-xs text-gray-500 mb-4">Start: {checklist.whenToStart}</p>
              <span className="text-primary-600 font-semibold text-sm">View Checklist →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Baby Prep Checklists */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">👶 Baby Essentials</h2>
          <p className="text-gray-600">Everything you need to prepare for your new arrival.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {babyChecklists.map((checklist) => (
            <Link
              key={checklist.slug}
              href={`/checklists/${checklist.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{checklist.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{checklist.shortDescription}</p>
              <p className="text-xs text-gray-500 mb-4">Start: {checklist.whenToStart}</p>
              <span className="text-primary-600 font-semibold text-sm">View Checklist →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Postpartum Checklists */}
      <section className="mb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">💗 Postpartum Care</h2>
          <p className="text-gray-600">Prepare for your recovery and adjustment after birth.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postpartumChecklists.map((checklist) => (
            <Link
              key={checklist.slug}
              href={`/checklists/${checklist.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{checklist.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{checklist.shortDescription}</p>
              <p className="text-xs text-gray-500 mb-4">Start: {checklist.whenToStart}</p>
              <span className="text-primary-600 font-semibold text-sm">View Checklist →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Planning Checklists */}
      {planningChecklists.length > 0 && (
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">📋 Planning & Tracking</h2>
            <p className="text-gray-600">Stay on top of appointments, tests, and important dates.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningChecklists.map((checklist) => (
              <Link
                key={checklist.slug}
                href={`/checklists/${checklist.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{checklist.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{checklist.shortDescription}</p>
                <p className="text-xs text-gray-500 mb-4">Start: {checklist.whenToStart}</p>
                <span className="text-primary-600 font-semibold text-sm">View Checklist →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tips for Using Checklists */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>💡</span> Tips for Using These Checklists
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-900">
          <div>
            <h4 className="font-bold mb-2">Getting Started:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Print or save checklists digitally</li>
              <li>• Start with your current trimester</li>
              <li>• Review the "when to start" guidelines</li>
              <li>• Check items off as you complete them</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Remember:</h4>
            <ul className="space-y-1 text-sm">
              <li>• These are guides, not rigid rules</li>
              <li>• Adjust based on your situation</li>
              <li>• Ask your provider about specific items</li>
              <li>• Don't stress about perfection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
