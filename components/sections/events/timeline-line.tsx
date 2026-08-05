'use client';

import React from 'react';

export function TimelineLine() {
  return (
    <div className="absolute top-0 bottom-0 left-4 lg:left-1/2 -translate-x-1/2 w-[2px] bg-[#EAE0D5] z-0">
      <div className="timeline-progress-line w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#C5A059] to-[#4A0E17] origin-top transform scale-y-0 transition-transform duration-700" />
    </div>
  );
}
