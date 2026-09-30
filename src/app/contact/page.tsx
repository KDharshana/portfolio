'use client';

import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />
      <div className="pt-4">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
