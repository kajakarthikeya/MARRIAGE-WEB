'use client';

import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export interface MouseParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function MouseParallax({ children, offset = 15, className }: MouseParallaxProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const mouseY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      x.set(mouseX * offset);
      y.set(mouseY * offset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, offset]);

  return (
    <motion.div style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  );
}
