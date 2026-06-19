export default function FilmCallout() {
  return (
    <section className="border-t border-gold-400/30">
      <div className="bg-cosmos-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div>
              <h2 className="font-cinzel text-2xl uppercase tracking-widest text-gold-400 mb-4">
                Optioned for Film/TV
              </h2>
              <p className="font-inter text-parchment-200 mb-6">
                Feature film and TV series development announced at Dragon*Con 2018.
              </p>
              <a
                href="https://www.imdb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-gold-400 text-gold-400 hover:bg-gold-400/10 transition-colors rounded"
              >
                View on IMDB →
              </a>
            </div>

            {/* Right Side: YouTube Embed */}
            <div className="aspect-video w-full max-w-lg mx-auto lg:mx-0">
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
