'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '@/constants/gallery-data';
import { FiZoomIn } from 'react-icons/fi';

export interface GalleryCardProps {
  item: GalleryItem;
  onOpen: () => void;
}

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      onClick={onOpen}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`gallery-item group relative cursor-pointer select-none rounded-2xl overflow-hidden border border-[#D4AF37]/50 bg-stone-900 shadow-[0_10px_30px_rgba(74,14,23,0.08)] hover:border-[#D4AF37] hover:shadow-[0_15px_35px_rgba(212,175,55,0.25)] transition-all duration-500 ${item.heightClass} flex items-center justify-center`}
    >
      {/* Clean Photo Image (No text tags overlay) */}
      {item.src && !hasError ? (
        <img
          src={item.src}
          alt={item.title}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        /* Fallback SVG Graphic */
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#FAF7F2] flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-white/60 text-[#4A0E17]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <path d="M21 15L16 10L5 21" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {/* Hover Zoom Icon Trigger */}
      <div className="absolute inset-0 bg-[#4A0E17]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
        <div className="w-11 h-11 rounded-full bg-white/95 text-[#4A0E17] flex items-center justify-center shadow-lg border border-[#D4AF37]/50">
          <FiZoomIn className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </div>
    </motion.div>
  );
}
