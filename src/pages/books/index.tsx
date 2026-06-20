import { books } from '../../data/books';
import SeriesGroup from './components/SeriesGroup';
import ReadingOrder from './components/ReadingOrder';

export default function BooksPage() {
  const originalBooks = books.filter((b) => b.series === 'original');
  const prequelBooks = books.filter((b) => b.series === 'prequel');
  const novellaBooks = books.filter((b) => b.series === 'novella');
  const extraBooks = books.filter((b) => b.series === 'extras');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cosmos-950 min-h-screen text-parchment-100 selection:bg-wine-700 selection:text-parchment-50">
      {/* Page Hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmos-900 via-cosmos-950 to-cosmos-950 overflow-hidden border-b border-gold-400/10">
        {/* Ambient star particles / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(232,184,74,0.05),_transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col gap-4 animate-fade-down">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-parchment-50 uppercase">
            The Atlantis Grail Bibliography
          </h1>
          <p className="font-editorial text-lg md:text-xl italic text-gold-300 max-w-2xl mx-auto mt-2">
            Explore the main novels, prequels, character-focused novellas, and superfan universe guides.
          </p>
        </div>
      </section>

      {/* Floating Series Navigation Card */}
      <div className="fixed bottom-6 right-6 z-40 bg-cosmos-900/95 backdrop-blur-md border border-gold-400/25 p-4 rounded-xl shadow-lift w-44 md:w-48 transition-all duration-300 hover:border-gold-400">
        <h4 className="font-display text-[10px] tracking-widest uppercase font-bold text-gold-400 border-b border-gold-400/20 pb-2 mb-2">
          Series Index
        </h4>
        <nav className="flex flex-col gap-2 font-display text-[11px] font-bold uppercase tracking-wider text-parchment-200">
          <a
            href="#original"
            onClick={(e) => handleScroll(e, 'original')}
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
            Original Series
          </a>
          <a
            href="#prequel"
            onClick={(e) => handleScroll(e, 'prequel')}
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
            Prequels
          </a>
          <a
            href="#novella"
            onClick={(e) => handleScroll(e, 'novella')}
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
            Novellas
          </a>
          <a
            href="#extras"
            onClick={(e) => handleScroll(e, 'extras')}
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
            Extras
          </a>
          <a
            href="#reading-order"
            onClick={(e) => handleScroll(e, 'reading-order')}
            className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
            Reading Order
          </a>
        </nav>
      </div>

      {/* Series Sections */}
      <section className="bg-cosmos-900/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex flex-col gap-12">
          <div id="original" className="scroll-mt-28">
            <SeriesGroup title="The Atlantis Grail — Original Series" books={originalBooks} />
          </div>
          <div id="prequel" className="scroll-mt-28">
            <SeriesGroup title="Dawn of the Atlantis Grail (Prequels)" books={prequelBooks} />
          </div>
          <div id="novella" className="scroll-mt-28">
            <SeriesGroup title="The Atlantis Grail Novellas" books={novellaBooks} />
          </div>
          <div id="extras" className="scroll-mt-28">
            <SeriesGroup title="Superfan Extras" books={extraBooks} />
          </div>
        </div>
      </section>

      {/* Reading Order Panel */}
      <div id="reading-order" className="scroll-mt-28">
        <ReadingOrder />
      </div>
    </div>
  );
}
