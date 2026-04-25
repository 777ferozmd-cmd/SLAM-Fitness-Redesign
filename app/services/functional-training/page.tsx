import { Metadata } from "next";
import Image from "next/image";
import { Activity, Zap, Flame, Dumbbell, ShieldCheck, HeartPulse, CheckCircle2 } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Functional Fitness Training in Chennai — Ferous",
  description: "Improve real-world strength, mobility, and endurance with Ferous's functional training programs. Move better and perform harder.",
};

export default function FunctionalTrainingPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <ServiceHero 
        subtitle="Functional Fitness Programs"
        title={<><span className="text-ferous-accent">Move Better.</span> Perform Harder.</>}
        imageSrc="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop"
        imageAlt="Functional Training at Ferous"
      />

      {/* 2. What is Functional Training */}
      <section className="py-20 md:py-32 bg-ferous-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Train for Life, Not Just the Mirror.
              </h2>
              <p className="text-ferous-body text-[18px] leading-relaxed mb-6">
                Functional training is about building strength, balance, and mobility that translates directly to your daily activities and athletic performance. Instead of isolating single muscles on a machine, we use multi-joint movements that simulate real-world physical demands.
              </p>
              <p className="text-ferous-body text-[18px] leading-relaxed mb-8">
                Whether you're carrying heavy groceries, playing a sport, or just wanting to move without pain, functional fitness prepares your body for the unpredictable nature of life.
              </p>
              <ul className="space-y-4">
                {[
                  "Kettlebell swings & lunges",
                  "Plyometrics and agility drills",
                  "Core stabilization exercises",
                  "High-intensity mobility flows"
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
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                alt="Man doing functional training with battle ropes"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 inset-ring" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="py-20 md:py-32 bg-ferous-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Why Choose Functional Fitness?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Multi-Muscle Engagement", desc: "Work multiple muscle groups simultaneously for efficient, full-body strength building." },
              { icon: Flame, title: "Metabolism Boost", desc: "High-intensity functional movements keep your metabolism elevated long after your workout ends." },
              { icon: Activity, title: "Massive Calorie Burn", desc: "Burn more calories per minute compared to traditional isolated machine exercises." },
              { icon: HeartPulse, title: "Cardio & Endurance", desc: "Improve your cardiovascular health while building functional stamina for daily life." },
              { icon: ShieldCheck, title: "Real-World Strength", desc: "Build strength that actually matters outside the gym, preventing daily injuries." },
              { icon: Dumbbell, title: "Accelerated Fat Loss", desc: "The combination of strength and cardio rapidly accelerates fat burning and leaning out." }
            ].map((benefit, idx) => (
              <Card key={idx} className="bg-ferous-card p-8 border-none">
                <div className="w-14 h-14 rounded-full bg-ferous-accent/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-ferous-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-ferous-body leading-relaxed">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who It's For */}
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
                title: "Athletes & Competitors", 
                desc: "Looking to improve agility, explosiveness, and sport-specific performance." 
              },
              { 
                title: "Desk Workers", 
                desc: "Need to reverse poor posture, relieve back pain, and regain natural mobility." 
              },
              { 
                title: "Fitness Enthusiasts", 
                desc: "Bored of traditional bodybuilding splits and want a dynamic, challenging routine." 
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-ferous-section p-8 relative overflow-hidden group border-none">
                <div className="absolute top-0 left-0 w-1 h-full bg-ferous-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-10" />
                <h3 className="text-2xl font-bold text-white mb-4 pl-4 relative z-10">{item.title}</h3>
                <p className="text-ferous-body text-[16px] leading-relaxed pl-4 relative z-10">{item.desc}</p>
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
