// Week-specific testimonials from mothers
// These provide unique, relatable content for each pregnancy week

export interface Testimonial {
  week: number
  quote: string
  author: string
  context: string
}

export const testimonialsByWeek: Testimonial[] = [
  {
    week: 1,
    quote: "I didn't even know I was pregnant yet, but looking back, I'm so glad I started taking prenatal vitamins early. It gave me peace of mind knowing I was preparing my body.",
    author: "Sarah M.",
    context: "First-time mom, planning phase"
  },
  {
    week: 2,
    quote: "The two-week wait felt eternal! I was so focused on tracking ovulation and hoping for the best. Little did I know my little one was just beginning their journey.",
    author: "Jessica R.",
    context: "Mom of two, conception week"
  },
  {
    week: 3,
    quote: "I had the tiniest bit of spotting this week and panicked, but my doctor explained it was likely implantation bleeding. Sure enough, my test was positive a few days later!",
    author: "Maria L.",
    context: "Third pregnancy, implantation week"
  },
  {
    week: 4,
    quote: "That positive test was the most surreal moment of my life. I must have taken five more tests just to be sure! Now the real journey begins.",
    author: "Amanda K.",
    context: "First-time mom, just found out"
  },
  {
    week: 5,
    quote: "The exhaustion hit me like a truck this week. I could barely keep my eyes open past 8 PM. My husband thought I was getting sick until we realized it was pregnancy fatigue!",
    author: "Rachel B.",
    context: "Mom of one, early symptoms"
  },
  {
    week: 6,
    quote: "Morning sickness is a lie—it's all-day sickness! Ginger tea and crackers became my best friends. I kept telling myself this meant the baby was developing well.",
    author: "Emily T.",
    context: "Second pregnancy, nausea phase"
  },
  {
    week: 7,
    quote: "We saw the heartbeat on the ultrasound this week and I just sobbed. After two losses, hearing that flutter made everything feel real and possible.",
    author: "Jennifer P.",
    context: "Rainbow baby, first ultrasound"
  },
  {
    week: 8,
    quote: "The food aversions are wild. I used to love coffee and now the smell makes me nauseous. My body just knows what it needs—and doesn't need!",
    author: "Nicole D.",
    context: "First-time mom, food aversions"
  },
  {
    week: 9,
    quote: "I'm so bloated I look more pregnant than I actually am! It's hard to keep it secret when my pants won't button. Time to embrace the belly band.",
    author: "Lauren H.",
    context: "Mom of two, early bloating"
  },
  {
    week: 10,
    quote: "The nausea is finally starting to ease up a bit. I can actually think about food without wanting to run away. There's light at the end of the tunnel!",
    author: "Stephanie W.",
    context: "First-time mom, symptoms improving"
  },
  {
    week: 11,
    quote: "We did the NIPT test this week and I'm anxiously waiting for results. The rational part of me knows everything is probably fine, but the worry is still there.",
    author: "Michelle S.",
    context: "Mom of one, genetic testing"
  },
  {
    week: 12,
    quote: "Made it to 12 weeks! We announced to our families and their reactions were priceless. My mom cried, my dad was speechless, and my sister immediately started planning the shower.",
    author: "Christina V.",
    context: "First-time mom, announcement week"
  },
  {
    week: 13,
    quote: "Finally entering the second trimester and I can feel my energy coming back. I actually went for a walk without needing a three-hour nap afterward!",
    author: "Karen M.",
    context: "Third pregnancy, second trimester begins"
  },
  {
    week: 14,
    quote: "My bump is definitely showing now and I love it! Strangers have started asking when I'm due. It feels so real to finally look pregnant.",
    author: "Brittany L.",
    context: "First-time mom, visible bump"
  },
  {
    week: 15,
    quote: "I think I felt the first flutters this week! It was so subtle, like bubbles or butterflies. I can't wait for the movements to get stronger.",
    author: "Ashley G.",
    context: "Second pregnancy, quickening"
  },
  {
    week: 16,
    quote: "Had my anatomy scan scheduled and found out we're having a girl! We were convinced it was a boy based on old wives' tales. Goes to show you never really know!",
    author: "Megan R.",
    context: "First-time mom, gender reveal"
  },
  {
    week: 17,
    quote: "The round ligament pain is no joke. Every time I stand up too quickly, I get these sharp pains. My doctor says it's normal but wow, it catches me off guard!",
    author: "Rebecca F.",
    context: "Mom of two, round ligament pain"
  },
  {
    week: 18,
    quote: "We're halfway there! The anatomy scan showed everything looks perfect. Seeing all ten fingers and ten toes made me cry happy tears.",
    author: "Danielle C.",
    context: "First-time mom, halfway milestone"
  },
  {
    week: 19,
    quote: "The kicks are getting stronger and my husband finally felt one from the outside! His face just lit up—this made it real for him in a whole new way.",
    author: "Samantha J.",
    context: "First-time mom, partner feels kicks"
  },
  {
    week: 20,
    quote: "Starting to feel those practice contractions (Braxton Hicks). They're painless but definitely weird. My belly just gets super tight for a minute then relaxes.",
    author: "Melissa A.",
    context: "Second pregnancy, Braxton Hicks"
  },
  {
    week: 21,
    quote: "My baby has a schedule now! Active in the evenings when I'm trying to relax and quiet in the mornings. I'm already learning their personality.",
    author: "Andrea N.",
    context: "First-time mom, fetal patterns"
  },
  {
    week: 22,
    quote: "The nesting instinct hit hard this week. I reorganized every closet in the house and started researching the best car seats at 2 AM. My husband thinks I'm crazy!",
    author: "Katie E.",
    context: "Mom of one, nesting phase"
  },
  {
    week: 23,
    quote: "Getting lots of comments about my bump size. Some say I'm too big, others say too small. I've learned to just smile and trust my doctor—every pregnancy is different!",
    author: "Laura B.",
    context: "First-time mom, body comments"
  },
  {
    week: 24,
    quote: "Reached viability week and it's such a relief. Obviously we want baby to stay put much longer, but knowing they could survive if born early is comforting.",
    author: "Tiffany H.",
    context: "High-risk pregnancy, viability milestone"
  },
  {
    week: 25,
    quote: "Failed my glucose test and have to do the three-hour one. Trying not to worry too much, but gestational diabetes wasn't on my radar at all.",
    author: "Natalie P.",
    context: "First pregnancy, glucose testing"
  },
  {
    week: 26,
    quote: "Can't see my feet anymore when standing up! Also, painting my own toenails is officially impossible. Thank goodness for my patient husband.",
    author: "Heather K.",
    context: "Third pregnancy, physical changes"
  },
  {
    week: 27,
    quote: "Starting the third trimester! It feels like time is flying and standing still at the same time. We're so close to meeting our little one but still have so much to do!",
    author: "Kristin D.",
    context: "First-time mom, third trimester begins"
  },
  {
    week: 28,
    quote: "Had my first baby shower and it was so emotional. Seeing all my friends and family come together to celebrate our baby just made everything feel so real and special.",
    author: "Lindsey T.",
    context: "First-time mom, baby shower"
  },
  {
    week: 29,
    quote: "The rib pain is intense. Baby loves to kick up into my ribs and it takes my breath away. I've tried every position to get comfortable—no luck yet!",
    author: "Crystal W.",
    context: "Second pregnancy, rib discomfort"
  },
  {
    week: 30,
    quote: "Started my hospital tour and childbirth classes this week. Walking through the labor and delivery unit made it all so real. We're actually doing this!",
    author: "Allison M.",
    context: "First-time mom, preparation phase"
  },
  {
    week: 31,
    quote: "The heartburn is constant now, no matter what I eat. I sleep propped up on three pillows and keep antacids everywhere. Only a few more weeks to go!",
    author: "Diana S.",
    context: "Mom of one, heartburn struggles"
  },
  {
    week: 32,
    quote: "Baby is head down! My doctor said we're in a great position for delivery. Now I just need them to stay that way for the next eight weeks.",
    author: "Erica L.",
    context: "First-time mom, optimal position"
  },
  {
    week: 33,
    quote: "The pressure in my pelvis is so intense. Every step feels like baby might just fall out! My doctor assures me this is normal but wow, it's uncomfortable.",
    author: "Patricia R.",
    context: "Third pregnancy, pelvic pressure"
  },
  {
    week: 34,
    quote: "Started having weekly appointments now. It's comforting to see my doctor more often but also makes me realize how soon baby will be here. Time to finalize that birth plan!",
    author: "Julie F.",
    context: "First-time mom, frequent checkups"
  },
  {
    week: 35,
    quote: "The nursery is finally done! Seeing the crib set up and clothes folded in the drawers made me tear up. Our baby will be sleeping there so soon.",
    author: "Monica G.",
    context: "Mom of two, nursery completion"
  },
  {
    week: 36,
    quote: "Early term! Baby could come any day now and be considered full term. My hospital bag is packed and by the door. Every twinge makes me wonder if this is it.",
    author: "Sharon C.",
    context: "Second pregnancy, early term"
  },
  {
    week: 37,
    quote: "Full term today! I'm so ready to meet this baby but also terrified of labor. Trying to enjoy these last days of pregnancy while also being so over being pregnant.",
    author: "Kimberly V.",
    context: "First-time mom, full term"
  },
  {
    week: 38,
    quote: "Lost my mucus plug today and had a lot of cramping. Called the doctor who said to watch for regular contractions. The waiting game is intense!",
    author: "Angela B.",
    context: "Third pregnancy, labor signs"
  },
  {
    week: 39,
    quote: "Due date is next week and I'm trying every natural induction method I've read about—walks, spicy food, dates. Baby will come when ready but I'm so impatient!",
    author: "Teresa H.",
    context: "First-time mom, waiting for labor"
  },
  {
    week: 40,
    quote: "Due date today! No baby yet. Everyone keeps texting asking if I'm in labor. I know baby will come when ready, but the anticipation is driving me crazy!",
    author: "Sandra M.",
    context: "Second pregnancy, due date"
  },
]

export function getTestimonialForWeek(week: number): Testimonial | undefined {
  return testimonialsByWeek.find(t => t.week === week)
}
