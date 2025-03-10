"use client"

import type React from "react"
import { useState } from "react"
import { Phone, MessageSquare, Calendar } from "lucide-react"
import LocationList from "@/components/location-list"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import AnimatedLink from "@/components/animated-link"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    privacyConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [checkboxError, setCheckboxError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked,
    })
    setCheckboxError(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.privacyConsent) {
      setCheckboxError(true)
      // Trigger shake animation
      const checkbox = document.getElementById("privacy-checkbox-container")
      checkbox?.classList.add("animate-shake")
      setTimeout(() => {
        checkbox?.classList.remove("animate-shake")
      }, 500)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          reason: formData.reason,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      alert("Your message has been sent successfully!")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reason: "",
        privacyConsent: false,
      })
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white py-12">
      <div className="container">
        <AnimatedScrollElement direction="up" delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Book Your Appointment Now</h2>
        </AnimatedScrollElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedScrollElement direction="left" delay={0.2}>
            <div>
              <div className="flex flex-col space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+393780639622" className="text-primary hover:underline text-mobile">
                      +39 378 0639 622
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <a
                      href="https://wa.me/393780639622"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-mobile"
                    >
                      Send a message
                    </a>
                  </div>
                </div>
              </div>
              <div className="pl-0">
                <LocationList />
              </div>
            </div>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <div className="flex items-start">
                  <div id="privacy-checkbox-container" className={`relative ${checkboxError ? "animate-shake" : ""}`}>
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleCheckboxChange}
                      required
                      className="sr-only"
                    />
                    <label htmlFor="privacyConsent" className="flex items-center cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <div
                          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ease-out 
                            ${formData.privacyConsent ? "border-primary bg-primary scale-90" : "border-gray-300 hover:border-primary hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"} 
                            group-hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]`}
                        >
                          <svg
                            className={`w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 
                              ${formData.privacyConsent ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                              className={`${formData.privacyConsent ? "animate-draw-check" : ""}`}
                            />
                          </svg>
                        </div>
                        <div
                          className={`absolute w-10 h-10 rounded-full bg-primary/10 transform scale-0 transition-transform duration-300 
                            ${formData.privacyConsent ? "animate-ripple" : ""}`}
                        ></div>
                      </div>
                      <span className="text-mobile text-gray-700 ml-2">
                        I have read the{" "}
                        <AnimatedLink href="/privacy-policy" className="text-primary">
                          Privacy Policy
                        </AnimatedLink>{" "}
                        and consent to data processing in accordance with GDPR Regulation No. 679/2016.
                      </span>
                    </label>
                  </div>
                </div>
                {checkboxError && (
                  <p className="text-red-500 text-sm mt-1 ml-8">Please accept the privacy policy to continue</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary px-8 py-3 text-mobile flex items-center justify-center gap-2 mx-auto hover-lift ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Book Appointment"}
                </button>
              </div>
            </form>
          </AnimatedScrollElement>
        </div>
      </div>
    </div>
  )
}

