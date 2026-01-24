# PregnancyHub Deployment Guide

## ✅ Build Status

The site successfully builds with **52 static pages**:
- 1 Homepage
- 1 Week-by-week index page
- 40 Individual week pages (weeks 1-40)
- 3 Trimester pages
- 1 Nutrition guide
- 1 About page
- Plus robots.txt and sitemap.xml

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Pages > Create a project
3. Connect to GitHub and select the `manymotes/pregnancy-hub` repository
4. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`
5. Add custom domain: `pregnancyhub.io` (if owned)
6. Deploy!

The `wrangler.toml` file is already configured for Cloudflare Pages.

### Option 2: Vercel

1. Go to [Vercel](https://vercel.com)
2. Import the GitHub repository: `manymotes/pregnancy-hub`
3. Vercel will auto-detect Next.js settings
4. Add custom domain if desired
5. Deploy!

### Option 3: Netlify

1. Go to [Netlify](https://netlify.com)
2. New site from Git
3. Connect to `manymotes/pregnancy-hub`
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy!

## Post-Deployment Setup

### 1. Configure GA4 (Google Analytics)

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for PregnancyHub
3. Industry category: "Health & Fitness" or "Online Communities"
4. Copy the Measurement ID (format: G-XXXXXXXXXX)
5. Update `lib/config.ts`:
   ```typescript
   googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-YOUR-NEW-ID',
   ```
6. Rebuild and redeploy

### 2. Set Up Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for your domain
3. Verify ownership via DNS or HTML file
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### 3. Configure AdSense (Already Set Up)

The AdSense client ID is already configured:
- Client ID: `ca-pub-6061225328031066`
- No additional setup needed unless you want to change it

## Domain Setup

If you own `pregnancyhub.io`:
1. Point DNS to your hosting provider (Cloudflare, Vercel, or Netlify)
2. Update `SITE_URL` in `lib/constants.ts` if different from `pregnancyhub.io`
3. Add SSL certificate (usually automatic with modern hosts)

## Environment Variables

If using environment variables instead of hardcoding:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-6061225328031066
NEXT_PUBLIC_SITE_URL=https://pregnancyhub.io
```

## Testing Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npx serve out
```

## Troubleshooting

**Build fails:**
- Ensure Node.js 18+ is installed
- Run `npm install` to install all dependencies
- Check for TypeScript errors: `npm run lint`

**Pages not generating:**
- Check `app/week-by-week/[week]/page.tsx` for errors
- Verify `lib/weekData.ts` exports correctly
- Ensure `generateStaticParams` function is working

**Sitemap issues:**
- Verify base URL in `app/sitemap.ts`
- Check that all routes are included
- Test locally: `npm run build` and check `out/sitemap.xml`

## Next Steps

1. **Content Expansion:**
   - Add more topic pages (symptoms, baby-development, prenatal-care, etc.)
   - Create individual topic detail pages
   - Add blog posts for long-tail SEO

2. **SEO Optimization:**
   - Add Open Graph images for each page
   - Implement structured data (JSON-LD)
   - Create internal linking strategy

3. **Features:**
   - Add due date calculator
   - Create printable checklists
   - Add pregnancy weight gain tracker
   - Implement search functionality

4. **Monetization:**
   - Optimize AdSense placement
   - Add affiliate links for baby products
   - Consider sponsored content

## Repository

GitHub: https://github.com/manymotes/pregnancy-hub

## Questions?

Check the main README.md for more information about the project structure and development.
