/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project } from './types';
import { AmbientBackground3D } from './components/AmbientBackground3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { DataScienceProjects } from './components/DataScienceProjects';
import { FullStackProjects } from './components/FullStackProjects';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenResume = () => {
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* 3D Ambient Particle Constellation */}
      <AmbientBackground3D />

      {/* Floating 3-Zone Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Interactive 3D Holographic Core */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Me Section with Portrait, Stats & Disciplines */}
        <About />

        {/* Skills Matrix (Data Science, Full Stack, Data Visualization) */}
        <SkillsSection />

        {/* Data Science & ML Projects (5 Projects) */}
        <DataScienceProjects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Full Stack Projects (5 Projects) */}
        <FullStackProjects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Professional Experience (Unified Mentor 6-Month Internship Timeline) */}
        <ExperienceSection />

        {/* Certifications Gallery (10 Verified Credentials) */}
        <CertificationsSection />

        {/* Major Achievements (3 Key Verified Milestones) */}
        <AchievementsSection />

        {/* Executive Resume Dossier & PDF Download */}
        <ResumeSection />

        {/* Direct Inquiries & Contact Section */}
        <ContactSection />
      </main>

      {/* Minimalist Footing */}
      <Footer />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
