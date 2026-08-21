'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  youtubeId?: string;
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc = '/api/video',
  youtubeId,
  title = 'Vineeth & Naga Anusha — Wedding Trailer',
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset error & attempt play when modal opens
  useEffect(() => {
    if (!isOpen) return;

    setHasError(false);

    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const promise = videoRef.current.play();
        if (promise !== undefined) {
          promise.catch((err) => {
            console.warn('Playback notice:', err);
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isOpen, videoSrc]);

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-stone-950/95 backdrop-blur-2xl transition-all duration-300"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-stone-950 rounded-3xl overflow-hidden border border-amber-500/50 shadow-[0_0_100px_rgba(217,119,6,0.4)] flex flex-col z-[100000]"
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between bg-stone-900/90 border-b border-amber-500/20 z-20">
          <div className="flex items-center gap-2 text-white">
            <HiSparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="font-serif text-sm sm:text-base md:text-lg font-semibold tracking-wide text-amber-100 truncate">
              {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 text-stone-300 hover:text-stone-950 transition-all shadow-md shrink-0 ml-2"
            aria-label="Close Video"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {hasError ? (
                <div className="p-8 text-center flex flex-col items-center justify-center gap-4 bg-stone-900/80 w-full h-full">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl font-bold">
                    !
                  </div>
                  <div>
                    <h4 className="text-amber-300 font-serif text-base sm:text-lg font-bold mb-1">
                      Unable to Play Video File
                    </h4>
                    <p className="text-stone-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Please check that <code className="text-amber-300">wedding-teaser.mp4</code> in <code className="text-amber-300">public/videos/</code> is encoded in standard <b>H.264 (AVC) MP4</b>.
                    </p>
                  </div>
                  <button
                    onClick={() => setHasError(false)}
                    className="px-5 py-2 rounded-full bg-amber-500 text-stone-950 text-xs font-semibold hover:bg-amber-400 transition-colors"
                  >
                    Retry Loading
                  </button>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  onClick={(e) => e.stopPropagation()}
                  onError={(e) => {
                    console.error('Video error event:', e);
                    setHasError(true);
                  }}
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support HTML5 video.
                </video>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
