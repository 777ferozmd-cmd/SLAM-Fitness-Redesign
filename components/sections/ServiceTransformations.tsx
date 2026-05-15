"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

interface Transformation {
  id: number;
  name: string;
  time: string;
  category: string;
  beforeImg: string;
  afterImg: string;
}

interface ServiceTransformationsProps {
  title?: string;
  subtitle?: string;
  transformations: Transformation[];
}

export default function ServiceTransformations({ 
  title = "Real Transformations", 
  subtitle = "PROVEN RESULTS",
  transformations 
}: ServiceTransformationsProps) {
  if (transformations.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-ferous-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel className="mx-auto">{subtitle}</SectionLabel>
          <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight mt-4">
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="!p-0 border-ferous-border overflow-hidden group">
                {/* Before After Slider */}
                <BeforeAfterSlider 
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  beforeAlt={`${item.name} Before`}
                  afterAlt={`${item.name} After`}
                  aspectRatio="5/7"
                  className="w-full"
                />

                {/* Details */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-ferous-accent font-bold text-sm">{item.time}</span>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px] font-medium uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
