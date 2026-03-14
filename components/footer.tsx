'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t-2 border-[#C41E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-16">
          {/* About */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-display text-xl text-[#D4A853] mb-4 font-semibold">
              Merryland Montessori
            </h3>
            <p className="text-sm text-[#F5F0E8]/45 leading-relaxed font-sans mb-6">
              Where excellent foundation begins. Providing quality education and holistic
              development for students of all ages.
            </p>
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-[#C41E3A]" />
              <span className="text-[10px] text-[#D4A853] tracking-[0.25em] uppercase font-sans">
                Est. 2000
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-[#D4A853] mb-5 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/directors-corner', label: "Director's Corner" },
                { href: '/news', label: 'News & Updates' },
                { href: '/alumni', label: 'Alumni' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F0E8]/45 hover:text-[#D4A853] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-lg text-[#D4A853] mb-5 font-semibold">
              Explore
            </h4>
            <ul className="space-y-3 font-sans">
              {[
                { href: '/graduates', label: 'Graduates' },
                { href: '/board-passers', label: 'Board Passers' },
                { href: '/facilities', label: 'Facilities' },
                { href: '/activities', label: 'Activities' },
                { href: '/math-science', label: 'Math & Science' },
                { href: '/incoming-events', label: 'Incoming Events' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F0E8]/45 hover:text-[#D4A853] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-[#D4A853] mb-5 font-semibold">
              Contact Us
            </h4>
            <div className="space-y-4 font-sans">
              <div>
                <p className="text-[10px] text-[#D4A853]/60 tracking-widest uppercase mb-1">Email</p>
                <p className="text-sm text-[#F5F0E8]/45">merrylandmhsi@yahoo.com.ph</p>
              </div>
              <div>
                <p className="text-[10px] text-[#D4A853]/60 tracking-widest uppercase mb-1">Phone</p>
                <p className="text-sm text-[#F5F0E8]/45">(+63) 075-729-3482</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#F5F0E8]/25 font-sans">
            © {currentYear} Merryland Montessori and High School, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[#F5F0E8]/20 font-sans tracking-wider uppercase">
            Where Excellent Foundation Begins
          </p>
        </div>
      </div>
    </footer>
  );
}
