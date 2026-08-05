'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function TimelineNode() {
  return (
    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10 select-none">
      <motion.div
        whileInView={{ scale: [0.8, 1.2, 1], opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-8 h-8 rounded-full border-2 border-[#D4AF37] bg-[#FAF7F2] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]"
      >
        <div className="w-3 h-3 rounded-full bg-[#4A0E17]" />
      </motion.div>
    </div>
  );
}
