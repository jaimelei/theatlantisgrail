import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useScrollReveal from '../../../hooks/useScrollReveal';

interface ConstellationNode {
  id: string;
  name: string;
  description: string;
  url: string;
  top: number;
  left: number;
}

const nodes: ConstellationNode[] = [
  { id: 'discord',   name: 'Discord',            description: 'Join the fandom community', url: 'https://discord.gg',                  top: 15, left: 18 },
  { id: 'forum',     name: 'Forum',               description: 'Discuss theories and lore', url: 'https://forum.example.com',           top: 20, left: 43 },
  { id: 'facebook',  name: 'Facebook Group',      description: 'Connect on social media',   url: 'https://facebook.com',                top: 40, left: 43 },
  { id: 'patreon',   name: 'Patreon',             description: 'Support the author',        url: 'https://patreon.com',                 top: 60, left: 18 },
  { id: 'ream',      name: 'Ream',                description: 'Read serialized content',   url: 'https://ream.io',                     top: 70, left: 43 },
  { id: 'wiki',      name: 'TAG Wiki',            description: 'Explore the universe',      url: 'https://wiki.example.com',            top: 15, left: 75 },
  { id: 'youtube',   name: 'YouTube',             description: 'Watch behind-the-scenes',   url: 'https://youtube.com',                 top: 40, left: 83 },
  { id: 'quiz',      name: 'Color Quadrant Quiz', description: 'Discover your quadrant',    url: 'http://www.norilana.com/TAG-Quiz.htm', top: 65, left: 63 },
  { id: 'goodreads', name: 'Goodreads',           description: 'Rate and review',           url: 'https://goodreads.com',               top: 80, left: 18 },
];

const connections = [
  [0, 1],
  [1, 2],
  [3, 4],
  [5, 7],
  [2, 6],
  [2, 8],
];

interface CardPosition {
  x: number;
  y: number;
}

function TooltipCard({
  node,
  position,
  onClose,
}: {
  node: ConstellationNode;
  position: CardPosition;
  onClose: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={cardRef}
      data-constellation-card
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        zIndex: 99999,
        width: '192px',
        backgroundColor: '#0f172a',
        border: '1px solid rgba(217, 119, 6, 0.4)',
        borderRadius: '8px',
        padding: '12px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
        pointerEvents: 'auto',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 style={{ marginBottom: '4px', fontSize: '14px', color: '#f59e0b', fontFamily: 'var(--font-cinzel, serif)' }}>
        {node.name}
      </h3>
      <p style={{ marginBottom: '12px', fontSize: '12px', color: '#e7e5e4' }}>
        {node.description}
      </p>
      
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '12px', color: '#f59e0b', textDecoration: 'underline' }}
      >
        Visit →
      </a>
    </div>,
    document.body
  );
}

function ConstellationNodeItem({
  node,
  pinnedId,
  setPinnedId,
}: {
  node: ConstellationNode;
  pinnedId: string | null;
  setPinnedId: (id: string | null) => void;
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const dotRef = useRef<HTMLDivElement>(null);
  const [cardPos, setCardPos] = useState<CardPosition>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const isPinned = pinnedId === node.id;
  const isShowingCard = hovered || isPinned;

  // Compute position from the dot's natural (unscaled) rect
  const getCardPos = (): CardPosition => {
    if (!dotRef.current) return { x: 0, y: 0 };
    const rect = dotRef.current.getBoundingClientRect();
    // dot is 12px (w-3 h-3). Center x, place card 8px below bottom.
    return {
      x: rect.left + rect.width / 2 - 96,
      y: rect.top + 12 + 8, // top + natural dot height + gap, ignoring scale
    };
  };

  const handleMouseEnter = () => {
    // Capture position while dot is still unscaled
    setCardPos(getCardPos());
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Never recalculate position here — dot is already scaled 1.5x from hover,
    // which shifts the rect. Position was already set correctly on mouseEnter.
    if (isPinned) {
      setPinnedId(null);
    } else {
      setPinnedId(node.id);
    }
  };

  return (
    <div
      ref={ref}
      className="absolute cursor-pointer"
      style={{
        top: `${node.top}%`,
        left: `${node.left}%`,
        zIndex: 10,
        opacity: isVisible ? 1 : 0,
        transform: `translate(-50%, -50%) ${isVisible ? 'scale(1)' : 'scale(0.8)'}`,
        transition: 'opacity 700ms, transform 700ms',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
    >
      <div
        ref={dotRef}
        className="w-3 h-3 rounded-full bg-gold-400 shadow-glow"
        style={{
          transform: isShowingCard ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 300ms',
        }}
      />

      <div
        className="absolute text-sm pointer-events-none text-parchment-200 font-inter"
        style={{
          top: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}
      >
        {node.name}
      </div>

      {isShowingCard && (
        <TooltipCard
          node={node}
          position={cardPos}
          onClose={() => {
            setPinnedId(null);
            setHovered(false);
          }}
        />
      )}
    </div>
  );
}

function MobileNodeItem({ node }: { node: ConstellationNode }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="p-4 border rounded-lg bg-cosmos-900 border-cosmos-800"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 700ms, transform 700ms',
      }}
    >
      <h3 className="mb-1 font-cinzel text-gold-400">{node.name}</h3>
      <p className="mb-3 text-sm text-parchment-300">{node.description}</p>
      
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm underline text-gold-400 hover:text-gold-300"
      >
        Visit →
      </a>
    </div>
  );
}

export default function CommunityConstellation() {
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [headerRef, headerVisible] = useScrollReveal<HTMLHeadingElement>();

  return (
    <section className="pt-20 pb-6 bg-cosmos-950">
      <div className="px-6 mx-auto max-w-7xl">
        <h2
          ref={headerRef}
          className="mb-12 text-2xl font-bold tracking-widest text-center uppercase transition-all duration-700 font-display sm:text-3xl text-gold-400"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          The Fandom
        </h2>

        {/* Desktop: Constellation */}
        <div className="relative hidden mb-4 lg:block h-96">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            {connections.map((connection, idx) => {
              const fromNode = nodes[connection[0]];
              const toNode = nodes[connection[1]];
              return (
                <line
                  key={idx}
                  x1={`${fromNode.left}%`}
                  y1={`${fromNode.top}%`}
                  x2={`${toNode.left}%`}
                  y2={`${toNode.top}%`}
                  stroke="rgba(217, 119, 6, 0.3)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          <div className="absolute inset-0">
            {nodes.map((node) => (
              <ConstellationNodeItem
                key={node.id}
                node={node}
                pinnedId={pinnedId}
                setPinnedId={setPinnedId}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Stacked List */}
        <div className="space-y-4 lg:hidden">
          {nodes.map((node) => (
            <MobileNodeItem key={node.id} node={node} />
          ))}
        </div>
      </div>
    </section>
  );
}