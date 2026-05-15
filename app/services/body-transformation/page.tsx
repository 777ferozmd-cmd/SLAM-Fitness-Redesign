import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Target, Activity, ShieldCheck, ClipboardList, Dumbbell, Trophy } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTransformations from "@/components/sections/ServiceTransformations";
import Card from "@/components/ui/Card";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Body Transformation Programs in Chennai — Ferous",
  description: "Complete physique transformation through structured training and nutrition. Your best body starts here.",
  openGraph: {
    title: "Body Transformation Programs — Ferous Fitness Studio",
    description: "Complete physique overhaul through structured personal training and precision nutrition coaching in Chennai.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BodyTransformationPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <ServiceHero 
        subtitle="Body Transformation"
        title={<>Your Best Body <span className="text-ferous-accent">Starts Here</span></>}
        imageSrc="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Ferous Body Transformation"
      />

      {/* 2. Transformation Approach */}
      <section className="py-20 md:py-32 bg-ferous-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Not a Diet. <span className="text-ferous-accent">A Total Overhaul.</span>
              </h2>
              <p className="text-ferous-body text-[18px] leading-relaxed mb-6">
                Our Body Transformation program is our most comprehensive offering. It's designed for those who are serious about making a dramatic change to their physique, health, and lifestyle.
              </p>
              <p className="text-ferous-body text-[18px] leading-relaxed mb-8">
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
                    <CheckCircle2 className="w-5 h-5 text-ferous-accent shrink-0" />
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
      <section className="py-20 md:py-32 bg-ferous-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              The 3-Phase Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[96px] left-[15%] right-[15%] h-[1px] bg-ferous-border z-0" />

            {[
              { 
                phase: "Phase 1", 
                icon: ClipboardList,
                title: "Assessment & Baseline", 
                desc: "We analyze your current body composition, metabolic rate, and lifestyle habits to create a precise, data-driven starting point." 
              },
              { 
                phase: "Phase 2", 
                icon: Dumbbell,
                title: "Training + Nutrition", 
                desc: "Execution begins. You'll follow a customized progressive overload program paired with strict, sustainable nutritional macros." 
              },
              { 
                phase: "Phase 3", 
                icon: Trophy,
                title: "Results & Maintenance", 
                desc: "As you hit your goal weight and physique, we transition your plan to ensure long-term maintenance and prevent rebounds." 
              }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                {/* Phase Label - Outside */}
                <span className="text-ferous-accent text-[12px] font-bold uppercase tracking-[0.2em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {step.phase}
                </span>

                {/* Circular Phase Logo */}
                <SpotlightCard 
                  className="w-[120px] h-[120px] rounded-full bg-ferous-card border border-ferous-border flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-ferous-accent group-hover:scale-105 overflow-hidden"
                  spotlightColor="rgba(255, 26, 26, 0.2)"
                >
                  <div className="absolute inset-0 bg-ferous-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <step.icon className="w-10 h-10 text-ferous-accent relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </SpotlightCard>

                <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-ferous-accent">{step.title}</h3>
                <p className="text-ferous-body text-[16px] leading-relaxed max-w-[300px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who Is This For? */}
      <section className="py-20 md:py-32 bg-ferous-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Who Is This For?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Target,
                title: "Serious Goal Setters", 
                desc: "Those who have a specific physique goal and are ready to put in the work to achieve it." 
              },
              { 
                icon: Activity,
                title: "Busy Professionals", 
                desc: "High-performers who need an efficient, data-driven plan that fits into their demanding schedule." 
              },
              { 
                icon: ShieldCheck,
                title: "Life-Changers", 
                desc: "Anyone ready to break old habits and build a sustainable, healthy foundation for years to come." 
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 flex flex-col items-start !border-ferous-border">
                <div className="w-14 h-14 rounded-full bg-ferous-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-ferous-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-ferous-body text-[16px] leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transformations */}
      <ServiceTransformations 
        title="Dramatic Body Overhauls"
        subtitle="THE SUCCESS STORIES"
        transformations={[
          { id: 3, name: "Priya V.", time: "24 Weeks", category: "Total Recomp", beforeImg: "/transformations/Priya V before.jpg", afterImg: "/transformations/Priya V after.jpg" },
          { id: 2, name: "Karthik M.", time: "16 Weeks", category: "Muscle Gain", beforeImg: "/transformations/Karthik M before.jpg", afterImg: "/transformations/Karthik M after.jpg" }
        ]}
      />

      {/* 5. CTA */}
      <BookingCTA />

    </main>
  );
}
