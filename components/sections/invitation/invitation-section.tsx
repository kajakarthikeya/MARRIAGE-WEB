'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { InvitationDivider } from '@/components/sections/invitation/invitation-divider';
import { InvitationCard } from '@/components/sections/invitation/invitation-card';
import { ScratchCard } from '@/components/ui/scratch-card';

export function InvitationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cardItems = sectionRef.current.querySelectorAll('.invite-card-item');

    gsap.fromTo(
      sectionRef.current.querySelector('.invitation-card-container'),
      { opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      cardItems,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Section id="invitation" padding="xl" background="radial-glow" showParticles className="relative">
      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          {/* Transition Divider from Hero */}
          <InvitationDivider />

          {/* Interactive Scratch to Reveal Save The Date */}
          <div className="w-full flex justify-center mb-8">
            <ScratchCard />
          </div>

          {/* Invitation Card Wrapper */}
          <div className="invitation-card-container w-full flex justify-center mt-6">
            <InvitationCard />
          </div>
        </Container>
      </div>
    </Section>
  );
}
