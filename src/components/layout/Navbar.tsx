import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const timer = setTimeout(() => setAnimateMenu(true), 50);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      setAnimateMenu(false);
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Books', path: '/books' },
    { label: 'News', path: '/news' },
    { label: 'Community', path: '/community' },
    { label: 'About', path: '/about' },
  ];

  const mobileMenu = isMobileMenuOpen && createPortal(
    // Outer layer: solid, opaque background, NEVER animated. Fixed + full
    // viewport height/width so it always covers the entire screen, no
    // matter what transforms/animations are happening on <nav>.
    <div className="fixed inset-0 h-dvh w-screen bg-cosmos-950 z-[100] md:hidden overflow-y-auto">
      <button
        className="fixed top-6 right-6 text-gold-400 hover:text-gold-300 transition-colors text-3xl focus:outline-none z-10"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* Inner layer: min-h-full (not h-full) so if content is ever taller
          than the screen, the scrollable area grows with it instead of
          centering off both edges and clipping the top half. Only this
          layer (and its children) animate opacity/position. */}
      <div className={`min-h-full flex flex-col items-center justify-center gap-6 px-6 py-20 transition-opacity duration-500 ${animateMenu ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="flex flex-col items-center gap-5">
          {navLinks.map(({ label, path }, idx) => (
            <Link
              key={path}
              to={path}
              className={`font-display text-xl uppercase tracking-widest text-parchment-200 hover:text-gold-400 transition-all duration-500 transform ${animateMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className={`pt-4 border-t border-gold-400/20 w-48 text-center transition-all duration-500 transform ${animateMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: `${navLinks.length * 75}ms` }}>
          <Link
            to="/books"
            className="block px-6 py-3 bg-gold-400/10 border border-gold-400/30 rounded-full font-body text-xs font-semibold uppercase tracking-widest text-gold-300 hover:bg-gold-400 hover:text-cosmos-950 hover:border-gold-400 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Reading
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 animate-fade-down ${isScrolled
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
            <Link
              to="/books"
              className="px-6 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full font-body text-xs font-semibold uppercase tracking-widest text-gold-300 hover:bg-gold-400 hover:text-cosmos-950 hover:border-gold-400 transition-all duration-300"
            >
              Start Reading
            </Link>
          </div>

          {/* Mobile: Hamburger Menu */}
          <button
            className="md:hidden text-gold-400 hover:text-gold-300 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
}