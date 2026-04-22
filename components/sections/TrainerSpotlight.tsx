"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function TrainerSpotlight() {
  const trainers = [
    {
      id: 1,
      name: "Arun Kumar",
      specialty: "Head Coach & Nutritionist",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
      instagram: "#",
    },
    {
      id: 2,
      name: "Priya Raj",
      specialty: "Functional Training Specialist",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
      instagram: "#",
    },
    {
      id: 3,
      name: "Karthik S.",
      specialty: "Bodybuilding Expert",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
      instagram: "#",
    },
    {
      id: 4,
      name: "Divya M.",
      specialty: "Yoga & Mobility",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
      instagram: "#",
    }
  ];

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section className="bg-[#141414] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-slam-primary text-[12px] uppercase tracking-[0.12em] font-bold"
          >
            Meet The Elite
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,56px)] max-w-2xl"
          >
            Chennai&apos;s Best Coaches. <br className="hidden md:block"/>
            <span className="text-slam-muted">At Your Service.</span>
          </motion.h2>
        </div>

        {/* Trainers Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trainers.map((trainer) => (
            <motion.div 
              key={trainer.id}
              variants={fadeInUp}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-slam-bg">
                <Image 
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a href={trainer.instagram} className="w-12 h-12 rounded-full bg-slam-accent text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-slam-accent transition-colors">{trainer.name}</h3>
              <p className="text-sm font-medium text-slam-muted uppercase tracking-wider">{trainer.specialty}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
