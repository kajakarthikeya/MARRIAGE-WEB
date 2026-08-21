'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { VideoHeader } from '@/components/sections/video/video-header';
import { VideoCard } from '@/components/sections/video/video-card';

interface VideoSectionProps {
  videoSrc?: string;
  youtubeId?: string;
  posterUrl?: string;
  title?: string;
  subtitle?: string;
}

export function VideoSection({
  videoSrc = '/api/video',
  youtubeId,
  posterUrl = '/images/couple-1.jpg',
  title = 'Vineeth Babu & Naga Anusha — Wedding Trailer',
  subtitle = 'Click to experience the cinematic trailer',
}: VideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const header = sectionRef.current.querySelector('.video-header-item');
    const card = sectionRef.current.querySelector('.video-card-item');

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
      card,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
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
    <Section id="video" padding="xl" background="radial-glow" showParticles className="relative">
      <div ref={sectionRef} className="w-full">
        <Container width="xl">
          {/* Section Header */}
          <VideoHeader />

          {/* In-Line Video Player Card */}
          <VideoCard
            title={title}
            posterUrl={posterUrl}
            videoSrc={videoSrc}
            youtubeId={youtubeId}
          />
        </Container>
      </div>
    </Section>
  );
}
