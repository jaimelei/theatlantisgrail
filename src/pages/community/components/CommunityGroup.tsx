import type { CommunityGroup as CommunityGroupType } from '../../../types';
import CommunityItem from './CommunityItem';
import useScrollReveal from '../../../hooks/useScrollReveal';

interface CommunityGroupProps {
  group: CommunityGroupType;
}

export default function CommunityGroup({ group }: CommunityGroupProps) {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Group Header Info */}
      <div
        ref={headerRef}
        className={`text-center md:text-left transition-all duration-1000 ease-out transform ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-widest text-wine-700 uppercase mb-2">
          {group.title}
        </h3>
        {group.description && (
          <p className="font-editorial text-base md:text-lg italic text-parchment-600">
            {group.description}
          </p>
        )}
        <div className="h-[1px] w-full bg-gradient-to-r from-parchment-300 via-transparent to-transparent mt-4" />
      </div>

      {/* Grid of Community Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        {group.links.map((link, idx) => (
          <CommunityItem key={link.name} link={link} index={idx} />
        ))}
      </div>
    </div>
  );
}
