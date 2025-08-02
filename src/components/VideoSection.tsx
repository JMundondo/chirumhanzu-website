"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Bird,
  Droplets,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";
import BookingModal from "./BookingModal";

const DriefonteinSection = () => {
  const videoUrl = "https://www.youtube.com/watch?v=RvLMcb-MJOQ";

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    );
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : "";
  };

  const references = [
    {
      title: "Ramsar Sites Information Service (RSIS)",
      description: "Driefontein Grasslands Ramsar Site Information Sheet",
      url: "https://rsis.ramsar.org/ris/2104",
    },
    {
      title: "BirdLife Zimbabwe",
      description:
        "Important Bird Area (IBA) Factsheet: Driefontein Grasslands",
      url: "https://www.birdlife.org/zimbabwe",
    },
    {
      title: "WetlandsCOP15 YouTube Channel",
      description:
        "Feature Video: Wetlands Sustain Livelihoods – Driefontein Grasslands",
      url: "https://www.youtube.com/watch?v=RvLMcb-MJOQ",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="gap-1">
                <Droplets className="h-3 w-3" />
                Ramsar Site
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Bird className="h-3 w-3" />
                IBA Designated
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Driefontein Wetlands
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A vital Ramsar and IBA-designated wetland in Zimbabwe's Midlands
              Province, spanning ~201,194 hectares and supporting critical bird
              species and local livelihoods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Video Player */}
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-4 md:p-6 shadow-lg">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 backdrop-blur-sm">
                {getEmbedUrl(videoUrl) ? (
                  <iframe
                    src={getEmbedUrl(videoUrl)}
                    title="Driefontein Wetlands - Wetlands Sustain Livelihoods"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Play className="h-20 w-20 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No video available</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Caption */}
              <div className="mt-4 p-3 md:p-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-lg">
                <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">
                  Wetlands Sustain Livelihoods
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Featured in COP15 - Discover how Driefontein Grasslands
                  demonstrates the vital connection between wetland conservation
                  and community well-being.
                </p>
              </div>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 md:space-y-6">
              {/* Ecosystems & Wildlife */}
              <Card>
                <CardHeader className="pb-2 md:pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Bird className="h-5 w-5 text-green-600" />
                    Ecosystems & Wildlife
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1 md:mb-2">Habitats:</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Wet grasslands, swamps, lakes, Miombo woodlands and
                      seasonal vlei
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 md:mb-2">Key Species:</h4>
                    <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                      <li>• ~85% of Zimbabwe's Wattled Crane population</li>
                      <li>• Numerous Grey Crowned Cranes</li>
                      <li>• Secretary bird, storks, African marsh harrier</li>
                      <li>• Kori bustard, jackals, impala, waterbuck</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Community & Livelihoods */}
              <Card>
                <CardHeader className="pb-2 md:pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Users className="h-5 w-5 text-blue-600" />
                    Community & Livelihoods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Local communities depend on the area for cropping, grazing,
                    and household water needs. This demonstrates a living
                    landscape where culture, subsistence, and biodiversity
                    co-exist.
                  </p>
                </CardContent>
              </Card>

              {/* COP15 Spotlight */}
              <Card>
                <CardHeader className="pb-2 md:pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    COP15 Spotlight
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Featured as one of Zimbabwe's 7 Ramsar Sites in COP15 field
                    trips and highlighted in COP15 fact sheet and YouTube
                    feature.
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    International Recognition
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Visit Experience */}
          <Card className="mt-6 md:mt-8">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="text-lg md:text-xl">
                Visit Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-medium mb-2">What to Expect:</h4>
                  <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                    <li>• Guided birdwatching tours with conservationists</li>
                    <li>• Community member-led experiences</li>
                    <li>• Educational focus on ecosystem services</li>
                    <li>• Traditional land-use practices demonstrations</li>
                    <li>• Species conservation insights</li>
                  </ul>
                </div>
                <div className="flex items-center justify-start md:justify-center mt-4 md:mt-0">
                  <BookingModal
                    experience={{
                      title: "Driefontein Wetlands Tour",
                      price: "From $40",
                      duration: "Half Day",
                      type: "Nature & Wildlife",
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl font-semibold mb-4 md:mb-6">Learn More</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {references.map((ref, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-sm mb-2">{ref.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {ref.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 text-xs h-7 bg-transparent"
                      onClick={() => window.open(ref.url, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Source
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriefonteinSection;
