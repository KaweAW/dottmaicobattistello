"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NavbarProps {
  onMenuToggle?: (isOpen: boolean) => void
}

export default function Navbar({ onMenuToggle = () => {} }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen)
    onMenuToggle(isOpen)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 backdrop-blur-sm`}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 navbar-gradient"
          style={{
            opacity: isScrolled ? 0.85 : 0.95, // Increased opacity values
            transition: "opacity 0.3s ease",
          }}
        />
        <div className="container relative z-10 flex h-full items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logobianco-iOw5nJg5RRQ7z91SYNxn55vTLauFgy.png"
              alt="Dr. Maico Battistello Logo"
              width={220}
              height={80}
              className="h-16 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/ozone-osteopathy" className="nav-link font-bold">
                Ozone Therapy + Osteopathy
              </Link>
              <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/ozone-therapy"
                  className="block px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Ozone Therapy
                </Link>
                <Link
                  href="/osteopathy"
                  className="block px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Osteopathy
                </Link>
              </div>
            </div>
            <Link href="/legal-medicine" className="nav-link font-bold">
              Legal Medicine
            </Link>
            <Link href="/about-me" className="nav-link font-bold">
              About Me
            </Link>
            <Link href="/blog" className="nav-link font-bold">
              Blog
            </Link>
            <Link href="/contacts" className="nav-link font-bold">
              Contacts
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-transparent relative z-10"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 lg:hidden flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 navbar-gradient"
          style={{
            opacity: 0.95, // Increased from 1 to match the new style
          }}
        />
        <div className="relative z-10 flex justify-between items-center h-20 px-4 border-b border-white/20">
          <Link href="/" className="flex items-center" onClick={() => toggleMenu(false)}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logobianco-iOw5nJg5RRQ7z91SYNxn55vTLauFgy.png"
              alt="Dr. Maico Battistello Logo"
              width={180}
              height={65}
              className="h-14 w-auto"
              priority
              quality={100}
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => toggleMenu(false)}
          >
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>

        <nav className="relative z-10 flex flex-col p-4 pt-6 space-y-1">
          <div>
            <Link
              href="/ozone-osteopathy"
              className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block nav-link"
              onClick={() => toggleMenu(false)}
            >
              Ozone Therapy + Osteopathy
            </Link>
            <Link
              href="/ozone-therapy"
              className="py-3 px-2 pl-6 text-base text-white hover:bg-white/10 rounded-md block"
              onClick={() => toggleMenu(false)}
            >
              Ozone Therapy
            </Link>
            <Link
              href="/osteopathy"
              className="py-3 px-2 pl-6 text-base text-white hover:bg-white/10 rounded-md block"
              onClick={() => toggleMenu(false)}
            >
              Osteopathy
            </Link>
          </div>
          <Link
            href="/legal-medicine"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block nav-link"
            onClick={() => toggleMenu(false)}
          >
            Legal Medicine
          </Link>
          <Link
            href="/about-me"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block nav-link"
            onClick={() => toggleMenu(false)}
          >
            About Me
          </Link>
          <Link
            href="/blog"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block nav-link"
            onClick={() => toggleMenu(false)}
          >
            Blog
          </Link>
          <Link
            href="/contacts"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block nav-link"
            onClick={() => toggleMenu(false)}
          >
            Contacts
          </Link>
        </nav>
      </div>
    </>
  )
}

