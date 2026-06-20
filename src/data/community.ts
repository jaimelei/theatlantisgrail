import type { CommunityGroup } from '../types';

export const communityGroups: CommunityGroup[] = [
  {
    id: 'join-conversation',
    title: 'Join the Conversation',
    description: 'Connect with fellow Quadrant cadets, discuss theories, and share your passion.',
    links: [
      {
        name: 'The Atlantis Grail Discord',
        description: 'The official Discord server for fans of the series. Chat in real-time, pick your Quadrant, and participate in community events.',
        url: 'https://discord.gg/theatlantisgrail', // Placeholder/Official URL format
        icon: 'discord'
      },
      {
        name: 'Official Fan Forum',
        description: 'A classic bulletin board forum containing years of deep theory discussions, character analyses, and general fandom updates.',
        url: 'https://theatlantisgrail.forumotion.com/',
        icon: 'forum'
      },
      {
        name: 'Facebook Group',
        description: 'A warm and active community of readers sharing book reviews, memes, and fan-art.',
        url: 'https://www.facebook.com/groups/theatlantisgrail/',
        icon: 'facebook'
      }
    ]
  },
  {
    id: 'support-author',
    title: 'Support the Author',
    description: 'Help the author write the next books and get exclusive previews and deluxe packages.',
    links: [
      {
        name: 'Patreon',
        description: 'Subscribe to get early drafts of upcoming chapters, exclusive behind-the-scenes updates, and spicy NSFW spinoff stories.',
        url: 'https://www.patreon.com/veranazarian',
        icon: 'patreon'
      },
      {
        name: 'Ream Stories',
        description: 'An alternative subscription platform designed specifically for fiction readers. Read chapters in progress and join the inner circle.',
        url: 'https://reamstories.com/veranazarian',
        icon: 'ream'
      },
      {
        name: 'Vera Nazarian Books Direct Store',
        description: 'Buy deluxe hardcover editions, exclusive ebook bundles, and custom merchandise directly from the author.',
        url: 'https://veranazarianbooks.com/',
        icon: 'store'
      }
    ]
  },
  {
    id: 'explore-universe',
    title: 'Explore the Universe',
    description: 'Dive deep into the Atlantean lore, language glossaries, calendars, and quizzes.',
    links: [
      {
        name: 'The Atlantis Grail Wiki',
        description: 'A fan-run comprehensive database detailing characters, technology, colony star systems, and Atlanteo terminology.',
        url: 'https://the-atlantis-grail.fandom.com/wiki/The_Atlantis_Grail_Wiki',
        icon: 'wiki'
      },
      {
        name: 'Color Quadrant Quiz',
        description: 'Are you Red, Blue, Green, or Yellow? Take the official personality test to find out which Quadrant you belong to.',
        url: 'http://www.norilana.com/TAG-Quiz.htm',
        icon: 'quiz'
      },
      {
        name: 'The Atlantean Calendar',
        description: 'A breakdown of the unique solar calendar system used by the ancient descendants of Atlantis.',
        url: 'http://www.norilana.com/TAG-Calendar.htm', // Representative URL
        icon: 'calendar'
      }
    ]
  },
  {
    id: 'watch-listen',
    title: 'Watch & Listen',
    description: 'Watch visual presentations, interviews, conventions, and stream official audiobooks.',
    links: [
      {
        name: 'Official YouTube Channel',
        description: 'Vera Nazarian\'s YouTube channel featuring Dragon*Con panel recordings, book trailers, and live Q&A streams.',
        url: 'https://www.youtube.com/user/Norilana',
        icon: 'youtube'
      },
      {
        name: 'Audiobooks via Tantor Media',
        description: 'Listen to the audiobooks narrated by the award-winning voice actors, bringing the cosmic saga to life.',
        url: 'https://tantor.com/series/atlantis-grail.html',
        icon: 'audiobook'
      }
    ]
  },
  {
    id: 'fan-creativity',
    title: 'Fan Creativity',
    description: 'Explore community-made projects and read our official policies on fan creations.',
    links: [
      {
        name: 'TAG.Fan Portal',
        description: 'A hub cataloging fan fiction, fanart collections, cosplay photos, and community directory listings.',
        url: 'https://tag.fan/', // Representative URL
        icon: 'fan'
      },
      {
        name: 'Fan Fiction & Fan Art Policy',
        description: 'Vera Nazarian\'s open and encouraging guidelines regarding creating and hosting non-commercial fan works.',
        url: 'http://www.norilana.com/TAG-FanPolicy.htm', // Representative URL
        icon: 'policy'
      }
    ]
  }
];
