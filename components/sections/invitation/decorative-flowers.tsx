'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function FloralBorderAccent({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none text-[#D4AF37]/40 select-none', className)}>
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20 C30 5, 60 35, 120 20 M60 5 C50 15, 50 25, 60 35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="20" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}

export function LeafIllustration({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none text-[#D4AF37]/35 select-none', className)}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 59 16.5 4.2 20C4.1 20 4 19.9 4 19.8C7.5 15 14 6 17 8Z" />
      </svg>
    </div>
  );
}
