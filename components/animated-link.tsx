"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface AnimatedLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function AnimatedLink({ href, children, className = "" }: AnimatedLinkProps) {
  return (
    <Link href={href} className={`animated-link ${className}`}>
      {children}
    </Link>
  )
}

