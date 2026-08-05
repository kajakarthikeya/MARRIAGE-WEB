'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FiCheckCircle, FiXCircle, FiHelpCircle } from 'react-icons/fi';

export interface AttendanceSelectorProps {
  value: 'yes' | 'no' | 'maybe';
  onChange: (value: 'yes' | 'no' | 'maybe') => void;
  error?: string;
}

export function AttendanceSelector({ value, onChange, error }: AttendanceSelectorProps) {
  const options = [
    {
      id: 'yes' as const,
      label: 'Joyfully Accept',
      icon: FiCheckCircle,
      activeColor: 'border-[#4A0E17] bg-[#4A0E17] text-[#FAF7F2]',
    },
    {
      id: 'maybe' as const,
      label: 'Will Try To Attend',
      icon: FiHelpCircle,
      activeColor: 'border-[#D4AF37] bg-[#D4AF37] text-[#4A0E17]',
    },
    {
      id: 'no' as const,
      label: 'Regretfully Decline',
      icon: FiXCircle,
      activeColor: 'border-[#6E5D4F] bg-[#6E5D4F] text-[#FAF7F2]',
    },
  ];

  return (
    <div className="w-full mb-6 rsvp-form-item">
      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A0E17] mb-3 text-center">
        Will You Be Attending? *
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((option) => {
          const isSelected = value === option.id;
          const IconComponent = option.icon;
          return (
            <motion.button
              type="button"
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(option.id)}
              className={cn(
                'flex items-center justify-center gap-2 p-3.5 rounded-xl border text-xs font-sans uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer',
                isSelected
                  ? option.activeColor
                  : 'bg-white/70 border-[#D4AF37]/40 text-[#3D2E24] hover:border-[#D4AF37]'
              )}
            >
              <IconComponent className="w-4 h-4" />
              <span>{option.label}</span>
            </motion.button>
          );
        })}
      </div>

      {error && (
        <p className="mt-1 text-[11px] text-rose-600 font-sans font-medium text-center">
          {error}
        </p>
      )}
    </div>
  );
}
