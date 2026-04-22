"use client";

import { STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsBar() {
  return (
    <section className="w-full bg-[#141414] py-10 px-6 md:px-20 border-y border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0">
        {STATS.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center ${
              index !== STATS.length - 1 ? "lg:border-r border-[#2A2A2A]" : ""
            }`}
          >
            <div className="text-[clamp(36px,5vw,56px)] font-extrabold text-white leading-none">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="text-[14px] text-[#6B6B6B] mt-2 font-medium tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
