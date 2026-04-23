import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  color?: "red" | "dark" | "outline";
  className?: string;
}

export default function Badge({ children, color = "red", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1 rounded-full whitespace-nowrap";
  
  const colors = {
    red: "bg-slam-accent text-white",
    dark: "bg-slam-card text-slam-accent border border-slam-border",
    outline: "bg-transparent text-slam-accent border border-slam-accent",
  };

  const combinedClassName = `${baseStyles} ${colors[color]} ${className}`.trim();

  return (
    <span className={combinedClassName}>
      {children}
    </span>
  );
}
