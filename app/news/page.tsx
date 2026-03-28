import { db } from '@/db';
import { news as newsTable } from '@/db/schema';

export default async function NewsPage() {
  const news = await db.select().from(newsTable).orderBy(newsTable.id);

  const categories = ['All', 'Achievement', 'Infrastructure', 'Results', 'Sports', 'Programs', 'Environment', 'Alumni', 'Community'];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      {/* Page Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.04]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(196,30,58,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-5 h-px bg-[#C41E3A]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">Latest</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
            News &amp; Updates
          </h1>
          <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
            Stay informed about the latest happenings at Merryland
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-sans transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-[#C41E3A] text-[#F5F0E8]'
                    : 'border border-white/[0.08] text-[#F5F0E8]/40 hover:border-[#C41E3A]/40 hover:text-[#F5F0E8]/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {news.map((item, i) => (
              <article
                key={item.id}
                className="bg-[#161616] border border-white/[0.05] overflow-hidden group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.08)] transition-all duration-300 relative flex flex-col"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-transparent group-hover:bg-[#C41E3A] transition-colors duration-300" />

                {/* Header band */}
                <div className="bg-[#121212] px-7 py-5 flex items-center justify-between border-b border-white/[0.04]">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#C41E3A] font-sans border border-[#C41E3A]/30 px-2 py-0.5">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-[#D4A853]/50 tracking-wider font-sans">{item.date}</span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-display text-3xl font-light text-[#C41E3A]/15 flex-shrink-0 leading-none mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-[#F5F0E8] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[13px] text-[#F5F0E8]/40 leading-relaxed font-sans flex-grow mb-6">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[#C41E3A] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-sans">Read More</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#161616] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans mb-4">Newsletter</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-4">
            Stay<br />
            <span className="italic">Updated</span>
          </h2>
          <p className="text-[13px] text-[#F5F0E8]/45 font-sans leading-relaxed mb-10">
            Subscribe to receive the latest news and updates from Merryland.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-3.5 bg-[#1A1A1A] border border-white/[0.08] text-[#F5F0E8] placeholder:text-[#F5F0E8]/20 text-[13px] font-sans outline-none focus:border-[#C41E3A]/50 transition-colors"
            />
            <button className="px-7 py-3.5 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-[#A8182F] transition-colors duration-300 flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
