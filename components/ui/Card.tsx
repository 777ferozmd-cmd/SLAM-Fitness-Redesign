import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  const baseStyles = "bg-slam-card border border-slam-border rounded-slam-lg transition-colors duration-300 hover:border-slam-accent overflow-hidden";
  
  return (
    <div className={`${baseStyles} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
