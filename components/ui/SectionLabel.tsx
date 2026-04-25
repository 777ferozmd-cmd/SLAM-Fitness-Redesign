import React from "react";

export interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`block text-[12px] font-semibold text-ferous-accent uppercase tracking-[0.12em] mb-3 ${className}`.trim()}>
      {children}
    </span>
  );
}
