import useScrollReveal from '../../../hooks/useScrollReveal';

const revealClass = (isVisible: boolean) =>
  `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

export default function WritingProgress() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLDivElement>();

  const progressItems = [
    {
      title: 'DEA',
      series: 'Dawn of the Atlantis Grail #2',
      progress: '5.53%',
      stats: '11,057 / 200,000 words',
      chapter: 'Chapter 4',
      barColor: 'bg-green-500',
      customProperty: '5.53%'
    },
    {
      title: 'AMREVET DAYS TWO',
      series: 'The Atlantis Grail Spinoff',
      progress: '18.79%',
      stats: '37,580 / 200,000 words',
      chapter: 'Chapter 9',
      barColor: 'bg-wine-500',
      customProperty: '18.79%'
    }
  ];

  return (
    <section className="relative bg-parchment-100 py-16 border-t border-parchment-300">
      <div
        ref={sectionRef}
        className={`max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12 ${revealClass(isVisible)}`}
      >
        {/* Section Header Label */}
        <div className="text-center">
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl italic font-semibold text-wine-700 leading-tight">
            What the author is working on right now...
          </h2>
        </div>

        {/* Progress Cards Container */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {progressItems.map((item) => (
            <div
              key={item.title}
              className="flex-1 min-w-[280px] md:min-w-[360px] max-w-md bg-parchment-50 border border-parchment-300 rounded-xl p-6 shadow-soft flex flex-col justify-between"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-wine-700 uppercase">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-parchment-600 font-medium">
                    {item.series}
                  </p>
                </div>
                <div className="text-left sm:text-right font-mono text-sm text-cosmos-900 font-bold">
                  {item.stats} <span className="text-wine-700">({item.progress})</span>
                </div>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full bg-cosmos-800 rounded-full h-3 overflow-hidden shadow-inner mb-3">
                <div
                  className={`h-full rounded-full ${item.barColor} ${isVisible ? 'animate-progress-fill' : 'w-0'
                    }`}
                  style={{
                    ['--progress-width' as any]: item.customProperty
                  }}
                />
              </div>

              {/* Chapter Status */}
              <div className="flex justify-between items-center text-xs font-body text-parchment-600 font-semibold">
                <span>Status: Writing in Progress</span>
                <span className="bg-parchment-200 px-2 py-1 rounded text-cosmos-900 font-bold">
                  Current: {item.chapter}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
