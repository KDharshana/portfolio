'use client';

import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />
      <div className="pt-4">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
