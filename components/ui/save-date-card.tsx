'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { CountdownTimer } from '@/components/ui/countdown-timer';
import { HiSparkles } from 'react-icons/hi2';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

export interface SaveDateCardProps {
  isRevealed: boolean;
}

export function SaveDateCard({ isRevealed }: SaveDateCardProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Confetti Sparkles Burst Animation on Reveal */}
      {isRevealed && (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
              animate={{
                scale: [0, 1.5, 0],
                x: (Math.random() - 0.5) * 320,
                y: (Math.random() - 0.5) * 220,
                opacity: [1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 2.2, delay: i * 0.08, ease: 'easeOut' }}
              className="absolute w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"
            />
          ))}
        </div>
      )}

      {/* Main Save The Date Card */}
      <Card
        variant="bordered"
        hoverEffect={false}
        className="w-full p-6 sm:p-8 bg-[#FAF7F2]/95 border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(74,14,23,0.12)] relative overflow-hidden text-center"
      >
        <FloralCorner position="top-left" className="top-3 left-3 text-[#D4AF37]/60" />
        <FloralCorner position="top-right" className="top-3 right-3 text-[#D4AF37]/60" />
        <FloralCorner position="bottom-left" className="bottom-3 left-3 text-[#D4AF37]/60" />
        <FloralCorner position="bottom-right" className="bottom-3 right-3 text-[#D4AF37]/60" />

        {/* Sparkles Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#4A0E17] text-[11px] font-sans uppercase tracking-[0.25em] mb-2 font-semibold">
          <HiSparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Official Announcement
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A0E17] gold-shimmer tracking-wide mb-1">
          Save The Date
        </h2>

        <p className="font-serif italic text-lg sm:text-xl text-[#D4AF37] mb-4">
          Vineeth Babu &amp; Naga Anusha
        </p>

        {/* Date & Time Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#D4AF37]/30 text-[#4A0E17] text-xs font-sans font-medium">
            <FiCalendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>August 26, 2026</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#D4AF37]/30 text-[#4A0E17] text-xs font-sans font-medium">
            <FiClock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>10:23 PM IST</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#D4AF37]/30 text-[#4A0E17] text-xs font-sans font-medium">
            <FiMapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sri Siri Convention, Vijayawada</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="my-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#6E5D4F] font-semibold mb-2">
            Countdown To Celebration
          </p>
          <CountdownTimer />
        </div>
      </Card>
    </div>
  );
}
