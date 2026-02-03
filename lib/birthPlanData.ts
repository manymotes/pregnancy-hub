export interface BirthPlanData {
  slug: string
  title: string
  type: string
  shortDescription: string
  introduction: string[]
  sections: {
    title: string
    description?: string
    items: string[]
  }[]
  considerations: string[]
  questionsForProvider: string[]
  relatedPlans: string[]
}

export const birthPlanData: BirthPlanData[] = [
  {
    slug: 'natural-birth',
    title: 'Natural Birth Plan (Unmedicated)',
    type: 'Natural/Unmedicated',
    shortDescription: 'A comprehensive birth plan template for unmedicated vaginal birth without pain medication or routine medical interventions.',
    introduction: [
      'A natural birth plan focuses on minimal medical intervention, allowing your body to labor and deliver without pain medication. Many women choose this approach to experience the full process of childbirth.',
      'This template helps you communicate your preferences for an unmedicated birth while remaining flexible for unexpected situations. Remember that the goal is a healthy mother and baby, and plans may need to change.'
    ],
    sections: [
      {
        title: 'Labor Environment Preferences',
        items: [
          'Dim lighting or natural light',
          'Quiet environment, minimal interruptions',
          'Ability to play my own music',
          'Freedom to move around freely',
          'Access to birth ball, squat bar, or other labor tools',
          'Keep medical equipment and monitors discreet when possible',
          'Limited number of staff entering the room',
          'Respectful, calm atmosphere'
        ]
      },
      {
        title: 'Labor Support',
        items: [
          'Partner/spouse present throughout labor and delivery',
          'Doula present for continuous support',
          'Additional support person: [specify]',
          'Support team to provide massage, counter-pressure, and encouragement',
          'No unsolicited advice or negative language',
          'Encouragement for unmedicated birth from all staff'
        ]
      },
      {
        title: 'Freedom of Movement & Positioning',
        items: [
          'Freedom to move, walk, and change positions as desired',
          'Access to shower or bathtub for pain relief',
          'Able to eat light snacks and drink fluids',
          'No routine continuous fetal monitoring (intermittent monitoring preferred)',
          'Wireless or portable monitoring if continuous monitoring needed',
          'Upright positions for labor (standing, sitting, squatting)',
          'Freedom to choose pushing position (avoid flat on back)'
        ]
      },
      {
        title: 'Pain Management (Non-Medical)',
        items: [
          'Hydrotherapy (shower or tub)',
          'Massage and counter-pressure',
          'Breathing techniques',
          'Position changes',
          'Birth ball',
          'Visualization and hypnobirthing techniques',
          'Aromatherapy',
          'Hot/cold compresses',
          'TENS unit if available',
          'NO offers of pain medication unless I request'
        ]
      },
      {
        title: 'Medical Interventions - Preferences',
        items: [
          'No routine IV (allow hep lock or no IV if staying hydrated)',
          'No artificial rupture of membranes unless medically necessary',
          'No Pitocin augmentation unless medically necessary',
          'Discuss options before any intervention',
          'Allow time for spontaneous labor progression',
          'Delay cervical checks or only when necessary',
          'No routine episiotomy (allow natural tearing if needed)',
          'Informed consent required for all interventions'
        ]
      },
      {
        title: 'Pushing & Delivery',
        items: [
          'Push spontaneously when I feel the urge (no coached/directed pushing)',
          'Choose my own pushing position (squatting, hands-and-knees, side-lying)',
          'Upright or semi-upright position preferred',
          'Allow time for perineum to stretch naturally',
          'Warm compresses for perineal support',
          'No episiotomy unless absolutely necessary',
          'Minimal coaching during pushing',
          'Slow, controlled delivery to reduce tearing',
          'Allow me to reach down and touch baby\'s head if desired'
        ]
      },
      {
        title: 'Immediate After Birth',
        items: [
          'Immediate skin-to-skin contact (baby placed on chest)',
          'Delay cord clamping (at least 1-3 minutes or until it stops pulsing)',
          'Partner/doula to cut the umbilical cord',
          'Allow me to deliver placenta naturally without traction',
          'No routine fundal massage unless necessary',
          'Baby stays with me for all newborn procedures',
          'Breastfeeding within the first hour',
          'Delay routine newborn procedures (bath, measurements) for at least 1-2 hours'
        ]
      },
      {
        title: 'Newborn Care Preferences',
        items: [
          'Rooming-in (baby stays with me at all times)',
          'Delay first bath (at least 12-24 hours)',
          'Breastfeeding exclusively (no formula unless medically necessary)',
          'No pacifiers or artificial nipples',
          'Vitamin K injection: [Accept / Decline / Oral dose]',
          'Erythromycin eye ointment: [Accept / Decline / Delay]',
          'Hepatitis B vaccine: [Accept / Decline / Delay]',
          'No circumcision / Circumcision with anesthesia',
          'All tests and procedures explained before administration'
        ]
      }
    ],
    considerations: [
      'Natural birth requires strong preparation - take childbirth education classes',
      'Consider hiring a doula for experienced support',
      'Discuss your plan with your provider early to ensure they\'re supportive',
      'Some hospitals are more supportive of natural birth than others',
      'Stay flexible - complications may require medical intervention',
      'Pain in labor is intense - mental preparation is crucial',
      'Having a support team helps you stay committed to your plan',
      'Not all hospitals allow eating/drinking in labor',
      'Intermittent monitoring may not be available at all facilities',
      'Know when medical intervention is truly necessary for safety'
    ],
    questionsForProvider: [
      'What percentage of your patients have unmedicated births?',
      'Do you support natural birth without routine interventions?',
      'Can I eat and drink during labor?',
      'Is intermittent fetal monitoring available?',
      'Can I move freely and use different positions for labor and delivery?',
      'What is your policy on time limits for labor stages?',
      'Do you routinely rupture membranes or use Pitocin?',
      'What is your episiotomy rate?',
      'Can I have a doula present?',
      'What circumstances would require medical intervention?',
      'Is there a tub or shower available for hydrotherapy?',
      'How do you handle pain management requests?'
    ],
    relatedPlans: [
      'water-birth',
      'home-birth',
      'hospital-birth'
    ]
  },
  {
    slug: 'hospital-birth',
    title: 'Hospital Birth Plan (Standard Medical)',
    type: 'Hospital/Medical',
    shortDescription: 'A balanced birth plan for hospital delivery with access to medical pain relief and standard medical care.',
    introduction: [
      'A hospital birth with standard medical care offers the security of immediate medical intervention if needed while still allowing you to express preferences for your birth experience.',
      'This plan balances medical care with personal preferences, acknowledging that hospital policies and medical necessity may require flexibility.'
    ],
    sections: [
      {
        title: 'Labor Environment',
        items: [
          'Private labor and delivery room if available',
          'Dimmed lighting',
          'My own music playing',
          'Minimal unnecessary interruptions',
          'Respectful, supportive atmosphere from all staff',
          'Limit visitors to: [specify who]'
        ]
      },
      {
        title: 'Labor Support People',
        items: [
          'Partner/spouse present at all times',
          'Support person: [name]',
          'Doula if allowed by hospital policy',
          'Support team to provide comfort measures and advocacy',
          'No students or observers without my explicit permission'
        ]
      },
      {
        title: 'Monitoring & Mobility',
        items: [
          'Continuous fetal monitoring as medically indicated',
          'Wireless monitoring if available to allow movement',
          'Ability to move around and change positions when safe',
          'Access to birth ball, peanut ball if available',
          'Freedom to use bathroom as desired',
          'Intermittent monitoring if mother and baby are healthy'
        ]
      },
      {
        title: 'IV & Hydration',
        items: [
          'Hep lock (saline lock) instead of continuous IV if possible',
          'Clear liquids allowed during early labor',
          'Ice chips during active labor',
          'IV fluids as recommended by medical team'
        ]
      },
      {
        title: 'Pain Management Options',
        items: [
          'Open to epidural when I request it',
          'Explain pain relief options as labor progresses',
          'Try non-medical comfort measures first (massage, position changes, breathing)',
          'IV pain medication if desired before epidural',
          'Nitrous oxide if available',
          'Keep me informed of all medication options',
          'Respect my decision regarding timing of pain relief'
        ]
      },
      {
        title: 'Labor Augmentation',
        items: [
          'Discuss options before artificial rupture of membranes',
          'Allow adequate time for natural labor progression',
          'Pitocin only if medically necessary',
          'Explain reasons for any intervention',
          'Allow position changes and movement before augmentation'
        ]
      },
      {
        title: 'Pushing & Delivery',
        items: [
          'Let me know when fully dilated and ready to push',
          'Push with contractions when I feel urge',
          'Allow choice of pushing position if medically safe',
          'Provide guidance on effective pushing technique',
          'Use mirror to see baby crowning if desired',
          'Avoid episiotomy unless medically necessary',
          'Controlled delivery to minimize tearing'
        ]
      },
      {
        title: 'Delivery Preferences',
        items: [
          'Immediate skin-to-skin contact after birth',
          'Delay cord clamping for 1-3 minutes if baby is stable',
          'Partner to cut umbilical cord',
          'Announce baby\'s sex (don\'t tell me beforehand)',
          'Deliver placenta naturally with minimal intervention',
          'Allow me to see and touch placenta if desired'
        ]
      },
      {
        title: 'Immediate Postpartum',
        items: [
          'Extended skin-to-skin time (at least first hour)',
          'Initiate breastfeeding within first hour',
          'Delay routine procedures during bonding time',
          'Perform newborn assessment at bedside if possible',
          'Dim lights for initial family bonding',
          'Limited interruptions during golden hour'
        ]
      },
      {
        title: 'Newborn Procedures',
        items: [
          'Vitamin K injection: Accept',
          'Erythromycin eye ointment: Accept (or discuss timing)',
          'Hepatitis B vaccine: [Accept / Delay until discharge]',
          'Delay first bath until at least 12-24 hours',
          'All procedures explained before administration',
          'Baby weighed and measured after initial bonding',
          'Hearing test before discharge'
        ]
      },
      {
        title: 'Feeding Preferences',
        items: [
          'Breastfeeding exclusively',
          'Open to formula supplementation if medically necessary',
          'Lactation consultant visit',
          'No pacifiers in hospital',
          'Rooming-in (baby stays with me)',
          'Support with breastfeeding techniques'
        ]
      },
      {
        title: 'Postpartum Care',
        items: [
          'Private recovery room if available',
          'Rooming-in with baby',
          'Pain management as needed',
          'Stool softeners',
          'Help with first shower',
          'Lactation support',
          'Limit visitors during hospital stay',
          'Education on newborn care, breastfeeding, postpartum warning signs'
        ]
      }
    ],
    considerations: [
      'Hospital policies may limit some choices',
      'Medical necessity always takes priority',
      'Epidural may limit mobility and position choices',
      'Continuous monitoring may be required in some situations',
      'Staff changes may mean repeating your preferences',
      'Bring multiple copies of your birth plan',
      'Discuss plan with your provider before labor',
      'Tour the hospital in advance',
      'Understand when medical intervention is necessary',
      'Stay flexible - birth is unpredictable'
    ],
    questionsForProvider: [
      'What are the hospital\'s standard labor procedures?',
      'Can I have intermittent monitoring if low-risk?',
      'What pain management options are available?',
      'Is there a time limit for labor stages?',
      'What positions are allowed for pushing?',
      'What is the hospital\'s episiotomy rate?',
      'Can I eat or drink during labor?',
      'Is wireless fetal monitoring available?',
      'What are the circumstances for C-section?',
      'Can my support people stay overnight?',
      'What newborn procedures are routine vs optional?',
      'Is rooming-in standard practice?'
    ],
    relatedPlans: [
      'natural-birth',
      'c-section',
      'vbac'
    ]
  },
  {
    slug: 'home-birth',
    title: 'Home Birth Plan',
    type: 'Home Birth',
    shortDescription: 'A birth plan template for planned home birth with midwife care in your own environment.',
    introduction: [
      'Home birth offers the comfort and privacy of your own space with personalized midwife care. This option is best for low-risk pregnancies with appropriate prenatal care.',
      'Planning a home birth requires careful preparation, a qualified birth team, and clear emergency transfer plans. This template helps you prepare your home and communicate preferences with your midwife team.'
    ],
    sections: [
      {
        title: 'Birth Team',
        items: [
          'Primary midwife: [name]',
          'Assistant midwife: [name]',
          'Doula: [name]',
          'Partner/spouse present',
          'Other support people: [specify]',
          'Photographer/videographer if desired',
          'Clear roles for each support person'
        ]
      },
      {
        title: 'Home Preparation',
        items: [
          'Birth pool set up and tested (if water birth)',
          'Clean linens, towels, waterproof sheets',
          'Birth supplies kit prepared',
          'Heating adjusted for comfortable temperature',
          'Snacks and drinks for labor and support team',
          'Bathroom easily accessible',
          'Privacy for labor space',
          'Other children cared for by: [name]',
          'Pets secured in another area'
        ]
      },
      {
        title: 'Labor Environment',
        items: [
          'Low lighting or candles',
          'My own music/sounds',
          'Freedom to move throughout home',
          'Access to multiple rooms',
          'Birth pool available',
          'Comfortable temperature',
          'Privacy and minimal interruptions',
          'Familiar surroundings to feel safe and relaxed'
        ]
      },
      {
        title: 'Labor Support & Comfort',
        items: [
          'Freedom to eat and drink as desired',
          'Access to shower/bath',
          'Use of birth pool for labor/delivery',
          'Position changes as I desire',
          'Massage and counter-pressure from support team',
          'Minimal vaginal exams',
          'Continuous support from midwife and doula',
          'Encouragement and positive affirmations'
        ]
      },
      {
        title: 'Monitoring',
        items: [
          'Intermittent fetal heart rate monitoring with doppler',
          'Monitoring mother\'s vital signs',
          'Minimal interventions',
          'Monitoring only as needed for safety',
          'Allow labor to progress naturally'
        ]
      },
      {
        title: 'Pain Management',
        items: [
          'Water immersion',
          'Massage and touch',
          'Position changes',
          'Breathing techniques',
          'Visualization',
          'Hypnobirthing',
          'TENS unit',
          'Aromatherapy',
          'Support and encouragement from birth team'
        ]
      },
      {
        title: 'Pushing & Birth',
        items: [
          'Push spontaneously when ready',
          'Choose my own position (no restrictions)',
          'Birth in pool or on land as I desire',
          'Partner to catch baby or support',
          'Hands-off delivery (allow natural emergence)',
          'Perineal support as needed',
          'Allow time for gentle birth',
          'No episiotomy',
          'Bring baby directly to chest'
        ]
      },
      {
        title: 'Immediately After Birth',
        items: [
          'Immediate skin-to-skin contact',
          'Delayed cord clamping until it stops pulsing',
          'Partner/mother cuts cord',
          'Deliver placenta naturally without traction',
          'Save placenta for: [encapsulation / planting / disposal]',
          'Begin breastfeeding when baby shows interest',
          'Allow natural bonding time before any procedures',
          'Dim lighting for baby\'s first moments'
        ]
      },
      {
        title: 'Newborn Care',
        items: [
          'Newborn exam performed at home',
          'Delay any procedures for first 1-2 hours',
          'Vitamin K: [Injection / Oral dose / Decline]',
          'Eye ointment: [Decline / Delay]',
          'No bath for at least 24 hours',
          'Keep baby skin-to-skin for temperature regulation',
          'Weight and measurements after bonding time',
          'Newborn metabolic screening at home or later'
        ]
      },
      {
        title: 'Postpartum Home Care',
        items: [
          'Midwife to check on mother and baby',
          'Assist with breastfeeding',
          'Check for postpartum bleeding',
          'Postpartum recovery care and education',
          'Help with first urination',
          'Clean up birth area',
          'Prepare light meal',
          'Follow-up visits scheduled: [timeline]',
          'When support team will leave: [timeline]'
        ]
      },
      {
        title: 'Emergency Transfer Plan',
        items: [
          'Transfer hospital identified: [hospital name]',
          'Transfer route planned and timed',
          'Emergency contact numbers readily available',
          'Circumstances requiring transfer discussed with midwife',
          'Partner/support person to accompany to hospital',
          'Car seat installed and ready',
          'Hospital bag prepared as backup',
          'Understanding of when transfer is necessary'
        ]
      }
    ],
    considerations: [
      'Home birth is safest for low-risk pregnancies only',
      'Requires qualified, licensed midwife',
      'Have clear emergency transfer plan',
      'Some insurance may not cover home birth',
      'No immediate access to pain medication or emergency surgery',
      'Must live within reasonable distance to hospital',
      'Requires physical and mental preparation',
      'Partner must be supportive and prepared',
      'Local laws vary - ensure home birth is legal in your area',
      'Not all midwives have hospital privileges for transfer'
    ],
    questionsForProvider: [
      'What are your qualifications and licensing?',
      'How many home births have you attended?',
      'What is your transfer rate and reasons?',
      'What emergency equipment do you bring?',
      'What situations require hospital transfer?',
      'Which hospital do you transfer to?',
      'Do you have hospital privileges?',
      'What prenatal testing do you recommend?',
      'How do you monitor baby during labor?',
      'What supplies do I need to provide?',
      'What postpartum care do you provide?',
      'How do you handle complications like hemorrhage?',
      'Do you have malpractice insurance?',
      'What is your fee and payment structure?'
    ],
    relatedPlans: [
      'natural-birth',
      'water-birth'
    ]
  },
  {
    slug: 'water-birth',
    title: 'Water Birth Plan',
    type: 'Water Birth',
    shortDescription: 'A birth plan template for laboring and/or delivering in water, either at home, birth center, or hospital.',
    introduction: [
      'Water birth involves laboring in a birth pool or tub, and may include delivering the baby in water. The warm water provides natural pain relief and helps with relaxation.',
      'Water birth requires specific facility accommodations and provider support. Not all hospitals offer this option, and certain medical conditions may make it inappropriate.'
    ],
    sections: [
      {
        title: 'Water Birth Location',
        items: [
          'Location: [Hospital / Birth Center / Home]',
          'Birth pool/tub type: [built-in / portable]',
          'Water depth sufficient for immersion',
          'Temperature control available (optimal: 95-100°F / 35-37.5°C)',
          'Room temperature kept warm',
          'Easy entry and exit from tub',
          'Pool set up and tested before labor'
        ]
      },
      {
        title: 'Birth Team & Support',
        items: [
          'Provider experienced with water birth',
          'Midwife/doula trained in water birth',
          'Partner/support person able to provide comfort in water',
          'Support team to monitor water temperature',
          'Someone designated to refill warm water as needed',
          'Clear roles for birth team members'
        ]
      },
      {
        title: 'Labor in Water',
        items: [
          'Enter pool when in active labor (typically 5-6 cm dilated)',
          'Freedom to enter and exit tub as desired',
          'Ability to change positions in water',
          'Access to food and drinks while in tub',
          'Dim lighting around pool',
          'Music if desired',
          'Privacy curtains or screens if needed'
        ]
      },
      {
        title: 'Monitoring in Water',
        items: [
          'Intermittent fetal heart monitoring with waterproof doppler',
          'Monitor maternal vital signs regularly',
          'Check water temperature frequently',
          'Exit pool if concerns about mother or baby status',
          'Wireless monitoring if continuous monitoring needed and available'
        ]
      },
      {
        title: 'Pain Management',
        items: [
          'Water immersion as primary pain relief',
          'Position changes in water',
          'Breathing techniques',
          'Massage from support person',
          'Hydrotherapy jets if available',
          'Option to exit for other comfort measures',
          'Understanding that epidural requires leaving water'
        ]
      },
      {
        title: 'Delivery in Water',
        items: [
          'Deliver baby while in water if all is progressing normally',
          'Push in comfortable position (sitting, squatting, on hands-and-knees)',
          'Slow, gentle emergence of baby',
          'Allow baby to be born underwater and brought up gently',
          'Baby\'s head and body completely submerged until brought to surface',
          'Immediate skin-to-skin with baby (in or out of water)',
          'Keep baby\'s body in water initially for temperature regulation',
          'Bring baby to surface within 10 seconds of birth'
        ]
      },
      {
        title: 'Circumstances to Exit Pool',
        items: [
          'Fetal distress or heart rate concerns',
          'Excessive bleeding',
          'Maternal exhaustion',
          'Meconium in amniotic fluid',
          'Maternal fever',
          'Prolonged labor or lack of progress',
          'Request for pain medication',
          'Provider recommends exit for safety reasons',
          'Understanding and acceptance of need to exit if necessary'
        ]
      },
      {
        title: 'Delivery of Placenta',
        items: [
          'Exit pool for placenta delivery (recommended)',
          'Or deliver placenta in water if provider comfortable',
          'Monitor for excessive bleeding',
          'Keep baby skin-to-skin during placenta delivery',
          'Delayed cord clamping before cutting'
        ]
      },
      {
        title: 'Immediately After Birth',
        items: [
          'Keep baby warm with towels',
          'Skin-to-skin contact immediately',
          'Delay cord clamping 1-3 minutes',
          'Exit pool after a few moments of bonding',
          'Breastfeeding initiation',
          'Newborn exam after bonding time',
          'Keep room warm for baby'
        ]
      },
      {
        title: 'Newborn Care',
        items: [
          'All standard newborn care as per preferences',
          'Vitamin K: [Accept / Decline / Oral]',
          'Eye ointment: [Accept / Decline / Delay]',
          'Delay bath (baby already "bathed" in birth water)',
          'Rooming-in',
          'Breastfeeding support'
        ]
      }
    ],
    considerations: [
      'Not all hospitals or birth centers offer water birth',
      'Provider must be trained and experienced in water birth',
      'Not suitable for high-risk pregnancies',
      'May need to exit water if complications arise',
      'Water temperature must be carefully monitored',
      'Some providers allow laboring in water but not delivery',
      'Home water birth requires special tub rental or purchase',
      'Risk of infection if water not kept clean',
      'You may not like being in water once labor intensifies',
      'Cannot have epidural if staying in water',
      'Rare risk of baby breathing underwater if not brought up properly'
    ],
    questionsForProvider: [
      'Do you have experience with water births?',
      'How many water births have you attended?',
      'Is there a birth pool available at your facility?',
      'Can I labor in water and deliver on land if I change my mind?',
      'What are your criteria for entering the pool?',
      'What circumstances would require me to exit the pool?',
      'How do you monitor the baby in water?',
      'Who controls the water temperature?',
      'Can my partner get in the water with me?',
      'How is the placenta delivered after water birth?',
      'What safety measures are in place?',
      'Are there additional costs for water birth?'
    ],
    relatedPlans: [
      'natural-birth',
      'home-birth',
      'hospital-birth'
    ]
  },
  {
    slug: 'c-section',
    title: 'C-Section Birth Plan (Planned Cesarean)',
    type: 'Cesarean Section',
    shortDescription: 'A birth plan template for planned cesarean delivery, focusing on family-centered cesarean options.',
    introduction: [
      'A planned cesarean section may be recommended for medical reasons, or you may choose it. Even with surgery, you can still have preferences about your birth experience.',
      'This plan focuses on making the cesarean as family-centered as possible, with immediate bonding, gentle surgical techniques, and clear communication throughout the procedure.'
    ],
    sections: [
      {
        title: 'Pre-Surgery Preparation',
        items: [
          'Partner/support person present in operating room',
          'Explain each step of the procedure',
          'Answer all questions before surgery begins',
          'Meet anesthesiologist in advance',
          'Remove only necessary body hair',
          'Discuss anesthesia options (spinal vs epidural)',
          'IV placement in non-dominant hand if possible',
          'Anti-nausea medication in IV',
          'Clear drape or lower drape to see baby born (if desired)'
        ]
      },
      {
        title: 'During Surgery',
        items: [
          'Partner sits by my head',
          'Screen positioned so I can\'t see surgery details',
          'OR staff to minimize unnecessary conversation',
          'Music playing if allowed',
          'Explain what\'s happening throughout',
          'Gentle, calm atmosphere',
          'Alert me just before baby is delivered',
          'Lower screen briefly so I can see baby emerge (if desired)'
        ]
      },
      {
        title: 'Anesthesia Preferences',
        items: [
          'Spinal or epidural (awake for birth) rather than general anesthesia',
          'Adequate pain relief but able to feel touch and pressure',
          'Anti-nausea medication',
          'Medication to prevent shaking',
          'Partner present during spinal placement if allowed'
        ]
      },
      {
        title: 'Baby\'s Birth Moment',
        items: [
          'Announce baby\'s sex (don\'t tell me in advance)',
          'Lower screen so I can see baby',
          'Deliver baby slowly and gently',
          'Allow partner to watch baby being born',
          'Partner announces baby\'s sex if desired',
          'Baby cries heard immediately',
          'Partner to take photos/video of birth moment'
        ]
      },
      {
        title: 'Immediate After Birth',
        items: [
          'Show me baby immediately',
          'Delay non-urgent newborn procedures',
          'Partner holds baby next to my face for bonding',
          'Skin-to-skin in OR if baby and I are stable (on chest or modified)',
          'If skin-to-skin not possible in OR, partner does skin-to-skin',
          'Take family photos in OR',
          'Keep baby in my sight at all times',
          'Explain baby\'s status clearly'
        ]
      },
      {
        title: 'Newborn Procedures in OR',
        items: [
          'Perform newborn assessment near me where I can see',
          'Delay routine suctioning unless needed',
          'Keep baby warm',
          'Partner stays with baby during assessment',
          'Bring baby to me as soon as possible',
          'Allow me to touch and kiss baby',
          'Delay weighing until recovery room'
        ]
      },
      {
        title: 'Surgical Preferences',
        items: [
          'Low transverse (bikini) incision if possible',
          'Gentle cesarean technique if available',
          'Clear explanation of what surgeon is doing',
          'Careful, gentle tissue handling',
          'Delayed cord clamping if safe (30-60 seconds)',
          'Optimal cord milking if delayed clamping not possible',
          'Allow me to see/save placenta if desired',
          'Photos of surgery if allowed'
        ]
      },
      {
        title: 'Recovery Room',
        items: [
          'Skin-to-skin contact immediately',
          'Attempt breastfeeding as soon as alert',
          'Partner and baby stay with me continuously',
          'Delay routine newborn procedures (bath, measurements)',
          'All newborn procedures performed in recovery room with me',
          'Pain management as needed',
          'Help with positioning for breastfeeding',
          'Privacy for family bonding',
          'Minimal interruptions during first hour'
        ]
      },
      {
        title: 'Postpartum Care',
        items: [
          'Rooming-in (baby stays with me)',
          'Breastfeeding support and lactation consultant',
          'Pain management optimized for breastfeeding',
          'Help with getting up and moving',
          'Catheter removed as soon as safe',
          'IV removed when no longer needed',
          'Regular pain medication on schedule',
          'Stool softeners',
          'Incision care education',
          'Support with holding and caring for baby post-surgery'
        ]
      },
      {
        title: 'Newborn Care',
        items: [
          'Vitamin K injection: Accept',
          'Eye ointment: [Accept / Delay until after first feeding]',
          'Hepatitis B vaccine: [Accept / Delay]',
          'Delay bath at least 12-24 hours',
          'All procedures explained',
          'Breastfeeding exclusively',
          'No pacifiers unless medically necessary',
          'Hearing test before discharge'
        ]
      }
    ],
    considerations: [
      'C-sections are major abdominal surgery with longer recovery',
      'Hospital stay is typically 3-4 days',
      'Pain management is important for healing and caring for baby',
      'Breastfeeding positioning may be more challenging initially',
      'Lifting restrictions for several weeks',
      'Risk of infection, blood clots, and surgical complications',
      'Bonding can take slightly longer due to separation during surgery',
      'May feel disappointed about not having vaginal birth',
      'Future pregnancies may have option for VBAC',
      'Driving restrictions for several weeks'
    ],
    questionsForProvider: [
      'Why is cesarean recommended in my case?',
      'Can you perform a gentle or family-centered cesarean?',
      'Can my partner be present in the OR?',
      'Is skin-to-skin possible in the OR?',
      'Can I see baby being born?',
      'What type of incision will be used?',
      'How long will surgery take?',
      'What anesthesia will be used?',
      'When can I attempt breastfeeding?',
      'How long will I be in the hospital?',
      'What are my VBAC options for future pregnancies?',
      'What pain management will I receive?',
      'When can I get up and walk?',
      'What are signs of complications to watch for?'
    ],
    relatedPlans: [
      'hospital-birth',
      'vbac',
      'high-risk'
    ]
  },
  {
    slug: 'vbac',
    title: 'VBAC Birth Plan (Vaginal Birth After Cesarean)',
    type: 'VBAC',
    shortDescription: 'A birth plan for attempting vaginal birth after previous cesarean section, balancing safety monitoring with VBAC-supportive practices.',
    introduction: [
      'VBAC (Vaginal Birth After Cesarean) gives you the opportunity to experience vaginal birth after a previous cesarean. Many women are candidates for VBAC with proper screening and support.',
      'This plan acknowledges the need for additional monitoring while still supporting your efforts for a vaginal birth. Success rates are 60-80% depending on various factors.'
    ],
    sections: [
      {
        title: 'VBAC Candidacy & Preparation',
        items: [
          'Previous C-section reason: [specify]',
          'Type of uterine incision: [low transverse preferred]',
          'Number of previous cesareans: [specify]',
          'Time since last cesarean: [specify]',
          'Reviewed VBAC risks and benefits with provider',
          'Confirmed as good VBAC candidate',
          'Hospital capable of emergency cesarean',
          'Provider supportive of VBAC attempt',
          'Anesthesia and surgical team available 24/7'
        ]
      },
      {
        title: 'Labor Support Team',
        items: [
          'Partner/spouse for continuous support',
          'Doula experienced with VBAC',
          'Provider who is VBAC-supportive',
          'Support team to provide encouragement',
          'Positive mindset and confidence in my body',
          'Understanding that repeat cesarean may be necessary'
        ]
      },
      {
        title: 'Monitoring Requirements',
        items: [
          'Continuous fetal monitoring required (standard for VBAC)',
          'Wireless monitoring if available to allow movement',
          'Regular vital sign checks',
          'Assessment of uterine activity',
          'Watch for signs of uterine rupture (rare but serious)',
          'IV access required (hep lock acceptable)',
          'Remain at hospital after admission (no home early labor)'
        ]
      },
      {
        title: 'Movement & Positioning',
        items: [
          'Freedom to move and change positions within monitoring requirements',
          'Use of birth ball, peanut ball',
          'Upright positions when possible',
          'Access to shower/tub for comfort (check hospital policy)',
          'Position changes to help labor progress',
          'Squatting bar or rebozo for positioning',
          'Avoid flat on back position'
        ]
      },
      {
        title: 'Pain Management',
        items: [
          'Open to all pain management options',
          'Start with non-medical comfort measures',
          'Epidural available if desired',
          'Pain relief does not equal failure',
          'IV pain medication option',
          'Nitrous oxide if available',
          'Supportive atmosphere regardless of pain relief choice'
        ]
      },
      {
        title: 'Labor Management',
        items: [
          'Allow spontaneous labor to begin (no elective induction if possible)',
          'Avoid or minimize Pitocin (increases rupture risk)',
          'If induction necessary, careful monitoring required',
          'No misoprostol/Cytotec (contraindicated for VBAC)',
          'Mechanical methods for induction if needed (Foley bulb)',
          'Allow adequate time for labor progression',
          'Patience with labor timeline',
          'Position changes before interventions',
          'Discuss all interventions before implementing'
        ]
      },
      {
        title: 'Pushing & Delivery',
        items: [
          'Push when I feel the urge',
          'Choose effective pushing position',
          'Allow time for perineum to stretch',
          'Avoid episiotomy unless necessary',
          'Slow, controlled delivery',
          'Encourage and support during pushing phase',
          'Understanding that prolonged pushing may prompt cesarean evaluation'
        ]
      },
      {
        title: 'Signs Requiring Cesarean',
        items: [
          'Fetal distress not responsive to position changes',
          'Signs or symptoms of uterine rupture',
          'Failure to progress despite adequate contractions',
          'Abnormal bleeding',
          'Immediate explanation of reason for cesarean decision',
          'Quick but calm transfer to OR if needed',
          'Understanding this is not failure but safe birth prioritization'
        ]
      },
      {
        title: 'Successful VBAC - Immediate After',
        items: [
          'Immediate skin-to-skin contact',
          'Delayed cord clamping',
          'Partner cuts cord',
          'Celebration of VBAC success',
          'Breastfeeding within first hour',
          'Deliver placenta naturally',
          'Check incision site from previous cesarean',
          'Photos and quiet bonding time'
        ]
      },
      {
        title: 'If Repeat Cesarean Needed',
        items: [
          'Clear explanation of medical reason',
          'Time to process decision if not emergency',
          'Partner present in OR',
          'Family-centered cesarean approach',
          'Skin-to-skin in OR if possible',
          'Positive support from team',
          'Acknowledgment of effort and courage',
          'Understanding that safe delivery is priority'
        ]
      },
      {
        title: 'Newborn Care',
        items: [
          'Rooming-in regardless of birth method',
          'Immediate skin-to-skin (even after repeat cesarean)',
          'Breastfeeding support',
          'Vitamin K, eye ointment as per standard preferences',
          'Delay routine procedures during bonding',
          'All newborn care explained'
        ]
      }
    ],
    considerations: [
      'VBAC success rate is 60-80% for appropriate candidates',
      'Risk of uterine rupture is less than 1% but serious',
      'Continuous monitoring is required',
      'Must deliver in hospital with emergency surgical capability',
      'Some hospitals and providers don\'t offer VBAC',
      'Pitocin and certain induction methods increase rupture risk',
      'Previous vaginal delivery increases VBAC success rate',
      'Multiple previous cesareans decrease success rate',
      'Emotional preparation for possible repeat cesarean important',
      'VBAC is not "all or nothing" - trying is valuable even if cesarean needed'
    ],
    questionsForProvider: [
      'Am I a good candidate for VBAC?',
      'What is your VBAC success rate?',
      'What factors might require a repeat cesarean?',
      'Is continuous monitoring required?',
      'Can I move around during labor?',
      'What pain relief options are available?',
      'Do you support spontaneous labor start, or would you recommend induction?',
      'What induction methods are safe for VBAC?',
      'How long will you allow labor to progress?',
      'At what point would you recommend cesarean?',
      'Can I try VBAC if I go past my due date?',
      'Is your hospital equipped for emergency cesarean?',
      'How will you monitor for uterine rupture signs?',
      'Will my previous cesarean scar be checked during labor?'
    ],
    relatedPlans: [
      'hospital-birth',
      'c-section',
      'natural-birth'
    ]
  },
  {
    slug: 'induction',
    title: 'Induction Birth Plan',
    type: 'Induced Labor',
    shortDescription: 'A birth plan for medically indicated or electively scheduled labor induction.',
    introduction: [
      'Labor induction involves starting labor artificially using medical methods. It may be medically necessary or electively chosen near your due date.',
      'Induced labor differs from spontaneous labor in intensity and timeline. This plan helps you prepare for and communicate preferences during the induction process.'
    ],
    sections: [
      {
        title: 'Induction Details',
        items: [
          'Reason for induction: [medical indication / elective]',
          'Scheduled date: [date]',
          'Gestational age at induction: [weeks]',
          'Cervical readiness (Bishop score): [if known]',
          'Understanding of induction process',
          'Questions answered before beginning',
          'Realistic expectations about timeline'
        ]
      },
      {
        title: 'Induction Methods',
        items: [
          'Cervical ripening if cervix not favorable',
          'Foley bulb/catheter for mechanical dilation',
          'Prostaglandin gel/insert (Cervidil) if appropriate',
          'Misoprostol if appropriate and no VBAC',
          'Artificial rupture of membranes when cervix favorable',
          'Pitocin for contractions',
          'Preference for most gentle method appropriate for situation',
          'Understanding that multiple methods may be needed',
          'Explain each step before proceeding'
        ]
      },
      {
        title: 'Labor Environment',
        items: [
          'Private labor room',
          'Partner/support person present continuously',
          'Dimmed lighting when possible',
          'My own music',
          'Calm, supportive atmosphere',
          'Minimal unnecessary interruptions',
          'Understanding that hospital stay will be longer'
        ]
      },
      {
        title: 'Monitoring',
        items: [
          'Continuous fetal monitoring (typically required with Pitocin)',
          'Wireless monitoring if available',
          'Regular cervical checks to assess progress',
          'Monitor contraction strength and frequency',
          'Maternal vital signs',
          'IV access required for Pitocin'
        ]
      },
      {
        title: 'Movement & Positioning',
        items: [
          'Freedom to move as much as monitoring allows',
          'Use of birth ball, peanut ball',
          'Position changes to help labor progress',
          'Upright positions when possible',
          'Access to shower between monitoring periods',
          'Out of bed as much as safely possible',
          'Wireless monitoring preferred to allow more movement'
        ]
      },
      {
        title: 'Pain Management',
        items: [
          'Understanding that induced contractions may be more intense',
          'Open to all pain management options',
          'Epidural available when needed (common with induction)',
          'Try comfort measures first',
          'IV pain medication option',
          'Nitrous oxide if available',
          'No judgment about pain relief choices',
          'Pain management does not mean failure'
        ]
      },
      {
        title: 'Pitocin Management',
        items: [
          'Start Pitocin at low dose and increase gradually',
          'Allow time for body to respond to each increase',
          'Monitor for adequate contraction pattern',
          'Reduce or stop Pitocin if concerning fetal heart rate',
          'Understanding that Pitocin can\'t be turned off once labor established',
          'May be able to decrease Pitocin once in active labor'
        ]
      },
      {
        title: 'Timeline & Expectations',
        items: [
          'Understanding induction may take 1-3 days',
          'Patience with the process',
          'Rest between induction methods',
          'Sleep when possible during long induction',
          'Snacks and light food when allowed',
          'Hydration with IV fluids and ice chips',
          'Entertainment for early stages (books, movies)',
          'Support person\'s comfort during long process'
        ]
      },
      {
        title: 'If Induction Not Successful',
        items: [
          'Understand criteria for failed induction',
          'Discussion before moving to cesarean',
          'Time to process decision',
          'Understanding medical reasons',
          'Family-centered cesarean if needed',
          'Emotional support for change in plans'
        ]
      },
      {
        title: 'Pushing & Delivery',
        items: [
          'Push when fully dilated and feeling urge',
          'Choose pushing position',
          'Coached pushing if epidural limits sensation',
          'Allow time for perineum to stretch',
          'Avoid episiotomy unless necessary',
          'Slow, controlled delivery'
        ]
      },
      {
        title: 'Immediately After Birth',
        items: [
          'Immediate skin-to-skin',
          'Delayed cord clamping',
          'Partner cuts cord',
          'Begin breastfeeding within first hour',
          'Allow natural placenta delivery',
          'Bonding time before procedures',
          'Celebration of birth regardless of path'
        ]
      },
      {
        title: 'Newborn Care',
        items: [
          'Standard newborn procedures',
          'Vitamin K injection: Accept',
          'Eye ointment: Accept',
          'Hepatitis B vaccine: [Accept / Delay]',
          'Delay bath 12-24 hours',
          'Rooming-in',
          'Breastfeeding support',
          'All procedures explained'
        ]
      }
    ],
    considerations: [
      'Induction increases likelihood of needing pain medication',
      'Induction increases cesarean risk, especially for first-time mothers',
      'Timeline is unpredictable - may take several days',
      'Requires continuous monitoring',
      'Less mobility due to IV and monitors',
      'May need to try multiple induction methods',
      'Contractions may be more intense than spontaneous labor',
      'Higher risk of fetal distress with Pitocin',
      'Cannot eat during active labor at most hospitals',
      'Longer hospital stay than spontaneous labor'
    ],
    questionsForProvider: [
      'Why is induction recommended in my situation?',
      'What is my Bishop score (cervical readiness)?',
      'What induction method will you start with?',
      'How long will each stage likely take?',
      'What is the success rate for induction at my gestational age?',
      'Can I eat during early induction stages?',
      'Will I need continuous monitoring?',
      'Can I move around during induction?',
      'What pain relief options are available?',
      'At what point would cesarean be recommended?',
      'Can my partner stay overnight?',
      'What if induction doesn\'t work?'
    ],
    relatedPlans: [
      'hospital-birth',
      'c-section',
      'high-risk'
    ]
  },
  {
    slug: 'high-risk',
    title: 'High-Risk Pregnancy Birth Plan',
    type: 'High-Risk',
    shortDescription: 'A birth plan for pregnancies with medical complications requiring additional monitoring and specialized care.',
    introduction: [
      'A high-risk pregnancy requires extra medical attention and monitoring to ensure the safety of both mother and baby. This doesn\'t mean you can\'t have preferences for your birth experience.',
      'This plan balances necessary medical care with your personal preferences, acknowledging that safety is the priority while still advocating for the best possible experience.'
    ],
    sections: [
      {
        title: 'High-Risk Factors',
        items: [
          'Maternal condition(s): [specify - diabetes, hypertension, etc.]',
          'Fetal condition(s): [specify - growth restriction, etc.]',
          'Multiples (twins, triplets)',
          'Advanced maternal age',
          'Previous complications',
          'Understanding of specific risks',
          'Specialists involved in care: [list]',
          'Delivery location: [hospital with NICU / specialized center]'
        ]
      },
      {
        title: 'Specialized Birth Team',
        items: [
          'Maternal-fetal medicine specialist (MFM)',
          'High-risk OB team',
          'Neonatologist on standby',
          'NICU team available',
          'Anesthesiologist aware of medical conditions',
          'Pediatric specialists as needed',
          'Clear communication among all providers',
          'Partner/support person present when allowed'
        ]
      },
      {
        title: 'Enhanced Monitoring',
        items: [
          'Continuous fetal monitoring required',
          'Frequent vital sign checks',
          'Blood glucose monitoring if diabetic',
          'Blood pressure monitoring if hypertensive',
          'IV access for medications/emergency',
          'Additional ultrasounds as needed',
          'Fetal scalp electrode if needed',
          'Internal contraction monitoring if needed',
          'Understanding need for increased monitoring'
        ]
      },
      {
        title: 'Labor Environment',
        items: [
          'Private labor room if available',
          'Partner present when medically safe',
          'Calm atmosphere despite medical equipment',
          'Explain all monitoring equipment and procedures',
          'Music if allowed',
          'Dim lights when possible',
          'Respect my need for emotional support',
          'Updates on baby\'s status regularly'
        ]
      },
      {
        title: 'Movement & Positioning',
        items: [
          'Movement as allowed by medical condition and monitoring',
          'Position changes when safe',
          'Use of peanut ball if bed-bound',
          'Upright positioning if possible',
          'Left side-lying to improve blood flow',
          'Understanding that mobility may be limited',
          'Work within medical restrictions'
        ]
      },
      {
        title: 'Pain Management',
        items: [
          'All pain management options available',
          'Epidural may be recommended early',
          'Epidural preferred if cesarean likely',
          'Pain relief tailored to medical conditions',
          'Anesthesiologist aware of medical history',
          'IV pain medication if appropriate',
          'Non-medical comfort when possible (breathing, visualization)'
        ]
      },
      {
        title: 'Medical Interventions',
        items: [
          'IV fluids as medically required',
          'Medications for specific conditions',
          'Pitocin if augmentation needed',
          'Magnesium sulfate if preeclampsia',
          'Blood glucose management if diabetic',
          'Blood pressure management if needed',
          'Antibiotics if indicated',
          'Explain all medications before administration',
          'Understanding medical necessity may require interventions'
        ]
      },
      {
        title: 'Delivery Approach',
        items: [
          'Vaginal delivery if medically safe',
          'Cesarean if recommended for safety',
          'Early decision-making about delivery method',
          'Timing of delivery may be before due date',
          'Induction may be necessary',
          'Prepared for emergency cesarean if needed',
          'Trust medical team\'s expertise',
          'Family-centered approach when medically possible'
        ]
      },
      {
        title: 'If Cesarean Delivery',
        items: [
          'Partner present if non-emergency',
          'Explain reason for cesarean',
          'Regional anesthesia if possible',
          'See baby immediately if stable',
          'Skin-to-skin if mother and baby stable',
          'Partner with baby if I cannot be',
          'Family-centered cesarean techniques when safe',
          'Photos allowed if non-emergency'
        ]
      },
      {
        title: 'Immediately After Birth',
        items: [
          'Skin-to-skin if baby is stable',
          'Neonatal team to assess baby immediately',
          'Clear explanation of baby\'s condition',
          'NICU transfer if needed - explain reasons',
          'Breastfeeding if medically appropriate',
          'Partner stays with baby if NICU needed',
          'Photos and hand/footprints if baby needs NICU',
          'Support for separation if necessary'
        ]
      },
      {
        title: 'Newborn Care',
        items: [
          'NICU care if medically necessary',
          'Specialized newborn care as needed',
          'Vitamin K: Accept',
          'Eye ointment: Accept',
          'Other medications as medically required',
          'Breastfeeding support even if NICU',
          'Pumping support if baby can\'t breastfeed initially',
          'Frequent updates if baby in NICU',
          'Kangaroo care (skin-to-skin) when medically stable',
          'Involve parents in care decisions when possible'
        ]
      },
      {
        title: 'Postpartum Care',
        items: [
          'Extended monitoring of maternal condition',
          'Medications as required for maternal health',
          'Blood pressure monitoring if hypertensive',
          'Blood glucose monitoring if diabetic',
          'Close observation for postpartum complications',
          'Mental health support',
          'Help with breastfeeding/pumping',
          'Support with NICU baby care',
          'Longer hospital stay if needed',
          'Clear discharge instructions'
        ]
      }
    ],
    considerations: [
      'Safety is the top priority for high-risk pregnancy',
      'Medical interventions are more likely necessary',
      'Cesarean delivery rate is higher',
      'NICU stay may be needed for baby',
      'Continuous monitoring limits mobility',
      'Labor may be induced before due date',
      'More medical staff present at delivery',
      'Longer hospital stay likely',
      'Recovery may be more complex',
      'Emotional support is crucial',
      'Having a healthy baby is what matters most'
    ],
    questionsForProvider: [
      'What specific risks does my condition pose?',
      'What complications are you preparing for?',
      'How will my condition affect labor and delivery?',
      'Is vaginal delivery safe in my situation?',
      'Will I need to be induced early?',
      'What monitoring will be required?',
      'Can I have a support person present?',
      'What is the likelihood of needing a cesarean?',
      'Will my baby need NICU care?',
      'Is there a NICU at your hospital?',
      'What specialists will be involved?',
      'How will you manage my specific condition during labor?',
      'What medications might I need?',
      'What are the signs of complications to watch for?',
      'What can I do to optimize the outcome?'
    ],
    relatedPlans: [
      'hospital-birth',
      'c-section',
      'induction'
    ]
  }
]

export function getBirthPlanData(slug: string): BirthPlanData | undefined {
  return birthPlanData.find((plan) => plan.slug === slug)
}
