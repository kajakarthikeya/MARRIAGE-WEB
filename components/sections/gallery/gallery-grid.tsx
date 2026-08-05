'use client';

import React from 'react';
import { GalleryItem } from '@/constants/gallery-data';
import { GalleryCard } from '@/components/sections/gallery/gallery-card';

export interface GalleryGridProps {
  items: GalleryItem[];
  onSelect: (index: number) => void;
}

export function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full my-8">
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          onOpen={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
