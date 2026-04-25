import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  color?: "red" | "dark" | "outline";
  className?: string;
}

export default function Badge({ children, color = "red", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1 rounded-full whitespace-nowrap";
  
  const colors = {
    red: "bg-ferous-accent text-white",
    dark: "bg-ferous-card text-ferous-accent border border-ferous-border",
    outline: "bg-transparent text-ferous-accent border border-ferous-accent",
  };

  const combinedClassName = `${baseStyles} ${colors[color]} ${className}`.trim();

  return (
    <span className={combinedClassName}>
      {children}
    </span>
  );
}
