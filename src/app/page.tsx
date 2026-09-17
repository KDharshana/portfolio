'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import Capabilities from '@/components/Capabilities';
import EngagementModel from '@/components/EngagementModel';
import Footer from '@/components/Footer';
import ApplicationModal from '@/components/ApplicationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenApplication = (preselectedTier?: string) => {
    setSelectedTier(preselectedTier);
    setIsModalOpen(true);
  };

  const handleCloseApplication = () => {
    setIsModalOpen(false);
    setSelectedTier(undefined);
  };

  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation onOpenApplication={() => handleOpenApplication()} />
      <Hero onOpenApplication={() => handleOpenApplication()} />
      <CaseStudies onOpenApplication={handleOpenApplication} />
      <Capabilities onOpenApplication={() => handleOpenApplication()} />
      <EngagementModel onOpenApplication={handleOpenApplication} />
      <Footer onOpenApplication={() => handleOpenApplication()} />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseApplication}
        preselectedTier={selectedTier}
      />
    </main>
  );
}
