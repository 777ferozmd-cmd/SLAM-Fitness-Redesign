"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import * as Icons from "lucide-react";

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-slam-bg py-20 md:py-32 px-6 md:px-20 border-b border-slam-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Heading & Sticky Content */}
        <div className="lg:sticky lg:top-32 flex flex-col items-start gap-6">
          <p className="text-slam-primary text-[12px] uppercase tracking-[0.12em] font-bold">
            Our Services
          </p>
          <h2 className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,56px)]">
            Elite Training. <br />
            <span className="text-slam-muted">Real Results.</span>
          </h2>
          <p className="text-[18px] text-[#C8C8C8] max-w-[420px]">
            Whether your goal is to lose fat, build muscle, or completely transform your body, we have a specialized program designed for you.
          </p>
          <Link href="/contact" className="btn-primary inline-flex mt-4 group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col border-t border-slam-border">
          {SERVICES.map((service, index) => {
            const isOpen = index === openIndex;
            // @ts-expect-error - Framer Motion requires specific ease casting or dynamic resolution that TS struggles with in this context
            const Icon = Icons[service.icon] || Icons.Dumbbell;

            return (
              <div
                key={service.slug}
                className="border-b border-slam-border py-6 md:py-8 cursor-pointer group"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-slam-accent border-slam-accent text-white" : "bg-slam-section border-slam-border text-slam-text group-hover:border-slam-accent"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-slam-muted group-hover:text-white"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`text-slam-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 pl-[72px]">
                        <p className="text-slam-primary font-bold mb-2 uppercase tracking-wider text-sm">
                          {service.tagline}
                        </p>
                        <p className="text-[#C8C8C8] leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center text-white font-bold hover:text-slam-accent transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore Program
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
