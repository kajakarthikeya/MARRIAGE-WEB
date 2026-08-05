'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CountdownTimerProps {
  targetDate?: string;
}

export function CountdownTimer({ targetDate = '2026-08-26T22:23:00+05:30' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-4">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-white/80 border border-[#D4AF37]/40 shadow-xs min-w-[64px] sm:min-w-[76px]"
        >
          <div className="relative overflow-hidden h-7 sm:h-9 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={unit.value}
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E17] tracking-wider block text-center"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6E5D4F] font-medium mt-0.5">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
