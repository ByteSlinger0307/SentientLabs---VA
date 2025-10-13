export default function AboutHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-primary">SentientLabs</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          We're on a mission to transform business communication through intelligent 
          AI voice agents. Founded in 2021, we've helped over 500 businesses automate 
          and scale their customer interactions with cutting-edge voice AI technology.
        </p>
      </div>
    </section>
  );
}