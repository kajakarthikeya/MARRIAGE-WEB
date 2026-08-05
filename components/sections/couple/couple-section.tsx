'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/sections/couple/section-header';
import { BrideCard } from '@/components/sections/couple/bride-card';
import { GroomCard } from '@/components/sections/couple/groom-card';
import { HeartDivider } from '@/components/sections/couple/heart-divider';
import { QuoteSection } from '@/components/sections/couple/quote-section';
import { CoupleFloralAccent } from '@/components/sections/couple/decorative-flowers';

export function CoupleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const header = sectionRef.current.querySelector('.couple-header-item');
    const brideCard = sectionRef.current.querySelector('.couple-bride-card');
    const heart = sectionRef.current.querySelector('.couple-heart-item');
    const groomCard = sectionRef.current.querySelector('.couple-groom-card');
    const quote = sectionRef.current.querySelector('.couple-quote-item');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(header, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .fromTo(brideCard, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
      .fromTo(heart, { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.5')
      .fromTo(groomCard, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
      .fromTo(quote, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');
  }, []);

  return (
    <Section id="couple" padding="xl" background="paper-texture" showParticles className="relative overflow-hidden">
      <CoupleFloralAccent className="absolute top-10 left-10 hidden lg:block" />
      <CoupleFloralAccent className="absolute bottom-10 right-10 hidden lg:block rotate-180" />

      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          <SectionHeader />

          {/* Bride & Groom Dual Card Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 my-8">
            <BrideCard />
            <HeartDivider />
            <GroomCard />
          </div>

          <QuoteSection />
        </Container>
      </div>
    </Section>
  );
}
