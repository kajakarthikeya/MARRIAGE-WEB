'use client';

import React from 'react';

export interface GalleryCounterProps {
  total: number;
}

export function GalleryCounter({ total }: GalleryCounterProps) {
  return (
    <div className="flex items-center justify-center gap-3 my-6 text-center gallery-item">
      <span className="px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs font-sans uppercase tracking-[0.2em] text-[#4A0E17] shadow-xs">
        {total} Curated Moments
      </span>
    </div>
  );
}
