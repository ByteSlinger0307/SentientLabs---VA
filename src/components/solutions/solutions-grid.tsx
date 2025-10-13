import { Headphones, ShoppingCart, Calendar, Bell } from "lucide-react";
import SlideIn from "@/components/animations/slide-in";
import { Check } from "lucide-react";

export default function SolutionsGrid() {
  const solutions = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Automate tier-1 support with intelligent voice agents that resolve common issues instantly, escalating complex cases to human agents.",
      benefits: ["24/7 availability", "60% reduction in support costs", "90% customer satisfaction"]
    },
    {
      icon: ShoppingCart,
      title: "Sales & Lead Qualification",
      description: "Engage prospects, qualify leads, and schedule meetings automatically. Never miss a sales opportunity.",
      benefits: ["3x more qualified leads", "50% faster response time", "Increased conversion rates"]
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Let voice agents handle appointment booking, rescheduling, and reminders across your organization.",
      benefits: ["Zero double bookings", "80% fewer no-shows", "Automated reminders"]
    },
    {
      icon: Bell,
      title: "Proactive Notifications",
      description: "Send intelligent voice notifications for order updates, payment reminders, and critical alerts.",
      benefits: ["Higher engagement rates", "Reduced manual outreach", "Improved customer retention"]
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Use Cases & Solutions
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SlideIn key={solution.title} delay={index * 0.1}>
              <div className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}