import Link from "next/link";

export default function ProductHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Powerful AI Voice <span className="text-primary">Platform</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Everything you need to build, deploy, and manage intelligent voice agents 
          that transform customer experiences and automate business processes.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Start Building
        </Link>
      </div>
    </section>
  );
}