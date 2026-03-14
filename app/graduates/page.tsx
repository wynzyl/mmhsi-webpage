export default function Graduates() {
  const graduates = [
    { id: 1, name: 'Alex Torres', university: 'University of the Philippines Diliman', course: 'Computer Science', batch: 2023 },
    { id: 2, name: 'Jessica Reyes', university: 'Ateneo de Manila University', course: 'Business Administration', batch: 2023 },
    { id: 3, name: 'Marco Villanueva', university: 'De La Salle University', course: 'Civil Engineering', batch: 2023 },
    { id: 4, name: 'Sofia Mendez', university: 'University of Santo Tomas', course: 'Medicine', batch: 2023 },
    { id: 5, name: 'Ricardo Santos', university: 'Polytechnic University of the Philippines', course: 'Information Technology', batch: 2023 },
    { id: 6, name: 'Maria Cruz', university: 'Miriam College', course: 'Psychology', batch: 2023 },
    { id: 7, name: 'Daniel Lopez', university: 'Philippine Normal University', course: 'Education', batch: 2023 },
    { id: 8, name: 'Isabella Garcia', university: 'University of Asia and the Pacific', course: 'Economics', batch: 2023 },
    { id: 9, name: 'Thomas Rodriguez', university: 'Mapúa University', course: 'Mechanical Engineering', batch: 2022 },
    { id: 10, name: 'Amanda Fernandez', university: 'Far Eastern University', course: 'Architecture', batch: 2022 },
    { id: 11, name: 'Christopher Tan', university: 'University of the Philippines Los Baños', course: 'Agriculture', batch: 2022 },
    { id: 12, name: 'Michelle Wong', university: 'Chinese University of Hong Kong', course: 'Nursing', batch: 2022 },
  ];

  const stats = [
    { value: '98%', label: 'Graduates in Top Universities' },
    { value: '95%', label: 'Average College Admission Rate' },
    { value: '156', label: 'Scholarships Awarded' },
    { value: '24', label: 'International Placements' },
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

      {/* Page Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.04]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(196,30,58,0.12) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-5 h-px bg-[#C41E3A]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">Alumni</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-4">
            Our Graduates
          </h1>
          <p className="font-display text-xl italic text-[#F5F0E8]/45 font-light">
            Alumni thriving in top colleges and universities worldwide
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#161616] border-b border-white/[0.04] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
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

      {/* Graduates Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">01</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Recent Cohorts</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Class of 2022 &amp; 2023
              </h2>
            </div>
          </div>

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
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">02</span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">Success Factors</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Why Our Graduates Succeed
              </h2>
            </div>
          </div>

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
