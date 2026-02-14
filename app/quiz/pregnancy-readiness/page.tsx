'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: {
    text: string
    scores: Record<string, number>
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your current pregnancy knowledge?",
    options: [
      { text: "I'm just getting started and everything is new", scores: { beginner: 2, education: 1 } },
      { text: "I know the basics but want to learn more", scores: { intermediate: 2, education: 1 } },
      { text: "I've done lots of research already", scores: { advanced: 2, planning: 1 } },
      { text: "This isn't my first pregnancy", scores: { experienced: 2, planning: 1 } }
    ]
  },
  {
    id: 2,
    question: "What's your biggest concern right now?",
    options: [
      { text: "Understanding what's happening with my baby's development", scores: { development: 2, education: 1 } },
      { text: "Managing symptoms and staying comfortable", scores: { symptoms: 2, wellness: 1 } },
      { text: "Eating right and staying healthy", scores: { nutrition: 2, wellness: 1 } },
      { text: "Preparing for labor and delivery", scores: { labor: 2, planning: 1 } }
    ]
  },
  {
    id: 3,
    question: "How are you feeling about your pregnancy so far?",
    options: [
      { text: "Excited but nervous - I want to be prepared", scores: { planning: 2, education: 1 } },
      { text: "Overwhelmed by all the information out there", scores: { beginner: 2, support: 1 } },
      { text: "Confident but always looking to learn more", scores: { advanced: 2, development: 1 } },
      { text: "Taking it one day at a time", scores: { wellness: 2, symptoms: 1 } }
    ]
  },
  {
    id: 4,
    question: "What trimester are you in (or planning for)?",
    options: [
      { text: "First trimester (weeks 1-12)", scores: { first: 2, symptoms: 1 } },
      { text: "Second trimester (weeks 13-27)", scores: { second: 2, development: 1 } },
      { text: "Third trimester (weeks 28-40)", scores: { third: 2, labor: 1 } },
      { text: "Still planning/early stages", scores: { beginner: 2, education: 1 } }
    ]
  },
  {
    id: 5,
    question: "What type of support do you have?",
    options: [
      { text: "Strong partner and family support", scores: { planning: 1, wellness: 1 } },
      { text: "Mostly doing this on my own", scores: { support: 2, education: 1 } },
      { text: "Working with a midwife or doula", scores: { advanced: 1, labor: 1 } },
      { text: "Still building my support network", scores: { support: 2, planning: 1 } }
    ]
  },
  {
    id: 6,
    question: "How would you describe your birth preferences?",
    options: [
      { text: "I want a natural birth if possible", scores: { natural: 2, labor: 1 } },
      { text: "I'm open to medical interventions if needed", scores: { medical: 2, planning: 1 } },
      { text: "I haven't thought much about it yet", scores: { beginner: 2, education: 1 } },
      { text: "I have specific medical considerations", scores: { medical: 2, support: 1 } }
    ]
  },
  {
    id: 7,
    question: "What's your biggest priority right now?",
    options: [
      { text: "Learning everything I can about pregnancy", scores: { education: 2, development: 1 } },
      { text: "Making sure I'm doing everything right for baby", scores: { nutrition: 2, wellness: 1 } },
      { text: "Preparing my home and life for the baby", scores: { planning: 2, preparation: 1 } },
      { text: "Taking care of my physical and mental health", scores: { wellness: 2, symptoms: 1 } }
    ]
  },
  {
    id: 8,
    question: "How do you prefer to learn about pregnancy?",
    options: [
      { text: "Reading articles and guides at my own pace", scores: { education: 2, beginner: 1 } },
      { text: "Week-by-week updates and trackers", scores: { development: 2, intermediate: 1 } },
      { text: "Practical checklists and action items", scores: { planning: 2, preparation: 1 } },
      { text: "Connecting with other pregnant people", scores: { support: 2, wellness: 1 } }
    ]
  }
]

interface PregnancyProfile {
  type: string
  emoji: string
  tagline: string
  description: string
  strengths: string[]
  focusAreas: string[]
  recommendations: { title: string, href: string, description: string }[]
  weeklyTip: string
  color: string
  bgGradient: string
}

