'use client';

import React from 'react';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

export function QuoteSection() {
  return (
    <div className="w-full max-w-2xl mx-auto my-12 text-center couple-quote-item">
      <DecorativeDivider variant="simple" className="my-4 max-w-sm" />

      <blockquote className="p-6 rounded-2xl bg-white/40 border border-[#D4AF37]/30 backdrop-blur-xs shadow-xs">
        <p className="font-serif italic text-xl sm:text-2xl text-[#4A0E17] leading-relaxed gold-shimmer">
          &ldquo;Two souls, one promise, a lifetime of togetherness.&rdquo;
        </p>
      </blockquote>

      <DecorativeDivider variant="simple" className="my-4 max-w-sm" />
    </div>
  );
}
