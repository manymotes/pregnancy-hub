import { MetadataRoute } from 'next'
import { weeklyData } from '@/lib/weekData'
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

  return [...routes, ...weekPages]
}
