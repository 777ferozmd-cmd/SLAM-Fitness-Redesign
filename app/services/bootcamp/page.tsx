import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Fitness Bootcamp in Chennai — SLAM",
  description: "High-energy group training sessions for lasting results and healthier habits. Join the SLAM Bootcamp community.",
};

export default function BootcampPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <ServiceHero 
        subtitle="Group Training"
        title={<><span className="text-slam-accent">The Bootcamp</span> Experience</>}
        imageSrc="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
        imageAlt="SLAM Bootcamp Group Training"
      />

      {/* 2. What Makes It Different */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Group Energy. <span className="text-slam-accent">Individual Results.</span>
              </h2>
              <p className="text-[#B0B0B0] text-[18px] leading-relaxed mb-6">
                Bootcamp isn't just a workout; it's an experience. We combine the motivation of group dynamics with the structured programming of personal training to create high-energy sessions that push your limits safely.
              </p>
              <p className="text-[#B0B0B0] text-[18px] leading-relaxed mb-8">
                Expect a mix of HIIT, functional strength, and cardiovascular conditioning. It's designed to build lasting healthy habits within a supportive community that holds you accountable.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert-led group sessions",
                  "Supportive community atmosphere",
                  "Scalable for all fitness levels",
                  "Fun, varied daily workouts"
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
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
                alt="Group of people training in a bootcamp"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 inset-ring" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Session Structure (4-step) */}
      <section className="py-20 md:py-32 bg-slam-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-[#2A2A2A] z-0" />
            
            {[
              { num: "01", title: "Dynamic Warm-Up", desc: "Prepare your muscles and joints to prevent injury and maximize performance." },
              { num: "02", title: "Skill & Strength", desc: "Focus on form and technique while building core structural strength." },
              { num: "03", title: "The Circuit", desc: "High-intensity metabolic conditioning to burn fat and push your cardiovascular limits." },
              { num: "04", title: "Cooldown & Mobility", desc: "Guided stretching to kickstart recovery and improve flexibility." }
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

      {/* 4. Community Testimonials */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight mb-4">
              The Bootcamp Community
            </h2>
            <p className="text-[#B0B0B0] text-[18px]">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Arjun K.", text: "I hated going to the gym alone. The bootcamp community pushes me harder than I'd ever push myself." },
              { name: "Priya M.", text: "Lost 8 kgs in my first 3 months. The coaches make sure everyone is challenged regardless of their fitness level." },
              { name: "Siddharth R.", text: "The energy in the room is unmatched. It's the highlight of my day and the results have been incredible." }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-slam-section p-8 border-none relative">
                <Quote className="w-10 h-10 text-slam-accent/20 absolute top-6 right-6" />
                <p className="text-white text-[16px] leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="font-bold text-slam-accent tracking-wide uppercase text-sm relative z-10">
                  — {testimonial.name}
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
