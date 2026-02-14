import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Pregnancy Readiness Quiz - Find Your Pregnancy Profile | ${SITE_NAME}`,
  description: 'Take our free 2-minute quiz to discover your pregnancy profile and get personalized guidance, resources, and weekly tips tailored to your needs.',
  keywords: ['pregnancy quiz', 'pregnancy readiness', 'expecting mom quiz', 'pregnancy profile', 'pregnancy test'],
  openGraph: {
    title: 'Pregnancy Readiness Quiz - Discover Your Pregnancy Profile',
    description: 'Get personalized pregnancy guidance based on your unique needs and concerns. Free 2-minute quiz.',
    type: 'website',
  }
}

export default function PregnancyReadinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
