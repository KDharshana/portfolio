'use client';

import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />
      <div className="pt-4">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