const pregnancyProfiles: Record<string, PregnancyProfile> = {
  education: {
    type: "The Knowledge Seeker",
    emoji: "📚",
    tagline: "You want to understand every aspect of your pregnancy",
    description: "You're the type who reads every article, researches every symptom, and wants to be fully informed about your pregnancy journey. Knowledge gives you confidence and helps you feel prepared for whatever comes your way.",
    strengths: [
      "Thorough and well-researched approach",
      "Asks great questions at appointments",
      "Understands medical terminology",
      "Makes informed decisions"
    ],
    focusAreas: [
      "Balance research with relaxation",
      "Trust your body's wisdom too",
      "Avoid information overload",
      "Focus on reliable sources"
    ],
    recommendations: [
      { title: "Week-by-Week Guide", href: "/week-by-week", description: "Detailed information for every week of pregnancy" },
      { title: "Baby Development", href: "/baby-development", description: "Learn how your baby grows each week" },
      { title: "Medical Tests Guide", href: "/medical-tests", description: "Understand every test and screening" }
    ],
    weeklyTip: "Set a specific time each week to do your pregnancy research, then close the tabs and enjoy being present in the moment.",
    color: "text-blue-700",
    bgGradient: "from-blue-50 to-indigo-100"
  },
  wellness: {
    type: "The Mindful Mama",
    emoji: "🧘",
    tagline: "You prioritize holistic health and wellbeing",
    description: "For you, pregnancy is about more than just physical health - it's a whole-body, mind-spirit experience. You focus on staying balanced, managing stress, and creating a peaceful environment for your growing baby.",
    strengths: [
      "Strong mind-body connection",
      "Prioritizes self-care",
      "Manages stress effectively",
      "Creates calm environment"
    ],
    focusAreas: [
      "Don't skip medical appointments",
      "Balance alternative with conventional care",
      "Stay open to medical interventions if needed",
      "Keep up with recommended screenings"
    ],
    recommendations: [
      { title: "Pregnancy Exercises", href: "/exercises", description: "Safe workouts for every trimester" },
      { title: "Nutrition Guide", href: "/nutrition", description: "Nourish yourself and baby" },
      { title: "Symptom Relief", href: "/symptoms", description: "Natural remedies and management tips" }
    ],
    weeklyTip: "Take 10 minutes each day for quiet connection with your baby - whether through meditation, gentle movement, or simply placing your hands on your belly.",
    color: "text-green-700",
    bgGradient: "from-green-50 to-emerald-100"
  },
  planning: {
    type: "The Organized Planner",
    emoji: "📋",
    tagline: "You love checklists and being prepared",
    description: "You're happiest when you have a plan and everything is organized. From the nursery to the hospital bag, you want to be ready for every scenario. Your preparation gives you confidence and peace of mind.",
    strengths: [
      "Excellent at preparation",
      "Never misses an appointment",
      "Has everything ready ahead of time",
      "Great at delegation and asking for help"
    ],
    focusAreas: [
      "Stay flexible - babies don't follow plans",
      "Don't stress if things change",
      "Leave room for spontaneity",
      "Trust that you'll figure it out"
    ],
    recommendations: [
      { title: "Pregnancy Checklists", href: "/checklists", description: "Trimester-by-trimester to-do lists" },
      { title: "Birth Plan Builder", href: "/birth-plan/builder", description: "Create your personalized birth plan" },
      { title: "Labor Preparation", href: "/labor-prep", description: "Everything to prepare for the big day" }
    ],
    weeklyTip: "Complete one checklist item per week, but also schedule 'do nothing' time - being present is preparation too.",
    color: "text-purple-700",
    bgGradient: "from-purple-50 to-pink-100"
  },
  symptoms: {
    type: "The Symptom Navigator",
    emoji: "🌡️",
    tagline: "You're focused on feeling your best each day",
    description: "Pregnancy symptoms are real and you're dealing with them head-on. Whether it's morning sickness, fatigue, or aches and pains, you're looking for ways to feel better and get through each day as comfortably as possible.",
    strengths: [
      "Tuned into body signals",
      "Proactive about seeking relief",
      "Good at communicating needs",
      "Takes rest when needed"
    ],
    focusAreas: [
      "Know when symptoms need medical attention",
      "Don't suffer in silence",
      "Try different remedies until you find what works",
      "Remember symptoms are temporary"
    ],
    recommendations: [
      { title: "Symptom Guide", href: "/symptoms", description: "Relief tips for 100+ pregnancy symptoms" },
      { title: "Symptom Tracker", href: "/symptom-tracker", description: "Track and manage your symptoms" },
      { title: "When to Worry", href: "/complications", description: "Know the warning signs" }
    ],
    weeklyTip: "Keep a symptom journal to share with your healthcare provider - patterns can help them help you better.",
    color: "text-amber-700",
    bgGradient: "from-amber-50 to-orange-100"
  },
  development: {
    type: "The Baby Watcher",
    emoji: "👶",
    tagline: "You're fascinated by your baby's growth",
    description: "Every week brings exciting changes and you want to know exactly what's happening with your little one. From the size of a poppy seed to a watermelon, you love tracking your baby's development milestones.",
    strengths: [
      "Deep connection with baby already",
      "Excited about each milestone",
      "Great at bonding before birth",
      "Looks forward to appointments"
    ],
    focusAreas: [
      "Don't forget to take care of yourself too",
      "Each baby develops at their own pace",
      "Ultrasound measurements are estimates",
      "Trust that baby knows what to do"
    ],
    recommendations: [
      { title: "Baby Development", href: "/baby-development", description: "Weekly growth and milestones" },
      { title: "Baby Size Chart", href: "/baby-size-chart", description: "Fun size comparisons each week" },
      { title: "Week Comparisons", href: "/compare-weeks", description: "See how much changes week to week" }
    ],
    weeklyTip: "Read to your baby this week! Around 18 weeks, baby can start hearing your voice and will recognize it after birth.",
    color: "text-pink-700",
    bgGradient: "from-pink-50 to-rose-100"
  },
  labor: {
    type: "The Birth Preparer",
    emoji: "🏥",
    tagline: "You're focused on the finish line",
    description: "Whether you're in your third trimester or just thinking ahead, labor and delivery are on your mind. You want to know what to expect, how to prepare, and what your options are for bringing your baby into the world.",
    strengths: [
      "Thinking ahead and planning",
      "Exploring all birth options",
      "Taking birth preparation classes",
      "Discussing preferences with provider"
    ],
    focusAreas: [
      "Enjoy the pregnancy journey too",
      "Stay flexible about birth plans",
      "Trust your body's ability to birth",
      "Don't let fear take over"
    ],
    recommendations: [
      { title: "Labor Preparation", href: "/labor-prep", description: "Everything to know about labor and delivery" },
      { title: "Birth Plan Builder", href: "/birth-plan/builder", description: "Create your birth preferences" },
      { title: "Third Trimester Guide", href: "/third-trimester", description: "Preparing for the final weeks" }
    ],
    weeklyTip: "Practice your breathing techniques for 5 minutes daily - it'll become second nature by the time labor arrives.",
    color: "text-red-700",
    bgGradient: "from-red-50 to-orange-100"
  },
  support: {
    type: "The Connection Seeker",
    emoji: "💕",
    tagline: "You thrive with community and support",
    description: "Pregnancy can feel isolating, and you know that support makes all the difference. You're looking for connection - whether with other pregnant people, healthcare providers, or loved ones who understand what you're going through.",
    strengths: [
      "Asks for help when needed",
      "Values relationships and support",
      "Good at building community",
      "Communicates openly about needs"
    ],
    focusAreas: [
      "Trust yourself as the expert on your body",
      "Set boundaries with advice-givers",
      "Quality over quantity in support",
      "Find your people"
    ],
    recommendations: [
      { title: "Pregnancy Essentials", href: "/pregnancy-essentials", description: "Building your support toolkit" },
      { title: "Partner's Guide", href: "/labor-prep/partner-support", description: "Help your partner support you" },
      { title: "About PregnancyHub", href: "/about", description: "Join our community" }
    ],
    weeklyTip: "Reach out to one supportive person this week - share a joy, a concern, or just have a laugh about pregnancy weirdness.",
    color: "text-teal-700",
    bgGradient: "from-teal-50 to-cyan-100"
  }
}

