interface PageHeaderProps {
  badge: string
  title: React.ReactNode
  subtitle: string
}

export function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.04]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(196,30,58,0.12) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-5 h-px bg-[#C41E3A]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">{badge}</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
          {title}
        </h1>
        <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
