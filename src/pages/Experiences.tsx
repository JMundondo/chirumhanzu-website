"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Users,
  Camera,
  Heart,
  Star,
  TrendingUp,
  DollarSign,
  MapPin,
  Calendar,
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

const Experiences = () => {
  const experiences = [
    {
      title: "Cultural Heritage Day Tour",
      description:
        "Immerse yourself in local traditions, visit traditional homesteads, and experience authentic Zimbabwean culture.",
      duration: "Full Day",
      groupSize: "2-8 people",
      icon: Heart,
      price: "From $45",
      rating: 4.9,
      badge: "🏆 Most Popular",
      highlights: [
        "Traditional homestead visits",
        "Local craft demonstrations",
        "Cultural storytelling",
        "Traditional lunch included",
      ],
    },
    {
      title: "Holy Cross Mission & History Tour",
      description:
        "Explore the historic Holy Cross Mission and learn about Chirumhanzu's colonial and post-independence history.",
      duration: "Half Day",
      groupSize: "Any size",
      icon: Camera,
      price: "From $25",
      rating: 4.8,
      badge: "📿 Heritage Focus",
      highlights: [
        "Historic mission buildings",
        "Dam and surroundings",
        "Local history insights",
        "Photo opportunities",
      ],
    },
    {
      title: "Community Fishing Experience",
      description:
        "Join local fishermen for a traditional fishing experience at local dams and rivers.",
      duration: "Half Day",
      groupSize: "2-6 people",
      icon: Users,
      price: "From $35",
      rating: 4.7,
      badge: "🐟 Fresh Catch",
      highlights: [
        "Traditional fishing methods",
        "Fresh fish preparation",
        "Local fishing stories",
        "Take your catch home",
      ],
    },
  ];

  const itineraries = [
    {
      title: "Day Trip Adventure",
      duration: "1 Day",
      price: "From $75",
      originalPrice: "$95",
      description: "Perfect introduction to Chirumhanzu's highlights",
      included: "Transport, lunch, guide",
      popular: false,
    },
    {
      title: "Cultural Immersion",
      duration: "2 Days",
      price: "From $145",
      originalPrice: "$180",
      description: "Deep dive into local culture with homestay experience",
      included: "Homestay, all meals, activities",
      popular: true,
    },
    {
      title: "Complete Explorer",
      duration: "3 Days",
      price: "From $220",
      originalPrice: "$275",
      description: "Comprehensive tour covering all major attractions",
      included: "Everything + fishing gear",
      popular: false,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unique Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover authentic Zimbabwean culture through carefully crafted
              experiences that connect you with our community and heritage.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6"></div>
          </div>

          {/* Experience Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-gold/20 rounded-full mb-4 group-hover:bg-safari-gold/30 transition-colors">
                <MapPin className="h-8 w-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Sacred Sites
              </h3>
              <p className="text-muted-foreground">
                Historic missions, hills, and wetlands to explore
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-gold/20 rounded-full mb-4 group-hover:bg-safari-gold/30 transition-colors">
                <Calendar className="h-8 w-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Rich Experiences
              </h3>
              <p className="text-muted-foreground">
                Cultural tours, fishing, and storytelling nights
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safari-gold/20 rounded-full mb-4 group-hover:bg-safari-gold/30 transition-colors">
                <Users className="h-8 w-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Local Community
              </h3>
              <p className="text-muted-foreground">
                Authentic homestays and community experiences
              </p>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-safari-gold/30 bg-gradient-to-b from-card to-card/50 relative overflow-hidden"
              >
                {/* Popular Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-safari-gold/20 to-secondary/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-safari-gold border border-safari-gold/20">
                  {experience.badge}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 bg-gradient-to-br from-safari-gold/20 to-safari-gold/10 rounded-xl group-hover:from-safari-gold/30 group-hover:to-safari-gold/20 transition-all duration-300 shadow-sm">
                      <experience.icon className="h-7 w-7 text-safari-gold" />
                    </div>
                    <div className="text-right text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center justify-end">
                        <Clock className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center justify-end">
                        <Users className="h-4 w-4 mr-1" />
                        {experience.groupSize}
                      </div>
                    </div>
                  </div>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-safari-gold text-safari-gold" />
                        <span className="text-sm font-bold text-card-foreground">
                          {experience.rating}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        (200+ reviews)
                      </span>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {experience.price}
                    </div>
                  </div>

                  <CardTitle className="text-xl group-hover:text-safari-gold transition-colors mb-2">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {experience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {experience.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-safari-gold to-secondary rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <BookingModal
                        experience={{
                          title: experience.title,
                          price: experience.price,
                          duration: experience.duration,
                          groupSize: experience.groupSize,
                          type: experience.title,
                        }}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-safari-gold/30 text-safari-gold hover:bg-safari-gold/10"
                    >
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Itineraries Section */}
          <div className="bg-gradient-to-br from-card to-card/70 rounded-3xl p-8 border shadow-[var(--shadow-elegant)] backdrop-blur-sm">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                🗓️ Complete Tour Packages
              </h3>
              <p className="text-muted-foreground text-lg">
                All-inclusive packages with special pricing - save up to 30%
                compared to individual bookings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itineraries.map((itinerary, index) => (
                <div
                  key={index}
                  className={`relative text-center p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-[var(--shadow-adventure)] ${
                    itinerary.popular
                      ? "bg-gradient-to-b from-safari-gold/10 to-safari-gold/5 border-safari-gold shadow-[var(--shadow-gold)] scale-105"
                      : "bg-gradient-to-b from-muted/50 to-muted/30 border-border hover:border-safari-gold/30"
                  }`}
                >
                  {itinerary.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-safari-gold to-secondary text-safari-gold-foreground px-4 py-2 rounded-full text-sm font-bold shadow-[var(--shadow-gold)]">
                      ⭐ Most Popular
                    </div>
                  )}

                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    {itinerary.title}
                  </h4>
                  <div className="text-3xl font-bold text-safari-gold mb-2">
                    {itinerary.duration}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {itinerary.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {itinerary.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {itinerary.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-safari-gold font-medium">
                      {itinerary.included}
                    </div>
                  </div>

                  <div className="w-full">
                    <BookingModal
                      experience={{
                        title: itinerary.title,
                        price: itinerary.price,
                        duration: itinerary.duration,
                        type: itinerary.title,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicator */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-safari-gold text-safari-gold" />
                  <span>4.9/5 rating</span>
                </div>
                <span>•</span>
                <span>💰 Money-back guarantee</span>
                <span>•</span>
                <span>📞 24/7 support</span>
              </div>
            </div>
          </div>

          {/* Featured Cultural Story */}
          <div className="bg-gradient-to-r from-earth-brown to-accent rounded-2xl p-8 md:p-12 text-earth-brown-foreground mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Stories That Define Us
                  </h3>
                  <p className="text-lg leading-relaxed mb-6 opacity-90">
                    Every corner of Chirumhanzu has a story to tell. From the
                    ancient hills that witnessed the first settlements to the
                    sacred sites where our ancestors communed with the spirits,
                    our land is alive with history.
                  </p>
                  <p className="text-lg leading-relaxed mb-8 opacity-90">
                    Join our community elders for evening storytelling sessions
                    where oral traditions come alive, and history becomes more
                    than just facts—it becomes a living, breathing part of our
                    identity.
                  </p>
                  <BookingModal
                    experience={{
                      title: "Cultural Storytelling Experience",
                      price: "From $25",
                      duration: "2-3 hours",
                      type: "Cultural Heritage",
                    }}
                  />
                </div>
                <div className="lg:text-center">
                  <div className="bg-earth-brown-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-earth-brown-foreground/20">
                    <h4 className="text-xl font-semibold mb-4">
                      Cultural Experiences Include:
                    </h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-earth-brown-foreground rounded-full mr-3"></div>
                        <span>Evening storytelling sessions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-earth-brown-foreground rounded-full mr-3"></div>
                        <span>Traditional craft workshops</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-earth-brown-foreground rounded-full mr-3"></div>
                        <span>Cultural ceremony participation</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-earth-brown-foreground rounded-full mr-3"></div>
                        <span>Meet local community leaders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
