"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect to get started",
    features: ["One program generation", "Basic workout tracking", "Progress dashboard"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    description: "Most popular for serious lifters",
    features: [
      "Everything in Free",
      "Unlimited program generation",
      "Gains Debugger",
      "All AI coaches",
      "Advanced analytics",
      "Export workouts",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: "$29.99",
    period: "/mo",
    description: "For competitive athletes",
    features: [
      "Everything in Pro",
      "Real-time AI coaching",
      "Priority support",
      "Custom coach training",
      "Advanced metrics",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">Choose the plan that fits your goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card/50 ring-2 ring-primary/50 transform md:scale-105"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold font-mono mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold font-mono">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg hover:shadow-primary/50"
                      : "bg-background border border-border text-foreground hover:bg-card"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
