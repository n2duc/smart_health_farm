import { FarmsSection, FeaturedProductsSection, HeroSection, TechSection } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gowa Food",
  description: "Gowa Food",
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <TechSection />
      <FarmsSection />
    </>
  );
}
