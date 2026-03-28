import Image from 'next/image';
import { db } from '@/db';
import { boardPassers as boardPassersTable } from '@/db/schema';

export default async function BoardPassers() {
  const passers = await db.select().from(boardPassersTable).orderBy(boardPassersTable.id);

  const stats = [
    { number: '85%', label: 'Board Exam Pass Rate' },
    { number: '42', label: 'Passers This Year' },
    { number: '12', label: 'Top Performers' },
  ];

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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">Achievement</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
            Board Passers
          </h1>
          <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
            Celebrating our students who achieved excellence in their exams
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#161616] border-b border-white/[0.04] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center px-6 py-6 ${i < 2 ? 'border-r border-[#C41E3A]/15' : ''}`}>
              <div className="font-display text-4xl md:text-5xl font-light text-[#D4A853] mb-2 leading-none">
                {stat.number}
              </div>
              <div className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Passers Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">01</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">November 2025</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Board Passers Gallery
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {passers.map((passer) => (
              <div
                key={passer.id}
                className="bg-[#161616] border border-white/[0.05] overflow-hidden group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.1)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#C41E3A] z-10" />
                  <Image
                    src={passer.image}
                    alt={passer.name}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-[#F5F0E8] mb-2 leading-tight">
                    {passer.name}
                  </h3>
                  <p className="text-[12px] text-[#D4A853] font-sans mb-1 leading-snug">
                    {passer.exam}
                  </p>
                  <p className="text-[11px] text-[#F5F0E8]/35 font-sans mb-4">{passer.class}</p>
                  <div className="flex items-center gap-2">
                    <span className="block w-4 h-px bg-[#C41E3A]" />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 font-sans">
                      November {passer.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">02</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Pride</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Our Pride &amp; Achievement
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Excellence in Education',
                desc: 'Our board passers are a testament to the quality of education and mentorship at Merryland. With an 85% pass rate, we consistently outperform national averages across multiple professional examinations.',
              },
              {
                title: 'Top Achievers',
                desc: 'Many of our passers rank among the top performers in their respective board exams. This achievement reflects not only student dedication but also our comprehensive curriculum and expert faculty guidance.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0E0E0E] border border-white/[0.05] border-l-[3px] border-l-[#C41E3A]/60 p-8">
                <h3 className="font-display text-2xl text-[#D4A853] font-semibold mb-4">{item.title}</h3>
                <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
