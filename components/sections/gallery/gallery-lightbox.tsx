'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/constants/gallery-data';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

export interface GalleryLightboxProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  items,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const isOpen = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < items.length;
  const currentItem = isOpen ? items[selectedIndex] : null;

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard Navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Touch Swipe Handler
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      onNext(); // Swiped left -> Next
    } else if (diff < -50) {
      onPrev(); // Swiped right -> Prev
    }
  };

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between z-10 text-[#FAF7F2]">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Photo {selectedIndex + 1} of {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Close Lightbox"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image Frame */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full h-[65vh] sm:h-[70vh] rounded-2xl border-2 border-[#D4AF37]/50 bg-[#FAF7F2] p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"
            >
              <div className="w-24 h-24 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-white/70 text-[#4A0E17] shadow-sm">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M21 15L16 10L5 21" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Next Image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar Hint */}
          <div className="text-center z-10">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Press Left / Right Arrows to Navigate • Esc to Exit
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
