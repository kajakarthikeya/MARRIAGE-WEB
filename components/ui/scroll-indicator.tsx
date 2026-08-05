'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 select-none pointer-events-none"
        >
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6E5D4F]">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center p-1 bg-[#FAF7F2]/80 backdrop-blur-sm shadow-sm text-[#4A0E17]"
          >
            <FiChevronDown className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
