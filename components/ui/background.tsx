'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BackgroundVariant } from '@/types';

export interface BackgroundProps {
  variant?: BackgroundVariant;
  showParticles?: boolean;
  showOverlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Background({
  variant = 'textured-ivory',
  showParticles = true,
  showOverlay = true,
  className,
  children,
}: BackgroundProps) {
  const variantStyles: Record<BackgroundVariant, string> = {
    'textured-ivory': 'bg-[#FBF9F5]',
    cream: 'bg-[#F7F3EC]',
    'gradient-white': 'bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#FAF7F2]',
    'radial-glow': 'bg-[#FBF9F5] radial-glow-bg',
    'paper-texture': 'bg-[#FAF7F2]',
    'floral-subtle': 'bg-[#FBF9F5]',
  };

  return (
    <div className={cn('relative min-h-full w-full overflow-hidden', variantStyles[variant], className)}>
      {/* Golden radial ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#D4AF37]/15 via-[#F7E7CE]/10 to-transparent blur-3xl rounded-full" />
      
      {/* Subtle bottom ambient glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-[#4A0E17]/5 via-[#F4E3E6]/10 to-transparent blur-3xl rounded-full" />

      {/* Decorative subtle noise/texture overlay */}
      {showOverlay && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#D4AF37_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15" />
      )}

      {/* Animated subtle floating golden sparkles */}
      {showParticles && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
