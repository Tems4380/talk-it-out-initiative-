/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhySection } from './components/WhySection';
import { WhatWeDo } from './components/WhatWeDo';
import { Experience } from './components/Experience';
import { Sessions } from './components/Sessions';
import { TopicsSection } from './components/TopicsSection';
import { ChallengeSection } from './components/ChallengeSection';
import { PodcastSection } from './components/PodcastSection';
import { QuestionBox } from './components/QuestionBox';
import { EventsSection } from './components/EventsSection';
import { AboutSection } from './components/AboutSection';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'join' | 'attend' | 'partner' | 'contact'>('join');

  const handleOpenJoin = (tab: 'join' | 'attend' | 'partner' | 'contact' = 'join') => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleExplore = () => {
    const el = document.querySelector('#why');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1B18] font-sans antialiased selection:bg-[#E05A2B] selection:text-white">
      {/* Sticky Header with Navigation */}
      <Navbar onOpenJoin={handleOpenJoin} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={() => handleOpenJoin('join')}
          onExploreClick={handleExplore}
        />

        {/* 2. Why Talk It Out? (The Communication Problem) */}
        <WhySection />

        {/* 3. What We Do (The 6 Pillars) */}
        <WhatWeDo />

        {/* 4. The Experience (Learn -> Practice -> Apply -> Reflect -> Grow) */}
        <Experience />

        {/* 5. Weekly Community Sessions (Church-based Interactive Gatherings) */}
        <Sessions onJoinSession={() => handleOpenJoin('attend')} />

        {/* 6. Dynamic Topics (12 Topics with Interactive Scenarios) */}
        <TopicsSection />

        {/* 7. The Talk It Out Challenge */}
        <ChallengeSection />

        {/* 8. Podcast & Media Voice */}
        <PodcastSection />

        {/* 9. Anonymous Question Box ("WHAT HAVE YOU BEEN TRYING TO SAY?") */}
        <QuestionBox />

        {/* 10. Events & Gatherings */}
        <EventsSection onRegisterEvent={(title) => handleOpenJoin('attend')} />

        {/* 11 & 12. About Talk It Out & Nuel Foundation */}
        <AboutSection />

        {/* 13. Join / Get Involved CTA Section */}
        <JoinSection onOpenJoin={handleOpenJoin} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Join & Engagement Multi-Tab Modal */}
      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={modalTab}
      />
    </div>
  );
}
