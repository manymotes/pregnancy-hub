// Comprehensive pregnancy symptoms data with week-by-week progression
// This file supports 100+ symptoms × 40 weeks = 4000+ pages

export interface SymptomWeekData {
  slug: string
  title: string
  category: 'digestive' | 'pain' | 'physical' | 'emotional' | 'hormonal' | 'skin' | 'circulation' | 'respiratory' | 'urinary' | 'labor-prep'
  shortDescription: string
  commonWeeks: number[] // Weeks when this symptom is most common
  peakWeeks: number[] // Weeks when symptom peaks
  trimesterFrequency: {
    first: string
    second: string
    third: string
  }
  whatCausesIt: string[]
  normalVsConcerning: {
    normal: string[]
    concerning: string[]
  }
  reliefStrategies: string[]
  whenToCallDoctor: string[]
  relatedSymptoms: string[]
  weekSpecificInfo: {
    [week: number]: {
      severity: 'none' | 'mild' | 'moderate' | 'severe'
      description: string
      tips: string[]
    }
  }
}

export const comprehensiveSymptoms: SymptomWeekData[] = [
  // DIGESTIVE SYMPTOMS
  {
    slug: 'nausea',
    title: 'Nausea',
    category: 'digestive',
    shortDescription: 'Feeling of queasiness or upset stomach, often called morning sickness',
    commonWeeks: Array.from({length: 9}, (_, i) => i + 6), // Weeks 6-14
    peakWeeks: [8, 9, 10, 11],
    trimesterFrequency: {
      first: 'Very common - 70-80% of women experience nausea, peaks weeks 8-11',
      second: 'Usually improves by week 14-16, rare after week 20',
      third: 'Uncommon, but may return in final weeks due to stomach pressure'
    },
    whatCausesIt: [
      'Rapidly rising hCG hormone levels',
      'Increased estrogen affecting digestive system',
      'Enhanced sense of smell',
      'Slower stomach emptying from progesterone',
      'Low blood sugar, especially morning',
      'Stress and fatigue'
    ],
    normalVsConcerning: {
      normal: [
        'Nausea that comes and goes',
        'Vomiting 1-2 times per day',
        'Still able to keep some food down',
        'Improves with rest and small meals'
      ],
      concerning: [
        'Unable to keep any food or water down for 24 hours',
        'Vomiting more than 4-5 times daily',
        'Signs of dehydration',
        'Weight loss exceeding 5% of body weight',
        'Blood in vomit'
      ]
    },
    reliefStrategies: [
      'Eat small meals every 2-3 hours',
      'Keep crackers by bedside',
      'Try ginger tea or ginger supplements',
      'Vitamin B6 supplements (consult doctor)',
      'Avoid strong smells and trigger foods',
      'Stay hydrated with small sips',
      'Get fresh air and rest'
    ],
    whenToCallDoctor: [
      'Severe vomiting preventing hydration',
      'Dark urine or dizziness',
      'Unable to keep prenatal vitamins down',
      'Losing weight rapidly',
      'Blood in vomit'
    ],
    relatedSymptoms: ['vomiting', 'food-aversions', 'heartburn', 'fatigue'],
    weekSpecificInfo: {
      6: { severity: 'mild', description: 'Nausea may just be starting, often mild queasiness', tips: ['Start eating smaller meals', 'Avoid empty stomach'] },
      8: { severity: 'moderate', description: 'Peak nausea begins, may feel sick most of the day', tips: ['Ginger supplements', 'B6 vitamins', 'Sea-Bands'] },
      10: { severity: 'severe', description: 'Most intense period, morning sickness at its peak', tips: ['Consider prescription medication if needed', 'Stay hydrated'] },
      14: { severity: 'moderate', description: 'Nausea typically starts improving', tips: ['Continue relief strategies', 'Gradually expand diet'] }
    }
  },
  {
    slug: 'vomiting',
    title: 'Vomiting (Morning Sickness)',
    category: 'digestive',
    shortDescription: 'Actually throwing up, not just feeling nauseous',
    commonWeeks: Array.from({length: 8}, (_, i) => i + 6),
    peakWeeks: [8, 9, 10],
    trimesterFrequency: {
      first: 'Common - affects 50% of women with nausea, peaks weeks 8-10',
      second: 'Usually resolves by week 14, rare after week 16',
      third: 'Very rare unless related to other conditions'
    },
    whatCausesIt: [
      'Severe nausea from hormone surges',
      'Sensitive gag reflex',
      'Strong food aversions',
      'Empty stomach acid irritation'
    ],
    normalVsConcerning: {
      normal: ['1-2 episodes daily', 'Can keep some fluids down', 'Improves with remedies'],
      concerning: ['More than 4 times daily', 'Complete inability to hydrate', 'Blood present', 'Severe weight loss']
    },
    reliefStrategies: [
      'Eat bland foods when possible',
      'Sip water between vomiting episodes',
      'Rest after vomiting',
      'Try anti-nausea medication if prescribed',
      'Avoid triggers'
    ],
    whenToCallDoctor: [
      'Vomiting more than 4 times per day',
      'Signs of dehydration',
      'Unable to keep any liquids down',
      'Ketones in urine',
      'Significant weight loss'
    ],
    relatedSymptoms: ['nausea', 'dehydration', 'food-aversions', 'weight-loss'],
    weekSpecificInfo: {
      8: { severity: 'moderate', description: 'Vomiting may begin or worsen', tips: ['Small sips of clear fluids', 'Ice chips'] },
      10: { severity: 'severe', description: 'Peak vomiting period', tips: ['Contact doctor if severe', 'Consider IV fluids if needed'] }
    }
  },
  {
    slug: 'heartburn',
    title: 'Heartburn & Acid Reflux',
    category: 'digestive',
    shortDescription: 'Burning sensation in chest and throat from stomach acid',
    commonWeeks: Array.from({length: 25}, (_, i) => i + 16), // Weeks 16-40
    peakWeeks: [32, 34, 36, 38],
    trimesterFrequency: {
      first: 'Uncommon in first trimester',
      second: 'Begins mid-second trimester, affects 30-40%',
      third: 'Very common - up to 80% experience it, worsens as baby grows'
    },
    whatCausesIt: [
      'Progesterone relaxing esophageal valve',
      'Growing uterus pushing stomach upward',
      'Slower digestion',
      'Increased stomach pressure',
      'Certain trigger foods'
    ],
    normalVsConcerning: {
      normal: ['Burning after meals', 'Worse lying down', 'Relieved by antacids', 'Occasional discomfort'],
      concerning: ['Severe chest pain', 'Difficulty swallowing', 'Vomiting blood', 'Black stools', 'Weight loss']
    },
    reliefStrategies: [
      'Eat smaller, frequent meals',
      'Avoid spicy, greasy, acidic foods',
      'Don\'t eat 2-3 hours before bed',
      'Sleep with head elevated',
      'Tums or calcium carbonate antacids',
      'Wear loose clothing',
      'Chew gum to increase saliva'
    ],
    whenToCallDoctor: [
      'Severe pain not relieved by antacids',
      'Difficulty swallowing',
      'Vomiting blood',
      'Black, tarry stools',
      'Chest pain with shortness of breath'
    ],
    relatedSymptoms: ['indigestion', 'nausea', 'chest-pain', 'belching'],
    weekSpecificInfo: {
      20: { severity: 'mild', description: 'Heartburn may begin as uterus rises', tips: ['Start avoiding trigger foods'] },
      30: { severity: 'moderate', description: 'More frequent heartburn episodes', tips: ['Elevate head while sleeping', 'Small meals'] },
      36: { severity: 'severe', description: 'Peak heartburn as baby compresses stomach', tips: ['Antacids after meals', 'Sleep propped up'] }
    }
  },
  {
    slug: 'constipation',
    title: 'Constipation',
    category: 'digestive',
    shortDescription: 'Difficulty having bowel movements, hard stools',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1), // Can occur any week
    peakWeeks: [8, 12, 28, 32],
    trimesterFrequency: {
      first: 'Common - 40% affected, iron supplements worsen it',
      second: 'Continues, may worsen with prenatal vitamins',
      third: 'Often worsens as uterus compresses intestines'
    },
    whatCausesIt: [
      'Progesterone slowing digestion',
      'Iron in prenatal vitamins',
      'Growing uterus压pressing intestines',
      'Reduced physical activity',
      'Not enough fiber or water',
      'Hormonal changes'
    ],
    normalVsConcerning: {
      normal: ['Fewer than 3 bowel movements per week', 'Hard, dry stools', 'Straining', 'Bloating'],
      concerning: ['No bowel movement for 5+ days', 'Severe pain', 'Blood in stool', 'Vomiting', 'Alternating with diarrhea']
    },
    reliefStrategies: [
      'Drink 8-10 glasses of water daily',
      'Eat high-fiber foods (fruits, vegetables, whole grains)',
      'Prunes or prune juice',
      'Exercise daily - even walking helps',
      'Take stool softener (Colace) if approved',
      'Try Metamucil or fiber supplements',
      'Don\'t ignore urge to go'
    ],
    whenToCallDoctor: [
      'No bowel movement for 5+ days',
      'Severe abdominal pain',
      'Rectal bleeding',
      'Black stools',
      'Fever with constipation'
    ],
    relatedSymptoms: ['hemorrhoids', 'bloating', 'abdominal-pain', 'gas'],
    weekSpecificInfo: {
      8: { severity: 'moderate', description: 'Constipation common as hormones rise', tips: ['Start high-fiber diet now'] },
      28: { severity: 'moderate', description: 'May worsen as baby grows', tips: ['Increase water intake', 'Daily walking'] }
    }
  },
  {
    slug: 'bloating-gas',
    title: 'Bloating & Gas',
    category: 'digestive',
    shortDescription: 'Abdominal swelling and excessive gas production',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [8, 10, 28, 32],
    trimesterFrequency: {
      first: 'Very common due to progesterone slowing digestion',
      second: 'Continues but may be less noticeable',
      third: 'Often worsens as space for digestion decreases'
    },
    whatCausesIt: [
      'Progesterone relaxing intestinal muscles',
      'Slower digestion and gas buildup',
      'Growing uterus compressing intestines',
      'Swallowing more air',
      'Constipation worsening gas',
      'Certain foods fermenting longer'
    ],
    normalVsConcerning: {
      normal: ['Feeling full and swollen', 'Passing gas frequently', 'Worse after meals', 'Relieved somewhat by passing gas'],
      concerning: ['Severe pain with bloating', 'Unable to pass gas at all', 'Vomiting with severe bloating', 'Fever']
    },
    reliefStrategies: [
      'Eat slowly and chew thoroughly',
      'Avoid gas-producing foods (beans, broccoli, cabbage)',
      'Drink plenty of water',
      'Walk after meals to aid digestion',
      'Avoid carbonated beverages',
      'Eat smaller, more frequent meals',
      'Try over-the-counter simethicone (Gas-X) if approved'
    ],
    whenToCallDoctor: [
      'Severe abdominal pain with bloating',
      'Unable to pass gas for extended period',
      'Vomiting with distension',
      'Fever or chills'
    ],
    relatedSymptoms: ['constipation', 'indigestion', 'abdominal-pain', 'discomfort'],
    weekSpecificInfo: {
      10: { severity: 'moderate', description: 'Bloating peaks with hormone surge', tips: ['Small meals', 'Avoid gas-producing foods'] },
      32: { severity: 'moderate', description: 'Less room for digestion', tips: ['Eat very small portions', 'Walk after eating'] }
    }
  },
  {
    slug: 'food-aversions',
    title: 'Food Aversions',
    category: 'digestive',
    shortDescription: 'Strong dislike or revulsion to certain foods or smells',
    commonWeeks: Array.from({length: 10}, (_, i) => i + 6),
    peakWeeks: [8, 9, 10],
    trimesterFrequency: {
      first: 'Very common - 60-70% of women develop aversions',
      second: 'Usually improves significantly',
      third: 'Rare, most aversions have resolved'
    },
    whatCausesIt: [
      'Heightened sense of smell from estrogen',
      'Nausea making certain foods unappealing',
      'Evolutionary protection mechanism',
      'Hormone fluctuations',
      'Changed taste perception'
    ],
    normalVsConcerning: {
      normal: ['Dislike of previously favorite foods', 'Triggered by smell', 'Multiple aversions', 'Improves over time'],
      concerning: ['Unable to eat any foods', 'Severe weight loss', 'Dehydration from aversions', 'Aversions preventing nutrition']
    },
    reliefStrategies: [
      'Eat whatever you can tolerate',
      'Try cold foods with less odor',
      'Avoid cooking smells if they trigger nausea',
      'Focus on bland, simple foods',
      'Don\'t force yourself to eat trigger foods',
      'Small frequent meals',
      'Try foods at room temperature'
    ],
    whenToCallDoctor: [
      'Unable to eat adequate nutrition',
      'Significant weight loss',
      'Dehydration from inability to eat',
      'Aversions preventing vitamin intake'
    ],
    relatedSymptoms: ['nausea', 'vomiting', 'smell-sensitivity', 'taste-changes'],
    weekSpecificInfo: {
      8: { severity: 'moderate', description: 'Aversions peak, even favorite foods may be intolerable', tips: ['Eat whatever stays down', 'Don\'t worry about nutrition temporarily'] },
      14: { severity: 'mild', description: 'Aversions beginning to improve', tips: ['Gradually reintroduce foods'] }
    }
  },

  // PAIN SYMPTOMS
  {
    slug: 'back-pain',
    title: 'Back Pain',
    category: 'pain',
    shortDescription: 'Lower back aching and discomfort',
    commonWeeks: Array.from({length: 25}, (_, i) => i + 16),
    peakWeeks: [28, 32, 36, 38],
    trimesterFrequency: {
      first: 'Uncommon in early pregnancy',
      second: 'Begins as belly grows, affects 30-40%',
      third: 'Very common - 50-70% experience it, worsens with size'
    },
    whatCausesIt: [
      'Growing uterus shifting center of gravity',
      'Additional weight strain on spine',
      'Hormone relaxin loosening ligaments',
      'Postural changes',
      'Weakened abdominal muscles',
      'Stress and tension'
    ],
    normalVsConcerning: {
      normal: ['Dull, aching pain', 'Worse after standing/sitting long', 'Improves with rest', 'Both sides affected'],
      concerning: ['Severe, constant pain', 'Fever with back pain', 'Vaginal bleeding', 'Numbness in legs', 'Pain with urination']
    },
    reliefStrategies: [
      'Practice good posture',
      'Wear pregnancy support belt',
      'Low-heeled, supportive shoes',
      'Sleep with pillow between knees',
      'Prenatal yoga and stretching',
      'Swimming for low-impact exercise',
      'Apply heat or cold packs',
      'Prenatal massage',
      'Avoid heavy lifting'
    ],
    whenToCallDoctor: [
      'Severe pain that doesn\'t improve',
      'Numbness or weakness in legs',
      'Back pain with vaginal bleeding',
      'Fever with back pain',
      'Rhythmic back pain (contractions)'
    ],
    relatedSymptoms: ['sciatica', 'round-ligament-pain', 'pelvic-pain', 'hip-pain'],
    weekSpecificInfo: {
      20: { severity: 'mild', description: 'Back pain may begin as posture changes', tips: ['Start wearing support belt', 'Focus on posture'] },
      32: { severity: 'severe', description: 'Peak back pain as baby is large', tips: ['Frequent rest breaks', 'Sleep with pillow support'] }
    }
  },
  {
    slug: 'sciatica',
    title: 'Sciatica (Nerve Pain)',
    category: 'pain',
    shortDescription: 'Sharp pain radiating from lower back down leg',
    commonWeeks: Array.from({length: 20}, (_, i) => i + 21),
    peakWeeks: [30, 32, 34, 36],
    trimesterFrequency: {
      first: 'Very rare in first trimester',
      second: 'Can begin late second trimester',
      third: 'Common - affects 30% as baby presses sciatic nerve'
    },
    whatCausesIt: [
      'Baby\'s position压pressing sciatic nerve',
      'Uterus weight on pelvic nerves',
      'Inflamed sciatic nerve',
      'Postural changes pinching nerve',
      'Swelling around nerve'
    ],
    normalVsConcerning: {
      normal: ['Sharp, shooting pain down one leg', 'Numbness or tingling', 'Worse with certain positions', 'Improves with movement'],
      concerning: ['Complete numbness in leg', 'Loss of bladder/bowel control', 'Weakness preventing walking', 'Both legs affected severely']
    },
    reliefStrategies: [
      'Change positions frequently',
      'Sleep on opposite side of pain',
      'Prenatal chiropractor adjustments',
      'Physical therapy exercises',
      'Warm compress on lower back',
      'Gentle stretching',
      'Swimming or water exercises',
      'Avoid sitting/standing too long'
    ],
    whenToCallDoctor: [
      'Complete loss of sensation',
      'Unable to walk or bear weight',
      'Loss of bladder control',
      'Severe, unrelenting pain',
      'Weakness in leg progressively worsening'
    ],
    relatedSymptoms: ['back-pain', 'leg-numbness', 'pelvic-pain', 'hip-pain'],
    weekSpecificInfo: {
      28: { severity: 'moderate', description: 'Sciatica may begin as baby grows', tips: ['Start stretching exercises', 'Try different sleeping positions'] },
      34: { severity: 'severe', description: 'Peak sciatica as baby engages in pelvis', tips: ['See chiropractor', 'Physical therapy'] }
    }
  },
  {
    slug: 'round-ligament-pain',
    title: 'Round Ligament Pain',
    category: 'pain',
    shortDescription: 'Sharp pain in lower abdomen or groin from stretching ligaments',
    commonWeeks: Array.from({length: 18}, (_, i) => i + 14),
    peakWeeks: [18, 20, 22, 24],
    trimesterFrequency: {
      first: 'Rare before week 14',
      second: 'Very common - sharp pains as ligaments stretch rapidly',
      third: 'Less common as stretching slows, but can continue'
    },
    whatCausesIt: [
      'Round ligaments stretching to support growing uterus',
      'Sudden movements pulling ligaments',
      'Uterus position and weight',
      'Rapid growth spurts',
      'Ligaments thinning and elongating'
    ],
    normalVsConcerning: {
      normal: ['Sharp, brief pain', 'Triggered by movement', 'One or both sides', 'Lasts seconds to minutes'],
      concerning: ['Constant severe pain', 'Pain with fever', 'Vaginal bleeding', 'Regular contractions', 'Pain with vomiting']
    },
    reliefStrategies: [
      'Move slowly and deliberately',
      'Support belly when moving',
      'Bend hips before coughing/sneezing',
      'Wear maternity support belt',
      'Warm compress to area',
      'Change positions slowly',
      'Rest when pain occurs',
      'Prenatal yoga for flexibility'
    ],
    whenToCallDoctor: [
      'Severe, persistent pain',
      'Pain with fever or chills',
      'Vaginal bleeding with pain',
      'Regular contractions',
      'Unable to walk from pain'
    ],
    relatedSymptoms: ['abdominal-pain', 'groin-pain', 'cramping', 'pelvic-pressure'],
    weekSpecificInfo: {
      18: { severity: 'moderate', description: 'Peak round ligament stretching', tips: ['Move slowly', 'Support belly'] },
      24: { severity: 'mild', description: 'Ligaments have stretched, pain lessens', tips: ['Continue slow movements'] }
    }
  },
  {
    slug: 'headaches',
    title: 'Headaches',
    category: 'pain',
    shortDescription: 'Head pain ranging from mild to severe',
    commonWeeks: Array.from({length: 12}, (_, i) => i + 6),
    peakWeeks: [8, 10],
    trimesterFrequency: {
      first: 'Common - hormonal surges cause frequent headaches',
      second: 'Usually improve as hormones stabilize',
      third: 'Can return, may indicate high blood pressure if severe'
    },
    whatCausesIt: [
      'Hormone fluctuations',
      'Increased blood volume',
      'Dehydration',
      'Caffeine withdrawal',
      'Stress and fatigue',
      'Poor posture',
      'Low blood sugar',
      'Sinus congestion'
    ],
    normalVsConcerning: {
      normal: ['Tension-type headache', 'Improves with rest', 'Responds to Tylenol', 'Occasional occurrence'],
      concerning: ['Severe, sudden headache', 'Headache with vision changes', 'Headache with swelling', 'Persistent despite treatment', 'Migraine with aura']
    },
    reliefStrategies: [
      'Rest in dark, quiet room',
      'Stay hydrated - drink plenty of water',
      'Cold compress on forehead',
      'Warm compress on neck',
      'Acetaminophen (Tylenol) if approved',
      'Gentle head/neck massage',
      'Practice relaxation techniques',
      'Eat regular meals',
      'Avoid triggers'
    ],
    whenToCallDoctor: [
      'Severe, sudden "thunderclap" headache',
      'Headache with blurred vision or spots',
      'Headache with swelling of hands/face',
      'Headache with high blood pressure',
      'Persistent headache not responding to treatment',
      'Headache with fever or stiff neck'
    ],
    relatedSymptoms: ['dizziness', 'vision-changes', 'nausea', 'fatigue'],
    weekSpecificInfo: {
      8: { severity: 'moderate', description: 'Hormone surge headaches peak', tips: ['Stay hydrated', 'Rest often'] },
      16: { severity: 'mild', description: 'Headaches usually improving', tips: ['Continue healthy habits'] }
    }
  },
  {
    slug: 'breast-pain',
    title: 'Breast Tenderness & Pain',
    category: 'pain',
    shortDescription: 'Sore, sensitive breasts',
    commonWeeks: Array.from({length: 10}, (_, i) => i + 4),
    peakWeeks: [6, 8, 10],
    trimesterFrequency: {
      first: 'Very common - one of earliest symptoms, 75% affected',
      second: 'Usually improves significantly',
      third: 'May return as breasts prepare for breastfeeding'
    },
    whatCausesIt: [
      'Estrogen and progesterone surges',
      'Breast tissue expanding',
      'Milk ducts developing',
      'Increased blood flow',
      'Fat layer building up',
      'Breast growth'
    ],
    normalVsConcerning: {
      normal: ['Both breasts tender', 'Sensitive to touch', 'Swelling and heaviness', 'Darkening areolas'],
      concerning: ['Severe pain in one breast', 'Red, hot area', 'Hard lump', 'Nipple discharge (bloody)', 'Fever with breast pain']
    },
    reliefStrategies: [
      'Wear supportive, well-fitting bra',
      'Sleep in comfortable sleep bra',
      'Cold or warm compresses',
      'Avoid caffeine',
      'Gentle breast massage',
      'Loose-fitting clothing',
      'Get professionally fitted for maternity bras'
    ],
    whenToCallDoctor: [
      'Severe pain in one breast only',
      'Hard lump or mass',
      'Red, hot, inflamed area',
      'Bloody nipple discharge',
      'Fever with breast pain'
    ],
    relatedSymptoms: ['nipple-sensitivity', 'breast-changes', 'fatigue'],
    weekSpecificInfo: {
      6: { severity: 'moderate', description: 'Breast tenderness peaks early', tips: ['Get supportive bras', 'Apply cold compresses'] },
      14: { severity: 'mild', description: 'Tenderness improving', tips: ['Continue wearing supportive bras'] }
    }
  },
  {
    slug: 'pelvic-pain',
    title: 'Pelvic Pain & Pressure',
    category: 'pain',
    shortDescription: 'Pain or pressure in pelvic area',
    commonWeeks: Array.from({length: 15}, (_, i) => i + 26),
    peakWeeks: [34, 36, 38, 39],
    trimesterFrequency: {
      first: 'Rare except for round ligament pain',
      second: 'Can begin late second trimester',
      third: 'Common as baby drops into pelvis, especially week 36+'
    },
    whatCausesIt: [
      'Baby\'s weight pressing on pelvis',
      'Baby dropping into birth position',
      'Relaxin hormone loosening pelvic joints',
      'Symphysis pubis dysfunction (SPD)',
      'Pressure on pelvic nerves',
      'Increased blood flow to pelvis'
    ],
    normalVsConcerning: {
      normal: ['Pressure feeling when standing', 'Discomfort walking', 'Feels like baby will fall out', 'Worse at end of day'],
      concerning: ['Severe, constant pain', 'Unable to walk', 'Pain with fever', 'Vaginal bleeding', 'Regular contractions']
    },
    reliefStrategies: [
      'Wear pregnancy support belt',
      'Rest with feet elevated',
      'Avoid standing long periods',
      'Sleep with pillow between legs',
      'Prenatal chiropractor or physical therapy',
      'Pelvic floor exercises',
      'Warm bath for relief',
      'Avoid heavy lifting'
    ],
    whenToCallDoctor: [
      'Unable to walk from pain',
      'Severe, constant pelvic pain',
      'Pain with vaginal bleeding',
      'Pain with fluid leakage',
      'Regular contractions before 37 weeks'
    ],
    relatedSymptoms: ['lightning-crotch', 'back-pain', 'sciatica', 'pelvic-pressure'],
    weekSpecificInfo: {
      32: { severity: 'moderate', description: 'Pelvic pressure begins as baby grows', tips: ['Support belt', 'Frequent rest'] },
      38: { severity: 'severe', description: 'Baby engaged, significant pressure', tips: ['Limit walking', 'Rest often', 'Physical therapy'] }
    }
  },
  {
    slug: 'hip-pain',
    title: 'Hip Pain',
    category: 'pain',
    shortDescription: 'Pain in hip joints, often worse at night',
    commonWeeks: Array.from({length: 20}, (_, i) => i + 21),
    peakWeeks: [32, 34, 36],
    trimesterFrequency: {
      first: 'Rare in first trimester',
      second: 'Can begin as weight increases',
      third: 'Common - relaxin loosening joints, extra weight'
    },
    whatCausesIt: [
      'Relaxin hormone loosening hip joints',
      'Extra weight stressing hips',
      'Sleeping on side straining hips',
      'Changed posture',
      'Baby\'s position',
      'Widening pelvis preparation for birth'
    ],
    normalVsConcerning: {
      normal: ['Aching after activity', 'Worse at night from sleeping', 'Both hips affected', 'Improves with stretching'],
      concerning: ['Severe pain preventing movement', 'Pain with fever', 'Sudden severe pain', 'Inability to bear weight']
    },
    reliefStrategies: [
      'Sleep with pillow between knees',
      'Use pregnancy pillow for full support',
      'Prenatal yoga hip openers',
      'Swimming for low-impact exercise',
      'Avoid crossing legs',
      'Wear supportive shoes',
      'Apply heat to hips',
      'Gentle stretching',
      'Prenatal massage focusing on hips'
    ],
    whenToCallDoctor: [
      'Severe pain preventing walking',
      'Sudden, intense hip pain',
      'Fever with hip pain',
      'Numbness in leg',
      'Hip pain with swelling'
    ],
    relatedSymptoms: ['back-pain', 'sciatica', 'pelvic-pain', 'leg-pain'],
    weekSpecificInfo: {
      28: { severity: 'mild', description: 'Hip pain may begin', tips: ['Start using pregnancy pillow', 'Hip stretches'] },
      34: { severity: 'moderate', description: 'Hip joints loosening, more pain', tips: ['Sleep with pillow support', 'Warm baths'] }
    }
  },
  {
    slug: 'leg-cramps',
    title: 'Leg Cramps (Charley Horses)',
    category: 'pain',
    shortDescription: 'Painful muscle spasms in calves, often at night',
    commonWeeks: Array.from({length: 25}, (_, i) => i + 16),
    peakWeeks: [28, 30, 32, 34],
    trimesterFrequency: {
      first: 'Rare in early pregnancy',
      second: 'Begin appearing, especially at night',
      third: 'Very common - 50% experience nighttime cramps'
    },
    whatCausesIt: [
      'Extra weight on leg muscles',
      'Uterus压pressing blood vessels',
      'Calcium or magnesium imbalance',
      'Dehydration',
      'Fatigue from carrying weight',
      'Poor circulation',
      'Reduced physical activity'
    ],
    normalVsConcerning: {
      normal: ['Sudden calf cramp', 'Occurs at night', 'Both legs affected occasionally', 'Releases with stretching'],
      concerning: ['Constant pain in one leg', 'Leg swelling with pain', 'Redness and warmth', 'Pain not releasing']
    },
    reliefStrategies: [
      'Stretch calf: straighten leg, flex foot toward shin',
      'Stand and walk when cramp occurs',
      'Massage cramping muscle',
      'Apply heat after cramp',
      'Stretch calves before bed',
      'Stay hydrated',
      'Increase calcium and magnesium foods',
      'Wear compression socks',
      'Elevate legs when resting'
    ],
    whenToCallDoctor: [
      'Persistent calf pain',
      'One leg swollen, red, warm',
      'Pain with shortness of breath',
      'Cramps extremely frequent',
      'Pain not relieving with stretching'
    ],
    relatedSymptoms: ['leg-swelling', 'restless-legs', 'foot-pain', 'numbness'],
    weekSpecificInfo: {
      24: { severity: 'mild', description: 'Leg cramps may begin', tips: ['Start stretching before bed', 'Stay hydrated'] },
      32: { severity: 'moderate', description: 'Frequent nighttime cramps', tips: ['Magnesium supplements if approved', 'Compression socks'] }
    }
  },
  {
    slug: 'abdominal-pain',
    title: 'Abdominal Pain & Cramping',
    category: 'pain',
    shortDescription: 'General abdominal discomfort or cramping',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [18, 20, 34, 36],
    trimesterFrequency: {
      first: 'Mild cramping common as uterus expands',
      second: 'Round ligament pain, growing pains',
      third: 'Braxton Hicks, baby movements, general discomfort'
    },
    whatCausesIt: [
      'Uterus expanding and stretching',
      'Round ligament pain',
      'Gas and bloating',
      'Constipation',
      'Baby movements and kicks',
      'Braxton Hicks contractions',
      'Muscle separation (diastasis)'
    ],
    normalVsConcerning: {
      normal: ['Mild, intermittent cramping', 'Brief sharp pains with movement', 'Relieved by rest or position change', 'No bleeding'],
      concerning: ['Severe, constant pain', 'Pain with vaginal bleeding', 'Regular contractions before 37 weeks', 'Pain with fever', 'Pain with vomiting']
    },
    reliefStrategies: [
      'Rest and change positions',
      'Warm bath or heating pad',
      'Empty bladder regularly',
      'Stay hydrated',
      'Gentle movement and stretching',
      'Avoid gas-producing foods',
      'Eat smaller meals',
      'Practice relaxation breathing'
    ],
    whenToCallDoctor: [
      'Severe, constant abdominal pain',
      'Pain with vaginal bleeding',
      'Regular contractions before 37 weeks',
      'Pain with fever or chills',
      'Pain with vomiting or diarrhea',
      'Pain with shoulder pain (ectopic concern early pregnancy)'
    ],
    relatedSymptoms: ['cramping', 'round-ligament-pain', 'braxton-hicks', 'constipation'],
    weekSpecificInfo: {
      10: { severity: 'mild', description: 'Mild cramping as uterus grows', tips: ['Rest when cramping', 'Stay hydrated'] },
      20: { severity: 'moderate', description: 'Round ligament pains common', tips: ['Move slowly', 'Support belly'] },
      36: { severity: 'moderate', description: 'Braxton Hicks and baby pressure', tips: ['Practice breathing', 'Rest often'] }
    }
  },
  {
    slug: 'rib-pain',
    title: 'Rib Pain & Soreness',
    category: 'pain',
    shortDescription: 'Pain in ribs from baby pushing upward',
    commonWeeks: Array.from({length: 12}, (_, i) => i + 29),
    peakWeeks: [34, 36, 37],
    trimesterFrequency: {
      first: 'Does not occur',
      second: 'Rare, only in very late second trimester',
      third: 'Common - baby pushing up under ribs causes discomfort'
    },
    whatCausesIt: [
      'Baby\'s position under rib cage',
      'Baby\'s kicks and movements',
      'Uterus pressing upward',
      'Rib cage expanding',
      'Baby\'s head or bottom lodged under ribs',
      'Reduced lung space'
    ],
    normalVsConcerning: {
      normal: ['Sharp pain with baby kicks', 'Aching under ribs', 'Worse when sitting', 'One side affected'],
      concerning: ['Severe pain with shortness of breath', 'Pain with fever', 'Pain with swelling', 'Pain radiating to shoulder']
    },
    reliefStrategies: [
      'Raise arms overhead to lift baby',
      'Change positions frequently',
      'Sit up straight to create space',
      'Avoid slouching',
      'Sleep semi-reclined',
      'Gentle stretching',
      'Cold compress if inflamed',
      'Wear loose clothing'
    ],
    whenToCallDoctor: [
      'Severe pain with difficulty breathing',
      'Pain with high blood pressure',
      'Pain with vision changes',
      'Persistent severe pain',
      'Pain with abdominal rigidity'
    ],
    relatedSymptoms: ['shortness-of-breath', 'chest-discomfort', 'back-pain'],
    weekSpecificInfo: {
      32: { severity: 'mild', description: 'Baby may begin pushing on ribs', tips: ['Good posture', 'Raise arms to shift baby'] },
      36: { severity: 'severe', description: 'Peak rib discomfort before baby drops', tips: ['Sleep propped up', 'Frequent position changes'] }
    }
  },

  // PHYSICAL SYMPTOMS
  {
    slug: 'fatigue',
    title: 'Fatigue & Exhaustion',
    category: 'physical',
    shortDescription: 'Overwhelming tiredness and lack of energy',
    commonWeeks: [...Array.from({length: 14}, (_, i) => i + 1), ...Array.from({length: 13}, (_, i) => i + 28)],
    peakWeeks: [8, 10, 34, 38],
    trimesterFrequency: {
      first: 'Severe - most women experience overwhelming exhaustion',
      second: 'Usually improves, "golden period" with more energy',
      third: 'Returns as weight increases and sleep is disrupted'
    },
    whatCausesIt: [
      'Progesterone acting as sedative',
      'Body building placenta',
      'Increased blood production',
      'Lower blood pressure and sugar',
      'Increased metabolism',
      'Poor sleep quality',
      'Iron deficiency anemia',
      'Carrying extra weight'
    ],
    normalVsConcerning: {
      normal: ['Feeling very tired', 'Needing naps', 'Less energy than usual', 'Improves with rest'],
      concerning: ['Extreme exhaustion with dizziness', 'Fatigue with shortness of breath', 'Severe fatigue with pale skin', 'Unable to do any activities']
    },
    reliefStrategies: [
      'Sleep 8-10 hours nightly',
      'Take short naps when possible',
      'Eat iron-rich foods',
      'Stay hydrated',
      'Light exercise like walking',
      'Reduce commitments',
      'Ask for help',
      'Eat small, frequent meals',
      'Take prenatal vitamins'
    ],
    whenToCallDoctor: [
      'Extreme exhaustion preventing daily activities',
      'Fatigue with dizziness or fainting',
      'Shortness of breath with fatigue',
      'Fatigue with pale skin or cold extremities',
      'No improvement in second trimester'
    ],
    relatedSymptoms: ['weakness', 'dizziness', 'anemia', 'insomnia'],
    weekSpecificInfo: {
      8: { severity: 'severe', description: 'Peak first trimester exhaustion', tips: ['Nap daily if possible', 'Don\'t fight fatigue'] },
      20: { severity: 'mild', description: 'Energy usually returns', tips: ['Enjoy this energy period', 'Stay active'] },
      36: { severity: 'severe', description: 'Third trimester fatigue returns', tips: ['Rest frequently', 'Early bedtime'] }
    }
  },
  {
    slug: 'swelling',
    title: 'Swelling (Edema)',
    category: 'physical',
    shortDescription: 'Fluid retention in feet, ankles, hands, face',
    commonWeeks: Array.from({length: 19}, (_, i) => i + 22),
    peakWeeks: [34, 36, 38, 39],
    trimesterFrequency: {
      first: 'Rare in first trimester',
      second: 'Begins late second trimester in some women',
      third: 'Very common - 75% experience swelling, especially feet/ankles'
    },
    whatCausesIt: [
      'Extra fluid production (50% more)',
      'Uterus压pressing on veins',
      'Gravity pulling fluid to legs',
      'Hormones retaining sodium',
      'Hot weather',
      'Standing/sitting too long',
      'High sodium diet'
    ],
    normalVsConcerning: {
      normal: ['Gradual swelling of feet/ankles', 'Worse at end of day', 'Both sides equal', 'Improves with elevation'],
      concerning: ['Sudden severe swelling', 'Face and hands swelling rapidly', 'One leg only swollen', 'Swelling with severe headache', 'Swelling with vision changes']
    },
    reliefStrategies: [
      'Elevate feet above heart level',
      'Avoid standing/sitting too long',
      'Sleep on left side',
      'Wear compression stockings',
      'Stay hydrated (counterintuitive but helps)',
      'Reduce sodium intake',
      'Swim or stand in pool',
      'Wear comfortable shoes',
      'Exercise daily'
    ],
    whenToCallDoctor: [
      'Sudden, severe swelling',
      'Swelling with severe headache',
      'Swelling with vision changes',
      'One leg swollen more than other',
      'Rapid weight gain (>4 lbs in week)',
      'Swelling with abdominal pain'
    ],
    relatedSymptoms: ['leg-pain', 'carpal-tunnel', 'weight-gain', 'high-blood-pressure'],
    weekSpecificInfo: {
      26: { severity: 'mild', description: 'Swelling may begin', tips: ['Start elevating feet', 'Compression socks'] },
      36: { severity: 'severe', description: 'Peak swelling, especially in heat', tips: ['Elevate often', 'Stay cool', 'Monitor for preeclampsia signs'] }
    }
  },
  {
    slug: 'frequent-urination',
    title: 'Frequent Urination',
    category: 'urinary',
    shortDescription: 'Need to urinate more often, day and night',
    commonWeeks: [...Array.from({length: 12}, (_, i) => i + 1), ...Array.from({length: 13}, (_, i) => i + 28)],
    peakWeeks: [8, 10, 36, 38],
    trimesterFrequency: {
      first: 'Very common - frequent trips to bathroom day and night',
      second: 'Improves as uterus rises out of pelvis',
      third: 'Returns and worsens as baby drops and presses bladder'
    },
    whatCausesIt: [
      'Increased blood volume',
      'Kidneys filtering more efficiently',
      'hCG hormone effects',
      'Uterus压pressing bladder',
      'Baby\'s head on bladder',
      'Increased fluid intake'
    ],
    normalVsConcerning: {
      normal: ['Frequent urge to urinate', 'Small amounts each time', 'Clear urine', 'No pain'],
      concerning: ['Burning or pain when urinating', 'Bloody urine', 'Cloudy or foul-smelling urine', 'Fever with urination', 'Unable to empty bladder']
    },
    reliefStrategies: [
      'Lean forward when urinating to empty completely',
      'Do Kegel exercises',
      'Limit fluids before bedtime',
      'Avoid caffeine and carbonated drinks',
      'Don\'t hold it - go when you feel urge',
      'Double void - urinate, wait, try again',
      'Wear panty liners if leaking'
    ],
    whenToCallDoctor: [
      'Burning or pain when urinating',
      'Blood in urine',
      'Fever with urinary symptoms',
      'Unable to urinate despite urge',
      'Constant leaking (possible water break)',
      'Urinating significantly less than normal'
    ],
    relatedSymptoms: ['urinary-leakage', 'bladder-pressure', 'uti', 'pelvic-pressure'],
    weekSpecificInfo: {
      8: { severity: 'moderate', description: 'Frequent bathroom trips begin', tips: ['Map bathroom locations', 'Limit evening fluids'] },
      20: { severity: 'mild', description: 'Improved as uterus rises', tips: ['Enjoy this relief period'] },
      38: { severity: 'severe', description: 'Baby on bladder, very frequent', tips: ['Kegels', 'Go before leaving house'] }
    }
  },
  {
    slug: 'shortness-of-breath',
    title: 'Shortness of Breath',
    category: 'respiratory',
    shortDescription: 'Difficulty catching your breath',
    commonWeeks: Array.from({length: 25}, (_, i) => i + 16),
    peakWeeks: [32, 34, 36],
    trimesterFrequency: {
      first: 'Mild breathlessness can occur from increased metabolism',
      second: 'Worsens as uterus rises',
      third: 'Common - uterus pressing on diaphragm, less lung space'
    },
    whatCausesIt: [
      'Uterus pushing up on diaphragm',
      'Progesterone increasing respiration',
      'Increased oxygen needs',
      'Reduced lung capacity',
      'Growing baby taking up space',
      'Anemia reducing oxygen'
    ],
    normalVsConcerning: {
      normal: ['Breathless after stairs or activity', 'Feeling "can\'t get deep breath"', 'Worse when lying flat', 'Improves with rest'],
      concerning: ['Severe difficulty breathing', 'Breathless at rest', 'Rapid breathing or rapid heart rate', 'Chest pain with breathlessness', 'Lips or fingertips turning blue']
    },
    reliefStrategies: [
      'Sit up straight to create lung space',
      'Sleep propped up on pillows',
      'Move slowly, take breaks',
      'Practice slow, deep breathing',
      'Avoid overexertion',
      'Stay cool',
      'Treat anemia if present',
      'Raise arms overhead to lift baby'
    ],
    whenToCallDoctor: [
      'Severe difficulty breathing',
      'Breathless at rest',
      'Rapid heart rate or chest pain',
      'Blue lips or fingertips',
      'Coughing up blood',
      'Wheezing or severe asthma'
    ],
    relatedSymptoms: ['chest-tightness', 'dizziness', 'rapid-heartbeat', 'anemia'],
    weekSpecificInfo: {
      24: { severity: 'mild', description: 'Breathlessness beginning', tips: ['Good posture', 'Slow down'] },
      34: { severity: 'severe', description: 'Peak breathlessness before baby drops', tips: ['Sleep propped up', 'Rest often', 'Raise arms'] }
    }
  },
  {
    slug: 'dizziness',
    title: 'Dizziness & Lightheadedness',
    category: 'physical',
    shortDescription: 'Feeling faint, unsteady, or room spinning',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [8, 10, 12, 28],
    trimesterFrequency: {
      first: 'Common - blood pressure drops, blood sugar fluctuates',
      second: 'Improves but can still occur',
      third: 'Returns as baby压presses major blood vessels'
    },
    whatCausesIt: [
      'Lower blood pressure',
      'Blood pooling in legs',
      'Low blood sugar',
      'Dehydration',
      'Anemia',
      'Standing up too quickly',
      'Hot environment',
      'Baby压pressing vena cava when lying on back'
    ],
    normalVsConcerning: {
      normal: ['Occasional lightheadedness', 'Dizzy when standing quickly', 'Improves with sitting/eating', 'Brief episodes'],
      concerning: ['Severe dizziness with fainting', 'Dizziness with vaginal bleeding', 'Dizziness with severe headache', 'Persistent, severe dizziness']
    },
    reliefStrategies: [
      'Stand up slowly from sitting/lying',
      'Eat small, frequent meals',
      'Stay hydrated',
      'Avoid lying flat on back after 20 weeks',
      'Sit or lie down when dizzy',
      'Wear compression stockings',
      'Avoid hot environments',
      'Don\'t skip meals'
    ],
    whenToCallDoctor: [
      'Fainting or loss of consciousness',
      'Dizziness with vaginal bleeding',
      'Dizziness with severe headache',
      'Dizziness with chest pain',
      'Persistent, severe dizziness',
      'Dizziness with vision changes'
    ],
    relatedSymptoms: ['fainting', 'low-blood-pressure', 'anemia', 'headaches'],
    weekSpecificInfo: {
      10: { severity: 'moderate', description: 'Dizziness common from blood pressure changes', tips: ['Rise slowly', 'Stay hydrated'] },
      28: { severity: 'moderate', description: 'Dizziness from baby压pressing vessels', tips: ['Sleep on left side', 'Avoid lying on back'] }
    }
  },
  {
    slug: 'insomnia',
    title: 'Insomnia & Sleep Problems',
    category: 'physical',
    shortDescription: 'Difficulty falling asleep or staying asleep',
    commonWeeks: [...Array.from({length: 8}, (_, i) => i + 6), ...Array.from({length: 13}, (_, i) => i + 28)],
    peakWeeks: [10, 34, 38],
    trimesterFrequency: {
      first: 'Common - frequent urination and discomfort wake you',
      second: 'Usually improves, better sleep quality',
      third: 'Very common - difficulty getting comfortable, frequent waking'
    },
    whatCausesIt: [
      'Frequent need to urinate',
      'Physical discomfort',
      'Baby movements',
      'Leg cramps',
      'Heartburn',
      'Anxiety about pregnancy/parenthood',
      'Hormone fluctuations',
      'Unable to find comfortable position'
    ],
    normalVsConcerning: {
      normal: ['Difficulty falling asleep', 'Waking multiple times', 'Trouble getting comfortable', 'Racing thoughts'],
      concerning: ['Complete inability to sleep', 'Insomnia with severe anxiety/depression', 'Excessive daytime sleepiness affecting safety']
    },
    reliefStrategies: [
      'Establish bedtime routine',
      'Go to bed same time nightly',
      'Use pregnancy pillow for support',
      'Sleep on left side',
      'Avoid screens before bed',
      'Light snack before bed',
      'Limit fluids evening',
      'Relaxation techniques',
      'Cool, dark room',
      'Gentle prenatal yoga'
    ],
    whenToCallDoctor: [
      'Insomnia with severe anxiety or depression',
      'Complete inability to sleep affecting daily function',
      'Excessive daytime sleepiness',
      'Insomnia with other concerning symptoms'
    ],
    relatedSymptoms: ['fatigue', 'anxiety', 'restless-legs', 'discomfort'],
    weekSpecificInfo: {
      10: { severity: 'moderate', description: 'Sleep disrupted by bathroom trips', tips: ['Limit evening fluids', 'Bedtime routine'] },
      36: { severity: 'severe', description: 'Very difficult to get comfortable', tips: ['Pregnancy pillow essential', 'Multiple pillows', 'Semi-reclined position'] }
    }
  },
  {
    slug: 'breast-changes',
    title: 'Breast Changes & Growth',
    category: 'hormonal',
    shortDescription: 'Breast enlargement, darkening, visible veins',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [8, 10, 32, 36],
    trimesterFrequency: {
      first: 'Significant - breasts grow, become tender, areolas darken',
      second: 'Continued growth, veins visible, colostrum may leak',
      third: 'Further enlargement, preparing for breastfeeding'
    },
    whatCausesIt: [
      'Estrogen and progesterone',
      'Milk ducts developing',
      'Increased blood flow',
      'Fat accumulation',
      'Prolactin stimulating milk production',
      'Breast tissue expanding'
    ],
    normalVsConcerning: {
      normal: ['Growing 1-3 cup sizes', 'Darkening areolas', 'Visible blue veins', 'Colostrum leaking', 'Montgomery tubercles'],
      concerning: ['Hard, painful lump', 'Red, hot area', 'Severe pain one breast', 'Bloody nipple discharge', 'Skin dimpling']
    },
    reliefStrategies: [
      'Wear supportive maternity bras',
      'Get fitted professionally',
      'Sleep in comfortable bra',
      'Use breast pads for leaking',
      'Avoid underwire bras',
      'Gentle breast massage',
      'Keep breasts clean and dry'
    ],
    whenToCallDoctor: [
      'Hard lump that doesn\'t move',
      'Red, hot, inflamed area',
      'Bloody discharge',
      'Severe pain in one breast',
      'Skin changes or dimpling',
      'Inverted nipple that wasn\'t before'
    ],
    relatedSymptoms: ['breast-pain', 'nipple-sensitivity', 'colostrum-leaking'],
    weekSpecificInfo: {
      8: { severity: 'moderate', description: 'Rapid breast growth and tenderness', tips: ['Get supportive bras', 'Expect size changes'] },
      32: { severity: 'moderate', description: 'Breasts preparing for breastfeeding', tips: ['Breast pads for leaking', 'Nursing bras'] }
    }
  },
  {
    slug: 'vaginal-discharge',
    title: 'Increased Vaginal Discharge',
    category: 'physical',
    shortDescription: 'More vaginal discharge than usual (leukorrhea)',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [20, 24, 36, 38],
    trimesterFrequency: {
      first: 'Increases from pre-pregnancy levels',
      second: 'Continues to increase, often significant',
      third: 'Heavy discharge, mucus plug may come out near end'
    },
    whatCausesIt: [
      'Increased estrogen levels',
      'Increased blood flow to pelvic area',
      'Cervix producing more mucus',
      'Body protecting against infection',
      'Preparing birth canal'
    ],
    normalVsConcerning: {
      normal: ['White or clear discharge', 'Mild odor or odorless', 'Thin consistency', 'Increases over pregnancy'],
      concerning: ['Green, yellow, or gray color', 'Foul smell', 'Cottage cheese texture', 'Itching or burning', 'Blood-tinged (except mucus plug)', 'Watery gush (water breaking)']
    },
    reliefStrategies: [
      'Wear panty liners',
      'Change underwear frequently',
      'Wear cotton underwear',
      'Avoid douching',
      'Wipe front to back',
      'Keep area clean and dry',
      'Avoid scented products'
    ],
    whenToCallDoctor: [
      'Discharge with foul odor',
      'Green, yellow, or gray discharge',
      'Itching or burning',
      'Watery gush (possible water breaking)',
      'Blood-tinged before 37 weeks',
      'Cottage cheese texture (yeast infection)'
    ],
    relatedSymptoms: ['yeast-infection', 'mucus-plug', 'itching', 'odor'],
    weekSpecificInfo: {
      20: { severity: 'mild', description: 'Discharge noticeably increasing', tips: ['Panty liners', 'Cotton underwear'] },
      38: { severity: 'moderate', description: 'Heavy discharge, mucus plug may release', tips: ['Normal to lose mucus plug', 'Watch for water breaking'] }
    }
  },
  {
    slug: 'itchy-skin',
    title: 'Itchy Skin',
    category: 'skin',
    shortDescription: 'Skin itchiness, especially on belly',
    commonWeeks: Array.from({length: 28}, (_, i) => i + 13),
    peakWeeks: [28, 32, 36],
    trimesterFrequency: {
      first: 'Uncommon in first trimester',
      second: 'Begins as belly stretches',
      third: 'Common - 20% experience itching, especially belly'
    },
    whatCausesIt: [
      'Skin stretching rapidly',
      'Hormonal changes',
      'Increased blood flow',
      'Dry skin from hormones',
      'Stretching causing micro-tears',
      'Rarely: cholestasis of pregnancy'
    ],
    normalVsConcerning: {
      normal: ['Itchy belly from stretching', 'Dry skin itchiness', 'Relieved by moisturizing', 'No rash'],
      concerning: ['Severe itching on palms/soles', 'Itching all over body', 'Itching with jaundice', 'Itching not relieved by moisturizer', 'Itching with rash']
    },
    reliefStrategies: [
      'Moisturize frequently with fragrance-free lotion',
      'Apply lotion to damp skin',
      'Use gentle, fragrance-free soap',
      'Take lukewarm (not hot) showers',
      'Wear soft, loose clothing',
      'Use humidifier',
      'Avoid scratching',
      'Oatmeal baths',
      'Cold compresses'
    ],
    whenToCallDoctor: [
      'Severe itching on palms and soles',
      'Itching all over body',
      'Itching with yellowing skin/eyes',
      'Itching not relieved by moisturizer',
      'Rash with itching',
      'Dark urine with itching'
    ],
    relatedSymptoms: ['stretch-marks', 'dry-skin', 'rash', 'cholestasis'],
    weekSpecificInfo: {
      24: { severity: 'mild', description: 'Belly itching as skin stretches', tips: ['Moisturize multiple times daily', 'Avoid hot showers'] },
      34: { severity: 'moderate', description: 'Peak itching from maximum stretching', tips: ['Oatmeal baths', 'Cold compresses', 'Report severe itching to doctor'] }
    }
  },
  {
    slug: 'stretch-marks',
    title: 'Stretch Marks',
    category: 'skin',
    shortDescription: 'Pink, red, or purple lines on skin',
    commonWeeks: Array.from({length: 25}, (_, i) => i + 16),
    peakWeeks: [28, 32, 36],
    trimesterFrequency: {
      first: 'Rare - usually don\'t appear yet',
      second: 'Begin appearing on belly, breasts, thighs',
      third: 'Very common - 50-90% develop stretch marks'
    },
    whatCausesIt: [
      'Rapid skin stretching',
      'Genetic predisposition',
      'Hormone effects on skin',
      'Rapid weight gain',
      'Skin collagen and elastin tearing',
      'Cortisol levels affecting skin'
    ],
    normalVsConcerning: {
      normal: ['Pink, red, or purple lines', 'On belly, breasts, thighs, hips', 'Slightly raised initially', 'Fade to silvery after pregnancy'],
      concerning: ['Usually no concerning signs - cosmetic issue only']
    },
    reliefStrategies: [
      'Moisturize skin frequently',
      'Stay hydrated',
      'Gradual, steady weight gain',
      'Eat nutrient-rich diet',
      'Vitamin E oil or cream',
      'Cocoa butter or shea butter',
      'Accept they\'re largely genetic',
      'Know they fade significantly postpartum'
    ],
    whenToCallDoctor: [
      'Rarely needs medical attention - cosmetic only'
    ],
    relatedSymptoms: ['itchy-skin', 'dry-skin', 'weight-gain'],
    weekSpecificInfo: {
      24: { severity: 'mild', description: 'Stretch marks may begin appearing', tips: ['Moisturize regularly', 'Gradual weight gain'] },
      34: { severity: 'moderate', description: 'Stretch marks more visible', tips: ['They\'ll fade after birth', 'Genetics play big role'] }
    }
  },
  {
    slug: 'skin-darkening',
    title: 'Skin Darkening (Melasma, Linea Nigra)',
    category: 'skin',
    shortDescription: 'Darker skin patches on face, dark line on belly',
    commonWeeks: Array.from({length: 28}, (_, i) => i + 13),
    peakWeeks: [24, 28, 32],
    trimesterFrequency: {
      first: 'Minimal changes',
      second: 'Linea nigra appears, melasma may develop',
      third: 'More pronounced darkening, areolas very dark'
    },
    whatCausesIt: [
      'Increased melanin production',
      'Hormones stimulating pigment cells',
      'Sun exposure worsening it',
      'Genetic factors'
    ],
    normalVsConcerning: {
      normal: ['Dark line down belly (linea nigra)', 'Darker areolas and nipples', 'Face darkening (melasma)', 'Darker freckles/moles', 'Resolves after pregnancy'],
      concerning: ['Rapidly changing or irregular mole', 'Painful skin changes', 'Bleeding from mole']
    },
    reliefStrategies: [
      'Use sunscreen daily (SPF 30+)',
      'Wear hat when outdoors',
      'Avoid tanning',
      'Don\'t use bleaching creams during pregnancy',
      'Accept as temporary',
      'Fades significantly after delivery'
    ],
    whenToCallDoctor: [
      'Rapidly changing or irregular mole',
      'New mole that looks unusual',
      'Bleeding or painful mole',
      'Any concerning skin changes'
    ],
    relatedSymptoms: ['melasma', 'linea-nigra', 'darker-nipples'],
    weekSpecificInfo: {
      20: { severity: 'mild', description: 'Linea nigra may appear', tips: ['Sunscreen daily', 'Will fade postpartum'] },
      32: { severity: 'moderate', description: 'Maximum skin darkening', tips: ['Avoid sun', 'Temporary condition'] }
    }
  },
  {
    slug: 'acne',
    title: 'Acne & Skin Changes',
    category: 'skin',
    shortDescription: 'Pregnancy acne or clearer skin',
    commonWeeks: Array.from({length: 14}, (_, i) => i + 6),
    peakWeeks: [8, 10, 12],
    trimesterFrequency: {
      first: 'Common - hormones cause breakouts or improvement',
      second: 'Usually improves',
      third: 'Generally better than first trimester'
    },
    whatCausesIt: [
      'Hormone fluctuations',
      'Increased oil production',
      'Stress',
      'Some women get clearer skin from pregnancy hormones'
    ],
    normalVsConcerning: {
      normal: ['Increased breakouts', 'Oilier skin', 'Or much clearer skin', 'Temporary changes'],
      concerning: ['Severe cystic acne', 'Painful, infected acne', 'Rash-like breakout']
    },
    reliefStrategies: [
      'Gentle, fragrance-free cleanser',
      'Avoid harsh scrubs',
      'Oil-free, non-comedogenic products',
      'Don\'t pick or pop',
      'Clean pillowcases frequently',
      'Stay hydrated',
      'Avoid most acne medications (not safe)',
      'Consult doctor for safe treatments'
    ],
    whenToCallDoctor: [
      'Severe cystic acne',
      'Painful, infected acne',
      'Considering any acne medication',
      'Sudden severe outbreak'
    ],
    relatedSymptoms: ['oily-skin', 'hormonal-changes'],
    weekSpecificInfo: {
      10: { severity: 'moderate', description: 'Peak acne from hormone surge', tips: ['Gentle cleansing', 'Don\'t use retinoids'] },
      20: { severity: 'mild', description: 'Skin usually improving', tips: ['Maintain gentle routine'] }
    }
  },

  // HORMONAL/EMOTIONAL SYMPTOMS
  {
    slug: 'mood-swings',
    title: 'Mood Swings',
    category: 'emotional',
    shortDescription: 'Rapid emotional changes, crying easily',
    commonWeeks: [...Array.from({length: 12}, (_, i) => i + 1), ...Array.from({length: 13}, (_, i) => i + 28)],
    peakWeeks: [8, 10, 34, 38],
    trimesterFrequency: {
      first: 'Very common - hormones cause emotional volatility',
      second: 'Usually improves',
      third: 'Returns as anxiety about birth increases'
    },
    whatCausesIt: [
      'Dramatic hormone fluctuations',
      'Estrogen and progesterone effects on brain',
      'Fatigue and discomfort',
      'Anxiety about pregnancy/parenthood',
      'Stress and life changes',
      'Sleep deprivation'
    ],
    normalVsConcerning: {
      normal: ['Crying easily', 'Happy then sad quickly', 'More emotional than usual', 'Irritability'],
      concerning: ['Persistent sadness >2 weeks', 'Thoughts of self-harm', 'Unable to function', 'Severe anxiety', 'No interest in anything']
    },
    reliefStrategies: [
      'Accept emotions as normal',
      'Talk about feelings',
      'Get adequate rest',
      'Exercise regularly',
      'Practice relaxation',
      'Connect with support system',
      'Prenatal yoga',
      'Journaling',
      'Professional counseling if needed'
    ],
    whenToCallDoctor: [
      'Persistent sadness >2 weeks',
      'Thoughts of harming self or baby',
      'Severe anxiety interfering with life',
      'Unable to perform daily activities',
      'Loss of interest in everything',
      'Panic attacks'
    ],
    relatedSymptoms: ['anxiety', 'depression', 'irritability', 'crying'],
    weekSpecificInfo: {
      10: { severity: 'moderate', description: 'Peak mood swings from hormones', tips: ['Talk about feelings', 'Rest when possible'] },
      36: { severity: 'moderate', description: 'Anxiety about birth increasing', tips: ['Prenatal classes', 'Talk to provider'] }
    }
  },
  {
    slug: 'anxiety',
    title: 'Anxiety & Worry',
    category: 'emotional',
    shortDescription: 'Excessive worrying, nervousness, fear',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [10, 12, 20, 36, 38],
    trimesterFrequency: {
      first: 'Common - worry about miscarriage, baby health',
      second: 'Often improves, "honeymoon period"',
      third: 'Increases - anxiety about labor, parenting'
    },
    whatCausesIt: [
      'Hormonal changes',
      'Fear about pregnancy outcome',
      'Worry about baby\'s health',
      'Concerns about labor pain',
      'Financial stress',
      'Life changes ahead',
      'Previous pregnancy loss',
      'Feeling out of control'
    ],
    normalVsConcerning: {
      normal: ['Occasional worry', 'Nervousness about appointments', 'Concerns about birth', 'Manageable anxiety'],
      concerning: ['Constant, uncontrollable worry', 'Panic attacks', 'Can\'t sleep from anxiety', 'Physical symptoms (rapid heart rate)', 'Avoiding activities']
    },
    reliefStrategies: [
      'Prenatal yoga and meditation',
      'Deep breathing exercises',
      'Share concerns with provider',
      'Join support groups',
      'Limit anxiety-triggering content',
      'Exercise regularly',
      'Talk to partner/friends',
      'Professional therapy',
      'Limit caffeine',
      'Adequate sleep'
    ],
    whenToCallDoctor: [
      'Panic attacks',
      'Anxiety preventing daily activities',
      'Can\'t sleep from worry',
      'Physical symptoms (racing heart, shortness of breath)',
      'Thoughts of self-harm',
      'Anxiety worsening despite coping strategies'
    ],
    relatedSymptoms: ['mood-swings', 'depression', 'insomnia', 'stress'],
    weekSpecificInfo: {
      12: { severity: 'moderate', description: 'Anxiety about first trimester risks', tips: ['Talk to doctor', 'First trimester screening reassuring'] },
      38: { severity: 'severe', description: 'Labor anxiety peaks', tips: ['Childbirth classes', 'Birth plan', 'Talk to provider'] }
    }
  },
  {
    slug: 'depression',
    title: 'Prenatal Depression',
    category: 'emotional',
    shortDescription: 'Persistent sadness, loss of interest, hopelessness',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [8, 12, 28, 32],
    trimesterFrequency: {
      first: 'Can begin, affects 10-20% of pregnant women',
      second: 'Can continue or develop',
      third: 'Risk continues, especially with stressors'
    },
    whatCausesIt: [
      'Hormonal changes',
      'Previous history of depression',
      'Lack of support',
      'Stressful life events',
      'Unplanned pregnancy',
      'Relationship problems',
      'Financial stress',
      'Previous pregnancy loss'
    ],
    normalVsConcerning: {
      normal: ['Occasional sadness', 'Hormonal crying', 'Mood swings that pass'],
      concerning: ['Sadness lasting >2 weeks', 'Loss of interest in everything', 'Hopelessness', 'Thoughts of self-harm', 'Unable to care for yourself', 'No enjoyment in anything']
    },
    reliefStrategies: [
      'Talk to healthcare provider immediately',
      'Therapy/counseling',
      'Support groups',
      'Exercise (with approval)',
      'Adequate sleep',
      'Nutritious diet',
      'Social connection',
      'Medication if prescribed (some are safe)',
      'Light therapy',
      'Don\'t isolate yourself'
    ],
    whenToCallDoctor: [
      'Persistent sadness >2 weeks',
      'Loss of interest in activities',
      'Thoughts of harming yourself or baby',
      'Unable to perform daily tasks',
      'Excessive guilt or worthlessness',
      'Significant changes in sleep/appetite',
      'Difficulty bonding with pregnancy'
    ],
    relatedSymptoms: ['anxiety', 'mood-swings', 'fatigue', 'insomnia'],
    weekSpecificInfo: {
      10: { severity: 'moderate', description: 'Prenatal depression can develop', tips: ['Screen for depression', 'Get help early'] },
      28: { severity: 'moderate', description: 'Monitor for worsening mood', tips: ['Continue treatment', 'Therapy', 'Support'] }
    }
  },
  {
    slug: 'forgetfulness',
    title: 'Forgetfulness (Pregnancy Brain)',
    category: 'emotional',
    shortDescription: 'Memory lapses, difficulty concentrating',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [10, 28, 36],
    trimesterFrequency: {
      first: 'Begins - "pregnancy brain" starts',
      second: 'Continues',
      third: 'Often worsens - exhaustion contributes'
    },
    whatCausesIt: [
      'Hormonal effects on brain',
      'Fatigue and sleep deprivation',
      'Stress and distraction',
      'Brain changes preparing for motherhood',
      'Increased focus on pregnancy/baby',
      'Multitasking pregnancy concerns'
    ],
    normalVsConcerning: {
      normal: ['Forgetting appointments', 'Losing keys/phone', 'Difficulty concentrating', 'Word-finding problems', 'Absent-mindedness'],
      concerning: ['Severe memory loss', 'Getting lost in familiar places', 'Confusion', 'Personality changes']
    },
    reliefStrategies: [
      'Write everything down',
      'Use phone reminders/alarms',
      'Keep items in same place',
      'Make lists',
      'Accept it\'s normal and temporary',
      'Get adequate sleep',
      'Don\'t overcommit',
      'Laugh about it',
      'Ask for reminders'
    ],
    whenToCallDoctor: [
      'Severe confusion',
      'Getting lost',
      'Personality changes',
      'Memory loss affecting safety'
    ],
    relatedSymptoms: ['fatigue', 'difficulty-concentrating', 'stress'],
    weekSpecificInfo: {
      12: { severity: 'mild', description: 'Pregnancy brain beginning', tips: ['Start using lists and reminders'] },
      36: { severity: 'moderate', description: 'Forgetfulness worsening', tips: ['Write everything down', 'It\'s temporary'] }
    }
  },
  {
    slug: 'vivid-dreams',
    title: 'Vivid Dreams & Nightmares',
    category: 'emotional',
    shortDescription: 'Intense, memorable, sometimes disturbing dreams',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [28, 32, 36],
    trimesterFrequency: {
      first: 'Can begin',
      second: 'Common',
      third: 'Very common - 70% report vivid dreams'
    },
    whatCausesIt: [
      'Hormonal changes',
      'Frequent night waking (remember dreams more)',
      'Anxiety about pregnancy/parenthood',
      'Subconscious processing fears',
      'Increased REM sleep',
      'Stress'
    ],
    normalVsConcerning: {
      normal: ['Vivid, memorable dreams', 'Dreams about baby/pregnancy', 'Occasionally disturbing', 'Wake up remembering'],
      concerning: ['Nightmares preventing sleep', 'Severe anxiety from dreams', 'Nightmares with PTSD symptoms']
    },
    reliefStrategies: [
      'Understand they\'re normal',
      'Talk about dreams',
      'Relaxation before bed',
      'Limit stress',
      'Avoid disturbing content before sleep',
      'Write dreams down if helpful',
      'Remember they don\'t predict future'
    ],
    whenToCallDoctor: [
      'Nightmares preventing sleep',
      'Severe anxiety from dreams',
      'Signs of PTSD',
      'Dreams affecting mental health'
    ],
    relatedSymptoms: ['insomnia', 'anxiety', 'stress'],
    weekSpecificInfo: {
      28: { severity: 'mild', description: 'Vivid dreams increasing', tips: ['Normal and common', 'Talk about them'] },
      36: { severity: 'moderate', description: 'Very vivid or disturbing dreams', tips: ['Relaxation before bed', 'They don\'t predict outcome'] }
    }
  },

  // CIRCULATION SYMPTOMS
  {
    slug: 'varicose-veins',
    title: 'Varicose Veins',
    category: 'circulation',
    shortDescription: 'Swollen, twisted veins visible under skin',
    commonWeeks: Array.from({length: 22}, (_, i) => i + 19),
    peakWeeks: [30, 34, 38],
    trimesterFrequency: {
      first: 'Rare',
      second: 'Can begin appearing',
      third: 'Common - 40% develop varicose veins, especially legs'
    },
    whatCausesIt: [
      'Increased blood volume',
      'Progesterone relaxing vein walls',
      'Uterus压pressing pelvic veins',
      'Extra weight on legs',
      'Genetics',
      'Standing long periods'
    ],
    normalVsConcerning: {
      normal: ['Visible blue/purple veins', 'Bulging veins on legs', 'Aching legs', 'Worse after standing'],
      concerning: ['Severe pain in leg', 'Red, hot, hard vein', 'Bleeding from varicose vein', 'Ulcer near vein']
    },
    reliefStrategies: [
      'Wear compression stockings',
      'Elevate legs frequently',
      'Avoid standing/sitting too long',
      'Exercise regularly',
      'Sleep on left side',
      'Avoid crossing legs',
      'Stay at healthy weight',
      'Don\'t wear tight clothing'
    ],
    whenToCallDoctor: [
      'Severe leg pain',
      'Red, hot, hard vein',
      'Bleeding from vein',
      'Ulcer developing',
      'Signs of blood clot'
    ],
    relatedSymptoms: ['leg-swelling', 'leg-pain', 'hemorrhoids', 'spider-veins'],
    weekSpecificInfo: {
      26: { severity: 'mild', description: 'Varicose veins may appear', tips: ['Compression stockings', 'Elevate legs'] },
      36: { severity: 'moderate', description: 'More prominent veins', tips: ['Continue support stockings', 'Usually improve postpartum'] }
    }
  },
  {
    slug: 'hemorrhoids',
    title: 'Hemorrhoids',
    category: 'circulation',
    shortDescription: 'Swollen veins in rectum, painful',
    commonWeeks: Array.from({length: 25}, (_, i) => i + 16),
    peakWeeks: [32, 36, 38, 39],
    trimesterFrequency: {
      first: 'Can develop from constipation',
      second: 'More common as uterus grows',
      third: 'Very common - 50% affected, worsens with pushing during delivery'
    },
    whatCausesIt: [
      'Constipation and straining',
      'Increased blood volume',
      'Uterus压pressing pelvic veins',
      'Progesterone relaxing veins',
      'Extra weight',
      'Prolonged sitting'
    ],
    normalVsConcerning: {
      normal: ['Itching or pain', 'Small bleeding with bowel movement', 'External bumps', 'Discomfort sitting'],
      concerning: ['Severe pain', 'Heavy bleeding', 'Prolapsed hemorrhoid', 'Thrombosed (clotted) hemorrhoid']
    },
    reliefStrategies: [
      'Prevent constipation - fiber, water',
      'Don\'t strain during bowel movements',
      'Sit in warm sitz bath',
      'Apply ice packs',
      'Use witch hazel pads',
      'Hemorrhoid cream if approved',
      'Don\'t sit too long',
      'Keep area clean',
      'Sleep on side'
    ],
    whenToCallDoctor: [
      'Severe pain',
      'Heavy rectal bleeding',
      'Hemorrhoid won\'t go back inside',
      'Signs of thrombosis (very painful, blue)',
      'Not improving with treatment'
    ],
    relatedSymptoms: ['constipation', 'rectal-pain', 'bleeding', 'varicose-veins'],
    weekSpecificInfo: {
      24: { severity: 'mild', description: 'Hemorrhoids may develop', tips: ['Prevent constipation', 'Don\'t strain'] },
      38: { severity: 'severe', description: 'Hemorrhoids often worst', tips: ['Sitz baths', 'Witch hazel', 'Will improve postpartum'] }
    }
  },
  {
    slug: 'carpal-tunnel',
    title: 'Carpal Tunnel Syndrome',
    category: 'circulation',
    shortDescription: 'Numbness, tingling in hands and fingers',
    commonWeeks: Array.from({length: 18}, (_, i) => i + 23),
    peakWeeks: [32, 34, 36, 38],
    trimesterFrequency: {
      first: 'Rare',
      second: 'Can begin late second trimester',
      third: 'Common - 25% experience it, fluid retention压pressing nerves'
    },
    whatCausesIt: [
      'Fluid retention压pressing median nerve',
      'Swelling in wrist',
      'Hormones affecting tissues',
      'Repetitive hand motions',
      'Sleeping position compressing wrist'
    ],
    normalVsConcerning: {
      normal: ['Numbness in thumb/fingers', 'Tingling in hands', 'Worse at night', 'Both hands affected', 'Weakness gripping'],
      concerning: ['Severe pain', 'Complete numbness', 'Inability to use hand', 'Symptoms not improving postpartum']
    },
    reliefStrategies: [
      'Wear wrist splints at night',
      'Shake hands to relieve numbness',
      'Avoid sleeping on hands',
      'Elevate hands',
      'Avoid repetitive motions',
      'Take breaks from typing',
      'Apply cold packs',
      'Hand/wrist exercises'
    ],
    whenToCallDoctor: [
      'Severe pain',
      'Complete loss of sensation',
      'Unable to use hand',
      'Symptoms interfering with activities',
      'Sudden onset'
    ],
    relatedSymptoms: ['hand-swelling', 'numbness', 'tingling', 'swelling'],
    weekSpecificInfo: {
      28: { severity: 'mild', description: 'Carpal tunnel may begin', tips: ['Wrist splints at night', 'Elevate hands'] },
      36: { severity: 'moderate', description: 'Peak carpal tunnel symptoms', tips: ['Splints', 'Limit repetitive motions', 'Usually resolves postpartum'] }
    }
  },
  {
    slug: 'nosebleeds',
    title: 'Nosebleeds & Nasal Congestion',
    category: 'respiratory',
    shortDescription: 'Bloody noses, stuffy nose',
    commonWeeks: Array.from({length: 40}, (_, i) => i + 1),
    peakWeeks: [20, 24, 28],
    trimesterFrequency: {
      first: 'Can begin',
      second: 'Common - increased blood flow to nasal passages',
      third: 'Continues'
    },
    whatCausesIt: [
      'Increased blood volume',
      'Hormones causing nasal swelling',
      'Dry air',
      'Increased blood flow to mucous membranes',
      'Sensitive nasal passages',
      'Blowing nose frequently'
    ],
    normalVsConcerning: {
      normal: ['Occasional nosebleeds', 'Stuffy nose', 'Brief bleeding', 'Stops with pressure'],
      concerning: ['Frequent, heavy nosebleeds', 'Nosebleed lasting >20 minutes', 'Nosebleed with high blood pressure', 'Difficulty breathing']
    },
    reliefStrategies: [
      'Pinch nose for 10 minutes',
      'Lean forward (not back)',
      'Use humidifier',
      'Apply saline nasal spray',
      'Petroleum jelly inside nostrils',
      'Stay hydrated',
      'Avoid picking nose',
      'Blow gently'
    ],
    whenToCallDoctor: [
      'Nosebleed lasting >20 minutes',
      'Frequent, heavy nosebleeds',
      'Difficulty breathing',
      'Nosebleed with high blood pressure',
      'Dizziness with nosebleed'
    ],
    relatedSymptoms: ['nasal-congestion', 'sinus-pressure', 'snoring'],
    weekSpecificInfo: {
      20: { severity: 'mild', description: 'Nosebleeds can become frequent', tips: ['Humidifier', 'Saline spray', 'Petroleum jelly'] },
      32: { severity: 'mild', description: 'Continuing nosebleeds common', tips: ['Stay hydrated', 'Manage dry air'] }
    }
  },

  // LABOR PREPARATION SYMPTOMS
  {
    slug: 'braxton-hicks',
    title: 'Braxton Hicks Contractions',
    category: 'labor-prep',
    shortDescription: 'Practice contractions, tightening of uterus',
    commonWeeks: Array.from({length: 15}, (_, i) => i + 26),
    peakWeeks: [35, 36, 37, 38, 39],
    trimesterFrequency: {
      first: 'Does not occur',
      second: 'Can begin late second trimester',
      third: 'Common - practice contractions preparing for labor'
    },
    whatCausesIt: [
      'Uterus practicing for labor',
      'Dehydration',
      'Full bladder',
      'Physical activity',
      'Baby movements',
      'Sexual activity',
      'Normal pregnancy process'
    ],
    normalVsConcerning: {
      normal: ['Irregular tightening', 'No pattern', 'Stop with rest/hydration', 'Not painful', 'No cervical change'],
      concerning: ['Regular pattern', 'Increasing intensity', 'Before 37 weeks with pattern', 'Painful contractions', 'With bleeding or fluid']
    },
    reliefStrategies: [
      'Drink water - dehydration triggers them',
      'Empty bladder',
      'Rest or change position',
      'Take warm bath',
      'Practice breathing exercises',
      'Relaxation',
      'Don\'t worry - they\'re normal'
    ],
    whenToCallDoctor: [
      'Regular contractions before 37 weeks',
      'More than 4-6 per hour before 37 weeks',
      'Painful, increasing contractions',
      'Contractions with vaginal bleeding',
      'Contractions with fluid leakage',
      'Can\'t tell if Braxton Hicks or real labor'
    ],
    relatedSymptoms: ['pelvic-pressure', 'back-pain', 'cramping', 'tightening'],
    weekSpecificInfo: {
      28: { severity: 'mild', description: 'Braxton Hicks may begin', tips: ['Stay hydrated', 'Rest when they occur'] },
      38: { severity: 'moderate', description: 'Frequent practice contractions', tips: ['Normal preparation', 'Time them if wondering about labor'] }
    }
  },
  {
    slug: 'lightning-crotch',
    title: 'Lightning Crotch',
    category: 'labor-prep',
    shortDescription: 'Sharp, shooting pains in vagina/pelvis',
    commonWeeks: Array.from({length: 10}, (_, i) => i + 31),
    peakWeeks: [36, 37, 38, 39],
    trimesterFrequency: {
      first: 'Does not occur',
      second: 'Rare',
      third: 'Common as baby drops and presses on nerves'
    },
    whatCausesIt: [
      'Baby\'s head压pressing pelvic nerves',
      'Baby dropping into pelvis',
      'Cervix dilating/effacing',
      'Baby movements hitting nerves',
      'Ligaments stretching'
    ],
    normalVsConcerning: {
      normal: ['Sharp, shooting pain', 'Brief (seconds)', 'Triggered by movement', 'Sudden and intense'],
      concerning: ['Constant severe pain', 'Pain with bleeding', 'Pain with fluid leakage', 'Pain with contractions']
    },
    reliefStrategies: [
      'Change positions',
      'Support belly',
      'Move slowly',
      'Wear pregnancy belt',
      'Rest when it occurs',
      'Pelvic tilts',
      'Avoid sudden movements',
      'Know it\'s temporary'
    ],
    whenToCallDoctor: [
      'Constant severe pain',
      'Pain with vaginal bleeding',
      'Pain with fluid leakage',
      'Pain with regular contractions',
      'Unable to walk from pain'
    ],
    relatedSymptoms: ['pelvic-pressure', 'pelvic-pain', 'baby-dropping'],
    weekSpecificInfo: {
      36: { severity: 'moderate', description: 'Lightning crotch as baby engages', tips: ['Normal sign baby dropping', 'Move carefully'] },
      39: { severity: 'moderate', description: 'Frequent sharp pains', tips: ['Labor may be approaching', 'Continue slow movements'] }
    }
  },
  {
    slug: 'mucus-plug',
    title: 'Mucus Plug Loss',
    category: 'labor-prep',
    shortDescription: 'Thick, bloody mucus discharge',
    commonWeeks: Array.from({length: 5}, (_, i) => i + 36),
    peakWeeks: [38, 39, 40],
    trimesterFrequency: {
      first: 'Does not occur',
      second: 'Does not occur',
      third: 'Late third trimester - cervix starting to change'
    },
    whatCausesIt: [
      'Cervix beginning to dilate',
      'Cervix effacing (thinning)',
      'Mucus plug dislodging',
      'Preparation for labor',
      'Vaginal exam can dislodge it'
    ],
    normalVsConcerning: {
      normal: ['Thick, stringy discharge', 'Clear, pink, or blood-tinged', 'Can be gradual over days', 'Doesn\'t mean labor immediate'],
      concerning: ['Heavy bleeding (more than period)', 'Before 37 weeks', 'With severe pain']
    },
    reliefStrategies: [
      'Wear pad (not tampon)',
      'Monitor for contractions',
      'Continue normal activities',
      'Know labor can be days away still',
      'Stay calm'
    ],
    whenToCallDoctor: [
      'Heavy bleeding like period',
      'Mucus plug before 37 weeks',
      'With severe pain',
      'With regular contractions',
      'With water breaking',
      'Uncertain if normal'
    ],
    relatedSymptoms: ['cervical-changes', 'bloody-show', 'labor-signs'],
    weekSpecificInfo: {
      38: { severity: 'mild', description: 'Mucus plug may release', tips: ['Normal sign', 'Labor could be days or weeks away'] },
      40: { severity: 'mild', description: 'Mucus plug releasing common', tips: ['Continue monitoring for contractions', 'Call if unsure'] }
    }
  },
  {
    slug: 'nesting-instinct',
    title: 'Nesting Instinct',
    category: 'labor-prep',
    shortDescription: 'Sudden urge to clean, organize, prepare',
    commonWeeks: Array.from({length: 10}, (_, i) => i + 31),
    peakWeeks: [37, 38, 39],
    trimesterFrequency: {
      first: 'Not typical',
      second: 'Can begin',
      third: 'Common - 90% experience urge to nest'
    },
    whatCausesIt: [
      'Instinct to prepare for baby',
      'Hormone-driven behavior',
      'Psychological preparation',
      'Anxiety channeled into action',
      'Energy surge before labor'
    ],
    normalVsConcerning: {
      normal: ['Urge to organize and clean', 'Want to prepare baby\'s space', 'Energy to complete tasks', 'Feel productive'],
      concerning: ['Exhausting yourself', 'Not sleeping to nest', 'Anxious nesting preventing rest']
    },
    reliefStrategies: [
      'Channel energy productively',
      'Pace yourself - don\'t overdo',
      'Accept help from others',
      'Rest between tasks',
      'Make lists',
      'Don\'t exhaust yourself before labor',
      'Enjoy the productive feeling'
    ],
    whenToCallDoctor: [
      'Not a medical concern - normal behavior'
    ],
    relatedSymptoms: ['energy-surge', 'anxiety', 'preparation'],
    weekSpecificInfo: {
      37: { severity: 'mild', description: 'Nesting urge intensifying', tips: ['Pace yourself', 'Don\'t overexert'] },
      39: { severity: 'moderate', description: 'Strong nesting instinct', tips: ['Can signal labor soon', 'Rest too', 'Accept help'] }
    }
  },
  {
    slug: 'diarrhea',
    title: 'Diarrhea (Late Pregnancy)',
    category: 'labor-prep',
    shortDescription: 'Loose stools, especially right before labor',
    commonWeeks: Array.from({length: 5}, (_, i) => i + 36),
    peakWeeks: [39, 40],
    trimesterFrequency: {
      first: 'Not typical (constipation more common)',
      second: 'Rare',
      third: 'Can occur as labor approaches - body\'s natural prep'
    },
    whatCausesIt: [
      'Prostaglandins preparing for labor',
      'Body clearing bowels before labor',
      'Hormonal changes',
      'Cervix releasing prostaglandins',
      'Natural labor preparation'
    ],
    normalVsConcerning: {
      normal: ['Loose stools', 'Increased frequency', 'Mild cramping', 'Near due date'],
      concerning: ['Severe diarrhea with dehydration', 'With fever', 'With severe pain', 'Bloody stools', 'Food poisoning symptoms']
    },
    reliefStrategies: [
      'Stay hydrated',
      'Eat bland foods (BRAT diet)',
      'Avoid dairy temporarily',
      'Small, frequent meals',
      'Monitor for labor signs',
      'Rest',
      'Know it can signal labor within days'
    ],
    whenToCallDoctor: [
      'Severe diarrhea with dehydration',
      'Fever with diarrhea',
      'Bloody stools',
      'Severe abdominal pain',
      'Signs of food poisoning',
      'Diarrhea with other labor signs'
    ],
    relatedSymptoms: ['cramping', 'labor-signs', 'nausea', 'contractions'],
    weekSpecificInfo: {
      39: { severity: 'mild', description: 'Diarrhea may begin as labor approaches', tips: ['Stay hydrated', 'Can mean labor in 24-48 hours'] },
      40: { severity: 'mild', description: 'Loose stools common before labor', tips: ['Monitor for contractions', 'Normal preparation'] }
    }
  }
]

