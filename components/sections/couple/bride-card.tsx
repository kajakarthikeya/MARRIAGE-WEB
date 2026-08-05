'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { CoupleImage } from '@/components/sections/couple/couple-image';
import { FloralCorner } from '@/components/ui/decorative-elements';

export function BrideCard() {
  return (
    <Card
      variant="glass"
      className="couple-bride-card flex flex-col items-center text-center p-8 sm:p-10 border border-[#D4AF37]/40 bg-[#FAF7F2]/80 backdrop-blur-md shadow-[0_15px_40px_rgba(74,14,23,0.06)] relative overflow-hidden flex-1"
    >
      <FloralCorner position="top-left" className="top-2 left-2 text-[#D4AF37]/50" />
      <FloralCorner position="top-right" className="top-2 right-2 text-[#D4AF37]/50" />

      {/* Bride Image Frame */}
      <CoupleImage alt="Bride" initials="A.V." className="mb-6" />

      {/* Name & Title */}
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E17] mb-1 gold-shimmer">
        Aurelia Vance
      </h3>
      <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
        The Bride
      </span>

      {/* Parents */}
      <p className="font-sans text-xs text-[#6E5D4F] uppercase tracking-wider mb-4 border-y border-[#D4AF37]/20 py-2 w-full max-w-xs">
        Daughter of Mr. &amp; Mrs. Vance
      </p>

      {/* Bio Prose */}
      <p className="font-sans text-xs sm:text-sm text-[#766E65] leading-relaxed max-w-sm mb-6">
        A passionate designer with a love for classical literature and quiet morning tea. Aurelia brings warmth, elegance, and boundless joy to everyone around her.
      </p>

      {/* Decorative Signature Placeholder */}
      <div className="font-serif italic text-lg text-[#4A0E17]/80 tracking-widest border-t border-[#D4AF37]/20 pt-3 w-full max-w-xs">
        ~ Aurelia Vance ~
      </div>
    </Card>
  );
}
