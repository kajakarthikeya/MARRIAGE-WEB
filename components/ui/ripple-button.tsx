'use client';

import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface RippleButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function RippleButton({
  children,
  variant = 'primary',
  className,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center font-sans font-medium text-sm tracking-wider uppercase rounded-full transition-all duration-300 select-none cursor-pointer focus:outline-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#4A0E17] via-[#5C121D] to-[#4A0E17] text-[#FAF7F2] border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(74,14,23,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.35)] hover:border-[#D4AF37]',
    secondary:
      'bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#B38728] text-[#4A0E17] font-semibold border border-[#D4AF37] shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.4)]',
    outline:
      'bg-white/60 backdrop-blur-md border border-[#D4AF37]/60 text-[#4A0E17] hover:bg-[#FAF7F2] hover:border-[#4A0E17]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Ripple Animation Effects */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-[ping_0.6s_ease-out]"
          style={{
            left: r.x - 20,
            top: r.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}

      {/* Gold Shimmer Sweep on Hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
