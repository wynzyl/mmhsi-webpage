import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';

export default function DirectorsCorner() {
  const messages = [
    {
      number: '01',
      title: 'A Message of Excellence',
      date: 'March 14, 2026',
      body: [
        'Our commitment to educational excellence remains unwavering. We believe that every student has the potential to achieve great things, and our role is to unlock that potential through quality instruction, mentorship, and support. Our faculty and staff work tirelessly to create learning experiences that prepare our students not just for exams, but for life.',
        'The success of our board passers and the achievements of our graduates are testaments to the quality education we provide. As we look to the future, we remain focused on innovation, continuous improvement, and maintaining the highest standards of academic excellence.',
      ],
    },
    {
      number: '02',
      title: "Building Tomorrow's Leaders",
      date: 'March 1, 2026',
      body: [
        'At Merryland, we understand that education extends beyond the classroom. We are committed to developing well-rounded individuals who can think critically, communicate effectively, and make positive contributions to society. Our comprehensive programs in academics, sports, arts, and community service ensure that every student has the opportunity to discover and develop their talents.',
        'The facilities and resources available to our students are among the finest in the region. From modern laboratories and libraries to state-of-the-art sports facilities, we provide an environment conducive to learning and growth. We invite you to explore our campus and witness firsthand the quality of education we offer.',
      ],
    },
    {
      number: '03',
      title: 'Our Commitment to You',
      date: 'February 15, 2026',
      body: [
        'We recognize that parents and students are partners in the educational journey. We are committed to transparent communication, regular feedback, and collaborative problem-solving. Our doors are always open for discussions about student progress, concerns, and aspirations.',
        'Together, we can create an environment where every student thrives. I encourage you to stay connected with our school through our events, activities, and regular updates. Your feedback and involvement are invaluable to our continued success.',
      ],
    },
  ];

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      <PageHeader
        badge="Leadership"
        title="Director's Corner"
        subtitle="Insights and messages from our school leadership"
      />

      {/* Director Profile */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C41E3A] z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C41E3A] z-10" />
              <Image
                src="/director/director.jpg"
                alt="Director Dr. Rhodella Ulanday"
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Profile Info */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans mb-5">
                School Director
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight mb-2">
                Dr. Rhodella Ulanday
              </h2>
              <p className="text-[13px] text-[#D4A853] font-sans mb-6">
                Director, Merryland Montessori and High School, Inc.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#C41E3A] font-sans border border-[#C41E3A]/40 px-3 py-1">
                  5-Star FAPSA Award
                </span>
              </div>

              <p className="text-[13px] text-[#F5F0E8]/50 leading-loose font-sans">
                Welcome to our school community. As director, I am proud to lead an institution dedicated to excellence and the holistic development of every student. Our mission is to provide a nurturing environment where academic excellence, character development, and personal growth go hand in hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">
              Messages
            </span>
          </div>

          <div className="space-y-px bg-white/[0.04]">
            {messages.map((msg, i) => (
              <article key={i} className="bg-[#0E0E0E] p-10 border-l-[3px] border-l-[#C41E3A]/50">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="font-display text-sm text-[#C41E3A]/40 font-light">{msg.number}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#F5F0E8] leading-tight mt-1">
                      {msg.title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#D4A853]/50 tracking-widest uppercase font-sans flex-shrink-0 mt-2">
                    {msg.date}
                  </p>
                </div>
                <div className="space-y-4">
                  {msg.body.map((para, j) => (
                    <p key={j} className="text-[13px] text-[#F5F0E8]/50 leading-loose font-sans">
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#161616] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans mb-4">Open Door Policy</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-6">
            Questions or<br />
            <span className="italic">Feedback?</span>
          </h2>
          <p className="text-[13px] text-[#F5F0E8]/45 font-sans leading-relaxed mb-10 max-w-lg mx-auto">
            We&apos;d love to hear from you. Reach out to our administration office with any inquiries or concerns.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#A8182F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
