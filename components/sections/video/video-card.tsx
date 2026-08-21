'use client';

import React, { useRef, useState } from 'react';
import { FiPlay } from 'react-icons/fi';

interface VideoCardProps {
  title?: string;
  posterUrl?: string;
  videoSrc?: string;
  youtubeId?: string;
}

export function VideoCard({
  title = 'Vineeth Babu & Naga Anusha — Wedding Trailer',
  posterUrl,
  videoSrc = '/api/video',
  youtubeId,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-card-item relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-amber-500/40 bg-stone-950 shadow-[0_0_60px_rgba(217,119,6,0.25)] transition-all duration-500 hover:border-amber-400/70">
      {/* Video Container Box - Dynamically scales to exact native video aspect ratio */}
      <div className="relative w-full h-auto flex items-center justify-center bg-stone-950">
        {isPlaying ? (
          /* IN-LINE VIDEO PLAYER - Uses EXACT native video ratio (h-auto) with zero extra borders & zero cropping */
          youtubeId ? (
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                className="w-full h-full border-0 rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-auto block rounded-3xl max-h-[80vh] object-contain"
            >
              Your browser does not support HTML5 video.
            </video>
          )
        ) : (
          /* CLEAN TEASER COVER CARD (Click to play) */
          <div
            onClick={handleStartPlay}
            className="group relative aspect-video w-full cursor-pointer flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Poster Image / Elegant Gradient Background */}
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-stone-950/95 to-stone-950">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-all duration-700" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl group-hover:bg-amber-600/25 transition-all duration-700" />
              </div>
            )}

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

            {/* Centered Pulsing Play Button */}
            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-amber-500/20 animate-ping opacity-75" />
                <div className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-amber-500/30 border border-amber-400/40 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 shadow-[0_0_30px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <FiPlay className="w-6 h-6 sm:w-9 sm:h-9 ml-1 text-stone-950 fill-current" />
                </div>
              </div>
            </div>

            {/* Clean Bottom Title */}
            <div className="relative z-10">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
                {title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
