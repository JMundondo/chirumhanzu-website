"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Package,
  Shirt,
  Camera,
  BookOpen,
  Coffee,
  Gift,
  Bell,
  Mail,
  Tag,
  Search,
} from "lucide-react";

const Shop = () => {
  const productCategories = [
    {
      icon: <Shirt className="h-6 w-6" />,
      title: "Apparel & Accessories",
      description:
        "T-shirts, hats, and accessories featuring Chirumhanzu designs and conservation messages",
      color: "bg-blue-500",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Books & Publications",
      description:
        "Local history books, cultural guides, and educational materials about the region",
      color: "bg-green-500",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography & Art",
      description:
        "Prints, postcards, and artwork by local photographers and artists",
      color: "bg-purple-500",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Local Crafts & Souvenirs",
      description:
        "Handmade crafts, traditional items, and unique souvenirs from local artisans",
      color: "bg-orange-500",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Gift Sets & Bundles",
      description:
        "Curated gift packages perfect for visitors and supporters of Chirumhanzu",
      color: "bg-pink-500",
    },
  ];

  const emptyCategories = [
    { name: "All Products", count: 0, color: "bg-gray-500" },
    { name: "Apparel", count: 0, color: "bg-blue-500" },
    { name: "Books", count: 0, color: "bg-green-500" },
    { name: "Art & Photography", count: 0, color: "bg-purple-500" },
    { name: "Crafts", count: 0, color: "bg-orange-500" },
    { name: "Gifts", count: 0, color: "bg-pink-500" },
  ];

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
              <ShoppingBag className="h-3 w-3 mr-1" />
              Support Local
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
              Shop Chirumhanzu
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Support local artisans and conservation efforts through our
              curated collection of authentic Chirumhanzu products, crafts, and
              educational materials.
            </p>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              {/* Search */}
              <Card>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                    <Search className="h-4 w-4 md:h-5 md:w-5" />
                    Search Products
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="relative">
                    <Input
                      placeholder="Search for products..."
                      className="pr-10"
                      disabled
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Search will be available when products are added
                  </p>
                </CardContent>
              </Card>

              {/* Categories - Empty State */}
              <Card>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                    <Tag className="h-4 w-4 md:h-5 md:w-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0 space-y-1 md:space-y-2">
                  {emptyCategories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between p-2 rounded opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 md:w-3 md:h-3 ${category.color} rounded-full`}
                        ></div>
                        <span className="text-xs md:text-sm">
                          {category.name}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
                <CardContent className="p-4 md:p-6 text-center">
                  <Bell className="h-10 w-10 md:h-12 md:w-12 text-blue-500 mx-auto mb-3 md:mb-4" />
                  <h3 className="font-semibold text-sm md:text-base text-foreground mb-2">
                    Get Notified
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Be the first to know when our shop launches with authentic
                    Chirumhanzu products.
                  </p>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="text-xs bg-white/80"
                    />
                    <Button size="sm" className="gap-2 w-full text-xs">
                      <Bell className="h-3 w-3" />
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* No Products State */}
              <Card className="border-2 border-dashed border-muted-foreground/20 bg-gradient-to-br from-muted/30 to-muted/10">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Shop Opening Soon
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl mx-auto">
                    We're working with local artisans and partners to curate an
                    authentic collection of Chirumhanzu products. Every purchase
                    will support local communities and conservation efforts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Badge variant="secondary" className="px-4 py-2">
                      <Package className="h-3 w-3 mr-1" />
                      Products Coming Soon
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <Gift className="h-3 w-3 mr-1" />
                      Supporting Local Artisans
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* What We'll Offer */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  What We'll Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {productCategories.map((category, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-white`}
                          >
                            {category.icon}
                          </div>
                          <CardTitle className="text-base md:text-lg">
                            {category.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Shop With Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    Why Shop With Us?
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Every purchase makes a difference in Chirumhanzu
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Gift className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm md:text-base mb-2">
                        Support Local Artisans
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Direct support to local craftspeople and their families
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm md:text-base mb-2">
                        Authentic Products
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Genuine items made by local communities with traditional
                        methods
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Coffee className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm md:text-base mb-2">
                        Conservation Impact
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Proceeds support wetland conservation and community
                        development
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-2xl p-8 md:p-12">
                <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Stay Updated
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Be the first to shop our collection when it launches. Get
                  exclusive previews and early access to limited edition items.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/80"
                  />
                  <Button className="gap-2">
                    <Bell className="h-4 w-4" />
                    Get Updates
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  We'll only send you shop updates and new product
                  announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
