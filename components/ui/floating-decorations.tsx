'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticleItem {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  type: 'petal' | 'leaf' | 'sparkle' | 'firefly' | 'heart';
}

export function FloatingDecorations() {
  const [particles, setParticles] = useState<ParticleItem[]>([]);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 18 : 36;
    const types: ParticleItem['type'][] = ['petal', 'leaf', 'sparkle', 'firefly', 'heart'];

    const items: ParticleItem[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage left
      y: Math.random() * 100, // percentage top
      size: Math.random() * 14 + 10,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
      type: types[i % types.length],
    }));

    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {particles.map((p) => {
        if (p.type === 'petal') {
          return (
            <motion.div
              key={p.id}
              initial={{ y: '-10vh', x: `${p.x}vw`, opacity: 0, rotate: 0 }}
              animate={{
                y: '110vh',
                x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 5 : -5)}vw`, `${p.x}vw`],
                opacity: [0, 0.7, 0.7, 0],
                rotate: 360,
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'linear',
              }}
              className="absolute text-[#E8C39E]/50"
              style={{ width: p.size, height: p.size }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          );
        }

        if (p.type === 'leaf') {
          return (
            <motion.div
              key={p.id}
              initial={{ y: '-10vh', x: `${p.x}vw`, opacity: 0, rotate: p.rotation }}
              animate={{
                y: '110vh',
                x: [`${p.x}vw`, `${p.x + 8}vw`, `${p.x}vw`],
                opacity: [0, 0.5, 0.5, 0],
                rotate: p.rotation + 180,
              }}
              transition={{
                duration: p.duration + 4,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              className="absolute text-[#8A9A86]/40"
              style={{ width: p.size, height: p.size }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 59 16.5 4 22C4 22 10 16 12 12C14 8 17 8 17 8Z" />
              </svg>
            </motion.div>
          );
        }

        if (p.type === 'sparkle') {
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: p.duration / 3,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              className="absolute text-[#D4AF37]/60"
              style={{ left: `${p.x}vw`, top: `${p.y}vh`, width: p.size * 0.8, height: p.size * 0.8 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </motion.div>
          );
        }

        if (p.type === 'firefly') {
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                x: [0, (p.id % 2 === 0 ? 20 : -20), 0],
                y: [0, -30, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: p.duration / 2,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              className="absolute w-2 h-2 rounded-full bg-[#FCF6BA] shadow-[0_0_10px_#D4AF37]"
              style={{ left: `${p.x}vw`, top: `${p.y}vh` }}
            />
          );
        }

        // Floating Heart
        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: -50,
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: p.duration / 2,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeOut',
            }}
            className="absolute text-[#4A0E17]/30"
            style={{ left: `${p.x}vw`, top: `${p.y}vh`, width: p.size * 0.7, height: p.size * 0.7 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
