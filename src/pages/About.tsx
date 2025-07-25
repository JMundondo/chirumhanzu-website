"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Compass, Globe, TreePine } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Heritage Preservation",
      description:
        "Documenting and celebrating the unique stories that shape Chirumhanzu's identity",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community-Led",
      description:
        "Driven by local voices and knowledge, ensuring authentic representation",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Story-Driven",
      description:
        "Every experience is rooted in the rich narratives of our people and places",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Responsible Tourism",
      description: "Tourism that benefits the people and places at its core",
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Eco-Tourism",
      description:
        "Promoting sustainable practices that protect our natural heritage",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Past, Present, Future",
      description: "Connecting historical wisdom with contemporary vision",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              Our Story
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            {/* Who We Are Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Who We Are
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6"></div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  Visit Chirumhanzu
                </span>{" "}
                is a cultural and eco-tourism initiative dedicated to preserving
                our heritage and sharing the stories that shape us.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Rooted in the belief that{" "}
                <span className="font-medium text-foreground">
                  local knowledge matters
                </span>
                , we document, celebrate, and promote the unique identity of
                Chirumhanzu past, present, and future.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our platform is{" "}
                <span className="font-medium text-foreground">
                  community-led
                </span>
                ,
                <span className="font-medium text-foreground">
                  {" "}
                  story-driven
                </span>
                , and committed to
                <span className="font-medium text-foreground">
                  {" "}
                  responsible tourism
                </span>{" "}
                that benefits the people and places at its core.
              </p>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    Our Mission
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Connecting visitors with authentic Chirumhanzu experiences
                    while preserving our cultural heritage and supporting local
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                      {value.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Our Journey
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience Chirumhanzu through the eyes of those who call it home.
              Discover authentic stories, connect with local communities, and be
              part of preserving our heritage for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Cultural Tourism
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Eco-Tourism
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Community-Led
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
