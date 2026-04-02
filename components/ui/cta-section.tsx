interface CTASectionProps {
  eyebrow?: string
  title: React.ReactNode
  body: string
  children?: React.ReactNode
}

export function CTASection({ eyebrow, title, body, children }: CTASectionProps) {
  return (
    <section className="bg-[#C41E3A] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 [background:linear-gradient(135deg,#A8182F_0%,#C41E3A_100%)]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.04]" />
      <div className="relative max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/60 font-sans mb-4">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-5xl md:text-6xl font-light text-[#F5F0E8] leading-tight mb-6">
          {title}
        </h2>
        <p className="text-[#F5F0E8]/65 mb-10 font-sans text-[14px] leading-relaxed max-w-xl mx-auto">
          {body}
        </p>
        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
