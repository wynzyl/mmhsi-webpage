import Image from 'next/image';
import { db } from '@/db';
import { boardPassers as boardPassersTable } from '@/db/schema';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';

export const dynamic = 'force-dynamic';

export default async function BoardPassers() {
  const passers = await db.select().from(boardPassersTable).orderBy(boardPassersTable.id);

  const stats = [
    { number: '85%', label: 'Board Exam Pass Rate' },
    { number: '42', label: 'Passers This Year' },
    { number: '12', label: 'Top Performers' },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Achievement"
        title="Board Passers"
        subtitle="Celebrating our students who achieved excellence in their exams"
      />

      <StatsBar stats={stats} />

      {/* Passers Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" tag="November 2025" title="Board Passers Gallery" />

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
          <SectionHeader number="02" tag="Pride" title="Our Pride & Achievement" />

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
