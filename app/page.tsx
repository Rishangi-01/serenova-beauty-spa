import AboutSection from "@/components/AboutSection";
import AppointmentSection from "@/components/AppointmentSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import RelaxationBanner from "@/components/RelaxationBanner";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <GallerySection />
      <TeamSection />
      <RelaxationBanner />
      <TestimonialsSection />
      <AppointmentSection />
    </div>
  );
}
