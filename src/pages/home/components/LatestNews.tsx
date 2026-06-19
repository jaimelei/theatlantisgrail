import useScrollReveal from '../../../hooks/useScrollReveal';
import { newsEntries } from '../../../data/news';

// Simple date formatter (YYYY-MM-DD to Month DD, YYYY)
const formatDate = (dateStr: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
};

// Featured entry component with scroll reveal
function FeaturedEntryItem({ entry, isVisible }: { entry: typeof newsEntries[0]; isVisible: boolean }) {
  return (
    <div
      className="bg-cosmos-950/60 border border-gold-400/10 hover:border-gold-400/20 rounded-2xl p-6 md:p-10 shadow-lift transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-8 md:gap-12 items-center">
        {/* Left text column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
              {entry.category || 'News'}
            </span>
            <span className="font-mono text-xs text-cosmos-400">
              {formatDate(entry.date)}
            </span>
          </div>
          
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-parchment-50 leading-tight">
            {entry.title}
          </h3>
          
          <p className="font-body text-sm sm:text-base text-cosmos-400 leading-relaxed">
            {entry.body}
          </p>
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
            <div className="w-full h-full min-h-[200px] border border-dashed border-cosmos-800 rounded-xl flex flex-col items-center justify-center text-cosmos-700 p-6 text-center">
              <span className="font-editorial text-4xl italic mb-2">TAG</span>
              <span className="font-mono text-xs uppercase tracking-widest">Norilana Books</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// List entry component with scroll reveal
function NewsListItem({ entry, isVisible }: { entry: typeof newsEntries[0]; isVisible: boolean }) {
  return (
    <div
      className="border-t border-cosmos-800 py-6 flex flex-col md:flex-row gap-4 md:gap-8 items-start hover:bg-cosmos-950/20 px-4 rounded-lg transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      {/* Left Date Column */}
      <div className="font-mono text-sm text-gold-400 w-32 shrink-0 md:pt-1">
        {formatDate(entry.date)}
      </div>

      {/* Right Content Column */}
      <div className="flex-1 flex flex-col gap-1 text-left">
        <span className="font-mono text-[10px] text-cosmos-400 font-bold uppercase tracking-wider">
          {entry.category || 'News'}
        </span>
        <h4 className="font-display text-lg font-bold text-parchment-100 hover:text-gold-300 transition-colors cursor-pointer">
          {entry.title}
        </h4>
        <p className="font-body text-xs sm:text-sm text-cosmos-400 leading-relaxed">
          {entry.excerpt}
        </p>
      </div>
    </div>
  );
}

// Wrapper for featured entry with scroll reveal
function FeaturedEntryWrapper({ entry }: { entry: typeof newsEntries[0] }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <FeaturedEntryItem entry={entry} isVisible={isVisible} />
    </div>
  );
}

// Wrapper for list item with scroll reveal
function NewsListItemWrapper({ entry }: { entry: typeof newsEntries[0] }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <NewsListItem entry={entry} isVisible={isVisible} />
    </div>
  );
}

export default function LatestNews() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();
  const [viewAllRef, viewAllVisible] = useScrollReveal<HTMLDivElement>();

  // Slice news: first is featured, next three are list items
  const featuredEntry = newsEntries[0];
  const listEntries = newsEntries.slice(1, 4);

  return (
    <section className="relative bg-cosmos-900 py-24 overflow-hidden border-t border-gold-400/10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cosmos-800/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-16">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex items-center gap-4 transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/30" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-widest text-gold-400 text-center uppercase">
            News & Announcements
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>

        {/* Featured Entry Section */}
        {featuredEntry && <FeaturedEntryWrapper entry={featuredEntry} />}

        {/* Stacked Entries Section */}
        <div className="flex flex-col">
          {listEntries.map((entry) => (
            <NewsListItemWrapper key={entry.id} entry={entry} />
          ))}
          {/* Bottom Border for the list */}
          <div className="border-t border-cosmos-800" />
        </div>

        {/* View All Link */}
        <div
          ref={viewAllRef}
          className="flex justify-end transition-all duration-700"
          style={{
            opacity: viewAllVisible ? 1 : 0,
            transform: viewAllVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <a
            href="/news"
            className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-widest text-gold-400 hover:text-gold-300 hover:gap-3 transition-all duration-300"
          >
            View all news <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
