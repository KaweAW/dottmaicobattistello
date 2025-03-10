"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ImageCarouselProps {
  images?: string[]
  autoplaySpeed?: number
}

export default function ImageCarousel({
  images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/influenzapic.jpg-QDBcWx2qsMvOUTnXrgctaxQrEmmehI.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/covidlongpic.jpg-7zJDuOj4PblQREeGna6YpQ0rDP2opu.jpeg",
  ],
  autoplaySpeed = 2000, // Updated from 3000 to 2000 (1 second less)
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, autoplaySpeed)
    return () => clearInterval(interval)
  }, [autoplaySpeed])

  const getSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return {
          title: "Ozone Therapy Against the Flu",
          description: "Discover how ozone therapy can help boost your immune system",
          link: "/blog/1",
        }
      case 1:
        return {
          title: "Long Covid and Ozone Therapy",
          description: "Learn about the benefits of ozone therapy for Long Covid symptoms",
          link: "/blog/2",
        }
      default:
        return {
          title: "Combined Treatment",
          description: "Innovative combination for enhanced therapeutic results",
          link: "/blog",
        }
    }
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => {
          const content = getSlideContent(index)
          return (
            <Link
              key={index}
              href={content.link}
              className="relative w-full flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <img src={image || "/placeholder.svg"} alt={content.title} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                  <p className="text-sm">{content.description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={(e) => {
          e.preventDefault()
          goToPrevious()
        }}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={(e) => {
          e.preventDefault()
          goToNext()
        }}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            onClick={(e) => {
              e.preventDefault()
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

