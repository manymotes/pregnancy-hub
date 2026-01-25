// Site configuration for ads and analytics

export const siteConfig = {
  // Google Analytics ID
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-F284YPEBV8',

  // AdSense Client ID (shared across sites)
  adSenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6061225328031066',
}
