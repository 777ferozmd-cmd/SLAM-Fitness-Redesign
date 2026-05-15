"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

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
  { 
    name: "Rahul S.", 
    program: "Body Transformation", 
    time: "12 Weeks",
    beforeImg: "/transformations/Rahul S Before.jpg",
    afterImg: "/transformations/Rahul S After.jpg"
  },
  { 
    name: "Priya M.", 
    program: "Weight Loss", 
    time: "8 Weeks",
    beforeImg: "/transformations/Priya M before.jpg",
    afterImg: "/transformations/Priya M after.jpg"
  },
  { 
    name: "Vikram K.", 
    program: "Muscle Gain", 
    time: "16 Weeks",
    beforeImg: "/transformations/Vikram  K before.jpg",
    afterImg: "/transformations/Vikram k after.jpg"
  }
];

export default function TransformationTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollLeft = target.scrollLeft;
    const scrollWidth = target.scrollWidth - target.clientWidth;
    if (scrollWidth <= 0) return;
    const progress = scrollLeft / scrollWidth;
    const index = Math.round(progress * (transformations.length - 1));
    setActiveIndex(index);
  };

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
            <Button variant="text" href="/services/body-transformation">
              See All Transformations
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards Carousel/Grid */}
        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar"
          onScroll={handleScroll}
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
              <Card className="!p-0 border-ferous-border overflow-hidden group h-full">
                {/* Before After Slider */}
                <BeforeAfterSlider 
                  beforeImg={t.beforeImg}
                  afterImg={t.afterImg}
                  beforeAlt={`${t.name} Before`}
                  afterAlt={`${t.name} After`}
                  aspectRatio="5/7"
                  className="w-full"
                />

                {/* Details */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold text-white">{t.name}</h3>
                    <span className="text-ferous-accent font-bold text-sm">{t.time}</span>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px] font-medium uppercase tracking-wider">
                    {t.program}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots (Mobile Only) */}
        <motion.div 
          className="flex justify-center gap-2 mt-2 mb-6 md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {transformations.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-ferous-accent" : "w-1.5 bg-[#333]"
              }`}
            />
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div 
          className="mt-2 md:hidden"
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
