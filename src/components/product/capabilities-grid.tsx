import { MessageSquare, LineChart, Users, Globe, Workflow, Lock } from "lucide-react";
import SlideIn from "@/components/animations/slide-in";

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Voice agents that understand context and respond naturally, creating seamless customer experiences."
    },
    {
      icon: LineChart,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with actionable insights to optimize your voice agent performance."
    },
    {
      icon: Users,
      title: "Multi-Agent Support",
      description: "Deploy multiple specialized agents across different departments and use cases simultaneously."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with customers in their preferred language with support for 30+ languages."
    },
    {
      icon: Workflow,
      title: "Seamless Integrations",
      description: "Connect with your existing tools and platforms through our extensive integration library."
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption, compliance certifications, and audit logs."
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Powerful Capabilities
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <SlideIn key={capability.title} delay={index * 0.1}>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}