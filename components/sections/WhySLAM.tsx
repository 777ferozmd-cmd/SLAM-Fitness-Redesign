"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

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

export default function WhySLAM() {
  const features = [
    "Personalised programs",
    "Certified coaches",
    "Nutrition + training",
    "Beginner-friendly",
    "Flexible timings"
  ];

  return (
    <section className="bg-slam-section py-20 lg:py-32 overflow-hidden border-b border-slam-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Large Photo */}
          <motion.div 
            className="relative w-full h-[400px] lg:h-[600px] rounded-[16px] overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
              alt="Group training at SLAM Fitness"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Inner Gradient for Polish */}
            <div className="absolute inset-0 border border-white/10 rounded-[16px] pointer-events-none" />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="flex flex-col order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>WHY SLAM</SectionLabel>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(36px,5vw,52px)] font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              <span className="text-slam-accent">Coaching</span> Built Around You
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-[18px] text-[#B0B0B0] mb-8 max-w-[480px] leading-[1.65]"
            >
              Not sure where to start? Our certified trainers build programs based on your goals, your body, and your schedule. This is how real results happen.
            </motion.p>

            <motion.ul variants={itemVariants} className="flex flex-col gap-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white font-medium text-[16px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-slam-accent shrink-0" />
                  {feature}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Button variant="text" href="/contact">
                Book a Free Consultation
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
