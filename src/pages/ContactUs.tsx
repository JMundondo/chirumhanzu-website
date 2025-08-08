"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Camera,
  Calendar,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Send us a message anytime",
      contact: "visitchirumhanzu@gmail.com",
      action: "Send Email",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak with our team directly",
      contact: "+263 718 594 447",
      action: "Call Now",
      color: "bg-green-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Find us in Chirumhanzu",
      contact: "Chirumhanzu District, Midlands Province, Zimbabwe",
      action: "Get Directions",
      color: "bg-purple-500",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick messages and updates",
      contact: "+263 718 594 447",
      action: "Message Us",
      color: "bg-orange-500",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "tours", label: "Tour Booking" },
    { value: "events", label: "Events & Activities" },
    { value: "accommodation", label: "Accommodation" },
    { value: "media", label: "Media & Press" },
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "feedback", label: "Feedback & Suggestions" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "#" },
    { icon: <Youtube className="h-5 w-5" />, name: "YouTube", url: "#" },
  ];

  const quickLinks = [
    {
      icon: <Camera className="h-4 w-4" />,
      title: "Plan a Tour",
      description: "Book guided tours and experiences",
    },
    {
      icon: <Calendar className="h-4 w-4" />,
      title: "Event Inquiries",
      description: "Ask about upcoming events",
    },
    {
      icon: <Users className="h-4 w-4" />,
      title: "Group Bookings",
      description: "Special rates for groups",
    },
    {
      icon: <Globe className="h-4 w-4" />,
      title: "Media Kit",
      description: "Press resources and materials",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <MessageSquare className="h-3 w-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help you discover the beauty and heritage of
              Chirumhanzu. Reach out to us for tour bookings, event information,
              or any questions about your visit.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+263 718 594 447" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>
                  <Button className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {contactMethods.map((method, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                          >
                            {method.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground mb-1">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="text-sm font-medium text-foreground mb-2 break-all">
                              {method.contact}
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs bg-transparent"
                            >
                              {method.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="text-sm font-medium">
                      8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Saturday
                    </span>
                    <span className="text-sm font-medium">
                      9:00 AM - 3:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Sunday
                    </span>
                    <span className="text-sm font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Emergency tours and services available by appointment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                      {link.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">
                      {link.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, photos, and
              stories from Chirumhanzu.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-white/50 hover:bg-white/80"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  {social.icon}
                  {social.name}
                </Button>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 bg-white/80"
                />
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Get updates about new tours, events, and Chirumhanzu news.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
