'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { FiSun, FiHeart, FiCoffee } from 'react-icons/fi';

export function WeddingSummary() {
  const events = [
    {
      title: 'Haldi Ceremony',
      date: 'Aug 26, 2026',
      time: '10:00 AM IST',
      venue: 'Sri Siri Convention',
      icon: FiSun,
      accentColor: 'border-[#D4AF37]/40',
    },
    {
      title: 'Festive Dinner',
      date: 'Aug 26, 2026',
      time: '07:00 PM IST',
      venue: 'Sri Siri Convention',
      icon: FiCoffee,
      accentColor: 'border-[#D4AF37]/40',
    },
    {
      title: 'Wedding Ceremony',
      date: 'Aug 26, 2026',
      time: '10:23 PM IST',
      venue: 'Sri Siri Convention',
      icon: FiHeart,
      accentColor: 'border-[#4A0E17]/40',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 invite-card-item">
      <div className="text-center mb-8">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Celebration Timeline
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E17] mt-1">
          Wedding Events Summary
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {events.map((event, idx) => {
          const IconComponent = event.icon;
          return (
            <Card
              key={idx}
              variant="glass"
              className="flex flex-col items-center text-center p-6 border hover:border-[#D4AF37] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF7F2] text-[#4A0E17] mb-4 shadow-xs">
                <IconComponent className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <h4 className="font-serif text-lg font-bold text-[#4A0E17] mb-2">
                {event.title}
              </h4>

              <div className="space-y-1 font-sans text-xs text-[#6E5D4F]">
                <p className="font-medium text-[#4A0E17]">{event.date}</p>
                <p>{event.time}</p>
                <p className="text-[11px] text-[#766E65] italic">{event.venue}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
