"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-background"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-mono font-bold text-primary group-hover:text-accent transition-colors">
            {"{}"}{" "}
          </span>
          <span className="text-xl font-bold">CompileStrength</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="https://compilestrength.com/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="https://compilestrength.com/login" className="text-muted-foreground hover:text-foreground transition-colors">
            Login
          </Link>
          <Link href="https://compilestrength.com/signup" className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 inline-block">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}
