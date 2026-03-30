interface Stat {
  number: string
  label: string
  sub?: string
}

interface StatsBarProps {
  stats: Stat[]
  cols?: 3 | 4
}

export function StatsBar({ stats, cols }: StatsBarProps) {
  const effectiveCols = cols ?? (stats.length <= 3 ? 3 : 4)
  const gridClass =
    effectiveCols === 3
      ? 'max-w-3xl mx-auto grid grid-cols-3'
      : 'max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4'

  return (
    <section className="bg-[#161616] border-y border-white/[0.04] py-14 px-4 sm:px-6 lg:px-8">
      <div className={gridClass}>
        {stats.map((stat, i) => (
          <div key={i} className={`text-center px-6 py-6 ${i < stats.length - 1 ? 'border-r border-[#C41E3A]/15' : ''}`}>
            <div className="font-display text-4xl md:text-5xl font-light text-[#D4A853] mb-2 leading-none">
              {stat.number}
            </div>
            <div className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans">
              {stat.label}
            </div>
            {stat.sub && (
              <div className="text-[9px] text-[#F5F0E8]/20 font-sans mt-1">{stat.sub}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
