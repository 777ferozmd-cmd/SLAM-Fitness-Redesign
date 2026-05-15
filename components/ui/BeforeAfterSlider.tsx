"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeAlt?: string;
  afterAlt?: string;
  initialPosition?: number;
  aspectRatio?: string;
  className?: string;
  onChange?: (position: number) => void;
}

export default function BeforeAfterSlider({
  beforeImg,
  afterImg,
  beforeAlt = "Before",
  afterAlt = "After",
  initialPosition = 50,
  aspectRatio = "5/7",
  className = "",
  onChange
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setPosition(newPosition);
    if (onChange) onChange(newPosition);
  }, [onChange]);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Snap to click position and start dragging
    updatePosition(e.clientX);
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let step = 1;
    if (e.shiftKey) step = 10;

    switch (e.key) {
      case "ArrowLeft":
        setPosition(prev => Math.max(0, prev - step));
        break;
      case "ArrowRight":
        setPosition(prev => Math.min(100, prev + step));
        break;
      case "Home":
        setPosition(0);
        break;
      case "End":
        setPosition(100);
        break;
      case "PageUp":
        setPosition(prev => Math.min(100, prev + 10));
        break;
      case "PageDown":
        setPosition(prev => Math.max(0, prev - 10));
        break;
      default:
        return;
    }
    e.preventDefault();
  };

  // Sync onChange if position changed via keyboard
  useEffect(() => {
    if (onChange) onChange(position);
  }, [position, onChange]);

  // Calculate padding-bottom for the aspect ratio hack (e.g. "5/7" -> 7/5 * 100 = 140%)
  const ratioParts = aspectRatio.split('/');
  const paddingBottom = ratioParts.length === 2 
    ? `${(Number(ratioParts[1]) / Number(ratioParts[0])) * 100}%` 
    : '140%';

  return (
    <div 
      ref={containerRef}
      className={`relative group overflow-hidden rounded-xl bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.5)] select-none touch-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      data-dragging={isDragging}
    >
      {/* Aspect Ratio padding hack */}
      <div style={{ paddingBottom }} />
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image 
          src={afterImg} 
          alt={afterAlt} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 pointer-events-none z-10">
          <span className="bg-ferous-accent/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg border border-white/10 sm:text-[12px]">
            After
          </span>
        </div>
      </div>

      {/* Before Image (Foreground with Clip Path) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: isDragging ? "none" : "clip-path 0.2s ease-out"
        }}
      >
        <Image 
          src={beforeImg} 
          alt={beforeAlt} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 pointer-events-none z-10">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 sm:text-[12px]">
            Before
          </span>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        className="absolute inset-y-0 z-20 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ 
          left: `${position}%`,
          transition: isDragging ? "none" : "left 0.2s ease-out"
        }}
      />

      {/* Drag Handle Button — 48×48px minimum touch target */}
      <button
        type="button"
        role="slider"
        aria-label="Image comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-[#0a0a0a]/85 backdrop-blur-sm text-white shadow-xl cursor-grab active:cursor-grabbing hover:scale-105 focus-visible:ring-4 focus-visible:ring-cyan-400/25 transition-transform duration-200"
        style={{ 
          left: `${position}%`,
          transition: isDragging ? "none" : "left 0.2s ease-out, transform 0.2s ease-out"
        }}
      >
        <div className="flex items-center gap-[2px]">
          {/* Chevron Left */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          {/* Chevron Right */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </button>
    </div>
  );
}
