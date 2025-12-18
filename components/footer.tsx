"use client"

import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-mono font-bold text-primary">{"{}"} </span>
              <span className="text-lg font-bold">CompileStrength</span>
            </div>
            <p className="text-muted-foreground text-sm">AI-powered training for engineers who code and lift.</p>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://compilestrength.com/signup" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://compilestrength.com/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/compilestrength/?viewAsMember=true" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  About
                </a>
              </li>
              <li>
                <a href="https://github.com/bobadilla-tech" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://compilestrength.com/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="https://compilestrength.com/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© 2025 Eliaz Bobadilla. All rights reserved.</p>
              <p className="text-xs mt-1">CompileStrength™ is a trademark of Eliaz Bobadilla.</p>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://x.com/compilestrength" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/bobadilla-tech" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/company/compilestrength/?viewAsMember=true" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono font-semibold">Get training tips for engineer-athletes</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
