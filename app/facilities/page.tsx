import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { SectionHeader } from '@/components/ui/section-header';
import { StatsBar } from '@/components/ui/stats-bar';

export default function Facilities() {
  const facilities = [
    {
      name: 'Modern Classrooms',
      description: 'Spacious, well-lit classrooms equipped with interactive whiteboards and modern learning technologies.',
      features: ['Interactive Technology', 'Natural Lighting', 'Air Conditioned', 'Multimedia Access'],
    },
    {
      name: 'Science Laboratories',
      description: 'State-of-the-art labs for physics, chemistry, and biology experiments with advanced equipment.',
      features: ['Advanced Equipment', 'Safety Standards', 'Digital Monitoring', 'Research Grade'],
    },
    {
      name: 'Computer Lab',
      description: 'Modern computer facility with high-speed internet, coding software, and multimedia tools.',
      features: ['High-Speed Internet', 'Latest Software', 'Server Infrastructure'],
    },
    {
      name: 'Library & Learning Center',
      description: 'Comprehensive library with physical and digital resources, quiet study areas, and computer stations.',
      features: ['50,000+ Books', 'Digital Database', 'Study Areas', 'WiFi Access'],
    },
    {
      name: 'Sports Complex',
      description: 'Complete athletic facilities including basketball courts, volleyball courts, badminton halls, and running tracks.',
      features: ['Olympic Standard', 'Multiple Courts', 'Gym Equipment', 'Training Area'],
    },
    {
      name: 'Auditorium',
      description: 'Large amphitheater for assemblies, presentations, cultural shows, and community events.',
      features: ['1,000 Capacity', 'Sound System', 'Professional Lighting', 'Stage Equipment'],
    },
    {
      name: 'Cafeteria',
      description: 'Modern dining facility serving nutritious meals with vegetarian and special diet options.',
      features: ['Hygienic Preparation', 'Varied Menu', 'Affordable Pricing'],
    },
    {
      name: 'Medical Clinic',
      description: 'On-campus health center with certified medical professionals for student wellness and emergencies.',
      features: ['24/7 Availability', 'First Aid', 'Health Counseling', 'Emergency Care'],
    },
  ];

  const highlights = [
    {
      title: 'Modern Infrastructure',
      desc: 'Our campus features contemporary buildings constructed with sustainable practices and modern architectural design ensuring comfort and efficiency.',
    },
    {
      title: 'Tech Integration',
      desc: 'Campus-wide WiFi, smart classrooms, and integrated technology systems support seamless teaching and learning experiences for all students.',
    },
    {
      title: 'Green Campus',
      desc: 'We maintain beautiful gardens, green spaces, and environmental initiatives that create a healthy and inspiring learning environment.',
    },
  ];

  const byNumbers = [
    { number: '15', label: 'Major Facilities' },
    { number: '50+', label: 'Classrooms' },
    { number: '8', label: 'Laboratories' },
    { number: '5', label: 'Sports Facilities' },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Campus"
        title="Our Facilities"
        subtitle="World-class infrastructure supporting excellence in education"
      />

      {/* Facilities Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" tag="Infrastructure" title="Campus Facilities" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {facilities.map((facility, i) => (
              <div
                key={i}
                className="relative bg-[#161616] border border-white/[0.05] p-8 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(196,30,58,0.08)] transition-all duration-300"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-transparent group-hover:bg-[#C41E3A] transition-colors duration-300" />
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4A853]/60 font-sans mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-3">{facility.name}</h3>
                <p className="text-[13px] text-[#F5F0E8]/45 leading-relaxed font-sans mb-5">
                  {facility.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature, j) => (
                    <span
                      key={j}
                      className="text-[10px] tracking-wide text-[#F5F0E8]/40 font-sans border border-white/[0.08] px-3 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" tag="Campus Life" title="Campus Highlights" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
            {highlights.map((item, i) => (
              <div key={i} className="bg-[#0E0E0E] p-10 group hover:bg-[#131313] transition-colors duration-300">
                <div className="font-display text-4xl font-light text-[#C41E3A] mb-5 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-3">{item.title}</h3>
                <p className="text-[13px] text-[#F5F0E8]/40 leading-relaxed font-sans">{item.desc}</p>
                <div className="mt-6 w-8 h-px bg-[#C41E3A] group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar stats={byNumbers} />

      {/* CTA */}
      <section className="bg-[#C41E3A] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 [background:linear-gradient(135deg,#A8182F_0%,#C41E3A_100%)]" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.04]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#F5F0E8] leading-tight mb-6">
            Experience Our<br />
            <span className="italic">Campus</span>
          </h2>
          <p className="text-[#F5F0E8]/65 mb-10 font-sans text-[14px] leading-relaxed max-w-xl mx-auto">
            We invite you to visit our campus and see firsthand the excellent facilities and learning environment we provide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-[#D4A853] text-[#D4A853] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#D4A853] hover:text-[#0E0E0E] transition-all duration-300"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>

    </main>
  );
}
