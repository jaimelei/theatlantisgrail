import { otherWorks } from '../../../data/author';
import useScrollReveal from '../../../hooks/useScrollReveal';

export default function OtherWorks() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="py-12 bg-parchment-50 border-t border-b border-parchment-300/40 text-cosmos-950">
      <div className={`max-w-6xl mx-auto px-6 md:px-12 lg:px-16 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } text-left`}>
        <h3 className="font-display text-xs md:text-sm tracking-widest text-parchment-600 uppercase mb-4 font-bold">
          Other Publications by Vera Nazarian
        </h3>
        
        {/* Horizontal scrollable row */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
          {otherWorks.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white border border-parchment-300 hover:border-wine-500 rounded-lg px-4 py-3 text-xs md:text-sm font-body font-semibold text-cosmos-950 hover:text-wine-700 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              {work.title} <span className="text-wine-500/80 font-normal">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
