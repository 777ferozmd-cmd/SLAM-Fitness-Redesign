"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-slam-accent py-20 overflow-hidden relative">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 text-center md:text-left"
        >
          <h2 className="text-white font-extrabold text-[clamp(32px,4vw,48px)] leading-[1.1]">
            Ready to Start Your <br className="hidden md:block" /> Transformation?
          </h2>
          <p className="text-white/90 font-medium text-lg max-w-md">
            Join the best gym in Chennai. Expert trainers, world-class equipment, and a community that pushes you to be better.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="shrink-0"
        >
          <Link href="/contact" className="inline-flex items-center justify-center bg-slam-bg text-white font-bold py-4 px-8 rounded-none hover:bg-white hover:text-slam-bg transition-colors duration-300 text-lg uppercase tracking-wider group">
            Claim Free Trial
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
