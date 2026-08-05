'use client';

import React from 'react';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import { LuxuryLoader } from '@/components/ui/luxury-loader';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { handleSkipToContent } from '@/utils/accessibility';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <LenisProvider>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          handleSkipToContent('main-content');
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4A0E17] focus:text-[#FAF7F2] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      >
        Skip to main content
      </a>

      {/* Global Interactive Utilities */}
      <ScrollProgress />
      <CustomCursor />
      <ScrollIndicator />

      {/* Entrance Luxury Loader */}
      <LuxuryLoader />

      {/* Main App Layout */}
      <div className="flex flex-col min-h-screen bg-[#FBF9F5] text-[#3D2E24] selection:bg-[#4A0E17] selection:text-[#FAF7F2]">
        <Navbar />
        
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />
      </div>
    </LenisProvider>
  );
}
