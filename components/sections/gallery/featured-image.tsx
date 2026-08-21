'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { FiMaximize2 } from 'react-icons/fi';

export interface FeaturedImageProps {
  onOpen: () => void;
  src?: string;
}

export function FeaturedImage({ onOpen, src = '/images/couple-1.jpg' }: FeaturedImageProps) {
  return (
    <div
      onClick={onOpen}
      className="w-full relative group cursor-pointer select-none rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(74,14,23,0.12)] my-8 gallery-item bg-stone-950"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative overflow-hidden flex items-center justify-center"
      >
        {/* Featured Photo Image - Exact Native Aspect Ratio, No Zoom, No Cropping */}
        <img
          src={src}
          alt="Vineeth Babu & Naga Anusha — Royal Portrait"
          className="w-full h-auto block object-contain"
        />

        {/* Decorative Floral Corners */}
        <FloralCorner position="top-left" className="top-3 left-3 text-[#D4AF37]/80 drop-shadow-md z-10" />
        <FloralCorner position="top-right" className="top-3 right-3 text-[#D4AF37]/80 drop-shadow-md z-10" />
        <FloralCorner position="bottom-left" className="bottom-3 left-3 text-[#D4AF37]/80 drop-shadow-md z-10" />
        <FloralCorner position="bottom-right" className="bottom-3 right-3 text-[#D4AF37]/80 drop-shadow-md z-10" />

        {/* Hover Click Hint Overlay */}
        <div className="absolute inset-0 bg-[#4A0E17]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs flex flex-col items-center justify-center gap-3 z-20">
          <div className="px-6 py-3 rounded-full bg-white/95 text-[#4A0E17] text-xs font-sans uppercase tracking-[0.2em] font-semibold flex items-center gap-2 shadow-xl border border-[#D4AF37]/50">
            <FiMaximize2 className="w-4 h-4 text-[#D4AF37]" />
            Expand Photo Gallery
          </div>
        </div>
      </motion.div>
    </div>
  );
}
