import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/about";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlacesOfInterest from "./pages/PlacesOfInterest";
import VirtualToursMuseum from "./pages/VirtualToursMuseum";
import EventsPage from "./pages/EventsPage";
import ContactUs from "./pages/ContactUs";
import BlogContributors from "./pages/BlogContributors";
import Shop from "./pages/Shop";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/about" element={<About />} /> {/* ⬅️ new route */}
          <Route path="/places-of-interest" element={<PlacesOfInterest />} />
          <Route
            path="/virtual-tours-museum"
            element={<VirtualToursMuseum />}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog-contributors" element={<BlogContributors />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
