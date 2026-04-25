import { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import ServiceHero from "@/components/sections/ServiceHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us — Ferous Fitness Studio",
  description: "Learn about the Ferous Fitness story, our mission, vision, and how we're redefining the premium fitness experience in Chennai.",
};

export default function AboutPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
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
            
            {/* Left: Narrative Copy */}
            <div className="flex-1">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
                Redefining Fitness in <span className="text-ferous-accent">Chennai</span>
              </h2>
              <p className="text-ferous-body text-[18px] leading-relaxed mb-6">
                Ferous Fitness was founded with a singular mission: to make premium, results-driven fitness accessible without the intimidation factor. We looked at the fitness landscape in Chennai and realized there was a massive gap between exclusive luxury clubs and overcrowded, poorly equipped neighborhood gyms.
              </p>
              <p className="text-ferous-body text-[18px] leading-relaxed">
                We bridge that gap. We're not just a place with weights and treadmills; we are a community-driven lifestyle destination. When you walk through our doors, you're not just renting equipment — you're investing in an environment engineered for your success, surrounded by expert professionals who actually care about your progress.
              </p>
            </div>

            {/* Right: Large Pull Quote */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative pl-8 border-l-4 border-ferous-accent max-w-[400px]">
                <p className="text-[clamp(40px,5vw,48px)] font-extrabold text-ferous-accent italic leading-[1.1]">
                  "Not just a gym.<br/>A way of life."
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
                desc: "To democratize premium fitness coaching. We provide world-class facilities and evidence-based training protocols to anyone willing to put in the work." 
              },
              { 
                icon: Eye, 
                title: "Our Vision", 
                desc: "To be the undisputed leader in transformative fitness across India. We aim to build a nation that views physical health as the ultimate foundation for a successful life." 
              },
              { 
                icon: Heart, 
                title: "Our Values", 
                desc: "Integrity in coaching, relentless pursuit of excellence, and fostering a supportive community. We never compromise on the quality of our equipment or the caliber of our staff." 
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-ferous-card p-8 flex flex-col items-start border-none">
                <div className="w-16 h-16 rounded-full bg-ferous-accent/10 flex items-center justify-center mb-6 shrink-0">
                  <item.icon className="w-8 h-8 text-ferous-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-ferous-body text-[16px] leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Milestones Timeline */}
      <section className="py-20 md:py-32 bg-ferous-bg overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              The Journey So Far
            </h2>
          </div>

          <div className="relative">
            {/* Continuous horizontal line */}
            <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-ferous-border hidden md:block" />

            <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {[
                { year: "2015", title: "Founded", desc: "The idea of Ferous was born, identifying the need for premium fitness." },
                { year: "2016", title: "First Branch", desc: "We opened our doors in Chennai, setting a new standard for local gyms." },
                { year: "2019", title: "2000+ Members", desc: "Our community grew rapidly as results spoke louder than words." },
                { year: "2023", title: "Multi-Location", desc: "Expanded to multiple prime locations across the city to serve more people." }
              ].map((milestone, idx) => (
                <div key={idx} className="min-w-[280px] md:min-w-0 flex-1 snap-start relative pt-8 md:pt-0">
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute top-[33px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ferous-accent ring-4 ring-ferous-card" />
                  
                  <div className="md:mt-20 text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-ferous-accent mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-ferous-body text-[15px] leading-relaxed px-4">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Parent Company */}
      <section className="py-16 bg-[#141414] border-t border-b border-ferous-border">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-ferous-body text-[16px] md:text-[18px] leading-relaxed">
            Ferous is a premium fitness lifestyle brand, carrying forward a legacy of trust, excellence, and premium lifestyle services across South India.
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <BookingCTA />

    </main>
  );
}
