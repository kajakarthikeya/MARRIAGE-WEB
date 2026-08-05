'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ContainerWidth } from '@/types';

export interface ContainerProps {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
  id?: string;
}

export function Container({
  children,
  width = 'xl',
  className,
  id,
}: ContainerProps) {
  const widthStyles: Record<ContainerWidth, string> = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'w-full max-w-none',
  };

  return (
    <div id={id} className={cn('mx-auto px-4 sm:px-6 lg:px-8 w-full', widthStyles[width], className)}>
      {children}
    </div>
  );
}
