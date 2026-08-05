'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { EventsHeader } from '@/components/sections/events/events-header';
import { Timeline } from '@/components/sections/events/timeline';
import { ClosingQuote } from '@/components/sections/events/closing-quote';

export function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const header = sectionRef.current.querySelector('.events-header-item');
    const cards = sectionRef.current.querySelectorAll('.event-card-item');
    const lineProgress = sectionRef.current.querySelector('.timeline-progress-line');
    const quote = sectionRef.current.querySelector('.events-quote-item');

    // Header animation
    gsap.fromTo(
      header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Scroll-driven line expansion
    if (lineProgress) {
      gsap.fromTo(
        lineProgress,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    }

    // Staggered event cards
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Closing quote
    if (quote) {
      gsap.fromTo(
        quote,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quote,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <Section id="events" padding="xl" background="radial-glow" showParticles className="relative">
      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          <EventsHeader />
          <Timeline />
          <ClosingQuote />
        </Container>
      </div>
    </Section>
  );
}
