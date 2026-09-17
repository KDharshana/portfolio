'use client';

import Image from 'next/image';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Project', id: 'project' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white pt-20 pb-16 px-4 text-center border-t border-black/10">
      <div className="max-w-[760px] mx-auto flex flex-col items-center justify-center">
        {/* Call to action heading */}
        <h3 className="font-sans text-xl sm:text-2xl text-black font-normal mb-6">
          Interested in discussing an engineering internship or project?
        </h3>

        {/* Rotated Hire Me! Button */}
        <button
          onClick={() => scrollTo('contact')}
          className="inline-block bg-black text-white px-9 py-4 rounded-[22px] font-sans font-bold text-lg -rotate-2 hover:rotate-0 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-black/15 mb-10 cursor-pointer border-none"
        >
          Hire Me!
        </button>

        {/* Hand-drawn Social Doodles */}
        <div className="w-[260px] max-w-full h-auto mb-10 mx-auto flex items-center justify-center">
          <Image
            src="/images/social-doodles.png"
            alt="Social doodles: butterfly, linkedin sticky note, paper airplane"
            width={260}
            height={64}
            className="w-[260px] max-w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Quick Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm font-medium text-black">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:underline underline-offset-4 text-[#424242] hover:text-black transition-colors cursor-pointer bg-transparent border-none p-0 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Copyright notice */}
        <div className="text-xs sm:text-sm text-black/80 font-normal leading-relaxed border-t border-black/10 pt-8 w-full">
          <p>All content © Dharshana. 3rd Year Computer Science Undergrad @ Cardiff University.</p>
          <p className="mt-1 text-xs text-[#7f7f7f] font-mono">
            Distributed Systems • Full-Stack Web • Applied AI • Seeking SWE Internships
          </p>
        </div>
      </div>
    </footer>
  );
}
