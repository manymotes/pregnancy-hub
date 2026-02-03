// Week-specific FAQs for pregnancy
// Unique questions that mothers commonly ask during each week

export interface FAQ {
  question: string
  answer: string
}

export interface WeekFAQs {
  week: number
  faqs: FAQ[]
}

export const faqsByWeek: WeekFAQs[] = [
  {
    week: 1,
    faqs: [
      {
        question: "Can I get pregnant during my period?",
        answer: "While unlikely, it's possible if you have a shorter menstrual cycle. Sperm can survive up to 5 days, so if you ovulate early, conception could occur. This is why pregnancy is dated from your last menstrual period."
      },
      {
        question: "When should I start taking prenatal vitamins?",
        answer: "Ideally, start prenatal vitamins 1-3 months before trying to conceive. The folic acid in prenatal vitamins helps prevent neural tube defects that develop in the first few weeks of pregnancy, often before you know you're pregnant."
      },
      {
        question: "How accurate is the 40-week pregnancy timeline?",
        answer: "The 40-week timeline is an average. Only about 5% of babies arrive on their due date. Most babies are born between 37-42 weeks. Your due date is calculated from your last menstrual period, which is why pregnancy appears to be 40 weeks even though conception happens around week 2."
      }
    ]
  },
  {
    week: 2,
    faqs: [
      {
        question: "When is the best time to have sex to get pregnant?",
        answer: "The fertile window is typically the 5 days leading up to ovulation and the day of ovulation itself. For most women with 28-day cycles, this falls around days 10-15. Having sex every 1-2 days during this window maximizes your chances of conception."
      },
      {
        question: "What are signs of ovulation?",
        answer: "Common signs include clear, stretchy cervical mucus (like egg whites), mild pelvic pain on one side (mittelschmerz), increased sex drive, slight rise in basal body temperature, and breast tenderness. Ovulation predictor kits can also help identify your fertile window."
      },
      {
        question: "Can stress prevent pregnancy?",
        answer: "While stress doesn't directly prevent pregnancy, chronic high stress can affect hormones and potentially delay ovulation. Focus on stress management through exercise, sleep, and relaxation techniques, but don't stress about being stressed—most women conceive without perfect conditions."
      }
    ]
  },
  {
    week: 3,
    faqs: [
      {
        question: "What is implantation bleeding and when does it occur?",
        answer: "Implantation bleeding is light spotting that occurs when the fertilized egg attaches to the uterine lining, typically 6-12 days after conception (around week 3). It's usually pink or brown, much lighter than a period, and lasts 1-3 days. Not all women experience it."
      },
      {
        question: "Can I test for pregnancy this early?",
        answer: "It's too early for most pregnancy tests during week 3. The hormone hCG needs to build up to detectable levels, which typically happens around the time of your missed period (week 4). Early detection tests might work a few days before your missed period, but week 4 is more reliable."
      },
      {
        question: "What should I avoid now that I might be pregnant?",
        answer: "Avoid alcohol, smoking, recreational drugs, raw/undercooked meats, unpasteurized cheeses, high-mercury fish, and excessive caffeine. Continue taking prenatal vitamins. Also avoid hot tubs, saunas, and any activities with fall risk or abdominal trauma."
      }
    ]
  },
  {
    week: 4,
    faqs: [
      {
        question: "When will a pregnancy test show positive?",
        answer: "Most home pregnancy tests are accurate on the first day of your missed period (week 4). Some early detection tests can detect pregnancy 1-2 days before your missed period, but waiting until your period is late reduces false negatives. Test with first morning urine for best results."
      },
      {
        question: "Why am I so tired if the baby is so tiny?",
        answer: "Pregnancy fatigue in early weeks is caused by rising progesterone levels, increased blood production, and your body working hard to develop the placenta. This fatigue is normal and often improves in the second trimester. Rest when you can and don't fight it."
      },
      {
        question: "Is cramping normal in early pregnancy?",
        answer: "Mild cramping is common in early pregnancy as the uterus stretches and the embryo implants. It should feel like light menstrual cramps. However, severe cramping with heavy bleeding requires immediate medical attention as it could indicate miscarriage or ectopic pregnancy."
      }
    ]
  },
  {
    week: 5,
    faqs: [
      {
        question: "When should I schedule my first prenatal appointment?",
        answer: "Most healthcare providers schedule the first prenatal visit between weeks 8-10. However, call your provider as soon as you get a positive test. They may want to see you earlier if you have a history of miscarriage, complications, or chronic health conditions."
      },
      {
        question: "Why do I suddenly hate foods I used to love?",
        answer: "Food aversions are caused by hormonal changes, particularly rising hCG and estrogen levels. Your body's heightened sense of smell and taste may be protective, steering you away from potentially harmful foods. These aversions typically improve after the first trimester."
      },
      {
        question: "Is it normal to feel anxious about miscarriage?",
        answer: "It's completely normal to feel anxious, especially in early pregnancy. About 10-20% of known pregnancies end in miscarriage, most occurring in the first 12 weeks. However, seeing a heartbeat at 6-7 weeks significantly reduces miscarriage risk to about 5%."
      }
    ]
  },
  {
    week: 6,
    faqs: [
      {
        question: "When will morning sickness start and end?",
        answer: "Despite its name, morning sickness can occur any time of day. It typically starts around week 6, peaks at weeks 9-10, and improves by weeks 12-14 for most women. About 70-80% of pregnant women experience some nausea. Try eating small, frequent meals and keep crackers by your bedside."
      },
      {
        question: "Can I see my baby on ultrasound this week?",
        answer: "At 6 weeks, a transvaginal ultrasound can detect a gestational sac, yolk sac, and often a heartbeat (cardiac activity). The embryo is only about 0.25 inches long. Many providers wait until 7-8 weeks when the heartbeat is more reliably detected."
      },
      {
        question: "Why am I peeing so much already?",
        answer: "Increased urination starts early due to increased blood flow to your kidneys, hormonal changes, and your kidneys processing more waste. Your uterus also starts pressing on your bladder. This improves in the second trimester but returns in the third as baby grows larger."
      }
    ]
  },
  {
    week: 7,
    faqs: [
      {
        question: "What happens at my first prenatal appointment?",
        answer: "Your first visit includes medical history review, physical exam, blood tests (blood type, Rh factor, anemia, immunity to rubella, hepatitis, HIV), urine test, pelvic exam, pap smear if needed, dating ultrasound, and confirmation of due date. Bring a list of questions and your partner if desired."
      },
      {
        question: "Is it safe to exercise during early pregnancy?",
        answer: "Yes, exercise is generally safe and beneficial. Continue your pre-pregnancy routine with modifications: avoid contact sports, activities with fall risk, lying flat on your back after 20 weeks, and overheating. Stay hydrated and don't exercise to exhaustion. Consult your provider about specific concerns."
      },
      {
        question: "Why does everything smell so strong?",
        answer: "Heightened sense of smell (hyperosmia) is caused by increased estrogen levels. Your body may be protecting you and baby from potentially harmful substances. Strong smells can trigger nausea. Try breathing through your mouth, using a fan for ventilation, and avoiding strong scents when possible."
      }
    ]
  },
  {
    week: 8,
    faqs: [
      {
        question: "Is it normal to have no pregnancy symptoms?",
        answer: "Yes, about 20-30% of women have minimal or no morning sickness. This doesn't mean anything is wrong with your pregnancy. Every pregnancy is different. The absence of symptoms doesn't indicate miscarriage risk—only ultrasound and tests can assess pregnancy health."
      },
      {
        question: "When can I tell people I'm pregnant?",
        answer: "This is personal. Many wait until after 12 weeks when miscarriage risk drops significantly. Others tell close family earlier. Consider who you'd want support from if something went wrong. There's no right answer—announce when it feels right for you."
      },
      {
        question: "Why am I so bloated and gassy?",
        answer: "Progesterone relaxes smooth muscles, including your digestive tract, slowing digestion and causing gas and bloating. Your growing uterus also compresses intestines. Eat smaller meals, avoid gas-producing foods, stay hydrated, exercise gently, and consider a prenatal probiotic."
      }
    ]
  },
  {
    week: 9,
    faqs: [
      {
        question: "When will I start showing?",
        answer: "First-time moms typically show between 12-16 weeks. Second or subsequent pregnancies often show earlier (around 10-12 weeks) due to stretched abdominal muscles. Body type, weight, and whether you're carrying multiples also affect when your bump appears. Bloating may make you look pregnant before you actually show."
      },
      {
        question: "Can I dye my hair while pregnant?",
        answer: "Most research suggests hair dye is safe after the first trimester, though many experts say it's safe throughout pregnancy. If concerned, wait until second trimester, use semi-permanent dyes, ensure good ventilation, wear gloves, and don't leave dye on longer than needed. Highlights are safer as dye doesn't touch the scalp."
      },
      {
        question: "Is it safe to have sex during pregnancy?",
        answer: "Yes, sex is generally safe throughout pregnancy unless your provider advises otherwise. Your baby is protected by amniotic fluid and cervical mucus. You may need to adjust positions as pregnancy progresses. Avoid sex if you have placenta previa, premature labor risk, or your water has broken."
      }
    ]
  },
  {
    week: 10,
    faqs: [
      {
        question: "What is the NIPT test and should I get it?",
        answer: "Non-Invasive Prenatal Testing (NIPT) is a blood test available after 9-10 weeks that screens for chromosomal conditions like Down syndrome, trisomy 18, and trisomy 13. It can also reveal baby's sex. It's optional but recommended for women over 35 or with risk factors. Discuss with your provider."
      },
      {
        question: "Why am I crying at everything?",
        answer: "Emotional changes and mood swings are normal due to hormonal fluctuations, especially estrogen and progesterone. Add fatigue, physical discomfort, and anxiety about pregnancy, and tears are understandable. This usually improves in the second trimester. Seek help if you feel persistently sad or anxious."
      },
      {
        question: "Can I travel during pregnancy?",
        answer: "Travel is generally safest during the second trimester (weeks 14-27). First trimester fatigue and nausea make travel hard. Third trimester brings discomfort and increased miscarriage/preterm labor risk. Always consult your provider. Stay hydrated, move regularly on flights, and know local medical facilities."
      }
    ]
  },
  {
    week: 11,
    faqs: [
      {
        question: "What's the difference between morning sickness and hyperemesis gravidarum?",
        answer: "Morning sickness involves nausea and occasional vomiting but you can keep some food down. Hyperemesis gravidarum is severe, persistent vomiting causing weight loss (5%+ of body weight), dehydration, and inability to keep anything down. It requires medical treatment. Contact your provider if you can't keep fluids down."
      },
      {
        question: "When is the nuchal translucency scan done?",
        answer: "The nuchal translucency (NT) scan is performed between 11-14 weeks. It measures fluid at the back of baby's neck combined with blood tests to screen for chromosomal abnormalities and heart defects. This is part of first-trimester screening and is optional."
      },
      {
        question: "Is it normal for my breasts to be so sore?",
        answer: "Yes, breast tenderness and enlargement are among the earliest pregnancy symptoms. Rising estrogen and progesterone increase blood flow and prepare breasts for milk production. They may feel heavy, tingly, or sore. Invest in a supportive, wireless bra. This usually improves after the first trimester."
      }
    ]
  },
  {
    week: 12,
    faqs: [
      {
        question: "Why does miscarriage risk drop after 12 weeks?",
        answer: "About 80% of miscarriages occur in the first trimester. After 12 weeks, the placenta takes over hormone production, major organ development is complete, and the risk of chromosomal abnormalities causing miscarriage decreases. Seeing a heartbeat at 12 weeks means 95%+ chance of continuing pregnancy."
      },
      {
        question: "When will I get my energy back?",
        answer: "Most women notice improved energy levels starting in week 13-14 as they enter the second trimester. The placenta takes over hormone production, morning sickness often subsides, and your body adjusts to pregnancy. The second trimester is often called the 'honeymoon phase' of pregnancy."
      },
      {
        question: "Do I need to eat for two?",
        answer: "No. You only need about 300 extra calories daily in the second trimester and 450 in the third—equivalent to a snack, not doubling your intake. Focus on nutritious foods. Excessive weight gain can lead to complications. Your provider will monitor weight gain to ensure it's appropriate for your body."
      }
    ]
  },
  {
    week: 13,
    faqs: [
      {
        question: "What is the second trimester like?",
        answer: "The second trimester (weeks 13-27) is often the most comfortable. Morning sickness typically subsides, energy returns, and you're not too big yet. You'll feel baby move, have the anatomy scan, and may have a noticeable bump. Enjoy this phase—it's often called the 'golden trimester.'"
      },
      {
        question: "When should I start shopping for maternity clothes?",
        answer: "Most women need maternity clothes around weeks 12-16. Start with essentials like maternity jeans with a belly band, leggings, and flowing tops. You'll need different sizes as pregnancy progresses. Don't buy too much too early—your body will continue changing."
      },
      {
        question: "Is round ligament pain normal?",
        answer: "Yes, round ligament pain is common starting in the second trimester. It feels like sharp, shooting pains in your lower abdomen or groin, especially when changing positions quickly. The ligaments supporting your uterus are stretching. Move slowly, avoid sudden movements, and use a pregnancy support belt if needed."
      }
    ]
  },
  {
    week: 14,
    faqs: [
      {
        question: "Can I find out the baby's gender yet?",
        answer: "Sometimes. A skilled ultrasound technician might see gender around 14 weeks, but it's not always accurate this early. The anatomy scan at 18-20 weeks is when gender is typically confirmed. NIPT blood test results (if you did it) should be back by now and can reveal gender with 99% accuracy."
      },
      {
        question: "Why do I have a metallic taste in my mouth?",
        answer: "Dysgeusia (metallic taste) is caused by hormone changes affecting taste buds. It typically improves after the first trimester but can persist. Try citrus fruits, sugar-free lemon drops, mint gum, brushing teeth frequently, and using plastic utensils instead of metal."
      },
      {
        question: "Is it normal to have vivid dreams during pregnancy?",
        answer: "Yes, vivid, bizarre, or disturbing dreams are common due to hormone changes, interrupted sleep, and subconscious processing of pregnancy anxieties. Many women remember dreams more clearly in pregnancy. This is completely normal and doesn't predict anything about your baby or labor."
      }
    ]
  },
  {
    week: 15,
    faqs: [
      {
        question: "What does quickening feel like?",
        answer: "Quickening (first fetal movements) feels different for everyone—flutters, bubbles, butterflies, gas bubbles, or light tapping. Second-time moms often recognize it earlier (15-16 weeks). First-time moms might not feel it until 18-20 weeks. It starts subtle and becomes unmistakable by week 20-22."
      },
      {
        question: "Should I be concerned about weight gain?",
        answer: "Healthy weight gain depends on your pre-pregnancy BMI. Generally, aim for 25-35 pounds total for normal BMI, 15-25 for overweight, and 11-20 for obese. Most gain occurs in second and third trimesters (about 1 pound per week). Your provider monitors this at each visit."
      },
      {
        question: "Is it safe to sleep on my back?",
        answer: "After 20 weeks, avoid sleeping flat on your back as your growing uterus can compress the vena cava, reducing blood flow. Sleep on your left side (best for blood flow) or right side. Use pillows between knees and under your bump for comfort. Don't worry if you wake up on your back—just roll over."
      }
    ]
  },
  {
    week: 16,
    faqs: [
      {
        question: "What is the quadruple screen test?",
        answer: "The quad screen is a second-trimester blood test (15-20 weeks) measuring four substances to screen for Down syndrome, trisomy 18, and neural tube defects. It's optional screening, not diagnostic. Abnormal results mean higher risk but don't confirm problems—further testing like amniocentesis would be offered."
      },
      {
        question: "Why is my nose so stuffy?",
        answer: "Pregnancy rhinitis affects about 20-30% of pregnant women. Increased blood flow and hormones cause nasal congestion that can last throughout pregnancy. Use saline nasal spray, humidifier, elevate your head while sleeping, and drink lots of water. Avoid decongestant medications without your provider's approval."
      },
      {
        question: "Can I get a massage while pregnant?",
        answer: "Yes, prenatal massage is safe and beneficial after the first trimester. Inform the therapist you're pregnant. They'll use proper positioning (side-lying, not flat on back or stomach) and avoid deep pressure on certain areas. Many spas offer specialized prenatal massage."
      }
    ]
  },
  {
    week: 17,
    faqs: [
      {
        question: "Why does my belly button hurt?",
        answer: "Your belly button may hurt, stick out, or feel sensitive as your abdomen stretches. The skin and tissue around it are being pulled. An outie belly button during pregnancy is common and temporary—it usually pops back in after delivery. Contact your provider if you have severe pain or a bulge (possible hernia)."
      },
      {
        question: "Is it normal to be short of breath?",
        answer: "Yes, shortness of breath starts in the second trimester due to progesterone making you breathe more deeply, increased oxygen needs, and your growing uterus pushing on your diaphragm. It's usually mild. Severe breathlessness, chest pain, or blueness requires immediate medical attention."
      },
      {
        question: "When is the anatomy scan scheduled?",
        answer: "The detailed anatomy ultrasound is typically performed between weeks 18-22, with week 20 being most common. It checks baby's anatomy (brain, heart, spine, limbs, organs), placenta position, amniotic fluid levels, and confirms due date. You can usually find out gender if you want."
      }
    ]
  },
  {
    week: 18,
    faqs: [
      {
        question: "What does the anatomy scan check for?",
        answer: "The 20-week anatomy scan examines baby's brain, face, spine, heart (4 chambers), stomach, kidneys, bladder, arms, legs, fingers, and toes. It checks for structural abnormalities, confirms due date, assesses amniotic fluid, checks placenta position, and measures growth. Most babies receive a clean bill of health."
      },
      {
        question: "Why is my back hurting so much?",
        answer: "Back pain affects 50-70% of pregnant women. Causes include weight gain, posture changes, hormone relaxin loosening ligaments, and your growing belly pulling your posture forward. Prevention: good posture, proper lifting, supportive shoes, pregnancy belt, prenatal yoga, and sleeping with pillow between knees."
      },
      {
        question: "Is it normal to feel Braxton Hicks contractions this early?",
        answer: "Yes, Braxton Hicks can start as early as week 16-18, though many women don't notice them until later. They feel like painless tightening or hardening of your belly lasting 30 seconds to 2 minutes. Unlike real labor, they're irregular and don't increase in intensity. Stay hydrated to reduce them."
      }
    ]
  },
  {
    week: 19,
    faqs: [
      {
        question: "When will my partner be able to feel the baby kick?",
        answer: "Partners typically feel kicks from the outside around weeks 20-24, when movements become stronger. Place your partner's hand on your belly when baby is active (often after meals or at night). In the beginning, baby may stop moving when others touch your belly!"
      },
      {
        question: "Why do I have a dark line down my belly?",
        answer: "The linea nigra is a dark line from belly button to pubic bone caused by increased melanin production during pregnancy. It's completely normal and harmless, appearing in about 75% of pregnancies. It typically fades within months after delivery, though may not disappear entirely."
      },
      {
        question: "Is leg cramping normal during pregnancy?",
        answer: "Yes, leg cramps (especially at night) are common in the second and third trimesters. Causes include increased weight, mineral changes, and pressure on blood vessels. Prevention: stretch calves before bed, stay hydrated, eat potassium and magnesium-rich foods, wear supportive shoes, and elevate feet."
      }
    ]
  },
  {
    week: 20,
    faqs: [
      {
        question: "What does halfway through pregnancy feel like?",
        answer: "Week 20 is the traditional halfway point! Many women feel great during this time—morning sickness is gone, energy is back, you're feeling movements, and you're not too uncomfortable yet. This is often considered the best phase of pregnancy. Enjoy it!"
      },
      {
        question: "Why are my gums bleeding when I brush?",
        answer: "Pregnancy gingivitis affects about 50% of pregnant women. Increased blood flow and hormones make gums more sensitive and prone to bleeding. This can lead to pregnancy periodontitis if untreated. Continue brushing and flossing, use soft toothbrush, see dentist for cleaning, and rinse with saltwater."
      },
      {
        question: "Do I need a glucose screening test?",
        answer: "Yes, the glucose screening test for gestational diabetes is typically done between weeks 24-28. However, high-risk women may be tested earlier. It involves drinking a sweet beverage and having blood drawn an hour later. About 2-10% of pregnant women develop gestational diabetes."
      }
    ]
  },
  {
    week: 21,
    faqs: [
      {
        question: "Why does my skin itch so much?",
        answer: "Mild itching is common as skin stretches, especially on the belly and breasts. Causes include dry skin, hormones, and stretching. Use fragrance-free moisturizer, take lukewarm showers, wear soft fabrics, and use a humidifier. Severe itching, especially on palms and soles, could indicate cholestasis—contact your provider."
      },
      {
        question: "Is it normal for baby's movements to be inconsistent?",
        answer: "Yes, movement patterns aren't consistent yet at week 21. You may go hours or a day without feeling movement, especially if baby is in a position where kicks aren't felt. By 28 weeks, you'll notice more regular patterns. If you haven't felt movement in 24 hours after week 26, contact your provider."
      },
      {
        question: "Why do I have stretch marks already?",
        answer: "Stretch marks occur when skin stretches faster than collagen can keep up, affecting 50-90% of pregnant women. They're largely genetic. No cream prevents them, though moisturizing helps with itching. They appear red or purple initially and fade to silvery lines postpartum. Consider them badges of honor!"
      }
    ]
  },
  {
    week: 22,
    faqs: [
      {
        question: "What is nesting and when does it start?",
        answer: "Nesting is the urge to prepare your home for baby—cleaning, organizing, and setting up the nursery. It can start anytime but often intensifies in the third trimester. It's thought to be instinctive preparation. Channel this energy productively but don't overdo it. Enlist help for heavy tasks."
      },
      {
        question: "Why am I so clumsy and forgetful?",
        answer: "'Pregnancy brain' or 'momnesia' is real. Hormones, sleep disruption, and focusing on pregnancy affect memory and coordination. Your center of gravity is also shifting, causing clumsiness. Be patient with yourself, write things down, set phone reminders, and move carefully to prevent falls."
      },
      {
        question: "Is heartburn normal this early?",
        answer: "Yes, heartburn can start in the second trimester. Progesterone relaxes the valve between esophagus and stomach, and your growing uterus pushes stomach contents upward. Eat smaller meals, avoid trigger foods, don't lie down after eating, elevate head while sleeping, and ask about safe antacids."
      }
    ]
  },
  {
    week: 23,
    faqs: [
      {
        question: "What should I know about preterm labor signs?",
        answer: "Preterm labor occurs before 37 weeks. Warning signs: regular contractions (6+ per hour), constant low backache, pelvic pressure, menstrual-like cramps, fluid leaking, and bloody discharge. Contact your provider immediately if you experience these. Many preterm labor episodes can be stopped if caught early."
      },
      {
        question: "Why do I sweat so much at night?",
        answer: "Night sweats are common due to increased metabolism, hormone changes, and increased blood flow. Keep bedroom cool, use breathable cotton sheets and pajamas, stay hydrated, and use a fan. Layer bedding so you can adjust. This usually improves postpartum but may take several weeks."
      },
      {
        question: "Is it normal for my hands and feet to swell?",
        answer: "Mild swelling (edema) in hands, feet, and ankles is normal, especially in hot weather and at day's end. Your body retains about 50% more fluid during pregnancy. Elevate feet, avoid standing long periods, stay hydrated, reduce sodium, and wear compression socks. Sudden severe swelling requires immediate medical attention."
      }
    ]
  },
  {
    week: 24,
    faqs: [
      {
        question: "What does viability mean?",
        answer: "Viability is when a baby could potentially survive outside the womb with intensive medical care. Week 24 is considered the threshold of viability, though survival rates and outcomes improve significantly each week until full term. Most babies born before 37 weeks face health challenges requiring NICU care."
      },
      {
        question: "When should I take a childbirth class?",
        answer: "Take childbirth classes in your third trimester, ideally between weeks 28-34. This gives you time to process information and practice techniques without being too close to delivery. Classes cover labor stages, pain management, breathing techniques, medical interventions, and postpartum care."
      },
      {
        question: "Why do I need a glucose test?",
        answer: "The glucose tolerance test screens for gestational diabetes, which affects 2-10% of pregnancies. Gestational diabetes increases risks for baby (large birth weight, breathing problems, low blood sugar) and mom (preeclampsia, C-section, future type 2 diabetes). If caught and managed, outcomes are excellent."
      }
    ]
  },
  {
    week: 25,
    faqs: [
      {
        question: "What happens if I fail the glucose screening?",
        answer: "About 15-25% of women fail the initial one-hour glucose test. This doesn't mean you have gestational diabetes—it means you need the three-hour diagnostic test. Of those who fail the one-hour test, only about 15-25% will actually have gestational diabetes. The three-hour test is more accurate."
      },
      {
        question: "Is it normal to have hemorrhoids during pregnancy?",
        answer: "Yes, hemorrhoids (swollen rectal veins) are common due to increased blood volume, progesterone, and pressure from your growing uterus. Constipation makes them worse. Prevention: drink lots of water, eat fiber-rich foods, don't strain, use toilet promptly when you feel urge, try witch hazel pads, and take warm baths."
      },
      {
        question: "Why does my pelvis hurt when I walk?",
        answer: "Pelvic girdle pain affects about 20% of pregnant women. Relaxin hormone loosens pelvic joints to prepare for birth, causing pain in pubic bone, hips, groin, or lower back. Help: pelvic floor physical therapy, pregnancy belt, avoid activities that trigger pain, sleep with pillow between knees, and minimize standing on one leg."
      }
    ]
  },
  {
    week: 26,
    faqs: [
      {
        question: "Should I have a birth plan?",
        answer: "A birth plan is optional but helpful for communicating preferences. Include: pain management preferences, positions for labor/delivery, delayed cord clamping, skin-to-skin, who's present, and postpartum wishes. Keep it brief (one page) and flexible—birth rarely goes exactly as planned. Discuss with your provider and bring copies to hospital."
      },
      {
        question: "What is the difference between midwife and OB-GYN?",
        answer: "Midwives (CNMs) focus on low-risk, natural births and provide holistic care. OB-GYNs are physicians who handle all pregnancies including high-risk and complications, and perform C-sections. Many practices include both. Consider your health history, birth preferences, and available options when choosing your provider."
      },
      {
        question: "Is carpal tunnel syndrome common in pregnancy?",
        answer: "Yes, pregnancy-related carpal tunnel affects about 25% of pregnant women due to fluid retention causing swelling in the narrow carpal tunnel of the wrist. Symptoms include numbness, tingling, and pain in hands/fingers, worse at night. Use wrist splints, elevate hands, shake out hands, and reduce repetitive movements. Usually resolves postpartum."
      }
    ]
  },
  {
    week: 27,
    faqs: [
      {
        question: "What changes happen entering the third trimester?",
        answer: "The third trimester brings increased fatigue, frequent urination, heartburn, shortness of breath, swelling, and Braxton Hicks. Baby's movements become stronger and more regular. Appointments become more frequent. You'll feel bigger and more uncomfortable. The good news: you're in the home stretch and will meet baby soon!"
      },
      {
        question: "When should I pack my hospital bag?",
        answer: "Pack your hospital bag by week 32-35 in case of early labor. Include: insurance/ID, birth plan, phone charger, comfortable clothes for labor, socks, toiletries, nursing bras, going-home outfit, baby clothes (various sizes), car seat, and comfort items. Keep it by the door. Make a list of last-minute items to grab."
      },
      {
        question: "What is the Tdap vaccine and when do I need it?",
        answer: "The Tdap vaccine (tetanus, diphtheria, pertussis/whooping cough) is recommended between weeks 27-36 of each pregnancy, ideally before week 32. It protects your newborn from whooping cough via antibodies passed through placenta. Whooping cough is dangerous for infants. Family members should also be up to date on Tdap."
      }
    ]
  },
  {
    week: 28,
    faqs: [
      {
        question: "What are kick counts and how do I do them?",
        answer: "Kick counts track baby's movements starting week 28. Choose a time when baby's active. Count movements (kicks, rolls, jabs) until you reach 10. Should take under 2 hours, usually much less. Do daily. Call your provider if movements decrease or it takes longer than usual to reach 10 movements."
      },
      {
        question: "Why do I need Rh immune globulin (RhoGAM)?",
        answer: "If you're Rh-negative and baby's father is Rh-positive, you'll receive RhoGAM around week 28 and again after delivery. This prevents your body from creating antibodies against baby's Rh-positive blood, which could harm this or future babies. It's a safe, important injection for Rh-negative mothers."
      },
      {
        question: "Is it normal for baby to have hiccups in the womb?",
        answer: "Yes, fetal hiccups are completely normal and common, especially in the third trimester. You'll feel rhythmic, regular movements in the same spot. Hiccups help baby practice breathing and develop their diaphragm. They're harmless and usually last a few minutes. Some babies hiccup multiple times daily."
      }
    ]
  },
  {
    week: 29,
    faqs: [
      {
        question: "Why does my rib cage hurt so much?",
        answer: "Rib pain is common in the third trimester as baby grows and pushes up into your rib cage. Baby's position, especially feet or bottom under ribs, causes discomfort. Your rib cage also expands. Relief: good posture, raise arms overhead, change positions, gentle stretches, and side-lying positions. It improves when baby drops into pelvis."
      },
      {
        question: "What is lightning crotch?",
        answer: "Lightning crotch describes sudden, sharp, shooting pains in vagina, pelvis, or rectum. It's caused by baby's head pressing on nerves or quick position changes. It's startling but harmless and brief. Common in the third trimester. If accompanied by bleeding, fluid leak, or contractions, contact your provider."
      },
      {
        question: "Should I consider cord blood banking?",
        answer: "Cord blood banking stores stem cells from umbilical cord blood for potential future medical use. Public banking is free and helps others. Private banking costs thousands and is mainly recommended if you have family history of specific diseases treatable with stem cells. Discuss pros, cons, and costs with your provider."
      }
    ]
  },
  {
    week: 30,
    faqs: [
      {
        question: "What happens during a hospital tour?",
        answer: "Hospital tours show labor and delivery rooms, postpartum rooms, nursery, and NICU. You'll learn admission process, parking, what to bring, hospital policies, pain management options, and amenities. Tours are usually offered in third trimester. Bring your partner and a list of questions. Many hospitals offer virtual tours too."
      },
      {
        question: "Is it normal to be scared of labor and delivery?",
        answer: "Absolutely. Fear of pain, the unknown, complications, or losing control is very common. Education helps—take childbirth classes, talk to your provider, discuss pain management options, and consider hiring a doula. Many women find labor empowering despite the fear. Remember: your body is designed for this and you'll have medical support."
      },
      {
        question: "Why do I need Group B strep testing?",
        answer: "Group B streptococcus (GBS) testing happens between weeks 35-37. GBS is a common bacteria that's harmless to you but can infect baby during delivery. About 25% of women test positive. If positive, you'll receive IV antibiotics during labor to protect baby. It's a quick vaginal and rectal swab."
      }
    ]
  },
  {
    week: 31,
    faqs: [
      {
        question: "What is the best position for baby before delivery?",
        answer: "The ideal position is head-down (vertex/cephalic) facing your back (occiput anterior). Most babies settle into this position by week 32-34. Breech (bottom down) occurs in 3-4% of full-term pregnancies. If breech at week 36, your provider may attempt external cephalic version (manually turning baby) or discuss C-section."
      },
      {
        question: "Why can't I sleep anymore?",
        answer: "Third trimester insomnia is common due to frequent urination, heartburn, leg cramps, shortness of breath, baby's movements, anxiety, and discomfort. Tips: pregnancy pillow, left-side sleeping, bedroom cool and dark, relaxation techniques, limit fluids before bed, gentle exercise during day, and avoid screens before bed."
      },
      {
        question: "Is increased discharge normal this late?",
        answer: "Yes, increased white, thin discharge (leukorrhea) is normal throughout pregnancy, often increasing in the third trimester. It's your body's way of preventing infections. Use panty liners, avoid douching, and wear breathable cotton underwear. Call your provider if discharge is bloody, green, yellow, foul-smelling, or accompanied by itching (possible infection)."
      }
    ]
  },
  {
    week: 32,
    faqs: [
      {
        question: "What are signs that baby has dropped into my pelvis?",
        answer: "Lightening (baby dropping) usually happens 2-4 weeks before labor for first-time moms, or during labor for subsequent pregnancies. Signs: easier breathing, less heartburn, increased pelvic pressure, more frequent urination, waddling walk, and visible lower belly. Your provider can confirm position during exams."
      },
      {
        question: "Should I be worried about preeclampsia?",
        answer: "Preeclampsia affects 5-8% of pregnancies, typically after 20 weeks. Warning signs: persistent headache, vision changes, upper right abdominal pain, sudden severe swelling, rapid weight gain, and high blood pressure. Your provider monitors this at each visit. Risk factors include first pregnancy, multiples, history of preeclampsia, and certain medical conditions."
      },
      {
        question: "What is a membrane sweep?",
        answer: "A membrane sweep (or stripping membranes) is done around week 38-40 to encourage labor naturally. Your provider inserts a finger into your cervix and makes a circular motion to separate amniotic sac from uterine wall. This releases prostaglandins to stimulate labor. It's uncomfortable, may cause cramping and spotting, but avoids medical induction."
      }
    ]
  },
  {
    week: 33,
    faqs: [
      {
        question: "Why does it hurt to walk and move?",
        answer: "Pelvic pressure and pain are intense in late pregnancy as baby's head presses on your pelvis, bladder, and cervix. Relaxin hormone has loosened joints. You may waddle, feel pressure, sharp pains, or heaviness. This is normal. Help: pelvic floor exercises, pregnancy belt, warm baths, rest, and gentle movements."
      },
      {
        question: "What is the difference between Braxton Hicks and real labor?",
        answer: "Braxton Hicks: irregular timing, don't increase in intensity, stop with position change or hydration, felt mainly in front. Real labor contractions: regular and increasingly frequent, progressively stronger and longer, don't stop with movement, start in back and wrap around. Use 5-1-1 rule: contractions 5 minutes apart, 1 minute long, for 1 hour."
      },
      {
        question: "Should I shave or wax before delivery?",
        answer: "Grooming is completely personal—healthcare providers don't care either way. You won't be shaved for delivery unless you need a C-section and only the surgical site. Do what makes you comfortable. If you want to groom, be careful—your center of gravity is off and you can't see well. Consider professional help or ask your partner."
      }
    ]
  },
  {
    week: 34,
    faqs: [
      {
        question: "What should I ask at my weekly appointments?",
        answer: "Ask about: baby's position, your cervix (if checked), birth plan discussion, signs of labor, when to go to hospital, Group B strep test (week 35-37), pain management options, possibility of induction, and any concerns you have. Bring a list of questions. These appointments monitor you and baby closely as delivery approaches."
      },
      {
        question: "Is it safe for baby to be born now?",
        answer: "Babies born at 34 weeks are 'moderately preterm' and typically need NICU care for breathing support, temperature regulation, and feeding help. Survival rates are excellent (over 99%), but staying pregnant longer is better. Each week in the womb improves outcomes. Full term is 37+ weeks. Call your provider immediately if you have preterm labor signs."
      },
      {
        question: "Why do I need to monitor baby's movements?",
        answer: "Daily movement monitoring in the third trimester helps identify problems. Decreased movement can indicate distress. You should feel at least 10 movements in 2 hours during baby's active time. Changes in patterns matter more than exact numbers. Call your provider immediately if movements decrease—don't wait overnight or 'wake baby up' first."
      }
    ]
  },
  {
    week: 35,
    faqs: [
      {
        question: "What is the Group B strep test like?",
        answer: "The GBS test is a quick swab of your vagina and rectum, done between weeks 35-37. You can do it yourself or have your provider do it. Results take a few days. If positive (about 25% of women), you'll receive IV antibiotics during labor to prevent passing bacteria to baby. It's routine and important."
      },
      {
        question: "How can I prepare my body for labor?",
        answer: "Preparation: stay active with walking and prenatal yoga, practice breathing and relaxation techniques, do pelvic floor exercises (Kegels), eat dates daily (studies show shorter labor), stay hydrated, rest when possible, perineal massage starting week 34, and mentally prepare through visualization and positive affirmations."
      },
      {
        question: "What should be in my birth plan?",
        answer: "Include: support people present, movement during labor preferences, pain management choices (epidural, natural, nitrous oxide), positions for pushing, immediate skin-to-skin, delayed cord clamping, who cuts cord, feeding method (breast/formula), circumcision decision, and rooming in preferences. Keep it brief and flexible."
      }
    ]
  },
  {
    week: 36,
    faqs: [
      {
        question: "What does it mean that baby is 'early term' now?",
        answer: "Early term is 37-38 weeks. Babies can be safely born now but have slightly higher risks than full-term babies (39-40 weeks). Every day in the womb helps lung development and brain maturation. Most providers avoid non-medical inductions before 39 weeks. If labor starts naturally at 37+, that's fine."
      },
      {
        question: "What are signs that labor is approaching?",
        answer: "Pre-labor signs (can occur days to weeks before labor): baby dropping, increased Braxton Hicks, bloody show, mucus plug loss, diarrhea, nesting urge, cervical changes (dilation/effacement), and backache. Real labor signs: regular contractions increasing in frequency and intensity, water breaking, and bloody show. Not everyone experiences all signs."
      },
      {
        question: "Should I have sex to induce labor?",
        answer: "Sex is safe unless your water has broken or you have placenta previa. Semen contains prostaglandins that can soften the cervix, and orgasm can trigger contractions. However, evidence for inducing labor is mixed. Only have sex if you're comfortable—there's no medical requirement. Other natural methods: walking, nipple stimulation, and eating dates."
      }
    ]
  },
  {
    week: 37,
    faqs: [
      {
        question: "What does full term mean?",
        answer: "Full term is 37-42 weeks. Babies born during this period are considered mature enough for life outside the womb. Optimal time is 39-40 weeks. Before 37 weeks is preterm. After 42 weeks is post-term (often requiring induction). Your baby's exact timing is influenced by genetics, first vs. subsequent pregnancy, and medical factors."
      },
      {
        question: "What happens when my water breaks?",
        answer: "Water breaking (rupture of membranes) can be a gush or slow leak. Note the time, color, and smell. Clear and odorless is normal. Call your provider immediately. Most providers want you at hospital within 12-24 hours due to infection risk. Labor usually starts within 24 hours. If water breaks but no contractions, induction may be needed."
      },
      {
        question: "How will I know when to go to the hospital?",
        answer: "Go to hospital when: contractions are 5 minutes apart, lasting 1 minute, for 1 hour (5-1-1 rule), water breaks, bleeding, decreased fetal movement, or severe pain. First-time moms often labor longer at home. Trust your instincts. Your provider may have different instructions—follow their guidance."
      }
    ]
  },
  {
    week: 38,
    faqs: [
      {
        question: "What is the mucus plug and when does it come out?",
        answer: "The mucus plug seals your cervix during pregnancy, preventing bacteria from entering. As your cervix begins dilating, the plug is discharged—can be all at once or gradually. It's thick, jelly-like, and may be clear, pink, or bloody. You can lose it weeks before labor or during active labor. Losing it doesn't mean labor is imminent."
      },
      {
        question: "Is it normal to not have any labor signs yet?",
        answer: "Yes, many women reach week 38, 39, even 40+ with no labor signs. First babies especially tend to come later. Due dates are estimates—only 5% of babies arrive on their due date. Most providers allow pregnancy to continue to 41-42 weeks before discussing induction. Every pregnancy is different."
      },
      {
        question: "Should I be worried about umbilical cord issues?",
        answer: "Cord issues are rare. Nuchal cord (wrapped around neck) occurs in 25% of births and rarely causes problems. True knots occur in 1% of pregnancies. Cord prolapse (cord drops into vagina before baby) is rare but serious—call 911 if you feel cord after water breaks. Delayed cord clamping (1-3 minutes) is beneficial for baby."
      }
    ]
  },
  {
    week: 39,
    faqs: [
      {
        question: "Why won't my provider induce me before 39 weeks?",
        answer: "Babies' brains and lungs develop significantly between 37-39 weeks. Elective induction before 39 weeks increases risks: longer labor, failed induction requiring C-section, breathing problems, and NICU admission. Medical reasons for earlier induction include preeclampsia, gestational diabetes issues, or concerns about baby's wellbeing. Patience is best if medically safe."
      },
      {
        question: "What natural induction methods actually work?",
        answer: "Limited evidence supports: walking (helps baby engage), nipple stimulation (releases oxytocin), sex (prostaglandins in semen), eating dates, and acupuncture/acupressure. Little evidence for: spicy food, castor oil (causes diarrhea), pineapple, or bouncing on ball. Nothing works until baby and body are ready. Discuss with provider before trying anything."
      },
      {
        question: "How long can I wait for labor to start?",
        answer: "Most providers allow pregnancy to continue to 41 weeks, sometimes 42 weeks with close monitoring. After 40 weeks, you'll likely have twice-weekly appointments for non-stress tests and fluid checks. Risks of going past 42 weeks include decreased amniotic fluid, aging placenta, meconium, and stillbirth. Induction timing depends on your and baby's health."
      }
    ]
  },
  {
    week: 40,
    faqs: [
      {
        question: "Why hasn't labor started yet?",
        answer: "Due dates are estimates based on your last period and early ultrasounds. Only 5% of babies arrive on their exact due date. First babies tend to arrive late—average for first-time moms is 40 weeks and 5 days. Your body and baby will trigger labor when ready. Trust the process unless medical concerns arise."
      },
      {
        question: "What happens at a non-stress test?",
        answer: "Non-stress tests (NST) monitor baby's heart rate and movements, typically done after 40 weeks or for high-risk pregnancies. You'll sit with monitors on your belly for 20-40 minutes. Baby's heart rate should increase with movement (reactive test, which is good). Non-reactive results (less common) mean more monitoring or possible induction."
      },
      {
        question: "What should I expect from induction?",
        answer: "Induction methods depend on cervical readiness: cervical ripening agents (Cervidil, Cytotec), mechanical dilation (Foley balloon), artificial rupture of membranes, and Pitocin (synthetic oxytocin). Induction can take 12-48+ hours. Epidural rates are higher with induction. Ask your provider about the plan, options, and what to expect for your specific situation."
      }
    ]
  },
]

export function getFAQsForWeek(week: number): FAQ[] {
  const weekFAQs = faqsByWeek.find(w => w.week === week)
  return weekFAQs?.faqs || []
}
