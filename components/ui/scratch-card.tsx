'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useScratch } from '@/hooks/use-scratch';
import { SaveDateCard } from '@/components/ui/save-date-card';

export function ScratchCard() {
  const [isRevealedState, setIsRevealedState] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleReveal = () => {
    setIsRevealedState(true);
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: 'power3.out',
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = 'none';
          }
        },
      });
    }
  };

  const { canvasRef, isRevealed } = useScratch({
    brushRadius: 32,
    revealThreshold: 65,
    onReveal: handleReveal,
    disabled: isRevealedState,
  });

  // Render Metallic Gold Texture on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 260);

    // Create Metallic Gold Gradient
    const goldGradient = ctx.createLinearGradient(0, 0, width, height);
    goldGradient.addColorStop(0, '#BF953F');
    goldGradient.addColorStop(0.25, '#FCF6BA');
    goldGradient.addColorStop(0.5, '#B38728');
    goldGradient.addColorStop(0.75, '#FBF5B7');
    goldGradient.addColorStop(1, '#AA771C');

    ctx.fillStyle = goldGradient;
    ctx.fillRect(0, 0, width, height);

    // Metallic Noise Texture Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < height; i += 4) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    // Outer Embossed Border
    ctx.strokeStyle = 'rgba(74, 14, 23, 0.4)';
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 8, width - 16, height - 16);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.8)';
    ctx.lineWidth = 2;
    ctx.strokeRect(14, 14, width - 28, height - 28);

    // Initial Text on Gold Foil
    ctx.font = 'bold 18px Cormorant Garamond, serif';
    ctx.fillStyle = '#4A0E17';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
    ctx.shadowBlur = 4;
    ctx.fillText('✨ Scratch to Reveal ✨', width / 2, height / 2 - 8);

    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#6E5D4F';
    ctx.fillText('Drag mouse or swipe finger over card', width / 2, height / 2 + 20);
  }, [canvasRef]);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto my-8 select-none">
      {/* Hidden Content Behind Scratch Card */}
      <SaveDateCard isRevealed={isRevealed || isRevealedState} />

      {/* Metallic Gold Scratch Layer Overlay */}
      {!isRevealedState && (
        <div
          ref={overlayRef}
          className="absolute inset-0 z-30 w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer touch-none flex items-center justify-center border-2 border-[#D4AF37]"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full rounded-2xl block"
          />

          {/* Foil Shine Glow Sweep Animation */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
        </div>
      )}
    </div>
  );
}
