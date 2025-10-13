import { timelineEvents } from "@/lib/constants";
import SlideIn from "@/components/animations/slide-in";

export default function TimelineSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="container mx-auto max-w-5xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Building the future of AI-powered communication
          </p>
        </SlideIn>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <SlideIn key={event.year} delay={index * 0.1}>
                <div
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <div
                      className={`bg-background border border-border rounded-lg p-6 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="text-primary font-bold text-lg mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}