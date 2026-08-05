'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { RSVPHeader } from '@/components/sections/rsvp/rsvp-header';
import { RSVPForm } from '@/components/sections/rsvp/rsvp-form';
import { SuccessCard } from '@/components/sections/rsvp/success-card';
import { useRSVPForm } from '@/hooks/useRSVPForm';
import { DecorativeDivider } from '@/components/ui/decorative-divider';

export function RSVPSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    setAttendance,
    setGuests,
    handleSubmit,
    handleReset,
  } = useRSVPForm();

  useGSAP(() => {
    if (!sectionRef.current) return;

    const header = sectionRef.current.querySelector('.rsvp-header-item');
    const formItems = sectionRef.current.querySelectorAll('.rsvp-form-item');

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
      formItems,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [isSubmitted]);

  return (
    <Section id="rsvp" padding="xl" background="paper-texture" showParticles className="relative">
      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          <DecorativeDivider variant="ornate" className="my-6" />

          <RSVPHeader />

          {/* Render Form or Animated Success Card */}
          {isSubmitted ? (
            <SuccessCard
              fullName={formData.fullName}
              attendance={formData.attendance}
              guests={formData.guests}
              onReset={handleReset}
            />
          ) : (
            <RSVPForm
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              onChange={handleChange}
              onAttendanceChange={setAttendance}
              onGuestsChange={setGuests}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          )}

          <DecorativeDivider variant="simple" className="my-10" />
        </Container>
      </div>
    </Section>
  );
}
