'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FloralCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function FloralCorner({ position = 'top-left', className }: FloralCornerProps) {
  const positionStyles = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2 rotate-90',
    'bottom-left': 'bottom-2 left-2 -rotate-90',
    'bottom-right': 'bottom-2 right-2 rotate-180',
  };

  return (
    <div className={cn('absolute pointer-events-none text-[#D4AF37]/50 w-12 h-12', positionStyles[position], className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M10 10 H50 C30 10, 10 30, 10 50 V10 Z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M5 5 H40 M5 5 V40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="5" cy="5" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}

export function OrnamentalFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('relative p-6 md:p-10 border border-[#D4AF37]/30 rounded-2xl bg-[#FAF7F2]/60 backdrop-blur-sm', className)}>
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
