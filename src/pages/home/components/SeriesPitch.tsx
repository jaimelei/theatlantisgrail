import useScrollReveal from '../../../hooks/useScrollReveal';

const revealClass = (isVisible: boolean) =>
  `transition-all duration-1000 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

export default function SeriesPitch() {
  const [h1Ref, h1Visible] = useScrollReveal<HTMLHeadingElement>();
  const [p1Ref, p1Visible] = useScrollReveal<HTMLParagraphElement>();
  const [h2Ref, h2Visible] = useScrollReveal<HTMLHeadingElement>();
  const [p2Ref, p2Visible] = useScrollReveal<HTMLParagraphElement>();
  const [h3Ref, h3Visible] = useScrollReveal<HTMLHeadingElement>();
  const [p3Ref, p3Visible] = useScrollReveal<HTMLParagraphElement>();
  const [coverRef, coverVisible] = useScrollReveal<HTMLDivElement>();
  const [ctaRef, ctaVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative bg-parchment-100 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Right column (Cover Image) - Stacks on top on mobile */}
          <div className="flex flex-col items-center lg:items-start order-first lg:order-last">
            <div
              ref={coverRef}
              className={`relative group w-64 md:w-72 max-w-full ${revealClass(coverVisible)}`}
            >
              {/* Outer decorative shadow */}
              <div className="absolute inset-0 bg-cosmos-950/10 rounded-lg transform rotate-2 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

              <img
                src="/images/qualify.webp"
                alt="Qualify - Book 1 of The Atlantis Grail"
                className="relative z-10 w-full h-auto rounded-lg shadow-lift transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const placeholder = document.getElementById('cover-placeholder');
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />

              {/* CSS Placeholder - shown if image fails */}
              <div
                id="cover-placeholder"
                className="hidden w-full aspect-[2/3] bg-cosmos-900 rounded-lg flex-col items-center justify-center text-center p-6 text-gold-300 shadow-lift transform rotate-1 border border-gold-400/20"
              >
                <span className="font-display text-2xl font-bold tracking-wider mb-2">QUALIFY</span>
                <span className="font-body text-xs text-parchment-300">Book 1 of The Atlantis Grail</span>
              </div>
            </div>

            {/* Small CTA below cover */}
            <div ref={ctaRef} className={`mt-8 text-center lg:text-left ${revealClass(ctaVisible)}`}>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-widest text-wine-700 hover:text-wine-600 hover:gap-3 transition-all duration-300"
              >
                Get Book 1 Free <span className="text-base">→</span>
              </a>
            </div>
          </div>

          {/* Left column (Dramatic Pitch Text) */}
          <div className="flex flex-col gap-10 lg:pr-6 text-left">

            <div className="space-y-4">
              <h2 ref={h1Ref} className={`font-editorial text-3xl sm:text-4xl lg:text-5xl italic font-semibold text-wine-700 leading-tight ${revealClass(h1Visible)}`}>
                The Earth is about to be destroyed by a massive asteroid.
              </h2>
              <p ref={p1Ref} className={`font-body text-sm sm:text-base text-parchment-600 leading-relaxed font-medium ${revealClass(p1Visible)}`}>
                A mysterious space-faring race offers humanity a chance to survive. But there is a catch: only teenagers can qualify for the evacuation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 ref={h2Ref} className={`font-editorial text-3xl sm:text-4xl lg:text-5xl italic font-semibold text-wine-700 leading-tight ${revealClass(h2Visible)}`}>
                Only four stars in the sky will remain.
              </h2>
              <p ref={p2Ref} className={`font-body text-sm sm:text-base text-parchment-600 leading-relaxed font-medium ${revealClass(p2Visible)}`}>
                Gwen Lark is an ordinary, clumsy girl who doesn't think she has a chance. But she has to try, to save her family from a dying planet.
              </p>
            </div>

            <div className="space-y-4">
              <h2 ref={h3Ref} className={`font-editorial text-3xl sm:text-4xl lg:text-5xl italic font-semibold text-wine-700 leading-tight ${revealClass(h3Visible)}`}>
                Are you ready to compete against the best of humanity?
              </h2>
              <p ref={p3Ref} className={`font-body text-sm sm:text-base text-parchment-600 leading-relaxed font-medium ${revealClass(p3Visible)}`}>
                In a series of grueling physical and mental trials, Gwen must find her inner strength, navigate complex space-politics, and face the ultimate question of what it means to be human.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
