'use client';

import React from 'react';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

export function VenueQuote() {
  return (
    <div className="w-full max-w-2xl mx-auto my-14 text-center venue-item">
      <DecorativeDivider variant="ornate" className="my-4 max-w-sm" />

      <blockquote className="p-8 rounded-2xl bg-white/40 border border-[#D4AF37]/30 backdrop-blur-xs shadow-xs my-4">
        <p className="font-serif italic text-xl sm:text-2xl text-[#4A0E17] leading-relaxed gold-shimmer">
          &ldquo;We can&apos;t wait to welcome you and celebrate together.&rdquo;
        </p>
      </blockquote>

      <DecorativeDivider variant="simple" className="my-4 max-w-sm" />
    </div>
  );
}
