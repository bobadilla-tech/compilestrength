"use client"

import { Users, Wrench, Bug, GitBranch } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "AI Coaching Personas",
    description:
      "Multiple AI coaching personas for powerlifting, bodybuilding, Olympic lifting, and general fitness. Each coach uses evidence-based programming principles tailored to your discipline.",
  },
  {
    icon: Wrench,
    title: "Science-Based Workout Builder",
    description:
      "Generate personalized workout programs based on exercise science research, your goals, experience level, and physical constraints. Data-driven programming in seconds.",
  },
  {
    icon: Bug,
    title: "Gains Debugger",
    description: "AI-powered analysis to identify why you're plateauing. Get actionable recommendations based on training principles and your workout data. Debug your gains like you debug code.",
  },
  {
    icon: GitBranch,
    title: "GitGains - Workout Version Control",
    description: "Version control for your training programs. Track workout history, compare training blocks, analyze progress metrics, and optimize over time with data.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Powerful Features for
            <br />
            <span className="text-primary">Engineer Athletes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, track, and optimize your training like a professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-mono">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
