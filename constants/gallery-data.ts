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
    title: 'Sacred Vows Exchange',
    category: 'Wedding',
    src: '/images/gallery-1.jpg',
    caption: 'A sacred moment of lifelong promises exchanged under the royal floral mandap.',
    heightClass: 'h-80',
  },
  {
    id: '2',
    title: 'Saffron Blessings',
    category: 'Haldi',
    src: '/images/gallery-2.jpg',
    caption: 'Laughter and golden turmeric paste showered with warm blessings.',
    heightClass: 'h-64',
  },
  {
    id: '3',
    title: 'Haldi Festivities',
    category: 'Haldi',
    src: '/images/gallery-3.jpg',
    caption: 'Joyful turmeric celebrations filled with traditional folk melodies.',
    heightClass: 'h-72',
  },
  {
    id: '4',
    title: 'Pre-Wedding Prayer',
    category: 'Ceremony',
    src: '/images/gallery-4.jpg',
    caption: 'A timeless family prayer union sealed with warmth and joy.',
    heightClass: 'h-80',
  },
  {
    id: '5',
    title: 'Sunset Portrait',
    category: 'Couple',
    src: '/images/gallery-5.jpg',
    caption: 'A quiet golden hour portrait amidst the heritage palace gardens.',
    heightClass: 'h-64',
  },
  {
    id: '6',
    title: 'First Look Smiles',
    category: 'Couple',
    src: '/images/gallery-6.jpg',
    caption: 'An unforgettable first look moment shared between Vineeth Babu and Naga Anusha.',
    heightClass: 'h-72',
  },
  {
    id: '7',
    title: 'Floral Garlands',
    category: 'Wedding',
    src: '/images/gallery-7.jpg',
    caption: 'The exchange of fragrant rose garlands celebrating sacred harmony.',
    heightClass: 'h-80',
  },
  {
    id: '8',
    title: 'Royal Mandap Lights',
    category: 'Ceremony',
    src: '/images/gallery-8.jpg',
    caption: 'The illuminated courtyard under a blanket of starlight and candles.',
    heightClass: 'h-64',
  },
];
