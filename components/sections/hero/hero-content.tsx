'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroDivider } from '@/components/sections/hero/hero-divider';
import { HeroButtons } from '@/components/sections/hero/hero-buttons';
import { FloralCorner } from '@/components/ui/decorative-elements';

export function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto py-12">
      {/* Top Decorative Floral Ornament */}
      <div className="hero-anim-item flex items-center justify-center mb-6 text-[#D4AF37]">
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="drop-shadow-xs">
          <path
            d="M50 10 C40 30, 20 40, 10 50 C30 50, 40 70, 50 90 C60 70, 70 50, 90 50 C70 40, 60 30, 50 10 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <circle cx="50" cy="50" r="8" fill="#4A0E17" />
        </svg>
      </div>

      {/* Invitation Subheading */}
      <p className="hero-anim-item font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-[#6E5D4F] font-medium mb-4">
        Together With Their Families
      </p>

      {/* Couple Names */}
      <div className="hero-anim-item flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 my-2">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-[#4A0E17] gold-shimmer drop-shadow-xs">
          Vineeth Babu
        </h1>

        {/* Animated Heart Motif */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="my-1 lg:my-0 text-[#D4AF37] flex items-center justify-center"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-[#4A0E17] gold-shimmer drop-shadow-xs">
          Naga Anusha
        </h1>
      </div>

      {/* Full Surname subtitle */}
      <p className="hero-anim-item font-serif italic text-base sm:text-xl text-[#D4AF37] tracking-widest my-1">
        Akkinapalli &amp; Kaja
      </p>

      {/* Ornate Divider */}
      <HeroDivider />

      {/* Wedding Date */}
      <p className="hero-anim-item font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.2em] text-[#4A0E17] mb-3">
        August 26, 2026
      </p>

      {/* Invitation Subtitle */}
      <p className="hero-anim-item font-sans text-xs sm:text-sm tracking-[0.2em] text-[#766E65] max-w-md mx-auto mb-6">
        You are cordially invited to celebrate our wedding
      </p>

      {/* Action CTA Buttons */}
      <HeroButtons />

      {/* Reusable Subtle Corner Accents */}
      <div className="hidden sm:block">
        <FloralCorner position="top-left" className="top-4 left-4 opacity-60" />
        <FloralCorner position="top-right" className="top-4 right-4 opacity-60" />
      </div>
    </div>
  );
}
