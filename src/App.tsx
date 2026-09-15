import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { ProjectModal } from './components/ProjectModal';
import { Journal } from './components/Journal';
import { JournalModal } from './components/JournalModal';
import { Explorations } from './components/Explorations';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import type { Project } from './data/projects';
import type { JournalArticle } from './data/journal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const scrollToWork = () => {
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-[#4E85BF]/30 selection:text-white relative">
      {/* Full-Screen Loading Experience (000 -> 100, Build/Create/Imagine, 2700ms) */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Floating Glass Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Single-Page Portfolio Experience */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section with HLS Video & GSAP Entrance */}
        <Hero
          onExploreWork={scrollToWork}
          onConnect={scrollToContact}
        />

        {/* Selected Works: Bento Grid Showcase */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* Explorations: GSAP Pinned Center & Parallax Gallery */}
        <Explorations />

        {/* Journal: Editorial Thoughts */}
        <Journal onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* Stats: Minimal Count-Up Statistics */}
        <Stats />

        {/* About: Editorial Statement & Engineering Pillars */}
        <About />

        {/* Contact: Flipped HLS Video & GSAP Infinite Marquee */}
        <Contact />
      </main>

      {/* Footer Bar with Social Links & Pulsing Availability Indicator */}
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
