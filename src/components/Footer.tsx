import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src="/lovable-uploads/4655ea2e-e052-46ce-8cbf-7acc82bd0ab4.png"
                alt="Visit Chirumhanzu"
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-hero-foreground/80 mb-6 max-w-md">
              Your gateway to discovering the hidden treasures, rich culture,
              and authentic experiences of Chirumhanzu, Zimbabwe. Join us in
              preserving and celebrating our heritage.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-hero-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-hero-foreground/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-hero-foreground/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-hero-foreground/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-hero-foreground/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
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
              <Link
                to="/#experiences"
                className="block text-hero-foreground/80 hover:text-safari-gold transition-colors"
              >
                Experiences
              </Link>
              <Link
                to="/#culture"
                className="block text-hero-foreground/80 hover:text-safari-gold transition-colors"
              >
                Culture & History
              </Link>
              <Link
                to="/places-of-interest"
                className="block text-hero-foreground/80 hover:text-safari-gold transition-colors"
              >
                Places of Interest
              </Link>
              <Link
                to="/blog-contributors"
                className="block text-hero-foreground/80 hover:text-safari-gold transition-colors"
              >
                Blog & Stories
              </Link>
              <Link
                to="/shop"
                className="block text-hero-foreground/80 hover:text-safari-gold transition-colors"
              >
                Shop
              </Link>
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
                <span className="text-sm">+263 718 594 447</span>
              </div>
              <div className="flex items-start text-hero-foreground/80">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">
                  Chirumhanzu District
                  <br />
                  Midlands Province
                  <br />
                  Zimbabwe
                </span>
              </div>
            </div>

            <div className="mt-4">
              <BookingModal />
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="border-t border-hero-foreground/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
            <p className="text-hero-foreground/80 mb-4">
              Join us in promoting sustainable tourism and cultural preservation
            </p>
            <Button
              variant="outline"
              className="border-hero-foreground/30 text-black hover:bg-hero-foreground/10"
            >
              Explore Partnerships
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-hero-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-hero-foreground/60">
            <p>&copy; 2024 Visit Chirumhanzu. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/contact"
                className="hover:text-safari-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="hover:text-safari-gold transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="hover:text-safari-gold transition-colors"
              >
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
