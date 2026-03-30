import { db } from '@/db';
import { graduates as graduatesTable } from '@/db/schema';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';

export const dynamic = 'force-dynamic';

export default async function Graduates() {
  const graduates = await db.select().from(graduatesTable).orderBy(graduatesTable.id);

  const stats = [
    { number: '98%', label: 'Graduates in Top Universities' },
    { number: '95%', label: 'Average College Admission Rate' },
    { number: '156', label: 'Scholarships Awarded' },
    { number: '24', label: 'International Placements' },
  ];

  const reasons = [
    {
      title: 'Academic Excellence',
      desc: 'Our rigorous curriculum prepares students for university-level coursework. Strong foundational knowledge and critical thinking skills enable our graduates to excel in their chosen fields.',
    },
    {
      title: 'Holistic Development',
      desc: "Beyond academics, we develop well-rounded individuals through sports, arts, leadership, and community service. These experiences shape character and prepare graduates for life's challenges.",
    },
    {
      title: 'Strong Support System',
      desc: 'Our dedicated faculty, counselors, and mentors provide personalized guidance throughout each student\'s journey. We invest in every individual\'s success and growth.',
    },
    {
      title: 'University Preparedness',
      desc: 'Our college preparation programs help students navigate the university application process and excel in entrance exams, resulting in placements in the country\'s top institutions.',
    },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Alumni"
        title="Our Graduates"
        subtitle="Alumni thriving in top colleges and universities worldwide"
      />

      <StatsBar stats={stats} />

      {/* Graduates Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" tag="Recent Cohorts" title="Class of 2022 & 2023" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {graduates.map((graduate, i) => (
              <div
                key={graduate.id}
                className="bg-[#161616] border border-white/[0.05] overflow-hidden group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.08)] transition-all duration-300 relative"
              >
                {/* Top accent */}
                <div className="h-[2px] bg-[#C41E3A]/20 group-hover:bg-[#C41E3A]/60 transition-colors duration-300" />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#F5F0E8] leading-tight">
                        {graduate.name}
                      </h3>
                      <p className="text-[10px] text-[#C41E3A] tracking-widest uppercase font-sans mt-1">
                        Batch {graduate.batch}
                      </p>
                    </div>
                    <span className="font-display text-sm text-[#F5F0E8]/15 font-light flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] space-y-1">
                    <p className="text-[12px] text-[#D4A853]/80 font-sans font-medium">{graduate.university}</p>
                    <p className="text-[11px] text-[#F5F0E8]/35 font-sans">{graduate.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why They Succeed */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader number="02" tag="Success Factors" title="Why Our Graduates Succeed" />

          <div className="space-y-px bg-white/[0.04]">
            {reasons.map((item, i) => (
              <div key={i} className="bg-[#0E0E0E] p-8 md:p-10 flex gap-8 items-start">
                <span className="font-display text-3xl font-light text-[#C41E3A]/30 flex-shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-3">{item.title}</h3>
                  <p className="text-[13px] text-[#F5F0E8]/45 leading-loose font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
