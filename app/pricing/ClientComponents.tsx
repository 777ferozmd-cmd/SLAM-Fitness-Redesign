"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "Are there hidden fees?", a: "No hidden fees. Your membership fee covers all access and amenities as described in your plan. There are no surprise joining fees or maintenance charges." },
  { q: "What's included in each plan?", a: "All plans include full gym access, cardio and weights areas, and locker facilities. Our Ferous Pro plan adds nutrition guidance and body composition scans. The Elite plan includes dedicated personal training, custom diet plans, and priority booking." },
  { q: "Can I upgrade my plan?", a: "Yes! You can upgrade your membership tier at any time. Simply speak to our front desk staff and they will prorate your current membership towards your new plan." },
  { q: "Is there a free trial?", a: "Yes, we offer a complimentary free trial session for all new visitors. This gives you a chance to experience the Ferous atmosphere, equipment, and community before making a commitment." }
];

export function PricingFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-[#2A2A2A]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <span className={`text-[18px] md:text-[20px] font-bold transition-colors ${isOpen ? 'text-ferous-accent' : 'text-white group-hover:text-[#E0E0E0]'}`}>
                {faq.q}
              </span>
              <div className={`ml-6 shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-ferous-accent/10 text-ferous-accent' : 'text-[#6B6B6B] group-hover:text-white'}`}>
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-[16px] md:text-[18px] text-[#B0B0B0] pb-6 leading-relaxed max-w-[85%]">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
