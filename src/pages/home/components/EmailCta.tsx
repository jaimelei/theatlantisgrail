import { useState } from 'react';
import useScrollReveal from '../../../hooks/useScrollReveal';

export default function EmailCta() {
  const [email, setEmail] = useState('');
  const [sectionRef, sectionVisible] = useScrollReveal<HTMLDivElement>();
  const [leftRef, leftVisible] = useScrollReveal<HTMLDivElement>();
  const [rightRef, rightVisible] = useScrollReveal<HTMLDivElement>();

  // Individual reveal for each quadrant strip (default/sm only — synced to section at md+)
  const [redRef, redVisible] = useScrollReveal<HTMLDivElement>();
  const [blueRef, blueVisible] = useScrollReveal<HTMLDivElement>();
  const [greenRef, greenVisible] = useScrollReveal<HTMLDivElement>();
  const [yellowRef, yellowVisible] = useScrollReveal<HTMLDivElement>();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional demo
    console.log('Subscribe clicked with email:', email);
  };

  return (
    <section className="py-16 bg-parchment-100">
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
          {/* Left: Email Signup */}
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
            <h2 className="mb-4 text-3xl font-cinzel text-cosmos-950">
              Never miss a release
            </h2>

            <p className="mb-6 font-inter text-cosmos-800">
              Get notified when new books launch and exclusive announcements go
              out.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
                className="flex-1 px-4 py-2 bg-white border rounded cursor-not-allowed border-cosmos-200 text-cosmos-950 placeholder-cosmos-400 focus:outline-none focus:border-gold-400 opacity-60"
              />

              <button
                type="submit"
                className="px-6 py-2 font-semibold transition-colors rounded bg-gold-400 text-cosmos-950 font-inter hover:bg-gold-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right: Color Quadrant Quiz */}
          <div className="lg:pl-12">
            {/* Header */}
            <div
              ref={rightRef}
              className="flex flex-col gap-4 mb-5 transition-all duration-700 sm:flex-row sm:items-center sm:justify-between opacity-[var(--right-opacity)] [transform:translateY(var(--right-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
              style={
                {
                  '--right-opacity': rightVisible ? 1 : 0,
                  '--right-y': rightVisible ? '0px' : '16px',
                } as React.CSSProperties
              }
            >
              <h3 className="text-2xl font-cinzel text-cosmos-950">
                Discover Your Quadrant
              </h3>

              <a
                href="http://www.norilana.com/TAG-Quiz.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold transition-colors border rounded-lg border-gold-400 text-cosmos-950 hover:bg-gold-400 w-fit"
              >
                Take Quiz →
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Red */}
              <div
                ref={redRef}
                className="p-3 bg-white border rounded-lg border-cosmos-200 transition-all duration-700 opacity-[var(--red-opacity)] [transform:translateY(var(--red-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
                style={
                  {
                    '--red-opacity': redVisible ? 1 : 0,
                    '--red-y': redVisible ? '0px' : '16px',
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="font-semibold text-cosmos-950">Red</span>
                </div>
                <p className="text-xs leading-relaxed text-cosmos-700">
                  Action • Passion • Courage
                </p>
              </div>

              {/* Blue */}
              <div
                ref={blueRef}
                className="p-3 bg-white border rounded-lg border-cosmos-200 transition-all duration-700 opacity-[var(--blue-opacity)] [transform:translateY(var(--blue-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
                style={
                  {
                    '--blue-opacity': blueVisible ? 1 : 0,
                    '--blue-y': blueVisible ? '0px' : '16px',
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="font-semibold text-cosmos-950">Blue</span>
                </div>
                <p className="text-xs leading-relaxed text-cosmos-700">
                  Logic • Knowledge • Wisdom
                </p>
              </div>

              {/* Green */}
              <div
                ref={greenRef}
                className="p-3 bg-white border rounded-lg border-cosmos-200 transition-all duration-700 opacity-[var(--green-opacity)] [transform:translateY(var(--green-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
                style={
                  {
                    '--green-opacity': greenVisible ? 1 : 0,
                    '--green-y': greenVisible ? '0px' : '16px',
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="font-semibold text-cosmos-950">Green</span>
                </div>
                <p className="text-xs leading-relaxed text-cosmos-700">
                  Growth • Balance • Harmony
                </p>
              </div>

              {/* Yellow */}
              <div
                ref={yellowRef}
                className="p-3 bg-white border rounded-lg border-cosmos-200 transition-all duration-700 opacity-[var(--yellow-opacity)] [transform:translateY(var(--yellow-y))] md:opacity-[var(--section-opacity)] md:[transform:translateY(var(--section-y))]"
                style={
                  {
                    '--yellow-opacity': yellowVisible ? 1 : 0,
                    '--yellow-y': yellowVisible ? '0px' : '16px',
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#e8b84a' }}
                  />
                  <span className="font-semibold text-cosmos-950">
                    Yellow
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-cosmos-700">
                  Joy • Creativity • Hope
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}