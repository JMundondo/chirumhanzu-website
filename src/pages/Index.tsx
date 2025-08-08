import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Culture from "@/components/Culture";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Culture />
      <VideoSection />
      <Testimonials />
    </div>
  );
};

export default Index;
