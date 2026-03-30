interface SectionHeaderProps {
  number: string
  tag: string
  title: string
  mb?: string
}

export function SectionHeader({ number, tag, title, mb }: SectionHeaderProps) {
  return (
    <div className={`flex items-start gap-6 ${mb ?? 'mb-16'}`}>
      <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">{number}</span>
      <div>
        <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">{tag}</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">{title}</h2>
      </div>
    </div>
  )
}
