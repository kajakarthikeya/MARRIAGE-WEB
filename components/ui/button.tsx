'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonVariant, ButtonSize } from '@/types';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      glow = false,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed select-none relative overflow-hidden group';

    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-[#4A0E17] text-[#FAF7F2] hover:bg-[#6B1D2F] border border-[#D4AF37]/30 shadow-[0_10px_25px_-5px_rgba(74,14,23,0.3)]',
      secondary:
        'bg-[#D4AF37] text-[#4A0E17] hover:bg-[#C5A059] border border-[#D4AF37]/50 shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)]',
      outline:
        'bg-transparent text-[#4A0E17] border-2 border-[#D4AF37] hover:bg-[#FAF7F2] hover:border-[#4A0E17]',
      ghost:
        'bg-transparent text-[#4A0E17] hover:bg-[#F4E3E6]/50 border border-transparent',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-1.5 text-xs font-sans uppercase tracking-widest',
      md: 'px-6 py-2.5 text-sm font-sans uppercase tracking-widest',
      lg: 'px-8 py-3.5 text-base font-sans uppercase tracking-widest',
    };

    const glowStyle = glow
      ? 'shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)]'
      : '';

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glowStyle,
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {/* Shimmer sweep effect on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
