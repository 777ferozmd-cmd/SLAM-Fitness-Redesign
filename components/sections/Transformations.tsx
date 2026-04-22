"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Transformations() {
  const transformations = [
    {
      id: 1,
      name: "Rahul M.",
      duration: "6 Months",
      achievement: "Lost 15kg & built lean muscle",
      beforeImage: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=600&auto=format&fit=crop", // placeholder fat
      afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop", // placeholder fit
    },
    {
      id: 2,
      name: "Sneha K.",
      duration: "4 Months",
      achievement: "Gained strength & confidence",
      beforeImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", // placeholder
      afterImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop", // placeholder fit
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="bg-slam-bg py-20 md:py-32 overflow-hidden border-b border-slam-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <motion.p 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="text-slam-primary text-[12px] uppercase tracking-[0.12em] font-bold"
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
              <span className="text-slam-muted">Speak For Themselves.</span>
            </motion.h2>
          </div>
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="shrink-0"
          >
            <Link href="/about" className="text-white font-bold inline-flex items-center hover:text-slam-accent transition-colors">
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
              {/* Image Split */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden flex bg-[#141414] group">
                {/* Before Image */}
                <div className="relative w-1/2 h-full border-r-4 border-slam-bg filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src={t.beforeImage}
                    alt={`${t.name} Before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-white/80">
                    Before
                  </div>
                </div>
                {/* After Image */}
                <div className="relative w-1/2 h-full">
                  <Image 
                    src={t.afterImage}
                    alt={`${t.name} After`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 right-4 bg-slam-accent px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase text-white shadow-lg">
                    After
                  </div>
                </div>
                
                {/* VS Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slam-bg border-2 border-[#2A2A2A] flex items-center justify-center shadow-xl z-10">
                  <span className="text-white text-[10px] font-black italic">VS</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-slam-accent bg-slam-accent/10 px-3 py-1 rounded-full">{t.duration}</span>
                  <span className="text-slam-muted">•</span>
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
