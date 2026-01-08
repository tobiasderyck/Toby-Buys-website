
import { Gadget, MerchItem } from './types';

export const GADGETS: Gadget[] = [
  {
    id: '1',
    title: 'LED Matrix Glasses v2.0',
    description: 'The exact glasses Toby wears in his intros. Fully customizable via Bluetooth.',
    image: 'https://picsum.photos/seed/gadget1/600/600',
    tag: 'Toby\'s Choice',
    links: {
      usa: 'https://amazon.com',
      eu: 'https://amazon.de',
      canada: 'https://amazon.ca'
    }
  },
  {
    id: '2',
    title: 'Kinetic Desk Spinner',
    description: 'Ultra-quiet aerospace grade aluminum spinner that defies gravity.',
    image: 'https://picsum.photos/seed/gadget2/600/600',
    tag: 'Most Satisfying',
    links: {
      usa: 'https://amazon.com',
      eu: 'https://amazon.de',
      canada: 'https://amazon.ca'
    }
  },
  {
    id: '3',
    title: 'Portable Plasma Lighter',
    description: 'Windproof, fuel-free, and looks like it belongs in 2077.',
    image: 'https://picsum.photos/seed/gadget3/600/600',
    tag: 'Extreme Test',
    links: {
      usa: 'https://amazon.com',
      eu: 'https://amazon.de',
      canada: 'https://amazon.ca'
    }
  },
  {
    id: '4',
    title: 'RGB Magnetic Sand Timer',
    description: 'Magical sand that forms structural shapes with integrated lighting.',
    image: 'https://picsum.photos/seed/gadget4/600/600',
    tag: 'Unique Find',
    links: {
      usa: 'https://amazon.com',
      eu: 'https://amazon.de',
      canada: 'https://amazon.ca'
    }
  }
];

export const MERCH: MerchItem[] = [
  {
    id: 'm1',
    title: 'Toby Buys Signature Hoodie',
    price: '$59.99',
    description: 'Premium heavyweight cotton hoodie. Electric blue with high-density logo print.',
    image: 'https://picsum.photos/seed/hoodie1/600/800'
  },
  {
    id: 'm2',
    title: 'Extreme Gear Test Tee',
    price: '$29.99',
    description: 'Breathable tech-fabric t-shirt. Perfect for your own gear tests.',
    image: 'https://picsum.photos/seed/tee1/600/800'
  },
  {
    id: 'm3',
    title: 'LED Logo Cap',
    price: '$34.99',
    description: 'Glow-in-the-dark "TOBY BUYS" embroidery with adjustable fit.',
    image: 'https://picsum.photos/seed/cap1/600/800'
  }
];
