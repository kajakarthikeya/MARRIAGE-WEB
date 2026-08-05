'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { FiMaximize2 } from 'react-icons/fi';

export interface FeaturedImageProps {
  onOpen: () => void;
}

export function FeaturedImage({ onOpen }: FeaturedImageProps) {
  return (
    <div
      onClick={onOpen}
      className="w-full relative group cursor-pointer select-none rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(74,14,23,0.12)] my-8 gallery-item"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-80 sm:h-[450px] bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#FAF7F2] flex flex-col items-center justify-center p-8 text-center relative"
      >
        {/* Decorative Floral Corners */}
        <FloralCorner position="top-left" className="top-3 left-3 text-[#D4AF37]/60" />
        <FloralCorner position="top-right" className="top-3 right-3 text-[#D4AF37]/60" />
        <FloralCorner position="bottom-left" className="bottom-3 left-3 text-[#D4AF37]/60" />
        <FloralCorner position="bottom-right" className="bottom-3 right-3 text-[#D4AF37]/60" />

        {/* Center Placeholder Graphic */}
        <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37]/50 flex items-center justify-center bg-white/70 text-[#4A0E17] shadow-sm group-hover:border-[#4A0E17] transition-colors duration-300">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15L16 10L5 21" strokeLinecap="round" />
          </svg>
        </div>

        {/* Hover Click Hint Overlay */}
        <div className="absolute inset-0 bg-[#4A0E17]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs flex items-center justify-center">
          <div className="px-5 py-2.5 rounded-full bg-white/90 text-[#4A0E17] text-xs font-sans uppercase tracking-widest font-semibold flex items-center gap-2 shadow-lg">
            <FiMaximize2 className="w-4 h-4 text-[#D4AF37]" />
            Expand Photo Gallery
          </div>
        </div>
      </motion.div>
    </div>
  );
}
