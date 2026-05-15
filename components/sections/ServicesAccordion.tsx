"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import FlowingMenu from "@/components/ui/FlowingMenu";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesAccordion() {
  const programImages: Record<string, string> = {
    "weight-loss-weight-gain": "/hero/img1_situp_girl.jpg",
    "functional-training": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    "bootcamp": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
    "body-transformation": "/hero/img6_deadlift.jpg",
  };

  const programMenuItems = SERVICES.map((service) => ({
    link: `/services/${service.slug}`,
    text: service.title,
    image: programImages[service.slug] ?? "/hero/img3_barbell_gym.jpg",
  }));

  return (
    <section className="bg-ferous-bg py-20 lg:py-32 overflow-hidden border-b border-ferous-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text + Accordion */}
          <motion.div 
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>OUR PROGRAMS</SectionLabel>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(36px,5vw,52px)] font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              <span className="text-ferous-accent">Programs</span> Tailored To You
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-[18px] text-[#C8C8C8] mb-10 max-w-[480px]"
            >
              From fat loss to muscle gain — Ferous has a structured program for every body type and goal.
            </motion.p>

            {/* Flowing Menu */}
            <motion.div variants={itemVariants} className="h-[320px] sm:h-[340px] lg:h-[360px]">
              <FlowingMenu
                items={programMenuItems}
                bgColor="#0d0d0d"
                textColor="#ffffff"
                marqueeBgColor="#e11111"
                marqueeTextColor="#ffffff"
                borderColor="#2a2a2a"
                speed={18}
                className="rounded-ferous-lg border border-ferous-border"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Tall Photo */}
          <motion.div 
            className="relative w-full h-[400px] lg:h-[600px] rounded-[16px] overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
              alt="Ferous Fitness Studio Training Programs"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Inner Gradient for Polish */}
            <div className="absolute inset-0 border border-white/10 rounded-[16px] pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
