"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Tag, Users, PenTool, Camera } from "lucide-react";

const BlogContributors = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <Badge
              variant="outline"
              className="mb-3 md:mb-4 px-3 md:px-4 py-1 text-xs md:text-sm"
            >
              <BookOpen className="h-3 w-3 mr-1" />
              Stories & Insights
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
              Blog & Contributors
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Discover Chirumhanzu through the voices of our community. Local
              stories, cultural insights, and conservation updates from the
              people who call this place home.
            </p>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* No Posts State */}
              <Card className="border-2 border-dashed border-muted-foreground/20 bg-gradient-to-br from-muted/30 to-muted/10">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    No Blog Posts Yet
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl mx-auto">
                    We're building a platform for community voices to share
                    stories about Chirumhanzu. Be among the first to contribute
                    and help us launch this important storytelling initiative.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Badge variant="secondary" className="px-4 py-2">
                      <PenTool className="h-3 w-3 mr-1" />
                      Stories Coming Soon
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <Users className="h-3 w-3 mr-1" />
                      Contributors Wanted
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* What We'll Feature */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  What We'll Feature
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Camera className="h-4 w-4 md:h-6 md:w-6 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">
                            Conservation Stories
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            Wildlife experiences, wetland conservation, and
                            environmental protection efforts
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-4 w-4 md:h-6 md:w-6 text-purple-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">
                            Cultural Heritage
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            Traditional stories, historical accounts, and
                            cultural preservation efforts
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-950/30 dark:to-green-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">
                            Community Life
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            Daily life, community events, and local development
                            initiatives
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Camera className="h-4 w-4 md:h-6 md:w-6 text-orange-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">
                            Tourism Experiences
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            Visitor experiences, tour guides, and sustainable
                            tourism practices
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 md:space-y-6">
              {/* Categories - Empty State */}
              <Card>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                    <Tag className="h-4 w-4 md:h-5 md:w-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0 text-center">
                  <div className="py-8">
                    <Tag className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      No categories yet
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Categories will appear as content is added
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contributors - Empty State */}
              <Card>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                    <Users className="h-4 w-4 md:h-5 md:w-5" />
                    Our Contributors
                  </CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Meet the voices sharing Chirumhanzu's stories
                  </p>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0 text-center">
                  <div className="py-8">
                    <Users className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-2">
                      No contributors yet
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Be the first to share your story
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Become a Contributor */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
                <CardContent className="p-4 md:p-6 text-center">
                  <PenTool className="h-10 w-10 md:h-12 md:w-12 text-blue-500 mx-auto mb-3 md:mb-4" />
                  <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">
                    Share Your Story
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Have a story about Chirumhanzu? We'd love to feature your
                    voice as our first contributor.
                  </p>
                  <Button size="sm" className="gap-2 w-full sm:w-auto text-xs">
                    <PenTool className="h-3 w-3" />
                    Become a Contributor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContributors;
