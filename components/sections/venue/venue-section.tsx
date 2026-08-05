'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { VenueHeader } from '@/components/sections/venue/venue-header';
import { VenueImage } from '@/components/sections/venue/venue-image';
import { VenueDetails } from '@/components/sections/venue/venue-details';
import { VenueMap } from '@/components/sections/venue/venue-map';
import { VenueButtons } from '@/components/sections/venue/venue-buttons';
import { TravelCards } from '@/components/sections/venue/travel-cards';
import { VenueQuote } from '@/components/sections/venue/venue-quote';

export function VenueSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.venue-item');
    const header = sectionRef.current.querySelector('.venue-header-item');

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

    gsap.fromTo(
      items,
      { opacity: 0, y: 35, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Section id="venue" padding="xl" background="paper-texture" showParticles className="relative">
      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          <VenueHeader />

          {/* Desktop Two-Column Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 items-stretch">
            <VenueImage />
            <VenueDetails />
          </div>

          {/* Embedded Google Map */}
          <div className="my-8">
            <VenueMap />
          </div>

          {/* Action Buttons */}
          <VenueButtons />

          {/* Logistics */}
          <TravelCards />

          {/* Closing Quote */}
          <VenueQuote />
        </Container>
      </div>
    </Section>
  );
}
