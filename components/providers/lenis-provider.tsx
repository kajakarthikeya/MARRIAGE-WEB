'use client';

import React from 'react';
import { useLenis } from '@/hooks/use-lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useLenis();
  return <>{children}</>;
}
