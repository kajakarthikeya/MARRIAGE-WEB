'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimationType } from '@/types';
import { fadeUp, fadeLeft, fadeRight, scaleUp, blurReveal } from '@/lib/animations';

export interface SectionWrapperProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className,
  id,
}: SectionWrapperProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const getVariant = () => {
    switch (animation) {
      case 'fadeLeft':
        return fadeLeft;
      case 'fadeRight':
        return fadeRight;
      case 'scale':
        return scaleUp;
      case 'blurReveal':
        return blurReveal;
      case 'fadeUp':
      default:
        return fadeUp;
    }
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      variants={getVariant()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
}
