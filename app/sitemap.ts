import { MetadataRoute } from 'next'
import { weeklyData } from '@/lib/weekData'
import { symptomsData } from '@/lib/symptomsData'
import { symptomTrackerData } from '@/lib/symptomTrackerData'
import { babyDevData } from '@/lib/babyDevelopmentData'
import { exercisesData } from '@/lib/exercisesData'
import { medicalTestsData } from '@/lib/medicalTestsData'
import { laborPrepData } from '@/lib/laborPrepData'
import { complicationsData } from '@/lib/complicationsData'
import { calculatorsData } from '@/lib/calculatorsData'
import { checklistsData } from '@/lib/checklistsData'
import { popularComparisons } from '@/lib/comparisonData'
import { POPULAR_TOPICS, TOPICS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mypregnancyweek.com'

  // Base pages
  const routes = [
    '',
    '/week-by-week',
    '/first-trimester',
    '/second-trimester',
    '/third-trimester',
    '/nutrition',
    '/nutrition/first',
    '/nutrition/second',
    '/nutrition/third',
    '/symptoms',
    '/baby-development',
    '/exercises',
    '/medical-tests',
    '/labor-prep',
    '/complications',
    '/calculators',
    '/checklists',
    '/compare-weeks',
    '/symptom-tracker',
    '/symptom-tracker/checker',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/symptom-tracker' || route === '/symptom-tracker/checker' ? 0.8 : 0.8,
  }))

  // Week pages - limit to 40 weeks (actual generated count)
  const weekPages = weeklyData.slice(0, 40).map((week) => ({
    url: `${baseUrl}/week-by-week/${week.week}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Symptom pages - limit to 45 (actual generated count)
  const symptomPages = symptomsData.slice(0, 45).map((symptom) => ({
    url: `${baseUrl}/symptoms/${symptom.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Baby development pages - limit to 35 (actual generated count)
  const babyDevPages = babyDevData.slice(0, 35).map((item) => ({
    url: `${baseUrl}/baby-development/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Exercise pages - limit to 23 (actual generated count)
  const exercisePages = exercisesData.slice(0, 23).map((exercise) => ({
    url: `${baseUrl}/exercises/${exercise.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Medical test pages - limit to 19 (actual generated count)
  const medicalTestPages = medicalTestsData.slice(0, 19).map((test) => ({
    url: `${baseUrl}/medical-tests/${test.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Labor prep pages - limit to 23 (actual generated count)
  const laborPrepPages = laborPrepData.slice(0, 23).map((topic) => ({
    url: `${baseUrl}/labor-prep/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Complication pages - limit to 21 (actual generated count)
  const complicationPages = complicationsData.slice(0, 21).map((comp) => ({
    url: `${baseUrl}/complications/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Calculator pages - limit to 11 (actual generated count)
  const calculatorPages = calculatorsData.slice(0, 11).map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Checklist pages - limit to 9 (actual generated count)
  const checklistPages = checklistsData.slice(0, 9).map((checklist) => ({
    url: `${baseUrl}/checklists/${checklist.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Comparison pages - all 50 popular comparisons
  const comparisonPages = popularComparisons.map((comparison) => ({
    url: `${baseUrl}/compare-weeks/${comparison.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Symptom tracker pages - 12 detailed symptom guides
  const symptomTrackerPages = symptomTrackerData.map((symptom) => ({
    url: `${baseUrl}/symptom-tracker/${symptom.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...routes,
    ...weekPages,
    ...symptomPages,
    ...symptomTrackerPages,
    ...babyDevPages,
    ...exercisePages,
    ...medicalTestPages,
    ...laborPrepPages,
    ...complicationPages,
    ...calculatorPages,
    ...checklistPages,
    ...comparisonPages,
  ]
}
