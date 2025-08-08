const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hero to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-hero-foreground/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-hero-foreground/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 border border-hero-foreground/20 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/4655ea2e-e052-46ce-8cbf-7acc82bd0ab4.png"
              alt="Visit Chirumhanzu"
              className="h-32 w-auto mx-auto md:h-40"
            />
          </div>

          {/* Tagline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6 leading-tight">
            Preserving our culture. Telling our stories.
          </h1>

          <p className="text-lg md:text-xl text-hero-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the heart of Chirumhanzu — a place where history, heritage,
            and community come alive. From sacred shrines and historic landmarks
            to vibrant traditions and natural beauty, this is your starting
            point for exploring, learning, and connecting with one of Zimbabwe's
            most culturally rich regions
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-safari-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
