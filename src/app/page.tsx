'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Testimonials from '@/components/Testimonials';
import EngagementModel from '@/components/EngagementModel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
  };

  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Testimonials />
      <EngagementModel onSelectTier={handleSelectTier} />
      <ContactSection preselectedTier={selectedTier} />
      <Footer />
    </main>
  );
}
