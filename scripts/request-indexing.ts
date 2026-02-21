/**
 * Google Indexing API Script for My Pregnancy Week
 *
 * Setup: See INDEXING-API-SETUP.md
 * Usage: npx tsx scripts/request-indexing.ts
 */

import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { SITE_URL } from '../lib/constants';

// Priority URLs to re-index
const URLS_TO_INDEX = [
  '/',
  '/pregnancy-timeline/',
  '/first-trimester/',
  '/baby-development/',
  '/baby-size-chart/',
  '/calculators/',
  '/nutrition/',
  '/exercises/',
  '/medical-tests/',
  '/checklists/',
  '/birth-plan/',
  '/labor-prep/',
  '/complications/',
  '/about/',
  // Week by week pages
  '/pregnancy-timeline/week-4/',
  '/pregnancy-timeline/week-5/',
  '/pregnancy-timeline/week-6/',
  '/pregnancy-timeline/week-7/',
  '/pregnancy-timeline/week-8/',
  '/pregnancy-timeline/week-9/',
  '/pregnancy-timeline/week-10/',
  '/pregnancy-timeline/week-12/',
  '/pregnancy-timeline/week-16/',
  '/pregnancy-timeline/week-20/',
  '/pregnancy-timeline/week-24/',
  '/pregnancy-timeline/week-28/',
  '/pregnancy-timeline/week-32/',
  '/pregnancy-timeline/week-36/',
  '/pregnancy-timeline/week-40/',
];

async function requestIndexing() {
  const keyPath = path.join(process.cwd(), 'google-service-account.json');

  if (!fs.existsSync(keyPath)) {
    console.error('❌ Missing google-service-account.json');
    console.log('\nSetup instructions:');
    console.log('1. Go to https://console.cloud.google.com');
    console.log('2. Create/select a project');
    console.log('3. Enable "Web Search Indexing API"');
    console.log('4. Create a Service Account and download JSON key');
    console.log('5. Save as google-service-account.json in project root');
    console.log('6. Add service account email as Owner in Search Console');
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  console.log(`🔄 Requesting indexing for ${URLS_TO_INDEX.length} URLs...\n`);

  let success = 0;
  let failed = 0;

  for (const urlPath of URLS_TO_INDEX) {
    const fullUrl = `${SITE_URL}${urlPath}`;

    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: fullUrl,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ ${fullUrl}`);
      success++;

      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error: any) {
      console.log(`❌ ${fullUrl} - ${error.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Results: ${success} succeeded, ${failed} failed`);
  console.log('\nNote: Changes typically appear in search results within 1-2 days.');
}

requestIndexing().catch(console.error);
