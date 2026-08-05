'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiNavigation, FiMap, FiCopy, FiCheck, FiBookmark } from 'react-icons/fi';

export function VenueButtons() {
  const [copied, setCopied] = useState(false);

  const venueAddress = "Sri Siri Convention, Inner Ring Road, 100 Feet Rd, beside USR Bspace, Ambapuram, Vijayawada, Andhra Pradesh 520012";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Sri+Siri+Convention+Vijayawada";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 flex flex-wrap items-center justify-center gap-3 venue-item">
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
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
        onClick={() => alert("Venue details saved!")}
        className="font-sans tracking-[0.15em] border border-[#D4AF37]/40"
      >
        <FiBookmark className="w-4 h-4 text-[#D4AF37]" />
        Save Venue
      </Button>
    </div>
  );
}
