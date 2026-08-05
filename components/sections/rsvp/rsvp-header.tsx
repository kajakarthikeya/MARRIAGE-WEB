'use client';

import React from 'react';

export function RSVPHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 rsvp-header-item">
      <span className="font-serif text-sm tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-2">
        R.S.V.P.
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#4A0E17] mb-3 gold-shimmer">
        Kindly Respond
      </h2>
      <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-[#6E5D4F] max-w-md">
        We would be honored by your presence. Please let us know if you&apos;ll be joining us.
      </p>
    </div>
  );
}
