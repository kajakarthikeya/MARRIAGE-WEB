'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export function InvitationButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-xs sm:max-w-md mx-auto invite-card-item">
      <Button
        variant="primary"
        size="md"
        glow
        fullWidth
        className="sm:w-auto font-sans tracking-[0.2em]"
      >
        <FiCalendar className="w-4 h-4 text-[#D4AF37]" />
        View Events
      </Button>

      <Button
        variant="outline"
        size="md"
        fullWidth
        className="sm:w-auto font-sans tracking-[0.2em]"
      >
        <FiMapPin className="w-4 h-4 text-[#4A0E17]" />
        View Venue
      </Button>
    </div>
  );
}
