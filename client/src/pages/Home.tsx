import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import CoursesSection from "@/components/CoursesSection";
import GallerySection from "@/components/GallerySection";
import InstructorSection from "@/components/InstructorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <CoursesSection />
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="instructor">
        <InstructorSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
