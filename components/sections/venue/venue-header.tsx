'use client';

import React from 'react';

export function VenueHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 venue-header-item">
      <span className="font-serif text-sm tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-2">
        Destination &amp; Location
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#4A0E17] mb-3 gold-shimmer">
        Our Wedding Venue
      </h2>
      <p className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-[#6E5D4F] max-w-md">
        We look forward to celebrating this special day with you at our beautiful venue.
      </p>
    </div>
  );
}
