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
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Core Values
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <SlideIn key={value.title} delay={index * 0.1}>
              <div className="bg-background border border-border rounded-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}