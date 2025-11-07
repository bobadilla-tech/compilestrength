"use client"

const steps = [
  {
    number: "01",
    title: "Input Your Data",
    description: "Share your fitness goals, experience level, and any physical limitations.",
  },
  {
    number: "02",
    title: "AI Compiles Your Program",
    description: "Our AI analyzes your data and generates your personalized workout split in seconds.",
  },
  {
    number: "03",
    title: "Train & Track",
    description: "Log workouts in GitGains and watch your progress accumulate over time.",
  },
  {
    number: "04",
    title: "Debug & Optimize",
    description: "Get insights when you plateau and actionable recommendations to break through.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Four simple steps to transform your training</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background border border-border rounded-xl p-8 h-full">
                <div className="text-5xl font-mono font-bold text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 font-mono">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
