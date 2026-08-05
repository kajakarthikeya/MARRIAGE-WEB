'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface HeroDividerProps {
  className?: string;
}

export function HeroDivider({ className }: HeroDividerProps) {
  return (
    <div className={cn('flex items-center justify-center my-6 w-full max-w-sm mx-auto select-none pointer-events-none hero-anim-item', className)}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]/60" />
      <div className="px-3 text-[#D4AF37] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#FAF7F2]" />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" opacity="0.85" />
        </svg>
        <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#FAF7F2]" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]/60" />
    </div>
  );
}
