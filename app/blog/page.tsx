"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Breadcrumb from "@/components/breadcrumb"
import { Search, ChevronDown, ArrowLeft, Calendar } from "lucide-react"
import Image from "next/image"
import AnimatedLink from "@/components/animated-link"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import QuadrantCarousel from "@/components/quadrant-carousel"
import AnimatedScrollElement from "@/components/animated-scroll-element"

type Category = "all" | "osteopathy" | "ozone-therapy" | "legal-medicine"

interface Article {
  id: number
  title: string
  image: string
  category: Category
  content?: string
  publishDate?: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "Epidemic Influenza and Ozone Therapy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/influenzapic.jpg-QDBcWx2qsMvOUTnXrgctaxQrEmmehI.jpeg",
    category: "ozone-therapy",
    publishDate: "18/01/2023",
    content: `What exactly is the flu?

It is an acute respiratory disease caused by influenza viruses belonging to the Orthomyxoviridae family. Contagion typically occurs in winter, and its clinical manifestations represent a significant public health issue, with characteristics similar to the Covid-19 virus.

The high contagion rate and ubiquity of influenza viruses, transmitted via direct contact, cause annual epidemic waves. The risk of severe health complications and hospitalization primarily affects individuals with comorbidities and chronic illnesses.

Beyond the public health impact, high social costs must also be considered due to workplace absences, as 10% of the population is infected annually.

Influenza symptoms manifest after a short incubation period of 1-2 days post-infection and may last from 4 days to 2 weeks, often leaving patients with fatigue, lung inflammation, and weight loss.

The Benefits of Ozone Therapy

The Oxygen-Ozone Therapy we offer aims to counteract flu symptoms at an early stage, including sore throat, upper airway congestion, muscle pain, bone pain, and fatigue. Thanks to its antiviral and immunomodulatory properties, it interacts with the immune system, strengthening it and fighting the ongoing viral infection.

Additional benefits of this therapy include improved tissue oxygenation, leading to better circulation, enhanced organ function, and overall well-being.

Its anti-inflammatory properties contribute to faster physical and mental recovery, reducing lung damage effects.

The method of administration is systemic or **Auto Hemotherapy** (GAET), via the venous system. This minimally invasive procedure lasts approximately 30-40 minutes, under constant medical/nursing supervision.

Dr. Maico Battistello, an expert in ozone therapy, is available for any clarification regarding this innovative method, which he performs daily with excellent results.

***Feel free to contact us for more information or to schedule an appointment.***`,
  },
  {
    id: 2,
    title: 'What is "Long Covid"?',
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/covidlongpic.jpg-7zJDuOj4PblQREeGna6YpQ0rDP2opu.jpeg",
    category: "ozone-therapy",
    publishDate: "20/12/2022",
    content: `Long Covid, also known as "post-Covid syndrome," refers to persistent symptoms following SARS-CoV-2 infection, lasting weeks or months after recovery.

The symptoms, duration, and intensity vary significantly from patient to patient.

Over the past years, Covid-19 symptoms have evolved with new variants, but the most common symptoms include:
• Fever, cough, general malaise
• Muscle and bone pain
• Sore throat, fatigue
• Brain fog (difficulty concentrating, confusion, memory issues, cognitive fatigue)

Long Covid can present itself in various symptomatic forms. The most common include persistent symptoms listed above, but it can also manifest as:
• Chest pain, arrhythmias, blood pressure fluctuations
• Nausea, loss of appetite, diarrhea
• Sleep disorders, depression, anxiety, stress

This persistent symptom complex is believed to be caused by an altered immune response, leading to a post-viral inflammatory state.

Additionally, Long Covid can affect even those who experienced mild or asymptomatic infections.

The Benefits of Ozone Therapy

One of the main benefits of Oxygen-Ozone Therapy is its ability to modulate and strengthen the immune system. It acts as a powerful anti-inflammatory, has a detoxifying and regenerative effect, and serves as an effective antiviral.

The SARS-CoV-2 virus causes damage through immune system dysregulation, triggering excessive production of pro-inflammatory cytokines. This leads to tissue and organ damage, compromising normal body functions.

The immunomodulatory effect of Oxygen-Ozone Therapy helps normalize the body's inflammatory response.

It also improves oxygenation in tissues and organs such as:
• Lungs, brain, kidneys, liver, heart, and muscles,

Providing remarkable therapeutic benefits for Long Covid patients.

The treatment used is Major **Auto Hemotherapy** (GAET), with a duration of approximately 40 minutes.

Dr. Maico Battistello, with his expertise in this therapeutic field, will tailor the most suitable treatment plan based on the severity and duration of the patient's symptoms.`,
  },
  // Empty placeholders for remaining articles
  ...Array.from({ length: 28 }, (_, i) => ({
    id: i + 3,
    title: "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    category: "all" as Category,
  })),
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)
  const [highlightedContent, setHighlightedContent] = useState<string | null>(null)
  const articlesPerPage = 15

  const filterRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isFilterOpen])

  // Effect to highlight search terms in article content
  useEffect(() => {
    if (activeArticle && searchTerm.trim()) {
      const content = activeArticle.content || ""
      const regex = new RegExp(`(${searchTerm})`, "gi")
      const highlighted = content.replace(regex, '<span class="bg-yellow-200 underline">$1</span>')
      setHighlightedContent(highlighted)
    } else if (activeArticle) {
      setHighlightedContent(null)
    }
  }, [searchTerm, activeArticle])

  const filteredArticles = articles.filter((article) => {
    if (activeArticle) {
      // When viewing an article, don't filter the list
      return true
    }
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const currentArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage)

  const handleArticleClick = (article: Article, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveArticle(article)
    setSearchTerm("") // Clear search when opening an article
    setHighlightedContent(null)
    // Scroll to top when viewing an article
    window.scrollTo(0, 0)
  }

  const handleBackToList = () => {
    setActiveArticle(null)
    setSearchTerm("") // Clear search when returning to list
    setHighlightedContent(null)
  }

  // Generate breadcrumb items based on current view
  const getBreadcrumbItems = () => {
    const baseItems = [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
    ]

    if (activeArticle) {
      return [...baseItems, { label: activeArticle.title, href: `/blog/${activeArticle.id}` }]
    }

    return baseItems
  }

  return (
    <div className="pt-20 min-h-screen">
      <Breadcrumb items={getBreadcrumbItems()} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - 20% */}
          <div className="w-full lg:w-1/5">
            <div className="sticky top-24 space-y-6">
              {/* Search Bar - Changes placeholder based on view */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={activeArticle ? "Search keywords..." : "Search article..."}
                  className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>

              {/* Category Filter - Only shown when not viewing an article */}
              {!activeArticle && (
                <div className="category-dropdown-container" ref={filterRef}>
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full px-4 py-2 text-left border rounded-md flex justify-between items-center hover:bg-gray-50"
                  >
                    <span>Category: {selectedCategory.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isFilterOpen && (
                    <div className="category-dropdown">
                      {["all", "osteopathy", "ozone-therapy", "legal-medicine"].map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category as Category)
                            setIsFilterOpen(false)
                            setCurrentPage(1)
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50"
                        >
                          {category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Article Info - Only shown when viewing an article on desktop */}
              {activeArticle && (
                <div className="bg-gray-50 p-4 rounded-lg hidden md:block">
                  <h3 className="font-semibold mb-2">Article Info</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Category: {activeArticle.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </p>
                  <p className="text-sm text-gray-600">
                    Reading time: {Math.ceil((activeArticle.content?.length || 0) / 1000)} min
                  </p>
                </div>
              )}

              {/* Pagination Info and Controls - Only shown when not viewing an article */}
              {!activeArticle && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </div>

                  {/* Desktop Pagination Controls */}
                  <div className="hidden lg:flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - 80% */}
          <div className="w-full lg:w-4/5">
            {activeArticle ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Article Header with Back Button and Metadata - Aligned horizontally on desktop */}
                <div className="article-header-desktop">
                  <div className="article-header-left">
                    <button
                      onClick={handleBackToList}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Back to articles"
                    >
                      <ArrowLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    <div className="flex items-center ml-2">
                      <span className="text-gray-600">by Maico Battistello</span>
                      <span className="article-metadata">{activeArticle.publishDate}</span>
                    </div>
                  </div>
                </div>

                {/* Article Featured Image */}
                <div className="article-image-container">
                  <Image
                    src={activeArticle.image || "/placeholder.svg"}
                    alt={activeArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose max-w-none article-content">
                  {activeArticle.content.split("\n\n").map((paragraph, index) => {
                    // Check if paragraph is a heading or subtitle
                    if (paragraph === "The Benefits of Ozone Therapy" || paragraph === "What exactly is the flu?") {
                      return (
                        <h2 key={index} className="article-subtitle">
                          {paragraph}
                        </h2>
                      )
                    }

                    // Check if paragraph contains Ozone Therapy or Oxygen-Ozone Therapy text to wrap in AnimatedLink
                    if (paragraph.includes("Ozone Therapy") || paragraph.includes("Oxygen-Ozone Therapy")) {
                      const parts = paragraph.split(/(Ozone Therapy|Oxygen-Ozone Therapy)/g).map((part, i) => {
                        if (part === "Ozone Therapy" || part === "Oxygen-Ozone Therapy") {
                          return (
                            <AnimatedLink key={i} href="/ozone-therapy">
                              {part}
                            </AnimatedLink>
                          )
                        }
                        return part
                      })
                      return <p key={index}>{parts}</p>
                    }

                    // Handle bold text
                    if (paragraph.includes("**")) {
                      const parts = paragraph.split(/\*\*(.*?)\*\*/g)
                      return (
                        <p key={index}>
                          {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
                        </p>
                      )
                    }

                    // Handle italic text
                    if (paragraph.includes("***")) {
                      const parts = paragraph.split(/\*\*\*(.*?)\*\*\*/g)
                      return (
                        <p key={index}>
                          {parts.map((part, i) =>
                            i % 2 === 1 ? (
                              <em key={i} className="font-bold">
                                {part}
                              </em>
                            ) : (
                              part
                            ),
                          )}
                        </p>
                      )
                    }

                    // Regular paragraph
                    return <p key={index}>{paragraph}</p>
                  })}

                  {/* Insert articolo1pic.jpg after "The Benefits of Ozone Therapy" section */}
                  {activeArticle.id === 1 && (
                    <div className="article-image-container">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/articolo1pic.jpg-ZLi9Q4rvxxCqyMGfn62XNPMVDnLgcH.jpeg"
                        alt="Ozone Therapy Equipment"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Book Appointment Button with hover-lift animation */}
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white hover-lift">
                    <Link href="/contacts" className="flex items-center gap-2 no-underline">
                      <Calendar className="h-5 w-5" />
                      <span>Book an Appointment</span>
                    </Link>
                  </Button>
                </div>

                {/* Related Articles Section */}
                {activeArticle && (
                  <div className="mt-16">
                    <AnimatedScrollElement direction="up" delay={0.1}>
                      <h3 className="text-2xl font-bold mb-8 text-center">Related Articles</h3>
                    </AnimatedScrollElement>
                    <AnimatedScrollElement direction="up" delay={0.3}>
                      <div className="max-w-4xl mx-auto">
                        <QuadrantCarousel
                          items={articles
                            .filter(
                              (article) =>
                                article.category === activeArticle.category && article.id !== activeArticle.id,
                            )
                            .map((article) => ({
                              title: article.title,
                              image: article.image,
                              link: `/blog/${article.id}`,
                            }))}
                        />
                      </div>
                    </AnimatedScrollElement>
                  </div>
                )}
              </div>
            ) : (
              <>
                {currentArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {currentArticles.map((article) => (
                      <AnimatedScrollElement key={article.id} direction="up" delay={0.1}>
                        <a
                          href={`/blog/${article.id}`}
                          onClick={(e) => handleArticleClick(article, e)}
                          className="group w-full"
                        >
                          <div className="blog-card shadow-md hover:shadow-lg transition-shadow w-full">
                            <div className="blog-card-image h-64 sm:h-48">
                              <Image
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                fill
                                className="object-cover transform transition-transform group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold">{article.title}</h3>
                              {article.category !== "all" && (
                                <span className="text-sm text-gray-600">
                                  {article.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                </span>
                              )}
                            </div>
                          </div>
                        </a>
                      </AnimatedScrollElement>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No articles found.</p>
                  </div>
                )}

                {/* Mobile Pagination */}
                <div className="mt-8 flex justify-center lg:hidden">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border rounded-md disabled:opacity-50 hover-lift"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border rounded-md disabled:opacity-50 hover-lift"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

