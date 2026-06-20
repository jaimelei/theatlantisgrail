import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cosmos-950 flex items-center justify-start overflow-hidden pt-20">
      {/* Ambient background elements */}
      <div className="hero-stars absolute inset-0 z-0" />
      <div className="hero-stars-secondary absolute inset-0 z-0" />
      <div className="hero-twinkle absolute inset-0 z-0" />
      <div className="hero-nebula absolute inset-0 z-0" />
      <div className="hero-glow absolute inset-0 z-0" />

      {/* Floating background particles */}
      <div className="hero-particle hero-particle-1" />
      <div className="hero-particle hero-particle-2" />
      <div className="hero-particle hero-particle-3" />
      <div className="hero-particle hero-particle-4" />
      <div className="hero-particle hero-particle-5" />
      <div className="hero-particle hero-particle-6" />

      {/* Giant Watermark Logo - positioned on the right */}
      <div className="absolute right-[-10%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[85vh] h-[85vh] z-0 pointer-events-none opacity-[0.08] lg:opacity-[0.14] transition-all duration-1000 flex items-center justify-center">
        <div className="relative w-full h-full hero-logo-container">
          <div className="hero-logo-bloom" />
          <div className="hero-logo-ring" />
          <div className="hero-logo-ring-inner" />
          <img
            src="/images/grail-logo.webp"
            alt="The Atlantis Grail watermark"
            className="w-full h-full object-contain animate-grail-pulse select-none filter drop-shadow-[0_0_50px_rgba(232,184,74,0.2)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Content Container (Left-aligned & offset for the watermark layout) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex flex-col items-start text-left">

        {/* Author Byline */}
        <div className="hero-enter hero-enter-delay-1 mb-4">
          <p className="font-body text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gold-400">
            by Vera Nazarian
          </p>
          <div className="w-12 h-[1px] bg-gold-400/50 mt-2 tracking-widest" />
        </div>

        {/* Series Title */}
        <h1 className="hero-enter hero-enter-delay-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-parchment-50 via-gold-300 to-gold-400 tracking-wide mb-6 leading-[1.1]">
          THE ATLANTIS<br />GRAIL
        </h1>

        {/* Tagline - Italic Serif */}
        <p className="hero-enter hero-enter-delay-3 font-editorial text-2xl sm:text-3xl md:text-4xl italic text-wine-400 max-w-2xl mb-12 leading-relaxed font-light">
          You have two options. <br className="hidden sm:inline" />You die or you Qualify.
        </p>

        {/* CTA Buttons - Side by Side */}
        <div className="hero-enter hero-enter-delay-4 flex flex-wrap gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            to="/books"
            className="hero-btn-primary flex-1 sm:flex-none text-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-cosmos-950 font-body text-xs md:text-sm font-bold tracking-wider uppercase rounded-lg hover:from-gold-400 hover:to-gold-300 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-0.5"
          >
            Get Book 1 Free
          </Link>
          <Link
            to="/books"
            className="hero-btn-outline flex-1 sm:flex-none text-center px-8 py-4 border border-gold-400/50 text-gold-300 font-body text-xs md:text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Series
          </Link>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 z-10 hero-scroll-indicator">
        <span className="font-body text-[10px] tracking-[0.25em] text-gold-400/60 uppercase select-none">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
