"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsBar() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-slam-section py-10 px-6 md:px-20 border-y border-slam-border"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0">
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center ${
              index !== STATS.length - 1 ? "lg:border-r border-slam-border" : ""
            }`}
          >
            <div className="text-[clamp(40px,5vw,56px)] font-extrabold text-white leading-none">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="text-[14px] text-[#6B6B6B] mt-2 font-medium tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
