export interface ChecklistData {
  slug: string
  title: string
  category: 'trimester' | 'preparation' | 'baby' | 'postpartum' | 'planning'
  trimester?: 'first' | 'second' | 'third' | 'all'
  shortDescription: string
  introduction: string[]
  sections: {
    title: string
    description?: string
    items: string[]
  }[]
  tips: string[]
  whenToStart: string
  relatedChecklists: string[]
}

export const checklistsData: ChecklistData[] = [
  {
    slug: 'first-trimester-checklist',
    title: 'First Trimester Checklist',
    category: 'trimester',
    trimester: 'first',
    shortDescription: 'Essential tasks and appointments for weeks 1-13 of pregnancy.',
    introduction: [
      'The first trimester is a time of major changes as your body adjusts to pregnancy and your baby\'s organs begin forming. This checklist helps you navigate important early pregnancy tasks.',
      'Many first trimester tasks focus on establishing prenatal care, making healthy lifestyle changes, and managing early pregnancy symptoms.'
    ],
    sections: [
      {
        title: 'Medical Care',
        items: [
          'Take a home pregnancy test',
          'Schedule your first prenatal appointment (usually around 8 weeks)',
          'Choose a healthcare provider (OB-GYN or midwife)',
          'Have your first ultrasound (dating scan between 7-13 weeks)',
          'Complete first prenatal lab work (blood type, Rh factor, STD screening, etc.)',
          'Discuss prenatal vitamin recommendations',
          'Review any medications you\'re taking for safety',
          'Get screened for genetic conditions if desired',
          'Schedule nuchal translucency screening (11-14 weeks) if desired'
        ]
      },
      {
        title: 'Lifestyle Changes',
        items: [
          'Start taking prenatal vitamins with folic acid (400-800 mcg)',
          'Stop alcohol consumption completely',
          'Quit smoking and avoid secondhand smoke',
          'Avoid raw fish, deli meats, unpasteurized cheese, and high-mercury fish',
          'Limit caffeine to 200mg or less per day',
          'Review workplace safety and accommodations needed',
          'Avoid hot tubs, saunas, and overheating',
          'Stay hydrated - drink 8-10 glasses of water daily'
        ]
      },
      {
        title: 'Financial Planning',
        items: [
          'Review your health insurance coverage for pregnancy and birth',
          'Understand your maternity leave policy',
          'Begin budgeting for baby expenses',
          'Consider if you\'ll use FSA/HSA for pregnancy expenses',
          'Research childcare options and costs',
          'Look into life insurance',
          'Start or increase emergency savings'
        ]
      },
      {
        title: 'Emotional & Social',
        items: [
          'Decide when to announce your pregnancy',
          'Tell your employer (consider timing)',
          'Join pregnancy support groups or online communities',
          'Talk to your partner about parenting expectations',
          'Consider if you want to find out baby\'s sex',
          'Discuss how to handle unsolicited advice',
          'Manage anxiety about miscarriage risk',
          'Start pregnancy journaling if desired'
        ]
      },
      {
        title: 'Education',
        items: [
          'Learn about first trimester symptoms and what\'s normal',
          'Research pregnancy dos and don\'ts',
          'Read about fetal development week by week',
          'Learn about prenatal testing options',
          'Start researching birth options (hospital, birth center, home birth)',
          'Begin reading pregnancy books',
          'Follow evidence-based pregnancy accounts on social media'
        ]
      }
    ],
    tips: [
      'Don\'t worry if you can\'t keep food down - your baby gets what it needs from your stores',
      'Rest as much as possible - first trimester fatigue is real and temporary',
      'Keep crackers by your bed for morning sickness',
      'Take photos of your changing body',
      'It\'s okay not to feel excited every moment - pregnancy emotions are complex',
      'Miscarriage risk drops significantly after seeing heartbeat on ultrasound',
      'Many women feel better in the second trimester'
    ],
    whenToStart: 'As soon as you get a positive pregnancy test',
    relatedChecklists: [
      'second-trimester-checklist',
      'prenatal-appointment-schedule',
      'pregnancy-nutrition-guide'
    ]
  },
  {
    slug: 'second-trimester-checklist',
    title: 'Second Trimester Checklist',
    category: 'trimester',
    trimester: 'second',
    shortDescription: 'Important tasks and milestones for weeks 14-27 of pregnancy.',
    introduction: [
      'The second trimester is often called the "honeymoon period" of pregnancy. Energy typically returns, nausea fades, and you\'re not yet uncomfortable from your growing belly.',
      'This is an ideal time to tackle bigger projects like setting up the nursery, taking a babymoon, or attending childbirth classes.'
    ],
    sections: [
      {
        title: 'Medical Appointments',
        items: [
          'Attend monthly prenatal checkups',
          'Have anatomy scan ultrasound (18-22 weeks)',
          'Consider optional genetic screening tests',
          'Complete glucose tolerance test (24-28 weeks)',
          'Discuss kick counting with your provider',
          'Ask about flu shot and Tdap vaccine',
          'Report any concerning symptoms immediately',
          'Track your weight gain'
        ]
      },
      {
        title: 'Physical Changes',
        items: [
          'Feel baby\'s first movements (quickening) around 16-25 weeks',
          'Start wearing maternity clothes as needed',
          'Invest in supportive maternity bra',
          'Use belly support band if helpful',
          'Begin applying stretch mark prevention cream if desired',
          'Address skin changes (melasma, darkening)',
          'Manage round ligament pain with gentle movement',
          'Consider maternity support pillow for sleep'
        ]
      },
      {
        title: 'Baby Planning',
        items: [
          'Find out baby\'s sex if desired (usually at anatomy scan)',
          'Start thinking about baby names',
          'Create baby registry',
          'Begin nursery planning and decorating',
          'Research and choose pediatrician',
          'Decide on circumcision preference if having a boy',
          'Research cord blood banking options',
          'Consider hiring doula if desired'
        ]
      },
      {
        title: 'Education & Preparation',
        items: [
          'Sign up for childbirth education classes',
          'Take hospital tour',
          'Research pain management options for labor',
          'Learn about newborn care basics',
          'Decide between breastfeeding, formula, or combination',
          'Read books about labor and delivery',
          'Attend breastfeeding class if planning to nurse',
          'Learn about postpartum recovery'
        ]
      },
      {
        title: 'Work & Legal',
        items: [
          'Formally notify employer of pregnancy and maternity leave plans',
          'Understand FMLA or maternity leave policy details',
          'Begin training your maternity leave replacement if applicable',
          'Plan work projects around your due date',
          'Update beneficiaries on insurance and retirement accounts',
          'Consider creating or updating your will',
          'Review disability insurance'
        ]
      },
      {
        title: 'Fun & Self-Care',
        items: [
          'Plan a babymoon trip if desired (best time is weeks 14-28)',
          'Take maternity photos',
          'Attend baby shower if someone is hosting',
          'Continue gentle exercise routine',
          'Practice prenatal yoga or swimming',
          'Schedule date nights with partner',
          'Pamper yourself with prenatal massage',
          'Enjoy your bump!'
        ]
      }
    ],
    tips: [
      'This is often the best time for travel - after first trimester risks but before third trimester discomfort',
      'Stock up on maternity essentials during sales',
      'Take advantage of your energy - third trimester may be harder',
      'Start practicing pelvic floor exercises',
      'It\'s not too early to start shopping for baby items',
      'Announce pregnancy on social media if you haven\'t yet',
      'Take weekly bump photos'
    ],
    whenToStart: 'Week 14 of pregnancy',
    relatedChecklists: [
      'first-trimester-checklist',
      'third-trimester-checklist',
      'baby-registry-checklist',
      'nursery-setup-checklist'
    ]
  },
  {
    slug: 'third-trimester-checklist',
    title: 'Third Trimester Checklist',
    category: 'trimester',
    trimester: 'third',
    shortDescription: 'Final preparations and tasks for weeks 28-40+ of pregnancy.',
    introduction: [
      'The third trimester is the home stretch! Your baby is growing rapidly, and you\'re preparing for labor, delivery, and bringing baby home.',
      'Now is the time to finalize all your preparations, pack your hospital bag, and get your home ready for a newborn.'
    ],
    sections: [
      {
        title: 'Medical Care',
        items: [
          'Attend prenatal appointments every 2 weeks (weeks 28-36)',
          'Attend weekly appointments starting at 36 weeks',
          'Get Tdap vaccine (between 27-36 weeks)',
          'Complete Group B Strep test (35-37 weeks)',
          'Monitor baby\'s movements daily (kick counts)',
          'Discuss birth plan with your provider',
          'Know signs of preterm labor',
          'Review when to go to hospital/call provider',
          'Consider membrane sweep if going past due date',
          'Discuss induction preferences if needed'
        ]
      },
      {
        title: 'Final Baby Prep',
        items: [
          'Finish setting up nursery',
          'Wash all baby clothes, blankets, and bedding',
          'Install car seat (have it inspected by certified tech)',
          'Set up changing station',
          'Stock up on diapers, wipes, and newborn essentials',
          'Choose coming-home outfit for baby',
          'Charge all electronics and cameras',
          'Prepare freezer meals for after birth',
          'Deep clean house or hire cleaning service'
        ]
      },
      {
        title: 'Hospital Preparation',
        items: [
          'Pack hospital bag by 36 weeks',
          'Have infant car seat installed',
          'Plan route to hospital and backup route',
          'Time how long drive takes at different times of day',
          'Know where to park and which entrance to use',
          'Pre-register at hospital if possible',
          'Discuss pain management preferences',
          'Create birth plan (but stay flexible)',
          'Decide who will be in delivery room',
          'Plan for pet care during hospital stay'
        ]
      },
      {
        title: 'Home Prep',
        items: [
          'Set up bassinet or crib',
          'Stock changing station supplies',
          'Prepare breastfeeding or bottle feeding area',
          'Install nightlights',
          'Baby-proof essential areas',
          'Stock postpartum recovery items for yourself',
          'Prepare easy meals or freeze dinners',
          'Stock household essentials (toilet paper, paper towels, etc.)',
          'Arrange for help in first few weeks'
        ]
      },
      {
        title: 'Work Wrap-Up',
        items: [
          'Complete all work handoffs',
          'Set up out-of-office messages',
          'Share emergency contact info with team',
          'Tie up loose ends on projects',
          'Prepare maternity leave coverage plan',
          'Understand your return-to-work policies',
          'Check your final paycheck details'
        ]
      },
      {
        title: 'Final To-Dos',
        items: [
          'Finalize baby name if not already decided',
          'Confirm pediatrician appointment for first week',
          'Review newborn care basics',
          'Practice using car seat, stroller, baby carrier',
          'Read books on newborn care',
          'Discuss postpartum support with partner',
          'Plan birth announcements',
          'Set up meal train if friends are offering help',
          'Rest as much as possible!'
        ]
      }
    ],
    tips: [
      'Your hospital bag should be packed by 36 weeks in case of early labor',
      'Practice relaxation and breathing techniques daily',
      'Rest when you can - sleep will be scarce soon',
      'Do pelvic floor exercises to prepare for birth',
      'Stay active but don\'t overdo it',
      'Watch for signs of labor: contractions, water breaking, bloody show',
      'Try not to panic if you go past your due date - very common',
      'Trust your body - women have been doing this forever'
    ],
    whenToStart: 'Week 28 of pregnancy',
    relatedChecklists: [
      'second-trimester-checklist',
      'hospital-bag-checklist',
      'newborn-essentials-checklist',
      'postpartum-recovery-checklist'
    ]
  },
  {
    slug: 'hospital-bag-checklist',
    title: 'Hospital Bag Checklist',
    category: 'preparation',
    shortDescription: 'Complete packing list for labor, delivery, and hospital stay.',
    introduction: [
      'Pack your hospital bag by 36 weeks in case baby arrives early. Having everything ready reduces stress when labor begins.',
      'Pack two bags: one for labor/delivery and one for postpartum recovery. You can leave the recovery bag in the car until after baby is born.'
    ],
    sections: [
      {
        title: 'For Labor & Delivery',
        items: [
          'Birth plan copies (several copies)',
          'Insurance card and hospital registration forms',
          'Photo ID',
          'Comfortable labor outfit (sports bra, loose gown, or old t-shirt)',
          'Socks with grips',
          'Slippers or flip-flops',
          'Hair ties',
          'Lip balm',
          'Glasses if you wear contacts (you can\'t wear contacts during C-section)',
          'Phone charger',
          'Portable speaker for music',
          'Snacks for partner (you likely won\'t eat during active labor)',
          'Camera for photos/videos',
          'Focal point item for labor',
          'Massage oil or lotion',
          'Pillow from home in colored pillowcase (so you don\'t leave it)'
        ]
      },
      {
        title: 'For Mom - Postpartum Stay',
        items: [
          'Comfortable going-home outfit (loose-fitting, think 6 months pregnant size)',
          'Nursing bras (2-3)',
          'Comfortable underwear you don\'t mind ruining',
          'Maternity pads (though hospital provides these)',
          'Toiletries: toothbrush, toothpaste, deodorant, face wash, shampoo/conditioner',
          'Nipple cream if breastfeeding',
          'Breast pads',
          'Robe or cardigan',
          'Extra pajamas/nightgown',
          'Slippers',
          'Towel from home if preferred',
          'Flip-flops for shower',
          'Basic makeup if desired',
          'Hairbrush',
          'Contact lens case and solution',
          'Prescription medications',
          'Copies of insurance cards'
        ]
      },
      {
        title: 'For Baby',
        items: [
          'Going-home outfit (newborn size and 0-3 month size)',
          'Weather-appropriate outerwear (coat, bunting, or blanket)',
          'Hat and mittens',
          'Socks or booties',
          'Swaddle blankets (2)',
          'Receiving blankets',
          'Infant car seat (properly installed before labor)',
          'Burp cloths',
          'Pacifiers if you plan to use them',
          'Note: Hospital provides diapers, wipes, and basic baby care items'
        ]
      },
      {
        title: 'For Partner/Support Person',
        items: [
          'Change of clothes',
          'Toiletries',
          'Pillow and blanket (hospital chairs are uncomfortable)',
          'Phone charger',
          'Snacks and drinks',
          'Entertainment (books, tablet)',
          'Cash for vending machines/cafeteria',
          'List of people to contact after birth',
          'Camera'
        ]
      },
      {
        title: 'Important Documents',
        items: [
          'Insurance cards (keep in wallet)',
          'Photo IDs for both parents',
          'Hospital pre-registration paperwork',
          'Birth plan',
          'Pediatrician contact info',
          'List of emergency contacts'
        ]
      },
      {
        title: 'Optional Items',
        items: [
          'Birth ball if hospital doesn\'t provide',
          'Essential oils',
          'Battery-operated candles',
          'Favorite pillow',
          'Bluetooth speaker',
          'Shower shoes',
          'Eye mask for sleep',
          'Earplugs',
          'Snacks for after delivery (you\'ll be hungry!)',
          'Nipple shield if you\'ve used before',
          'Stool softener (though hospital usually provides)'
        ]
      }
    ],
    tips: [
      'Pack by 36 weeks - some babies come early!',
      'Bring items in a bag, not a suitcase (easier to manage)',
      'Don\'t overpack - you\'re typically there 24-48 hours for vaginal birth, 3-4 days for C-section',
      'Hospital provides: diapers, wipes, formula, mesh underwear, peri bottle, pads, baby clothes',
      'Bring your own pads if you prefer a specific brand',
      'Leave valuables at home',
      'Bring phone charger - you\'ll take lots of photos!',
      'Pack snacks - hospital food isn\'t always great',
      'Bring comfortable shoes - you\'ll be walking postpartum'
    ],
    whenToStart: '36 weeks pregnant',
    relatedChecklists: [
      'third-trimester-checklist',
      'labor-signs-checklist',
      'postpartum-recovery-checklist'
    ]
  },
  {
    slug: 'baby-registry-checklist',
    title: 'Baby Registry Checklist',
    category: 'baby',
    shortDescription: 'Complete list of baby items to register for or purchase.',
    introduction: [
      'Creating a baby registry can feel overwhelming with so many products available. This checklist covers essentials and helpful items organized by category.',
      'Remember: you don\'t need everything before baby arrives. Focus on essentials for the first few weeks and add items as you discover what works for your family.'
    ],
    sections: [
      {
        title: 'Sleep Essentials',
        items: [
          'Crib, bassinet, or play yard',
          'Firm crib mattress',
          'Waterproof mattress protector (2-3)',
          'Fitted crib sheets (4-6)',
          'Sleep sacks or wearable blankets (avoid loose blankets)',
          'White noise machine',
          'Room-darkening curtains',
          'Baby monitor (video or audio)',
          'Nightlight',
          'Swaddles (4-6)'
        ]
      },
      {
        title: 'Feeding Supplies',
        description: 'Whether breastfeeding, formula feeding, or both:',
        items: [
          'Nursing bras (3-4)',
          'Breast pump (if planning to pump)',
          'Pump parts and bottles',
          'Nursing pillow',
          'Nipple cream',
          'Breast pads (disposable or reusable)',
          'Milk storage bags',
          'Bottles (4-6 of different sizes) if formula feeding or pumping',
          'Bottle brush and drying rack',
          'Bottle sterilizer (optional)',
          'Formula if not breastfeeding',
          'Burp cloths (10-12)',
          'Bibs (6-8)'
        ]
      },
      {
        title: 'Diapering',
        items: [
          'Diapers (newborn and size 1)',
          'Baby wipes',
          'Diaper cream',
          'Changing pad with waterproof cover',
          'Changing pad covers (2-3)',
          'Diaper pail',
          'Diaper bag',
          'Portable changing pad for diaper bag',
          'Cloth diapers if using (24-36)',
          'Wet bag for cloth diapers'
        ]
      },
      {
        title: 'Clothing',
        items: [
          'Onesies (6-8 in newborn and 0-3 month sizes)',
          'Sleepers (6-8)',
          'Pants (4-6)',
          'Socks (6-8 pairs)',
          'Hats (2-3)',
          'Mittens to prevent scratching',
          'Weather-appropriate outerwear',
          'Going-home outfit',
          'Kimono-style shirts (easier before cord falls off)',
          'Note: Babies outgrow newborn size quickly - don\'t overstock'
        ]
      },
      {
        title: 'Bathing',
        items: [
          'Baby bathtub or bath seat',
          'Soft washcloths (6-8)',
          'Hooded towels (2-3)',
          'Baby body wash and shampoo',
          'Baby lotion',
          'Baby brush and comb',
          'Nail clippers or file',
          'Bath thermometer'
        ]
      },
      {
        title: 'Health & Safety',
        items: [
          'Thermometer (rectal for newborns is most accurate)',
          'Infant pain reliever (ask pediatrician about type)',
          'Saline drops',
          'Nasal aspirator',
          'First aid kit',
          'Humidifier',
          'Outlet covers',
          'Cabinet locks',
          'Baby gates (if you have stairs)'
        ]
      },
      {
        title: 'Gear & Transport',
        items: [
          'Infant car seat (must have before leaving hospital)',
          'Stroller',
          'Baby carrier or wrap',
          'Diaper bag',
          'Bouncer or swing',
          'Play mat or activity gym',
          'Portable pack and play',
          'High chair (can wait until 4-6 months)'
        ]
      },
      {
        title: 'Nice to Have',
        items: [
          'Rocking chair or glider for nursery',
          'Nursing cover if desired',
          'Pacifiers (various types to try)',
          'Baby book for memories',
          'Photo props',
          'Teething toys (for later)',
          'Lovey or comfort object (for later)',
          'Baby carrier/wrap',
          'Playpen',
          'Bottle warmer'
        ]
      }
    ],
    tips: [
      'Register at multiple stores for variety and convenience',
      'Include items at different price points',
      'Don\'t over-register for newborn clothes - babies grow fast',
      'Add more diapers - you can never have too many',
      'Wait on some items to see what you actually need',
      'Read reviews before adding items',
      'Consider used items for expensive gear',
      'Some items are better bought after baby arrives',
      'Complete your registry by baby shower time (usually around 30-32 weeks)'
    ],
    whenToStart: 'Second trimester (around 20-24 weeks)',
    relatedChecklists: [
      'newborn-essentials-checklist',
      'nursery-setup-checklist',
      'second-trimester-checklist'
    ]
  },
  {
    slug: 'newborn-essentials-checklist',
    title: 'Newborn Essentials Checklist',
    category: 'baby',
    shortDescription: 'Must-have items for the first few weeks with your newborn.',
    introduction: [
      'You don\'t need everything marketed to new parents. This checklist focuses on true essentials for the first few weeks.',
      'You can always buy more later once you know what works for your baby and your family.'
    ],
    sections: [
      {
        title: 'Absolute Must-Haves',
        items: [
          'Safe sleep space (crib, bassinet, or play yard with firm mattress)',
          'Infant car seat properly installed',
          'Diapers (at least 2 packs of newborn, 2 of size 1)',
          'Baby wipes',
          'Diaper cream',
          'Onesies and sleepers (4-6 of each in newborn and 0-3 month)',
          'Swaddles or sleep sacks (3-4)',
          'Burp cloths (6-8)',
          'Bottles if not exclusively breastfeeding (4-6)',
          'Infant formula if not breastfeeding',
          'Thermometer',
          'Nail clippers',
          'Baby wash and shampoo'
        ]
      },
      {
        title: 'Feeding Essentials',
        items: [
          'If breastfeeding: nursing bras, breast pads, nipple cream',
          'If pumping: breast pump, pump parts, milk storage bags',
          'If formula feeding: bottles, formula, bottle brush',
          'Burp cloths',
          'Nursing pillow',
          'Bottle drying rack'
        ]
      },
      {
        title: 'Comfort & Soothing',
        items: [
          'Pacifiers (try different types)',
          'White noise machine or app',
          'Swaddles',
          'Baby carrier or wrap',
          'Bouncer or swing (very helpful but not absolutely essential)',
          'Soft blankets for tummy time and cuddling'
        ]
      },
      {
        title: 'What You Can Wait On',
        description: 'Items you don\'t need immediately:',
        items: [
          'High chair (not until 4-6 months)',
          'Toys and books (nice to have but newborns don\'t play)',
          'Shoes (babies don\'t walk for months)',
          'Tons of clothes (babies outgrow quickly and spit up often)',
          'Changing table (changing pad on dresser works fine)',
          'Wipe warmer',
          'Most nursery decor',
          'Bath toys'
        ]
      }
    ],
    tips: [
      'Buy diapers in multiple sizes - don\'t stock up on newborn only',
      'Accept hand-me-down clothes - babies outgrow them in weeks',
      'Keep receipts and tags on gear until you know it works for you',
      'Amazon Prime is your friend for quick delivery of forgotten items',
      'Many parents say they use their baby carrier/wrap constantly',
      'A bouncer or swing can be a lifesaver but some babies don\'t like them',
      'Start with basics and add items as you discover what you need'
    ],
    whenToStart: 'Third trimester',
    relatedChecklists: [
      'baby-registry-checklist',
      'third-trimester-checklist',
      'nursery-setup-checklist'
    ]
  },
  {
    slug: 'postpartum-recovery-checklist',
    title: 'Postpartum Recovery Checklist',
    category: 'postpartum',
    shortDescription: 'Essential items and supplies for mom\'s recovery after birth.',
    introduction: [
      'Postpartum recovery is often overlooked during pregnancy planning, but having the right supplies can make healing much more comfortable.',
      'Stock up on these items before baby arrives so you\'re prepared when you come home from the hospital.'
    ],
    sections: [
      {
        title: 'Healing & Comfort',
        items: [
          'Extra-large overnight pads or postpartum pads (2-3 packs)',
          'Disposable or mesh underwear',
          'Peri bottle (hospital provides but you may want backup)',
          'Witch hazel pads or spray',
          'Ice packs or padsicles (DIY: maxi pads with witch hazel, frozen)',
          'Stool softener and fiber supplement',
          'Hemorrhoid cream',
          'Pain reliever (ibuprofen, acetaminophen)',
          'Heating pad',
          'Donut pillow if needed'
        ]
      },
      {
        title: 'Breastfeeding Supplies',
        items: [
          'Nipple cream (lanolin or alternative)',
          'Breast pads (disposable or reusable)',
          'Comfortable nursing bras',
          'Nursing tanks or tops',
          'Breast shells if inverted nipples',
          'Gel packs for breast pain (can be heated or cooled)',
          'Haakaa or manual breast pump',
          'Water bottle to keep hydrated'
        ]
      },
      {
        title: 'Clothing & Comfort',
        items: [
          'High-waisted, loose underwear',
          'Comfortable pajamas or nightgowns',
          'Robe or cardigan',
          'Loose, comfortable pants',
          'Button-up or nursing-friendly tops',
          'Supportive slippers',
          'Belly wrap or postpartum support band (optional)'
        ]
      },
      {
        title: 'Practical Items',
        items: [
          'Healthy snacks for easy access',
          'Large water bottle with straw',
          'Phone charger for bedside',
          'Dry shampoo',
          'Basic toiletries',
          'Nightlight',
          'Trash can near bed',
          'Waterproof mattress pad'
        ]
      },
      {
        title: 'Meal Prep',
        items: [
          'Freezer meals prepared in advance',
          'Easy snacks (protein bars, nuts, dried fruit)',
          'Paper plates and disposable utensils',
          'Grocery delivery service set up',
          'Meal train organized by friends/family',
          'List of takeout restaurants'
        ]
      },
      {
        title: 'Mental Health Support',
        items: [
          'List of postpartum support resources',
          'Therapist contact info if you have one',
          'Postpartum depression screening information',
          'Support group info (online or local)',
          'Partner or family help scheduled',
          'Realistic expectations about recovery'
        ]
      }
    ],
    tips: [
      'Stock up before baby arrives - you won\'t want to shop postpartum',
      'Set up stations around the house with supplies',
      'Make padsicles in advance and freeze',
      'Accept all offers of help',
      'Rest is crucial - sleep when baby sleeps',
      'Don\'t rush physical recovery - it takes 6+ weeks',
      'Call doctor for: heavy bleeding, fever, severe pain, signs of infection',
      'Watch for postpartum depression symptoms',
      'Be gentle with yourself - recovery takes time',
      'Pelvic floor exercises can wait until 6-week checkup'
    ],
    whenToStart: 'Stock up during third trimester',
    relatedChecklists: [
      'third-trimester-checklist',
      'hospital-bag-checklist',
      'breastfeeding-supplies-checklist'
    ]
  },
  {
    slug: 'nursery-setup-checklist',
    title: 'Nursery Setup Checklist',
    category: 'baby',
    shortDescription: 'Complete guide to setting up a functional and safe nursery.',
    introduction: [
      'Setting up the nursery is an exciting part of pregnancy preparation. While Pinterest-perfect nurseries are lovely, functionality and safety are most important.',
      'Focus on essentials first, then add decorative elements as desired. Remember: baby doesn\'t need a completed nursery on day one.'
    ],
    sections: [
      {
        title: 'Sleep Area',
        items: [
          'Crib, bassinet, or play yard',
          'Firm, flat crib mattress',
          'Waterproof mattress protector (2)',
          'Fitted crib sheets (4-6)',
          'Sleep sacks or wearable blankets',
          'White noise machine',
          'Room-darkening curtains or blinds',
          'Baby monitor',
          'Nightlight'
        ]
      },
      {
        title: 'Changing Station',
        items: [
          'Changing table or dresser with changing pad on top',
          'Changing pad with safety strap',
          'Changing pad covers (3-4)',
          'Diapers (multiple sizes)',
          'Wipes and wipe dispenser',
          'Diaper cream',
          'Diaper pail with odor control',
          'Small trash can for non-diaper trash',
          'Hand sanitizer'
        ]
      },
      {
        title: 'Storage & Organization',
        items: [
          'Dresser for baby clothes',
          'Closet organizers',
          'Storage bins or baskets',
          'Hamper for dirty clothes',
          'Bookshelf (can wait)',
          'Drawer dividers',
          'Labels for organization'
        ]
      },
      {
        title: 'Feeding Station',
        items: [
          'Comfortable chair (rocking chair, glider, or armchair)',
          'Small side table',
          'Lamp or reading light',
          'Nursing pillow',
          'Water bottle',
          'Snack basket',
          'Burp cloths within reach',
          'Phone charger',
          'Clock to track feeding times'
        ]
      },
      {
        title: 'Safety Items',
        items: [
          'Outlet covers',
          'Furniture anchors for tall furniture',
          'Cord shorteners for window blinds',
          'Door stop/holder',
          'Baby gate if stairs nearby',
          'Fire extinguisher',
          'Smoke detector and carbon monoxide detector',
          'First aid kit'
        ]
      },
      {
        title: 'Nice to Have',
        items: [
          'Rug (make sure it\'s non-slip)',
          'Wall art and decorations',
          'Mobile (ensure it\'s securely attached)',
          'Curtains',
          'Bookshelf with books',
          'Toy storage',
          'Growth chart',
          'Picture frames',
          'Blackout curtains'
        ]
      }
    ],
    tips: [
      'Safety first: anchor all tall furniture to walls',
      'Keep crib clear: no bumpers, pillows, blankets, or toys',
      'Place crib away from windows, cords, and curtains',
      'Test white noise machine volume - shouldn\'t exceed 50 decibels',
      'Keep changing supplies within arm\'s reach but out of baby\'s grasp',
      'Make sure there\'s adequate lighting for nighttime changes',
      'Consider room temperature - ideal is 68-72°F',
      'You don\'t need a complete nursery before baby arrives',
      'Many babies sleep in parents\' room for first months',
      'Focus on function over aesthetics'
    ],
    whenToStart: 'Second or third trimester',
    relatedChecklists: [
      'newborn-essentials-checklist',
      'baby-registry-checklist',
      'second-trimester-checklist'
    ]
  },
  {
    slug: 'prenatal-appointment-schedule',
    title: 'Prenatal Appointment Schedule',
    category: 'planning',
    shortDescription: 'Typical prenatal appointment and testing schedule throughout pregnancy.',
    introduction: [
      'Regular prenatal care is essential for monitoring your health and baby\'s development. This guide shows the typical appointment and testing schedule.',
      'Your specific schedule may vary based on your health, pregnancy complications, or your provider\'s protocols.'
    ],
    sections: [
      {
        title: 'First Trimester (Weeks 1-13)',
        items: [
          'Initial prenatal visit (around 8-10 weeks): Full medical history, physical exam, confirm pregnancy',
          'First prenatal labs: Blood type, Rh factor, CBC, STD screening, immunity testing',
          'First ultrasound (7-13 weeks): Dating scan to confirm due date and detect heartbeat',
          'Genetic counseling if indicated',
          'Optional: First trimester combined screening (10-13 weeks): Blood test + nuchal translucency ultrasound',
          'Optional: NIPT (non-invasive prenatal testing) for genetic conditions (after 10 weeks)',
          'Optional: CVS (chorionic villus sampling) if high-risk (10-13 weeks)',
          'Appointments typically every 4 weeks'
        ]
      },
      {
        title: 'Second Trimester (Weeks 14-27)',
        items: [
          'Monthly appointments (every 4 weeks) to check: weight, blood pressure, urine, fetal heart rate, fundal height',
          'Anatomy scan ultrasound (18-22 weeks): Detailed look at baby\'s development, can learn sex',
          'Optional: Quad screen blood test (15-20 weeks) if didn\'t do first trimester screening',
          'Optional: Amniocentesis if indicated (15-20 weeks)',
          'Glucose tolerance test (24-28 weeks): Screening for gestational diabetes',
          'Rh antibody screen if Rh negative (around 28 weeks)',
          'Tdap vaccine (between 27-36 weeks)',
          'Discuss kick counting'
        ]
      },
      {
        title: 'Third Trimester (Weeks 28-40+)',
        items: [
          'Appointments every 2 weeks (weeks 28-36)',
          'Weekly appointments starting at 36 weeks',
          'Each visit: weight, blood pressure, urine, fetal heart rate, fundal height',
          'Group B Strep test (35-37 weeks)',
          'Pelvic exam to check cervical changes (usually after 36 weeks)',
          'Discuss birth plan and labor signs',
          'Review when to go to hospital',
          'Possible: Additional ultrasounds if concerns about growth, fluid, or position',
          'If past due date (40+ weeks): Non-stress test and biophysical profile, discuss induction'
        ]
      },
      {
        title: 'Optional Tests',
        items: [
          'Cell-free fetal DNA (NIPT) - screens for chromosomal abnormalities',
          'First trimester combined screening - assesses risk for Down syndrome and trisomy 18',
          'Quad screen - second trimester blood test for genetic conditions',
          'CVS or amniocentesis - diagnostic tests for genetic conditions',
          'Additional ultrasounds for monitoring concerns',
          'Fetal echocardiogram if heart concerns',
          'Growth scans if baby measuring large or small'
        ]
      },
      {
        title: 'High-Risk Additional Monitoring',
        description: 'You may need more frequent appointments if you have:',
        items: [
          'Gestational diabetes',
          'Preeclampsia or chronic hypertension',
          'Multiples (twins, triplets)',
          'History of preterm birth',
          'Advanced maternal age (35+)',
          'Certain medical conditions',
          'Previous pregnancy loss',
          'Baby measuring large or small'
        ]
      }
    ],
    tips: [
      'Schedule appointments in advance',
      'Bring a list of questions to each appointment',
      'Request first or last appointment of the day for shorter waits',
      'Bring your partner to ultrasounds and important appointments',
      'Keep a pregnancy journal to track symptoms to discuss',
      'Don\'t skip appointments - they\'re crucial for monitoring',
      'If something feels wrong between appointments, call your provider',
      'Take photos of ultrasound screen if allowed',
      'Ask about anything you don\'t understand'
    ],
    whenToStart: 'As soon as you confirm pregnancy',
    relatedChecklists: [
      'first-trimester-checklist',
      'second-trimester-checklist',
      'third-trimester-checklist'
    ]
  }
]

export function getChecklistData(slug: string): ChecklistData | undefined {
  return checklistsData.find((checklist) => checklist.slug === slug)
}
