export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ceremony' | 'Haldi' | 'Wedding' | 'Couple';
  src: string;
  caption: string;
  heightClass: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Sweet Embrace',
    category: 'Couple',
    src: '/images/gallery-2.jpg',
    caption: 'Vineeth Babu & Naga Anusha sharing a beautiful embrace in elegant matching attire.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '2',
    title: 'Campfire Warmth',
    category: 'Couple',
    src: '/images/gallery-3.jpg',
    caption: 'Laughter and joyful warmth by the fireside under starry night skies.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '3',
    title: 'Heritage Sanctuary',
    category: 'Ceremony',
    src: '/images/gallery-4.jpg',
    caption: 'Traditional elegance and grace beside hand-carved heritage temple pillars.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '4',
    title: 'Playful Moments',
    category: 'Couple',
    src: '/images/gallery-5.jpg',
    caption: 'Joyful water splashes and sweet affectionate smiles shared together.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '5',
    title: 'Quiet Affection',
    category: 'Couple',
    src: '/images/gallery-6.jpg',
    caption: 'Gentle gazes and quiet affection shared in traditional silk attire.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '6',
    title: 'Temple Gopuram Union',
    category: 'Ceremony',
    src: '/images/gallery-7.jpg',
    caption: 'Serene moments seated together before the majestic temple gopuram.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '7',
    title: 'Joyful Leap',
    category: 'Couple',
    src: '/images/gallery-8.jpg',
    caption: 'Fun, spontaneous laughter and high energy captured in vibrant color.',
    heightClass: 'h-80 sm:h-96',
  },
  {
    id: '8',
    title: 'Royal Navy Elegance',
    category: 'Wedding',
    src: '/images/gallery-9.jpg',
    caption: 'Regal couple portrait in rich royal blue sherwani and traditional saree.',
    heightClass: 'h-80 sm:h-96',
  },
];
