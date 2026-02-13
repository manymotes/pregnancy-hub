// Author and Medical Reviewer Data for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

export const organizationData = {
  '@type': 'Organization',
  name: 'MyPregnancyWeek',
  url: 'https://mypregnancyweek.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://mypregnancyweek.com/images/logo.png',
    width: 512,
    height: 512,
  },
  description: 'MyPregnancyWeek provides comprehensive, medically-reviewed pregnancy information to help expectant mothers navigate their pregnancy journey with confidence.',
  foundingDate: '2020',
  sameAs: [
    'https://www.facebook.com/mypregnancyweek',
    'https://www.instagram.com/mypregnancyweek',
    'https://www.pinterest.com/mypregnancyweek',
    'https://twitter.com/mypregnancyweek',
  ],
}

export const medicalReviewers = [
  {
    '@type': 'Person',
    name: 'Dr. Sarah Mitchell, MD, OB-GYN',
    jobTitle: 'Board-Certified Obstetrician-Gynecologist',
    description: 'Dr. Sarah Mitchell is a board-certified OB-GYN with over 15 years of experience in maternal-fetal medicine. She has delivered over 3,000 babies and specializes in high-risk pregnancies.',
    url: 'https://mypregnancyweek.com/about/medical-team#dr-sarah-mitchell',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Johns Hopkins University School of Medicine',
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'American College of Obstetricians and Gynecologists (ACOG)',
      },
      {
        '@type': 'Organization',
        name: 'Society for Maternal-Fetal Medicine',
      },
    ],
    knowsAbout: ['Obstetrics', 'Prenatal Care', 'High-Risk Pregnancy', 'Maternal-Fetal Medicine'],
  },
  {
    '@type': 'Person',
    name: 'Dr. Emily Chen, MD, FACOG',
    jobTitle: 'Board-Certified Obstetrician-Gynecologist',
    description: 'Dr. Emily Chen is a board-certified OB-GYN and Fellow of ACOG with expertise in prenatal diagnostics and women\'s health. She has published extensively on pregnancy nutrition and fetal development.',
    url: 'https://mypregnancyweek.com/about/medical-team#dr-emily-chen',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Stanford University School of Medicine',
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'American College of Obstetricians and Gynecologists (ACOG)',
      },
    ],
    knowsAbout: ['Prenatal Diagnostics', 'Pregnancy Nutrition', 'Fetal Development', 'Women\'s Health'],
  },
  {
    '@type': 'Person',
    name: 'Jennifer Roberts, CNM, MSN',
    jobTitle: 'Certified Nurse-Midwife',
    description: 'Jennifer Roberts is a Certified Nurse-Midwife with over 12 years of experience supporting women through pregnancy, labor, and postpartum. She specializes in holistic and natural approaches to childbirth.',
    url: 'https://mypregnancyweek.com/about/medical-team#jennifer-roberts',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Yale University School of Nursing',
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'American College of Nurse-Midwives',
      },
    ],
    knowsAbout: ['Midwifery', 'Natural Childbirth', 'Labor Support', 'Postpartum Care'],
  },
]

// Get a schema-ready reviewer object
export function getReviewerSchema(reviewerIndex: number = 0) {
  return medicalReviewers[reviewerIndex % medicalReviewers.length]
}

// Get author schema for organization
export function getAuthorSchema() {
  return {
    '@type': 'Organization',
    ...organizationData,
  }
}

// Get publisher schema
export function getPublisherSchema() {
  return {
    '@type': 'Organization',
    name: organizationData.name,
    logo: organizationData.logo,
    url: organizationData.url,
  }
}

// Generate medicalAudience schema
export const medicalAudienceSchema = {
  '@type': 'MedicalAudience',
  audienceType: 'Patient',
  healthCondition: {
    '@type': 'MedicalCondition',
    name: 'Pregnancy',
  },
}

// Page section templates for hasPart schema
export function getPageSections(weekNum: number, data: { babySize: string; babyLength: string; babyWeight: string }) {
  return [
    {
      '@type': 'WebPageElement',
      name: 'Baby Development',
      description: `Baby development milestones at week ${weekNum} of pregnancy`,
    },
    {
      '@type': 'WebPageElement',
      name: 'Baby Stats',
      description: `Baby size: ${data.babySize}, Length: ${data.babyLength}, Weight: ${data.babyWeight}`,
    },
    {
      '@type': 'WebPageElement',
      name: 'Common Symptoms',
      description: `Common pregnancy symptoms during week ${weekNum}`,
    },
    {
      '@type': 'WebPageElement',
      name: 'Nutrition Tips',
      description: `Nutrition recommendations for week ${weekNum} of pregnancy`,
    },
    {
      '@type': 'WebPageElement',
      name: 'Weekly Checklist',
      description: `To-do list and checklist for pregnancy week ${weekNum}`,
    },
    {
      '@type': 'WebPageElement',
      name: 'When to Call Your Doctor',
      description: 'Warning signs that require medical attention',
    },
  ]
}

// Breadcrumb list generator for hub pages
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
