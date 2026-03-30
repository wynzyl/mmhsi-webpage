import { db } from '@/db';
import { events as eventsTable } from '@/db/schema';

export const dynamic = 'force-dynamic';

export default async function IncomingEvents() {
  const events = await db.select().from(eventsTable).orderBy(eventsTable.id);

  const quickStats = [
    { value: String(events.length), label: 'Scheduled Events' },
    { value: '5', label: 'Categories' },
    { value: '75+', label: 'Expected Participants' },
    { value: 'Open', label: 'Registration Status' },
  ];

  const categories = [
    {
      title: 'Academic Events',
      desc: 'Competitions and fairs showcasing student excellence in academics, science, and mathematics.',
      items: ['Math and Science Olympiad', 'Science and Innovation Fair', 'Career Guidance Sessions'],
    },
    {
      title: 'Cultural Events',
      desc: 'Celebrations of student talent, creativity, and expression through various cultural activities.',
      items: ['School Press Conference', 'Art & Cultural Night', 'Talent Showcase'],
    },
    {
      title: 'Sports Events',
      desc: 'Competitive and recreational sports activities promoting fitness and school spirit.',
      items: ['Interscholastic Tournament', 'Sports Day Championships', 'Training Camps'],
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">Calendar</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
            Incoming Events
          </h1>
          <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
            Mark your calendars for exciting events at Merryland
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[#161616] border-b border-white/[0.04] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {quickStats.map((stat, i) => (
            <div key={i} className={`text-center px-6 py-6 ${i < 3 ? 'border-r border-[#C41E3A]/15' : ''}`}>
              <div className="font-display text-4xl md:text-5xl font-light text-[#D4A853] mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">01</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Schedule</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Scheduled Events
              </h2>
            </div>
          </div>

          <div className="space-y-px bg-white/[0.04]">
            {events.map((event, i) => (
              <div
                key={event.id}
                className="bg-[#0E0E0E] p-8 md:p-10 group hover:bg-[#131313] transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Date */}
                  <div className="flex-shrink-0 min-w-[100px]">
                    <p className="font-display text-lg text-[#D4A853] font-light leading-tight">
                      {event.date.split(',')[0]}
                    </p>
                    <p className="text-[10px] text-[#F5F0E8]/25 tracking-widest uppercase font-sans mt-1">
                      {event.date.includes(',') ? event.date.split(',')[1]?.trim() : '2026'}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[9px] tracking-[0.25em] uppercase text-[#C41E3A] font-sans border border-[#C41E3A]/30 px-2 py-0.5 mb-3 inline-block">
                          {event.category}
                        </span>
                        <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] leading-tight">
                          {event.title}
                        </h3>
                      </div>
                      <span className="font-display text-sm text-[#F5F0E8]/15 flex-shrink-0 hidden md:block">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans mb-5">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-[11px] font-sans">
                      <span className="text-[#F5F0E8]/35">
                        <span className="text-[#D4A853]/60 mr-2">Time</span>
                        {event.time}
                      </span>
                      <span className="text-[#F5F0E8]/35">
                        <span className="text-[#D4A853]/60 mr-2">Location</span>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">02</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Types</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Event Categories
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <div key={i} className="bg-[#0E0E0E] border border-white/[0.05] p-8">
                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-3">{cat.title}</h3>
                <p className="text-[13px] text-[#F5F0E8]/45 font-sans leading-relaxed mb-5">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[12px] text-[#F5F0E8]/35 font-sans">
                      <span className="block w-3 h-px bg-[#C41E3A]/50 flex-shrink-0" />
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
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#F5F0E8] leading-tight mb-6">
            Get<br />
            <span className="italic">Involved!</span>
          </h2>
          <p className="text-[#F5F0E8]/65 mb-10 font-sans text-[14px] leading-relaxed max-w-xl mx-auto">
            Students are encouraged to participate in these events. Registration details and schedules are available in the Student Affairs Office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#F5F0E8] text-[#0E0E0E] text-[11px] tracking-[0.25em] uppercase font-sans font-medium hover:bg-white transition-all duration-300">
              Register for Events
            </button>
            <button className="px-10 py-4 border-2 border-[#D4A853] text-[#D4A853] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#D4A853] hover:text-[#0E0E0E] transition-all duration-300">
              Download Calendar
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
