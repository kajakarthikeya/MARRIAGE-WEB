'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '@/constants/gallery-data';
import { FiZoomIn } from 'react-icons/fi';

export interface GalleryCardProps {
  item: GalleryItem;
  onOpen: () => void;
}

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  return (
    <motion.div
      onClick={onOpen}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`gallery-item group relative cursor-pointer select-none rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#FAF7F2] shadow-[0_10px_30px_rgba(74,14,23,0.06)] hover:border-[#4A0E17] hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] transition-all duration-500 ${item.heightClass} flex items-center justify-center p-5`}
    >
      {/* Background Clean Placeholder Graphic */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#FAF7F2] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-white/60 text-[#4A0E17] group-hover:border-[#4A0E17] transition-colors duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15L16 10L5 21" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Hover Zoom Overlay */}
      <div className="absolute inset-0 bg-[#4A0E17]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/90 text-[#4A0E17] flex items-center justify-center shadow-md">
          <FiZoomIn className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </div>
    </motion.div>
  );
}
