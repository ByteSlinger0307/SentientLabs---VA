import { Target, Lightbulb, Brain } from "lucide-react";
import SlideIn from "@/components/animations/slide-in";

export default function ValuesGrid() {
  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "We build trust through transparency, ethical AI practices, and honest communication with our clients and team."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI and voice technology to deliver cutting-edge solutions."
    },
    {
      icon: Brain,
      title: "Intelligence",
      description: "We leverage advanced AI and machine learning to create voice agents that truly understand and adapt to user needs."
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24 bg-muted/30">
      {/* Consistent container width */}
      <div className="container mx-auto max-w-7xl">
        <SlideIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Core Values
            </h2>
          </div>
        </SlideIn>

        {/* Grid with better responsive behavior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <SlideIn key={value.title} delay={index * 0.1}>
              <div className="group bg-background border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                {/* Icon container with hover effect */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}