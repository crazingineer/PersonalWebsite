import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCover } from './components/HeroCover';
import { InteractiveTerminal } from './components/InteractiveTerminal';
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

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        onOpenTerminal={handleOpenTerminal}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Narrative Flow */}
      <main className="flex-grow">
        
        {/* Issue #01: Hero Cover & Production Masthead */}
        <HeroCover 
          onOpenTerminal={handleOpenTerminal}
          onExploreCases={handleExploreCases}
        />

        {/* Interactive CLI Console Deck */}
        <InteractiveTerminal />

        {/* Issue #02: Flagship Enterprise Case Studies & System Blueprints */}
        <EnterpriseCaseStudies />

        {/* Issue #02.5: Conceptual System Architecture Flow Simulator */}
        <ArchitectureDiagram />

        {/* Issue #03: Technical AI & ML Projects */}
        <TechnicalProjects />

        {/* Issue #04: Professional Chronicle (Experience & Education) */}
        <ExperienceTimeline />

        {/* Issue #05: 8x Microsoft Certifications Gallery */}
        <CertificationsGallery />

        {/* Issue #06: Technical Arsenal & Skills Matrix */}
        <SkillsMatrix />

        {/* Issue #07: Letters Page & Contact Desk */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Drawer / Print Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
};

export default App;
