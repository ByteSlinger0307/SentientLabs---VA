export default function SolutionsHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background gradient - more subtle */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content container with consistent max-width */}
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          {/* Main heading with better responsive scaling */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
            Solutions for Every{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-gradient">
              Business Need
            </span>
          </h1>
          
          {/* Subtitle with better readability */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how AI voice agents can transform different aspects of your business, 
            from customer support to sales and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}