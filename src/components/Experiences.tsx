import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Camera, Heart } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      title: "Cultural Heritage Day Tour",
      description: "Immerse yourself in local traditions, visit traditional homesteads, and experience authentic Zimbabwean culture.",
      duration: "Full Day",
      groupSize: "2-8 people",
      icon: Heart,
      highlights: ["Traditional homestead visits", "Local craft demonstrations", "Cultural storytelling"]
    },
    {
      title: "Holy Cross Mission & History Tour", 
      description: "Explore the historic Holy Cross Mission and learn about Chirumhanzu's colonial and post-independence history.",
      duration: "Half Day",
      groupSize: "Any size",
      icon: Camera,
      highlights: ["Historic mission buildings", "Dam and surroundings", "Local history insights"]
    },
    {
      title: "Community Fishing Experience",
      description: "Join local fishermen for a traditional fishing experience at local dams and rivers.",
      duration: "Half Day",
      groupSize: "2-6 people", 
      icon: Users,
      highlights: ["Traditional fishing methods", "Fresh fish preparation", "Local fishing stories"]
    }
  ];

  const itineraries = [
    {
      title: "Day Trip Adventure",
      duration: "1 Day",
      price: "Contact for pricing",
      description: "Perfect introduction to Chirumhanzu's highlights"
    },
    {
      title: "Cultural Immersion",
      duration: "2 Days",
      price: "Contact for pricing", 
      description: "Deep dive into local culture with homestay experience"
    },
    {
      title: "Complete Explorer",
      duration: "3 Days",
      price: "Contact for pricing",
      description: "Comprehensive tour covering all major attractions"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unique Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover authentic Zimbabwean culture through carefully crafted experiences 
            that connect you with our community and heritage.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-safari-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-safari-gold/10 rounded-full group-hover:bg-safari-gold/20 transition-colors">
                    <experience.icon className="h-6 w-6 text-safari-gold" />
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />{experience.duration}</div>
                    <div className="flex items-center mt-1"><Users className="h-4 w-4 mr-1" />{experience.groupSize}</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-safari-gold transition-colors">
                  {experience.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {experience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {experience.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-safari-gold rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Itineraries Section */}
        <div className="bg-card rounded-2xl p-8 border shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Sample Itineraries
            </h3>
            <p className="text-muted-foreground">
              Choose from our carefully planned itineraries or let us customize one for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="text-center p-6 bg-muted/30 rounded-xl border border-border hover:border-safari-gold/30 transition-colors">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {itinerary.title}
                </h4>
                <div className="text-2xl font-bold text-safari-gold mb-2">
                  {itinerary.duration}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {itinerary.description}
                </p>
                <div className="text-sm font-medium text-accent mb-4">
                  {itinerary.price}
                </div>
                <Button variant="outline" className="border-safari-gold text-safari-gold hover:bg-safari-gold hover:text-safari-gold-foreground">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;