'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InvitationDividerProps {
  className?: string;
}

export function InvitationDivider({ className }: InvitationDividerProps) {
  return (
    <div className={cn('flex items-center justify-center my-10 w-full max-w-md mx-auto select-none pointer-events-none invite-anim-item', className)}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]/60" />
      <div className="px-4 text-[#D4AF37] flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" opacity="0.9" />
        </svg>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]/60" />
    </div>
  );
}
