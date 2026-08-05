'use client';

import React from 'react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FloatingDecorations } from '@/components/ui/floating-decorations';
import { Hero } from '@/components/sections/hero/hero';
import { InvitationSection } from '@/components/sections/invitation/invitation-section';
import { EventsSection } from '@/components/sections/events/events-section';
import { VenueSection } from '@/components/sections/venue/venue-section';
import { GallerySection } from '@/components/sections/gallery/gallery-section';
import { ThankYouSection } from '@/components/sections/thank-you/thank-you-section';

export default function HomePage() {
  return (
    <PageWrapper className="pt-0">
      <FloatingDecorations />
      <Hero />
      <InvitationSection />
      <EventsSection />
      <VenueSection />
      <GallerySection />
      <ThankYouSection />
    </PageWrapper>
  );
}
