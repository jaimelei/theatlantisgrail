import { newsEntries } from '../../data/news';
import FeaturedNews from './components/FeaturedNews';
import NewsEntry from './components/NewsEntry';
import useScrollReveal from '../../hooks/useScrollReveal';

const progressItems = [
  {
    title: 'DEA',
    series: 'Dawn of the Atlantis Grail #2',
    progress: '5.53%',
    stats: '11,057 / 200,000 words',
    chapter: 'Chapter 4',
    barColor: 'bg-gold-400',
    customProperty: '5.53%'
  },
  {
    title: 'AMREVET DAYS TWO',
    series: 'The Atlantis Grail Spinoff',
    progress: '18.79%',
    stats: '37,580 / 200,000 words',
    chapter: 'Chapter 9',
    barColor: 'bg-gold-400',
    customProperty: '18.79%'
  }
];

// Pinned Progress Card component
function ProgressCard({ item, isVisible }: { item: typeof progressItems[0]; isVisible: boolean }) {
  return (
    <div
      className="flex-1 min-w-[280px] md:min-w-[340px] bg-white border border-parchment-300 rounded-xl p-6 shadow-soft flex flex-col justify-between transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
        <div>
          <h4 className="font-display text-lg font-bold tracking-wide text-wine-700 uppercase">
            {item.title}
          </h4>
          <p className="font-body text-xs text-parchment-600 font-medium">
            {item.series}
          </p>
        </div>
        <div className="text-left sm:text-right font-mono text-xs text-cosmos-900 font-bold">
          {item.stats} <span className="text-wine-700">({item.progress})</span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full bg-cosmos-800 rounded-full h-2.5 overflow-hidden shadow-inner mb-3">
        <div
          className={`h-full rounded-full ${item.barColor} ${isVisible ? 'animate-progress-fill' : 'w-0'}`}
          style={{
            ['--progress-width' as any]: item.customProperty
          }}
        />
      </div>

      {/* Chapter Status */}
      <div className="flex justify-between items-center text-[10px] font-body text-parchment-600 font-semibold">
        <span>Status: Writing in Progress</span>
        <span className="bg-parchment-100 px-2 py-0.5 rounded text-cosmos-900 font-bold">
          Current: {item.chapter}
        </span>
      </div>
    </div>
  );
}

function ProgressCardWrapper({ item }: { item: typeof progressItems[0] }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <ProgressCard item={item} isVisible={isVisible} />
    </div>
  );
}

export default function NewsPage() {
  const [revealRef, revealVisible] = useScrollReveal<HTMLDivElement>();
  const featuredEntry = newsEntries[0];
  const otherEntries = newsEntries.slice(1);

  return (
    <div className="bg-parchment-100 min-h-screen text-cosmos-950 selection:bg-wine-700 selection:text-parchment-50">
      {/* Page Hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmos-900 via-cosmos-950 to-cosmos-950 overflow-hidden border-b border-gold-400/10 text-parchment-100">
        {/* Ambient star particles / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(232,184,74,0.05),_transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col gap-4 animate-fade-down">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-parchment-50 uppercase">
            News & Announcements
          </h1>
          <p className="font-editorial text-lg md:text-xl italic text-gold-300 max-w-2xl mx-auto mt-2">
            The latest updates, book releases, and giveaways from the universe of Vera Nazarian.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col gap-12">
        {/* Currently Writing Pinned Card */}
        <div 
          ref={revealRef} 
          className={`transition-all duration-1000 ease-out transform ${
            revealVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } p-6 md:p-8 bg-parchment-200/50 border border-parchment-300 rounded-2xl`}
        >
          <div className="text-left mb-6">
            <h3 className="font-display text-sm tracking-wider uppercase font-bold text-wine-700">
              Pinned: Currently Writing
            </h3>
            <p className="font-editorial text-base italic text-parchment-600 mt-1">
              Live updates on ongoing projects direct from the author
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {progressItems.map((item) => (
              <ProgressCardWrapper key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Featured News Block */}
        {featuredEntry && (
          <div className="mt-4">
            <FeaturedNews entry={featuredEntry} />
          </div>
        )}

        {/* Other News Entries Feed */}
        {otherEntries.length > 0 && (
          <div className="flex flex-col">
            <h3 className="font-display text-lg tracking-widest uppercase font-bold text-cosmos-950 border-b border-parchment-300 pb-4 mb-2 text-left">
              Previous Announcements
            </h3>
            <div className="flex flex-col">
              {otherEntries.map((entry) => (
                <NewsEntry key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
