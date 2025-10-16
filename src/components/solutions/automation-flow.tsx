import SlideIn from "@/components/animations/slide-in";
import { ArrowRight } from "lucide-react";

export default function AutomationFlow() {
  const flowSteps = [
    { 
      step: 1,
      label: "Trigger Event", 
      description: "Incoming call, scheduled task, or API trigger" 
    },
    { 
      step: 2,
      label: "Voice Agent Engages", 
      description: "Natural conversation with customer" 
    },
    { 
      step: 3,
      label: "Process & Analyze", 
      description: "AI understands intent and context" 
    },
    { 
      step: 4,
      label: "Take Action", 
      description: "Execute workflows and integrations" 
    },
    { 
      step: 5,
      label: "Track & Optimize", 
      description: "Analytics and continuous improvement" 
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      {/* Consistent container width */}
      <div className="container mx-auto max-w-7xl">
        <SlideIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Intelligent Automation Flow
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our voice agents automate end-to-end workflows
            </p>
          </div>
        </SlideIn>

        {/* Desktop flow - horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4">
          {flowSteps.map((step, index) => (
            <SlideIn key={step.label} delay={index * 0.1}>
              <div className="flex items-center gap-3 xl:gap-4">
                {/* Step card */}
                <div className="group bg-background border-2 border-primary/30 rounded-xl p-5 xl:p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 w-[180px] xl:w-[200px]">
                  <div className="text-xs font-bold text-primary mb-2 tracking-wider">
                    STEP {step.step}
                  </div>
                  <h4 className="font-semibold text-sm xl:text-base mb-2 group-hover:text-primary transition-colors leading-tight">
                    {step.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow between steps */}
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary/50 flex-shrink-0" />
                )}
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Mobile/Tablet flow - vertical */}
        <div className="lg:hidden space-y-6">
          {flowSteps.map((step, index) => (
            <SlideIn key={step.label} delay={index * 0.1}>
              <div className="relative">
                {/* Step card */}
                <div className="bg-background border-2 border-primary/30 rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Step number badge */}
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{step.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-xs font-bold text-primary mb-1 tracking-wider">
                        STEP {step.step}
                      </div>
                      <h4 className="font-semibold text-base sm:text-lg mb-2">
                        {step.label}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < flowSteps.length - 1 && (
                  <div className="absolute left-[29px] top-[calc(100%+0px)] w-0.5 h-6 bg-primary/30" />
                )}
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}