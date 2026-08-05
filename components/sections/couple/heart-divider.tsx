'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HeartDivider() {
  return (
    <div className="flex items-center justify-center my-6 lg:my-0 px-4 couple-heart-item select-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 15px rgba(212,175,55,0.3)',
            '0 0 30px rgba(212,175,55,0.6)',
            '0 0 15px rgba(212,175,55,0.3)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-[#FAF7F2] flex items-center justify-center text-[#4A0E17] shadow-md"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>
    </div>
  );
}
