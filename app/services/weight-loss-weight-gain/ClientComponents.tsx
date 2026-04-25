"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Flame, Target, CheckCircle2 } from "lucide-react";

const FAQS = [
  { q: "Which type of gym is best for weight loss?", a: "A gym that combines strength training, cardio, and functional workouts is most effective. Look for programs focused on calorie burn, endurance, and muscle building, with nutritional guidance for long-term results. Ferous checks all of these." },
  { q: "How long does it take to see results?", a: "Most members see visible improvements within 4–6 weeks of consistent training and proper nutrition." },
  { q: "Do you provide diet plans?", a: "Yes. Expert-designed diet plans complement your training to ensure balanced nutrition, faster recovery, and sustainable transformation." },
  { q: "Can beginners join?", a: "Absolutely. Step-by-step programs focus on proper form, gradual intensity, and balanced nutrition. Trainers guide you through every stage." },
  { q: "Can women join a gym for weight loss?", a: "Yes. Ferous creates a safe, supportive environment with workouts tailored to female fitness goals — toning, strength training, fat loss, and flexibility." },
  { q: "Does strength training help with weight gain?", a: "Yes. Lifting weights enhances muscle tone, boosts metabolism, and burns calories even after your workout." },
  { q: "What's the ideal time to work out?", a: "Morning workouts enhance metabolism; evening sessions improve strength and endurance. Ferous offers flexible timings to fit your lifestyle." },
  { q: "Can I gain weight at the same gym where I lose it?", a: "Yes. Ferous offers both programs, customised to your body's needs. Trainers adjust your workouts and nutrition for balanced transformation." },
  { q: "Which gym class is best for weight loss?", a: "HIIT, functional workouts, and circuit training boost metabolism, burn calories, and tone muscles effectively." },
  { q: "Which exercise is best for weight loss?", a: "Squats, burpees, jump rope, treadmill sprints, and kettlebell swings. Combining strength and cardio yields faster fat burn." },
  { q: "Which gym machine is best for weight loss?", a: "Treadmill, rowing machine, stair climber, and assault bike — combine with strength exercises for maximum fat loss." },
  { q: "Can functional training help with weight loss?", a: "Yes. Functional workouts engage multiple muscles, boost calorie burn, and enhance overall performance." },
  { q: "Is diet or exercise more important?", a: "Both work hand in hand. A structured diet fuels your workouts, while consistent training accelerates fat loss." },
  { q: "Can a weight gain gym help me bulk up naturally?", a: "Yes. Progressive overload, muscle activation, and calorie-surplus nutrition help you gain lean mass naturally." }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-ferous-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <span className={`text-[18px] md:text-[20px] font-bold transition-colors ${isOpen ? 'text-ferous-accent' : 'text-white group-hover:text-ferous-text'}`}>
                {faq.q}
              </span>
              <div className={`ml-6 shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-ferous-accent/10 text-ferous-accent' : 'text-ferous-muted group-hover:text-white'}`}>
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
                  <p className="text-[16px] md:text-[18px] text-ferous-body pb-6 leading-relaxed max-w-[85%]">
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

export function ProgramTabs() {
  const [activeTab, setActiveTab] = useState<"loss" | "gain">("loss");

  const LOSS_INCLUDES = [
    "HIIT sessions for maximum calorie burn",
    "Functional training for mobility and endurance",
    "Calorie-optimised circuit training",
    "Cardio routines (Treadmill, rowing, assault bike)",
    "Personalised deficit nutrition planning",
    "Weekly progress tracking"
  ];

  const GAIN_INCLUDES = [
    "Progressive overload programming",
    "Strength circuits for hypertrophy",
    "Compound movements (Squats, Deadlifts, Bench)",
    "Calorie-surplus nutrition planning",
    "Form and technique coaching",
    "Bi-weekly muscle mass tracking"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-ferous-section border border-ferous-border rounded-2xl overflow-hidden">
      {/* Tab Headers */}
      <div className="flex flex-col sm:flex-row border-b border-ferous-border">
        <button
          onClick={() => setActiveTab("loss")}
          className={`flex-1 py-6 px-6 text-center font-bold text-[18px] uppercase tracking-wide transition-all relative ${activeTab === "loss" ? "text-white" : "text-ferous-muted hover:text-ferous-text"}`}
        >
          <div className="flex items-center justify-center gap-3">
            <Flame className={`w-5 h-5 ${activeTab === "loss" ? "text-ferous-accent" : ""}`} />
            Weight Loss Program
          </div>
          {activeTab === "loss" && (
            <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-1 bg-ferous-accent" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("gain")}
          className={`flex-1 py-6 px-6 text-center font-bold text-[18px] uppercase tracking-wide transition-all relative ${activeTab === "gain" ? "text-white" : "text-ferous-muted hover:text-ferous-text"}`}
        >
          <div className="flex items-center justify-center gap-3">
            <Target className={`w-5 h-5 ${activeTab === "gain" ? "text-ferous-accent" : ""}`} />
            Weight Gain Program
          </div>
          {activeTab === "gain" && (
            <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-1 bg-ferous-accent" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-6">
          {activeTab === "loss" ? "What's Included in Weight Loss:" : "What's Included in Weight Gain:"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {(activeTab === "loss" ? LOSS_INCLUDES : GAIN_INCLUDES).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-ferous-accent shrink-0" />
              <span className="text-ferous-text text-[16px] md:text-[18px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
