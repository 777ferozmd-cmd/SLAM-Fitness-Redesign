"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPreview() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Functional Training Exercises for Real-World Strength",
      category: "Training",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Nutrition 101: What to Eat Before and After Your SLAM Workout",
      category: "Nutrition",
      date: "Nov 05, 2023",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Why Bootcamp is the Ultimate Catalyst for Fat Loss",
      category: "Lifestyle",
      date: "Nov 28, 2023",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    }
  ];

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section className="bg-slam-bg py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-slam-primary text-[12px] uppercase tracking-[0.12em] font-bold"
            >
              The SLAM Journal
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-white font-extrabold leading-[1.1] text-[clamp(40px,5vw,56px)]"
            >
              Latest Insights & <br className="hidden md:block"/>
              <span className="text-slam-muted">Fitness Tips.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link href="/blog" className="btn-secondary inline-flex group">
              Read All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article 
              key={blog.id} 
              variants={fadeInUp}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-slam-bg/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold tracking-wider uppercase text-slam-accent border border-slam-border">
                  {blog.category}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slam-muted text-sm font-medium mb-3">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-slam-accent transition-colors leading-snug">
                <Link href="/blog" className="after:absolute after:inset-0">
                  {blog.title}
                </Link>
              </h3>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
