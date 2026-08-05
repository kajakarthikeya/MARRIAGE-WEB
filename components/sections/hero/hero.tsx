'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { HeroBackground } from '@/components/sections/hero/hero-background';
import { HeroParticles } from '@/components/sections/hero/hero-particles';
import { HeroFlowers } from '@/components/sections/hero/hero-flowers';
import { HeroContent } from '@/components/sections/hero/hero-content';
import { MouseParallax } from '@/components/common/mouse-parallax';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll('.hero-anim-item');

    gsap.fromTo(
      items,
      { opacity: 0, y: 35, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-12 select-none"
    >
      {/* Background System */}
      <HeroBackground />

      {/* Floating Sparkles & Petals */}
      <HeroParticles />
      <HeroFlowers />

      {/* Desktop Mouse Parallax Wrapper */}
      <MouseParallax offset={12} className="w-full flex items-center justify-center">
        <HeroContent />
      </MouseParallax>
    </section>
  );
}
