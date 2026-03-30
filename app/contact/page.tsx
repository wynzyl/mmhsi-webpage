'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const inputClass =
    'w-full bg-[#1A1A1A] border border-white/[0.08] text-[#F5F0E8] placeholder:text-[#F5F0E8]/20 px-4 py-3 text-[13px] font-sans outline-none focus:border-[#C41E3A]/60 focus:ring-0 transition-colors duration-200';

  return (
    <main className="flex flex-col bg-[#0E0E0E] text-[#F5F0E8] min-h-screen">

      <PageHeader
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Reach out to Merryland Montessori and High School"
      />

      {/* Contact Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans mb-4">
                  Contact Information
                </p>
                <h2 className="font-display text-3xl font-semibold text-[#F5F0E8] mb-4">
                  We&apos;re Here to Help
                </h2>
                <p className="text-[13px] text-[#F5F0E8]/45 font-sans leading-relaxed">
                  Reach out through any of the following channels. Our team is ready to assist you.
                </p>
              </div>

              {[
                {
                  label: 'Phone',
                  lines: ['(+63) 075 529 3482', 'Mon – Fri: 8:00 AM – 5:00 PM'],
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                },
                {
                  label: 'Email',
                  lines: ['merrylandmhsi@yahoo.com.ph'],
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: 'Address',
                  lines: ['San Vicente West', 'Urdaneta City, Pangasinan 2428'],
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
                {
                  label: 'Follow Us',
                  lines: ['Facebook · Twitter · Instagram'],
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 border border-[#C41E3A]/30 flex items-center justify-center text-[#C41E3A]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4A853]/70 font-sans mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-[13px] text-[#F5F0E8]/50 font-sans">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#161616] border border-white/[0.05] p-8 md:p-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4A853] font-sans mb-2">Send a Message</p>
                <h3 className="font-display text-3xl font-semibold text-[#F5F0E8] mb-8">
                  We&apos;d Love to Hear from You
                </h3>

                {submitted && (
                  <div className="bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] px-5 py-4 mb-8 text-[13px] font-sans">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 font-sans mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 font-sans mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 font-sans mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(+63) 123-456-7890"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 font-sans mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 font-sans mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.25em] uppercase font-sans font-medium hover:bg-[#A8182F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
