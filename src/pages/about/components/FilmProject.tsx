import useScrollReveal from '../../../hooks/useScrollReveal';

function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function FilmProject() {
  return (
    <section className="py-16 md:py-24 bg-cosmos-900 text-parchment-100 border-t border-b border-gold-400/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Details */}
        <div className="flex flex-col gap-4 text-left">
          <RevealBlock>
            <span className="font-display text-xs md:text-sm tracking-widest text-gold-400 uppercase font-bold bg-gold-500/10 border border-gold-500/20 px-3.5 py-1 rounded-full self-start">
              Optioned for Film / TV
            </span>
          </RevealBlock>
          
          <RevealBlock>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-parchment-50 leading-tight uppercase">
              The Atlantis Grail Hollywood Project
            </h2>
          </RevealBlock>
          
          <RevealBlock>
            <p className="font-editorial text-lg italic text-gold-300">
              Feature film and television series development officially announced.
            </p>
          </RevealBlock>

          <RevealBlock>
            <p className="font-body text-sm md:text-base text-cosmos-400 leading-relaxed">
              Originally announced during Dragon*Con, the epic YA science fiction saga has been optioned for development. The project includes plans for a feature film adaptation of the first book, <strong>Qualify</strong>, alongside an ongoing television series format.
            </p>
          </RevealBlock>

          <RevealBlock>
            <p className="font-body text-sm md:text-base text-cosmos-400 leading-relaxed">
              Producers and creative consultants are working to translate Gwen Lark's journey, the Atlantean Ark-Ships, and the brutal cosmic challenges of the Atlantis Grail Games into a cinematic visual masterpiece.
            </p>
          </RevealBlock>
          
          <RevealBlock className="mt-4">
            <a
              href="https://www.imdb.com/title/tt9026364/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold font-body uppercase tracking-wider bg-wine-700 hover:bg-wine-600 text-parchment-100 border border-gold-400/10 transition-all duration-300"
            >
              View on IMDb <span className="ml-1 text-sm">→</span>
            </a>
          </RevealBlock>
        </div>

        {/* Right Column - YouTube Embed */}
        <RevealBlock className="w-full flex justify-center">
          <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden border border-gold-400/20 bg-cosmos-950 shadow-lift">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/h-r0eORZW9k"
              title="The Atlantis Grail Con 2020 Hollywood Connection Panel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
