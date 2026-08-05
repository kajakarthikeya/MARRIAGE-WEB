'use client';

import React from 'react';
import { TimelineLine } from '@/components/sections/events/timeline-line';
import { TimelineNode } from '@/components/sections/events/timeline-node';
import { EventCard } from '@/components/sections/events/event-card';
import { EventIconType } from '@/components/sections/events/event-icon';

interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  iconType: EventIconType;
}

export function Timeline() {
  const eventsData: EventData[] = [
    {
      id: '1',
      title: 'Haldi Ceremony',
      date: 'Aug 26, 2026',
      time: '10:00 AM IST',
      venue: 'Sri Siri Convention, Vijayawada',
      description: 'A vibrant morning ceremony of auspicious turmeric paste, fragrant yellow flowers, and joyful blessings to adorn the bride and groom.',
      iconType: 'haldi',
    },
    {
      id: '2',
      title: 'Festive Dinner',
      date: 'Aug 26, 2026',
      time: '07:00 PM IST',
      venue: 'Sri Siri Convention, Vijayawada',
      description: 'An extravagant evening dinner feast featuring traditional and gourmet delicacies, celebrating warm fellowship with all honored guests before the main wedding nuptials.',
      iconType: 'dinner',
    },
    {
      id: '3',
      title: 'Wedding Ceremony',
      date: 'Aug 26, 2026',
      time: '10:23 PM IST',
      venue: 'Sri Siri Convention, Vijayawada',
      description: 'The sacred holy nuptials where Vineeth Babu and Naga Anusha take the seven sacred steps around the sacred fire, bound in lifelong matrimony.',
      iconType: 'wedding',
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 px-4 sm:px-6">
      {/* Central / Left Line */}
      <TimelineLine />

      {/* Events List */}
      <div className="space-y-12 sm:space-y-16 relative z-10">
        {eventsData.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={event.id}
              className="relative flex flex-col lg:flex-row items-center justify-between gap-8 pl-12 lg:pl-0"
            >
              {/* Milestone Node */}
              <TimelineNode />

              {/* Left Column (Card or Empty for alternating desktop) */}
              <div className="w-full lg:w-1/2 lg:pr-12 flex justify-end">
                {isEven ? (
                  <EventCard {...event} side="left" />
                ) : (
                  <div className="hidden lg:block w-full" />
                )}
              </div>

              {/* Right Column (Card or Empty for alternating desktop) */}
              <div className="w-full lg:w-1/2 lg:pl-12 flex justify-start">
                {!isEven ? (
                  <EventCard {...event} side="right" />
                ) : (
                  <div className="hidden lg:block w-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