// Helper function to get symptom data by slug
export function getSymptomWeekData(slug: string): SymptomWeekData | undefined {
  return comprehensiveSymptoms.find(symptom => symptom.slug === slug)
}

// Helper function to get symptoms for a specific week
export function getSymptomsForWeek(week: number): SymptomWeekData[] {
  return comprehensiveSymptoms.filter(symptom =>
    symptom.commonWeeks.includes(week)
  )
}

// Helper function to get symptoms by category
export function getSymptomsByCategory(category: string): SymptomWeekData[] {
  return comprehensiveSymptoms.filter(symptom => symptom.category === category)
}

// Helper function to get symptoms by trimester
export function getSymptomsByTrimester(trimester: 1 | 2 | 3): SymptomWeekData[] {
  const weekRanges = {
    1: [1, 13],
    2: [14, 27],
    3: [28, 40]
  }
  const [start, end] = weekRanges[trimester]
  return comprehensiveSymptoms.filter(symptom =>
    symptom.commonWeeks.some(week => week >= start && week <= end)
  )
}

// Generate all symptom × week combinations
export function generateAllSymptomWeekPages() {
  const pages: { symptom: string; week: number }[] = []
  comprehensiveSymptoms.forEach(symptom => {
    symptom.commonWeeks.forEach(week => {
      pages.push({ symptom: symptom.slug, week })
    })
  })
  return pages
}

// Export symptom list for navigation
export const symptomsList = comprehensiveSymptoms.map(s => ({
  slug: s.slug,
  title: s.title,
  category: s.category
}))
