import React from "react";
import SpotlightCard from "./SpotlightCard";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function Card({ children, className = "", spotlightColor = "rgba(255, 26, 26, 0.15)", ...props }: CardProps) {
  const baseStyles = "bg-slam-card border border-slam-border rounded-slam-lg transition-colors duration-300 hover:border-slam-accent overflow-hidden";
  
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
