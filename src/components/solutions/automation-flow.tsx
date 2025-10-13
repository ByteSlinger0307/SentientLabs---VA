import SlideIn from "@/components/animations/slide-in";
import { ArrowRight } from "lucide-react";

export default function AutomationFlow() {
  const flowSteps = [
    { label: "Trigger Event", description: "Incoming call, scheduled task, or API trigger" },
    { label: "Voice Agent Engages", description: "Natural conversation with customer" },
    { label: "Process & Analyze", description: "AI understands intent and context" },
    { label: "Take Action", description: "Execute workflows and integrations" },
    { label: "Track & Optimize", description: "Analytics and continuous improvement" }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Intelligent Automation Flow
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            See how our voice agents automate end-to-end workflows
          </p>
        </SlideIn>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {flowSteps.map((step, index) => (
            <SlideIn key={step.label} delay={index * 0.1}>
              <div className="flex items-center gap-4">
                <div className="bg-background border-2 border-primary rounded-lg p-6 text-center min-w-[180px]">
                  <div className="text-sm font-bold text-primary mb-2">STEP {index + 1}</div>
                  <h4 className="font-semibold mb-1">{step.label}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary hidden md:block flex-shrink-0" />
                )}
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}