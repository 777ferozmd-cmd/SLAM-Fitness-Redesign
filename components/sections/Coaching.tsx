"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Coaching() {
  const features = [
    "Certified expert trainers",
    "Personalised nutrition planning",
    "Goal-specific workout programming",
    "Form correction & injury prevention",
    "Regular progress tracking",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 },
  };

  return (
    <section className="bg-[#141414] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image Mosaic / Stack */}
          <motion.div 
            className="relative w-full aspect-square lg:aspect-auto lg:h-[600px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-2xl overflow-hidden border border-[#2A2A2A] z-10">
              <Image 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                alt="Personal trainer guiding a client"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Accent Image (Overlapping) */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[50%] rounded-2xl overflow-hidden border-4 border-[#141414] z-20 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
                alt="Client lifting weights with focus"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 40vw"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 -left-10 w-40 h-40 bg-ferous-accent/20 rounded-full blur-[80px]" />
          </motion.div>

          {/* Right Column: Copy & Features */}
          <div className="flex flex-col items-start gap-6">
            <motion.p 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="text-ferous-primary text-[12px] uppercase tracking-[0.12em] font-bold"
            >
              Expert Guidance
            </motion.p>

            <motion.h2 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,56px)]"
            >
              Coaching Built <br />
              <span className="text-ferous-muted">Around You.</span>
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="text-[18px] text-[#C8C8C8] leading-relaxed"
            >
              We don&apos;t believe in cookie-cutter programs. Our trainers work closely with you to understand your lifestyle, limitations, and goals, creating a path to success that you can actually stick to.
            </motion.p>

            <motion.ul 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4 mt-4 w-full"
            >
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-ferous-accent shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="pt-6"
            >
              <Link href="/about" className="btn-secondary inline-flex group">
                Meet Our Coaches
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
