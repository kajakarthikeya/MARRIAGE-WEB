'use client';

import React from 'react';
import { DecorativeDivider } from '@/components/ui/decorative-divider';
import { Button } from '@/components/ui/button';
import { FiMapPin } from 'react-icons/fi';

export function ClosingQuote() {
  const handleScrollToVenue = () => {
    const el = document.querySelector('#venue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-16 text-center events-quote-item">
      <DecorativeDivider variant="ornate" className="my-4 max-w-sm" />

      <blockquote className="p-8 rounded-2xl bg-white/40 border border-[#D4AF37]/30 backdrop-blur-xs shadow-xs my-6">
        <p className="font-serif italic text-xl sm:text-2xl text-[#4A0E17] leading-relaxed gold-shimmer">
          &ldquo;Every celebration brings us one step closer to forever.&rdquo;
        </p>
      </blockquote>

      <DecorativeDivider variant="simple" className="my-4 max-w-sm" />

      <div className="mt-8 flex justify-center">
        <Button
          variant="primary"
          size="lg"
          glow
          onClick={handleScrollToVenue}
          className="font-sans tracking-[0.2em]"
        >
          <FiMapPin className="w-4 h-4 text-[#D4AF37]" />
          View Venue
        </Button>
      </div>
    </div>
  );
}
