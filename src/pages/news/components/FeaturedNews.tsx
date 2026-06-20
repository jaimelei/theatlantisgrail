import type { NewsEntry } from '../../../types';
import useScrollReveal from '../../../hooks/useScrollReveal';

// Simple date formatter (YYYY-MM-DD to Month DD, YYYY)
const formatDate = (dateStr: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

interface FeaturedNewsProps {
  entry: NewsEntry;
}

export default function FeaturedNews({ entry }: FeaturedNewsProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } bg-white border border-parchment-300 rounded-2xl p-6 md:p-10 shadow-soft mb-12`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-8 md:gap-12 items-center">
        {/* Left text column */}
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-wine-700 font-bold uppercase tracking-widest bg-wine-500/10 border border-wine-500/20 px-3 py-1 rounded-full">
              {entry.category || 'Featured'}
            </span>
            <span className="font-mono text-xs text-parchment-600">
              {formatDate(entry.date)}
            </span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-cosmos-950 leading-tight">
            {entry.title}
          </h2>
          
          <div className="font-body text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
            {entry.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right image column (if present, else spacer/fallback) */}
        <div className="flex justify-center">
          {entry.image ? (
            <div className="relative group w-48 sm:w-56 max-w-full aspect-[5/8] rounded-xl overflow-hidden border border-gold-400/20 bg-cosmos-800 shadow-lift">
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const el = e.currentTarget.nextElementSibling as HTMLElement;
                  if (el) el.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-cosmos-800 text-gold-400 hidden">
                <span className="font-display text-sm tracking-wider uppercase font-semibold">
                  {entry.title}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full min-h-[220px] border border-dashed border-parchment-300 rounded-xl flex flex-col items-center justify-center text-parchment-600 p-6 text-center bg-parchment-50">
              <span className="font-editorial text-4xl italic text-wine-700 mb-2">TAG</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-cosmos-950">Norilana Books</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
