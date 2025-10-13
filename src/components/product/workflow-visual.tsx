import { Phone, Brain, Zap, CheckCircle } from "lucide-react";
import SlideIn from "@/components/animations/slide-in";

export default function WorkflowVisual() {
  const steps = [
    {
      icon: Phone,
      title: "Customer Call",
      description: "Voice agent receives inbound or makes outbound call"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Natural language understanding analyzes intent and context"
    },
    {
      icon: Zap,
      title: "Smart Response",
      description: "Agent responds intelligently or triggers automated workflows"
    },
    {
      icon: CheckCircle,
      title: "Resolution",
      description: "Issue resolved or escalated to human agent if needed"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            From call to resolution in seconds
          </p>
        </SlideIn>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ width: '75%', left: '12.5%' }} />

          {steps.map((step, index) => (
            <SlideIn key={step.title} delay={index * 0.15}>
              <div className="relative text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}