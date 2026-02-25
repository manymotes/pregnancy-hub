'use client'

import Script from 'next/script'
import { siteConfig } from '@/lib/config'

export function GoogleAnalytics() {
  const GA_ID = siteConfig.googleAnalyticsId

  if (!GA_ID) return null

  return (
    <>
      {/* Use lazyOnload for analytics - non-critical for user experience */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
