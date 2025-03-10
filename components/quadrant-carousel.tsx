// Refine the carousel component to ensure perfect consistency with homepage

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface QuadrantItem {
  title: string
  image: string
  link: string
}

export default function QuadrantCarousel({
  items = [
    {
      title: "Ozone Therapy + Osteopathy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ozonosteopic.jpg-8YPM2ER5BSHlgZEDoA1kWc8izXQr9f.jpeg",
      link: "/ozone-osteopathy",
    },
    {
      title: "Osteopathy",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osteopic.jpg-1DghIg2avBhDEuGOkg7IMcB61GdHay.jpeg",
      link: "/osteopathy",
    },
    {
      title: "Ozone Therapy",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ozonopic.jpg-kP90wHktzarfiYalWqapRUrsv4Mo69.jpeg",
      link: "/ozone-therapy",
    },
  ],
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Get the indices for all visible items
  const getVisibleIndices = () => {
    const total = items.length
    return [
      (activeIndex - 1 + total) % total, // Previous
      activeIndex, // Current
      (activeIndex + 1) % total, // Next
    ]
  }

  // Handle automatic rotation
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      timerRef.current = setTimeout(() => {
        handleNext()
      }, 6000) // 6 seconds between transitions
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [activeIndex, isPaused, isTransitioning])

  const handlePrev = () => {
    if (isTransitioning) return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDirection("prev")
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const handleNext = () => {
    if (isTransitioning) return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDirection("next")
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % items.length)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const handleItemClick = (index: number, e: React.MouseEvent) => {
    if (index === activeIndex || isTransitioning) return

    e.preventDefault()

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDirection(index > activeIndex ? "next" : "prev")
    setIsTransitioning(true)
    setActiveIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setHoveredIndex(null)
      }}
    >
      {/* Main carousel container with 3D perspective */}
      <div className="absolute inset-0 flex items-center justify-center perspective">
        {/* Render the three visible items */}
        {visibleIndices.map((itemIndex, positionIndex) => {
          const isCurrent = itemIndex === activeIndex
          const isHovered = itemIndex === hoveredIndex
          const position = positionIndex - 1 // -1 (prev), 0 (current), 1 (next)

          // Calculate position and style based on item's position
          const xPosition = position * 100
          let zPosition = 0
          let scale = 1
          let opacity = 1
          let zIndex = 10
          const rotate = position * 5 // Slight rotation for 3D effect

          // Adjust for current item
          if (isCurrent) {
            zIndex = 20
            scale = 1
          } else {
            opacity = 0.8
            scale = 0.85
            zPosition = -100
          }

          // Adjust for hovered item - only apply special effects to current item
          if (isHovered && isCurrent) {
            scale = 1.05
          }

          // Determine if this item is being repositioned (moving from one edge to another)
          const isRepositioning =
            (direction === "next" && position === -1 && isTransitioning) ||
            (direction === "prev" && position === 1 && isTransitioning)

          return (
            <div
              key={itemIndex}
              className={`carousel-item absolute ${isCurrent ? "z-20" : "z-10"} ${isRepositioning ? "transition-none" : "transition-all duration-600 ease-out"}`}
              style={{
                transform: `translateX(${xPosition}%) translateZ(${zPosition}px) rotateY(${rotate}deg) scale(${scale})`,
                opacity,
                zIndex,
                width: "70%",
                height: isCurrent ? "350px" : "300px",
                transformOrigin: position < 0 ? "right center" : position > 0 ? "left center" : "center",
              }}
              onMouseEnter={() => setHoveredIndex(itemIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={items[itemIndex].link}
                className="block w-full h-full relative rounded-xl overflow-hidden shadow-lg"
                onClick={(e) => handleItemClick(itemIndex, e)}
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Image
                    src={items[itemIndex].image || "/placeholder.svg"}
                    alt={items[itemIndex].title}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={isCurrent}
                  />
                  {/* Enhanced overlay gradient for depth effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl"
                    style={{
                      opacity: isCurrent ? 0.6 : 0.8,
                    }}
                  ></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-center backdrop-blur-sm rounded-b-xl">
                  <h3
                    className={`${isCurrent ? "text-lg font-semibold" : "text-base font-medium"} transition-all duration-300`}
                  >
                    {items[itemIndex].title}
                  </h3>
                </div>

                {/* Enhanced cascading reveal effect for next/prev items */}
                {!isCurrent && (
                  <div
                    className="absolute inset-0 bg-black transition-transform duration-700 rounded-xl"
                    style={{
                      transform: `translateX(${position < 0 ? "-80%" : "80%"})`,
                      opacity: 0.5,
                    }}
                  ></div>
                )}
              </Link>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-30 transition-all duration-300 shadow-md hover:scale-110"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 z-30 transition-all duration-300 shadow-md hover:scale-110"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Indicator dots - with added shadow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 pb-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.4)] ${
              index === activeIndex ? "bg-white w-5 h-3" : "bg-white/70 w-3 h-3"
            }`}
            onClick={() => {
              if (!isTransitioning && index !== activeIndex) {
                setDirection(index > activeIndex ? "next" : "prev")
                setActiveIndex(index)
                setIsTransitioning(true)
                setTimeout(() => setIsTransitioning(false), 600)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

