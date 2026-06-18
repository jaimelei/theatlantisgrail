import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Books', path: '/books' },
    { label: 'News', path: '/news' },
    { label: 'Community', path: '/community' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 animate-fade-down ${
        isScrolled
          ? 'bg-cosmos-900/90 backdrop-blur-md border-b border-gold-400/20'
          : 'bg-transparent border-b border-gold-400/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Wordmark */}
        <Link
          to="/"
          className="font-display text-lg font-bold text-gold-400 hover:text-gold-300 transition-colors shrink-0"
        >
          THE ATLANTIS GRAIL
        </Link>

        {/* Center: Nav Links (Desktop Only) */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="relative font-body text-xs uppercase tracking-widest text-parchment-200 hover:text-gold-400 transition-colors group py-1 font-medium"
            >
              {label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
            </Link>
          ))}
        </div>

        {/* Right: CTA Button (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="px-6 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full font-body text-xs font-semibold uppercase tracking-widest text-gold-300 hover:bg-gold-400 hover:text-cosmos-950 hover:border-gold-400 transition-all duration-300"
          >
            Start Reading
          </a>
        </div>

        {/* Mobile: Hamburger Menu */}
        <button
          className="md:hidden text-gold-400 hover:text-gold-300 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu (Stub for Phase 13) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cosmos-900 border-t border-gold-400/20 px-6 py-4 space-y-3">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="block font-body text-xs uppercase tracking-widest text-parchment-200 hover:text-gold-400 transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gold-400/20">
            <a
              href="#"
              className="block text-center px-6 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full font-body text-xs font-semibold uppercase tracking-widest text-gold-300 hover:bg-gold-400 hover:text-cosmos-950 transition-all duration-300"
            >
              Start Reading
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
