export default function SolutionsHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Solutions for Every <span className="text-primary">Business Need</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Discover how AI voice agents can transform different aspects of your business, 
          from customer support to sales and beyond.
        </p>
      </div>
    </section>
  );
}