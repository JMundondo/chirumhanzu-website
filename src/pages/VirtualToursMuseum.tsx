"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Camera,
  Monitor,
  Headphones,
  Map,
  Clock,
  Bell,
  Smartphone,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const VirtualToursMuseum = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xyzpdzpr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject: "Virtual Tours Notification Signup",
          message: `New signup for Virtual Tours notifications: ${email}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const upcomingFeatures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "360° Virtual Tours",
      description:
        "Immersive virtual experiences of Chirumhanzu's key destinations from the comfort of your home",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Interactive Museum",
      description:
        "Digital exhibitions showcasing artifacts, stories, and cultural heritage of the region",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Audio Guides",
      description:
        "Expert narration and local storytelling to enhance your virtual exploration",
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Interactive Maps",
      description:
        "Navigate through historical timelines and geographical features with clickable hotspots",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Experience",
      description:
        "Optimized for smartphones and tablets for on-the-go virtual exploration",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Access",
      description:
        "Connect with Chirumhanzu from anywhere in the world, 24/7 availability",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 bg-orange-50 text-orange-700 border-orange-200"
            >
              <Clock className="h-3 w-3 mr-1" />
              Coming Soon
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Virtual Tours & Museum
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience Chirumhanzu like never before with immersive virtual
              tours and interactive digital exhibitions. Explore our heritage
              from anywhere in the world.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6"></div>
          </div>

          {/* Main Coming Soon Card */}
          <div className="mb-12">
            <Card className="border-2 border-dashed border-orange-200 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Virtual Experience Under Development
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl mx-auto">
                  We're working hard to bring you cutting-edge virtual tours and
                  an interactive digital museum. This exciting feature will
                  allow you to explore Chirumhanzu's rich heritage and natural
                  beauty from anywhere in the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Badge variant="secondary" className="px-4 py-2">
                    Expected Launch: December 2025
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    In Development
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Features */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-3 text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Preview Section */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Sneak Peek
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Our virtual tours will feature high-resolution 360°
                      photography, interactive hotspots, and expert commentary
                      from local guides and historians. The digital museum will
                      showcase rare artifacts, historical documents, and
                      multimedia presentations about Chirumhanzu's cultural
                      heritage.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Virtual tours of all 11 places of interest
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Interactive cultural artifact displays
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Multi-language support
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Educational resources for schools
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl p-8 text-center">
                      <Camera className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Virtual Tour Preview
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notification Signup */}
          <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-8 md:p-12">
            <Bell className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Be the First to Know
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when our Virtual Tours & Museum goes live. Be among
              the first to experience Chirumhanzu's digital heritage.
            </p>

            {isSubmitted ? (
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Successfully subscribed! We'll notify you when virtual tours
                    launch.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm"
                >
                  Subscribe Another Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Bell className="h-4 w-4" />
                        Notify Me
                      </>
                    )}
                  </Button>
                </div>
                {error && (
                  <div className="flex items-center gap-2 mt-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      {error}
                    </p>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-3">
                  We'll only send you updates about the virtual tours launch. No
                  spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualToursMuseum;
