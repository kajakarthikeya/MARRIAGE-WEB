'use client';

import React from 'react';

export function InvitationMessage() {
  return (
    <div className="max-w-xl mx-auto my-6 text-center invite-card-item">
      <div className="p-6 sm:p-8 rounded-2xl bg-white/40 border border-[#D4AF37]/20 backdrop-blur-xs shadow-xs">
        <p className="font-serif italic text-base sm:text-lg text-[#3D2E24] leading-relaxed mb-4">
          &ldquo;Two lives, two hearts, joined together in friendship, united forever in love.&rdquo;
        </p>
        <p className="font-sans text-xs sm:text-sm text-[#6E5D4F] leading-relaxed tracking-wide">
          As we begin this sacred chapter of our journey together, your blessings, laughter, and presence mean the world to us. Please join us in exchanging vows and celebrating a evening of joy, tradition, and timeless memories.
        </p>
      </div>
    </div>
  );
}
