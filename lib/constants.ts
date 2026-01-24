// Site-wide constants

export const SITE_NAME = 'PregnancyHub'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pregnancyhub.io'
export const SITE_DESCRIPTION = 'Comprehensive pregnancy information, week-by-week guides, nutrition tips, and expert advice for expectant mothers.'

// Pregnancy stages
export const TRIMESTERS = [
  { slug: 'first-trimester', name: 'First Trimester', weeks: '1-13', icon: '🌱' },
  { slug: 'second-trimester', name: 'Second Trimester', weeks: '14-27', icon: '🌿' },
  { slug: 'third-trimester', name: 'Third Trimester', weeks: '28-40', icon: '🌳' },
] as const

// Main topic categories
export const TOPICS = [
  { slug: 'week-by-week', name: 'Week by Week', icon: '📅' },
  { slug: 'nutrition', name: 'Nutrition', icon: '🥗' },
  { slug: 'symptoms', name: 'Symptoms', icon: '💭' },
  { slug: 'baby-development', name: 'Baby Development', icon: '👶' },
  { slug: 'prenatal-care', name: 'Prenatal Care', icon: '🏥' },
  { slug: 'exercise', name: 'Exercise', icon: '🧘' },
  { slug: 'labor-delivery', name: 'Labor & Delivery', icon: '🏩' },
  { slug: 'postpartum', name: 'Postpartum', icon: '🤱' },
] as const

// Popular pregnancy topics for SEO
export const POPULAR_TOPICS = [
  // Symptoms (high search volume)
  { slug: 'morning-sickness', name: 'Morning Sickness', category: 'symptoms' },
  { slug: 'back-pain', name: 'Back Pain', category: 'symptoms' },
  { slug: 'fatigue', name: 'Fatigue', category: 'symptoms' },
  { slug: 'heartburn', name: 'Heartburn', category: 'symptoms' },
  { slug: 'swelling', name: 'Swelling', category: 'symptoms' },
  { slug: 'headaches', name: 'Headaches', category: 'symptoms' },
  { slug: 'braxton-hicks', name: 'Braxton Hicks Contractions', category: 'symptoms' },
  { slug: 'leg-cramps', name: 'Leg Cramps', category: 'symptoms' },

  // Nutrition (high search volume)
  { slug: 'foods-to-avoid', name: 'Foods to Avoid', category: 'nutrition' },
  { slug: 'prenatal-vitamins', name: 'Prenatal Vitamins', category: 'nutrition' },
  { slug: 'folic-acid', name: 'Folic Acid', category: 'nutrition' },
  { slug: 'iron-rich-foods', name: 'Iron Rich Foods', category: 'nutrition' },
  { slug: 'calcium-needs', name: 'Calcium Needs', category: 'nutrition' },
  { slug: 'protein-intake', name: 'Protein Intake', category: 'nutrition' },
  { slug: 'seafood-safety', name: 'Seafood Safety', category: 'nutrition' },
  { slug: 'caffeine-limits', name: 'Caffeine Limits', category: 'nutrition' },

  // Baby Development (high search volume)
  { slug: 'baby-movements', name: 'Baby Movements', category: 'baby-development' },
  { slug: 'ultrasound-scans', name: 'Ultrasound Scans', category: 'baby-development' },
  { slug: 'baby-gender', name: 'Baby Gender', category: 'baby-development' },
  { slug: 'fetal-heartbeat', name: 'Fetal Heartbeat', category: 'baby-development' },
  { slug: 'baby-size-week', name: 'Baby Size by Week', category: 'baby-development' },

  // Prenatal Care (high search volume)
  { slug: 'prenatal-appointments', name: 'Prenatal Appointments', category: 'prenatal-care' },
  { slug: 'genetic-testing', name: 'Genetic Testing', category: 'prenatal-care' },
  { slug: 'glucose-test', name: 'Glucose Test', category: 'prenatal-care' },
  { slug: 'ultrasound-schedule', name: 'Ultrasound Schedule', category: 'prenatal-care' },
  { slug: 'ob-gyn-visits', name: 'OB-GYN Visits', category: 'prenatal-care' },

  // Exercise (high search volume)
  { slug: 'safe-exercises', name: 'Safe Exercises', category: 'exercise' },
  { slug: 'prenatal-yoga', name: 'Prenatal Yoga', category: 'exercise' },
  { slug: 'walking-during-pregnancy', name: 'Walking During Pregnancy', category: 'exercise' },
  { slug: 'exercises-to-avoid', name: 'Exercises to Avoid', category: 'exercise' },
  { slug: 'pelvic-floor-exercises', name: 'Pelvic Floor Exercises', category: 'exercise' },

  // Labor & Delivery (high search volume)
  { slug: 'signs-of-labor', name: 'Signs of Labor', category: 'labor-delivery' },
  { slug: 'birth-plan', name: 'Birth Plan', category: 'labor-delivery' },
  { slug: 'pain-relief-options', name: 'Pain Relief Options', category: 'labor-delivery' },
  { slug: 'epidural', name: 'Epidural', category: 'labor-delivery' },
  { slug: 'c-section', name: 'C-Section', category: 'labor-delivery' },
  { slug: 'natural-birth', name: 'Natural Birth', category: 'labor-delivery' },
  { slug: 'water-breaking', name: 'Water Breaking', category: 'labor-delivery' },

  // Postpartum (high search volume)
  { slug: 'postpartum-recovery', name: 'Postpartum Recovery', category: 'postpartum' },
  { slug: 'breastfeeding-basics', name: 'Breastfeeding Basics', category: 'postpartum' },
  { slug: 'postpartum-depression', name: 'Postpartum Depression', category: 'postpartum' },
  { slug: 'newborn-care', name: 'Newborn Care', category: 'postpartum' },
  { slug: 'weight-loss-after-pregnancy', name: 'Weight Loss After Pregnancy', category: 'postpartum' },
] as const

// Weeks of pregnancy (1-40)
export const PREGNANCY_WEEKS = Array.from({ length: 40 }, (_, i) => i + 1)
