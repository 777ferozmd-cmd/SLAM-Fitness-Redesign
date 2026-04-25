"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex items-end">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
        alt="Ferous Fitness Studio Gym Area"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.20) 100%)"
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 lg:px-[80px] pb-16 lg:pb-[80px]">
        <motion.div 
          className="max-w-[620px] flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>FEROUS FITNESS STUDIO</SectionLabel>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(52px,6vw,72px)] font-extrabold text-white leading-[1.1] tracking-tight mb-4"
          >
            Where Chennai Comes to <span className="text-ferous-accent">Train</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[18px] text-[#C8C8C8] max-w-[420px] mb-8 leading-relaxed"
          >
            Expert coaches. Personalised programs tailored to your goals, your body, and your schedule.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button variant="primary" href="/contact">
              Claim Your Free Trial
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mt-6"
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0D0D0D] overflow-hidden relative">
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Member avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col ml-1">
              <div className="flex text-[#FFD700] mb-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="fill-[#FFD700] text-[#FFD700]" />
                ))}
                <span className="text-white text-xs font-bold ml-1.5 leading-none self-center">4.5</span>
              </div>
              <span className="text-[13px] text-[#6B6B6B] leading-none">
                From 580+ Google Reviews
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
