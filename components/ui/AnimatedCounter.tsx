"use client";

import React, { useEffect, useRef, useState } from "react";

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const element = elementRef.current;
          if (!element) return;

          const start = performance.now();
          const update = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const currentValue = Math.floor(eased * value);
            
            element.textContent = `${prefix}${currentValue}${suffix}`;
            
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              element.textContent = `${prefix}${value}${suffix}`; // snap to final
            }
          };
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, suffix, prefix, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
