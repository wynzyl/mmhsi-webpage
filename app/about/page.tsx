import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';
import { CTASection } from '@/components/ui/cta-section';

export default function AboutPage() {
  const programs = [
    {
      label: 'Foundation',
      title: 'Montessori Program',
      description: 'Our specialized Montessori curriculum focuses on individual learning pace and hands-on exploration, fostering independence and critical thinking.',
    },
    {
      label: 'Academics',
      title: 'Academic Excellence',
      description: 'Rigorous curriculum aligned with national standards, preparing students for college entrance exams and future success.',
    },
    {
      label: 'Character',
      title: 'Character Development',
      description: 'Values-based education emphasizing integrity, respect, responsibility, and community service.',
    },
    {
      label: 'Growth',
      title: 'Holistic Development',
      description: 'Integration of arts, sports, and STEM programs to develop well-rounded individuals.',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '85%', label: 'Board Exam Pass Rate' },
    { number: '25+', label: 'Years of Excellence' },
    { number: '90%', label: 'College Placement Rate' },
  ];

  const coreValues = [
    { title: 'Excellence', description: 'We strive for academic and personal excellence in everything we do, setting high standards and continuously improving.' },
    { title: 'Integrity', description: 'We foster honesty, ethical behavior, and strong moral principles in all our actions and interactions.' },
    { title: 'Compassion', description: 'We nurture empathy, kindness, and understanding toward others, creating a supportive community.' },
    { title: 'Innovation', description: 'We embrace modern teaching methods and technologies to prepare students for an ever-changing world.' },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Our Story"
        title="About Our School"
        subtitle="Building Excellence, Creating Futures"
      />

      {/* School Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-5 h-px bg-[#C41E3A]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">01 — Overview</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-8">
                Merryland Montessori<br />
                <span className="font-semibold">and High School, Inc.</span>
              </h2>
              <p className="text-[13px] text-[#F5F0E8]/50 leading-loose font-sans mb-5">
                Founded on the principles of Dr. Maria Montessori and modern educational excellence, Merryland has been nurturing young minds for over two decades in Urdaneta City, Pangasinan.
              </p>
              <p className="text-[13px] text-[#F5F0E8]/50 leading-loose font-sans mb-10">
                Our mission is to provide a comprehensive education that develops not only academic excellence but also character, creativity, and critical thinking skills — an environment where every child can thrive.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#A8182F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
              >
                Get In Touch
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-[#C41E3A]/10 blur-2xl" />
                <Image
                  src="/logo.jpg"
                  alt="Merryland Montessori and High School Logo"
                  width={280}
                  height={280}
                  className="relative w-56 h-56 md:w-72 md:h-72 rounded-full ring-2 ring-[#C41E3A]/40 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar stats={achievements} />

      {/* Programs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" tag="Academic Programs" title="Our Programs" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {programs.map((program, i) => (
              <div
                key={i}
                className="relative bg-[#161616] border border-white/[0.05] p-8 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.08)] transition-all duration-300"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-transparent group-hover:bg-[#C41E3A] transition-colors duration-300" />
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4A853]/60 font-sans mb-3">{program.label}</p>
                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-4">{program.title}</h3>
                <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="03" tag="Principles" title="Our Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-[#0E0E0E] border border-white/[0.05] border-l-[3px] border-l-[#C41E3A]/60 p-8">
                <h3 className="font-display text-2xl text-[#D4A853] font-semibold mb-4">{value.title}</h3>
                <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Ready to Join Our<br /><span className="italic">Community?</span></>}
        body="Discover how Merryland Montessori and High School can help your child thrive academically and personally."
      >
        <Link
          href="/incoming-events"
          className="inline-flex items-center justify-center px-9 py-4 bg-[#F5F0E8] text-[#0E0E0E] text-[11px] tracking-[0.25em] uppercase font-sans font-medium hover:bg-white transition-all duration-300"
        >
          Explore Events
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-9 py-4 border-2 border-[#D4A853] text-[#D4A853] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#D4A853] hover:text-[#0E0E0E] transition-all duration-300"
        >
          Contact Us
        </Link>
      </CTASection>

    </main>
  );
}
