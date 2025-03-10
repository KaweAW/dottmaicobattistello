"use client"

import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import type React from "react"
import { forwardRef } from "react"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className = "", asChild = false, ...props }, ref) => {
    return (
      <Button ref={ref} className={`hover-lift ${className}`} asChild={asChild} {...props}>
        {children}
      </Button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export default AnimatedButton

