'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { EventIcon, EventIconType } from '@/components/sections/events/event-icon';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

export interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  iconType: EventIconType;
  side?: 'left' | 'right';
}

export function EventCard({
  title,
  date,
  time,
  venue,
  description,
  iconType,
}: EventCardProps) {
  return (
    <Card
      variant="glass"
      className="event-card-item w-full p-6 sm:p-8 bg-[#FAF7F2]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-[0_15px_35px_rgba(74,14,23,0.06)] hover:border-[#4A0E17] transition-all duration-500 relative overflow-hidden"
    >
      <FloralCorner position="top-right" className="top-2 right-2 text-[#D4AF37]/40" />

      {/* Header with Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#FAF7F2] shadow-xs shrink-0">
          <EventIcon type={iconType} />
        </div>
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E17]">
            {title}
          </h3>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
            Sacred Ceremony
          </span>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 py-3 border-y border-[#D4AF37]/20 text-xs text-[#6E5D4F]">
        <div className="flex items-center gap-2">
          <FiCalendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="truncate">{venue}</span>
        </div>
      </div>

      {/* Description */}
      <p className="font-sans text-xs sm:text-sm text-[#766E65] leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
