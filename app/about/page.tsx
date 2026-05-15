import { Metadata } from "next";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import Card from "@/components/ui/Card";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "About Us — Ferous Fitness Studio",
  description:
    "Learn about the Ferous Fitness story, our mission, vision, and the expert coaches behind every transformation.",
  openGraph: {
    title: "About Ferous Fitness Studio",
    description: "Our mission, vision, values, and the certified coaches who drive every transformation in Chennai.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const TRAINERS = [
  {
    name: "Vikram R.",
    initials: "VR",
    specialization: "Head Strength Coach",
    certifications: "ACE Certified, CrossFit Level 2",
    experience: "8+ Years",
    social: "https://instagram.com",
  },
  {
    name: "Sneha P.",
    initials: "SP",
    specialization: "Functional & HIIT Specialist",
    certifications: "NASM CPT, Kettlebell Level 1",
    experience: "5+ Years",
    social: "https://instagram.com",
  },
  {
    name: "Karthik D.",
    initials: "KD",
    specialization: "Body Transformation",
    certifications: "ISSA Certified, Sports Nutrition",
    experience: "10+ Years",
    social: "https://instagram.com",
  },
  {
    name: "Rahul S.",
    initials: "RS",
    specialization: "Powerlifting Coach",
    certifications: "USAPL Coach, Strength Specialist",
    experience: "6+ Years",
    social: "https://instagram.com",
  },
  {
    name: "Priya V.",
    initials: "PV",
    specialization: "Mobility & Recovery",
    certifications: "Yoga Alliance, FMS Level 1",
    experience: "7+ Years",
    social: "https://instagram.com",
  },
  {
    name: "Arun M.",
    initials: "AM",
    specialization: "Bootcamp Instructor",
    certifications: "ACE Group Fitness, CPR/AED",
    experience: "4+ Years",
    social: "https://instagram.com",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-grow pt-[80px]">

      {/* 1. Hero */}
      <ServiceHero
        subtitle="ABOUT FEROUS"
        title="Our Story"
        imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Ferous Fitness Gym Floor"
      />

      {/* 2. Brand Story */}
      <section className="py-20 md:py-32 bg-ferous-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Redefining Fitness in{" "}
                <span className="text-ferous-accent">Chennai</span>
              </h2>
              <p className="text-ferous-body text-[18px] leading-relaxed mb-6">
                Ferous Fitness was founded with a singular mission: to make premium, results-driven fitness accessible without the intimidation factor. We saw a massive gap between exclusive luxury clubs and overcrowded neighborhood gyms — and we bridged it.
              </p>
              <p className="text-ferous-body text-[18px] leading-relaxed">
                We're not just a place with weights and treadmills. We are a community-driven lifestyle destination engineered for your success, staffed by experts who genuinely care about your progress.
              </p>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative pl-8 border-l-4 border-ferous-accent max-w-[400px]">
                <p className="text-[clamp(40px,5vw,48px)] font-extrabold text-ferous-accent italic leading-[1.1]">
                  &quot;Not just a gym.<br />A way of life.&quot;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Values */}
      <section className="py-20 md:py-32 bg-ferous-section">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To democratize premium fitness coaching. World-class facilities and evidence-based training protocols — for anyone willing to put in the work.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the undisputed leader in transformative fitness across India, building a nation that views physical health as the foundation of a successful life.",
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Integrity in coaching, relentless pursuit of excellence, and a supportive community. We never compromise on equipment quality or staff caliber.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-ferous-card p-8 flex flex-col items-start border-none"
              >
                <div className="w-16 h-16 rounded-full bg-ferous-accent/10 flex items-center justify-center mb-6 shrink-0">
                  <item.icon className="w-8 h-8 text-ferous-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-ferous-body text-[16px] leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet the Coaches */}
      <section id="trainers" className="py-20 md:py-32 bg-ferous-bg scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">

          {/* Section header */}
          <div className="mb-16">
            <p className="text-ferous-accent text-[13px] font-bold uppercase tracking-[3px] mb-4">
              OUR EXPERTS
            </p>
            <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
              <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
                Meet the <span className="text-ferous-accent">Coaches</span>
              </h2>
              <p className="text-ferous-body text-[18px] max-w-[480px] md:text-right leading-relaxed">
                Every coach at Ferous is certified, experienced, and personally invested in your results.
              </p>
            </div>
          </div>

          {/* Trainer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {TRAINERS.map((trainer, idx) => (
              <SpotlightCard
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-ferous-card border border-ferous-border hover:border-ferous-accent transition-colors duration-300 flex flex-col"
              >
                {/* Photo placeholder */}
                <div className="relative w-full aspect-[3/4] bg-[#222222] flex items-center justify-center overflow-hidden">
                  <div className="text-[80px] font-extrabold text-[#333333] tracking-tighter select-none transition-transform duration-500 group-hover:scale-110">
                    {trainer.initials}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-ferous-card to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="p-6 pt-2 relative z-20 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {trainer.name}
                      </h3>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-ferous-border flex flex-col gap-2">
                    <p className="text-ferous-body text-[13px] leading-tight">
                      <span className="text-white font-medium mr-1">
                        Certifications:
                      </span>
                      {trainer.certifications}
                    </p>
                    <p className="text-ferous-body text-[13px] leading-tight">
                      <span className="text-white font-medium mr-1">
                        Experience:
                      </span>
                      {trainer.experience}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* The Ferous Standard */}
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-ferous-section border border-ferous-border rounded-2xl p-10 lg:p-14">
            <div className="flex-1">
              <h3 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white leading-tight mb-4">
                The Ferous{" "}
                <span className="text-ferous-accent">Standard</span>
              </h3>
              <p className="text-ferous-body text-[17px] leading-relaxed">
                We don&apos;t believe in generic workout plans. Every coach educates you on form, understands your unique biomechanics, and provides the psychological support needed to push past your perceived limits.
              </p>
            </div>
            <div className="flex-1 w-full">
              <ul className="space-y-5">
                {[
                  "Internationally Recognised Certifications (ACE, NASM, ISSA)",
                  "Mandatory In-House Continuing Education",
                  "CPR and First-Aid Certified Staff",
                  "Data-Driven Programming & Nutritional Coaching",
                ].map((credential, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-ferous-accent shrink-0 mt-0.5" />
                    <span className="text-white text-[16px] md:text-[17px] font-medium leading-relaxed">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <BookingCTA />

    </main>
  );
}
