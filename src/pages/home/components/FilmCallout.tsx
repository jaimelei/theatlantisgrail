import useScrollReveal from '../../../hooks/useScrollReveal';

export default function FilmCallout() {
  const [sectionRef, sectionVisible] = useScrollReveal<HTMLDivElement>();
  const [leftRef, leftVisible] = useScrollReveal<HTMLDivElement>();
  const [rightRef, rightVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="border-t border-gold-400/30">
      <div className="py-20 bg-cosmos-900">
        <div className="px-6 mx-auto max-w-7xl">
          <div
            ref={sectionRef}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
            style={
              {
                '--section-opacity': sectionVisible ? 1 : 0,
                '--section-y': sectionVisible ? '0px' : '16px',
              } as React.CSSProperties
            }
          >
            {/* Left Side: Text Content */}
            <div
              ref={leftRef}
              className="transition-all duration-700 opacity-[var(--left-opacity)] [transform:translateY(var(--left-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
              style={
                {
                  '--left-opacity': leftVisible ? 1 : 0,
                  '--left-y': leftVisible ? '0px' : '16px',
                } as React.CSSProperties
              }
            >
              <h2 className="mb-4 text-2xl tracking-widest uppercase font-cinzel text-gold-400">
                Optioned for Film/TV
              </h2>
              <p className="mb-6 font-inter text-parchment-200">
                Feature film and TV series development announced at Dragon*Con 2018.
              </p>
              <a
                href="https://www.imdb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 transition-colors border rounded border-gold-400 text-gold-400 hover:bg-gold-400/10"
              >
                View on IMDB →
              </a>
            </div>

            {/* Right Side: YouTube Embed */}
            <div
              ref={rightRef}
              className="aspect-video w-full max-w-lg mx-auto lg:mx-0 transition-all duration-700 opacity-[var(--right-opacity)] [transform:translateY(var(--right-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
              style={
                {
                  '--right-opacity': rightVisible ? 1 : 0,
                  '--right-y': rightVisible ? '0px' : '16px',
                } as React.CSSProperties
              }
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/h-r0eORZW9k"
                title="TAG Con 2020 Hollywood Connection Panel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}