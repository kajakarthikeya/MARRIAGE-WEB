'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
      {/* Slow continuous ambient zoom wrapper */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full relative"
      >
        {/* Soft textured paper background base */}
        <div className="absolute inset-0 bg-[#FAF7F2]" />

        {/* Ambient Top Golden Radial Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-radial from-[#D4AF37]/20 via-[#F7E7CE]/15 to-transparent blur-3xl rounded-full" />

        {/* Ambient Bottom Maroon Radial Accent */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-[#4A0E17]/10 via-[#F4E3E6]/15 to-transparent blur-3xl rounded-full" />

        {/* Subtle floral watermark grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-20" />

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(61,46,36,0.12)_100%)]" />
      </motion.div>
    </div>
  );
}
