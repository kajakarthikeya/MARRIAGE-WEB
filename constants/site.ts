import { NavItem } from '@/types';

export const SITE_CONFIG = {
  name: 'Vineeth & Naga Anusha',
  tagline: 'Wedding Celebration',
  description: 'Together with their families, Vineeth Babu Akkinapalli & Naga Anusha Kaja invite you to celebrate their wedding day.',
  url: 'https://wedding-invitation.example.com',
  ogImage: '/images/og-image.jpg',
  coupleInitials: 'V & N',
  weddingYear: '2026',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Trailer', href: '#video' },
  { label: 'Events', href: '#events' },
  { label: 'Venue', href: '#venue' },
  { label: 'Gallery', href: '#gallery' },
];

export const FOUNDATION_STATUS = [
  'Loading Completed',
  'Navigation Ready',
  'Animation System Ready',
  'Design System Ready',
  'Smooth Scroll Ready',
] as const;
