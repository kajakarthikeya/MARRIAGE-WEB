'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { FiCheckCircle, FiPhoneCall, FiInfo } from 'react-icons/fi';
import { FaCar, FaWheelchair } from 'react-icons/fa6';

export function ParkingCards() {
  const convenienceItems = [
    {
      title: 'Valet Parking',
      sub: 'Spacious parking & valet service',
      icon: FaCar,
    },
    {
      title: 'Accessibility',
      sub: 'Wheelchair accessible entrance',
      icon: FaWheelchair,
    },
    {
      title: 'Main Entrance',
      sub: 'Inner Ring Road — Sri Siri Gate',
      icon: FiCheckCircle,
    },
    {
      title: 'Guest Assistance',
      sub: 'Helpdesk active throughout event',
      icon: FiInfo,
    },
    {
      title: 'Emergency Contact',
      sub: '+91 98765 43210 (Venue Concierge)',
      icon: FiPhoneCall,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 venue-item">
      <div className="text-center mb-6">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Guest Comfort &amp; Assistance
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E17] mt-1">
          Venue Conveniences
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {convenienceItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={idx}
              variant="glass"
              className="p-4 border border-[#D4AF37]/30 bg-[#FAF7F2]/70 backdrop-blur-xs flex flex-col items-center text-center hover:border-[#4A0E17] transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#FAF7F2] text-[#4A0E17] mb-2 shadow-xs">
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <h4 className="font-serif text-xs font-bold text-[#4A0E17] mb-1">
                {item.title}
              </h4>
              <p className="font-sans text-[10px] text-[#766E65] leading-tight">
                {item.sub}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
