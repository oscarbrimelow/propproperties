export interface Listing {
  id: string;
  address: string;
  city: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status: 'New' | 'Active' | 'Pending' | 'Sold';
  openHouse?: string;
  images: string[];
  listedBy: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string; // Markdown or rich text
  image: string;
}

export interface Review {
  name: string;
  role?: string;
  text: string;
  rating: number;
}

export type RoutePath =
  | '/'
  | '/blog'
  | '/buyeragencyagreement'
  | '/cg2a-buyer'
  | '/cg2a-seller'
  | '/cleveland-heights'
  | '/cleveland-heights-pos'
  | '/earnest-money'
  | '/escrow-title-buyers'
  | '/fiduciary-duties-buyers'
  | '/fiduciary-duties-sellers'
  | '/homebuyer-guidebook'
  | '/listing-guide'
  | '/homebuyingprocess'
  | '/inspections'
  | '/pos-inspections'
  | '/pos-inspections-sellers'
  | '/rpd-buyers'
  | '/rpd-sellers'
  | '/listing-inspections'
  | '/title-escrow-sellers'
  | '/contact';
