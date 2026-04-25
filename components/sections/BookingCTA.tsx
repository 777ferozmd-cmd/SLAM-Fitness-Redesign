"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function BookingCTA() {
  return (
    <section className="w-full bg-ferous-section py-[96px] px-6 border-b border-ferous-border flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div 
        className="max-w-[700px] flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionLabel>FREE CONSULTATION</SectionLabel>
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-[1.1] mb-6 tracking-tight"
        >
          Ready to Start Your Transformation?
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-[18px] text-[#B0B0B0] mb-10 max-w-[500px]"
        >
          Book a free consultation with our coaches. No commitments. No pressure.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button variant="primary" href="/contact">
            Book Your Free Trial
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
