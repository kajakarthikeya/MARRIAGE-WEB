'use client';

import React from 'react';
import { HiSparkles } from 'react-icons/hi2';

export function VideoHeader() {
  return (
    <div className="video-header-item text-center max-w-3xl mx-auto mb-10 px-4">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0E17]/10 border border-[#D4AF37]/50 text-[#4A0E17] text-xs sm:text-sm tracking-[0.2em] uppercase font-serif mb-4 font-semibold shadow-xs">
        <HiSparkles className="w-4 h-4 text-[#D4AF37]" />
        <span>Save The Date • Exclusive Trailer</span>
        <HiSparkles className="w-4 h-4 text-[#D4AF37]" />
      </div>

      {/* Main Title - Simple, Solid, High Contrast Dark Maroon */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#4A0E17] mb-3">
        Our Love Story <span className="italic text-[#D4AF37]">In Motion</span>
      </h2>

      {/* Golden Divider */}
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]/60" />
        <div className="w-2 h-2 rounded-full bg-[#D4AF37] transform rotate-45" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]/60" />
      </div>

      {/* Subtitle - Simple Solid Visible Text */}
      <p className="text-[#6E5D4F] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto font-medium">
        Watch the special moments and cinematic glimpse of Vineeth Babu &amp; Naga Anusha&apos;s upcoming wedding celebration.
      </p>
    </div>
  );
}
