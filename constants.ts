
import { Gadget, MerchItem } from './types';

export const GADGETS: Gadget[] = [
  {
    id: '1',
    title: 'LED Matrix Glasses v2.0',
    description: 'De iconische bril uit de video! Volledig aanpasbaar via Bluetooth met de Toby-stijl cirkel animaties.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=600',
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
    description: 'Ultra-stille aerospace grade aluminium spinner die de zwaartekracht tart. Onze meest bevredigende test!',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0167c95c?auto=format&fit=crop&q=80&w=600',
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
    description: 'Winddicht, brandstofvrij en ziet eruit alsof het uit 2077 komt. Extreme duurzaamheidstest doorstaan.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600',
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
    description: 'Magisch zand dat structurele vormen vormt met geïntegreerde verlichting. Uniek in elke kamer.',
    image: 'https://images.unsplash.com/photo-1518117648399-599298108464?auto=format&fit=crop&q=80&w=600',
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
    title: 'Toby Buys Electric Blue Hoodie',
    price: '$59.99',
    description: 'Dezelfde premium blauwe hoodie als in de video! Hoogwaardig katoen met reflecterend logo.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm2',
    title: 'Extreme Gear Test Tee',
    price: '$29.99',
    description: 'Ademend tech-fabric shirt. Perfect voor je eigen unboxing sessies.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm3',
    title: 'LED Logo Cap',
    price: '$34.99',
    description: 'Glow-in-the-dark "TOBY BUYS" borduursel met verstelbare pasvorm.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600'
  }
];
