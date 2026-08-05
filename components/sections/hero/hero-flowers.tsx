'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HeroFlowers() {
  const petals = [
    { id: 1, left: '10%', delay: 0, duration: 18, size: 24 },
    { id: 2, left: '30%', delay: 4, duration: 22, size: 20 },
    { id: 3, left: '60%', delay: 2, duration: 20, size: 26 },
    { id: 4, left: '85%', delay: 6, duration: 24, size: 22 },
    { id: 5, left: '45%', delay: 8, duration: 19, size: 18 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10 select-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: '-10vh', x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [0, 25, -25, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
          style={{ left: petal.left, position: 'absolute' }}
          className="text-[#F4E3E6]/70 drop-shadow-sm"
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 14.5 7 19 8C19 8 16 12 16 17C16 17 11 15 8 18C8 18 8 13 4 11C4 11 9 9 12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
