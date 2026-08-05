'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { DecorativeDivider } from '@/components/ui/decorative-divider';
import { FiCheck, FiRefreshCw } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

export interface SuccessCardProps {
  fullName: string;
  attendance: 'yes' | 'no' | 'maybe';
  guests: number;
  onReset: () => void;
}

export function SuccessCard({ fullName, attendance, guests, onReset }: SuccessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto my-6"
    >
      <Card
        variant="bordered"
        hoverEffect={false}
        className="p-8 sm:p-12 text-center bg-[#FAF7F2]/95 backdrop-blur-md border-2 border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(74,14,23,0.1)] relative overflow-hidden"
      >
        <FloralCorner position="top-left" className="top-3 left-3 text-[#D4AF37]/60" />
        <FloralCorner position="top-right" className="top-3 right-3 text-[#D4AF37]/60" />

        {/* Animated Checkmark Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, 0] }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-white flex items-center justify-center text-[#4A0E17] mx-auto mb-6 shadow-lg relative"
        >
          <FiCheck className="w-10 h-10 text-[#D4AF37]" />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-[#D4AF37]"
          />
        </motion.div>

        {/* Sparkles Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#4A0E17] text-xs font-sans uppercase tracking-[0.2em] mb-4">
          <HiSparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          Response Received
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#4A0E17] mb-3 gold-shimmer">
          Thank You, {fullName || 'Dear Guest'}!
        </h3>

        <DecorativeDivider variant="simple" className="my-4 max-w-xs" />

        <p className="font-sans text-xs sm:text-sm text-[#6E5D4F] leading-relaxed max-w-md mx-auto mb-6">
          Thank you for your response. We look forward to celebrating this beautiful day with you.
        </p>

        {/* Response Details Summary */}
        <div className="p-4 rounded-xl bg-white/60 border border-[#D4AF37]/30 max-w-sm mx-auto my-6 text-xs text-[#3D2E24] space-y-1">
          <p>
            <span className="font-semibold text-[#4A0E17]">Status:</span>{' '}
            {attendance === 'yes' ? 'Joyfully Accept' : attendance === 'no' ? 'Regretfully Decline' : 'Will Confirm Soon'}
          </p>
          {attendance === 'yes' && (
            <p>
              <span className="font-semibold text-[#4A0E17]">Attending Guests:</span> {guests}
            </p>
          )}
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={onReset}
          className="font-sans tracking-[0.15em]"
        >
          <FiRefreshCw className="w-4 h-4 text-[#4A0E17]" />
          Submit Another Response
        </Button>
      </Card>
    </motion.div>
  );
}
