'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { FiMapPin, FiCalendar, FiClock, FiGlobe, FiStar } from 'react-icons/fi';

export function VenueDetails() {
  return (
    <Card
      variant="glass"
      className="w-full p-6 sm:p-8 border border-[#D4AF37]/40 bg-[#FAF7F2]/90 backdrop-blur-md shadow-[0_15px_35px_rgba(74,14,23,0.06)] venue-item flex flex-col justify-center"
    >
      <div className="flex items-center justify-between mb-6 border-b border-[#D4AF37]/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF7F2] text-[#4A0E17]">
            <FiMapPin className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E17]">
              Sri Siri Convention
            </h3>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Official Wedding Venue
            </span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#4A0E17] text-xs font-sans font-semibold">
          <FiStar className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
          <span>4.8 (10 Reviews)</span>
        </div>
      </div>

      <div className="space-y-4 font-sans text-xs sm:text-sm text-[#6E5D4F]">
        <div className="flex items-start gap-3">
          <FiGlobe className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-[#4A0E17]">Address:</p>
            <p>Inner Ring Road, 100 Feet Rd, beside USR Bspace</p>
            <p>Ambapuram, Vijayawada, Andhra Pradesh 520012</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiCalendar className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-[#4A0E17]">Date &amp; Time:</p>
            <p>Wednesday, August 26, 2026</p>
            <p>Main Ceremony starts at 10:23 PM IST</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiClock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-[#4A0E17]">Guest Arrival:</p>
            <p>Guest seating &amp; welcome at 09:30 PM IST</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
