import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Body Transformation Programs in Chennai — SLAM",
  description: "Complete physique transformation through structured training and nutrition. Your best body starts here.",
};

export default function BodyTransformationPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <ServiceHero 
        subtitle="Body Transformation"
        title={<>Your Best Body <span className="text-slam-accent">Starts Here</span></>}
        imageSrc="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
        imageAlt="SLAM Body Transformation"
      />

      {/* 2. Transformation Approach */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Not a Diet. <span className="text-slam-accent">A Total Overhaul.</span>
              </h2>
              <p className="text-[#B0B0B0] text-[18px] leading-relaxed mb-6">
                Our Body Transformation program is our most comprehensive offering. It's designed for those who are serious about making a dramatic change to their physique, health, and lifestyle.
              </p>
              <p className="text-[#B0B0B0] text-[18px] leading-relaxed mb-8">
                We combine elite personal training, precise nutritional coaching, and relentless accountability to guarantee results. We don't guess — we assess, plan, and execute.
              </p>
              <ul className="space-y-4">
                {[
                  "1-on-1 dedicated coaching",
                  "Calculated macronutrient planning",
                  "Continuous body composition tracking",
                  "24/7 accountability and support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slam-accent shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-1 relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Body transformation approach"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 inset-ring" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. The 3-Phase Plan */}
      <section className="py-20 md:py-32 bg-slam-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              The 3-Phase Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-[#2A2A2A] z-0" />
            
            {[
              { 
                phase: "Phase 1", 
                title: "Assessment & Baseline", 
                desc: "We analyze your current body composition, metabolic rate, and lifestyle habits to create a precise, data-driven starting point." 
              },
              { 
                phase: "Phase 2", 
                title: "Training + Nutrition", 
                desc: "Execution begins. You'll follow a customized progressive overload program paired with strict, sustainable nutritional macros." 
              },
              { 
                phase: "Phase 3", 
                title: "Results & Maintenance", 
                desc: "As you hit your goal weight and physique, we transition your plan to ensure long-term maintenance and prevent rebounds." 
              }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-[80px] h-[80px] rounded-full bg-[#1A1A1A] border-2 border-slam-accent flex items-center justify-center text-xl font-bold text-white mb-6 uppercase tracking-wider">
                  {step.phase}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#B0B0B0] text-[16px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before/After Preview */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-slam-accent text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
                REAL PEOPLE. REAL RESULTS.
              </p>
              <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
                Transformation Stories
              </h2>
            </div>
            <Link 
              href="/transformations"
              className="group flex items-center gap-2 text-white font-bold tracking-wider uppercase text-[14px] hover:text-slam-accent transition-colors"
            >
              See All Gallery
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", time: "12 Weeks", tag: "Fat Loss" },
              { name: "Karthik M.", time: "16 Weeks", tag: "Muscle Gain" },
              { name: "Priya V.", time: "24 Weeks", tag: "Total Recomp" }
            ].map((card, idx) => (
              <Card key={idx} className="group relative overflow-hidden bg-[#1A1A1A] border-none p-0">
                {/* Image Placeholder (split before/after visually) */}
                <div className="relative h-[300px] w-full flex">
                  <div className="w-1/2 h-full relative border-r border-white/20">
                    <Image
                      src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                      alt="Before"
                      fill
                      className="object-cover opacity-60 grayscale"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white text-[10px] font-bold tracking-wider uppercase">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <Image
                      src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                      alt="After"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-slam-accent px-3 py-1 rounded text-white text-[10px] font-bold tracking-wider uppercase">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{card.name}</h3>
                    <span className="text-[#6B6B6B] text-[14px]">{card.time}</span>
                  </div>
                  <p className="text-slam-accent text-[14px] font-medium uppercase tracking-wider">
                    {card.tag}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <BookingCTA />

    </main>
  );
}
