'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

export function InvitationHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Header Tag */}
      <span className="font-serif text-sm tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-2 invite-card-item">
        Wedding Invitation
      </span>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#4A0E17] mb-4 gold-shimmer invite-card-item">
        Celebrating Love &amp; Union
      </h2>

      <p className="font-sans text-xs sm:text-sm tracking-[0.15em] text-[#6E5D4F] uppercase leading-relaxed mb-6 max-w-md invite-card-item">
        Together with our families, we request the honour of your presence at the celebration of our marriage.
      </p>

      {/* Couple Names */}
      <div className="my-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 invite-card-item">
        <span className="font-serif text-2xl sm:text-4xl font-bold text-[#4A0E17]">
          Vineeth Babu
        </span>
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#D4AF37] text-xl"
        >
          ♡
        </motion.span>
        <span className="font-serif text-2xl sm:text-4xl font-bold text-[#4A0E17]">
          Naga Anusha
        </span>
      </div>

      {/* Wedding Key Details Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full my-6 invite-card-item">
        <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#4A0E17]">
          <FiCalendar className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-sans text-xs font-medium tracking-wide">Aug 26, 2026</span>
        </div>

        <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#4A0E17]">
          <FiClock className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-sans text-xs font-medium tracking-wide">10:23 PM IST</span>
        </div>

        <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#4A0E17]">
          <FiMapPin className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-sans text-xs font-medium tracking-wide">Sri Siri Convention</span>
        </div>
      </div>
    </div>
  );
}
