'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/constants/site';

interface LuxuryLoaderProps {
  onComplete?: () => void;
}

export function LuxuryLoader({ onComplete }: LuxuryLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: 'blur(16px)',
            scale: 1.05,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] text-[#4A0E17] select-none overflow-hidden"
        >
          {/* Ambient golden radial background glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-[#D4AF37]/20 via-[#F7E7CE]/10 to-transparent blur-3xl rounded-full pointer-events-none animate-pulse" />

          {/* Floating gold particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="particle particle-1" />
            <div className="particle particle-2" />
            <div className="particle particle-3" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Elegant Monogram / Initials */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-24 rounded-full border-2 border-[#D4AF37]/40 flex items-center justify-center p-3 mb-6 bg-white/40 backdrop-blur-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
            >
              <div className="w-full h-full rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold tracking-widest text-[#4A0E17] gold-shimmer">
                  {SITE_CONFIG.coupleInitials}
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-lg tracking-[0.3em] uppercase text-[#4A0E17] mb-2 font-medium"
            >
              {SITE_CONFIG.name}
            </motion.p>
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-xs tracking-[0.2em] uppercase text-[#6E5D4F] mb-8"
            >
              {SITE_CONFIG.tagline}
            </motion.p>

            {/* Luxury Progress Bar */}
            <div className="w-48 h-[2px] bg-[#EAE0D5] rounded-full overflow-hidden relative mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#4A0E17]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Counter */}
            <span className="font-sans text-[11px] tracking-widest text-[#D4AF37]">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
