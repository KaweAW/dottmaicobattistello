"use client"

import { useState, useEffect } from "react"

interface WordCarouselProps {
  words: string[]
}

export default function WordCarousel({ words }: WordCarouselProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [direction, setDirection] = useState("left")
  const [animationClass, setAnimationClass] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setAnimationClass("exit")

      setTimeout(() => {
        // Change word and prepare for entrance
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setDirection("right")
        setAnimationClass("prepare")

        // Small delay before entrance animation
        setTimeout(() => {
          setAnimationClass("enter")
        }, 50)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [words])

  // Animation classes based on state
  const getAnimationClass = () => {
    if (animationClass === "exit") {
      return "transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out"
    } else if (animationClass === "prepare") {
      return "transform translate-x-full opacity-0 transition-none"
    } else if (animationClass === "enter") {
      return "transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out"
    }
    return "transform translate-x-0 opacity-100"
  }

  return (
    <div className="relative h-40 overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 animate-gradient"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 10s ease infinite",
        }}
      />
      <div className="relative flex items-center justify-center h-full overflow-hidden">
        <div className="h-full flex items-center justify-center">
          <h2 className={`text-4xl font-bold text-white absolute ${getAnimationClass()}`}>{words[currentWordIndex]}</h2>
        </div>
      </div>
    </div>
  )
}

