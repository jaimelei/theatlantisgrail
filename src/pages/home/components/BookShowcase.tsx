import { useState } from 'react';
import useScrollReveal from '../../../hooks/useScrollReveal';
import { books } from '../../../data/books';

const revealClass = (isVisible: boolean) =>
  `transition-all duration-1000 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`;

export default function BookShowcase() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedSlugs, setSelectedSlugs] = useState<Record<string, string>>({
    original: 'qualify',
    prequel: 'eos',
    novella: 'aeson-blue',
    extras: 'tag-companion',
  });
  
  // Set up scroll reveals for each of the 4 series groups
  const [originalRef, originalVisible] = useScrollReveal<HTMLDivElement>();
  const [prequelRef, prequelVisible] = useScrollReveal<HTMLDivElement>();
  const [novellaRef, novellaVisible] = useScrollReveal<HTMLDivElement>();
  const [extrasRef, extrasVisible] = useScrollReveal<HTMLDivElement>();

  const seriesGroups = [
    {
      id: 'original',
      title: 'The Atlantis Grail — Original Series',
      ref: originalRef,
      visible: originalVisible,
      books: books.filter((b) => b.series === 'original')
    },
    {
      id: 'prequel',
      title: 'Dawn of the Atlantis Grail',
      ref: prequelRef,
      visible: prequelVisible,
      books: books.filter((b) => b.series === 'prequel')
    },
    {
      id: 'novella',
      title: 'The Atlantis Grail Novellas',
      ref: novellaRef,
      visible: novellaVisible,
      books: books.filter((b) => b.series === 'novella')
    },
    {
      id: 'extras',
      title: 'Superfan Extras',
      ref: extrasRef,
      visible: extrasVisible,
      books: books.filter((b) => b.series === 'extras')
    }
  ];

  return (
    <section className="relative bg-cosmos-900 py-24 overflow-hidden border-t border-gold-400/10">
      {/* Background Star Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmos-800/30 via-cosmos-950 to-cosmos-950 pointer-events-none opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-24">
        {seriesGroups.map((group) => {
          // Identify which book in this specific group is active (either hovered, or selected)
          const hoveredBookInGroup = group.books.find((b) => b.slug === hoveredSlug);
          const activeBook = hoveredBookInGroup || group.books.find((b) => b.slug === selectedSlugs[group.id]) || group.books[0];

          return (
            <div
              key={group.id}
              ref={group.ref}
              className={`flex flex-col gap-12 ${revealClass(group.visible)}`}
            >
              {/* Series Title Treatment */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/30" />
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-gold-400 text-center uppercase">
                  {group.title}
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/30" />
              </div>

              {/* Fanned Shelf Container */}
              <div className="relative flex flex-col items-center">
                {/* Desktop Fanned Shelf */}
                <div className="hidden md:flex justify-center items-end h-[380px] px-8 py-4 w-full max-w-4xl relative">
                  {group.books.map((book, idx) => {
                    const isActive = book.slug === activeBook.slug;
                    const isFirst = idx === 0;

                    return (
                      <div
                        key={book.slug}
                        onMouseEnter={() => setHoveredSlug(book.slug)}
                        onMouseLeave={() => setHoveredSlug(null)}
                        onClick={() => setSelectedSlugs((prev) => ({ ...prev, [group.id]: book.slug }))}
                        className={`relative transition-all duration-300 cursor-pointer origin-bottom ${
                          isActive
                            ? 'w-[200px] z-20 scale-105 -translate-y-3'
                            : 'w-[180px] z-10 hover:z-20 hover:scale-105 hover:-translate-y-3'
                        }`}
                        style={{
                          marginLeft: isFirst ? '0px' : '-40px',
                        }}
                      >
                        {/* Book Cover Container */}
                        <div className="w-full aspect-[5/8] relative rounded-lg overflow-hidden border border-gold-400/20 bg-cosmos-800 shadow-lift group hover:shadow-glow transition-all duration-300">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const el = e.currentTarget.nextElementSibling as HTMLElement;
                              if (el) el.classList.remove('hidden');
                            }}
                          />
                          {/* Fallback CSS Cover */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-cosmos-800 text-gold-400 hidden">
                            <span className="font-display text-sm tracking-wider uppercase font-semibold mb-2">
                              {book.title}
                            </span>
                            <span className="font-mono text-[10px] text-cosmos-400">
                              Book {book.number}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Horizontal Scroll Strip */}
                <div className="md:hidden w-full overflow-x-auto flex gap-6 px-4 py-6 scroll-snap-type-x mandatory scrollbar-thin">
                  {group.books.map((book) => {
                    const isActive = book.slug === activeBook.slug;
                    return (
                      <div
                        key={book.slug}
                        onClick={() => setSelectedSlugs((prev) => ({ ...prev, [group.id]: book.slug }))}
                        className="snap-start shrink-0 w-[180px] cursor-pointer"
                      >
                        <div className={`w-full aspect-[5/8] relative rounded-lg overflow-hidden border transition-all duration-300 ${
                          isActive ? 'border-gold-400 shadow-glow scale-105' : 'border-gold-400/20 shadow-lift'
                        }`}>
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const el = e.currentTarget.nextElementSibling as HTMLElement;
                              if (el) el.classList.remove('hidden');
                            }}
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-cosmos-800 text-gold-400 hidden">
                            <span className="font-display text-xs tracking-wider uppercase font-semibold">
                              {book.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detail Panel — Desktop Slides Up, Mobile Always Visible below */}
                <div className="w-full max-w-3xl mt-8 relative min-h-[140px]">
                  {group.books.map((book) => {
                    const isActive = book.slug === activeBook.slug;
                    
                    return (
                      <div
                        key={book.slug}
                        className={`transition-all duration-500 ease-in-out md:absolute left-0 right-0 ${
                          isActive
                            ? 'opacity-100 translate-y-0 pointer-events-auto block'
                            : 'opacity-0 translate-y-8 pointer-events-none hidden md:block'
                        }`}
                      >
                        <div className="bg-cosmos-950/80 border border-gold-400/20 backdrop-blur-md rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lift">
                          <div className="flex-1 flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-3">
                              <h4 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-parchment-50">
                                {book.title}
                              </h4>
                              {book.status === 'available' ? (
                                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-wine-500/20 border border-wine-500/40 text-wine-400">
                                  Available Now
                                </span>
                              ) : book.status === 'coming-next' ? (
                                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 border border-gold-500/40 text-gold-300">
                                  Coming Next
                                </span>
                              ) : (
                                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cosmos-700/50 border border-cosmos-700 text-cosmos-400">
                                  Forthcoming
                                </span>
                              )}
                            </div>
                            <p className="font-editorial text-lg italic text-gold-300">
                              {book.tagline}
                            </p>
                            {book.releaseDate && (
                              <p className="font-mono text-xs text-cosmos-400">
                                Released: {book.releaseDate} • {book.pageCount} pages
                              </p>
                            )}
                          </div>

                          {book.buyLinks.length > 0 && (
                            <div className="flex flex-wrap gap-2 md:max-w-[320px] justify-start md:justify-end">
                              {book.buyLinks.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold font-body uppercase tracking-wider bg-cosmos-800 hover:bg-gold-400 hover:text-cosmos-950 text-parchment-100 border border-gold-400/20 transition-all duration-300"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
