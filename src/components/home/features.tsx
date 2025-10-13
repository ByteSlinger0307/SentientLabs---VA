import { Brain, Zap, Shield } from "lucide-react";
import SlideIn from "@/components/animations/slide-in";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Voice Agents",
      description: "AI-powered voice agents that understand context, sentiment, and intent. Deliver natural conversations that feel human."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Automation",
      description: "Automate repetitive tasks and workflows in seconds. Reduce response times from hours to milliseconds."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, SOC 2 compliance, and GDPR ready. Your data is protected with the highest security standards."
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Built for the Intelligent Future
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <SlideIn key={feature.title} delay={index * 0.1}>
              <div className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}