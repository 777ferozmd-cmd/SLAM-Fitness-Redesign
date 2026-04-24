import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import BookingCTA from "@/components/sections/BookingCTA";
import { PricingFAQAccordion } from "./ClientComponents";
import SpotlightCard from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Gym Membership Pricing in Chennai — SLAM",
  description: "Flexible gym membership plans in Chennai for every goal and budget. Start with a free trial.",
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
            alt="SLAM Fitness Gym Floor"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 pb-16 md:pb-24">
          <p className="text-slam-accent text-[12px] uppercase tracking-[0.12em] font-bold mb-4">
            MEMBERSHIP
          </p>
          <h1 className="text-white font-extrabold text-[clamp(40px,6vw,72px)] leading-[1.1] max-w-[800px]">
            Choose Your <span className="text-slam-accent">Plan</span>
          </h1>
        </div>
      </section>

      {/* 2. Pricing Cards */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Starter Plan */}
            <SpotlightCard className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[20px] p-8 lg:p-10 transition-colors duration-300 hover:border-slam-accent flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-[14px] text-[#6B6B6B] mb-6">Monthly, basic access</p>
                <div className="text-[40px] lg:text-[48px] font-extrabold text-white leading-none">
                  Contact Us
                </div>
              </div>
              <ul className="flex-grow space-y-4 mb-10">
                {[
                  "Full Gym Access",
                  "Cardio & Free Weights",
                  "Locker Room Access",
                  "Member App Access"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px] text-[#B0B0B0] py-2 border-b border-[#2A2A2A] last:border-0">
                    <Check className="w-4 h-4 text-slam-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="w-full block text-center border border-white text-white font-bold tracking-wider uppercase text-[14px] py-4 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Get Pricing
              </Link>
            </SpotlightCard>

            {/* SLAMer Plan (Recommended) */}
            <SpotlightCard className="bg-[#1A1A1A] border-2 border-slam-accent rounded-[20px] p-8 lg:p-10 transition-colors duration-300 relative flex flex-col h-full transform md:-translate-y-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slam-accent text-white text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                Recommended
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">SLAMer</h3>
                <p className="text-[14px] text-[#6B6B6B] mb-6">3-month, includes nutrition guidance</p>
                <div className="text-[40px] lg:text-[48px] font-extrabold text-white leading-none">
                  Contact Us
                </div>
              </div>
              <ul className="flex-grow space-y-4 mb-10">
                {[
                  "Full Gym Access",
                  "Cardio & Free Weights",
                  "Locker Room Access",
                  "Custom Nutrition Plan",
                  "Body Composition Scan",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px] text-[#B0B0B0] py-2 border-b border-[#2A2A2A] last:border-0">
                    <Check className="w-4 h-4 text-slam-accent shrink-0" />
                    <span className="font-medium text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="w-full block text-center bg-slam-accent text-white font-bold tracking-wider uppercase text-[14px] py-4 rounded-lg hover:bg-[#CC0000] transition-colors"
              >
                Get Pricing
              </Link>
            </SpotlightCard>

            {/* Elite Plan */}
            <SpotlightCard className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[20px] p-8 lg:p-10 transition-colors duration-300 hover:border-slam-accent flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Elite</h3>
                <p className="text-[14px] text-[#6B6B6B] mb-6">6–12 month, personal training + diet</p>
                <div className="text-[40px] lg:text-[48px] font-extrabold text-white leading-none">
                  Contact Us
                </div>
              </div>
              <ul className="flex-grow space-y-4 mb-10">
                {[
                  "Full Gym Access",
                  "Dedicated Personal Trainer",
                  "Custom Diet Plan",
                  "Priority Booking",
                  "2 Free Guest Passes / Mo",
                  "Exclusive SLAM Merch Pack"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px] text-[#B0B0B0] py-2 border-b border-[#2A2A2A] last:border-0">
                    <Check className="w-4 h-4 text-slam-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="w-full block text-center border border-white text-white font-bold tracking-wider uppercase text-[14px] py-4 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Get Pricing
              </Link>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* 3. Features Comparison Table */}
      <section className="py-20 md:py-32 bg-slam-section">
        <div className="max-w-[1000px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight">
              Compare Features
            </h2>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  <th className="text-left py-6 px-6 md:px-8 text-white font-bold text-[18px]">Features</th>
                  <th className="text-center py-6 px-4 text-white font-bold text-[18px]">Starter</th>
                  <th className="text-center py-6 px-4 text-slam-accent font-bold text-[18px]">SLAMer</th>
                  <th className="text-center py-6 px-4 text-white font-bold text-[18px]">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Full Gym Access", starter: true, slamer: true, elite: true },
                  { name: "Cardio & Weights Area", starter: true, slamer: true, elite: true },
                  { name: "Locker Room Access", starter: true, slamer: true, elite: true },
                  { name: "Nutrition Guidance", starter: false, slamer: true, elite: true },
                  { name: "Body Composition Scan", starter: false, slamer: true, elite: true },
                  { name: "Dedicated Personal Trainer", starter: false, slamer: false, elite: true },
                  { name: "Custom Diet Plan", starter: false, slamer: false, elite: true },
                  { name: "Priority Booking", starter: false, slamer: false, elite: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#2A2A2A] last:border-0 hover:bg-[#202020] transition-colors">
                    <td className="py-5 px-6 md:px-8 text-[#E0E0E0] text-[15px] md:text-[16px]">{row.name}</td>
                    <td className="py-5 px-4 text-center">
                      {row.starter ? <Check className="w-5 h-5 text-white mx-auto" /> : <Minus className="w-5 h-5 text-[#4A4A4A] mx-auto" />}
                    </td>
                    <td className="py-5 px-4 text-center">
                      {row.slamer ? <Check className="w-5 h-5 text-slam-accent mx-auto" /> : <Minus className="w-5 h-5 text-[#4A4A4A] mx-auto" />}
                    </td>
                    <td className="py-5 px-4 text-center">
                      {row.elite ? <Check className="w-5 h-5 text-white mx-auto" /> : <Minus className="w-5 h-5 text-[#4A4A4A] mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      <section className="py-20 md:py-32 bg-slam-bg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-white leading-tight">
              Pricing FAQs
            </h2>
          </div>
          <PricingFAQAccordion />
        </div>
      </section>

      {/* 5. Booking CTA */}
      <BookingCTA />

    </main>
  );
}
