'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { FiClock } from 'react-icons/fi';
import { FaPlane, FaTrain } from 'react-icons/fa';

export function TravelCards() {
  const travelItems = [
    {
      title: 'Nearest Airport',
      detail: 'Vijayawada Int. Airport (VGA)',
      sub: '~20 km away (~30 mins drive)',
      icon: FaPlane,
    },
    {
      title: 'Nearest Railway Station',
      detail: 'Vijayawada Junction (BZA)',
      sub: '~8 km away (~18 mins drive)',
      icon: FaTrain,
    },
    {
      title: 'Travel Time & Cabs',
      detail: 'Pre-paid cabs & transfers',
      sub: 'Uber/Ola & cabs available to venue',
      icon: FiClock,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-10 venue-item">
      <div className="text-center mb-6">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Travel &amp; Arrival Logistics
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E17] mt-1">
          How to Reach the Venue
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {travelItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={idx}
              variant="glass"
              className="p-5 border border-[#D4AF37]/30 bg-[#FAF7F2]/80 backdrop-blur-xs flex flex-col items-center text-center hover:border-[#D4AF37] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#FAF7F2] text-[#D4AF37] mb-3 shadow-xs">
                <IconComponent className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-bold text-[#4A0E17] mb-1">
                {item.title}
              </h4>
              <p className="font-sans text-xs font-medium text-[#3D2E24] mb-1">
                {item.detail}
              </p>
              <p className="font-sans text-[11px] text-[#766E65]">
                {item.sub}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
