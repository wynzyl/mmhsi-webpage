import { db } from '@/db';
import { activities as activitiesTable } from '@/db/schema';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';

export const dynamic = 'force-dynamic';

export default async function Activities() {
  const activities = await db.select().from(activitiesTable).orderBy(activitiesTable.id);

  const categories = [
    { number: '2', label: 'Press Conference' },
    { number: '4', label: 'Sports' },
    { number: '5', label: 'Math & Science' },
    { number: '3', label: 'Events' },
  ];

  const whyMatters = [
    { title: 'Character Development', desc: 'Through competitions and activities, students build confidence, resilience, and leadership skills essential for personal and professional success.' },
    { title: 'Teamwork & Collaboration', desc: 'Sports and group activities foster collaboration, communication, and mutual support among students from different grades and backgrounds.' },
    { title: 'Excellence & Achievement', desc: 'Competitions challenge students to excel, discover their talents, and achieve recognition for their hard-earned accomplishments.' },
    { title: 'Holistic Education', desc: 'Beyond academics, these activities provide balanced development combining mental, physical, and social growth opportunities.' },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Campus Life"
        title="School Activities"
        subtitle="Showcasing talent, excellence, and school spirit"
      />

      <StatsBar stats={categories} />

      {/* Activities List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" tag="Schedule" title="Upcoming Activities" />

          <div className="space-y-px bg-white/[0.04]">
            {activities.map((activity, i) => (
              <div key={activity.id} className="bg-[#0E0E0E] p-8 md:p-10 group hover:bg-[#131313] transition-colors duration-300 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Date block */}
                <div className="flex-shrink-0 min-w-[120px]">
                  <p className="font-display text-lg text-[#D4A853] font-light leading-tight">
                    {activity.date.split(',')[0]}
                  </p>
                  <p className="text-[10px] text-[#F5F0E8]/30 tracking-widest uppercase font-sans mt-1">
                    {activity.date.split(',')[1]?.trim()}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[#C41E3A] font-sans border border-[#C41E3A]/30 px-2 py-0.5">
                      {activity.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#F5F0E8] mb-3 leading-tight">
                    {activity.title}
                  </h3>
                  <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans">
                    {activity.description}
                  </p>
                </div>

                {/* Index */}
                <div className="hidden md:block flex-shrink-0 opacity-15">
                  <span className="font-display text-sm text-[#F5F0E8] tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" tag="Purpose" title="Why These Activities Matter" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyMatters.map((item, i) => (
              <div key={i} className="relative bg-[#0E0E0E] border border-white/[0.05] p-8 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.08)] transition-all duration-300">
                <div className="absolute inset-y-0 left-0 w-[2px] bg-transparent group-hover:bg-[#C41E3A] transition-colors duration-300" />
                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-4">{item.title}</h3>
                <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
