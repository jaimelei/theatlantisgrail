import type { NewsEntry } from '../../../types';
import useScrollReveal from '../../../hooks/useScrollReveal';

// Simple date formatter (YYYY-MM-DD to Month DD, YYYY)
const formatDate = (dateStr: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

interface NewsEntryProps {
  entry: NewsEntry;
}

export default function NewsEntry({ entry }: NewsEntryProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } py-12 border-b border-parchment-300 last:border-b-0 text-left`}
    >
      {entry.image ? (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-4">
            {/* Meta Info Row */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-wine-700 font-bold uppercase tracking-widest bg-wine-500/10 border border-wine-500/20 px-3 py-1 rounded-full">
                {entry.category || 'Update'}
              </span>
              <span className="font-mono text-xs text-parchment-600">
                {formatDate(entry.date)}
              </span>
            </div>

            {/* Heading */}
            <h3 className="font-display text-xl sm:text-2xl font-bold text-cosmos-950 leading-snug">
              {entry.title}
            </h3>

            {/* Prose */}
            <div className="font-body text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
              {entry.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Optional Image */}
          <div className="w-40 sm:w-48 aspect-[5/8] shrink-0 relative rounded-lg overflow-hidden border border-gold-400/20 bg-cosmos-800 shadow-soft self-center md:self-start mt-2 md:mt-0">
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Meta Info Row */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-wine-700 font-bold uppercase tracking-widest bg-wine-500/10 border border-wine-500/20 px-3 py-1 rounded-full">
              {entry.category || 'Update'}
            </span>
            <span className="font-mono text-xs text-parchment-600">
              {formatDate(entry.date)}
            </span>
          </div>

          {/* Heading */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-cosmos-950 leading-snug">
            {entry.title}
          </h3>

          {/* Prose */}
          <div className="font-body text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
            {entry.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
