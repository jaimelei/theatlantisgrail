import type { Book } from '../../../types';
import BookSpread from './BookSpread';
import useScrollReveal from '../../../hooks/useScrollReveal';

interface SeriesGroupProps {
  title: string;
  books: Book[];
}

export default function SeriesGroup({ title, books }: SeriesGroupProps) {
  const activeBooks = books.filter((b) => b.status === 'available');
  const forthcomingBooks = books.filter((b) => b.status === 'coming-next' || b.status === 'forthcoming');
  const [forthcomingRef, forthcomingVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div className="py-12 first:pt-4 last:pb-4">
      {/* Series Title Treatment */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/30" />
        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-gold-400 text-center uppercase">
          {title}
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/30" />
      </div>

      {/* Active Books spreads */}
      <div className="flex flex-col">
        {activeBooks.map((book, index) => (
          <BookSpread key={book.slug} book={book} index={index} />
        ))}
      </div>

      {/* Combined Forthcoming Row */}
      {forthcomingBooks.length > 0 && (
        <div
          ref={forthcomingRef}
          className={`mt-12 p-6 bg-cosmos-900/50 border border-gold-400/10 rounded-xl transition-all duration-1000 ease-out transform ${
            forthcomingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h4 className="font-display text-xs tracking-wider uppercase font-semibold text-gold-400 mb-6 text-center md:text-left">
            Forthcoming & Upcoming Releases
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {forthcomingBooks.map((book) => (
              <div key={book.slug} className="flex flex-col items-center md:items-start text-center md:text-left gap-3 group">
                {/* Book Cover Container */}
                <div className="w-24 aspect-[5/8] relative rounded overflow-hidden border border-gold-400/15 bg-cosmos-950/80 group-hover:border-gold-400/35 group-hover:shadow-glow transition-all duration-300 shadow-lift">
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 bg-cosmos-950 text-gold-500/80 hidden text-center">
                    <span className="font-display text-[9px] tracking-wider uppercase font-bold leading-tight text-gold-400">
                      {book.title}
                    </span>
                    <span className="font-mono text-[7px] text-cosmos-400 mt-1">
                      Book {book.number}
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <h5 className="font-display text-xs font-semibold text-parchment-100 truncate group-hover:text-gold-400 transition-colors">
                    {book.title}
                  </h5>
                  <p className="font-mono text-[9px] text-gold-400 uppercase mt-0.5">
                    {book.status === 'coming-next' ? 'Coming Next' : 'Forthcoming'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
