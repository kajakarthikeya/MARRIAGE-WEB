'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn('min-h-screen flex flex-col pt-20', className)}
    >
      {children}
    </motion.div>
  );
}
