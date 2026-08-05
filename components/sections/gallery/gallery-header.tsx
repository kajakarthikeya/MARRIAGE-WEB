'use client';

import React from 'react';

export function GalleryHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 gallery-header-item">
      <span className="font-serif text-sm tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-2">
        Memories &amp; Moments
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#4A0E17] mb-3 gold-shimmer">
        Our Beautiful Moments
      </h2>
      <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-[#6E5D4F] max-w-md">
        A glimpse into the memories that make our celebration unforgettable.
      </p>
    </div>
  );
}
