"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

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
  const [activeIndex, setActiveIndex] = useState(0);

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

            {/* Accordion List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`block w-full text-left p-6 rounded-ferous-lg transition-all duration-300 ease-in-out ${
                      isActive 
                        ? "bg-ferous-accent text-white shadow-[0_8px_24px_rgba(255,26,26,0.2)]" 
                        : "bg-transparent border border-ferous-border hover:border-ferous-accent"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className={`text-xl font-bold ${isActive ? "text-white" : "text-white"}`}>
                        {service.title}
                      </h3>
                      {!isActive && (
                        <Plus className="w-6 h-6 text-ferous-accent shrink-0" strokeWidth={2.5} />
                      )}
                    </div>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? "max-h-[150px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-white/90 leading-relaxed pr-8">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
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
