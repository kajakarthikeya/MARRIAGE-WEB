'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiNavigation, FiMap, FiCopy, FiCheck, FiBookmark } from 'react-icons/fi';

export function VenueButtons() {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const venueAddress = "Sri Siri Convention, Inner Ring Road, 100 Feet Rd, beside USR Bspace, Ambapuram, Vijayawada, Andhra Pradesh 520012";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Sri+Siri+Convention+Vijayawada";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Sri+Siri+Convention+Vijayawada";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveVenue = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Vineeth & Naga Anusha Wedding//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Vineeth Babu & Naga Anusha Wedding Celebration',
      'DESCRIPTION:Join us for the grand wedding celebration of Vineeth Babu Akkinapalli and Naga Anusha Kaja at Sri Siri Convention, Vijayawada.',
      'LOCATION:Sri Siri Convention, Inner Ring Road, 100 Feet Rd, beside USR Bspace, Ambapuram, Vijayawada, Andhra Pradesh 520012',
      'DTSTART:20260826T165300Z',
      'DTEND:20260826T203000Z',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Vineeth_NagaAnusha_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 flex flex-wrap items-center justify-center gap-3 venue-item">
      <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="primary" size="md" glow className="font-sans tracking-[0.15em]">
          <FiNavigation className="w-4 h-4 text-[#D4AF37]" />
          Get Directions
        </Button>
      </a>

      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="md" className="font-sans tracking-[0.15em]">
          <FiMap className="w-4 h-4 text-[#4A0E17]" />
          Open in Google Maps
        </Button>
      </a>

      <Button
        variant="ghost"
        size="md"
        onClick={handleCopyAddress}
        className="font-sans tracking-[0.15em] border border-[#D4AF37]/40"
      >
        {copied ? (
          <>
            <FiCheck className="w-4 h-4 text-emerald-600" />
            Address Copied!
          </>
        ) : (
          <>
            <FiCopy className="w-4 h-4 text-[#4A0E17]" />
            Copy Address
          </>
        )}
      </Button>

      <Button
        variant="ghost"
        size="md"
        onClick={handleSaveVenue}
        className="font-sans tracking-[0.15em] border border-[#D4AF37]/40"
      >
        {saved ? (
          <>
            <FiCheck className="w-4 h-4 text-emerald-600" />
            Saved to Calendar!
          </>
        ) : (
          <>
            <FiBookmark className="w-4 h-4 text-[#D4AF37]" />
            Save Venue
          </>
        )}
      </Button>
    </div>
  );
}

