'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function SurpriseEnding() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !triggered) {
      setTriggered(true);
    }
  }, [isInView, triggered]);

  // Lanterns Array
  const lanterns = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + i * 11 + Math.random() * 5,
    delay: i * 0.4,
    size: 24 + Math.random() * 12,
  }));

  // Confetti Particles
  const confettiLeft = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    angle: Math.random() * 60 - 30,
    distance: 120 + Math.random() * 180,
    delay: i * 0.05,
    color: i % 2 === 0 ? '#D4AF37' : '#FCF6BA',
  }));

  const confettiRight = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    angle: Math.random() * 60 - 30,
    distance: 120 + Math.random() * 180,
    delay: i * 0.05,
    color: i % 2 === 0 ? '#D4AF37' : '#FCF6BA',
  }));

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden pointer-events-none select-none my-8">
      {/* Dual Side Confetti Burst */}
      {triggered && (
        <>
          {/* Left Confetti Cannon */}
          <div className="absolute left-0 bottom-4 z-20">
            {confettiLeft.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: [1, 1, 0],
                  x: [0, Math.cos((c.angle * Math.PI) / 180) * c.distance],
                  y: [0, -Math.abs(Math.sin((c.angle * Math.PI) / 180) * c.distance) - 100],
                  rotate: [0, 360],
                  scale: [1, 1.4, 0.5],
                }}
                transition={{ duration: 2.2, delay: c.delay, ease: 'easeOut' }}
                className="absolute w-3 h-3 rounded-full shadow-xs"
                style={{ backgroundColor: c.color }}
              />
            ))}
          </div>

          {/* Right Confetti Cannon */}
          <div className="absolute right-0 bottom-4 z-20">
            {confettiRight.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{
                  opacity: [1, 1, 0],
                  x: [0, -Math.cos((c.angle * Math.PI) / 180) * c.distance],
                  y: [0, -Math.abs(Math.sin((c.angle * Math.PI) / 180) * c.distance) - 100],
                  rotate: [0, -360],
                  scale: [1, 1.4, 0.5],
                }}
                transition={{ duration: 2.2, delay: c.delay, ease: 'easeOut' }}
                className="absolute w-3 h-3 rounded-full shadow-xs"
                style={{ backgroundColor: c.color }}
              />
            ))}
          </div>

          {/* Glowing Sky Lanterns Rising */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {lanterns.map((l) => (
              <motion.div
                key={l.id}
                initial={{ y: '100%', opacity: 0, x: `${l.x}%` }}
                animate={{
                  y: '-120%',
                  opacity: [0, 0.8, 0.8, 0],
                  x: [`${l.x}%`, `${l.x + (l.id % 2 === 0 ? 3 : -3)}%`],
                }}
                transition={{
                  duration: 9 + l.id,
                  delay: l.delay,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                className="absolute flex flex-col items-center justify-center text-[#FCF6BA]"
                style={{ width: l.size, height: l.size * 1.3 }}
              >
                {/* Lantern Body */}
                <div className="w-full h-full rounded-t-lg rounded-b-md bg-gradient-to-b from-[#D4AF37]/90 via-[#E8C39E]/80 to-[#BF953F]/90 border border-[#FCF6BA]/60 shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#FFF] shadow-[0_0_10px_#FFF]" />
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
