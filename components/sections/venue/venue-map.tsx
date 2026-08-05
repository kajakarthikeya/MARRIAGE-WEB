'use client';

import React from 'react';

export function VenueMap() {
  return (
    <div className="w-full relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_20px_40px_rgba(74,14,23,0.08)] bg-[#FAF7F2] venue-item">
      {/* Map Header Overlay Bar */}
      <div className="bg-[#FAF7F2]/90 backdrop-blur-md px-6 py-3 border-b border-[#D4AF37]/30 flex items-center justify-between z-10 relative">
        <span className="font-serif text-sm font-bold text-[#4A0E17] tracking-wider">
          Sri Siri Convention
        </span>
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
          Vijayawada, Andhra Pradesh
        </span>
      </div>

      {/* Embedded Google Map Iframe */}
      <div className="w-full h-80 sm:h-96 relative">
        <iframe
          title="Sri Siri Convention Map"
          src="https://maps.google.com/maps?q=Sri%20Siri%20Convention%20Vijayawada&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-105"
        />
      </div>
    </div>
  );
}
