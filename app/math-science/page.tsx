import Image from 'next/image';
import { db } from '@/db';
import { mathScience as mathScienceTable } from '@/db/schema';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';
import { CTASection } from '@/components/ui/cta-section';

export const dynamic = 'force-dynamic';

export default async function MathScience() {
  const achievements = await db.select().from(mathScienceTable).orderBy(mathScienceTable.id);

  const stats = [
    { number: '6', label: 'Total Winners', sub: '2026 Academic Year' },
    { number: '3', label: 'Third Place Awards', sub: 'Excellence Recognized' },
    { number: '100%', label: 'Student Dedication', sub: 'Commitment to Excellence' },
  ];

  const highlights = [
    {
      title: 'Quiz Bee',
      items: [
        'Multiple divisions across elementary and secondary levels',
        'Both individual and group category competitions',
        'Tests mathematical knowledge and quick thinking',
        '4 awards achieved by our students',
      ],
    },
    {
      title: 'Speed Solving',
      items: [
        "Rubik's Cube 3x3 solving competitions",
        'Tests spatial reasoning and coordination',
        'Combines mathematics with practical problem-solving',
        '1 award achieved by our student',
      ],
    },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Academic Excellence"
        title={<>Math &amp; Science<br /><span className="font-semibold">Achievements</span></>}
        subtitle="Division Mathematics Festival 2026 — Excellence Recognized"
      />

      <StatsBar stats={stats} />

      {/* Achievements Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" tag="Competition" title="Division Mathematics Festival 2026" mb="mb-6" />
          <p className="text-[13px] text-[#F5F0E8]/40 font-sans leading-relaxed mb-14 max-w-2xl ml-[calc(3.5rem+1.5rem)]">
            Our talented students demonstrated exceptional problem-solving skills and mathematical prowess, earning multiple awards across different categories and levels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-[#161616] border border-white/[0.05] overflow-hidden group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.1)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-[#C41E3A] z-10" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#C41E3A] font-sans border border-[#C41E3A]/30 px-2 py-0.5">
                      {item.category}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#D4A853] font-sans border border-[#D4A853]/30 px-2 py-0.5">
                      {item.award}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#F5F0E8] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#D4A853]/70 font-sans mb-3 leading-snug">
                    {item.participants}
                  </p>
                  <div className="flex gap-4 text-[10px] text-[#F5F0E8]/30 font-sans">
                    <span>{item.level}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" tag="Breakdown" title="Competition Highlights" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {highlights.map((section, i) => (
              <div key={i} className="bg-[#0E0E0E] border border-white/[0.05] border-l-[3px] border-l-[#C41E3A]/60 p-8">
                <h3 className="font-display text-2xl text-[#D4A853] font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-[#F5F0E8]/45 font-sans leading-relaxed">
                      <span className="block w-3 h-px bg-[#C41E3A]/50 flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Excellence in Mathematics<br /><span className="italic">&amp; Science</span></>}
        body="These achievements reflect our commitment to developing critical thinking, problem-solving skills, and a deep appreciation for mathematics and science in every student."
      >
        <div className="inline-block px-8 py-3 border border-[#F5F0E8]/30 text-[#F5F0E8]/80 text-[11px] tracking-[0.3em] uppercase font-sans">
          Merryland: Where Excellence Begins
        </div>
      </CTASection>

    </main>
  );
}
