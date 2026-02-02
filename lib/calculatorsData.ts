export interface CalculatorData {
  slug: string
  title: string
  category: 'dates' | 'health' | 'baby' | 'planning' | 'symptoms'
  shortDescription: string
  detailedDescription: string[]
  howItWorks: string[]
  whatYouNeed: string[]
  howToUse: string[]
  interpretation: string[]
  limitations: string[]
  tips: string[]
  relatedTools: string[]
}

export const calculatorsData: CalculatorData[] = [
  {
    slug: 'due-date-calculator',
    title: 'Due Date Calculator',
    category: 'dates',
    shortDescription: 'Calculate your estimated due date based on your last menstrual period or conception date.',
    detailedDescription: [
      'A due date calculator helps you estimate when your baby will arrive by calculating 40 weeks from the first day of your last menstrual period (LMP). This is the most common method used by healthcare providers.',
      'While only about 5% of babies arrive exactly on their due date, knowing your estimated due date helps you and your healthcare team track your pregnancy\'s progress and schedule important prenatal tests and appointments.',
      'The calculator can also work backwards from your due date to estimate conception date, or calculate from your conception date if you know it (common with fertility treatments).'
    ],
    howItWorks: [
      'Standard method: Adds 280 days (40 weeks) to the first day of your last menstrual period',
      'Naegele\'s Rule: Adds one year, subtracts three months, and adds seven days to your LMP date',
      'Conception date method: Adds 266 days (38 weeks) to your known conception date',
      'Ultrasound dating in first trimester is considered most accurate and may adjust your due date'
    ],
    whatYouNeed: [
      'First day of your last menstrual period (LMP)',
      'Average length of your menstrual cycle (usually 28 days)',
      'Or your conception date if known',
      'Or ultrasound dating if available'
    ],
    howToUse: [
      'Enter the first day of your last menstrual period',
      'Enter your average cycle length if different from 28 days',
      'The calculator will show your estimated due date',
      'Your healthcare provider may adjust this date after your first ultrasound',
      'Remember this is an estimate - babies come when they\'re ready!'
    ],
    interpretation: [
      'Your due date is an estimate for when you\'ll reach 40 weeks of pregnancy',
      'Full-term pregnancy is anywhere from 37-42 weeks',
      'Early term: 37-38 weeks',
      'Full term: 39-40 weeks',
      'Late term: 41 weeks',
      'Post term: 42+ weeks',
      'Most babies are born within 2 weeks before or after the due date'
    ],
    limitations: [
      'Assumes a 28-day cycle with ovulation on day 14',
      'Not accurate for irregular periods',
      'First trimester ultrasound is more accurate (within 3-5 days)',
      'Cannot account for individual variation in gestation length',
      'IVF pregnancies use embryo transfer date for more accurate dating'
    ],
    tips: [
      'Get an early ultrasound (7-13 weeks) for most accurate dating',
      'Keep track of your menstrual cycle dates',
      'Don\'t stress if your baby comes a bit early or late',
      'Your provider may adjust your due date after ultrasound',
      'Plan for a window of time around your due date, not one specific day'
    ],
    relatedTools: [
      'conception-date-calculator',
      'pregnancy-week-calculator',
      'trimester-calculator'
    ]
  },
  {
    slug: 'conception-date-calculator',
    title: 'Conception Date Calculator',
    category: 'dates',
    shortDescription: 'Estimate when conception likely occurred based on your due date or last period.',
    detailedDescription: [
      'A conception date calculator estimates when you likely conceived your baby. This can be helpful for personal curiosity, paternity questions, or understanding your baby\'s developmental timeline.',
      'Conception typically occurs during your fertile window, which is about 5-6 days before ovulation and the day of ovulation. For a standard 28-day cycle, this is usually around day 14.',
      'Keep in mind that sperm can survive in the female reproductive tract for up to 5 days, so conception can occur several days after intercourse.'
    ],
    howItWorks: [
      'Subtracts approximately 266 days from your due date',
      'Or adds about 14 days to the first day of your last period (for 28-day cycles)',
      'Accounts for typical ovulation timing in menstrual cycle',
      'Provides a conception window rather than exact date'
    ],
    whatYouNeed: [
      'Your due date (from ultrasound or LMP)',
      'Or first day of your last menstrual period',
      'Your typical cycle length if not 28 days'
    ],
    howToUse: [
      'Enter your due date or LMP date',
      'Enter your average cycle length',
      'The calculator shows your likely conception date',
      'Results typically show a range of possible dates',
      'Remember: conception can occur up to 5 days after intercourse'
    ],
    interpretation: [
      'Shows the most likely date of ovulation and fertilization',
      'Provides a window of several days when conception could have occurred',
      'Earlier in the window = day of intercourse when sperm survived several days',
      'Later in the window = intercourse on or near ovulation day',
      'First trimester ultrasound dating can narrow down conception window'
    ],
    limitations: [
      'Cannot pinpoint exact conception moment',
      'Assumes regular ovulation patterns',
      'Not accurate for irregular cycles',
      'Sperm can survive 3-5 days, creating a conception window',
      'Not reliable for paternity determination alone'
    ],
    tips: [
      'Use ultrasound-based due date for most accurate results',
      'Consider a 5-7 day window around the calculated date',
      'Track ovulation signs if trying to conceive for future reference',
      'For paternity questions, consult with legal/medical professionals',
      'Remember that stress and health can affect ovulation timing'
    ],
    relatedTools: [
      'due-date-calculator',
      'ovulation-calculator',
      'pregnancy-week-calculator'
    ]
  },
  {
    slug: 'pregnancy-week-calculator',
    title: 'Pregnancy Week Calculator',
    category: 'dates',
    shortDescription: 'Find out exactly how many weeks and days pregnant you are right now.',
    detailedDescription: [
      'A pregnancy week calculator tells you your exact gestational age - how many weeks and days pregnant you currently are. This is essential information for tracking your baby\'s development and scheduling prenatal care.',
      'Pregnancy is calculated from the first day of your last menstrual period, not from conception. This means you\'re considered "2 weeks pregnant" at conception.',
      'Knowing your exact week helps you understand what\'s happening with your baby, what symptoms are normal, and when key milestones and appointments should occur.'
    ],
    howItWorks: [
      'Counts weeks and days from your LMP date to today',
      'Follows the standard medical pregnancy dating system',
      'Updates daily as your pregnancy progresses',
      'Shows weeks + days format (e.g., 23 weeks 4 days)'
    ],
    whatYouNeed: [
      'First day of your last menstrual period',
      'Or your established due date from ultrasound',
      'Today\'s date (automatically calculated)'
    ],
    howToUse: [
      'Enter your LMP date or due date',
      'The calculator shows your current week and day',
      'Use this to track weekly pregnancy progression',
      'Reference your week when looking up baby development information',
      'Check back regularly to see your weekly progress'
    ],
    interpretation: [
      'Shows your gestational age in weeks and days',
      'First trimester: Weeks 1-13',
      'Second trimester: Weeks 14-27',
      'Third trimester: Weeks 28-40+',
      'Each week brings new developments for your baby',
      'Helps you prepare for upcoming prenatal appointments'
    ],
    limitations: [
      'Based on your calculated or ultrasound due date',
      'If due date is adjusted, your weeks will change',
      'Some sources count pregnancy as 40 weeks, others as 42',
      'Development varies between individual babies'
    ],
    tips: [
      'Bookmark a pregnancy week-by-week guide for your current week',
      'Join pregnancy groups for women in your same month',
      'Track your weeks for prenatal appointment scheduling',
      'Remember that due dates are estimates',
      'Every pregnancy progresses slightly differently'
    ],
    relatedTools: [
      'due-date-calculator',
      'trimester-calculator',
      'baby-size-calculator'
    ]
  },
  {
    slug: 'trimester-calculator',
    title: 'Trimester Calculator',
    category: 'dates',
    shortDescription: 'Calculate when each trimester begins and ends during your pregnancy.',
    detailedDescription: [
      'A trimester calculator divides your pregnancy into three roughly equal parts, each bringing different experiences, symptoms, and developmental milestones for your baby.',
      'Understanding which trimester you\'re in helps you know what to expect, which symptoms are normal, when certain prenatal tests occur, and how to prepare for the next stage.',
      'Each trimester has its own characteristics: first trimester fatigue and nausea, second trimester energy and baby movements, third trimester preparation and anticipation.'
    ],
    howItWorks: [
      'First trimester: Weeks 1-13 (months 1-3)',
      'Second trimester: Weeks 14-27 (months 4-6)',
      'Third trimester: Weeks 28-40+ (months 7-9)',
      'Calculates start and end dates for each period based on your due date'
    ],
    whatYouNeed: [
      'Your due date or LMP date',
      'Current date to see which trimester you\'re in'
    ],
    howToUse: [
      'Enter your due date or LMP',
      'See the exact dates each trimester begins and ends',
      'Identify which trimester you\'re currently in',
      'Plan ahead for what\'s coming in upcoming trimesters',
      'Use dates to schedule trimester-specific prenatal care'
    ],
    interpretation: [
      'First trimester (1-13 weeks): Organ formation, frequent nausea, fatigue',
      'Second trimester (14-27 weeks): Growth period, energy returns, feel movements',
      'Third trimester (28-40+ weeks): Final maturation, preparation for birth',
      'Some define trimesters slightly differently (e.g., 1-12, 13-26, 27-40)',
      'Key tests happen at specific trimester checkpoints'
    ],
    limitations: [
      'Trimester divisions are somewhat arbitrary',
      'Different sources may use slightly different week ranges',
      'Symptoms and experiences vary greatly between individuals',
      'Not all pregnancies experience "typical" trimester patterns'
    ],
    tips: [
      'First trimester: Rest as much as possible, take prenatal vitamins',
      'Second trimester: Best time for travel and physical activity',
      'Third trimester: Prepare baby items, take childbirth classes',
      'Read ahead about upcoming trimesters to prepare',
      'Each trimester brings different nutritional needs'
    ],
    relatedTools: [
      'pregnancy-week-calculator',
      'due-date-calculator',
      'prenatal-appointment-scheduler'
    ]
  },
  {
    slug: 'weight-gain-calculator',
    title: 'Pregnancy Weight Gain Calculator',
    category: 'health',
    shortDescription: 'Calculate healthy weight gain ranges based on your pre-pregnancy BMI.',
    detailedDescription: [
      'A pregnancy weight gain calculator helps you understand how much weight is healthy to gain during pregnancy based on your pre-pregnancy body mass index (BMI).',
      'Appropriate weight gain supports your baby\'s growth and development while maintaining your health. Gaining too little or too much can increase risks for both you and baby.',
      'Weight gain recommendations come from the Institute of Medicine and are personalized based on whether you were underweight, normal weight, overweight, or obese before pregnancy.'
    ],
    howItWorks: [
      'Calculates your pre-pregnancy BMI from height and weight',
      'Applies IOM guidelines for healthy weight gain ranges',
      'Underweight (BMI <18.5): 28-40 lbs recommended',
      'Normal weight (BMI 18.5-24.9): 25-35 lbs recommended',
      'Overweight (BMI 25-29.9): 15-25 lbs recommended',
      'Obese (BMI ≥30): 11-20 lbs recommended'
    ],
    whatYouNeed: [
      'Your height',
      'Your pre-pregnancy weight',
      'Your current pregnancy week',
      'Your current weight (optional)'
    ],
    howToUse: [
      'Enter your height and pre-pregnancy weight',
      'Calculator determines your BMI category',
      'Shows your recommended total weight gain range',
      'Shows recommended gain by trimester',
      'Track your progress throughout pregnancy'
    ],
    interpretation: [
      'First trimester: Expect 1-4 lbs total (or even weight loss with morning sickness)',
      'Second and third trimesters: About 0.5-1 lb per week',
      'Weight gain is not linear - varies week to week',
      'More gain expected if carrying multiples (35-45 lbs for twins)',
      'Sudden rapid gain (5+ lbs in a week) may indicate fluid retention - call provider'
    ],
    limitations: [
      'BMI doesn\'t account for muscle mass or body composition',
      'Recommendations are guidelines, not strict rules',
      'Individual needs vary based on health conditions',
      'Doesn\'t account for multiples pregnancy needs',
      'Your healthcare provider may recommend different targets'
    ],
    tips: [
      'Focus on nutritious foods rather than calorie counting',
      'Weight gain should be gradual and steady',
      'Don\'t diet during pregnancy',
      'Weigh yourself at the same time of day in similar clothing',
      'Discuss concerns about weight with your provider',
      'Pregnancy needs only about 300 extra calories per day (2nd-3rd trimester)'
    ],
    relatedTools: [
      'bmi-calculator',
      'calorie-needs-calculator',
      'nutrition-tracker'
    ]
  },
  {
    slug: 'contraction-timer',
    title: 'Contraction Timer Guide',
    category: 'baby',
    shortDescription: 'Learn how to time contractions and when to head to the hospital or call your provider.',
    detailedDescription: [
      'A contraction timer helps you track when contractions start, how long they last, and how far apart they are - crucial information for knowing when true labor has begun and when to head to the hospital.',
      'Timing contractions accurately helps you distinguish between Braxton Hicks (practice) contractions and true labor contractions. It also helps your healthcare team assess your labor progress over the phone.',
      'The 5-1-1 or 4-1-1 rule is commonly used: contractions every 5 (or 4) minutes, lasting 1 minute each, for 1 hour. This usually indicates active labor.'
    ],
    howItWorks: [
      'Press start when a contraction begins (when uterus tightens)',
      'Press stop when the contraction ends (when uterus relaxes)',
      'The app records duration and calculates frequency',
      'Frequency = time from start of one contraction to start of next',
      'Duration = how long each contraction lasts',
      'Pattern matters more than individual contractions'
    ],
    whatYouNeed: [
      'A timer app, stopwatch, or paper and pen',
      'A comfortable place to sit or lie down',
      'Patience - you\'ll need to track for at least an hour',
      'Your provider\'s phone number handy'
    ],
    howToUse: [
      'When you feel a contraction starting, note the time',
      'Time until the contraction ends',
      'Record the start time of the next contraction',
      'Calculate frequency: time between start of contractions',
      'Calculate duration: how long each contraction lasts',
      'Look for patterns over 1-2 hours',
      'Track other symptoms: water breaking, bloody show, pain level'
    ],
    interpretation: [
      'Early labor: Contractions irregular, 5-30 minutes apart, 30-45 seconds long',
      'Active labor: Regular contractions 3-5 minutes apart, 45-60 seconds long',
      '5-1-1 rule: 5 minutes apart, 1 minute long, for 1 hour = go to hospital',
      '4-1-1 rule: Some providers use 4 minutes instead of 5',
      'Braxton Hicks: Irregular, don\'t get closer together, ease with movement',
      'True labor: Regular, get closer and stronger, don\'t stop with movement'
    ],
    limitations: [
      'Early labor can start and stop over days',
      'Everyone\'s labor pattern is different',
      'First babies often mean longer early labor at home',
      'Timing adds stress for some women',
      'Other signs matter too: water breaking, bloody show, instinct'
    ],
    tips: [
      'Don\'t start timing until contractions feel regular',
      'Try to rest and stay calm during early labor',
      'Stay hydrated and eat light snacks',
      'Change positions if contractions stop - helps distinguish false labor',
      'Call your provider if: water breaks, bleeding, baby stops moving, severe pain',
      'For first baby, you\'ll likely labor at home longer',
      'Trust your instincts - if something feels wrong, call',
      'Have your hospital bag packed by 36 weeks'
    ],
    relatedTools: [
      'labor-signs-checklist',
      'when-to-go-to-hospital',
      'stages-of-labor-guide'
    ]
  },
  {
    slug: 'kick-counter',
    title: 'Baby Kick Counter Guide',
    category: 'baby',
    shortDescription: 'Track your baby\'s movements to monitor wellbeing in the third trimester.',
    detailedDescription: [
      'A kick counter helps you track your baby\'s movements in the third trimester. Regular fetal movement is a reassuring sign that your baby is doing well.',
      'Most providers recommend starting kick counts around 28 weeks. You should feel your baby move regularly, though the pattern varies by baby. Some are more active in evening, some during the day.',
      'The goal isn\'t to stress about counting every movement, but to notice your baby\'s normal pattern and recognize if something changes significantly.'
    ],
    howItWorks: [
      'Choose a time when baby is usually active',
      'Sit or lie on your side in a quiet place',
      'Count kicks, rolls, jabs, and swishes',
      'Track how long it takes to feel 10 movements',
      'Most babies make 10 movements in under 2 hours',
      'Strong movements and small flutters both count'
    ],
    whatYouNeed: [
      'A quiet time when baby is usually active',
      'A comfortable place to sit or lie down',
      'A timer or kick counting app',
      'About 2 hours if needed (often less)'
    ],
    howToUse: [
      'Do kick counts around the same time daily',
      'Choose a time when baby is usually active (often after meals/evening)',
      'Get comfortable - sit or lie on your left side',
      'Count all movements: kicks, rolls, swishes, jabs',
      'Stop counting when you reach 10 movements',
      'Note how long it took',
      'Call provider if baby takes longer than 2 hours or pattern changes significantly'
    ],
    interpretation: [
      '10 movements in 2 hours or less is normal',
      'Many women feel 10 movements in 30 minutes to 1 hour',
      'Babies have sleep cycles (20-40 minutes) when movement is less',
      'Movements often increase after meals, cold drinks, or when lying down',
      'Pattern matters more than absolute number',
      'Decreased movement can indicate baby needs to be checked'
    ],
    limitations: [
      'Every baby has their own normal pattern',
      'Anterior placenta can muffle movements',
      'Busy days may mean you miss subtle movements',
      'Formal counting can create anxiety',
      'Not a perfect predictor of problems',
      'Most concerning is a significant change from baby\'s normal'
    ],
    tips: [
      'Learn your baby\'s unique pattern of activity',
      'Best after meals, cold drinks, or lying down',
      'Don\'t worry if you don\'t feel movement while busy',
      'Trust your instincts - you know your baby best',
      'Call provider for: no movement after drinking cold juice and resting for 2 hours',
      'Call provider if: sudden significant decrease in movement',
      'If worried, always call - providers would rather reassure than miss a problem',
      'Movement continues throughout labor and shouldn\'t stop'
    ],
    relatedTools: [
      'fetal-movement-tracker',
      'baby-development-tracker',
      'pregnancy-week-calculator'
    ]
  },
  {
    slug: 'bmi-calculator',
    title: 'Pre-Pregnancy BMI Calculator',
    category: 'health',
    shortDescription: 'Calculate your body mass index to determine healthy pregnancy weight gain goals.',
    detailedDescription: [
      'A BMI (Body Mass Index) calculator determines your pre-pregnancy weight category, which is used to set healthy weight gain recommendations for pregnancy.',
      'BMI is calculated from your height and weight using the formula: weight (kg) / height (m)². In the US, it\'s often calculated as: (weight in pounds / height in inches²) × 703.',
      'While BMI has limitations, it\'s the standard tool healthcare providers use to categorize weight status and make pregnancy weight gain recommendations.'
    ],
    howItWorks: [
      'Takes your height and pre-pregnancy weight',
      'Calculates BMI using standard formula',
      'Categorizes you as: Underweight (BMI <18.5), Normal (18.5-24.9), Overweight (25-29.9), or Obese (≥30)',
      'Each category has different pregnancy weight gain recommendations',
      'Used to assess certain pregnancy risk factors'
    ],
    whatYouNeed: [
      'Your height (in feet/inches or centimeters)',
      'Your pre-pregnancy weight (in pounds or kilograms)',
      'If already pregnant, use your weight before pregnancy'
    ],
    howToUse: [
      'Enter your height accurately',
      'Enter your weight before pregnancy (not current weight if already pregnant)',
      'Calculator shows your BMI number and category',
      'Use your BMI category to find pregnancy weight gain recommendations',
      'Discuss your specific situation with your provider'
    ],
    interpretation: [
      'Underweight: BMI less than 18.5 - may need extra calories and nutrients',
      'Normal weight: BMI 18.5-24.9 - standard pregnancy recommendations apply',
      'Overweight: BMI 25-29.9 - may have increased risk for certain complications',
      'Obese: BMI 30+ - higher risk for gestational diabetes, preeclampsia, needs monitoring',
      'BMI doesn\'t measure health directly, just weight relative to height',
      'Athletes and very muscular people may have high BMI but be healthy'
    ],
    limitations: [
      'Doesn\'t distinguish between muscle and fat',
      'Doesn\'t account for body composition or distribution',
      'May not be accurate for athletes, elderly, or certain ethnicities',
      'Doesn\'t measure health or fitness directly',
      'Should be one of many factors in health assessment'
    ],
    tips: [
      'Calculate BMI before getting pregnant if planning ahead',
      'Use pre-pregnancy weight even if already pregnant',
      'Combine with other health indicators for complete picture',
      'Talk to provider about your individual health, not just BMI',
      'Higher BMI doesn\'t mean you can\'t have a healthy pregnancy',
      'Focus on nutritious foods and appropriate activity, not just numbers'
    ],
    relatedTools: [
      'weight-gain-calculator',
      'calorie-needs-calculator',
      'nutrition-guide'
    ]
  },
  {
    slug: 'ovulation-calculator',
    title: 'Ovulation Calculator',
    category: 'planning',
    shortDescription: 'Calculate your most fertile days to help plan conception.',
    detailedDescription: [
      'An ovulation calculator estimates your most fertile days - the time when you\'re most likely to conceive. This is helpful whether you\'re trying to get pregnant or understand your menstrual cycle better.',
      'Ovulation typically occurs about 14 days before your next period starts. Your fertile window includes the 5 days before ovulation and the day of ovulation, because sperm can survive up to 5 days.',
      'While calculators provide estimates, actual ovulation timing varies. Ovulation predictor kits, basal body temperature tracking, and cervical mucus monitoring can pinpoint ovulation more precisely.'
    ],
    howItWorks: [
      'Takes the first day of your last period',
      'Uses your average cycle length',
      'Subtracts 14 days from cycle end to estimate ovulation',
      'Shows your 6-day fertile window',
      'Assumes ovulation occurs mid-cycle'
    ],
    whatYouNeed: [
      'First day of your last menstrual period',
      'Your average cycle length (count from day 1 of period to day before next period)',
      'Whether your cycles are regular'
    ],
    howToUse: [
      'Enter the first day of your last period',
      'Enter your average cycle length (typically 28 days)',
      'Calculator shows your estimated ovulation day',
      'Shows your fertile window (5-6 most fertile days)',
      'For best chances, have intercourse every other day during fertile window',
      'Track results over several months to identify patterns'
    ],
    interpretation: [
      'Fertile window: 5 days before ovulation through ovulation day',
      'Most fertile: 2-3 days before ovulation',
      'Ovulation day: When egg is released from ovary',
      'Egg survives 12-24 hours after release',
      'Sperm can survive up to 5 days in fertile cervical mucus',
      'Having sex before ovulation is often more effective than on ovulation day'
    ],
    limitations: [
      'Only an estimate - actual ovulation varies',
      'Not accurate for irregular cycles',
      'Stress, illness, travel can delay ovulation',
      'Doesn\'t account for conditions like PCOS',
      'Not reliable for birth control purposes',
      'Should be combined with other tracking methods for accuracy'
    ],
    tips: [
      'Track your cycle for 3+ months to find your average length',
      'Use ovulation predictor kits for more accuracy',
      'Monitor cervical mucus (clear, stretchy = fertile)',
      'Track basal body temperature for confirmation',
      'Have sex every 2-3 days during fertile week',
      'Don\'t stress about perfect timing - regular sex works too',
      'Most couples conceive within 6-12 months of trying',
      'See a fertility specialist if not pregnant after 12 months (6 months if over 35)'
    ],
    relatedTools: [
      'fertility-tracker',
      'period-calculator',
      'conception-date-calculator',
      'due-date-calculator'
    ]
  },
  {
    slug: 'baby-size-calculator',
    title: 'Baby Size Calculator',
    category: 'baby',
    shortDescription: 'Find out your baby\'s approximate size and weight at each week of pregnancy.',
    detailedDescription: [
      'A baby size calculator estimates your baby\'s approximate length and weight based on your current week of pregnancy. These are averages - your baby may be smaller or larger and still be perfectly healthy.',
      'Healthcare providers use growth ultrasounds to measure your specific baby, but these calculators give you a general idea of how big your baby is getting week by week.',
      'Baby size is often compared to fruits and vegetables to help you visualize, though these comparisons are approximate and meant to be fun rather than medically precise.'
    ],
    howItWorks: [
      'Uses established fetal growth charts',
      'Provides average length (crown to rump early, crown to heel later)',
      'Provides average weight for each gestational week',
      'Compares size to common objects for visualization',
      'Based on population averages from ultrasound data'
    ],
    whatYouNeed: [
      'Your current week of pregnancy',
      'Your due date or LMP date'
    ],
    howToUse: [
      'Enter your current pregnancy week',
      'Calculator shows average length and weight',
      'See what size fruit or vegetable baby is compared to',
      'Check back each week to see growth progress',
      'Remember these are averages - your baby may differ'
    ],
    interpretation: [
      'First trimester: Measured crown to rump, grows from poppy seed to lime',
      'Second trimester: Measured crown to heel, grows from avocado to corn',
      'Third trimester: Grows from cauliflower to watermelon',
      'Weight increases dramatically in third trimester',
      'Growth charts show 10th-90th percentile ranges',
      'Your baby\'s actual size determined by genetics, nutrition, and other factors'
    ],
    limitations: [
      'These are population averages only',
      'Individual babies vary significantly',
      'Genetics strongly influence baby size',
      'Ultrasound measurements have 10-15% margin of error',
      'Third trimester weight estimates often inaccurate',
      'Big or small babies can both be perfectly healthy'
    ],
    tips: [
      'Don\'t worry if your baby measures differently on ultrasound',
      'Consistent growth is more important than absolute size',
      'Fundal height measurements track growth between ultrasounds',
      'Large or small measurements may trigger additional monitoring',
      'Many factors affect size: genetics, maternal health, placental function',
      'Growth charts show ranges - most babies fall somewhere in the normal range',
      'Ultrasound predictions of birth weight are often off by a pound or more'
    ],
    relatedTools: [
      'pregnancy-week-calculator',
      'baby-development-tracker',
      'fundal-height-calculator'
    ]
  },
  {
    slug: 'calorie-needs-calculator',
    title: 'Pregnancy Calorie Needs Calculator',
    category: 'health',
    shortDescription: 'Calculate how many calories you need during pregnancy to support healthy growth.',
    detailedDescription: [
      'A pregnancy calorie calculator estimates how many calories you need each day to support your health and your baby\'s growth. Calorie needs increase as pregnancy progresses, but not as much as you might think.',
      'The idea of "eating for two" is a myth. In reality, pregnancy requires only about 300-500 extra calories per day, and this increase isn\'t needed until the second trimester.',
      'Focus on nutrient-dense calories rather than just quantity. Your baby needs protein, healthy fats, vitamins, and minerals more than simple carbohydrates or sugar.'
    ],
    howItWorks: [
      'Calculates your baseline calorie needs based on age, height, weight, and activity level',
      'Adds pregnancy-specific calorie increases by trimester',
      'First trimester: No extra calories needed',
      'Second trimester: Add about 300-350 extra calories',
      'Third trimester: Add about 450-500 extra calories',
      'Accounts for pre-pregnancy BMI if entering pregnancy underweight or overweight'
    ],
    whatYouNeed: [
      'Your age',
      'Your height',
      'Your pre-pregnancy weight',
      'Your activity level (sedentary, lightly active, moderately active, very active)',
      'Your current trimester'
    ],
    howToUse: [
      'Enter your demographic information',
      'Select your typical activity level',
      'Enter your current trimester',
      'Calculator shows your daily calorie target',
      'Use this as a guide, not a strict rule',
      'Focus on nutritious choices within this range'
    ],
    interpretation: [
      'First trimester: Maintain pre-pregnancy calorie intake',
      'Second trimester: Add 300-350 calories (snack + glass of milk)',
      'Third trimester: Add 450-500 calories (extra meal/large snack)',
      'Quality matters more than quantity',
      '300 calories = Greek yogurt with berries + a handful of nuts',
      '450 calories = Turkey sandwich with vegetables',
      'Eating too few calories can affect baby\'s growth',
      'Excessive calories lead to excess maternal weight gain'
    ],
    limitations: [
      'Individual needs vary based on metabolism',
      'Activity level affects needs significantly',
      'Multiple pregnancy requires more calories (500-600 extra)',
      'Medical conditions may change requirements',
      'This is an estimate, not a prescription',
      'Listen to hunger and fullness cues'
    ],
    tips: [
      'Don\'t count calories obsessively - use as a general guide',
      'Focus on nutrient density: fruits, vegetables, whole grains, lean protein, healthy fats',
      'Eat when hungry, stop when satisfied',
      'Choose whole foods over processed foods',
      'Distribute calories throughout the day for stable energy',
      'Include protein with each meal and snack',
      'Stay hydrated - thirst can feel like hunger',
      'Work with a dietitian if you have specific concerns'
    ],
    relatedTools: [
      'weight-gain-calculator',
      'nutrition-guide',
      'meal-planner'
    ]
  }
]

export function getCalculatorData(slug: string): CalculatorData | undefined {
  return calculatorsData.find((calc) => calc.slug === slug)
}
