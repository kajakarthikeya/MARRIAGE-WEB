'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { calculateScratchPercentage } from '@/utils/scratch-percentage';

export interface UseScratchOptions {
  brushRadius?: number;
  revealThreshold?: number;
  onReveal?: () => void;
  disabled?: boolean;
}

export function useScratch({
  brushRadius = 30,
  revealThreshold = 65,
  onReveal,
  disabled = false,
}: UseScratchOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);
  const isRevealed = useRef(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);

  const checkPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const percentage = calculateScratchPercentage(ctx, canvas.width, canvas.height);
    setScratchPercentage(percentage);

    if (percentage >= revealThreshold && !isRevealed.current) {
      isRevealed.current = true;
      if (onReveal) onReveal();
    }
  }, [revealThreshold, onReveal]);

  const drawScratch = useCallback(
    (x: number, y: number) => {
      const canvas = canvasRef.current;
      if (!canvas || disabled || isRevealed.current) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';

      // Soft radial brush gradient for smooth scratch edges
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushRadius);
      gradient.addColorStop(0, 'rgba(0,0,0,1)');
      gradient.addColorStop(0.7, 'rgba(0,0,0,0.8)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      checkPercentage();
    },
    [brushRadius, disabled, checkPercentage]
  );

  const getCoordinates = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e && e.touches.length > 0) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    } else if ('clientX' in e) {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
    return { x: 0, y: 0 };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || disabled) return;

    const handleStart = (e: MouseEvent | TouchEvent) => {
      if (disabled || isRevealed.current) return;
      isDrawing.current = true;
      const { x, y } = getCoordinates(e);
      drawScratch(x, y);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current || disabled || isRevealed.current) return;
      if (e.cancelable) e.preventDefault(); // Prevent scrolling while scratching
      const { x, y } = getCoordinates(e);
      drawScratch(x, y);
    };

    const handleEnd = () => {
      isDrawing.current = false;
    };

    canvas.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    canvas.addEventListener('touchstart', handleStart, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    return () => {
      canvas.removeEventListener('mousedown', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);

      canvas.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [disabled, drawScratch]);

  return {
    canvasRef,
    scratchPercentage,
    isRevealed: isRevealed.current,
  };
}
