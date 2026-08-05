'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FiHeart } from 'react-icons/fi';

export function HeroButtons() {
  const handleScrollToInvitation = () => {
    const el = document.querySelector('#invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-anim-item flex items-center justify-center gap-4 mt-8 w-full max-w-xs mx-auto">
      <Button
        variant="primary"
        size="lg"
        glow
        fullWidth
        onClick={handleScrollToInvitation}
        className="font-sans tracking-[0.2em] shadow-lg"
      >
        <FiHeart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
        Open Invitation
      </Button>
    </div>
  );
}
