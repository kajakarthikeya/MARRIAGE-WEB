'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function VenueImage() {
  return (
    <div className="w-full relative group cursor-pointer select-none rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(74,14,23,0.1)] venue-item">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-72 sm:h-96 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#FAF7F2] flex flex-col items-center justify-center p-8 text-center relative"
      >
        {/* Placeholder Venue Illustration */}
        <div className="w-20 h-20 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-white/60 text-[#4A0E17] mb-4 shadow-sm">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21H21" strokeLinecap="round" />
            <path d="M5 21V10L12 4L19 10V21" strokeLinecap="round" />
            <path d="M9 14H15V21H9V14Z" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E17] mb-1 gold-shimmer">
          Sri Siri Convention
        </h3>

        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Vijayawada, Andhra Pradesh, India
        </p>

        {/* Glassmorphism Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-sans uppercase tracking-widest text-[#4A0E17]">
          Luxury Event Venue
        </div>
      </motion.div>
    </div>
  );
}
