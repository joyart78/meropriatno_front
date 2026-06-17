import { Header } from "../widgets/Header";
import { HeroSection } from "../widgets/HeroSection";
import { WaveDivider } from "../widgets/WaveDivider";
import { AboutSection } from "../widgets/AboutSection";
import { ServicesSection } from "../widgets/ServicesSection";
import { GallerySection } from "../widgets/GallerySection";
import { ReviewsSection } from "../widgets/ReviewsSection";
import { ContactSection } from "../widgets/ContactSection";
import { Footer } from "../widgets/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WaveDivider fill="#ffffff" />
      <AboutSection />
      <WaveDivider fill="#fff4d6" flip />
      <ServicesSection />
      <WaveDivider fill="#ffffff" />
      <GallerySection />
      <WaveDivider fill="#8e6ca8" flip />
      <ReviewsSection />
      <WaveDivider fill="#ffffff" />
      <ContactSection />
      <Footer />
    </main>
  );
}
