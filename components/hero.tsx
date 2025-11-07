"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border w-fit">
              <span className="font-mono text-sm text-primary">v0.1.0</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-mono font-bold text-balance leading-tight">
              Debug Your <span className="text-primary">Gains</span>
              <br />
              Train Like You <span className="text-primary">Code</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              AI-powered workout programming for engineers who treat training like they treat their code: systematic,
              debuggable, and version-controlled.
            </p>

            <div className="flex gap-4 flex-wrap pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2 group">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-card transition-all duration-200">
                See How It Works
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent"></div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-primary">{">"}</span> compile --gains
                </div>
                <div className="text-green-400">
                  <span className="text-primary">{">"}</span> Building personalized program...
                </div>
                <div className="text-foreground mt-4">
                  <span className="text-primary">{">"}</span> program.json
                </div>
                <div className="text-muted-foreground text-xs mt-2">
                  <span className="text-primary">{"{"}</span>
                  <br />
                  &nbsp;&nbsp;"split": "PPL",
                  <br />
                  &nbsp;&nbsp;"duration": "12 weeks",
                  <br />
                  &nbsp;&nbsp;"coach": "Powerlifting Pro"
                  <br />
                  <span className="text-primary">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
