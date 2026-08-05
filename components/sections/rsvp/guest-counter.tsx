'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMinus, FiPlus, FiUsers } from 'react-icons/fi';

export interface GuestCounterProps {
  count: number;
  onChange: (count: number) => void;
}

export function GuestCounter({ count, onChange }: GuestCounterProps) {
  return (
    <div className="w-full mb-6 p-4 rounded-xl bg-white/60 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 rsvp-form-item shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF7F2] text-[#4A0E17]">
          <FiUsers className="w-4 h-4 text-[#D4AF37]" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider font-semibold text-[#4A0E17] block">
            Number of Attending Guests
          </label>
          <span className="text-[11px] text-[#766E65]">Including yourself (Max 10)</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(count - 1)}
          disabled={count <= 1}
          className="w-8 h-8 rounded-full border border-[#D4AF37] bg-white flex items-center justify-center text-[#4A0E17] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
        >
          <FiMinus className="w-3.5 h-3.5" />
        </motion.button>

        <span className="font-serif text-lg font-bold text-[#4A0E17] w-6 text-center">
          {count}
        </span>

        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(count + 1)}
          disabled={count >= 10}
          className="w-8 h-8 rounded-full border border-[#D4AF37] bg-white flex items-center justify-center text-[#4A0E17] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
        >
          <FiPlus className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  );
}
