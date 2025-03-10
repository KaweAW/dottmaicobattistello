"use client"

import { useState, useEffect } from "react"

interface TypewriterAnimationProps {
  text: string
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function TypewriterAnimation({
  text,
  delay = 100,
  className = "",
  onComplete,
}: TypewriterAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete && onComplete()
    }
  }, [currentIndex, delay, isComplete, onComplete, text])

  // Reset the animation if text changes
  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
    setIsComplete(false)
  }, [text])

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {/* Only show cursor when animation is not complete */}
      {!isComplete && <span className="typewriter-cursor"></span>}
    </span>
  )
}

