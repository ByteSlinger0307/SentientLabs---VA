import SlideIn from "@/components/animations/slide-in";
import { Phone, PenTool, TestTube, Rocket } from "lucide-react";

export default function ProcessFlowSection() {
  const processSteps = [
    {
      step: 1,
      icon: Phone,
      title: "Discovery Call",
      description: "We start by understanding your business needs, challenges, and goals through an in-depth consultation.",
      highlights: ["Needs assessment", "Goal definition", "Solution mapping"]
    },
    {
      step: 2,
      icon: PenTool,
      title: "Planning & Development",
      description: "Our team designs and develops a customized AI voice solution tailored specifically to your requirements.",
      highlights: ["Custom design", "AI training", "Integration planning"]
    },
    {
      step: 3,
      icon: TestTube,
      title: "Practical Testing",
      description: "Rigorous testing in real-world scenarios ensures your voice agent performs flawlessly before going live.",
      highlights: ["Quality assurance", "Performance tuning", "User acceptance"]
    },
    {
      step: 4,
      icon: Rocket,
      title: "Deploy",
      description: "Seamless deployment with ongoing support and monitoring to ensure continuous optimization and success.",
      highlights: ["Live deployment", "Team training", "Continuous support"]
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      {/* Consistent container width */}
      <div className="container mx-auto max-w-7xl">
        <SlideIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 4-step approach to delivering exceptional AI voice solutions
            </p>
          </div>
        </SlideIn>

        {/* Desktop Layout - 2x2 Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-10">
          {processSteps.map((step, index) => (
            <SlideIn key={step.title} delay={index * 0.1}>
              <div className="group relative bg-background border-2 border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Mobile/Tablet Layout - Vertical */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <SlideIn key={step.title} delay={index * 0.1}>
              <div className="relative">
                <div className="group bg-background border-2 border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Header with step number and icon */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Step number */}
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connecting line for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[25px] top-[calc(100%+0px)] w-0.5 h-8 bg-primary/30" />
                )}
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Call to action */}
        <SlideIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to get started with your AI voice solution?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-purple-500 px-8 py-3 text-base font-semibold text-white hover:from-purple-500 hover:to-primary transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Schedule Discovery Call
            </a>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}