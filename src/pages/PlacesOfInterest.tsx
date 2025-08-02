"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bird,
  TreePine,
  Church,
  Building2,
  Castle,
  Factory,
  Shield,
  Mountain,
  Music,
  Crown,
  MapPin,
  ExternalLink,
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

const PlacesOfInterest = () => {
  const places = [
    {
      id: 1,
      title: "Driefontein Wetlands",
      subtitle: "Ramsar Site",
      description:
        "A globally significant wetland and Important Bird Area (IBA), home to rare species like the wattled crane. A haven for birdwatchers and nature conservation.",
      icon: <Bird className="h-6 w-6" />,
      category: "Nature & Wildlife",
      categoryColor: "bg-green-500",
      featured: true,
    },
    {
      id: 2,
      title: "Muteo Forest",
      subtitle: "Indigenous Forest",
      description:
        "An untouched indigenous forest offering serene trails, biodiversity exploration, and low-impact eco-tourism opportunities.",
      icon: <TreePine className="h-6 w-6" />,
      category: "Nature & Wildlife",
      categoryColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Holy Cross Mission",
      subtitle: "Founded 1914",
      description:
        "Founded in 1914 by Jesuit missionaries, this mission station remains a pillar of spiritual, educational, and community life in Chirumhanzu.",
      icon: <Church className="h-6 w-6" />,
      category: "Historical & Spiritual",
      categoryColor: "bg-purple-500",
    },
    {
      id: 4,
      title: "Driefontein Mission",
      subtitle: "Sister Site to Holy Cross",
      description:
        "A sister site to Holy Cross, this mission has long contributed to the region's development in healthcare, education, and faith-based tourism.",
      icon: <Church className="h-6 w-6" />,
      category: "Historical & Spiritual",
      categoryColor: "bg-purple-500",
    },
    {
      id: 5,
      title: "MSU Holycross Eco-Tourism Hub",
      subtitle: "Modern Tourism Facility",
      description:
        "A new development by Midlands State University featuring chalets, a conference center (400–500 capacity), boat rides, hiking, birdwatching, and a 110-hectare irrigated greenbelt.",
      icon: <Building2 className="h-6 w-6" />,
      category: "Modern Tourism",
      categoryColor: "bg-blue-500",
      featured: true,
    },
    {
      id: 6,
      title: "Lalapanzi – Fort Gibbs",
      subtitle: "Colonial Fort",
      description:
        "A colonial fort of historical significance, offering a glimpse into Zimbabwe's pre-independence military and settler past.",
      icon: <Castle className="h-6 w-6" />,
      category: "Historical & Spiritual",
      categoryColor: "bg-purple-500",
    },
    {
      id: 7,
      title: "Dinson Industrial Zone",
      subtitle: "Dynamic Industrial Hub",
      description:
        "A dynamic industrial hub with an emerging town, a new football stadium, and opportunities for industrial and economic tourism.",
      icon: <Factory className="h-6 w-6" />,
      category: "Modern Tourism",
      categoryColor: "bg-blue-500",
    },
    {
      id: 8,
      title: "Black Rhino Conservation Area",
      subtitle: "Ward 19 (Musena)",
      description:
        "Located in Ward 19 (Musena), this protected area supports endangered black rhino conservation efforts and provides wildlife education opportunities.",
      icon: <Shield className="h-6 w-6" />,
      category: "Nature & Wildlife",
      categoryColor: "bg-green-500",
      featured: true,
    },
    {
      id: 9,
      title: "Sebakwe Recreational Park",
      subtitle: "Joint Biodiversity Park",
      description:
        "A joint biodiversity park shared with Kwekwe, offering outdoor adventure, game viewing, and environmental education.",
      icon: <Mountain className="h-6 w-6" />,
      category: "Nature & Wildlife",
      categoryColor: "bg-green-500",
    },
    {
      id: 10,
      title: "Leonard Dembo's Grave",
      subtitle: "Cultural Heritage Site",
      description:
        "Final resting place of Zimbabwe's iconic musician. A cultural heritage site and potential pilgrimage stop for music lovers across generations.",
      icon: <Music className="h-6 w-6" />,
      category: "Cultural Heritage",
      categoryColor: "bg-orange-500",
    },
    {
      id: 11,
      title: "Leopold Takawira's Grave",
      subtitle: "Liberation Hero",
      description:
        "The burial site of a revered nationalist and liberation hero. Ideal for historical reflection and educational tourism.",
      icon: <Crown className="h-6 w-6" />,
      category: "Cultural Heritage",
      categoryColor: "bg-orange-500",
    },
  ];

  const categories = [
    { name: "All Places", count: places.length, color: "bg-gray-500" },
    {
      name: "Nature & Wildlife",
      count: places.filter((p) => p.category === "Nature & Wildlife").length,
      color: "bg-green-500",
    },
    {
      name: "Historical & Spiritual",
      count: places.filter((p) => p.category === "Historical & Spiritual")
        .length,
      color: "bg-purple-500",
    },
    {
      name: "Modern Tourism",
      count: places.filter((p) => p.category === "Modern Tourism").length,
      color: "bg-blue-500",
    },
    {
      name: "Cultural Heritage",
      count: places.filter((p) => p.category === "Cultural Heritage").length,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              Discover Chirumhanzu
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Top Places of Interest
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From ancient forests to modern eco-tourism hubs, from sacred
              missions to conservation areas, explore the diverse attractions
              that make Chirumhanzu a unique destination.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-xs md:text-sm cursor-pointer hover:shadow-md transition-all"
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Places */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Featured Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places
                .filter((place) => place.featured)
                .map((place) => (
                  <Card
                    key={place.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div
                          className={`w-12 h-12 ${place.categoryColor} rounded-full flex items-center justify-center text-white`}
                        >
                          {place.icon}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-lg md:text-xl">
                        {place.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {place.subtitle}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {place.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {place.category}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-xs"
                        >
                          <MapPin className="h-3 w-3" />
                          Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* All Places */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              All Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {places.map((place) => (
                <Card
                  key={place.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 ${place.categoryColor} rounded-full flex items-center justify-center text-white`}
                      >
                        {place.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base md:text-lg truncate">
                          {place.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground truncate">
                          {place.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {place.category}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 text-xs h-7"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Plan Your Journey
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to explore these incredible destinations? Contact us to plan
              your personalized Chirumhanzu experience and discover the stories
              that make each place special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal
                experience={{
                  title: "Chirumhanzu Places of Interest Tour",
                  price: "From $60",
                  duration: "Full Day",
                  type: "Cultural Heritage",
                }}
              />
              <Button variant="outline" className="gap-2 bg-transparent">
                <ExternalLink className="h-4 w-4" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesOfInterest;
