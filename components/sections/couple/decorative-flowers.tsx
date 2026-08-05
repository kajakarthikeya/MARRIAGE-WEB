'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function CoupleFloralAccent({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none text-[#D4AF37]/35 select-none', className)}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path
          d="M10 10 C30 10, 50 30, 50 50 C30 50, 10 30, 10 10 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M90 90 C70 90, 50 70, 50 50 C70 50, 90 70, 90 90 Z"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
