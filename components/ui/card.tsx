'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CardVariant } from '@/types';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: CardVariant;
  hoverEffect?: boolean;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'normal', hoverEffect = true, className, ...props }, ref) => {
    const baseStyles =
      'rounded-2xl transition-all duration-500 relative overflow-hidden p-6 md:p-8';

    const variants: Record<CardVariant, string> = {
      normal:
        'bg-[#FAF7F2] border border-[#EAE0D5] shadow-[0_10px_30px_rgba(61,46,36,0.04)]',
      glass:
        'bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_15px_35px_rgba(74,14,23,0.06)]',
      elevated:
        'bg-[#FAF8F5] border border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(74,14,23,0.08)]',
      bordered:
        'bg-[#FBF9F5] border-2 border-[#D4AF37]/40 shadow-sm',
    };

    return (
      <motion.div
        ref={ref}
        whileHover={
          hoverEffect
            ? {
                y: -6,
                rotateX: 1,
                rotateY: -1,
                boxShadow:
                  '0 25px 50px -12px rgba(74, 14, 23, 0.12), 0 0 20px rgba(212, 175, 55, 0.15)',
              }
            : undefined
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {/* Subtle decorative gold inner border overlay */}
        <div className="absolute inset-1 rounded-[14px] border border-[#D4AF37]/10 pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
