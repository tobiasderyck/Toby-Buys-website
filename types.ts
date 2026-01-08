
export interface AffiliateLinks {
  usa: string;
  eu: string;
  canada: string;
}

export interface Gadget {
  id: string;
  title: string;
  description: string;
  image: string;
  links: AffiliateLinks;
  tag: string;
}

export interface MerchItem {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

export enum Section {
  HERO = 'hero',
  MERCH = 'merch',
  GADGETS = 'gadgets'
}
