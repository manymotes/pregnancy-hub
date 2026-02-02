import { MetadataRoute } from 'next'
import { weeklyData } from '@/lib/weekData'
import { symptomsData } from '@/lib/symptomsData'
import { babyDevData } from '@/lib/babyDevelopmentData'
import { exercisesData } from '@/lib/exercisesData'
import { medicalTestsData } from '@/lib/medicalTestsData'
import { laborPrepData } from '@/lib/laborPrepData'
import { complicationsData } from '@/lib/complicationsData'
import { calculatorsData } from '@/lib/calculatorsData'
import { checklistsData } from '@/lib/checklistsData'
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
    '/symptoms',
    '/baby-development',
    '/exercises',
    '/medical-tests',
    '/labor-prep',
    '/complications',
    '/calculators',
    '/checklists',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Week pages
  const weekPages = weeklyData.map((week) => ({
    url: `${baseUrl}/week-by-week/${week.week}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Symptom pages
  const symptomPages = symptomsData.map((symptom) => ({
    url: `${baseUrl}/symptoms/${symptom.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Baby development pages
  const babyDevPages = babyDevData.map((item) => ({
    url: `${baseUrl}/baby-development/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Exercise pages
  const exercisePages = exercisesData.map((exercise) => ({
    url: `${baseUrl}/exercises/${exercise.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Medical test pages
  const medicalTestPages = medicalTestsData.map((test) => ({
    url: `${baseUrl}/medical-tests/${test.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Labor prep pages
  const laborPrepPages = laborPrepData.map((topic) => ({
    url: `${baseUrl}/labor-prep/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Complication pages
  const complicationPages = complicationsData.map((comp) => ({
    url: `${baseUrl}/complications/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Calculator pages
  const calculatorPages = calculatorsData.map((calc) => ({
    url: `${baseUrl}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Checklist pages
  const checklistPages = checklistsData.map((checklist) => ({
    url: `${baseUrl}/checklists/${checklist.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...routes,
    ...weekPages,
    ...symptomPages,
    ...babyDevPages,
    ...exercisePages,
    ...medicalTestPages,
    ...laborPrepPages,
    ...complicationPages,
    ...calculatorPages,
    ...checklistPages,
  ]
}
