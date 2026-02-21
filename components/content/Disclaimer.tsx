interface DisclaimerProps {
  type?: 'medical' | 'general' | 'prominent'
  className?: string
}

const DISCLAIMERS = {
  medical: {
    title: 'Medical Disclaimer',
    text: 'This content is for informational purposes only and is not intended as medical advice. Every pregnancy is unique. Always consult your healthcare provider, OB-GYN, or midwife for personalized medical guidance. If you have concerns about your pregnancy, contact your healthcare provider immediately.',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-900',
    iconColor: 'text-amber-600',
  },
  general: {
    title: 'Disclaimer',
    text: 'This content is for informational purposes only. Pregnancy information is general guidance and may not apply to your specific situation. Consult a healthcare provider for personalized advice.',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    textColor: 'text-gray-900',
    iconColor: 'text-gray-600',
  },
  prominent: {
    title: 'Important Medical Disclaimer',
    text: 'This content is for informational purposes only and is NOT medical advice. Always consult your healthcare provider, OB-GYN, or midwife for personalized medical guidance.',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-900',
    iconColor: 'text-red-600',
  },
}

export function Disclaimer({ type = 'medical', className = '' }: DisclaimerProps) {
  const config = DISCLAIMERS[type]

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-lg p-4 my-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg
            className={`h-5 w-5 ${config.iconColor} mt-0.5`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className={`text-sm font-semibold ${config.textColor} mb-1`}>
            {config.title}
          </h4>
          <p className={`text-sm ${config.textColor} opacity-90`}>
            {config.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FooterDisclaimer() {
  return (
    <p className="text-xs text-gray-500">
      Not medical advice. Always consult your healthcare provider.
    </p>
  )
}
