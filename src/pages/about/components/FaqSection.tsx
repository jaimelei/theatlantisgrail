import { faqEntries } from '../../../data/faq';
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

function FaqItem({ faq }: { faq: typeof faqEntries[0] }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <details
        className="group bg-white border border-parchment-300 rounded-xl p-5 md:p-6 shadow-soft cursor-pointer text-left transition-all duration-300 hover:border-wine-500/20"
      >
        <summary className="font-display text-sm md:text-base font-bold uppercase tracking-wider text-cosmos-950 flex items-center justify-between list-none focus:outline-none">
          <span>{faq.question}</span>
          <svg
            className="w-4 h-4 text-wine-700 transform transition-transform duration-300 group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        
        <div className="mt-4 font-body text-xs md:text-sm text-parchment-600 leading-relaxed border-t border-parchment-200/60 pt-4">
          {faq.isReadingOrder ? (
            <div className="flex flex-col gap-3">
              <p>{faq.answer}</p>
              <ol className="list-decimal pl-5 space-y-1 font-semibold text-cosmos-900">
                <li>Qualify (Original Series, Book 1)</li>
                <li>Compete (Original Series, Book 2)</li>
                <li>Aeson: Blue (Novella, Book 1)</li>
                <li>Aeson: Black (Novella, Book 2)</li>
                <li>Win (Original Series, Book 3)</li>
                <li>Survive (Original Series, Book 4)</li>
                <li>Eos (Prequel Series, Book 1)</li>
                <li>Dea (Prequel Series, Book 2 - Coming Next)</li>
              </ol>
            </div>
          ) : (
            <p>{faq.answer}</p>
          )}
        </div>
      </details>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-parchment-50 text-cosmos-950">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-8">
        
        <RevealBlock className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-wine-700 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="font-editorial text-base md:text-lg italic text-parchment-600 mt-2">
            Details about writing styles, sequencing, page counts, and adaptations
          </p>
        </RevealBlock>

        <div className="flex flex-col gap-4 mt-6">
          {faqEntries.map((faq, idx) => (
            <FaqItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
