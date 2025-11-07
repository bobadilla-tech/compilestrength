"use client"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer, FAANG",
    quote: "Finally a program that gets it. The debugging approach to plateaus changed how I think about training.",
    initials: "AC",
  },
  {
    name: "Jordan Rivera",
    role: "Startup Founder",
    quote: "CompileStrength saved me hours. The AI coach understands my constraints and time limitations perfectly.",
    initials: "JR",
  },
  {
    name: "Sam Patel",
    role: "Data Scientist",
    quote: "The version control for workouts is genius. I can now track and optimize my training like codebase.",
    initials: "SP",
  },
]

export function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm font-semibold mb-2">BUILT BY ENGINEERS</p>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Trusted by <span className="text-primary">Engineer Athletes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-mono font-bold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="font-mono text-sm text-foreground">
                <span className="text-primary">{'"'}</span>
                {testimonial.quote}
                <span className="text-primary">{'"'}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
