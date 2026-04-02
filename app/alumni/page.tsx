import Link from 'next/link';
import { db } from '@/db';
import { alumni as alumniTable } from '@/db/schema';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';
import { CTASection } from '@/components/ui/cta-section';

export const dynamic = 'force-dynamic';

export default async function AlumniPage() {
  const successStories = await db.select().from(alumniTable).orderBy(alumniTable.id);

  const stats = [
    { number: '95%', label: 'College Enrollment Rate' },
    { number: '450+', label: 'Active Alumni' },
    { number: '50+', label: 'Universities Represented' },
    { number: '30+', label: 'Countries with Our Alumni' },
  ];

  const networkBenefits = [
    { title: 'Networking', desc: 'Connect with alumni and build meaningful professional relationships.' },
    { title: 'Mentoring', desc: 'Guide current students and share your expertise and experience.' },
    { title: 'Career Growth', desc: 'Access job opportunities and career development resources.' },
    { title: 'Lifelong Learning', desc: 'Participate in webinars, reunions, and development programs.' },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Alumni Network"
        title="Our Alumni"
        subtitle="Success Stories from Merryland Graduates"
      />

      <StatsBar stats={stats} />

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" tag="Recognition" title="Stories of Excellence" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {successStories.map((alumni, i) => (
              <div key={i} className="bg-[#161616] border border-white/[0.05] p-7 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.08)] transition-all duration-300 relative">
                <div className="absolute inset-y-0 left-0 w-[2px] bg-transparent group-hover:bg-[#C41E3A] transition-colors duration-300" />

                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#F5F0E8] leading-tight">{alumni.name}</h3>
                    <p className="text-[10px] text-[#C41E3A] tracking-widest uppercase font-sans mt-1">Class of {alumni.batch}</p>
                  </div>
                </div>

                <div className="bg-[#0E0E0E] border border-white/[0.05] p-4 mb-5">
                  <p className="text-[12px] font-semibold text-[#F5F0E8]/70 font-sans">{alumni.university}</p>
                  <p className="text-[11px] text-[#F5F0E8]/35 font-sans mt-1">{alumni.program}</p>
                </div>

                <div className="mb-5 pb-5 border-b border-white/[0.05]">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#D4A853]/70 font-sans mb-2">Achievement</p>
                  <p className="text-[12px] text-[#F5F0E8]/60 font-sans">{alumni.achievement}</p>
                </div>

                <p className="text-[12px] text-[#F5F0E8]/38 leading-relaxed font-sans">{alumni.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-5 h-px bg-[#C41E3A]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">02 — Network</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-8">
                Join Our<br />
                <span className="font-semibold">Alumni Network</span>
              </h2>
              <p className="text-[13px] text-[#F5F0E8]/50 leading-loose font-sans mb-5">
                Our alumni network is a vibrant community of successful professionals, entrepreneurs, and leaders who continue to make an impact in their respective fields.
              </p>
              <p className="text-[13px] text-[#F5F0E8]/50 leading-loose font-sans mb-10">
                Whether you&apos;re looking to reconnect with classmates, mentor current students, or explore career opportunities, our alumni network provides valuable connections.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#A8182F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
              >
                Connect with Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {networkBenefits.map((benefit, i) => (
                <div key={i} className="bg-[#0E0E0E] border border-white/[0.05] border-t-2 border-t-[#C41E3A]/40 p-6">
                  <h3 className="font-display text-lg font-semibold text-[#F5F0E8] mb-3">{benefit.title}</h3>
                  <p className="text-[12px] text-[#F5F0E8]/40 leading-relaxed font-sans">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={<>Be Part of Our<br /><span className="italic">Success Story</span></>}
        body="Apply to Merryland Montessori and High School today and start your journey toward excellence."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 border-2 border-[#D4A853] text-[#D4A853] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#D4A853] hover:text-[#0E0E0E] transition-all duration-300"
        >
          Learn More About Admissions
        </Link>
      </CTASection>

    </main>
  );
}
