'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type EventIconType = 'engagement' | 'haldi' | 'mehendi' | 'dinner' | 'wedding';

export interface EventIconProps {
  type: EventIconType;
  className?: string;
}

export function EventIcon({ type, className }: EventIconProps) {
  const iconClass = cn('w-6 h-6 text-[#D4AF37]', className);

  switch (type) {
    case 'engagement':
      // Ring icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
          <circle cx="12" cy="14" r="6" />
          <path d="M12 4L14 7H10L12 4Z" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case 'haldi':
      // Turmeric Bowl / Sun Icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
          <path d="M4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12H4Z" fill="currentColor" opacity="0.2" />
          <path d="M4 12H20" strokeLinecap="round" />
          <circle cx="12" cy="7" r="2" fill="currentColor" />
        </svg>
      );
    case 'mehendi':
      // Henna Leaf Icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12" strokeLinecap="round" />
          <path d="M12 6C9 9 9 15 12 18" strokeLinecap="round" />
          <path d="M15 9C13 11 13 13 15 15" strokeLinecap="round" />
        </svg>
      );
    case 'dinner':
      // Dinner / Feast Plate Icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
          <circle cx="12" cy="12" r="9" strokeLinecap="round" />
          <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.2" />
          <path d="M12 7V17" strokeLinecap="round" />
          <path d="M7 12H17" strokeLinecap="round" />
        </svg>
      );
    case 'wedding':
    default:
      // Sacred Fire / Mandap Icon
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
          <path d="M12 3C12 3 17 8 17 13C17 16.5 14.5 19 12 19C9.5 19 7 16.5 7 13C7 8 12 3 12 3Z" fill="currentColor" opacity="0.25" />
          <path d="M12 9C12 9 14.5 12 14.5 14.5C14.5 16 13.5 17 12 17C10.5 17 9.5 16 9.5 14.5C9.5 12 12 9 12 9Z" fill="currentColor" opacity="0.6" />
          <path d="M4 21H20" strokeLinecap="round" />
        </svg>
      );
  }
}
