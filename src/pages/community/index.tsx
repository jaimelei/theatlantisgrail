import { communityGroups } from '../../data/community';
import CommunityGroup from './components/CommunityGroup';

export default function CommunityPage() {
  return (
    <div className="bg-parchment-100 min-h-screen selection:bg-wine-700 selection:text-parchment-50">
      {/* Page Hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmos-900 via-cosmos-950 to-cosmos-950 overflow-hidden border-b border-gold-400/10 text-parchment-100">
        {/* Ambient star particles / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(232,184,74,0.05),_transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col gap-4 animate-fade-down">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-parchment-50 uppercase">
            Official Communities & Resources
          </h1>
          <p className="font-editorial text-lg md:text-xl italic text-gold-300 max-w-2xl mx-auto mt-2">
            Join the conversation, explore Atlantean lore, find community hubs, and support the creator.
          </p>
        </div>
      </section>

      {/* Alternating Groups Feed */}
      <div>
        {communityGroups.map((group, index) => {
          // Alternating backgrounds: parchment-100 and parchment-50
          const bgClass = index % 2 === 0 ? 'bg-parchment-100' : 'bg-parchment-50';
          const borderClass = index > 0 ? 'border-t border-parchment-300/40' : '';

          return (
            <section key={group.id} className={`${bgClass} ${borderClass} py-16 md:py-24`}>
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <CommunityGroup group={group} />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
