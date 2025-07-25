import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Culture from "@/components/Culture";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experiences />
      <VideoSection />
      <Testimonials />
      <Culture />
    </div>
  );
};

export default Index;
