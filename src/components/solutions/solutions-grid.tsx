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
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24 bg-muted/30">
      {/* Consistent container width */}
      <div className="container mx-auto max-w-7xl">
        <SlideIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Use Cases & Solutions
            </h2>
          </div>
        </SlideIn>

        {/* Grid with better responsive behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <SlideIn key={solution.title} delay={index * 0.1}>
              <div className="group bg-background border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                {/* Icon container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Benefits list */}
                <div className="space-y-3">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90">
                        {benefit}
                      </span>
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