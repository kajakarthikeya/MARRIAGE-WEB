'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/constants/site';
import { DecorativeDivider } from '@/components/ui/decorative-divider';
import { FiHeart, FiShare2, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-[#D4AF37]/30 py-16 px-6 text-center relative overflow-hidden select-none">
      {/* Golden Ambient Radial Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-[#D4AF37]/15 via-[#F7E7CE]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        {/* Monogram Badge */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/60 flex items-center justify-center mb-6 bg-white/70 shadow-[0_10px_25px_rgba(212,175,55,0.2)] cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
            <span className="font-serif text-lg font-bold text-[#4A0E17] tracking-widest">
              {SITE_CONFIG.coupleInitials}
            </span>
          </div>
        </motion.div>

        {/* Closing Quote */}
        <p className="font-serif italic text-lg sm:text-xl text-[#4A0E17] mb-2 gold-shimmer max-w-md">
          &ldquo;Together is a beautiful place to be.&rdquo;
        </p>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.25em] uppercase text-[#4A0E17] mb-1">
          {SITE_CONFIG.name}
        </h3>

        <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#6E5D4F] mb-4">
          August 26, 2026 • Sri Siri Convention, Vijayawada
        </p>

        <DecorativeDivider variant="ornate" className="my-4 max-w-xs" />

        {/* Social Sharing Placeholders */}
        <div className="flex items-center gap-4 my-4">
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] hover:border-[#4A0E17] transition-all duration-300 shadow-xs"
            aria-label="Instagram Share"
          >
            <FiInstagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] hover:border-[#4A0E17] transition-all duration-300 shadow-xs"
            aria-label="Facebook Share"
          >
            <FiFacebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] hover:border-[#4A0E17] transition-all duration-300 shadow-xs"
            aria-label="Twitter Share"
          >
            <FiTwitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FAF7F2] hover:border-[#4A0E17] transition-all duration-300 shadow-xs"
            aria-label="Share Invitation"
          >
            <FiShare2 className="w-4 h-4" />
          </a>
        </div>

        {/* Designed With Love & Copyright */}
        <div className="font-sans text-[11px] tracking-wider text-[#766E65] space-y-1 mt-4">
          <p className="flex items-center justify-center gap-1">
            Designed with <FiHeart className="w-3 h-3 text-[#4A0E17] fill-[#4A0E17]" /> for Vineeth Babu &amp; Naga Anusha
          </p>
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved. Production-Ready Digital Invitation.</p>
        </div>
      </div>
    </footer>
  );
}
