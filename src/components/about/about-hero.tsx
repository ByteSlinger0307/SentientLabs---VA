export default function AboutHero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-700" />
      </div>

      {/* Content container with consistent max-width */}
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          {/* Main heading with gradient effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-gradient">
              SentientLabs
            </span>
          </h1>
          
          {/* Description with better readability */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We&apos;re on a mission to transform business communication through intelligent 
            AI voice agents. Founded in 2021, we&apos;ve helped over 500 businesses automate 
            and scale their customer interactions with cutting-edge voice AI technology.
          </p>
        </div>
      </div>
    </section>
  );
}