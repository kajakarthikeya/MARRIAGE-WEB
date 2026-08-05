'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SectionPadding, BackgroundVariant } from '@/types';
import { Background } from '@/components/ui/background';

export interface SectionProps {
  children: React.ReactNode;
  padding?: SectionPadding;
  background?: BackgroundVariant;
  showParticles?: boolean;
  className?: string;
  id?: string;
}

export function Section({
  children,
  padding = 'lg',
  background = 'textured-ivory',
  showParticles = false,
  className,
  id,
}: SectionProps) {
  const paddingStyles: Record<SectionPadding, string> = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-20',
    lg: 'py-16 md:py-28',
    xl: 'py-24 md:py-36',
  };

  return (
    <section id={id} className={cn('relative w-full overflow-hidden', paddingStyles[padding], className)}>
      <Background variant={background} showParticles={showParticles}>
        {children}
      </Background>
    </section>
  );
}
