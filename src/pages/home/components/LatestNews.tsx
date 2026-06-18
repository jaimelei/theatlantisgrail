import useScrollReveal from '../../../hooks/useScrollReveal';
import { newsEntries } from '../../../data/news';

const revealClass = (isVisible: boolean) =>
  `transition-all duration-1000 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`;

export default function LatestNews() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLDivElement>();

  // Slice news: first is featured, next three are list items
  const featuredEntry = newsEntries[0];
  const listEntries = newsEntries.slice(1, 4);

  // Simple date formatter (YYYY-MM-DD to Month DD, YYYY)
  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <section className="relative bg-cosmos-900 py-24 overflow-hidden border-t border-gold-400/10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cosmos-800/20 via-transparent to-transparent pointer-events-none" />

      <div
        ref={sectionRef}
        className={`max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-16 ${revealClass(isVisible)}`}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/30" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-widest text-gold-400 text-center uppercase">
            News & Announcements
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>

        {/* Featured Entry Section */}
        {featuredEntry && (
          <div className="bg-cosmos-950/60 border border-gold-400/10 hover:border-gold-400/20 rounded-2xl p-6 md:p-10 shadow-lift transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-8 md:gap-12 items-center">
              {/* Left text column */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                    {featuredEntry.category || 'News'}
                  </span>
                  <span className="font-mono text-xs text-cosmos-400">
                    {formatDate(featuredEntry.date)}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-parchment-50 leading-tight">
                  {featuredEntry.title}
                </h3>
                
                <p className="font-body text-sm sm:text-base text-cosmos-400 leading-relaxed">
                  {featuredEntry.body}
                </p>
              </div>

              {/* Right image column (if present, else spacer/fallback) */}
              <div className="flex justify-center">
                {featuredEntry.image ? (
                  <div className="relative group w-48 sm:w-56 max-w-full aspect-[5/8] rounded-xl overflow-hidden border border-gold-400/20 bg-cosmos-800 shadow-lift">
                    <img
                      src={featuredEntry.image}
                      alt={featuredEntry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const el = e.currentTarget.nextElementSibling as HTMLElement;
                        if (el) el.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-cosmos-800 text-gold-400 hidden">
                      <span className="font-display text-sm tracking-wider uppercase font-semibold">
                        {featuredEntry.title}
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
        )}

        {/* Stacked Entries Section */}
        <div className="flex flex-col">
          {listEntries.map((entry) => (
            <div
              key={entry.id}
              className="border-t border-cosmos-800 py-6 flex flex-col md:flex-row gap-4 md:gap-8 items-start hover:bg-cosmos-950/20 px-4 rounded-lg transition-colors duration-200"
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
          ))}
          {/* Bottom Border for the list */}
          <div className="border-t border-cosmos-800" />
        </div>

        {/* View All Link */}
        <div className="flex justify-end">
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
