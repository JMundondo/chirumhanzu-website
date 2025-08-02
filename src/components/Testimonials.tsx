import { Star, Quote, MessageSquare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            We'd love to hear about your journey through Chirumhanzu. Your
            stories help others discover the magic of our region.
          </p>
        </div>

        {/* Empty State with CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-12 shadow-[var(--shadow-soft)] border border-border/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-safari-gold/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-10 w-10 text-safari-gold" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Be the First to Share Your Story
            </h3>

            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have you visited Chirumhanzu? We'd love to hear about your
              experiences, the people you met, the places you explored, and the
              memories you created. Your authentic stories inspire others to
              discover our beautiful region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button className="bg-safari-gold hover:bg-safari-gold/90 text-safari-gold-foreground font-semibold">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Share Your Experience
                </Button>
              </Link>
              <Link to="/blog-contributors">
                <Button
                  variant="outline"
                  className="border-safari-gold/30 text-safari-gold hover:bg-safari-gold/10"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Read Stories
                </Button>
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              Your testimonials will be featured here to inspire future visitors
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-muted/50 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">11</div>
              <div className="text-sm text-muted-foreground">
                Places of Interest
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Rich</div>
              <div className="text-sm text-muted-foreground">
                Cultural Heritage
              </div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Authentic</div>
              <div className="text-sm text-muted-foreground">
                Local Experiences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
