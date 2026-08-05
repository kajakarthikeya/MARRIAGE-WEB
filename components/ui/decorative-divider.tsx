'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface DecorativeDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate';
}

export function DecorativeDivider({ className, variant = 'ornate' }: DecorativeDividerProps) {
  return (
    <div className={cn('flex items-center justify-center my-8 w-full max-w-md mx-auto select-none pointer-events-none', className)}>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]/50" 
      />
      
      {variant === 'ornate' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-4 text-[#D4AF37] flex items-center gap-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" opacity="0.9" />
          </svg>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-3 w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#FAF7F2]"
        />
      )}

      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]/50" 
      />
    </div>
  );
}
