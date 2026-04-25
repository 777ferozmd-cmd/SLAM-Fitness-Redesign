import React from "react";
import SpotlightCard from "./SpotlightCard";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function Card({ children, className = "", spotlightColor = "rgba(255, 26, 26, 0.15)", ...props }: CardProps) {
  const baseStyles = "bg-ferous-card border border-ferous-border rounded-ferous-lg transition-colors duration-300 hover:border-ferous-accent overflow-hidden";
  
  return (
    <SpotlightCard 
      className={`${baseStyles} ${className}`.trim()} 
      spotlightColor={spotlightColor}
      {...props}
    >
      {children}
    </SpotlightCard>
  );
}
