"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function FranchiseStrip() {
  return (
    <section className="bg-[#141414] py-16 border-t border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          <div className="flex items-start gap-6 w-full lg:w-auto">
            <div className="w-16 h-16 rounded-full bg-slam-bg border-2 border-slam-border flex items-center justify-center shrink-0">
              <Building2 className="w-8 h-8 text-slam-accent" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white leading-none">Own a SLAM Studio</h3>
              <p className="text-[#C8C8C8] text-sm max-w-md">
                Join India&apos;s fastest-growing fitness franchise. Proven business model, comprehensive support, and a powerful brand.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex items-center">
            <Link 
              href="/franchise" 
              className="group flex items-center gap-2 text-slam-accent font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
            >
              Explore Franchise Opportunities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
