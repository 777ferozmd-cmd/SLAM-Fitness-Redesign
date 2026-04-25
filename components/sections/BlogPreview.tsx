"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

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

const posts = [
  {
    category: "Nutrition",
    title: "Pre-Workout Fuel: What to Eat Before Heavy Lifts",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Training",
    title: "5 Common Deadlift Mistakes Holding Back Your Gains",
    readTime: "6 Min Read",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Lifestyle",
    title: "How to Optimize Your Sleep for Maximum Muscle Recovery",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop"
  }
];

export default function BlogPreview() {
  return (
    <section className="bg-ferous-bg py-20 lg:py-32 overflow-hidden border-b border-ferous-border">
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
              <SectionLabel>FITNESS INSIGHTS</SectionLabel>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-[clamp(36px,5vw,52px)] font-extrabold text-white leading-[1.1] tracking-tight"
            >
              From the <span className="text-ferous-accent">Ferous</span> Blog
            </motion.h2>
          </div>
          
          <motion.div variants={itemVariants} className="hidden md:block">
            <Button variant="text" href="/blog">
              Read All Articles
            </Button>
          </motion.div>
        </motion.div>

        {/* Blog Cards */}
        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="snap-center shrink-0 w-[85vw] md:w-auto"
            >
              <Link href="/blog" className="flex flex-col group cursor-pointer h-full">
                <Card className="p-0 border-[#2A2A2A] h-full flex flex-col bg-transparent !border-transparent hover:!border-transparent hover:bg-transparent">
                  {/* Image */}
                  <div className="w-full h-[240px] relative rounded-ferous-lg overflow-hidden mb-6 bg-[#1A1A1A]">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <Badge color="red">{post.category}</Badge>
                    <span className="text-[12px] text-[#808080] font-bold tracking-wider uppercase">
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-ferous-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div 
          className="mt-4 md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="text" href="/blog">
            Read All Articles
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
