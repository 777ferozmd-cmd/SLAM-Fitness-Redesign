"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function Transformations() {
  const transformations = [
    {
      id: 1,
      name: "Rahul M.",
      duration: "6 Months",
      achievement: "Lost 15kg & built lean muscle",
      beforeImage: "/transformations/Rahul M  before.jpg", // placeholder fat
      afterImage: "/transformations/Rahul M after.jpg", // placeholder fit
    },
    {
      id: 2,
      name: "Sneha K.",
      duration: "4 Months",
      achievement: "Gained strength & confidence",
      beforeImage: "/transformations/Sneha K before.jpg", // placeholder
      afterImage: "/transformations/Sneha K after.jpg", // placeholder fit
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="bg-ferous-bg py-20 md:py-32 overflow-hidden border-b border-ferous-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <motion.p 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="text-ferous-primary text-[12px] uppercase tracking-[0.12em] font-bold"
            >
              Real Members. Real Results.
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,56px)]"
            >
              Transformations That <br className="hidden md:block"/>
              <span className="text-ferous-muted">Speak For Themselves.</span>
            </motion.h2>
          </div>
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="shrink-0"
          >
            <Link href="/about" className="text-white font-bold inline-flex items-center hover:text-ferous-accent transition-colors">
              View All Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {transformations.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <BeforeAfterSlider
                beforeImg={t.beforeImage}
                afterImg={t.afterImage}
                beforeAlt={`${t.name} Before`}
                afterAlt={`${t.name} After`}
                aspectRatio="5/7"
                className="w-full"
              />

              {/* Info */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-ferous-accent bg-ferous-accent/10 px-3 py-1 rounded-full">{t.duration}</span>
                  <span className="text-ferous-muted">•</span>
                  <span className="text-[#C8C8C8]">{t.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
