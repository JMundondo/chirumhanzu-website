import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

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
            Discover the heart of Chirumhanzu — a place where history, heritage,
            and community come alive. From sacred shrines and historic landmarks
            to vibrant traditions and natural beauty, this is your starting
            point for exploring, learning, and connecting with one of Zimbabwe’s
            most culturally rich regions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-safari-gold to-secondary hover:from-safari-gold/90 hover:to-secondary/90 text-safari-gold-foreground font-semibold text-lg px-8 py-4 group shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-adventure)] transition-all duration-300"
            >
              🌟 Start Your Adventure
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-hero-foreground/30 text-black hover:bg-hero-foreground/10 font-semibold text-lg px-8 py-4 hover:border-safari-gold/50 hover:text-safari-gold transition-all duration-300"
            >
              🏛️ Discover Culture
            </Button>
          </div>

          {/* Social Proof Banner */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-4 bg-hero-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 text-hero-foreground/90">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-safari-gold/30 rounded-full border-2 border-hero-foreground/20"></div>
                <div className="w-8 h-8 bg-secondary/30 rounded-full border-2 border-hero-foreground/20"></div>
                <div className="w-8 h-8 bg-accent/30 rounded-full border-2 border-hero-foreground/20"></div>
              </div>
              <span className="text-sm font-medium">
                Join 500+ visitors who discovered Chirumhanzu's treasures
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-gold/20 rounded-full mb-4 group-hover:bg-safari-gold/30 transition-colors">
                <MapPin className="h-8 w-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold text-hero-foreground mb-2">
                Sacred Sites
              </h3>
              <p className="text-hero-foreground/80">
                Historic missions, hills, and wetlands to explore
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-gold/20 rounded-full mb-4 group-hover:bg-safari-gold/30 transition-colors">
                <Calendar className="h-8 w-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold text-hero-foreground mb-2">
                Rich Experiences
              </h3>
              <p className="text-hero-foreground/80">
                Cultural tours, fishing, and storytelling nights
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-gold/20 rounded-full mb-4 group-hover:bg-safari-gold/30 transition-colors">
                <Users className="h-8 w-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold text-hero-foreground mb-2">
                Local Community
              </h3>
              <p className="text-hero-foreground/80">
                Authentic homestays and community experiences
              </p>
            </div>
          </div>
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
