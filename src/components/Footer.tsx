import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/4655ea2e-e052-46ce-8cbf-7acc82bd0ab4.png"
              alt="Visit Chirumhanzu"
              className="h-16 w-auto mb-4"
            />
            <p className="text-hero-foreground/80 mb-6 max-w-md">
              Your gateway to discovering the hidden treasures, rich culture, and authentic 
              experiences of Chirumhanzu, Zimbabwe. Join us in preserving and celebrating 
              our heritage.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-hero-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-hero-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-hero-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-hero-foreground/60 mt-2">
              Follow us @VisitChirumhanzu
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <div className="space-y-3">
              <a href="#experiences" className="block text-hero-foreground/80 hover:text-safari-gold transition-colors">
                Experiences
              </a>
              <a href="#culture" className="block text-hero-foreground/80 hover:text-safari-gold transition-colors">
                Culture & History
              </a>
              <a href="#places" className="block text-hero-foreground/80 hover:text-safari-gold transition-colors">
                Places of Interest
              </a>
              <a href="#" className="block text-hero-foreground/80 hover:text-safari-gold transition-colors">
                Accommodation
              </a>
              <a href="#" className="block text-hero-foreground/80 hover:text-safari-gold transition-colors">
                Blog & Stories
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-hero-foreground/80">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@visitchirumhanzu.com</span>
              </div>
              <div className="flex items-center text-hero-foreground/80">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+263 XXX XXX XXX</span>
              </div>
              <div className="flex items-start text-hero-foreground/80">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">
                  Chirumhanzu District<br />
                  Midlands Province<br />
                  Zimbabwe
                </span>
              </div>
            </div>
            
            <Button className="mt-4 bg-safari-gold hover:bg-safari-gold/90 text-safari-gold-foreground">
              Plan Your Visit
            </Button>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="border-t border-hero-foreground/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
            <p className="text-hero-foreground/80 mb-4">
              Join us in promoting sustainable tourism and cultural preservation
            </p>
            <Button variant="outline" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10">
              Explore Partnerships
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-hero-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-hero-foreground/60">
            <p>&copy; 2024 Visit Chirumhanzu. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-safari-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-safari-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-safari-gold transition-colors">Support Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;