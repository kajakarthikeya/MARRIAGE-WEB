'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  className?: string;
}

export function FormField({
  label,
  icon,
  error,
  id,
  className,
  value,
  ...props
}: FormFieldProps) {
  const isFilled = Boolean(value);

  return (
    <div className={cn('relative w-full mb-6 rsvp-form-item', className)}>
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-[#D4AF37] pointer-events-none z-10">
            {icon}
          </div>
        )}

        <input
          id={id}
          value={value}
          placeholder=" "
          className={cn(
            'w-full bg-white/70 border rounded-xl py-3.5 pr-4 text-sm text-[#3D2E24] focus:outline-none transition-all duration-300 font-sans shadow-xs',
            icon ? 'pl-11' : 'pl-4',
            error
              ? 'border-rose-500 focus:ring-2 focus:ring-rose-400'
              : 'border-[#D4AF37]/40 focus:border-[#4A0E17] focus:ring-2 focus:ring-[#D4AF37]/50'
          )}
          {...props}
        />

        <label
          htmlFor={id}
          className={cn(
            'absolute text-xs text-[#6E5D4F] transition-all duration-200 pointer-events-none font-sans uppercase tracking-wider',
            icon ? 'left-11' : 'left-4',
            isFilled
              ? '-top-2.5 bg-[#FAF7F2] px-2 text-[10px] text-[#4A0E17] font-semibold rounded'
              : 'top-3.5'
          )}
        >
          {label}
        </label>
      </div>

      {error && (
        <p className="mt-1 text-[11px] text-rose-600 font-sans font-medium pl-1">
          {error}
        </p>
      )}
    </div>
  );
}
