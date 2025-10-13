import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/constants";
import SlideIn from "@/components/animations/slide-in";
import Link from "next/link";

export default function PricingComparison() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="container mx-auto max-w-7xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Choose the perfect plan for your business needs
          </p>
        </SlideIn>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <SlideIn key={plan.name} delay={index * 0.1}>
              <div
                className={`relative bg-background rounded-lg p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-primary shadow-lg shadow-primary/20"
                    : "border border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-2 border-primary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Link>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}