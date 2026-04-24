import { Metadata } from "next";
import Image from "next/image";
import { Dumbbell, Target, Flame, Activity, Users, ShieldCheck, HeartPulse } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import Card from "@/components/ui/Card";
import { FAQAccordion, ProgramTabs } from "./ClientComponents";

export const metadata: Metadata = {
  title: "Weight Loss & Weight Gain Gym in Chennai — SLAM",
  description: "Personalised weight loss and weight gain programs in Chennai with expert trainers and nutrition guidance. See results in 4–6 weeks.",
};

export default function WeightLossGainPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym training for weight loss and gain"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 pb-16 md:pb-24">
          <p className="text-slam-accent text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
            Weight Loss & Weight Gain Programs
          </p>
          <h1 className="text-white font-extrabold text-[clamp(40px,6vw,72px)] leading-[1.1] max-w-[800px]">
            <span className="text-slam-accent">Two Goals.</span> One Mission.
          </h1>
        </div>
      </section>

      {/* 2. Intro Split */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 relative">
            
            {/* Left: Weight Loss */}
            <div className="flex-1 md:pr-16 flex flex-col items-start">
              <div className="w-16 h-16 rounded-full bg-slam-accent/10 flex items-center justify-center mb-8">
                <Flame className="w-8 h-8 text-slam-accent" />
              </div>
              <h2 className="text-[clamp(32px,4vw,40px)] font-bold text-white leading-tight mb-6">
                Lose Weight The Right Way
              </h2>
              <p className="text-[#B0B0B0] text-[18px] leading-relaxed mb-8">
                Structured training that burns calories efficiently and sustainably. We design weight-loss routines that fit your pace, schedule, and comfort. HIIT, functional workouts, and calorie-optimised circuits help you burn fat while preserving lean muscle.
              </p>
              <ul className="space-y-4">
                {[
                  "HIIT sessions for maximum calorie burn",
                  "Functional training for mobility and endurance",
                  "Personalised deficit nutrition planning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slam-accent mt-2.5 shrink-0" />
                    <span className="text-[#C8C8C8] text-[16px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] bg-[#2A2A2A] shrink-0" />

            {/* Right: Weight Gain */}
            <div className="flex-1 md:pl-16 flex flex-col items-start mt-12 md:mt-0 pt-12 md:pt-0 border-t border-[#2A2A2A] md:border-0">
              <div className="w-16 h-16 rounded-full bg-slam-accent/10 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-slam-accent" />
              </div>
              <h2 className="text-[clamp(32px,4vw,40px)] font-bold text-white leading-tight mb-6">
                Build Solid, Lasting Mass
              </h2>
              <p className="text-[#B0B0B0] text-[18px] leading-relaxed mb-8">
                Progressive overload, strength circuits, and targeted exercises designed to build real muscle — not just scale weight. We pair expert training with a calorie-surplus nutrition plan to sculpt a fuller, stronger physique.
              </p>
              <ul className="space-y-4">
                {[
                  "Strength training and progressive overload",
                  "Compound lifts for foundational mass",
                  "Mass-building nutrition plan"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slam-accent mt-2.5 shrink-0" />
                    <span className="text-[#C8C8C8] text-[16px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. How It Works (Numbered Steps) */}
      <section className="py-20 md:py-32 bg-slam-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              The Path to Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-[#2A2A2A] z-0" />
            
            {[
              { num: "01", title: "Personalised Assessment", desc: "We evaluate your current fitness, lifestyle, and specific goals." },
              { num: "02", title: "Custom Program Design", desc: "A tailored blueprint integrating training routines and nutrition." },
              { num: "03", title: "Consistent Coached Training", desc: "Execute the plan under the guidance of expert certified trainers." },
              { num: "04", title: "Progress Tracking", desc: "Regular milestone check-ins to tweak plans and guarantee results." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-[80px] h-[80px] rounded-full bg-[#1A1A1A] border-2 border-slam-accent flex items-center justify-center text-3xl font-extrabold text-white mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#B0B0B0] text-[16px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Program Details (Tabs) */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Program Details
            </h2>
          </div>
          <ProgramTabs />
        </div>
      </section>

      {/* 5. Who Is This For? */}
      <section className="py-20 md:py-32 bg-slam-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Who Is This For?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Beginners", desc: "Start strong with form-focused coaching designed to safely build your foundation without intimidation." },
              { icon: Users, title: "Women", desc: "A safe, supportive environment with tailored programming for toning, fat loss, and strength." },
              { icon: HeartPulse, title: "Health-Focused Adults", desc: "Ideal for managing conditions like hypertension, cardiovascular risks, and type 2 diabetes through managed fitness." }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 flex flex-col items-start !border-[#2A2A2A]">
                <div className="w-14 h-14 rounded-full bg-slam-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-slam-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-[#B0B0B0] text-[16px] leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* 7. Booking CTA */}
      <BookingCTA />

    </main>
  );
}
