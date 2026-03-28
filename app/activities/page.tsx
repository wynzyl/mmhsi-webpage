import { db } from '@/db';
import { activities as activitiesTable } from '@/db/schema';

export default async function Activities() {
  const activities = await db.select().from(activitiesTable).orderBy(activitiesTable.id);

  const categories = [
    { name: 'Press Conference', count: '2' },
    { name: 'Sports', count: '4' },
    { name: 'Math & Science', count: '5' },
    { name: 'Events', count: '3' },
  ];

  const whyMatters = [
    { title: 'Character Development', desc: 'Through competitions and activities, students build confidence, resilience, and leadership skills essential for personal and professional success.' },
    { title: 'Teamwork & Collaboration', desc: 'Sports and group activities foster collaboration, communication, and mutual support among students from different grades and backgrounds.' },
    { title: 'Excellence & Achievement', desc: 'Competitions challenge students to excel, discover their talents, and achieve recognition for their hard-earned accomplishments.' },
    { title: 'Holistic Education', desc: 'Beyond academics, these activities provide balanced development combining mental, physical, and social growth opportunities.' },
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">Campus Life</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
            School Activities
          </h1>
          <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
            Showcasing talent, excellence, and school spirit
          </p>
        </div>
      </section>

      {/* Category Stats */}
      <section className="bg-[#161616] border-b border-white/[0.04] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {categories.map((cat, i) => (
            <div key={i} className={`text-center px-6 py-6 ${i < 3 ? 'border-r border-[#C41E3A]/15' : ''}`}>
              <div className="font-display text-4xl md:text-5xl font-light text-[#D4A853] mb-2 leading-none">
                {cat.count}
              </div>
              <div className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">01</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Schedule</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Upcoming Activities
              </h2>
            </div>
          </div>

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
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">02</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Purpose</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Why These Activities Matter
              </h2>
            </div>
          </div>
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
