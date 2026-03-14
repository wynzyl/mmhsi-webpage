import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8]">

      {/* ══════════════════════════════════════════
          1. HERO — Full Viewport
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0E0E0E]" />

        {/* Animated crimson gradient bloom */}
        <div
          className="absolute inset-0 animate-gradient-drift pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 50% -5%, rgba(196,30,58,0.22) 0%, transparent 65%)',
          }}
        />

        {/* Secondary gold ambient */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '60%',
            right: '15%',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">

          {/* Est. Badge */}
          <div
            className="inline-flex items-center gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="h-px w-8 bg-[#D4A853]/60" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4A853] font-sans font-light">
              Est. 2000
            </span>
            <span className="h-px w-8 bg-[#D4A853]/60" />
          </div>

          {/* Logo with crimson ring glow */}
          <div
            className="mb-10 flex justify-center animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full animate-glow-pulse" />
              <Image
                src="/logo.jpg"
                alt="Merryland Montessori and High School Logo"
                width={140}
                height={140}
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full ring-2 ring-[#C41E3A]/70 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* School Name */}
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F5F0E8] leading-[0.92] tracking-tight mb-2 animate-fade-in-up"
            style={{ animationDelay: '0.25s' }}
          >
            Merryland Montessori
            <br />
            <span className="font-semibold">&amp; High School</span>
          </h1>

          {/* Tagline with crimson rule */}
          <div
            className="flex items-center justify-center gap-4 my-8 animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            <span className="h-px flex-1 max-w-[60px] bg-[#C41E3A]/70" />
            <p className="font-display text-lg md:text-2xl italic text-[#F5F0E8]/60 font-light tracking-wide">
              Where Excellent Foundation Begins
            </p>
            <span className="h-px flex-1 max-w-[60px] bg-[#C41E3A]/70" />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up"
            style={{ animationDelay: '0.45s' }}
          >
            <Link
              href="/incoming-events"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.25em] uppercase font-sans font-medium transition-all duration-300 hover:bg-[#A8182F] hover:shadow-[0_0_35px_rgba(196,30,58,0.45)]"
            >
              Upcoming Events
            </Link>
            <Link
              href="/directors-corner"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-[#D4A853]/50 text-[#D4A853] text-[11px] tracking-[0.25em] uppercase font-sans font-medium transition-all duration-300 hover:bg-[#D4A853]/10 hover:border-[#D4A853]"
            >
              Director&apos;s Message
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-slow-bounce opacity-30">
          <svg
            className="w-5 h-8 text-[#F5F0E8]"
            fill="none"
            viewBox="0 0 20 32"
            stroke="currentColor"
            strokeWidth={1}
          >
            <rect x="1" y="1" width="18" height="30" rx="9" strokeOpacity="0.5" />
            <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════ */}
      <section className="bg-[#161616] border-y border-white/[0.04] py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { number: '26+', label: 'Years of Excellence' },
            { number: '600+', label: 'Students Enrolled' },
            { number: '3,000+', label: 'Board Passers' },
            { number: '5,000+', label: 'Graduates' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center px-6 py-6 ${
                i < 3 ? 'border-r border-[#C41E3A]/15' : ''
              }`}
            >
              <div className="font-display text-4xl md:text-5xl font-light text-[#D4A853] mb-2 leading-none">
                {stat.number}
              </div>
              <div className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. WHAT WE OFFER — Cards
      ══════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">
              01
            </span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">
                Our Programs
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                What We Offer
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                href: '/board-passers',
                label: 'Achievement',
                title: 'Board Passers',
                desc: 'Celebrating students who passed board exams with distinction and honor.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                href: '/graduates',
                label: 'Alumni',
                title: 'Graduates',
                desc: 'Our alumni thriving in top colleges and universities worldwide.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
              },
              {
                href: '/activities',
                label: 'Campus Life',
                title: 'Activities',
                desc: 'Sports, competitions, and events showcasing our students\' diverse talents.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                href: '/facilities',
                label: 'Campus',
                title: 'Facilities',
                desc: 'Modern infrastructure designed to support quality education and growth.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group block">
                <div className="relative bg-[#161616] border border-white/[0.05] p-7 h-full transition-all duration-350 group-hover:shadow-[0_0_40px_rgba(196,30,58,0.08)] group-hover:-translate-y-1">
                  {/* Left border accent on hover */}
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-transparent group-hover:bg-[#C41E3A] transition-colors duration-300" />

                  {/* Icon */}
                  <div className="text-[#D4A853] mb-5">{card.icon}</div>

                  {/* Label */}
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4A853]/60 font-sans mb-2">
                    {card.label}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#F5F0E8]/38 leading-relaxed font-sans">
                    {card.desc}
                  </p>

                  {/* Explore arrow */}
                  <div className="mt-7 flex items-center gap-2 text-[#C41E3A] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-sans">Explore</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. DIRECTOR'S CORNER
      ══════════════════════════════════════════ */}
      <section className="bg-[#121212] py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-0 items-center">

            {/* Text */}
            <div className="lg:pr-20">
              <div className="flex items-center gap-3 mb-10">
                <span className="block w-5 h-px bg-[#C41E3A]" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans">
                  02 — Director&apos;s Corner
                </p>
              </div>

              {/* Pull Quote */}
              <div className="relative mb-8">
                <span
                  className="absolute -top-8 -left-3 font-display font-bold text-[#C41E3A]/12 select-none leading-none"
                  style={{ fontSize: '160px' }}
                >
                  &ldquo;
                </span>
                <blockquote className="relative font-display text-3xl md:text-4xl font-light italic text-[#F5F0E8]/85 leading-[1.35]">
                  Welcome to Merryland, where we are committed to providing an excellent
                  foundation for every student who walks through our doors.
                </blockquote>
              </div>

              <p className="text-[13px] text-[#F5F0E8]/45 leading-loose font-sans mb-10">
                Our dedicated team works tirelessly to create a nurturing environment where
                every child can thrive, grow intellectually, and reach their full potential.
                Excellence is not just our promise — it is our commitment.
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4 mb-10">
                <span className="block w-10 h-px bg-[#C41E3A]" />
                <div>
                  <p className="font-display text-lg text-[#D4A853] font-semibold leading-tight">
                    Dr. Rhodella Ulanday
                  </p>
                  <p className="text-[9px] text-[#F5F0E8]/35 tracking-[0.25em] uppercase font-sans mt-0.5">
                    School Director
                  </p>
                </div>
              </div>

              <Link
                href="/directors-corner"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans text-[#F5F0E8]/60 hover:text-[#D4A853] border-b border-[#F5F0E8]/15 hover:border-[#D4A853] pb-1 transition-all duration-300"
              >
                Read Full Message
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '600px' }}>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#C41E3A] z-10" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#C41E3A] z-10" />

                <Image
                  src="/director/director-front.jpg"
                  alt="Director Dr. Rhodella Ulanday"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. ACHIEVEMENTS HIGHLIGHT
      ══════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="font-display text-7xl font-light text-[#C41E3A]/15 leading-none select-none mt-1">
              03
            </span>
            <div>
              <p className="text-[10px] text-[#D4A853] tracking-[0.3em] uppercase font-sans mb-2">
                Recognition
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#F5F0E8] leading-tight">
                Our Achievements
              </h2>
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
            {[
              {
                number: '500+',
                title: 'Board Passers',
                desc: 'Licensed professionals who passed their respective board examinations with distinction.',
              },
              {
                number: '200+',
                title: 'Top Graduates',
                desc: 'Students who graduated with academic honors and represented the school\'s standard of excellence.',
              },
              {
                number: '50+',
                title: 'Championships',
                desc: 'Regional and national awards earned in academics, sports, and the performing arts.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0E0E0E] p-10 relative group hover:bg-[#131313] transition-colors duration-400"
              >
                {/* Index label */}
                <div className="absolute top-10 right-10 opacity-20">
                  <span className="font-display text-sm text-[#F5F0E8] tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="font-display text-6xl md:text-7xl font-light text-[#C41E3A] mb-5 leading-none">
                  {item.number}
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#F5F0E8] mb-3">
                  {item.title}
                </h3>

                <p className="text-[13px] text-[#F5F0E8]/38 leading-relaxed font-sans">
                  {item.desc}
                </p>

                <div className="mt-8 w-8 h-px bg-[#C41E3A] group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CALL TO ACTION
      ══════════════════════════════════════════ */}
      <section className="bg-[#C41E3A] py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative shapes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, #A8182F 0%, #C41E3A 50%, #D42545 100%)',
          }}
        />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/[0.04] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-black/10 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[9px] tracking-[0.45em] uppercase text-[#F5F0E8]/60 font-sans mb-6">
            Begin Your Journey
          </p>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[0.95] mb-6">
            Excellence
            <br />
            <span className="italic font-light">Starts Here</span>
          </h2>

          <p className="text-[#F5F0E8]/65 mb-12 font-sans leading-relaxed max-w-xl mx-auto text-[14px]">
            Experience a distinguished education that prepares students for success in every
            aspect of life. Your story begins at Merryland.
          </p>

          <Link
            href="/incoming-events"
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-[#D4A853] text-[#D4A853] text-[11px] tracking-[0.25em] uppercase font-sans font-medium hover:bg-[#D4A853] hover:text-[#0E0E0E] transition-all duration-300"
          >
            Explore Events
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
