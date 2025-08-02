"use client";

import { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar as CalendarIcon,
  Users,
  MapPin,
  Clock,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  X,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ExperienceDetails {
  title?: string;
  price?: string;
  duration?: string;
  groupSize?: string;
  type?: string;
}

interface BookingModalProps {
  variant?: "default" | "hero";
  experience?: ExperienceDetails;
}

const BookingModal = ({
  variant = "default",
  experience,
}: BookingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    tourType: experience?.title || "",
    preferredDate: "",
    specialRequests: "",
    accommodation: "",
    duration: experience?.duration || "",
    selectedExperience: experience?.title || "",
    selectedPrice: experience?.price || "",
  });

  const tourTypes = [
    { value: "cultural", label: "Cultural Heritage Tour" },
    { value: "nature", label: "Nature & Wildlife" },
    { value: "historical", label: "Historical Sites" },
    { value: "community", label: "Community Experience" },
    { value: "fishing", label: "Fishing Experience" },
    { value: "custom", label: "Custom Tour" },
  ];

  const accommodationOptions = [
    { value: "homestay", label: "Local Homestay" },
    { value: "guesthouse", label: "Guesthouse" },
    { value: "camping", label: "Camping" },
    { value: "day-trip", label: "Day Trip Only" },
  ];

  const durationOptions = [
    { value: "1-day", label: "1 Day" },
    { value: "2-days", label: "2 Days" },
    { value: "3-days", label: "3 Days" },
    { value: "4-days", label: "4 Days" },
    { value: "5-days", label: "5 Days" },
    { value: "custom", label: "Custom Duration" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      setError("Please select a preferred date");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_BOOKING_FORMSPREE_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            preferredDate: date ? format(date, "PPP") : "",
            selectedExperience:
              experience?.title || formData.selectedExperience,
            selectedPrice: experience?.price || formData.selectedPrice,
            subject: `New Booking Request - ${
              experience?.title || "Chirumhanzu Tour"
            }`,
            message: `New booking request from ${formData.name} for ${
              experience?.title || formData.tourType
            } (${experience?.price || "Price TBD"}) on ${
              date ? format(date, "PPP") : ""
            }`,
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          groupSize: "",
          tourType: "",
          preferredDate: "",
          specialRequests: "",
          accommodation: "",
          duration: "",
          selectedExperience: "",
          selectedPrice: "",
        });
        setDate(undefined);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      groupSize: "",
      tourType: "",
      preferredDate: "",
      specialRequests: "",
      accommodation: "",
      duration: "",
      selectedExperience: "",
      selectedPrice: "",
    });
    setDate(undefined);
  };

  const getButtonContent = () => {
    if (variant === "hero") {
      return (
        <>
          🌟 Start Your Adventure
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </>
      );
    }
    return (
      <>
        <CalendarIcon className="h-4 w-4 mr-2" />
        Book Your Visit
      </>
    );
  };

  const getButtonClassName = () => {
    if (variant === "hero") {
      return "bg-gradient-to-r from-safari-gold to-secondary hover:from-safari-gold/90 hover:to-secondary/90 text-safari-gold-foreground font-semibold text-lg px-8 py-4 group shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-adventure)] transition-all duration-300";
    }
    return "bg-safari-gold hover:bg-safari-gold/90 text-safari-gold-foreground font-semibold";
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={getButtonClassName()}>{getButtonContent()}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MapPin className="h-5 w-5 text-safari-gold" />
            Book Your Chirumhanzu Experience
          </DialogTitle>
          {experience?.title && (
            <div className="mt-2 p-3 bg-safari-gold/10 rounded-lg border border-safari-gold/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {experience.title}
                  </p>
                  {experience.duration && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {experience.duration}
                    </p>
                  )}
                </div>
                {experience.price && (
                  <div className="text-right">
                    <p className="font-bold text-safari-gold text-lg">
                      {experience.price}
                    </p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Booking Request Sent!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in visiting Chirumhanzu. We'll get
              back to you within 24 hours to confirm your booking and discuss
              the details.
            </p>
            <div className="flex gap-3 justify-center">
              <Button onClick={resetForm} variant="outline">
                Book Another Visit
              </Button>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="h-4 w-4 text-safari-gold" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+263 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Group Size
                  </label>
                  <Input
                    type="number"
                    placeholder="Number of people"
                    value={formData.groupSize}
                    onChange={(e) =>
                      handleInputChange("groupSize", e.target.value)
                    }
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Tour Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-safari-gold" />
                Tour Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tour Type
                  </label>
                  <Select
                    value={formData.tourType}
                    onValueChange={(value) =>
                      handleInputChange("tourType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select tour type" />
                    </SelectTrigger>
                    <SelectContent>
                      {tourTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Duration
                  </label>
                  <Select
                    value={formData.duration}
                    onValueChange={(value) =>
                      handleInputChange("duration", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          {duration.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Accommodation Preference
                  </label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) =>
                      handleInputChange("accommodation", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation" />
                    </SelectTrigger>
                    <SelectContent>
                      {accommodationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Date *
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Special Requests or Questions
              </label>
              <Textarea
                placeholder="Tell us about any special requirements, dietary needs, accessibility concerns, or questions you have..."
                value={formData.specialRequests}
                onChange={(e) =>
                  handleInputChange("specialRequests", e.target.value)
                }
                rows={4}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300 text-sm">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-3 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-safari-gold hover:bg-safari-gold/90 text-safari-gold-foreground"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Booking Request
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