export default function PregnancyReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<PregnancyProfile | null>(null)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [showingResult, setShowingResult] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (finalAnswers: number[]) => {
    const scores: Record<string, number> = {}

    finalAnswers.forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex]
      const selectedOption = question.options[answerIndex]
      Object.entries(selectedOption.scores).forEach(([type, score]) => {
        scores[type] = (scores[type] || 0) + score
      })
    })

    // Find the type with highest score
    let maxScore = 0
    let dominantType = 'education'
    const mainTypes = ['education', 'wellness', 'planning', 'symptoms', 'development', 'labor', 'support']

    mainTypes.forEach((type) => {
      if ((scores[type] || 0) > maxScore) {
        maxScore = scores[type] || 0
        dominantType = type
      }
    })

    setResult(pregnancyProfiles[dominantType])
    setShowingResult(true)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailLoading(true)

    try {
      const submissions = JSON.parse(localStorage.getItem('pregnancyhub_emails') || '[]')
      submissions.push({
        email,
        source: 'pregnancy_readiness_quiz',
        result: result?.type,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('pregnancyhub_emails', JSON.stringify(submissions))

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quiz_email_capture', {
          quiz_name: 'pregnancy_readiness',
          result_type: result?.type
        })
      }

      setEmailSubmitted(true)
    } catch {
      // Silently fail
    }
    setEmailLoading(false)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
    setShowingResult(false)
    setEmail('')
    setEmailSubmitted(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showingResult && result) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Result Header */}
        <div className={`bg-gradient-to-br ${result.bgGradient} rounded-2xl p-8 mb-8 text-center border border-gray-200`}>
          <div className="text-6xl mb-4">{result.emoji}</div>
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Your Pregnancy Profile</p>
          <h1 className={`text-3xl font-bold ${result.color} mb-2`}>{result.type}</h1>
          <p className="text-lg text-gray-700">{result.tagline}</p>
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">{result.description}</p>
        </div>

        {/* Strengths & Focus Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Your Strengths</h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, i) => (
                <li key={i} className="text-green-700 flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Focus Areas</h3>
            <ul className="space-y-2">
              {result.focusAreas.map((area, i) => (
                <li key={i} className="text-amber-700 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">→</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended For You</h3>
          <div className="space-y-4">
            {result.recommendations.map((rec) => (
              <Link
                key={rec.href}
                href={rec.href}
                className="block p-4 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg transition-colors"
              >
                <h4 className="font-semibold text-primary-700 mb-1">{rec.title}</h4>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Weekly Tip */}
        <div className={`bg-gradient-to-br ${result.bgGradient} border border-gray-200 rounded-xl p-6 mb-6`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">This Week's Tip</h3>
          <p className="text-gray-700">{result.weeklyTip}</p>
        </div>

        {/* Email Capture */}
        {!emailSubmitted ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <div className="text-center mb-4">
              <span className="text-3xl mb-2 block">📧</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Save Your Profile</h3>
              <p className="text-sm text-gray-600">Get your results + weekly pregnancy tips personalized for you</p>
            </div>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
                disabled={emailLoading}
              />
              <button
                type="submit"
                disabled={emailLoading || !email}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {emailLoading ? 'Sending...' : 'Email My Results'}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 text-center">
            <p className="text-green-700 font-medium">Your pregnancy profile is on its way!</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={restartQuiz}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retake Quiz
          </button>
          <Link
            href="/week-by-week"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
          >
            View Week-by-Week Guide →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-5xl mb-4 block">🤰</span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pregnancy Readiness Quiz</h1>
        <p className="text-gray-600">Discover your pregnancy profile and get personalized guidance</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-xl text-gray-700 hover:text-gray-900 transition-all duration-200"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Previous question
        </button>
      )}
    </div>
  )
}
