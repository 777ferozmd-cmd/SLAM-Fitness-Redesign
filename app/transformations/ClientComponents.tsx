"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/ui/Card";

const CATEGORIES = ["All", "Weight Loss", "Weight Gain", "Body Transformation", "Bootcamp"];

const TRANSFORMATIONS = [
  { id: 1, name: "Rahul S.", time: "12 Weeks", category: "Fat Loss", program: "Weight Loss", beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Karthik M.", time: "16 Weeks", category: "Muscle Gain", program: "Weight Gain", beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Priya V.", time: "24 Weeks", category: "Total Recomp", program: "Body Transformation", beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Arjun K.", time: "8 Weeks", category: "Fat Loss", program: "Weight Loss", beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, name: "Sneha P.", time: "10 Weeks", category: "Toning", program: "Bootcamp", beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "Vikram D.", time: "20 Weeks", category: "Mass Building", program: "Weight Gain", beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" }
];

export function TransformationGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" 
    ? TRANSFORMATIONS 
    : TRANSFORMATIONS.filter(item => item.program === activeTab);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative pb-2 text-[16px] md:text-[18px] font-bold transition-colors ${
              activeTab === category ? "text-white" : "text-[#B0B0B0] hover:text-white"
            }`}
          >
            {category}
            {activeTab === category && (
              <motion.div
                layoutId="active-tab-underline"
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-slam-accent"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredData.map((card) => (
            <motion.div 
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="group relative h-full flex flex-col !p-0 border-[#2A2A2A]">
              {/* Image Placeholder (split before/after visually) */}
              <div className="relative h-[300px] w-full flex">
                <div className="w-1/2 h-full relative border-r border-white/20">
                  <Image
                    src={card.beforeImg}
                    alt={`${card.name} Before`}
                    fill
                    className="object-cover opacity-60 grayscale"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white text-[10px] font-bold tracking-wider uppercase">
                    Before
                  </div>
                </div>
                <div className="w-1/2 h-full relative">
                  <Image
                    src={card.afterImg}
                    alt={`${card.name} After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-slam-accent px-3 py-1 rounded text-white text-[10px] font-bold tracking-wider uppercase">
                    After
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{card.name}</h3>
                  <span className="text-[#6B6B6B] text-[14px]">{card.time}</span>
                </div>
                <p className="text-slam-accent text-[14px] font-medium uppercase tracking-wider">
                  {card.category}
                </p>
                <p className="text-[#6B6B6B] text-[12px] mt-1">Program: {card.program}</p>
              </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="py-20 text-center text-[#B0B0B0]">
          No transformations found for this category yet.
        </div>
      )}
    </div>
  );
}
