import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Culture from "@/components/Culture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <VideoSection />
      <Testimonials />
      <Culture />
      <Footer />
    </div>
  );
};

export default Index;
