import Navigation from "../src/components/sections/Navigation";
import MobileMenu from "../src/components/sections/MobileMenu";
import HeroSection from "../src/components/sections/HeroSection";
import Marquee from "../src/components/sections/Marquee";
import AboutSection from "../src/components/sections/AboutSection";
import ProductsSection from "../src/components/sections/ProductsSection";
import TechnologySection from "../src/components/sections/TechnologySection";
import VisionSection from "../src/components/sections/VisionSection";
import ContactSection from "../src/components/sections/ContactSection";
import SectionSeparator from "../src/components/sections/SectionSeparator";
import FooterSection from "../src/components/sections/FooterSection";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <MobileMenu />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProductsSection />
      <TechnologySection />
      <VisionSection />
      <ContactSection />
      <SectionSeparator />
      <FooterSection />
      <script src="/scripts/landing.js"></script>
    </>
  );
}
