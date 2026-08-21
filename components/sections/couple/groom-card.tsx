'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { CoupleImage } from '@/components/sections/couple/couple-image';
import { FloralCorner } from '@/components/ui/decorative-elements';

export function GroomCard() {
  return (
    <Card
      variant="glass"
      className="couple-groom-card flex flex-col items-center text-center p-8 sm:p-10 border border-[#D4AF37]/40 bg-[#FAF7F2]/80 backdrop-blur-md shadow-[0_15px_40px_rgba(74,14,23,0.06)] relative overflow-hidden flex-1"
    >
      <FloralCorner position="bottom-left" className="bottom-2 left-2 text-[#D4AF37]/50" />
      <FloralCorner position="bottom-right" className="bottom-2 right-2 text-[#D4AF37]/50" />

      {/* Groom Image Frame */}
      <CoupleImage alt="Groom" initials="V.A." src="/images/groom.jpg" className="mb-6" />

      {/* Name & Title */}
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E17] mb-1 gold-shimmer">
        Vineeth Babu Akkinapalli
      </h3>
      <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
        The Groom
      </span>

      {/* Parents */}
      <p className="font-sans text-xs text-[#6E5D4F] uppercase tracking-wider mb-4 border-y border-[#D4AF37]/20 py-2 w-full max-w-xs">
        Son of Akkinapalli Family
      </p>

      {/* Bio Prose */}
      <p className="font-sans text-xs sm:text-sm text-[#766E65] leading-relaxed max-w-sm mb-6">
        Warm, grounded, and visionary. Vineeth inspires with his strength, kind heart, and unwavering commitment to family and love.
      </p>

      {/* Signature */}
      <div className="font-serif italic text-lg text-[#4A0E17]/80 tracking-widest border-t border-[#D4AF37]/20 pt-3 w-full max-w-xs">
        ~ Vineeth Babu ~
      </div>
    </Card>
  );
}
