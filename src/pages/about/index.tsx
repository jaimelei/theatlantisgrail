import AuthorBio from './components/AuthorBio';
import OtherWorks from './components/OtherWorks';
import FilmProject from './components/FilmProject';
import FaqSection from './components/FaqSection';

export default function AboutPage() {
  return (
    <div className="bg-parchment-100 min-h-screen selection:bg-wine-700 selection:text-parchment-50">
      {/* Page Hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmos-900 via-cosmos-950 to-cosmos-950 overflow-hidden border-b border-gold-400/10 text-parchment-100">
        {/* Ambient star particles / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(232,184,74,0.05),_transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col gap-4 animate-fade-down">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-parchment-50 uppercase">
            The Author & Adaptations
          </h1>
          <p className="font-editorial text-lg md:text-xl italic text-gold-300 max-w-2xl mx-auto mt-2">
            Meet Vera Nazarian, explore the film project development, and browse frequently asked questions.
          </p>
        </div>
      </section>

      {/* Page Sections */}
      <div>
        <AuthorBio />
        <OtherWorks />
        <FilmProject />
        <FaqSection />
      </div>
    </div>
  );
}
