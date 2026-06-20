import type { Book } from '../../../types';
import useScrollReveal from '../../../hooks/useScrollReveal';

interface BookSpreadProps {
  book: Book;
  index: number;
}

export default function BookSpread({ book, index }: BookSpreadProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const isCoverLeft = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } flex flex-col md:flex-row ${
        isCoverLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center md:items-start gap-8 md:gap-12 lg:gap-16 py-12 md:py-16 border-b border-parchment-300/30 last:border-b-0`}
    >
      {/* Cover Image Column */}
      <div className="w-[240px] aspect-[5/8] shrink-0 relative rounded-lg overflow-hidden border border-gold-400/20 bg-cosmos-800 shadow-lift group hover:shadow-glow transition-all duration-300">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-cosmos-800 text-gold-400 hidden">
          <span className="font-display text-lg tracking-wider uppercase font-semibold mb-2">
            {book.title}
          </span>
          <span className="font-mono text-xs text-cosmos-400">
            Book {book.number}
          </span>
        </div>
      </div>

      {/* Info Column */}
      <div className="flex-1 flex flex-col justify-center text-left gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-parchment-100">
            {book.title}
          </h2>
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

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-gold-400/80">
          <span>{book.seriesName} #{book.number}</span>
          {book.releaseDate && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>Released: {book.releaseDate}</span>
            </>
          )}
          {book.pageCount && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>{book.pageCount} pages</span>
            </>
          )}
        </div>

        <p className="font-editorial text-xl italic text-gold-300 tracking-wide leading-relaxed border-l-2 border-gold-400/20 pl-4 py-1">
          {book.tagline}
        </p>

        {book.synopsis && (
          <p className="font-body text-sm text-parchment-200 leading-relaxed max-w-3xl">
            {book.synopsis}
          </p>
        )}

        {/* Accordion for Editions/ISBNs */}
        {book.editions && book.editions.length > 0 && (
          <details className="group cursor-pointer">
            <summary className="font-body text-xs font-semibold uppercase tracking-wider text-cosmos-400 hover:text-gold-400 transition-colors list-none flex items-center gap-1 focus:outline-none">
              <span>Edition Details & ISBNs</span>
              <svg
                className="w-3 h-3 transform transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-3 p-4 bg-cosmos-900/50 border border-gold-400/10 rounded-lg max-w-md">
              <table className="w-full text-left font-mono text-xs text-parchment-200">
                <tbody>
                  {book.editions.map((ed, idx) => (
                    <tr key={idx} className="border-b border-gold-400/5 last:border-b-0">
                      <td className="py-1.5 pr-4 font-body font-medium text-gold-400">{ed.format}</td>
                      <td className="py-1.5 pr-4">ISBN-13: {ed.isbn13}</td>
                      {ed.price && <td className="py-1.5 text-right">{ed.price}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        )}

        {/* Buy Links Row */}
        {book.buyLinks && book.buyLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {book.buyLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold font-body uppercase tracking-wider bg-cosmos-950 hover:bg-gold-400 hover:text-cosmos-950 text-parchment-100 border border-gold-400/20 hover:border-gold-400 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
