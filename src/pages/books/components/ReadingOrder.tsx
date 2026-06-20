import type { Book } from '../../../types';
import { books } from '../../../data/books';
import useScrollReveal from '../../../hooks/useScrollReveal';

const RECOMMENDED_ORDER = [
  'qualify',
  'compete',
  'aeson-blue',
  'aeson-black',
  'win',
  'survive',
  'book-of-everything',
  'eos',
  'dea',
  'niktos',
  'ghost',
  'starlight',
  'xelio-red',
  'tag-companion',
  'people-of-tag'
];

interface ReadingOrderItemProps {
  book: Book;
  idx: number;
}

function ReadingOrderItem({ book, idx }: ReadingOrderItemProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`flex items-center gap-3 p-4 border border-parchment-200 rounded-lg bg-parchment-50 hover:bg-parchment-200/50 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <span className="font-mono text-lg font-bold text-wine-700 w-6 text-center shrink-0">
        {idx + 1}
      </span>

      {/* Tiny Thumbnail */}
      <div className="w-10 aspect-[5/8] shrink-0 relative rounded bg-cosmos-800 border border-gold-400/20 overflow-hidden shadow-sm">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const el = e.currentTarget.nextElementSibling as HTMLElement;
            if (el) el.classList.remove('hidden');
          }}
        />
        <div className="absolute inset-0 bg-cosmos-800 text-[6px] text-gold-400 flex items-center justify-center text-center p-0.5 font-bold uppercase hidden">
          {book.title.substring(0, 3)}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-display text-sm md:text-base font-bold text-cosmos-950 truncate">
          {book.title}
        </h4>
        <p className="font-body text-xs text-parchment-600 truncate">
          {book.seriesName} {book.status !== 'available' && `(${book.status === 'coming-next' ? 'Coming Next' : 'Forthcoming'})`}
        </p>
      </div>
    </div>
  );
}

export default function ReadingOrder() {
  // Map the books to their recommended order
  const orderedBooks = RECOMMENDED_ORDER.map(slug => books.find(b => b.slug === slug)).filter(Boolean) as Book[];

  return (
    <section className="py-16 bg-parchment-100 text-cosmos-950 border-t border-parchment-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <div className="text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wider text-wine-700 uppercase">
            Recommended Reading Order
          </h3>
          <p className="font-editorial text-lg italic text-parchment-600 mt-2">
            The optimal sequence to experience the cosmic saga
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orderedBooks.map((book, idx) => (
            <ReadingOrderItem key={book.slug} book={book} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}