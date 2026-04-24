import { Metadata } from "next";
import { Quote } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import { TransformationGallery } from "./ClientComponents";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Transformations Gallery — SLAM Fitness Studio",
  description: "Real people. Real results. View the incredible transformations our members have achieved at SLAM Fitness Studio.",
};

export default function TransformationsPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <ServiceHero 
        subtitle="SUCCESS STORIES"
        title={<>Real People. <span className="text-slam-accent">Real Results.</span></>}
        imageSrc="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
        imageAlt="SLAM Fitness Results"
      />

      {/* 2 & 3. Filter Tabs & Card Grid */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <TransformationGallery />
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-20 md:py-32 bg-slam-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Words From Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Anjali M.", 
                program: "Weight Loss", 
                quote: "I had tried everything before joining SLAM. The coaches here actually built a program that fit my crazy work schedule. I've never felt healthier or more confident." 
              },
              { 
                name: "Sanjay K.", 
                program: "Body Transformation", 
                quote: "The 3-phase transformation plan completely changed my relationship with food and training. It's tough, but the results speak for themselves." 
              },
              { 
                name: "Divya R.", 
                program: "Functional Fitness", 
                quote: "My back pain is gone and I'm stronger than I was in my twenties. The trainers here are incredibly knowledgeable and supportive." 
              }
            ].map((testimonial, idx) => (
              <SpotlightCard 
                key={idx} 
                className="bg-[#1A1A1A] p-8 rounded-2xl border-l-[3px] border-l-slam-accent border-y border-r border-[#2A2A2A] relative"
              >
                <Quote className="w-10 h-10 text-slam-accent/20 absolute top-6 right-6" />
                <p className="text-white text-[16px] leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-slam-accent text-[13px] font-bold uppercase tracking-wider mt-1">
                    {testimonial.program}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <BookingCTA />

    </main>
  );
}
