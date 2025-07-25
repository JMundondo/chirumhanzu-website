"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Camera,
  Music,
  Leaf,
  BookOpen,
  Bell,
  Plus,
  Mail,
} from "lucide-react";

const EventsPage = () => {
  const eventTypes = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Nature & Conservation Events",
      description:
        "Birdwatching tours, wetland conservation workshops, and eco-tourism activities",
      color: "bg-green-500",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Cultural Heritage Programs",
      description:
        "Traditional storytelling, historical tours, and cultural preservation workshops",
      color: "bg-purple-500",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Community Celebrations",
      description: "Local festivals, music events, and community gatherings",
      color: "bg-orange-500",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Educational Tours",
      description:
        "School visits, research expeditions, and educational workshops",
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Calendar className="h-3 w-3 mr-1" />
              Events & Activities
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay connected with Chirumhanzu through our community events,
              cultural programs, and nature experiences. Be the first to know
              when new events are announced.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6"></div>
          </div>

          {/* No Events State */}
          <div className="mb-12">
            <Card className="border-2 border-dashed border-muted-foreground/20 bg-gradient-to-br from-muted/30 to-muted/10">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  No Events Scheduled Yet
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl mx-auto">
                  We're currently planning exciting events and activities for
                  the Chirumhanzu community. Check back soon or sign up for
                  notifications to be the first to know when events are
                  announced.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Clock className="h-3 w-3 mr-1" />
                    Events Coming Soon
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Bell className="h-3 w-3 mr-1" />
                    Get Notified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Types We'll Host */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Types of Events We'll Host
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventTypes.map((type, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center text-white`}
                      >
                        {type.icon}
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Suggestions */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Suggest an Event
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Have an idea for an event or activity? We'd love to hear from
                  you!
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Idea
                  </label>
                  <Input placeholder="What type of event would you like to see?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    placeholder="Tell us more about your event idea, preferred timing, or any other details..."
                    rows={4}
                  />
                </div>
                <Button className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Submit Suggestion
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">0</div>
                  <div className="text-xs text-muted-foreground">
                    Scheduled Events
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">0</div>
                  <div className="text-xs text-muted-foreground">
                    Registered Attendees
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <MapPin className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">11</div>
                  <div className="text-xs text-muted-foreground">
                    Potential Venues
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Bell className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">0</div>
                  <div className="text-xs text-muted-foreground">
                    Notification Subscribers
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 md:p-12">
            <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be the first to know when we announce new events, workshops, and
              community activities. Join our mailing list for exclusive updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="gap-2">
                <Bell className="h-4 w-4" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
