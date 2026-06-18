import type { Book } from '../types';

export const books: Book[] = [
  // The Atlantis Grail — Original Series
  {
    slug: 'qualify',
    title: 'Qualify',
    series: 'original',
    seriesName: 'The Atlantis Grail',
    number: 1,
    tagline: 'You have two options. You die or you Qualify.',
    status: 'available',
    releaseDate: '2014-12-14',
    pageCount: 600,
    wordCount: 160000,
    coverImage: '/images/qualify.webp',
    buyLinks: [
      { label: 'Amazon', url: 'http://www.amazon.com/dp/B00RALWMLM/?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w?ean=2940150200227' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/qualify' },
      { label: 'Apple', url: 'https://itunes.apple.com/us/book/qualify/id954670123?mt=11' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details/Vera_Nazarian_Qualify?id=tcpjDwAAQBAJ' }
    ],
    editions: [
      { format: 'Paperback', isbn13: '978-1612423012', price: '$18.99' },
      { format: 'Hardcover', isbn13: '978-1612423005', price: '$29.99' }
    ]
  },
  {
    slug: 'compete',
    title: 'Compete',
    series: 'original',
    seriesName: 'The Atlantis Grail',
    number: 2,
    tagline: 'The games have begun. And there is no going back.',
    status: 'available',
    releaseDate: '2015-11-20',
    pageCount: 680,
    wordCount: 185000,
    coverImage: '/images/compete.webp',
    buyLinks: [
      { label: 'Amazon', url: 'http://www.amazon.com/dp/B013X8TXPI/?tag=veranazarian-20' },
      { label: 'B&N', url: 'http://www.barnesandnoble.com/w/compete-vera-nazarian/1122528429?ean=2940151149198' },
      { label: 'Kobo', url: 'https://store.kobobooks.com/en-US/ebook/compete-1' },
      { label: 'Apple', url: 'https://itunes.apple.com/us/book/id1030958453' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details/Vera_Nazarian_Compete?id=xctjDwAAQBAJ&PAffiliateID=1100lfd4s' }
    ],
    editions: [
      { format: 'Paperback', isbn13: '978-1612423036', price: '$19.99' },
      { format: 'Hardcover', isbn13: '978-1612423029', price: '$30.99' }
    ]
  },
  {
    slug: 'win',
    title: 'Win',
    series: 'original',
    seriesName: 'The Atlantis Grail',
    number: 3,
    tagline: 'The final showdown. Win or perish.',
    status: 'available',
    releaseDate: '2017-07-12',
    pageCount: 812,
    wordCount: 220000,
    coverImage: '/images/win.webp',
    buyLinks: [
      { label: 'Amazon', url: 'http://www.amazon.com/dp/B073WGG71X/?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w/books/1126739186?ean=2940158643934' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/win-8' },
      { label: 'Apple', url: 'https://itunes.apple.com/us/book/id1258830339' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details/Vera_Nazarian_Win?id=U8xjDwAAQBAJ&PAffiliateID=1100lfd4s' }
    ],
    editions: [
      { format: 'Paperback', isbn13: '978-1612423050', price: '$21.99' },
      { format: 'Hardcover', isbn13: '978-1612423043', price: '$32.99' }
    ]
  },
  {
    slug: 'survive',
    title: 'Survive',
    series: 'original',
    seriesName: 'The Atlantis Grail',
    number: 4,
    tagline: 'The universe is ending. Can they survive?',
    status: 'available',
    releaseDate: '2020-03-27',
    pageCount: 884,
    wordCount: 240000,
    coverImage: '/images/survive.webp',
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/dp/B083G9VLBY/?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w?ean=2940163175307' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/survive-40' },
      { label: 'Apple', url: 'https://itunes.apple.com/us/book/id1493608028' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details/Vera_Nazarian_Survive?id=oNXHDwAAQBAJ&PAffiliateID=1100lfd4s' }
    ],
    editions: [
      { format: 'Paperback', isbn13: '978-1612423074', price: '$22.99' },
      { format: 'Hardcover', isbn13: '978-1612423067', price: '$34.99' }
    ]
  },
  {
    slug: 'book-of-everything',
    title: 'The Book of Everything',
    series: 'original',
    seriesName: 'The Atlantis Grail',
    number: 5,
    tagline: 'The ultimate cosmic revelation.',
    status: 'forthcoming',
    coverImage: '/images/book-of-everything.webp',
    buyLinks: []
  },

  // Dawn of the Atlantis Grail (Prequel Series)
  {
    slug: 'eos',
    title: 'Eos',
    series: 'prequel',
    seriesName: 'Dawn of the Atlantis Grail',
    number: 1,
    tagline: 'Before the Grail, there was the Dawn.',
    status: 'available',
    releaseDate: '2025-08-15',
    pageCount: 520,
    wordCount: 140000,
    coverImage: '/images/eos.webp',
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/dp/B0D1PGC6TC/?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w/eos-vera-nazarian/1147866838?ean=2940184420653' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/eos-18' },
      { label: 'Apple', url: 'https://books.apple.com/us/book/eos/id6748926233' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details/Vera_Nazarian_Eos?id=GLdyEQAAQBAJ' }
    ]
  },
  {
    slug: 'dea',
    title: 'Dea',
    series: 'prequel',
    seriesName: 'Dawn of the Atlantis Grail',
    number: 2,
    tagline: 'The goddess rising.',
    status: 'coming-next',
    coverImage: '/images/dea.webp',
    buyLinks: []
  },
  {
    slug: 'niktos',
    title: 'Niktos',
    series: 'prequel',
    seriesName: 'Dawn of the Atlantis Grail',
    number: 3,
    tagline: 'The night approaches.',
    status: 'forthcoming',
    coverImage: '/images/niktos.webp',
    buyLinks: []
  },
  {
    slug: 'ghost',
    title: 'Ghost',
    series: 'prequel',
    seriesName: 'Dawn of the Atlantis Grail',
    number: 4,
    tagline: 'The shadows speak.',
    status: 'forthcoming',
    coverImage: '/images/ghost.webp',
    buyLinks: []
  },
  {
    slug: 'starlight',
    title: 'Starlight',
    series: 'prequel',
    seriesName: 'Dawn of the Atlantis Grail',
    number: 5,
    tagline: 'The final beacon.',
    status: 'forthcoming',
    coverImage: '/images/starlight.webp',
    buyLinks: []
  },

  // The Atlantis Grail Novella Series
  {
    slug: 'aeson-blue',
    title: 'Aeson: Blue',
    series: 'novella',
    seriesName: 'The Atlantis Grail Novellas',
    number: 1,
    tagline: 'The color of royalty, the weight of a crown.',
    status: 'available',
    releaseDate: '2016-06-20',
    pageCount: 180,
    wordCount: 45000,
    coverImage: '/images/aeson-blue.webp',
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/dp/B08ZKYTFRS/?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w?ean=2940162481782' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/aeson-blue' },
      { label: 'Apple', url: 'https://books.apple.com/us/book/id1559414457' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details?id=__IkEAAAQBAJ&PAffiliateID=1100lfd4s' }
    ]
  },
  {
    slug: 'aeson-black',
    title: 'Aeson: Black',
    series: 'novella',
    seriesName: 'The Atlantis Grail Novellas',
    number: 2,
    tagline: 'Into the dark heart of the prince.',
    status: 'available',
    releaseDate: '2017-02-14',
    pageCount: 200,
    wordCount: 50000,
    coverImage: '/images/aeson-black.webp',
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/dp/B09Y8S8QL2/?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w/aeson-vera-nazarian/1141368092?ean=2940160947266' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/aeson-black' },
      { label: 'Apple', url: 'https://books.apple.com/us/book/aeson-black/id1619898516?at=1010l9S2&uo=4&mt=11' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details?id=GphrEAAAQBAJ' }
    ]
  },
  {
    slug: 'xelio-red',
    title: 'Xelio: Red',
    series: 'novella',
    seriesName: 'The Atlantis Grail Novellas',
    number: 3,
    tagline: 'The fire of rebellion.',
    status: 'forthcoming',
    coverImage: '/images/xelio-red.webp',
    buyLinks: []
  },

  // Superfan Extras Series
  {
    slug: 'tag-companion',
    title: 'TAG Companion',
    series: 'extras',
    seriesName: 'Superfan Extras',
    number: 1,
    tagline: 'Your guide to the Atlantis Grail universe.',
    status: 'available',
    releaseDate: '2019-12-01',
    pageCount: 350,
    wordCount: 90000,
    coverImage: '/images/tag-companion.webp',
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/dp/B09NWZL9S3/' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w/the-atlantis-grail-companion-vera-nazarian/1140802913?ean=2940161085110' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/the-atlantis-grail-companion' },
      { label: 'Apple', url: 'https://books.apple.com/us/book/the-atlantis-grail-companion/id1601204268' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details?id=dqdVEAAAQBAJ' }
    ]
  },
  {
    slug: 'people-of-tag',
    title: 'People of TAG',
    series: 'extras',
    seriesName: 'Superfan Extras',
    number: 2,
    tagline: 'The faces and voices of the Quadrants.',
    status: 'available',
    releaseDate: '2021-06-15',
    pageCount: 280,
    wordCount: 70000,
    coverImage: '/images/people-of-tag.webp',
    buyLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/gp/product/B0BW1TSZ94?tag=veranazarian-20' },
      { label: 'B&N', url: 'https://www.barnesandnoble.com/w/people-of-the-atlantis-grail-vera-nazarian/1143081292?ean=2940186766162' },
      { label: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/people-of-the-atlantis-grail' },
      { label: 'Apple', url: 'https://books.apple.com/us/book/people-of-the-atlantis-grail/id6445756530' },
      { label: 'Google Play', url: 'https://play.google.com/store/books/details?id=qGmuEAAAQBAJ&PAffiliateID=1100lfd4s' }
    ]
  }
];
