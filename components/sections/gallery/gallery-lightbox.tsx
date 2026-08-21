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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between z-10 text-[#FAF7F2] max-w-6xl w-full mx-auto">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Photo {selectedIndex + 1} of {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              aria-label="Close Lightbox"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex-1 flex items-center justify-center my-2 max-w-6xl w-full mx-auto overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-[#FAF7F2] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image Frame */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center relative overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-stone-950 p-2 shadow-2xl"
            >
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
              <div className="mt-3 text-center px-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  {currentItem.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#D4AF37] mt-1 max-w-md mx-auto">
                  {currentItem.caption}
                </p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-[#FAF7F2] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              aria-label="Next Image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar Hint */}
          <div className="text-center z-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">
              Press Left / Right Arrows to Navigate • Esc to Exit
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
