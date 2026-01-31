import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import { siteConfig } from '@/lib/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Your Complete Pregnancy Guide`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['pregnancy', 'pregnancy week by week', 'baby development', 'pregnancy symptoms', 'pregnancy calculator', 'due date calculator', 'pregnancy guide', 'prenatal care', 'fetal development', 'expecting baby'],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
