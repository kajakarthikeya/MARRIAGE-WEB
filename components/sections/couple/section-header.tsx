'use client';

import React from 'react';

export function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 couple-header-item">
      <span className="font-serif text-sm tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-2">
        The Couple
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#4A0E17] mb-3 gold-shimmer">
        Meet the Couple
      </h2>
      <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-[#6E5D4F] max-w-md">
        A beautiful journey begins with two hearts becoming one.
      </p>
    </div>
  );
}
