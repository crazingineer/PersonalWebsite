import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCover } from './components/HeroCover';
import { EnterpriseCaseStudies } from './components/EnterpriseCaseStudies';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { TechnicalProjects } from './components/TechnicalProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsGallery } from './components/CertificationsGallery';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleExploreCases = () => {
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090f] text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-black">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Narrative Flow */}
      <main className="flex-grow">
        
        {/* Hero Section & Professional Masthead */}
        <HeroCover 
          onExploreCases={handleExploreCases}
        />

        {/* Enterprise Case Studies & System Blueprints */}
        <EnterpriseCaseStudies />

        {/* Interactive Architecture Flow Simulator */}
        <ArchitectureDiagram />

        {/* Technical AI & Data Projects */}
        <TechnicalProjects />

        {/* Professional Experience & Academic Timeline */}
        <ExperienceTimeline />

        {/* 8x Microsoft Certifications Gallery */}
        <CertificationsGallery />

        {/* Technical Arsenal & Skills Matrix */}
        <SkillsMatrix />

        {/* Contact & Connect Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Official Resume PDF Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
};

export default App;
