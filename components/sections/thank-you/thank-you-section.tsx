'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { DecorativeDivider } from '@/components/ui/decorative-divider';
import { SurpriseEnding } from '@/components/ui/surprise-ending';
import { HiSparkles } from 'react-icons/hi2';

export function ThankYouSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.thankyou-anim-item');

    gsap.fromTo(
      items,
      { opacity: 0, y: 30, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Section padding="lg" background="radial-glow" showParticles className="relative text-center overflow-hidden">
      {/* Surprise Ending Cannon & Sky Lantern Finale */}
      <SurpriseEnding />

      <div ref={sectionRef} className="w-full relative z-20">
        <Container width="lg" className="py-8">
          <DecorativeDivider variant="ornate" className="my-4 max-w-xs" />

          {/* Sparkles Badge */}
          <div className="thankyou-anim-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#4A0E17] text-xs font-sans uppercase tracking-[0.25em] mb-4">
            <HiSparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            With Heartfelt Gratitude
          </div>

          <h2 className="thankyou-anim-item font-serif text-3xl sm:text-5xl font-bold tracking-wide text-[#4A0E17] mb-3 gold-shimmer">
            Thank You
          </h2>

          <p className="thankyou-anim-item font-serif italic text-base sm:text-lg text-[#4A0E17] max-w-xl mx-auto leading-relaxed my-4">
            &ldquo;Thank you for celebrating this beautiful chapter of our lives with us. Your love, blessings, and presence mean everything to us. We can&apos;t wait to celebrate together.&rdquo;
          </p>

          <p className="thankyou-anim-item font-sans text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
            Vineeth Babu &amp; Naga Anusha
          </p>

          <DecorativeDivider variant="simple" className="my-4 max-w-xs" />
        </Container>
      </div>
    </Section>
  );
}
