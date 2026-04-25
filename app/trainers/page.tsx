import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Meet the Trainers — Ferous Fitness Studio",
  description: "At Ferous, every coach is certified, experienced, and committed to your results. Meet the experts behind your transformation.",
};

const TRAINERS = [
  {
    name: "Vikram R.",
    initials: "VR",
    specialization: "Head Strength Coach",
    certifications: "ACE Certified, CrossFit Level 2",
    experience: "8+ Years",
    social: "https://instagram.com"
  },
  {
    name: "Sneha P.",
    initials: "SP",
    specialization: "Functional & HIIT Specialist",
    certifications: "NASM CPT, Kettlebell Level 1",
    experience: "5+ Years",
    social: "https://instagram.com"
  },
  {
    name: "Karthik D.",
    initials: "KD",
    specialization: "Body Transformation",
    certifications: "ISSA Certified, Sports Nutrition",
    experience: "10+ Years",
    social: "https://instagram.com"
  },
  {
    name: "Rahul S.",
    initials: "RS",
    specialization: "Powerlifting Coach",
    certifications: "USAPL Coach, Strength Specialist",
    experience: "6+ Years",
    social: "https://instagram.com"
  },
  {
    name: "Priya V.",
    initials: "PV",
    specialization: "Mobility & Recovery",
    certifications: "Yoga Alliance, FMS Level 1",
    experience: "7+ Years",
    social: "https://instagram.com"
  },
  {
    name: "Arun M.",
    initials: "AM",
    specialization: "Bootcamp Instructor",
    certifications: "ACE Group Fitness, CPR/AED",
    experience: "4+ Years",
    social: "https://instagram.com"
  }
];

export default function TrainersPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <ServiceHero 
        subtitle="OUR EXPERTS"
        title="The Coaches Behind Your Results"
        imageSrc="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Ferous Fitness Trainers"
      />

      {/* 2. Trainer Grid */}
      <section className="py-20 md:py-32 bg-ferous-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAINERS.map((trainer, idx) => (
              <SpotlightCard 
                key={idx} 
                className="group relative rounded-2xl overflow-hidden bg-ferous-card border border-ferous-border hover:border-ferous-accent transition-colors duration-300 flex flex-col"
              >
                {/* Photo Placeholder (Aspect 3/4) */}
                <div className="relative w-full aspect-[3/4] bg-[#222222] flex items-center justify-center overflow-hidden">
                  <div className="text-[80px] font-extrabold text-[#333333] tracking-tighter select-none transition-transform duration-500 group-hover:scale-110">
                    {trainer.initials}
                  </div>
                  {/* Gradient Overlay bottom 40% */}
                  <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-ferous-card to-transparent z-10" />
                </div>
                
                {/* Content Area */}
                <div className="p-6 pt-2 relative z-20 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                      <p className="text-ferous-accent text-[14px] font-bold uppercase tracking-wide">
                        {trainer.specialization}
                      </p>
                    </div>
                    <a 
                      href={trainer.social} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ferous-body hover:text-ferous-accent transition-colors"
                      aria-label={`${trainer.name} Instagram`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-ferous-border flex flex-col gap-2">
                    <p className="text-ferous-body text-[13px] leading-tight">
                      <span className="text-white font-medium mr-1">Certifications:</span> 
                      {trainer.certifications}
                    </p>
                    <p className="text-ferous-body text-[13px] leading-tight">
                      <span className="text-white font-medium mr-1">Experience:</span> 
                      {trainer.experience}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="py-20 md:py-32 bg-ferous-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Philosophy Text */}
            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Our Coaching <span className="text-ferous-accent">Philosophy</span>
              </h2>
              <p className="text-ferous-body text-[18px] md:text-[20px] leading-relaxed mb-6">
                At Ferous, every coach is certified, experienced, and committed to your results. We don't believe in generic workout plans or shouting reps at you. 
              </p>
              <p className="text-ferous-body text-[18px] md:text-[20px] leading-relaxed">
                We believe in coaching. That means educating you on form, understanding your unique biomechanics, and providing the psychological support needed to push past your perceived limits.
              </p>
            </div>

            {/* Right: Credential Bullets */}
            <div className="flex-1 w-full bg-ferous-card border border-ferous-border rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-ferous-border pb-4">
                The Ferous Standard
              </h3>
              <ul className="space-y-6">
                {[
                  "Internationally Recognized Certifications (ACE, NASM, ISSA)",
                  "Mandatory In-House Continuing Education",
                  "CPR and First-Aid Certified Staff",
                  "Data-Driven Programming & Nutritional Coaching"
                ].map((credential, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-ferous-accent mt-2.5 shrink-0" />
                    <span className="text-white text-[16px] md:text-[18px] font-medium leading-relaxed">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <BookingCTA />

    </main>
  );
}
