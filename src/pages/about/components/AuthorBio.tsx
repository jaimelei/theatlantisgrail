import { authorBio, authorPhoto } from '../../../data/author';
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

export default function AuthorBio() {
  return (
    <section className="py-16 md:py-24 bg-parchment-100 text-cosmos-950">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Left Column - Author Photo */}
        <RevealBlock className="w-56 md:w-64 shrink-0">
          <div className="relative rounded-xl overflow-hidden border border-parchment-300 bg-parchment-200 shadow-soft">
            <img
              src={authorPhoto}
              alt="Vera Nazarian"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const el = e.currentTarget.nextElementSibling as HTMLElement;
                if (el) el.classList.remove('hidden');
              }}
            />
            <div className="w-full aspect-[4/5] bg-parchment-300 flex flex-col items-center justify-center text-center p-4 text-wine-700 hidden">
              <span className="font-display text-base font-bold uppercase">Vera Nazarian</span>
              <span className="font-editorial text-xs italic mt-1">Author Portrait</span>
            </div>
          </div>
        </RevealBlock>

        {/* Right Column - Bio Paragraphs & Pull Quote */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <RevealBlock>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-wine-700 uppercase">
              About the Author
            </h2>
          </RevealBlock>

          <div className="font-body text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
            {authorBio.map((paragraph, idx) => (
              <RevealBlock key={idx}>
                <p>{paragraph}</p>
              </RevealBlock>
            ))}
          </div>

          <RevealBlock>
            <blockquote className="font-editorial text-xl md:text-2xl italic text-wine-700 border-l-2 border-wine-500/30 pl-4 py-2 mt-4 max-w-2xl">
              "I write by the seat of my pants because my characters refuse to follow outlines."
            </blockquote>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
