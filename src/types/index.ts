export type BookStatus = 'available' | 'coming-next' | 'forthcoming';

export interface BuyLink {
  label: string;
  url: string;
}

export interface Edition {
  format: string;
  isbn13: string;
  isbn10?: string;
  price?: string;
}

export interface Book {
  slug: string;
  title: string;
  series: 'original' | 'prequel' | 'novella' | 'extras';
  seriesName: string;
  number: number;
  tagline: string;
  status: BookStatus;
  releaseDate?: string;
  pageCount?: number;
  wordCount?: number;
  coverImage: string;
  buyLinks: BuyLink[];
  editions?: Edition[];
}

export interface NewsEntry {
  id: string;
  date: string;
  title: string;
  body: string;
  excerpt: string;
  image?: string;
  category?: 'Release' | 'Update' | 'Community';
}

