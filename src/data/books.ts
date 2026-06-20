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
    ],
    synopsis: 'The year is 2047, and an extinction-level asteroid is hurtling toward Earth. The descendants of ancient Atlantis have returned in their silver ships to offer a chance at salvation, but they can only rescue a tiny percentage of the human population. To be chosen, teens must be bright, talented, athletic, and—above all—they must Qualify. Gwen Lark, a self-described klutz and a nerd, must fight for her life against impossible odds and world-class competition to save her family and earn her place in the stars.'
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
    ],
    synopsis: 'With Earth facing destruction, teenage nerd and awkward genius Gwen Lark has barely managed to qualify for rescue aboard one of the thousands of ark-ships headed to the ancient colony planet, Atlantis. As the year-long voyage in space begins, she must navigate a wondrously alien environment while making difficult life choices. Catching the personal interest of Aeson Kassiopei, the Imperial Prince of Atlantis, Gwen must convince him she has what it takes to compete in the deadly Games of the Atlantis Grail.'
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
    ],
    synopsis: "The Games are forever. It's one thing to Qualify and Compete—now, Gwen Lark must Win. Having successfully reached Atlantis, Gwen finds the new world is far from paradise, classified as a non-citizen with limited rights. Her rare and powerful Logos voice is seen as a threat to the ruling Kassiopei Imperial Dynasty. To protect herself, her family, and everything she holds dear, Gwen is forced to compete in the brutal, deadly, and highly sophisticated Games of the Atlantis Grail."
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
    ],
    synopsis: 'Following the events of Qualify, Compete, and Win, the Games of the Atlantis Grail have come to a ground-shaking halt. Gwen Lark, who successfully navigated the trials, must now face the ultimate challenge. The final battle has arrived, and Gwen, along with everyone she loves, must engage in the greatest fight of their lives to protect both Earth and Atlantis from a looming cosmic threat.'
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
    ],
    synopsis: 'Set in 10,504 B.C.E. in the high-tech capital of Atlantis, Poseidon, as a catastrophic asteroid hurtles toward Earth. Semmi, a street-smart sixteen-year-old, is thrust into a world of Imperial Court intrigue when she discovers the secret identity of Benaten Bisfuri, a powerful nobleman and vigilante. To save her family from the coming global apocalypse, Semmi must compete in the brutal Service Competitions to earn a spot on the ark-ships leaving Earth.'
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
    ],
    synopsis: 'Aeson: Blue takes readers back to a time before the main Atlantis Grail series. The story follows a young Imperial Crown Prince Aeson Kassiopei. Intelligent, well-educated, and deeply isolated by the privilege of the divine Imperial Dynasty, Aeson enters the Fleet Cadet School and experiences the "real world" for the very first time. He must learn to navigate the challenges of being just another student, making friends and bonding with peers who will shape his destiny.'
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
    ],
    synopsis: "Follows Aeson Kassiopei, the Imperial Crown Prince of Atlantis, as he navigates a pivotal period in his life after surviving a fiery death at Ae-Leiterra. Aeson must grapple with the aftermath of that experience, the responsibility of his position, and an impossible choice between love and duty. Intended for mature audiences, this novella provides a deep, character-focused look into Aeson's history, motivations, and growth."
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
    ],
    synopsis: 'The ultimate reference guide to the things, places, rules, and customs of the Atlantis Grail universe. A comprehensive encyclopedia for superfans, this volume features detailed world-building explanations, glossaries of the Atlanteo language, schematics, drawings, and exclusive lore not found in the main novels.'
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
    ],
    synopsis: "The definitive character guide and dramatis personae for the Atlantis Grail universe. This book offers a detailed look at the thousands of characters who populate the series—including humans, aliens, and felines—along with personal facts, new character-specific revelations, and special features like the Atlantean Zodiac."
  }
];
