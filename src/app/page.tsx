'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import CursorGlow from '@/components/CursorGlow';
import Hero from '@/components/Hero';
import ProofMetrics from '@/components/ProofMetrics';
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
    <main className="relative min-h-screen bg-[#08090d] text-[#f4f4f6] selection:bg-[#d0ab86] selection:text-[#08090d]">
      <CursorGlow />
      <Navigation onOpenApplication={handleOpenApplication} />
      
      <Hero onOpenApplication={() => handleOpenApplication()} />
      <ProofMetrics />
      <CaseStudies onOpenApplication={() => handleOpenApplication()} />
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
