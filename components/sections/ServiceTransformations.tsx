"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";

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
                {/* Image Container */}
                <div className="relative h-[320px] flex">
                  {/* Before */}
                  <div className="relative w-1/2 h-full border-r border-white/10 overflow-hidden">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.name} Before`}
                      fill
                      className="object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                        Before
                      </span>
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative w-1/2 h-full overflow-hidden">
                    <Image
                      src={item.afterImg}
                      alt={`${item.name} After`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-ferous-accent px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                        After
                      </span>
                    </div>
                  </div>
                  
                  {/* Center Divider Line Highlight */}
                  <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-ferous-accent to-transparent z-20" />
                </div>

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
