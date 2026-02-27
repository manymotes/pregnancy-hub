'use client'

import { useEffect, useRef, memo } from 'react'

interface AdsterraAdProps {
  className?: string
}

// Constants moved outside component
const AD_HASH = 'aa36ee5982b44985e8c35253e736cb13'
const SCRIPT_URL = `https://pl28758900.effectivegatecpm.com/${AD_HASH}/invoke.js`

function AdsterraAd({ className = '' }: AdsterraAdProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = SCRIPT_URL

    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className={`adsterra-container ${className}`}>
      <div ref={containerRef}>
        <div id={`container-${AD_HASH}`}></div>
      </div>
    </div>
  )
}

// Memoize to prevent re-renders when parent updates
export default memo(AdsterraAd)
