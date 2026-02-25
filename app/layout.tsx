import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import { siteConfig } from '@/lib/config'

// Dynamically import non-critical client components to reduce initial JS bundle
// These components are not needed for LCP or SEO, so we defer their loading
// Footer is below the fold and can be lazy loaded
const MedicalDisclaimerBanner = dynamic(
  () => import('@/components/MedicalDisclaimerBanner').then(mod => mod.MedicalDisclaimerBanner),
  { ssr: false }
)
const QuickActions = dynamic(
  () => import('@/components/QuickActions'),
  { ssr: false }
)
const ReadingProgress = dynamic(
  () => import('@/components/ReadingProgress'),
  { ssr: false }
)
const BackToTop = dynamic(
  () => import('@/components/BackToTop'),
  { ssr: false }
)
const AdsterraAd = dynamic(
  () => import('@/components/AdsterraAd'),
  { ssr: false }
)
const Footer = dynamic(
  () => import('@/components/layout/Footer').then(mod => mod.Footer),
  { ssr: false }
)

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Ensure text remains visible during webfont load
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Your Complete Pregnancy Guide`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['pregnancy', 'pregnancy week by week', 'baby development', 'pregnancy symptoms', 'pregnancy calculator', 'due date calculator', 'pregnancy guide', 'prenatal care', 'fetal development', 'expecting baby'],
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // AdSense verification code - get from https://adsense.google.com → Sites → mypregnancyweek.com
    // Copy the content value from the meta tag: <meta name="google-adsense-verification" content="CODE_HERE" />
    google: process.env.NEXT_PUBLIC_ADSENSE_VERIFICATION || '',
  },
  other: {
    'google-adsense-account': 'ca-pub-6061225328031066',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for third-party domains - preconnect establishes early connections */}
        {/* Google Analytics & Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google AdSense */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />

        {/* Google Fonts (used by next/font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Adsterra Ad Network */}
        <link rel="preconnect" href="https://pl28758900.effectivegatecpm.com" />
        <link rel="dns-prefetch" href="https://pl28758900.effectivegatecpm.com" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <GoogleAnalytics />
        {/* AdSense Script */}
        {siteConfig.adSenseClientId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adSenseClientId}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
        <ReadingProgress />
        <MedicalDisclaimerBanner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <QuickActions variant="sticky" />
          <BackToTop />
          <AdsterraAd className="max-w-4xl mx-auto px-4 my-8" />
          <Footer />
        </div>
      </body>
    </html>
  )
}
