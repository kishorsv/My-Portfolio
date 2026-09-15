import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SelectedWorks } from './components/SelectedWorks';
import { WhatIBuild } from './components/WhatIBuild';
import { EngineeringJourney } from './components/EngineeringJourney';
import { Journal } from './components/Journal';
import { JournalModal } from './components/JournalModal';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { EducationAndGithub } from './components/EducationAndGithub';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import type { FeaturedProject } from './data/projects';
import type { JournalArticle } from './data/journal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Refresh GSAP ScrollTrigger once loader finishes
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-text-primary selection:bg-[#4E85BF]/30 selection:text-white relative overflow-x-hidden">
      {/* Desktop Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Ambient Film Grain Overlay */}
      <div className="film-grain-overlay pointer-events-none" />

      {/* Full-Screen Loading Experience (000 -> 100, 2700ms) */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Floating Glass Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Single-Page Portfolio Experience */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={scrollToProjects}
          onConnect={scrollToContact}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. Tech Stack (Skills Cloud) */}
        <Skills />

        {/* 4. Featured Projects (7 Best Builds) */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. AI / GenAI Focus (What I Build) */}
        <WhatIBuild />

        {/* 6. My Engineering Journey */}
        <EngineeringJourney />

        {/* 7. Editorial Journal */}
        <Journal onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 8. Certifications 🎓 */}
        <Certifications />

        {/* 9. Achievements */}
        <Achievements />

        {/* 10. Education & Developer Activity (GitHub) */}
        <EducationAndGithub />

        {/* 11. Resume Callout */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <JournalModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
