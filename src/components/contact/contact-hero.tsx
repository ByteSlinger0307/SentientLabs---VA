export default function ContactHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Let&apos;s <span className="text-primary">Connect</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Ready to transform your business with AI voice agents? Get in touch with 
          our team and we&apos;ll show you what&apos;s possible.
        </p>
      </div>
    </section>
  );
}