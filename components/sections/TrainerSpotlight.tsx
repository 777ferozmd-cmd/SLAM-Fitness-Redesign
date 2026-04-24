"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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

const trainers = [
  { name: "Karthik Raj", initials: "KR", spec: "Head Coach, Functional Training", exp: 8 },
  { name: "Sneha Reddy", initials: "SR", spec: "Weight Loss Specialist", exp: 5 },
  { name: "Arun Kumar", initials: "AK", spec: "Strength & Conditioning", exp: 6 }
];

export default function TrainerSpotlight() {
  return (
    <section className="bg-slam-bg py-20 lg:py-32 overflow-hidden border-b border-slam-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px]">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col">
            <motion.div variants={itemVariants}>
              <SectionLabel>OUR TEAM</SectionLabel>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(36px,5vw,52px)] font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Trained By the <span className="text-slam-accent">Best</span>
            </motion.h2>
          </div>
          
          <motion.div variants={itemVariants} className="hidden md:block">
            <Button variant="text" href="/trainers">
              Meet the Full Team
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards Carousel/Grid */}
        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="snap-center shrink-0 w-[80vw] md:w-auto"
            >
              <Card className="p-8 flex flex-col items-center group cursor-default h-full">
              {/* Placeholder Headshot */}
              <div className="w-28 h-28 rounded-full bg-[#2A2A2A] group-hover:bg-[#FF1A1A]/10 transition-colors duration-300 mx-auto mb-6 flex items-center justify-center border-2 border-transparent group-hover:border-[#FF1A1A]/30">
                <span className="text-3xl font-bold text-white group-hover:text-[#FF1A1A] transition-colors duration-300">
                  {trainer.initials}
                </span>
              </div>
              
              {/* Details */}
              <h3 className="text-2xl font-bold text-white text-center mb-1">{trainer.name}</h3>
              <p className="text-[15px] font-semibold text-slam-accent text-center mb-4">{trainer.spec}</p>
              
              <div className="w-full h-px bg-[#2A2A2A] mb-4" />
              
              <p className="text-[13px] text-[#808080] font-medium tracking-wide text-center uppercase">
                {trainer.exp} Years Experience
              </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div 
          className="mt-4 md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="text" href="/trainers">
            Meet the Full Team
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
