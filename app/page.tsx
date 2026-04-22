import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Coaching from "@/components/sections/Coaching";
import Transformations from "@/components/sections/Transformations";
import TrainerSpotlight from "@/components/sections/TrainerSpotlight";
import CTABanner from "@/components/sections/CTABanner";
import BlogPreview from "@/components/sections/BlogPreview";
import FranchiseStrip from "@/components/sections/FranchiseStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesAccordion />
      <Coaching />
      <Transformations />
      <TrainerSpotlight />
      <CTABanner />
      <BlogPreview />
      <FranchiseStrip />
    </>
  );
}
