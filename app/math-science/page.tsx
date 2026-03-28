import Image from 'next/image';
import { db } from '@/db';
import { mathScience as mathScienceTable } from '@/db/schema';

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

      {/* Page Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.04]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(196,30,58,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-5 h-px bg-[#C41E3A]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">Academic Excellence</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
            Math &amp; Science<br />
            <span className="font-semibold">Achievements</span>
          </h1>
          <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
            Division Mathematics Festival 2026 — Excellence Recognized
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#161616] border-b border-white/[0.04] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center px-6 py-6 ${i < 2 ? 'border-r border-[#C41E3A]/15' : ''}`}>
              <div className="font-display text-4xl md:text-5xl font-light text-[#D4A853] mb-1 leading-none">
                {stat.number}
              </div>
              <div className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans mt-2">
                {stat.label}
              </div>
              <div className="text-[9px] text-[#F5F0E8]/20 font-sans mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">01</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Competition</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Division Mathematics Festival 2026
              </h2>
            </div>
          </div>
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
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">02</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Breakdown</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Competition Highlights
              </h2>
            </div>
          </div>

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

      {/* CTA */}
      <section className="bg-[#C41E3A] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 [background:linear-gradient(135deg,#A8182F_0%,#C41E3A_100%)]" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.04]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-6">
            Excellence in Mathematics<br />
            <span className="italic">&amp; Science</span>
          </h2>
          <p className="text-[#F5F0E8]/65 mb-10 font-sans text-[14px] leading-relaxed max-w-xl mx-auto">
            These achievements reflect our commitment to developing critical thinking, problem-solving skills, and a deep appreciation for mathematics and science in every student.
          </p>
          <div className="inline-block px-8 py-3 border border-[#F5F0E8]/30 text-[#F5F0E8]/80 text-[11px] tracking-[0.3em] uppercase font-sans">
            Merryland: Where Excellence Begins
          </div>
        </div>
      </section>

    </main>
  );
}
