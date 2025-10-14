import { testimonials } from "@/lib/constants";
import SlideIn from "@/components/animations/slide-in";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="container mx-auto max-w-6xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            See what our clients say about transforming their business with AI
          </p>
        </SlideIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideIn key={index} delay={index * 0.1}>
              <div className="bg-muted/30 border border-border rounded-lg p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground mb-6 flex-1 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}