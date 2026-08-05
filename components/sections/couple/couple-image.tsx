'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CoupleImageProps {
  alt: string;
  initials: string;
  className?: string;
}

export function CoupleImage({ alt, initials, className }: CoupleImageProps) {
  return (
    <div className={cn('relative group cursor-pointer select-none', className)}>
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#D4AF37]/60 p-2 bg-[#FAF7F2] shadow-[0_10px_30px_rgba(74,14,23,0.12)] group-hover:border-[#4A0E17] group-hover:shadow-[0_15px_35px_rgba(212,175,55,0.3)] transition-all duration-500 relative overflow-hidden"
      >
        <div className="w-full h-full rounded-full border border-[#D4AF37]/40 flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#FAF7F2] p-4 text-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37] mb-1">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" opacity="0.8" />
          </svg>
          <span className="font-serif text-lg font-bold text-[#4A0E17] tracking-widest">
            {initials}
          </span>
        </div>
      </motion.div>

      {/* Decorative Gold Badge Accent */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#4A0E17] border border-[#D4AF37]/50 text-[#FAF7F2] text-[10px] font-sans uppercase tracking-widest shadow-xs">
        {alt}
      </div>
    </div>
  );
}
