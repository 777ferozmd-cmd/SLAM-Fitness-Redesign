"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-end justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
          alt="Athlete training at SLAM Fitness"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 pb-12 md:pb-20">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start gap-5 max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            className="text-slam-primary text-[12px] uppercase tracking-[0.12em] font-bold"
          >
            SLAM FITNESS STUDIO
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp}
            className="text-white font-extrabold leading-[1.1] text-[clamp(52px,6vw,72px)]"
          >
            Where Chennai Comes to Train
          </motion.h1>

          {/* Body copy */}
          <motion.p
            variants={fadeInUp}
            className="text-[18px] text-[#C8C8C8] max-w-[420px]"
          >
            Expert coaches. Personalised programs tailored to your goals, your body, and your schedule.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="pt-2">
            <Link href="/contact" className="btn-primary inline-flex">
              Claim Your Free Trial
            </Link>
          </motion.div>

          {/* Social Proof Cluster */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#141414] overflow-hidden relative bg-gray-800">
                  <Image
                    src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop&crop=faces&sat=-100`}
                    alt={`Reviewer ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-current" : "fill-current opacity-50"}`} />
                ))}
                <span className="text-white font-bold ml-1 text-sm">4.5</span>
              </div>
              <span className="text-sm text-slam-muted">From 580+ Google Reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
