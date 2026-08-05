'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { InvitationHeader } from '@/components/sections/invitation/invitation-header';
import { InvitationMessage } from '@/components/sections/invitation/invitation-message';
import { WeddingSummary } from '@/components/sections/invitation/wedding-summary';
import { InvitationButtons } from '@/components/sections/invitation/invitation-buttons';

export function InvitationCard() {
  return (
    <Card
      variant="bordered"
      hoverEffect={false}
      className="w-full max-w-4xl mx-auto p-6 sm:p-12 bg-[#FAF7F2]/90 backdrop-blur-md border-2 border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(74,14,23,0.08)] relative overflow-hidden"
    >
      {/* Decorative Floral Corner Accents */}
      <FloralCorner position="top-left" className="top-3 left-3 text-[#D4AF37]/70" />
      <FloralCorner position="top-right" className="top-3 right-3 text-[#D4AF37]/70" />
      <FloralCorner position="bottom-left" className="bottom-3 left-3 text-[#D4AF37]/70" />
      <FloralCorner position="bottom-right" className="bottom-3 right-3 text-[#D4AF37]/70" />

      {/* Card Content Components */}
      <InvitationHeader />
      <InvitationMessage />
      <WeddingSummary />
      <InvitationButtons />
    </Card>
  );
}
