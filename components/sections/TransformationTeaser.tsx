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

const transformations = [
  { name: "Rahul S.", program: "Body Transformation", time: "12 Weeks" },
  { name: "Priya M.", program: "Weight Loss", time: "8 Weeks" },
  { name: "Vikram K.", program: "Muscle Gain", time: "16 Weeks" }
];

export default function TransformationTeaser() {
  return (
    <section className="bg-ferous-section py-20 lg:py-32 overflow-hidden border-b border-ferous-border">
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
              <SectionLabel>REAL STORIES</SectionLabel>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(36px,5vw,52px)] font-extrabold text-white leading-[1.1] tracking-tight"
            >
              <span className="text-ferous-accent">Real</span> People. Real Results.
            </motion.h2>
          </div>
          
          <motion.div variants={itemVariants} className="hidden md:block">
            <Button variant="text" href="/transformations">
              See All Transformations
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
          {transformations.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="snap-center shrink-0 w-[85vw] md:w-auto"
            >
              <Card className="p-5 h-full">
              {/* Before / After Placeholder */}
              <div className="flex gap-2 h-[200px] mb-6">
                <div className="flex-1 bg-[#2A2A2A] rounded-[8px] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute bottom-3 left-3 text-[11px] uppercase font-bold text-white/50 tracking-wider">Before</span>
                </div>
                <div className="flex-1 bg-[#1A1A1A] rounded-[8px] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute bottom-3 left-3 text-[11px] uppercase font-bold text-ferous-accent tracking-wider">After</span>
                </div>
              </div>

              {/* Details */}
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                <p className="text-sm font-semibold text-ferous-accent mb-3">{t.program}</p>
                <div className="inline-block px-3 py-1 bg-[#2A2A2A] rounded-full">
                  <span className="text-[11px] text-white/80 font-bold uppercase tracking-wider">{t.time}</span>
                </div>
              </div>
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
          <Button variant="text" href="/transformations">
            See All Transformations
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
