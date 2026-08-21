'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SITE_CONFIG } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Section tracking logic
      const sections = NAV_ITEMS.map((item) => {
        if (item.href === '#') return { label: item.label, top: 0 };
        const el = document.querySelector(item.href);
        return el ? { label: item.label, top: (el as HTMLElement).offsetTop - 120 } : null;
      }).filter(Boolean);

      const currentScroll = window.scrollY;
      for (let i = (sections.length - 1); i >= 0; i--) {
        const sec = sections[i];
        if (sec && currentScroll >= sec.top) {
          setActiveSection(sec.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 md:px-12 select-none',
          isScrolled
            ? 'bg-[#FAF7F2]/85 backdrop-blur-md shadow-[0_10px_30px_rgba(74,14,23,0.06)] border-b border-[#D4AF37]/20 py-3'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#FAF7F2]/60 backdrop-blur-sm group-hover:border-[#4A0E17] transition-colors duration-300 shadow-xs shrink-0 overflow-hidden">
              <span className="font-serif text-xs font-bold text-[#4A0E17] tracking-wider whitespace-nowrap leading-none text-center">
                {SITE_CONFIG.coupleInitials}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-sm font-bold tracking-[0.2em] uppercase text-[#4A0E17]">
                {SITE_CONFIG.name}
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#6E5D4F]">
                The Wedding
              </span>
            </div>
          </a>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded',
                    isActive ? 'text-[#4A0E17] font-semibold' : 'text-[#3D2E24] hover:text-[#4A0E17]'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="#invitation" onClick={(e) => handleNavClick(e, '#invitation')}>
              <Button variant="primary" size="sm" glow className="hidden md:inline-flex">
                Open Invitation
              </Button>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A0E17] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-xl flex flex-col justify-center items-center px-6 lg:hidden"
          >
            {/* Ambient Background Radial */}
            <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-[#D4AF37]/15 to-transparent blur-3xl rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-6 z-10 text-center">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                  className={cn(
                    'font-serif text-2xl tracking-[0.2em] uppercase transition-colors duration-300',
                    activeSection === item.label ? 'text-[#D4AF37] font-bold' : 'text-[#4A0E17] hover:text-[#D4AF37]'
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6"
              >
                <a href="#invitation" onClick={(e) => handleNavClick(e, '#invitation')}>
                  <Button variant="primary" size="md" glow>
                    Open Invitation
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
