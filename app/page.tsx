import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import WhySLAM from "@/components/sections/WhySLAM";
import TransformationTeaser from "@/components/sections/TransformationTeaser";
import TrainerSpotlight from "@/components/sections/TrainerSpotlight";
import BookingCTA from "@/components/sections/BookingCTA";
import BlogPreview from "@/components/sections/BlogPreview";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesAccordion />
      <WhySLAM />
      <TransformationTeaser />
      <TrainerSpotlight />
      <BookingCTA />
      <BlogPreview />
      
      {/* Section 9: Franchise Strip */}
      <section className="w-full bg-slam-section border-y border-slam-border py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Own a SLAM Studio</h3>
            <p className="text-[#B0B0B0] text-[16px]">
              Join India&apos;s fastest growing premium gym franchise.
            </p>
          </div>
          <Button variant="ghost" href="/franchise">
            Franchise Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
