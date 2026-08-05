'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { GALLERY_ITEMS } from '@/constants/gallery-data';
import { GalleryHeader } from '@/components/sections/gallery/gallery-header';
import { FeaturedImage } from '@/components/sections/gallery/featured-image';
import { GalleryGrid } from '@/components/sections/gallery/gallery-grid';
import { GalleryCounter } from '@/components/sections/gallery/gallery-counter';
import { GalleryQuote } from '@/components/sections/gallery/gallery-quote';
import { GalleryLightbox } from '@/components/sections/gallery/gallery-lightbox';

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.gallery-item');
    const header = sectionRef.current.querySelector('.gallery-header-item');

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
      { opacity: 0, y: 35, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <Section id="gallery" padding="xl" background="radial-glow" showParticles className="relative">
      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          <GalleryHeader />

          {/* Featured Hero Photo */}
          <FeaturedImage onOpen={() => setSelectedIndex(0)} />

          {/* Photo Counter Indicator */}
          <GalleryCounter total={GALLERY_ITEMS.length} />

          {/* Masonry Photo Grid */}
          <GalleryGrid items={GALLERY_ITEMS} onSelect={(index) => setSelectedIndex(index)} />

          {/* Closing Quote */}
          <GalleryQuote />
        </Container>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Section>
  );
}
