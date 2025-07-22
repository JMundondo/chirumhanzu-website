import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Crown, Music, Home } from "lucide-react";

const Culture = () => {
  const culturalElements = [
    {
      title: "Chiefdom History",
      description: "Learn about the rich history of Chief Chirumhanzu and the traditional governance structures that continue today.",
      icon: Crown,
      details: ["Traditional leadership", "Succession stories", "Cultural governance"]
    },
    {
      title: "Origin Stories", 
      description: "Discover the fascinating oral traditions and origin stories that have been passed down through generations.",
      icon: BookOpen,
      details: ["Ancestral tales", "Migration stories", "Founding legends"]
    },
    {
      title: "Traditional Music & Dance",
      description: "Experience the vibrant musical heritage through traditional songs, dances, and ceremonial performances.",
      icon: Music,
      details: ["Traditional instruments", "Ceremonial dances", "Folk songs"]
    },
    {
      title: "Local Customs",
      description: "Understand daily life, customs, and traditions that shape the community's way of living.",
      icon: Home,
      details: ["Daily traditions", "Social customs", "Community practices"]
    }
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rich Cultural Heritage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the vibrant culture and traditions of Chirumhanzu, 
            where ancient wisdom meets modern community life.
          </p>
        </div>

        {/* Cultural Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {culturalElements.map((element, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-earth-brown/30 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 bg-earth-brown/10 rounded-full group-hover:bg-earth-brown/20 transition-colors mb-4">
                  <element.icon className="h-8 w-8 text-earth-brown" />
                </div>
                <CardTitle className="text-xl group-hover:text-earth-brown transition-colors">
                  {element.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {element.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {element.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-earth-brown rounded-full mr-2"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Cultural Story */}
        <div className="bg-gradient-to-r from-earth-brown to-accent rounded-2xl p-8 md:p-12 text-earth-brown-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Stories That Define Us
                </h3>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  Every corner of Chirumhanzu has a story to tell. From the ancient hills that 
                  witnessed the first settlements to the sacred sites where our ancestors 
                  communed with the spirits, our land is alive with history.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  Join our community elders for evening storytelling sessions where oral 
                  traditions come alive, and history becomes more than just facts—it becomes 
                  a living, breathing part of our identity.
                </p>
                <Button 
                  size="lg" 
                  className="bg-earth-brown-foreground text-earth-brown hover:bg-earth-brown-foreground/90 font-semibold"
                >
                  Experience Our Stories
                </Button>
              </div>
              <div className="lg:text-center">
                <div className="bg-earth-brown-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-earth-brown-foreground/20">
                  <h4 className="text-xl font-semibold mb-4">Cultural Experiences Include:</h4>
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
    </section>
  );
};

export default Culture;