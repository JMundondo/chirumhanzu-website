import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      location: "United Kingdom",
      rating: 5,
      text: "My stay in Chirumhanzu was absolutely magical! The homestay experience gave me authentic insights into Zimbabwean culture. The stories shared by the elders were unforgettable.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Michael Chen",
      location: "Australia", 
      rating: 5,
      text: "As a historian, I was fascinated by the rich cultural heritage of Chirumhanzu. The Holy Cross Mission and ancient sites exceeded my expectations. Perfect for cultural tourism!",
      image: "/placeholder.svg"
    },
    {
      name: "Tendai Mukamuri",
      location: "Zimbabwean Diaspora",
      rating: 5,
      text: "Visiting Chirumhanzu helped me reconnect with my roots. The fishing experiences and storytelling nights brought back childhood memories. Highly recommend for anyone seeking authentic Zimbabwe!",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Visitors Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover why travelers from around the world choose Chirumhanzu for authentic cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 h-full border border-border/50 group-hover:border-safari-gold/20">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-safari-gold/60" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-safari-gold text-safari-gold" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-safari-gold/20 to-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-safari-gold/30 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-muted/50 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Visitors</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Cultural Sites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;