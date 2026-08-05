import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { SITE_CONFIG } from '@/constants/site';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.name} — Luxury Wedding Invitation`,
  description: SITE_CONFIG.description,
  keywords: ['Luxury Wedding', 'Wedding Invitation', 'Vineeth Babu Akkinapalli and Naga Anusha Kaja', 'Digital Wedding'],
  openGraph: {
    title: `${SITE_CONFIG.name} — Luxury Wedding Invitation`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Luxury Wedding Invitation`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: `${SITE_CONFIG.name}'s Wedding Celebration`,
  description: SITE_CONFIG.description,
  startDate: '2026-08-26T22:23:00+05:30',
  endDate: '2026-08-27T02:00:00+05:30',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Sri Siri Convention',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Inner Ring Road, 100 Feet Rd, beside USR Bspace, Ambapuram',
      addressLocality: 'Vijayawada',
      addressRegion: 'Andhra Pradesh',
      postalCode: '520012',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Person',
    name: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
