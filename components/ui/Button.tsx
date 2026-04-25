import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "text";
  href?: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 font-sans";
  
  const variants = {
    primary: "bg-ferous-accent text-white px-8 py-4 rounded-ferous-sm font-bold text-sm tracking-wide uppercase border-none hover:bg-ferous-accent-hover hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,26,26,0.25)] active:translate-y-0",
    ghost: "bg-transparent text-white px-8 py-[14px] rounded-ferous-sm font-bold text-sm tracking-wide uppercase border-[1.5px] border-white hover:bg-ferous-accent hover:border-ferous-accent",
    text: "text-white font-bold text-base underline underline-offset-4 gap-1.5 hover:text-ferous-accent",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`.trim();

  // If text link, render with arrow if not provided by children
  const content = variant === "text" ? (
    <>
      {children}
      <ArrowRight className="w-4 h-4" />
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
