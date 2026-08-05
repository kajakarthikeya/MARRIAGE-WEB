'use client';

import React from 'react';

export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10 select-none">
      <div className="particle particle-1" style={{ top: '15%', left: '20%' }} />
      <div className="particle particle-2" style={{ top: '35%', right: '15%' }} />
      <div className="particle particle-3" style={{ top: '70%', left: '30%' }} />
      <div className="particle particle-4" style={{ top: '80%', right: '25%' }} />
      <div className="particle particle-1" style={{ top: '45%', left: '80%', animationDelay: '2s' }} />
      <div className="particle particle-2" style={{ top: '65%', left: '10%', animationDelay: '3s' }} />
    </div>
  );
}
